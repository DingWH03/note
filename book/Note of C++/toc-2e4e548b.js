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
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Introduction.html">Introduction</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Questions.html">C++面试题汇总</a></span></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Basis.html"><strong aria-hidden="true">1.</strong> C++基础</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept.html"><strong aria-hidden="true">1.1.</strong> 基础概念与环境</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Structure.html"><strong aria-hidden="true">1.1.1.</strong> C++程序结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Preprocessor.html"><strong aria-hidden="true">1.1.2.</strong> 预处理器</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Namespace.html"><strong aria-hidden="true">1.1.3.</strong> 命名空间</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Compile_Run.html"><strong aria-hidden="true">1.1.4.</strong> 编译运行</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Comments.html"><strong aria-hidden="true">1.1.5.</strong> 注释</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Concept/Naming_Rules.html"><strong aria-hidden="true">1.1.6.</strong> 命名规则</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types.html"><strong aria-hidden="true">1.2.</strong> 数据类型</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types/Fundamental_Types.html"><strong aria-hidden="true">1.2.1.</strong> 基本数据类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types/Derived_Types.html"><strong aria-hidden="true">1.2.2.</strong> 派生数据类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types/Character.html"><strong aria-hidden="true">1.2.3.</strong> 字符串类型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types/Type_Conversion.html"><strong aria-hidden="true">1.2.4.</strong> 类型转换</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Types/Deducing_Types.html"><strong aria-hidden="true">1.2.5.</strong> 类型推导</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Variable_Constant.html"><strong aria-hidden="true">1.3.</strong> 变量与常量</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Structure.html"><strong aria-hidden="true">1.4.</strong> 控制结构</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Operators.html"><strong aria-hidden="true">1.5.</strong> 操作符</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Functions.html"><strong aria-hidden="true">1.6.</strong> 函数</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/CLass&Object.html"><strong aria-hidden="true">1.7.</strong> 类与对象</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Basis/Template.html"><strong aria-hidden="true">1.8.</strong> 模板</a></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Advance.html"><strong aria-hidden="true">2.</strong> C++进阶</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory.html"><strong aria-hidden="true">2.1.</strong> 内存管理</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Layout.html"><strong aria-hidden="true">2.1.1.</strong> 内存布局与模型</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Allocation.html"><strong aria-hidden="true">2.1.2.</strong> 动态内存分配</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Smart_Pointer.html"><strong aria-hidden="true">2.1.3.</strong> 智能指针</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Smart_Pointer/auto_ptr.html"><strong aria-hidden="true">2.1.3.1.</strong> auto_ptr</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Smart_Pointer/unique_ptr.html"><strong aria-hidden="true">2.1.3.2.</strong> unique_ptr</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Smart_Pointer/shared_ptr.html"><strong aria-hidden="true">2.1.3.3.</strong> shared_ptr</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Smart_Pointer/weak_ptr.html"><strong aria-hidden="true">2.1.3.4.</strong> weak_ptr</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Custom_Allocator.html"><strong aria-hidden="true">2.1.4.</strong> 自定义内存管理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/RAII.html"><strong aria-hidden="true">2.1.5.</strong> RAII与资源管理</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Debugging.html"><strong aria-hidden="true">2.1.6.</strong> 内存调试与诊断</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Memory/Memory_Model.html"><strong aria-hidden="true">2.1.7.</strong> C++内存模型（并发）</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object.html"><strong aria-hidden="true">2.2.</strong> 面向对象(进阶)</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Operator_Overloading.html"><strong aria-hidden="true">2.2.1.</strong> 运算符重载</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Inheritance.html"><strong aria-hidden="true">2.2.2.</strong> 继承</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Virtual_Function.html"><strong aria-hidden="true">2.2.3.</strong> 虚函数与多态</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Friend_and_Relationship.html"><strong aria-hidden="true">2.2.4.</strong> 友元与类关系</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Template_Advanced.html"><strong aria-hidden="true">2.2.5.</strong> 类模板与函数模板高级应用</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Type_Conversion.html"><strong aria-hidden="true">2.2.6.</strong> 类型转换与转换运算符</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/Copy_Control.html"><strong aria-hidden="true">2.2.7.</strong> 拷贝控制</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Advance/Object/CPP_Modern_Features.html"><strong aria-hidden="true">2.2.8.</strong> C++ 新特性</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">2.3.</strong> 多线程与并发</span></span></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="STL.html"><strong aria-hidden="true">3.</strong> STL</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utility.html"><strong aria-hidden="true">3.1.</strong> Utility</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utilities/Pair.html"><strong aria-hidden="true">3.1.1.</strong> Pair</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utilities/Move.html"><strong aria-hidden="true">3.1.2.</strong> Move</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utilities/Optional.html"><strong aria-hidden="true">3.1.3.</strong> Optional</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utilities/Any.html"><strong aria-hidden="true">3.1.4.</strong> Any</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Utilities/Variant.html"><strong aria-hidden="true">3.1.5.</strong> Variant</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers.html"><strong aria-hidden="true">3.2.</strong> Containers</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Vector.html"><strong aria-hidden="true">3.2.1.</strong> Vector</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Array.html"><strong aria-hidden="true">3.2.2.</strong> Array</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/List.html"><strong aria-hidden="true">3.2.3.</strong> List</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Forward_list.html"><strong aria-hidden="true">3.2.4.</strong> Forward_list</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Deque.html"><strong aria-hidden="true">3.2.5.</strong> Deque</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Set.html"><strong aria-hidden="true">3.2.6.</strong> Set</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Multiset.html"><strong aria-hidden="true">3.2.7.</strong> Multiset</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Map.html"><strong aria-hidden="true">3.2.8.</strong> Map</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Multimap.html"><strong aria-hidden="true">3.2.9.</strong> Multimap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Unordered_set.html"><strong aria-hidden="true">3.2.10.</strong> Unordered_set</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Unordered_multiset.html"><strong aria-hidden="true">3.2.11.</strong> Unordered_multiset</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Unordered_map.html"><strong aria-hidden="true">3.2.12.</strong> Unordered_map</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Unordered_multimap.html"><strong aria-hidden="true">3.2.13.</strong> Unordered_multimap</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Stack.html"><strong aria-hidden="true">3.2.14.</strong> Stack</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Queue.html"><strong aria-hidden="true">3.2.15.</strong> Queue</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Containers/Priority_queue.html"><strong aria-hidden="true">3.2.16.</strong> Priority_queue</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms.html"><strong aria-hidden="true">3.3.</strong> Algorithms</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying.html"><strong aria-hidden="true">3.3.1.</strong> 非修改序列操作</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/For_each.html"><strong aria-hidden="true">3.3.1.1.</strong> for_each</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/For_each_n.html"><strong aria-hidden="true">3.3.1.2.</strong> for_each_n</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/All_any_none_of.html"><strong aria-hidden="true">3.3.1.3.</strong> all_of / any_of / none_of</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Find.html"><strong aria-hidden="true">3.3.1.4.</strong> find / find_if / find_if_not</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Find_last.html"><strong aria-hidden="true">3.3.1.5.</strong> find_last</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Find_end.html"><strong aria-hidden="true">3.3.1.6.</strong> find_end</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Find_first_of.html"><strong aria-hidden="true">3.3.1.7.</strong> find_first_of</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Adjacent_find.html"><strong aria-hidden="true">3.3.1.8.</strong> adjacent_find</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Count.html"><strong aria-hidden="true">3.3.1.9.</strong> count / count_if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Mismatch.html"><strong aria-hidden="true">3.3.1.10.</strong> mismatch</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Equal.html"><strong aria-hidden="true">3.3.1.11.</strong> equal</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Search.html"><strong aria-hidden="true">3.3.1.12.</strong> search / search_n</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Contains.html"><strong aria-hidden="true">3.3.1.13.</strong> contains</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Starts_ends_with.html"><strong aria-hidden="true">3.3.1.14.</strong> starts_with / ends_with</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/NonModifying/Fold.html"><strong aria-hidden="true">3.3.1.15.</strong> fold</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying.html"><strong aria-hidden="true">3.3.2.</strong> 修改序列操作</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Copy.html"><strong aria-hidden="true">3.3.2.1.</strong> copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Copy_backward.html"><strong aria-hidden="true">3.3.2.2.</strong> copy_backward</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Move.html"><strong aria-hidden="true">3.3.2.3.</strong> move / move_backward</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Swap.html"><strong aria-hidden="true">3.3.2.4.</strong> swap / swap_ranges</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Transform.html"><strong aria-hidden="true">3.3.2.5.</strong> transform</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Replace.html"><strong aria-hidden="true">3.3.2.6.</strong> replace / replace_if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Replace_copy.html"><strong aria-hidden="true">3.3.2.7.</strong> replace_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Fill.html"><strong aria-hidden="true">3.3.2.8.</strong> fill / fill_n</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Generate.html"><strong aria-hidden="true">3.3.2.9.</strong> generate / generate_n</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Remove.html"><strong aria-hidden="true">3.3.2.10.</strong> remove / remove_if</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Remove_copy.html"><strong aria-hidden="true">3.3.2.11.</strong> remove_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Unique.html"><strong aria-hidden="true">3.3.2.12.</strong> unique / unique_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Reverse.html"><strong aria-hidden="true">3.3.2.13.</strong> reverse / reverse_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Rotate.html"><strong aria-hidden="true">3.3.2.14.</strong> rotate / rotate_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Shift.html"><strong aria-hidden="true">3.3.2.15.</strong> shift_left / shift_right</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Shuffle.html"><strong aria-hidden="true">3.3.2.16.</strong> shuffle</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Modifying/Sample.html"><strong aria-hidden="true">3.3.2.17.</strong> sample</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting.html"><strong aria-hidden="true">3.3.3.</strong> 排序及相关操作</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Partition.html"><strong aria-hidden="true">3.3.3.1.</strong> partition / stable_partition</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Is_partitioned.html"><strong aria-hidden="true">3.3.3.2.</strong> is_partitioned / partition_point</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Partition_copy.html"><strong aria-hidden="true">3.3.3.3.</strong> partition_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Sort.html"><strong aria-hidden="true">3.3.3.4.</strong> sort / stable_sort</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Partial_sort.html"><strong aria-hidden="true">3.3.3.5.</strong> partial_sort</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Is_sorted.html"><strong aria-hidden="true">3.3.3.6.</strong> is_sorted</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Nth_element.html"><strong aria-hidden="true">3.3.3.7.</strong> nth_element</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Binary_search.html"><strong aria-hidden="true">3.3.3.8.</strong> 二分查找</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Set_operations.html"><strong aria-hidden="true">3.3.3.9.</strong> 集合操作</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Merge.html"><strong aria-hidden="true">3.3.3.10.</strong> merge / inplace_merge</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Heap.html"><strong aria-hidden="true">3.3.3.11.</strong> 堆操作</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Min_max.html"><strong aria-hidden="true">3.3.3.12.</strong> min / max / clamp</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Lexicographical_compare.html"><strong aria-hidden="true">3.3.3.13.</strong> lexicographical_compare</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Sorting/Permutation.html"><strong aria-hidden="true">3.3.3.14.</strong> 排列操作</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric.html"><strong aria-hidden="true">3.3.4.</strong> 数值操作</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Iota.html"><strong aria-hidden="true">3.3.4.1.</strong> iota</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Accumulate.html"><strong aria-hidden="true">3.3.4.2.</strong> accumulate</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Inner_product.html"><strong aria-hidden="true">3.3.4.3.</strong> inner_product</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Adjacent_difference.html"><strong aria-hidden="true">3.3.4.4.</strong> adjacent_difference</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Partial_sum.html"><strong aria-hidden="true">3.3.4.5.</strong> partial_sum</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Reduce.html"><strong aria-hidden="true">3.3.4.6.</strong> reduce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Scan.html"><strong aria-hidden="true">3.3.4.7.</strong> exclusive_scan / inclusive_scan</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Transform_reduce.html"><strong aria-hidden="true">3.3.4.8.</strong> transform_reduce</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Numeric/Transform_scan.html"><strong aria-hidden="true">3.3.4.9.</strong> transform_scan</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory.html"><strong aria-hidden="true">3.3.5.</strong> 未初始化内存操作</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Uninitialized_copy.html"><strong aria-hidden="true">3.3.5.1.</strong> uninitialized_copy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Uninitialized_fill.html"><strong aria-hidden="true">3.3.5.2.</strong> uninitialized_fill</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Uninitialized_move.html"><strong aria-hidden="true">3.3.5.3.</strong> uninitialized_move</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Uninitialized_construct.html"><strong aria-hidden="true">3.3.5.4.</strong> uninitialized_construct</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Destroy.html"><strong aria-hidden="true">3.3.5.5.</strong> destroy</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="STL/Algorithms/Memory/Construct_at.html"><strong aria-hidden="true">3.3.5.6.</strong> construct_at</a></span></li></ol></li></ol></li></ol><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="Practice.html"><strong aria-hidden="true">4.</strong> C++实践</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.1.</strong> 多线程</span></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Practice/Stream.html"><strong aria-hidden="true">4.2.</strong> 文件与流</a><a class="chapter-fold-toggle"><div>❱</div></a></span><ol class="section"><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Practice/Stream/Iostream.html"><strong aria-hidden="true">4.2.1.</strong> 标准输入输出流 (iostream)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Practice/Stream/Fstream.html"><strong aria-hidden="true">4.2.2.</strong> 文件流 (fstream)</a></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><a href="Practice/Stream/Sstream.html"><strong aria-hidden="true">4.2.3.</strong> 字符串流 (sstream)</a></span></li></ol><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.3.</strong> 网络</span></span></li><li class="chapter-item "><span class="chapter-link-wrapper"><span><strong aria-hidden="true">4.4.</strong> gRPC</span></span></li></ol><li class="chapter-item expanded "><li class="spacer"></li></li><li class="chapter-item expanded "><span class="chapter-link-wrapper"><a href="note.html">全部笔记</a></span></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split('#')[0].split('?')[0];
        if (current_page.endsWith('/')) {
            current_page += 'index.html';
        }
        const links = Array.prototype.slice.call(this.querySelectorAll('a'));
        const l = links.length;
        for (let i = 0; i < l; ++i) {
            const link = links[i];
            const href = link.getAttribute('href');
            if (href && !href.startsWith('#') && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The 'index' page is supposed to alias the first chapter in the book.
            // Check both with and without the '.html' suffix to be robust against pretty URLs
            if (link.href.replace(/\.html$/, '') === current_page.replace(/\.html$/, '')
                || i === 0
                && path_to_root === ''
                && current_page.endsWith('/index.html')) {
                link.classList.add('active');
                let parent = link.parentElement;
                while (parent) {
                    if (parent.tagName === 'LI' && parent.classList.contains('chapter-item')) {
                        parent.classList.add('expanded');
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', e => {
            if (e.target.tagName === 'A') {
                const clientRect = e.target.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                sessionStorage.setItem('sidebar-scroll-offset', clientRect.top - sidebarRect.top);
            }
        }, { passive: true });
        const sidebarScrollOffset = sessionStorage.getItem('sidebar-scroll-offset');
        sessionStorage.removeItem('sidebar-scroll-offset');
        if (sidebarScrollOffset !== null) {
            // preserve sidebar scroll position when navigating via links within sidebar
            const activeSection = this.querySelector('.active');
            if (activeSection) {
                const clientRect = activeSection.getBoundingClientRect();
                const sidebarRect = this.getBoundingClientRect();
                const currentOffset = clientRect.top - sidebarRect.top;
                this.scrollTop += currentOffset - parseFloat(sidebarScrollOffset);
            }
        } else {
            // scroll sidebar to current active section when navigating via
            // 'next/previous chapter' buttons
            const activeSection = document.querySelector('#mdbook-sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        const sidebarAnchorToggles = document.querySelectorAll('.chapter-fold-toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(el => {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define('mdbook-sidebar-scrollbox', MDBookSidebarScrollbox);


// ---------------------------------------------------------------------------
// Support for dynamically adding headers to the sidebar.

(function() {
    // This is used to detect which direction the page has scrolled since the
    // last scroll event.
    let lastKnownScrollPosition = 0;
    // This is the threshold in px from the top of the screen where it will
    // consider a header the "current" header when scrolling down.
    const defaultDownThreshold = 150;
    // Same as defaultDownThreshold, except when scrolling up.
    const defaultUpThreshold = 300;
    // The threshold is a virtual horizontal line on the screen where it
    // considers the "current" header to be above the line. The threshold is
    // modified dynamically to handle headers that are near the bottom of the
    // screen, and to slightly offset the behavior when scrolling up vs down.
    let threshold = defaultDownThreshold;
    // This is used to disable updates while scrolling. This is needed when
    // clicking the header in the sidebar, which triggers a scroll event. It
    // is somewhat finicky to detect when the scroll has finished, so this
    // uses a relatively dumb system of disabling scroll updates for a short
    // time after the click.
    let disableScroll = false;
    // Array of header elements on the page.
    let headers;
    // Array of li elements that are initially collapsed headers in the sidebar.
    // I'm not sure why eslint seems to have a false positive here.
    // eslint-disable-next-line prefer-const
    let headerToggles = [];
    // This is a debugging tool for the threshold which you can enable in the console.
    let thresholdDebug = false;

    // Updates the threshold based on the scroll position.
    function updateThreshold() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;

        // The number of pixels below the viewport, at most documentHeight.
        // This is used to push the threshold down to the bottom of the page
        // as the user scrolls towards the bottom.
        const pixelsBelow = Math.max(0, documentHeight - (scrollTop + windowHeight));
        // The number of pixels above the viewport, at least defaultDownThreshold.
        // Similar to pixelsBelow, this is used to push the threshold back towards
        // the top when reaching the top of the page.
        const pixelsAbove = Math.max(0, defaultDownThreshold - scrollTop);
        // How much the threshold should be offset once it gets close to the
        // bottom of the page.
        const bottomAdd = Math.max(0, windowHeight - pixelsBelow - defaultDownThreshold);
        let adjustedBottomAdd = bottomAdd;

        // Adjusts bottomAdd for a small document. The calculation above
        // assumes the document is at least twice the windowheight in size. If
        // it is less than that, then bottomAdd needs to be shrunk
        // proportional to the difference in size.
        if (documentHeight < windowHeight * 2) {
            const maxPixelsBelow = documentHeight - windowHeight;
            const t = 1 - pixelsBelow / Math.max(1, maxPixelsBelow);
            const clamp = Math.max(0, Math.min(1, t));
            adjustedBottomAdd *= clamp;
        }

        let scrollingDown = true;
        if (scrollTop < lastKnownScrollPosition) {
            scrollingDown = false;
        }

        if (scrollingDown) {
            // When scrolling down, move the threshold up towards the default
            // downwards threshold position. If near the bottom of the page,
            // adjustedBottomAdd will offset the threshold towards the bottom
            // of the page.
            const amountScrolledDown = scrollTop - lastKnownScrollPosition;
            const adjustedDefault = defaultDownThreshold + adjustedBottomAdd;
            threshold = Math.max(adjustedDefault, threshold - amountScrolledDown);
        } else {
            // When scrolling up, move the threshold down towards the default
            // upwards threshold position. If near the bottom of the page,
            // quickly transition the threshold back up where it normally
            // belongs.
            const amountScrolledUp = lastKnownScrollPosition - scrollTop;
            const adjustedDefault = defaultUpThreshold - pixelsAbove
                + Math.max(0, adjustedBottomAdd - defaultDownThreshold);
            threshold = Math.min(adjustedDefault, threshold + amountScrolledUp);
        }

        if (documentHeight <= windowHeight) {
            threshold = 0;
        }

        if (thresholdDebug) {
            const id = 'mdbook-threshold-debug-data';
            let data = document.getElementById(id);
            if (data === null) {
                data = document.createElement('div');
                data.id = id;
                data.style.cssText = `
                    position: fixed;
                    top: 50px;
                    right: 10px;
                    background-color: 0xeeeeee;
                    z-index: 9999;
                    pointer-events: none;
                `;
                document.body.appendChild(data);
            }
            data.innerHTML = `
                <table>
                  <tr><td>documentHeight</td><td>${documentHeight.toFixed(1)}</td></tr>
                  <tr><td>windowHeight</td><td>${windowHeight.toFixed(1)}</td></tr>
                  <tr><td>scrollTop</td><td>${scrollTop.toFixed(1)}</td></tr>
                  <tr><td>pixelsAbove</td><td>${pixelsAbove.toFixed(1)}</td></tr>
                  <tr><td>pixelsBelow</td><td>${pixelsBelow.toFixed(1)}</td></tr>
                  <tr><td>bottomAdd</td><td>${bottomAdd.toFixed(1)}</td></tr>
                  <tr><td>adjustedBottomAdd</td><td>${adjustedBottomAdd.toFixed(1)}</td></tr>
                  <tr><td>scrollingDown</td><td>${scrollingDown}</td></tr>
                  <tr><td>threshold</td><td>${threshold.toFixed(1)}</td></tr>
                </table>
            `;
            drawDebugLine();
        }

        lastKnownScrollPosition = scrollTop;
    }

    function drawDebugLine() {
        if (!document.body) {
            return;
        }
        const id = 'mdbook-threshold-debug-line';
        const existingLine = document.getElementById(id);
        if (existingLine) {
            existingLine.remove();
        }
        const line = document.createElement('div');
        line.id = id;
        line.style.cssText = `
            position: fixed;
            top: ${threshold}px;
            left: 0;
            width: 100vw;
            height: 2px;
            background-color: red;
            z-index: 9999;
            pointer-events: none;
        `;
        document.body.appendChild(line);
    }

    function mdbookEnableThresholdDebug() {
        thresholdDebug = true;
        updateThreshold();
        drawDebugLine();
    }

    window.mdbookEnableThresholdDebug = mdbookEnableThresholdDebug;

    // Updates which headers in the sidebar should be expanded. If the current
    // header is inside a collapsed group, then it, and all its parents should
    // be expanded.
    function updateHeaderExpanded(currentA) {
        // Add expanded to all header-item li ancestors.
        let current = currentA.parentElement;
        while (current) {
            if (current.tagName === 'LI' && current.classList.contains('header-item')) {
                current.classList.add('expanded');
            }
            current = current.parentElement;
        }
    }

    // Updates which header is marked as the "current" header in the sidebar.
    // This is done with a virtual Y threshold, where headers at or below
    // that line will be considered the current one.
    function updateCurrentHeader() {
        if (!headers || !headers.length) {
            return;
        }

        // Reset the classes, which will be rebuilt below.
        const els = document.getElementsByClassName('current-header');
        for (const el of els) {
            el.classList.remove('current-header');
        }
        for (const toggle of headerToggles) {
            toggle.classList.remove('expanded');
        }

        // Find the last header that is above the threshold.
        let lastHeader = null;
        for (const header of headers) {
            const rect = header.getBoundingClientRect();
            if (rect.top <= threshold) {
                lastHeader = header;
            } else {
                break;
            }
        }
        if (lastHeader === null) {
            lastHeader = headers[0];
            const rect = lastHeader.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top >= windowHeight) {
                return;
            }
        }

        // Get the anchor in the summary.
        const href = '#' + lastHeader.id;
        const a = [...document.querySelectorAll('.header-in-summary')]
            .find(element => element.getAttribute('href') === href);
        if (!a) {
            return;
        }

        a.classList.add('current-header');

        updateHeaderExpanded(a);
    }

    // Updates which header is "current" based on the threshold line.
    function reloadCurrentHeader() {
        if (disableScroll) {
            return;
        }
        updateThreshold();
        updateCurrentHeader();
    }


    // When clicking on a header in the sidebar, this adjusts the threshold so
    // that it is located next to the header. This is so that header becomes
    // "current".
    function headerThresholdClick(event) {
        // See disableScroll description why this is done.
        disableScroll = true;
        setTimeout(() => {
            disableScroll = false;
        }, 100);
        // requestAnimationFrame is used to delay the update of the "current"
        // header until after the scroll is done, and the header is in the new
        // position.
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                // Closest is needed because if it has child elements like <code>.
                const a = event.target.closest('a');
                const href = a.getAttribute('href');
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    threshold = targetElement.getBoundingClientRect().bottom;
                    updateCurrentHeader();
                }
            });
        });
    }

    // Takes the nodes from the given head and copies them over to the
    // destination, along with some filtering.
    function filterHeader(source, dest) {
        const clone = source.cloneNode(true);
        clone.querySelectorAll('mark').forEach(mark => {
            mark.replaceWith(...mark.childNodes);
        });
        dest.append(...clone.childNodes);
    }

    // Scans page for headers and adds them to the sidebar.
    document.addEventListener('DOMContentLoaded', function() {
        const activeSection = document.querySelector('#mdbook-sidebar .active');
        if (activeSection === null) {
            return;
        }

        const main = document.getElementsByTagName('main')[0];
        headers = Array.from(main.querySelectorAll('h2, h3, h4, h5, h6'))
            .filter(h => h.id !== '' && h.children.length && h.children[0].tagName === 'A');

        if (headers.length === 0) {
            return;
        }

        // Build a tree of headers in the sidebar.

        const stack = [];

        const firstLevel = parseInt(headers[0].tagName.charAt(1));
        for (let i = 1; i < firstLevel; i++) {
            const ol = document.createElement('ol');
            ol.classList.add('section');
            if (stack.length > 0) {
                stack[stack.length - 1].ol.appendChild(ol);
            }
            stack.push({level: i + 1, ol: ol});
        }

        // The level where it will start folding deeply nested headers.
        const foldLevel = 3;

        for (let i = 0; i < headers.length; i++) {
            const header = headers[i];
            const level = parseInt(header.tagName.charAt(1));

            const currentLevel = stack[stack.length - 1].level;
            if (level > currentLevel) {
                // Begin nesting to this level.
                for (let nextLevel = currentLevel + 1; nextLevel <= level; nextLevel++) {
                    const ol = document.createElement('ol');
                    ol.classList.add('section');
                    const last = stack[stack.length - 1];
                    const lastChild = last.ol.lastChild;
                    // Handle the case where jumping more than one nesting
                    // level, which doesn't have a list item to place this new
                    // list inside of.
                    if (lastChild) {
                        lastChild.appendChild(ol);
                    } else {
                        last.ol.appendChild(ol);
                    }
                    stack.push({level: nextLevel, ol: ol});
                }
            } else if (level < currentLevel) {
                while (stack.length > 1 && stack[stack.length - 1].level > level) {
                    stack.pop();
                }
            }

            const li = document.createElement('li');
            li.classList.add('header-item');
            li.classList.add('expanded');
            if (level < foldLevel) {
                li.classList.add('expanded');
            }
            const span = document.createElement('span');
            span.classList.add('chapter-link-wrapper');
            const a = document.createElement('a');
            span.appendChild(a);
            a.href = '#' + header.id;
            a.classList.add('header-in-summary');
            filterHeader(header.children[0], a);
            a.addEventListener('click', headerThresholdClick);
            const nextHeader = headers[i + 1];
            if (nextHeader !== undefined) {
                const nextLevel = parseInt(nextHeader.tagName.charAt(1));
                if (nextLevel > level && level >= foldLevel) {
                    const toggle = document.createElement('a');
                    toggle.classList.add('chapter-fold-toggle');
                    toggle.classList.add('header-toggle');
                    toggle.addEventListener('click', () => {
                        li.classList.toggle('expanded');
                    });
                    const toggleDiv = document.createElement('div');
                    toggleDiv.textContent = '❱';
                    toggle.appendChild(toggleDiv);
                    span.appendChild(toggle);
                    headerToggles.push(li);
                }
            }
            li.appendChild(span);

            const currentParent = stack[stack.length - 1];
            currentParent.ol.appendChild(li);
        }

        const onThisPage = document.createElement('div');
        onThisPage.classList.add('on-this-page');
        onThisPage.append(stack[0].ol);
        const activeItemSpan = activeSection.parentElement;
        activeItemSpan.after(onThisPage);
    });

    document.addEventListener('DOMContentLoaded', reloadCurrentHeader);
    document.addEventListener('scroll', reloadCurrentHeader, { passive: true });
})();

