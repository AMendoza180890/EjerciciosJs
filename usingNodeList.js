function arreglo (arreglo1){
    let nodo1 = new ListNode();
    let acomulador = 0;

    while (arreglo1|| arreglo1) {
        if (arreglo1){
            acomulador += arreglo1.val * 2;
            arreglo1.next
        }
        nodo1.next = new ListNode(acomulador);
        nodo1 = nodo1.next;
    }

    console.log(acomulador)
}
let arregloNumero = ListNode(4);
console.log(arreglo(arregloNumero));


let node1 = new ListNode(2);
let node2 = new ListNode(5);
node1.next = node2;
let list = new LinkedList(node1);
console.log(list.head.next.data);