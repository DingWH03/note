// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Introduction.html">Introduction</a></li><li class="chapter-item expanded affix "><a href="Questions.html">C++面试题汇总</a></li><li class="chapter-item expanded "><a href="Basis.html"><strong aria-hidden="true">1.</strong> C++基础</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Basis/Concept.html"><strong aria-hidden="true">1.1.</strong> 基础概念与环境</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Basis/Concept/Structure.html"><strong aria-hidden="true">1.1.1.</strong> C++程序结构</a></li><li class="chapter-item "><a href="Basis/Concept/Preprocessor.html"><strong aria-hidden="true">1.1.2.</strong> 预处理器</a></li><li class="chapter-item "><div><strong aria-hidden="true">1.1.3.</strong> 命名空间</div></li><li class="chapter-item "><a href="Basis/Concept/Compile_Run.html"><strong aria-hidden="true">1.1.4.</strong> 编译运行</a></li><li class="chapter-item "><a href="Basis/Concept/Comments.html"><strong aria-hidden="true">1.1.5.</strong> 注释</a></li><li class="chapter-item "><a href="Basis/Concept/Naming_Rules.html"><strong aria-hidden="true">1.1.6.</strong> 命名规则</a></li></ol></li><li class="chapter-item "><a href="Basis/Types.html"><strong aria-hidden="true">1.2.</strong> 数据类型</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Basis/Types/Fundamental_Types.html"><strong aria-hidden="true">1.2.1.</strong> 基本数据类型</a></li><li class="chapter-item "><a href="Basis/Types/Derived_Types.html"><strong aria-hidden="true">1.2.2.</strong> 派生数据类型</a></li><li class="chapter-item "><a href="Basis/Types/Character.html"><strong aria-hidden="true">1.2.3.</strong> 字符串类型</a></li><li class="chapter-item "><a href="Basis/Types/Type_Conversion.html"><strong aria-hidden="true">1.2.4.</strong> 类型转换</a></li><li class="chapter-item "><a href="Basis/Types/Deducing_Types.html"><strong aria-hidden="true">1.2.5.</strong> 类型推导</a></li></ol></li><li class="chapter-item "><a href="Basis/Variable_Constant.html"><strong aria-hidden="true">1.3.</strong> 变量与常量</a></li><li class="chapter-item "><a href="Basis/Structure.html"><strong aria-hidden="true">1.4.</strong> 控制结构</a></li><li class="chapter-item "><a href="Basis/Operators.html"><strong aria-hidden="true">1.5.</strong> 操作符</a></li><li class="chapter-item "><a href="Basis/Functions.html"><strong aria-hidden="true">1.6.</strong> 函数</a></li><li class="chapter-item "><a href="Basis/CLass&Object.html"><strong aria-hidden="true">1.7.</strong> 类与对象</a></li><li class="chapter-item "><a href="Basis/Template.html"><strong aria-hidden="true">1.8.</strong> 模板</a></li></ol></li><li class="chapter-item expanded "><a href="Advance.html"><strong aria-hidden="true">2.</strong> C++进阶</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advance/Memory.html"><strong aria-hidden="true">2.1.</strong> 内存管理</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advance/Memory/Smart_Pointer.html"><strong aria-hidden="true">2.1.1.</strong> 智能指针</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Advance/Memory/Smart_Pointer/auto_ptr.html"><strong aria-hidden="true">2.1.1.1.</strong> auto_ptr</a></li><li class="chapter-item "><a href="Advance/Memory/Smart_Pointer/unique_ptr.html"><strong aria-hidden="true">2.1.1.2.</strong> unique_ptr</a></li><li class="chapter-item "><a href="Advance/Memory/Smart_Pointer/shared_ptr.html"><strong aria-hidden="true">2.1.1.3.</strong> shared_ptr</a></li><li class="chapter-item "><a href="Advance/Memory/Smart_Pointer/weak_ptr.html"><strong aria-hidden="true">2.1.1.4.</strong> weak_ptr</a></li></ol></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">2.2.</strong> 面向对象(进阶)</div></li><li class="chapter-item "><div><strong aria-hidden="true">2.3.</strong> 多线程与并发</div></li></ol></li><li class="chapter-item expanded "><a href="STL.html"><strong aria-hidden="true">3.</strong> STL</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Utility.html"><strong aria-hidden="true">3.1.</strong> Utility</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Utilities/Pair.html"><strong aria-hidden="true">3.1.1.</strong> Pair</a></li><li class="chapter-item "><a href="STL/Utilities/Move.html"><strong aria-hidden="true">3.1.2.</strong> Move</a></li><li class="chapter-item "><a href="STL/Utilities/Optional.html"><strong aria-hidden="true">3.1.3.</strong> Optional</a></li><li class="chapter-item "><a href="STL/Utilities/Any.html"><strong aria-hidden="true">3.1.4.</strong> Any</a></li><li class="chapter-item "><a href="STL/Utilities/Variant.html"><strong aria-hidden="true">3.1.5.</strong> Variant</a></li></ol></li><li class="chapter-item "><a href="STL/Containers.html"><strong aria-hidden="true">3.2.</strong> Containers</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Containers/Vector.html"><strong aria-hidden="true">3.2.1.</strong> Vector</a></li><li class="chapter-item "><a href="STL/Containers/Array.html"><strong aria-hidden="true">3.2.2.</strong> Array</a></li><li class="chapter-item "><a href="STL/Containers/List.html"><strong aria-hidden="true">3.2.3.</strong> List</a></li><li class="chapter-item "><a href="STL/Containers/Forward_list.html"><strong aria-hidden="true">3.2.4.</strong> Forward_list</a></li><li class="chapter-item "><a href="STL/Containers/Deque.html"><strong aria-hidden="true">3.2.5.</strong> Deque</a></li><li class="chapter-item "><a href="STL/Containers/Set.html"><strong aria-hidden="true">3.2.6.</strong> Set</a></li><li class="chapter-item "><a href="STL/Containers/Multiset.html"><strong aria-hidden="true">3.2.7.</strong> Multiset</a></li><li class="chapter-item "><a href="STL/Containers/Map.html"><strong aria-hidden="true">3.2.8.</strong> Map</a></li><li class="chapter-item "><a href="STL/Containers/Multimap.html"><strong aria-hidden="true">3.2.9.</strong> Multimap</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_set.html"><strong aria-hidden="true">3.2.10.</strong> Unordered_set</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_multiset.html"><strong aria-hidden="true">3.2.11.</strong> Unordered_multiset</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_map.html"><strong aria-hidden="true">3.2.12.</strong> Unordered_map</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_multimap.html"><strong aria-hidden="true">3.2.13.</strong> Unordered_multimap</a></li><li class="chapter-item "><a href="STL/Containers/Stack.html"><strong aria-hidden="true">3.2.14.</strong> Stack</a></li><li class="chapter-item "><a href="STL/Containers/Queue.html"><strong aria-hidden="true">3.2.15.</strong> Queue</a></li><li class="chapter-item "><a href="STL/Containers/Priority_queue.html"><strong aria-hidden="true">3.2.16.</strong> Priority_queue</a></li></ol></li><li class="chapter-item "><a href="STL/Algorithms.html"><strong aria-hidden="true">3.3.</strong> Algorithms</a></li></ol></li><li class="chapter-item expanded "><a href="Practice.html"><strong aria-hidden="true">4.</strong> C++实践</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><div><strong aria-hidden="true">4.1.</strong> 多线程</div></li><li class="chapter-item "><a href="Practice/Stream.html"><strong aria-hidden="true">4.2.</strong> 文件与流</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Practice/Stream/Iostream.html"><strong aria-hidden="true">4.2.1.</strong> 标准输入输出流 (iostream)</a></li><li class="chapter-item "><a href="Practice/Stream/Fstream.html"><strong aria-hidden="true">4.2.2.</strong> 文件流 (fstream)</a></li><li class="chapter-item "><a href="Practice/Stream/Sstream.html"><strong aria-hidden="true">4.2.3.</strong> 字符串流 (sstream)</a></li></ol></li><li class="chapter-item "><div><strong aria-hidden="true">4.3.</strong> 网络</div></li><li class="chapter-item "><div><strong aria-hidden="true">4.4.</strong> gRPC</div></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="note.html">全部笔记</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
