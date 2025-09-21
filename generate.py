import os
import toml
import shutil
from jinja2 import Environment, FileSystemLoader
import datetime
import subprocess
import pytz

# 定义函数：从文件夹读取所有的 toml 文件
def load_toml_files_from_folder(folder):
    books = []
    for filename in os.listdir(folder):
        if filename.endswith(".toml"):
            file_path = os.path.join(folder, filename)

            # 读取 TOML 文件
            with open(file_path, 'r', encoding='utf-8') as f:
                data = toml.load(f)
                # 假设每个 TOML 文件只包含一个 'book' 表
                if 'book' in data:
                    book = data['book']
                    book_title = book.get('title', None)
                    if book_title:
                        # 构建 print.html 的路径
                        book_folder = os.path.join("book", book_title)
                        print_html_path = os.path.join(book_folder, 'print.html')

                        # 确保 print.html 文件存在
                        if os.path.exists(print_html_path):
                            # 获取 print.html 文件的最后修改时间
                            last_updated = get_git_commit_time(print_html_path)
                            # 将时间戳添加到书籍数据中
                            book['last_updated'] = last_updated
                            books.append(book)
                        else:
                            print(f"Warning: print.html not found for book '{book_title}' in {book_folder}. Skipping.")
                    else:
                        print(f"Warning: No 'title' key found for book in {filename}. Skipping.")
                else:
                    print(f"Warning: No 'book' key found in {filename}. Skipping file.")
    return books

# 获取文件的 Git 提交时间戳
def get_git_commit_time(file_path):
    try:
        # 使用 git log 获取文件的最后提交时间，带有时区信息
        result = subprocess.run(
            ['git', 'log', '-1', '--format=%ad', '--date=iso', '--', file_path],
            capture_output=True, text=True, check=True
        )
        commit_time_str = result.stdout.strip()
        print(f"Commit time string: {commit_time_str}")  # 调试输出查看日期字符串

        # 将提交时间字符串转换为 datetime 对象（带时区信息）
        commit_time = datetime.datetime.fromisoformat(commit_time_str)

        # 将时间转换为 UTC+8 时区（北京时间）
        utc_plus_8 = pytz.timezone('Asia/Shanghai')
        commit_time_utc8 = commit_time.astimezone(utc_plus_8)

        return commit_time_utc8
    except subprocess.CalledProcessError as e:
        print(f"Error retrieving Git commit time for {file_path}: {e}")
        return None  # 如果无法获取时间，则返回 None

# 定义一个自定义过滤器，将时间戳转换为可读日期
def datetimeformat(value):
    # 确保 value 是一个 datetime 对象，并且包含时区信息
    if isinstance(value, datetime.datetime):
        # 格式化日期时间，包括时区偏移
        return value.strftime('%Y-%m-%d %H:%M:%S %Z%z')  # 输出: 2025-09-21 14:30:00 UTC+0200
    return value  # 如果不是 datetime 对象，返回原始值

# 定义函数：生成书籍的索引页面
def generate_index_page(books, output_folder):
    # 创建一个模板引擎对象
    env = Environment(loader=FileSystemLoader('templates'))
    env.filters['datetimeformat'] = datetimeformat  # 注册过滤器

    try:
        template = env.get_template('index_template.html')
    except Exception as e:
        print(f"Error loading template: {e}")
        return

    # 替换书名中的空格为连字符
    for book in books:
        book_title = book.get('title', '')
        if book_title:
            book['url_title'] = book_title.replace(' ', '-')

    # 渲染模板，并生成 HTML 内容
    html_content = template.render(books=books)

    # 创建输出文件夹
    os.makedirs(output_folder, exist_ok=True)

    # 将生成的 HTML 写入到文件中
    with open(os.path.join(output_folder, 'index.html'), 'w', encoding='utf-8') as f:
        f.write(html_content)

# 定义函数：将每个书籍的文件夹复制到 output 目录
def copy_book_folders(books, source_folder, output_folder):
    for book in books:
        book_title = book.get('title')
        if not book_title:
            print("Warning: No title found for book. Skipping.")
            continue

        # 替换书名中的空格为连字符
        sanitized_title = book_title.replace(' ', '-')

        # 定义书籍的源文件夹和目标文件夹路径
        book_folder = os.path.join(source_folder, book_title)
        destination_folder = os.path.join(output_folder, sanitized_title)

        # 检查源文件夹是否存在，如果存在，则复制文件夹
        if os.path.exists(book_folder):
            print(f"Copying folder: {book_folder} -> {destination_folder}")
            shutil.copytree(book_folder, destination_folder)
        else:
            print(f"Warning: Folder for {book_title} not found in {source_folder}.")

# 定义函数：复制 404 页面到 output 文件夹
def copy_404_page(output_folder):
    # 假设 404.html 位于项目根目录
    source_404_path = 'templates/404.html'
    destination_404_path = os.path.join(output_folder, '404.html')

    if os.path.exists(source_404_path):
        print(f"Copying 404.html to {destination_404_path}")
        shutil.copy(source_404_path, destination_404_path)
    else:
        print("Warning: 404.html file not found.")

# 主函数：读取 list 文件夹中的 toml 文件并生成索引页面
def main():
    # 设置包含 toml 文件的文件夹路径
    toml_folder = 'list'  # 根据实际路径修改
    books = load_toml_files_from_folder(toml_folder)

    # 输出文件夹
    output_folder = 'output'

    if os.path.exists(output_folder):
        print(f"Deleting existing output folder: {output_folder}")
        shutil.rmtree(output_folder)

    # 将每本书对应的文件夹复制到 output 目录下
    copy_book_folders(books, 'book', output_folder)

    # 生成书籍索引页面
    generate_index_page(books, output_folder)

    # 复制 404.html 到 output 目录
    copy_404_page(output_folder)

    print("索引页面已生成，保存在 'output' 文件夹内。")

# 执行主函数
if __name__ == '__main__':
    main()
