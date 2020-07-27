/*
算法思想：

快速排序,说白了就是给基准数据找其正确索引位置的过程.

1.假设最开始的基准数据为数组第一个元素,则首先用一个临时变量去存储基准数据,即tmp=arr[0].然后分别从数组的两端扫描数组,设两个指示标志:low指向起始位置,high指向末尾.
2.首先从后半部分开始（从high往前扫描）,如果扫描到的值大于基准数据就让high减1,如果发现有元素比基准数据的值小(arr[high]<=tmp)，就将high位置的值赋值给low位置，然后low++.
3.然后开始从前往后扫描（从low往前扫描）,如果扫描到的值小于基准数据就让low加1,如果发现有元素大于基准数据的值(arr[low]>=tmp)，就再将low位置的值赋值给high位置，然后high--.
4.重复步骤2和3，直到low===high
5.此时的low(high)就是基准数应该在的位置：arr[low] = tmp
6.之后采用递归的方式分别对前半部分和后半部分排序，当前半部分和后半部分均有序时该数组就自然有序了。
*/
function findIndex (arr, low, high) {
  let tmp = arr[low]
  while (low < high) {
    if (arr[high] >= tmp) high--
    else if (arr[high] < tmp) {
      arr[low] = arr[high]
      low++

      while (low < high) {
        if (arr[low] <= tmp) low++
        else if (arr[low] > tmp) {
          arr[high] = arr[low]
          high--
          break
        }
      }
    }
  }
  arr[low] = tmp
  return low
}
function quickSort (arr, low, high) {
  if (low >= high) return

  // debugger
  let ind = findIndex(arr, low, high)

  quickSort(arr, low, ind - 1)
  quickSort(arr, ind + 1, high)

  return arr
}