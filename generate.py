import os
import toml
import shutil
from jinja2 import Environment, FileSystemLoader

# 定义函数：从文件夹读取所有的 toml 文件
def load_toml_files_from_folder(folder):
    books = []
    for filename in os.listdir(folder):
        if filename.endswith(".toml"):
            file_path = os.path.join(folder, filename)
            with open(file_path, 'r', encoding='utf-8') as f:
                data = toml.load(f)
                # 假设每个 TOML 文件只包含一个 'book' 表
                if 'book' in data:
                    books.append(data['book'])  # 提取 'book' 键下的数据
                else:
                    print(f"Warning: No 'book' key found in {filename}. Skipping file.")
    return books


# 定义函数：生成书籍的索引页面
def generate_index_page(books, output_folder):
    # 创建一个模板引擎对象
    env = Environment(loader=FileSystemLoader('templates'))

    try:
        template = env.get_template('index_template.html')
    except Exception as e:
        print(f"Error loading template: {e}")
        return

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

        # 定义书籍的源文件夹和目标文件夹路径
        book_folder = os.path.join(source_folder, book_title)
        destination_folder = os.path.join(output_folder, book_title)

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
