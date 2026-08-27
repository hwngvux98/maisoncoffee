export type Locale = "en" | "vi";

export interface StatItem {
  value: string;
  label: string;
}

export interface RoastStep {
  number: string;
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Dictionary {
  locale: Locale;
  nav: {
    coffee: string;
    story: string;
    roasting: string;
    wholesale: string;
    shop: string;
    cartLabel: string;
    menuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    eyebrow: string;
    heading: string;
    subhead: string;
    ctaShop: string;
    ctaStory: string;
    slideAlts: string[];
    slideAlts2: string[];
    prevLabel: string;
    nextLabel: string;
    slideLabel: string;
  };
  stats: StatItem[];
  story: {
    eyebrow: string;
    heading: string;
    paragraphs: string[];
    cta: string;
    imageAlt: string;
  };
  roasting: {
    eyebrow: string;
    heading: string;
    steps: RoastStep[];
  };
  featured: {
    heading: string;
    viewAll: string;
  };
  provenance: {
    ribbon1: string;
    ribbon2: string;
    line: string;
  };
  wholesale: {
    eyebrow: string;
    heading: string;
    body: string;
    tags: string[];
    formTitle: string;
    businessNameLabel: string;
    workEmailLabel: string;
    submit: string;
    submitting: string;
    success: string;
    error: string;
  };
  footer: {
    description: string;
    shopHeading: string;
    companyHeading: string;
    contactHeading: string;
    copyright: string;
  };
  shop: {
    eyebrow: string;
    heading: string;
    subhead: string;
    addToCart: string;
    vatNote: string;
  };
  product: {
    addToCart: string;
    quantityLabel: string;
    specTitle: string;
    brewingTitle: string;
    crossSellTitle: string;
    farmLabel: string;
    regionLabel: string;
    altitudeLabel: string;
    processLabel: string;
    roastLabel: string;
    flavorLabel: string;
    vatNote: string;
    breadcrumbShop: string;
    prevImageLabel: string;
    nextImageLabel: string;
  };
  cart: {
    title: string;
    empty: string;
    browse: string;
    subtotal: string;
    shippingNote: string;
    checkout: string;
    remove: string;
    quantityLabel: string;
    continueShopping: string;
  };
  faq: FaqItem[];
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    locale: "en",
    nav: {
      coffee: "Coffee",
      story: "Our Story",
      roasting: "Roasting",
      wholesale: "Wholesale",
      shop: "Shop",
      cartLabel: "Open cart",
      menuLabel: "Open menu",
      closeMenuLabel: "Close menu",
    },
    hero: {
      eyebrow: "From Mai Son · Son La · Vietnam",
      heading: "Coffee grown in the clouds",
      subhead:
        "Specialty Arabica roasted at origin in Vietnam's northwest region — honey-processed by the ethnic farmers who grow it.",
      ctaShop: "Shop the collection",
      ctaStory: "Our story",
      slideAlts: [
        "Terraced Arabica coffee farm on a misty highland slope in Mai Sơn, Sơn La",
        "Ripe Arabica coffee cherries ready for hand-picking on the branch in Sơn La, Vietnam",
        "A H'Mông farmer hand-picking ripe coffee cherries on a hillside in Mai Sơn, Sơn La",
        "Freshly picked coffee cherries held in the hands of Maison's farmer partners in Sơn La, Vietnam",
      ],
      slideAlts2: [
        "Terraced Arabica coffee farm on a misty highland slope in Mai Sơn, Sơn La",
        "Golden-hour view of highland coffee ridges above 800 meters in Sơn La, Vietnam",
        "Golden-hour view of highland coffee ridges above 800 meters in Sơn La, Vietnam",
        "Nương cà phê Arabica bậc thang trong sương sớm tại Mai Sơn, Sơn La",
        "Highland coffee terraces at sunrise in Mai Sơn, Sơn La, Vietnam",
        "Bag of Maison Specialty coffee standing among honey-processed coffee cherries drying at the farm in Sơn La, Vietnam",
        "Highland coffee terraces at sunrise in Mai Sơn, Sơn La, Vietnam",
      ],
      prevLabel: "Previous slide",
      nextLabel: "Next slide",
      slideLabel: "Go to slide",
    },
    stats: [
      { value: "800m+", label: "Growing altitude" },
      { value: "100%", label: "Highland Arabica" },
      { value: "Honey", label: "Processed at origin" },
      { value: "Direct", label: "From farmer partners" },
    ],
    story: {
      eyebrow: "Our Origin",
      heading: "Grown in the highlands of Sơn La",
      paragraphs: [
        "Maison Coffee was founded in Mai Sơn, Sơn La — the highland region with the largest Arabica-growing area in Vietnam.",
        "We built our roastery at origin, above 800 meters, and work directly with the Thái, H'Mông and Kinh families who tend these hillsides.",
        "Every lot is honey-processed on raised beds in the highland sun, then roasted medium-light nearby — close enough to taste what changes when a bag travels only kilometers, not oceans, before it reaches your cup.",
      ],
      cta: "Partner with us",
      imageAlt:
        "Coffee farmer tending Arabica cherries on a terraced hillside in Mai Sơn, Sơn La",
    },
    roasting: {
      eyebrow: "The Craft",
      heading: "From cherry to cup, roasted at origin",
      steps: [
        {
          number: "01",
          title: "Selective harvest",
          body: "Only fully ripe cherries, picked by hand across multiple passes through each row.",
        },
        {
          number: "02",
          title: "Honey processing",
          body: "Mucilage left intact, dried on raised beds in the highland sun — the source of the body and caramel sweetness.",
        },
        {
          number: "03",
          title: "Small-batch roast",
          body: "Using PROBAT UG22 drum roaster with delicate profile to protecting origin character and maintain consistency — medium to light roast level to appreciate the farm behind the coffee tree.",
        },
        {
          number: "04",
          title: "Sealed fresh",
          body: "Packed within days of roasting, with the roast date printed on every bag.",
        },
      ],
    },
    featured: {
      heading: "Featured coffees",
      viewAll: "View all coffees →",
    },
    provenance: {
      ribbon1: "FROM SON LA,",
      ribbon2: "VIETNAM",
      line: "Driven by the passion to share the unique flavors of our mountains with the world.",
    },
    wholesale: {
      eyebrow: "Wholesale & Export",
      heading: "For cafés, roasters & export partners",
      body: "We supply green and roasted highland Arabica at scale, with full traceability back to farm, region, altitude and process — plus sample kits shipped worldwide so you can taste before you commit.",
      tags: ["Full traceability", "Green or roasted", "Worldwide shipping"],
      formTitle: "Request a sample kit",
      businessNameLabel: "Business name",
      workEmailLabel: "Work email",
      submit: "Request sample kit",
      submitting: "Sending…",
      success: "Thank you — we'll be in touch about your sample kit shortly.",
      error:
        "Something went wrong sending your request. Please try again or email hello@maisoncoffee.vn directly.",
    },
    footer: {
      description:
        "Specialty Arabica roasted at origin in the highlands of Sơn La, Vietnam.",
      shopHeading: "Shop",
      companyHeading: "Company",
      contactHeading: "Contact",
      copyright: "© 2026 Maison Coffee · Mai Sơn, Sơn La, Vietnam",
    },
    shop: {
      eyebrow: "The Collection",
      heading: "Highland Arabica, every way you brew",
      subhead:
        "Single-origin Sơn La coffee — whole bean for your own grind, or drip bags for wherever you are.",
      addToCart: "Add to cart",
      vatNote: "VAT included",
    },
    product: {
      addToCart: "Add to cart",
      quantityLabel: "Quantity",
      specTitle: "Specifications",
      brewingTitle: "Brewing guidance",
      crossSellTitle: "You might also like",
      farmLabel: "Farm",
      regionLabel: "Region",
      altitudeLabel: "Altitude",
      processLabel: "Process",
      roastLabel: "Roast",
      flavorLabel: "Flavor notes",
      vatNote: "VAT included",
      breadcrumbShop: "Shop",
      prevImageLabel: "Previous image",
      nextImageLabel: "Next image",
    },
    cart: {
      title: "Your cart",
      empty: "Your cart is empty.",
      browse: "Browse coffees",
      subtotal: "Subtotal",
      shippingNote: "Shipping & taxes calculated at checkout",
      checkout: "Checkout",
      remove: "Remove",
      quantityLabel: "Quantity",
      continueShopping: "Continue shopping",
    },
    faq: [
      {
        question: "Where is Maison Coffee grown?",
        answer:
          "In Mai Sơn, Sơn La — the highland region with the largest Arabica-growing area in Vietnam, above 800 meters, grown by our Thái, H'Mông and Kinh farmer partners.",
      },
      {
        question: "How is it processed?",
        answer:
          "Honey processed: the mucilage is left on the bean and dried on raised beds in the highland sun, then roasted medium-light at our roastery at origin.",
      },
      {
        question: "Do you supply cafés or export partners?",
        answer:
          "Yes. We supply green and roasted highland Arabica at scale with full traceability to farm, region, altitude and process, and ship sample kits worldwide.",
      },
    ],
  },
  vi: {
    locale: "vi",
    nav: {
      coffee: "Cà phê",
      story: "Câu chuyện",
      roasting: "Rang xay",
      wholesale: "Bán sỉ",
      shop: "Cửa hàng",
      cartLabel: "Mở giỏ hàng",
      menuLabel: "Mở menu",
      closeMenuLabel: "Đóng menu",
    },
    hero: {
      eyebrow: "Từ Mai Sơn · Sơn La · Việt Nam",
      heading: "Cà phê trồng trong mây",
      subhead:
        "Cà phê Arabica đặc sản rang tại vùng nguyên liệu tây bắc Việt Nam — chế biến honey bởi chính những người nông dân trồng nên nó.",
      ctaShop: "Xem bộ sưu tập",
      ctaStory: "Câu chuyện của chúng tôi",
      slideAlts: [
        "Nương cà phê Arabica bậc thang trong sương sớm tại Mai Sơn, Sơn La",
        "Quả cà phê Arabica chín mọng sẵn sàng thu hái bằng tay tại Sơn La, Việt Nam",
        "Người nông dân H'Mông hái cà phê chín trên nương đồi tại Mai Sơn, Sơn La",
        "Cà phê vừa hái được nâng niu trên tay các nông dân đối tác của Maison tại Sơn La, Việt Nam",
      ],
      slideAlts2: [
        "Nương cà phê Arabica bậc thang trong sương sớm tại Mai Sơn, Sơn La",
        "Những triền núi cà phê trên độ cao 1.400 mét ở Sơn La, Việt Nam lúc hoàng hôn",
        "Nương cà phê Arabica bậc thang trong sương sớm tại Mai Sơn, Sơn La",
        "Nương cà phê vùng cao lúc bình minh tại Mai Sơn, Sơn La, Việt Nam",
        "Túi cà phê Maison Specialty đặt giữa những mẻ cà phê chế biến honey đang phơi tại nông trại ở Sơn La, Việt Nam",
        "Nương cà phê vùng cao lúc bình minh tại Mai Sơn, Sơn La, Việt Nam",
      ],
      prevLabel: "Ảnh trước",
      nextLabel: "Ảnh tiếp theo",
      slideLabel: "Đến ảnh",
    },
    stats: [
      { value: "1.400m+", label: "Độ cao canh tác" },
      { value: "100%", label: "Arabica vùng cao" },
      { value: "Honey", label: "Chế biến tại nông trại" },
      { value: "Trực tiếp", label: "Từ nông dân đối tác" },
    ],
    story: {
      eyebrow: "Nguồn gốc",
      heading: "Trồng trên vùng cao Sơn La",
      paragraphs: [
        "Maison Coffee được thành lập tại Mai Sơn, Sơn La — vùng cao có diện tích trồng Arabica lớn nhất Việt Nam.",
        "Chúng tôi xây xưởng rang ngay tại vùng nguyên liệu, trên độ cao 1.400 mét, và làm việc trực tiếp với các hộ nông dân Thái, H'Mông và Kinh gắn bó với những triền đồi này.",
        "Mỗi mẻ cà phê được chế biến honey trên giàn phơi dưới nắng vùng cao, rồi rang medium-light ngay gần đó — đủ gần để cảm nhận sự khác biệt khi cà phê chỉ di chuyển vài chục cây số, chứ không phải vượt đại dương, trước khi đến tay bạn.",
      ],
      cta: "Hợp tác cùng chúng tôi",
      imageAlt:
        "Người nông dân chăm sóc cà phê Arabica trên nương bậc thang tại Mai Sơn, Sơn La",
    },
    roasting: {
      eyebrow: "Quy trình",
      heading: "Từ quả cà phê đến tách cà phê, rang tại vùng nguyên liệu",
      steps: [
        {
          number: "01",
          title: "Hái chọn lọc",
          body: "Chỉ hái những quả chín đỏ hoàn toàn, bằng tay, qua nhiều đợt hái trên từng hàng cây.",
        },
        {
          number: "02",
          title: "Chế biến honey",
          body: "Giữ nguyên lớp nhớt trên vỏ, phơi trên giàn cao dưới nắng vùng cao — tạo nên độ dày vị và vị ngọt caramel đặc trưng.",
        },
        {
          number: "03",
          title: "Rang mẻ nhỏ",
          body: "Rang medium-light để giữ trọn hương vị bản địa — không bao giờ rang đậm đến mức che mất dấu ấn của vùng đất.",
        },
        {
          number: "04",
          title: "Đóng gói khi còn tươi",
          body: "Đóng gói trong vài ngày sau khi rang, với ngày rang được in trên mỗi túi.",
        },
      ],
    },
    featured: {
      heading: "Cà phê nổi bật",
      viewAll: "Xem tất cả →",
    },
    provenance: {
      ribbon1: "TỪ SƠN LA,",
      ribbon2: "VIỆT NAM",
      line: "Với khát khao mang hương vị riêng có của núi rừng quê hương đến với thế giới.",
    },
    wholesale: {
      eyebrow: "Bán sỉ & Xuất khẩu",
      heading: "Dành cho quán cà phê, xưởng rang & đối tác xuất khẩu",
      body: "Chúng tôi cung cấp cà phê Arabica vùng cao — cả nhân xanh và đã rang — với số lượng lớn, truy xuất nguồn gốc đầy đủ đến từng nông trại, vùng trồng, độ cao và phương pháp chế biến, cùng bộ mẫu thử gửi đi khắp thế giới.",
      tags: [
        "Truy xuất nguồn gốc",
        "Nhân xanh hoặc đã rang",
        "Giao hàng toàn cầu",
      ],
      formTitle: "Yêu cầu bộ mẫu thử",
      businessNameLabel: "Tên doanh nghiệp",
      workEmailLabel: "Email công việc",
      submit: "Yêu cầu bộ mẫu thử",
      submitting: "Đang gửi…",
      success: "Cảm ơn bạn — chúng tôi sẽ liên hệ sớm về bộ mẫu thử.",
      error:
        "Có lỗi khi gửi yêu cầu. Vui lòng thử lại hoặc gửi email trực tiếp đến hello@maisoncoffee.vn.",
    },
    footer: {
      description:
        "Cà phê Arabica đặc sản, rang tại vùng cao Sơn La, Việt Nam.",
      shopHeading: "Cửa hàng",
      companyHeading: "Công ty",
      contactHeading: "Liên hệ",
      copyright: "© 2026 Maison Coffee · Mai Sơn, Sơn La, Việt Nam",
    },
    shop: {
      eyebrow: "Bộ sưu tập",
      heading: "Arabica vùng cao, mọi cách pha",
      subhead:
        "Cà phê đơn vùng Sơn La — nguyên hạt để tự xay, hoặc túi lọc drip cho mọi lúc mọi nơi.",
      addToCart: "Thêm vào giỏ",
      vatNote: "Đã bao gồm VAT",
    },
    product: {
      addToCart: "Thêm vào giỏ",
      quantityLabel: "Số lượng",
      specTitle: "Thông số",
      brewingTitle: "Hướng dẫn pha",
      crossSellTitle: "Có thể bạn cũng thích",
      farmLabel: "Nông trại",
      regionLabel: "Vùng trồng",
      altitudeLabel: "Độ cao",
      processLabel: "Chế biến",
      roastLabel: "Mức rang",
      flavorLabel: "Hương vị",
      vatNote: "Đã bao gồm VAT",
      breadcrumbShop: "Cửa hàng",
      prevImageLabel: "Ảnh trước",
      nextImageLabel: "Ảnh tiếp theo",
    },
    cart: {
      title: "Giỏ hàng của bạn",
      empty: "Giỏ hàng của bạn đang trống.",
      browse: "Khám phá cà phê",
      subtotal: "Tạm tính",
      shippingNote: "Phí vận chuyển & thuế được tính khi thanh toán",
      checkout: "Thanh toán",
      remove: "Xóa",
      quantityLabel: "Số lượng",
      continueShopping: "Tiếp tục mua sắm",
    },
    faq: [
      {
        question: "Cà phê Maison được trồng ở đâu?",
        answer:
          "Tại Mai Sơn, Sơn La — vùng cao có diện tích trồng Arabica lớn nhất Việt Nam, trên độ cao 1.400 mét, bởi các hộ nông dân đối tác người Thái, H'Mông và Kinh.",
      },
      {
        question: "Cà phê được chế biến như thế nào?",
        answer:
          "Chế biến honey: giữ nguyên lớp nhớt trên vỏ, phơi trên giàn cao dưới nắng vùng cao, sau đó rang medium-light ngay tại xưởng rang ở vùng nguyên liệu.",
      },
      {
        question: "Có cung cấp cho quán cà phê hoặc đối tác xuất khẩu không?",
        answer:
          "Có. Chúng tôi cung cấp cà phê Arabica vùng cao — nhân xanh và đã rang — với số lượng lớn, truy xuất nguồn gốc đầy đủ, và gửi bộ mẫu thử đi khắp thế giới.",
      },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeHref(locale: Locale, path: string): string {
  return locale === "en" ? path : `/vi${path}`;
}

export function homeHref(locale: Locale): string {
  return locale === "en" ? "/" : "/vi";
}
