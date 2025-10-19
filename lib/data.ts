import { string } from "zod";

export const navData = [
  { id: 1, title: "Главная", link: "/" },
  { id: 2, title: "О нас", link: "#about" },
  { id: 3, title: "Услуги", link: "#services" },
  { id: 4, title: "Отзывы", link: "#feedbacks" },
  { id: 5, title: "Партнерская программа", link: "#partnership" },
  { id: 6, title: "Наши проекты", link: "#projects" },
]
export const TransportServices = [
  {
    id: 1,
    title: "Тарифы",
    image: "/icons/services/tarifs.png",
    description: "Смотрите актуальные тарифы и выбирайте лучший вариант доставки"
  },
  {
    id: 2,
    title: "Услуги",
    image: "/icons/services/helpings.png",
    description: "Доставка под ключ, поиск поставщика, проверка, консолидация — всё здесь"
  },
  {
    id: 3,
    image: "/icons/services/associate.png",
    title: "Консолидация",
    description: "Объедините заказы от разных поставщиков в одну партию — экономьте на доставке"
  },
  {
    id: 4,
    image: "/icons/services/calculate.png",
    title: "Калькулятор плотности",
    description: "Рассчитайте объёмный вес и узнайте стоимость доставки за 1 минуту"
  }
];

export const DeliverBenefits = [
  {
    id: 1,
    title: "Селлер МП"
  },
  {
    id: 2,
    title: "Оптовик"
  },
  {
    id: 3,
    title: "Также для крупных, постоянных клиентов есть рассрочка"
  },
  {
    id: 4,
    title: "Делаете крупные заказы и задумываетесь о смене Карго"
  },
]

export const PartnerCards = [
  {
    id: 1,
    image: "/icons/sponsorship/logo_cargo.jpg",
    title: "Группа карго",
    description: "Выгодное объединение ваших грузов."
  },
  {
    id: 2,
    image: "/icons/sponsorship/house.png",
    title: "Группа Китай для дома",
    description: "Широкий ассортимент качественных и доступных товаров для вашего дома."
  },
  {
    id: 3,
    image: "/icons/sponsorship/basket.png",
    title: "Обучение по Китаю",
    description: "Как эффективно находить и закупать товары на китайском рынке"
  },
  {
    id: 4,
    image: "/icons/sponsorship/alipay.png",
    title: "Пополнить Alipay",
    description: "Удобный способ оплатить заказы в Китае"
  }
]

export const ProfileSidebarData = [
  { id: 1, title: "Консолидация", link: "/consolidation" },
  { id: 2, title: "Активные заказы", link: "/active-orders" },
  { id: 3, title: "История заказов", link: "/order-history" },
  { id: 4, title: "Товары в ожидании", link: "/pending-items" },
  { id: 5, title: "Товары на складе", link: "/warehouse-items" },
  { id: 6, title: "Личные данные", link: "/personal-data" },
  { id: 7, title: "Список ТК", link: "/shipping-companies" },
  { id: 8, title: "Важные темы", link: "/important-topics" }
];

export const MockOrders = [
  { id: 1, orderId: "#96459456", quantity: 4, date: "Заказ размещен 21 апреля 2025 года в 11:06", price: 1559.00 },
  { id: 2, orderId: "#96459456", quantity: 4, date: "Заказ размещен 21 апреля 2025 года в 11:06", price: 333.00 },
  { id: 3, orderId: "#96459456", quantity: 4, date: "Заказ размещен 21 апреля 2025 года в 11:06", price: 123.00 }

]

export const MockImportantTopics =[
  {
    id:1 , title:"Упаковка",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..."
  },
  {
    id:2 , title:"Разделение груза",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..."
  },
  {
    id:3 , title:"Южные ворота",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco..."
  }
]