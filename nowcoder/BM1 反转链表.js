/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param head ListNode类
 * @return ListNode类
 */
function ReverseList(head) {
    if (!head) {
        return head
    }

    let pre = null
    let current = head

    while (current) {
        const next = current.next
        current.next = pre
        pre = current
        current = next
        if (!next) {
            return pre
        }
    }
    // write code here
}
module.exports = {
    ReverseList: ReverseList
};