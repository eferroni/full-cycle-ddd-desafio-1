import Address from "./domain/entity/address";
import Customer from "./domain/entity/customer";
import Order from "./domain/entity/order";
import OrderItem from "./domain/entity/order_item";

let customer = new Customer("123", "Eduardo Ferroni");
const address = new Address("Rua Dois", 2, "12345-678", "Porto Alegre");
customer.Address = address;
customer.activate();

const item1 = new OrderItem("1", "Item 1", 10, "123", 1);
const item2 = new OrderItem("2", "Item 2", 20, "123", 1);

let order = new Order("1", "123", [item1, item2]);