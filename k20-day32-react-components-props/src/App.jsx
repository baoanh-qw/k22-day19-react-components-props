import { useState } from "react";
import FaqAccordion from "./components/FaqAccordion.jsx";
import ProductList from "./components/ProductList.jsx";
import UserProfileCard from "./components/UserProfileCard.jsx";

const users = [
  {
    id: 1,
    avatar:
      "https://photo-zmp3.zadn.vn/avatars/5/9/6/9/59696c9dba7a914d587d886049c10df6.jpg",
    fullName: "Lê Thành Công",
    jobTitle: "Frontend Developer",
    isOnline: true,
    skills: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: 2,
    avatar:
      "https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-1/575108869_2281661389022356_6615143114784231643_n.jpg?stp=dst-jpg_tt6&cstp=mx960x960&ctp=s200x200&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=1d2534&_nc_eui2=AeFvrwJE70PJivZJloLXz1reEynCRnQo_BsTKcJGdCj8GyEVcE3iEhVClxoeDsuoDSNmNkDNYbeksJbjEDv4jHIL&_nc_ohc=rGDFKNS8uF0Q7kNvwFRa4me&_nc_oc=AdrXne2VUnlvKYkLU1tXQnR9lRww76Rkf_NuCZJdX356X5B4J_xpHykd6GCwtLUq-Ho&_nc_zt=24&_nc_ht=scontent.fhan14-4.fna&_nc_gid=4nc3HnTeuvkX76Z3jmroSA&_nc_ss=7b2a8&oh=00_AQRj-2mjkO5uBTK2gFAb0Q9K-52i_n2LpSYxSAk8qWRiTQ&oe=6AEF7912",
    fullName: "Quách Hoàng Bảo Anh",
    jobTitle: "UI/UX Designer",
    isOnline: false,
    skills: ["Figma", "UI Design", "Prototyping"],
  },
];

const products = [
  {
    id: 1,
    name: "Tai nghe không dây AirBeat Pro",
    price: 1890000,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=85",
    inStock: true,
    discountPercent: 15,
  },
  {
    id: 2,
    name: "Đồng hồ thông minh Active S",
    price: 2490000,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=85",
    inStock: true,
    discountPercent: 0,
  },
];

const faqData = [
  {
    id: 1,
    question: "Props trong React dùng để làm gì?",
    answer:
      "Props giúp truyền dữ liệu từ component cha xuống component con, để component có thể tái sử dụng với nhiều dữ liệu khác nhau.",
    category: "React cơ bản",
    isHot: true,
  },
  {
    id: 2,
    question: "Vì sao cần chia giao diện thành component?",
    answer:
      "Chia component giúp giao diện dễ tổ chức, tái sử dụng và bảo trì. Mỗi component có thể phụ trách một phần giao diện riêng.",
    category: "Component",
    isHot: false,
  },
  {
    id: 3,
    question: "Khi render danh sách bằng map cần lưu ý gì?",
    answer:
      "Mỗi phần tử nên có một prop key ổn định và duy nhất để React nhận biết chính xác phần tử nào được thêm, xóa hoặc cập nhật.",
    category: "Render dữ liệu",
    isHot: true,
  },
  {
    id: 4,
    question: "Tailwind CSS hoạt động như thế nào?",
    answer:
      "Tailwind cung cấp các utility class nhỏ để áp dụng trực tiếp kiểu dáng trong markup, giúp xây dựng và điều chỉnh giao diện nhanh chóng.",
    category: "Giao diện",
    isHot: false,
  },
];

function SectionHeading({ eyebrow, title, description, number }) {
  return (
    <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-indigo-600">
          {number} / {eyebrow}
        </p>
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
          {description}
        </p>
      </div>
      <span className="w-fit rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-500">
        React · Props · Tailwind
      </span>
    </div>
  );
}

const exercises = [
  {
    id: "users",
    number: "01",
    label: "Bài 1",
    title: "Hồ sơ thành viên",
  },
  {
    id: "products",
    number: "02",
    label: "Bài 2",
    title: "Sản phẩm nổi bật",
  },
  {
    id: "faq",
    number: "03",
    label: "Bài 3",
    title: "Câu hỏi thường gặp",
  },
];

function App() {
  const [activeExercise, setActiveExercise] = useState("users");

  const handleSelectFaq = (id) => {
    const selectedFaq = faqData.find((faq) => faq.id === id);
    if (selectedFaq) {
      window.alert(`Bạn đã chọn câu hỏi: ${selectedFaq.question}`);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <nav
        className="mb-8 grid grid-cols-1 gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm sm:grid-cols-3"
        aria-label="Chọn bài tập"
      >
        {exercises.map((exercise) => (
          <button
            key={exercise.id}
            type="button"
            aria-current={activeExercise === exercise.id ? "page" : undefined}
            onClick={() => setActiveExercise(exercise.id)}
            className={`flex items-center gap-3 rounded-xl px-4 py-3 text-left transition ${
              activeExercise === exercise.id
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                : "text-slate-600 hover:bg-slate-50"
            }`}
          >
            <span
              className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                activeExercise === exercise.id
                  ? "bg-white/15 text-white"
                  : "bg-slate-100 text-slate-500"
              }`}
            >
              {exercise.number}
            </span>
            <span>
              <span className="block text-sm font-semibold">
                {exercise.label}
              </span>
              <span
                className={`mt-0.5 block text-xs ${
                  activeExercise === exercise.id
                    ? "text-indigo-100"
                    : "text-slate-400"
                }`}
              >
                {exercise.title}
              </span>
            </span>
          </button>
        ))}
      </nav>

      {activeExercise === "users" && (
        <section aria-label="Bài 1: User Profile Card">
          <SectionHeading
            number="01"
            eyebrow="Bài 1"
            title="Hồ sơ thành viên"
            description="Mỗi thẻ nhận thông tin qua props, render kỹ năng bằng map và xử lý nút liên hệ."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {users.map((user) => (
              <UserProfileCard key={user.id} {...user} />
            ))}
          </div>
        </section>
      )}

      {activeExercise === "products" && (
        <section aria-label="Bài 2: Product List">
          <SectionHeading
            number="02"
            eyebrow="Bài 2"
            title="Sản phẩm nổi bật"
            description="Danh sách sản phẩm responsive với giá khuyến mãi, trạng thái tồn kho và thao tác thêm vào giỏ."
          />
          <ProductList products={products} />
        </section>
      )}

      {activeExercise === "faq" && (
        <section aria-label="Bài 3: FAQ Accordion">
          <SectionHeading
            number="03"
            eyebrow="Bài 3"
            title="Câu hỏi thường gặp"
            description="Mở từng câu hỏi để xem câu trả lời; nút chi tiết truyền ID về component cha."
          />
          <FaqAccordion faqData={faqData} onSelectFaq={handleSelectFaq} />
        </section>
      )}

      <footer className="mt-14 border-t border-slate-200 pt-6 text-center text-xs text-slate-400">
        Bài tập React Components &amp; Props · Xây dựng bằng React và Tailwind
        CSS
      </footer>
    </main>
  );
}

export default App;
