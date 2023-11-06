const products = [
    {
        img: "../image/iPhone.jpg",
        name: "iPhone 14",
        price: "5.999,99 ₺",
        id: 1,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/Tikac.jpg",
        name: "Kulak Tıkacı",
        price: "99,99 ₺",
        id: 2,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/Samsung.jpg",
        name: "Samsung Galaxy",
        price: "4.999,99 ₺",
        id: 3,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/poco.jpg",
        name: "Poco Phone",
        price: "3.999,99 ₺",
        id: 4,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/Xiaomi.jpg",
        name: "Xiaomi Lite",
        price: "4.999,99 ₺",
        id: 5,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/gm.jpg",
        name: "General Mobile",
        price: "4.999,99 ₺",
        id: 6,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/huawei.jpg",
        name: "Huawei Mate",
        price: "4.999,99 ₺",
        id: 7,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/oppo.jpg",
        name: "Oppo 10",
        price: "6.999,99 ₺",
        id: 8,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/realme.jpg",
        name: "Realme 5S",
        price: "2.999,99 ₺",
        id: 9,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/tecno.jpg",
        name: "Tecno Phone",
        price: "1.999,99 ₺",
        id: 10,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/tcl.jpg",
        name: "TCL 22",
        price: "4.999,99 ₺",
        id: 11,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/np.jpg",
        name: "Nothing Phone",
        price: "8.999,99 ₺",
        id: 12,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/3310.jpg",
        name: "Nokia 3310",
        price: "9.999,99 ₺",
        id: 13,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/bb.jpg",
        name: "Blackberry Curve",
        price: "11.999,99 ₺",
        id: 14,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    },
    {
        img: "../image/asus.jpg",
        name: "Asus Zenfone",
        price: "6.999,99 ₺",
        id: 15,
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean feugiat convallis enim at rutrum. Sed ac neque mattis, iaculis justo et, lacinia dui. Sed at urna quam. Nullam eu aliquet turpis. Curabitur pretium sit amet lorem ac rhoncus. Duis id ultrices libero, posuere aliquet est. Integer dapibus id quam in commodo."
    }
];

export default products;