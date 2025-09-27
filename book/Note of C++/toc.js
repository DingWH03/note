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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="Introduction.html">Introduction</a></li><li class="chapter-item expanded "><a href="Types.html"><strong aria-hidden="true">1.</strong> 数据类型</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Types/Fundamental_Types.html"><strong aria-hidden="true">1.1.</strong> 基本数据类型</a></li><li class="chapter-item "><a href="Types/Derived_Types.html"><strong aria-hidden="true">1.2.</strong> 派生数据类型</a></li><li class="chapter-item "><a href="Types/Character.html"><strong aria-hidden="true">1.3.</strong> 字符串类型</a></li><li class="chapter-item "><a href="Types/Type_Conversion.html"><strong aria-hidden="true">1.4.</strong> 类型转换</a></li><li class="chapter-item "><a href="Types/Deducing_Types.html"><strong aria-hidden="true">1.5.</strong> 类型推导</a></li></ol></li><li class="chapter-item expanded "><a href="Memory.html"><strong aria-hidden="true">2.</strong> 内存管理</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Memory/Smart_Pointer.html"><strong aria-hidden="true">2.1.</strong> 智能指针</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Memory/Smart_Pointer/auto_ptr.html"><strong aria-hidden="true">2.1.1.</strong> auto_ptr</a></li><li class="chapter-item "><a href="Memory/Smart_Pointer/unique_ptr.html"><strong aria-hidden="true">2.1.2.</strong> unique_ptr</a></li><li class="chapter-item "><a href="Memory/Smart_Pointer/shared_ptr.html"><strong aria-hidden="true">2.1.3.</strong> shared_ptr</a></li><li class="chapter-item "><a href="Memory/Smart_Pointer/weak_ptr.html"><strong aria-hidden="true">2.1.4.</strong> weak_ptr</a></li></ol></li></ol></li><li class="chapter-item expanded "><a href="STL.html"><strong aria-hidden="true">3.</strong> STL</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Utility.html"><strong aria-hidden="true">3.1.</strong> Utility</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Utility/Pair.html"><strong aria-hidden="true">3.1.1.</strong> Pair</a></li><li class="chapter-item "><a href="STL/Utility/Move.html"><strong aria-hidden="true">3.1.2.</strong> Move</a></li></ol></li><li class="chapter-item "><a href="STL/Containers.html"><strong aria-hidden="true">3.2.</strong> Containers</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="STL/Containers/Vector.html"><strong aria-hidden="true">3.2.1.</strong> Vector</a></li><li class="chapter-item "><a href="STL/Containers/List.html"><strong aria-hidden="true">3.2.2.</strong> List</a></li><li class="chapter-item "><a href="STL/Containers/Deque.html"><strong aria-hidden="true">3.2.3.</strong> Deque</a></li><li class="chapter-item "><a href="STL/Containers/Set.html"><strong aria-hidden="true">3.2.4.</strong> Set</a></li><li class="chapter-item "><a href="STL/Containers/Multiset.html"><strong aria-hidden="true">3.2.5.</strong> Multiset</a></li><li class="chapter-item "><a href="STL/Containers/Map.html"><strong aria-hidden="true">3.2.6.</strong> Map</a></li><li class="chapter-item "><a href="STL/Containers/Multimap.html"><strong aria-hidden="true">3.2.7.</strong> Multimap</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_set.html"><strong aria-hidden="true">3.2.8.</strong> Unordered_set</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_multiset.html"><strong aria-hidden="true">3.2.9.</strong> Unordered_multiset</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_map.html"><strong aria-hidden="true">3.2.10.</strong> Unordered_map</a></li><li class="chapter-item "><a href="STL/Containers/Unordered_multimap.html"><strong aria-hidden="true">3.2.11.</strong> Unordered_multimap</a></li></ol></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="note.html">全部笔记</a></li></ol>';
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
