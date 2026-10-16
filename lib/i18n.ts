import { CONTACT_EMAIL } from "@/lib/site";

export type Locale = "en" | "vi" | "zh";

const localePrefixes: Record<Locale, string> = {
  en: "",
  vi: "/vi",
  zh: "/zh",
};

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
    shopAllLink: string;
    cartLink: string;
    ourStoryLink: string;
    roastingLink: string;
    wholesaleLink: string;
    address: string;
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
    checkoutNotice: string;
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
      heading: "VIETNAM ARABICA Coffee grown in the clouds",
      subhead:
        "Specialty Arabica roasted at origin in Vietnam's northwest region — honey-processed by the ethnic farmers who nurturing the coffee tree.",
      ctaShop: "Shop the collection",
      ctaStory: "Our story",
      slideAlts: [
        "Terraced Arabica coffee farm on a misty highland slope in Mai Sơn, Sơn La",
        "Ripe Arabica coffee cherries ready for hand-picking on the branch in Sơn La, Vietnam",
        "A H'Mông farmer hand-picking ripe coffee cherries on a hillside in Mai Sơn, Sơn La",
        "Freshly picked coffee cherries held in the hands of Maison's farmer partners in Sơn La, Vietnam",
      ],
      slideAlts2: [
        "COFFEE SHOW HANOI 2025",
        "COFFEE SHOW SEOUL 2025",
        "WORLD OF COFFEE BANGKOK 2026",
        "COFFEE SHOW SEOUL 2025",
        "VIETNAM EXPO 2026",
        "VIETNAM EXPO 2026",
        "SEOUL FOOD 2025",
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
      error: `Something went wrong sending your request. Please try again or email ${CONTACT_EMAIL} directly.`,
    },
    footer: {
      description:
        "Specialty Arabica roasted at origin in the highlands of Sơn La, Vietnam.",
      shopHeading: "Shop",
      companyHeading: "Company",
      contactHeading: "Contact",
      shopAllLink: "All coffee",
      cartLink: "Cart",
      ourStoryLink: "Our story",
      roastingLink: "Roasting",
      wholesaleLink: "Wholesale",
      address: "Mai Sơn, Sơn La, Vietnam",
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
      checkoutNotice: `Online checkout is coming soon — email ${CONTACT_EMAIL} to place this order.`,
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
        "Cà phê Arabica đặc sản rang tại vùng nguyên liệu tây bắc Việt Nam — được sơ chế honey/wash bởi chính những người nông dân nuôi dưỡng cây cà phê.",
      ctaShop: "Xem bộ sưu tập",
      ctaStory: "Câu chuyện của chúng tôi",
      slideAlts: [
        "Nương cà phê Arabica bậc thang trong sương sớm tại Mai Sơn, Sơn La",
        "Quả cà phê Arabica chín mọng sẵn sàng thu hái bằng tay tại Sơn La, Việt Nam",
        "Người nông dân H'Mông hái cà phê chín trên nương đồi tại Mai Sơn, Sơn La",
        "Cà phê vừa hái được nâng niu trên tay các nông dân đối tác của Maison tại Sơn La, Việt Nam",
      ],
      slideAlts2: [
        "Gian hàng Maison Coffee tại Cafe Show Hà Nội, với các kệ cà phê Maison Specialty và nhân viên đang pha pour-over",
        "Gian trưng bày Maison Coffee tại Cafe Show Hà Nội, giới thiệu câu chuyện và quy trình sản xuất cà phê",
        "Đội ngũ Maison Coffee tại gian hàng hội chợ quốc tế ở Bangkok",
        "Khách tham quan tụ tập tại gian hàng Maison Coffee ở một hội chợ cà phê",
        "Khách tham quan xem cà phê Maison Specialty tại gian hàng hội chợ xuất khẩu",
        "Nhân viên Maison Coffee pha cà phê cho khách tại lối đi đông đúc của hội chợ",
        "Đội ngũ Maison Coffee tại một hội chợ quốc tế, cùng bộ dụng cụ cupping và thẻ thông số nông trại",
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
      error: `Có lỗi khi gửi yêu cầu. Vui lòng thử lại hoặc gửi email trực tiếp đến ${CONTACT_EMAIL}.`,
    },
    footer: {
      description:
        "Cà phê Arabica đặc sản, rang tại vùng cao Sơn La, Việt Nam.",
      shopHeading: "Cửa hàng",
      companyHeading: "Công ty",
      contactHeading: "Liên hệ",
      shopAllLink: "Tất cả cà phê",
      cartLink: "Giỏ hàng",
      ourStoryLink: "Câu chuyện",
      roastingLink: "Rang xay",
      wholesaleLink: "Bán sỉ",
      address: "Mai Sơn, Sơn La, Việt Nam",
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
      checkoutNotice: `Thanh toán trực tuyến sắp ra mắt — vui lòng email ${CONTACT_EMAIL} để đặt hàng.`,
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
  zh: {
    locale: "zh",
    nav: {
      coffee: "咖啡",
      story: "品牌故事",
      roasting: "烘焙工艺",
      wholesale: "批发合作",
      shop: "商店",
      cartLabel: "打开购物车",
      menuLabel: "打开菜单",
      closeMenuLabel: "关闭菜单",
    },
    hero: {
      eyebrow: "来自 梅山 · 山罗省 · 越南",
      heading: "云端生长的越南阿拉比卡咖啡",
      subhead:
        "产自越南西北产区的精品阿拉比卡咖啡,由悉心照料咖啡树的少数民族农户以蜜处理法加工,并在产地现场烘焙。",
      ctaShop: "选购咖啡",
      ctaStory: "品牌故事",
      slideAlts: [
        "越南山罗省梅山云雾缭绕的阶梯状阿拉比卡咖啡田",
        "越南山罗省枝头上准备手工采摘的成熟阿拉比卡咖啡果",
        "一位苗族农户在山罗省梅山的山坡上手工采摘成熟咖啡果",
        "越南山罗省 Maison 农户伙伴手中刚采摘的新鲜咖啡果",
      ],
      slideAlts2: [
        "COFFEE SHOW HANOI 2025",
        "COFFEE SHOW SEOUL 2025",
        "WORLD OF COFFEE BANGKOK 2026",
        "COFFEE SHOW SEOUL 2025",
        "VIETNAM EXPO 2026",
        "VIETNAM EXPO 2026",
        "SEOUL FOOD 2025",
      ],
      prevLabel: "上一张",
      nextLabel: "下一张",
      slideLabel: "跳转到幻灯片",
    },
    stats: [
      { value: "800米+", label: "种植海拔" },
      { value: "100%", label: "高地阿拉比卡" },
      { value: "蜜处理", label: "产地加工" },
      { value: "直采", label: "来自农户伙伴" },
    ],
    story: {
      eyebrow: "产地故事",
      heading: "生长于山罗省高地",
      paragraphs: [
        "Maison Coffee 创立于越南山罗省梅山——越南阿拉比卡咖啡种植面积最大的高地产区。",
        "我们在海拔800米以上的产地建立了自己的烘焙工坊,与悉心照料这些山坡的泰族、苗族和京族家庭直接合作。",
        "每一批咖啡都在高地阳光下的晒架上进行蜜处理,随后就近以中浅烘焙完成——近到足以品尝出咖啡只需跨越几十公里、而非远渡重洋抵达您杯中时的那份不同。",
      ],
      cta: "与我们合作",
      imageAlt: "咖啡农户在越南山罗省梅山的阶梯状山坡上照料阿拉比卡咖啡果",
    },
    roasting: {
      eyebrow: "工艺",
      heading: "从咖啡果到咖啡杯,产地现场烘焙",
      steps: [
        {
          number: "01",
          title: "精选采摘",
          body: "只手工采摘完全成熟的咖啡果,对每一行咖啡树多次巡回采摘。",
        },
        {
          number: "02",
          title: "蜜处理加工",
          body: "保留果胶层,在高地阳光下的晒架上晾晒——这正是醇厚口感与焦糖甜味的来源。",
        },
        {
          number: "03",
          title: "小批量烘焙",
          body: "使用 PROBAT UG22 滚筒烘焙机,以细致的烘焙曲线保护产地风味并保持一致性——中浅烘焙,呈现咖啡树背后的那片土地。",
        },
        {
          number: "04",
          title: "新鲜密封",
          body: "烘焙后数日内完成包装,每袋均印有烘焙日期。",
        },
      ],
    },
    featured: {
      heading: "精选咖啡",
      viewAll: "查看全部咖啡 →",
    },
    provenance: {
      ribbon1: "来自山罗省,",
      ribbon2: "越南",
      line: "我们怀抱热忱,致力于将故乡群山独有的风味分享给世界。",
    },
    wholesale: {
      eyebrow: "批发与出口",
      heading: "面向咖啡馆、烘焙商与出口合作伙伴",
      body: "我们可批量供应高地阿拉比卡生豆与熟豆,从农场、产区、海拔到加工方式均可完整溯源,并提供寄往全球的样品套装,方便您在下单前先行试饮。",
      tags: ["完整溯源", "生豆或熟豆", "全球配送"],
      formTitle: "申请样品套装",
      businessNameLabel: "公司名称",
      workEmailLabel: "工作邮箱",
      submit: "申请样品套装",
      submitting: "发送中…",
      success: "感谢您的申请——我们会尽快就样品套装与您联系。",
      error: `发送请求时出现问题,请重试,或直接发邮件至 ${CONTACT_EMAIL}。`,
    },
    footer: {
      description: "产自越南山罗省高地、产地现场烘焙的精品阿拉比卡咖啡。",
      shopHeading: "商店",
      companyHeading: "公司",
      contactHeading: "联系方式",
      shopAllLink: "全部咖啡",
      cartLink: "购物车",
      ourStoryLink: "品牌故事",
      roastingLink: "烘焙工艺",
      wholesaleLink: "批发合作",
      address: "越南山罗省梅山",
      copyright: "© 2026 Maison Coffee · 越南山罗省梅山",
    },
    shop: {
      eyebrow: "咖啡系列",
      heading: "高地阿拉比卡,适配每一种冲煮方式",
      subhead: "越南山罗省单一产区咖啡——整豆自行研磨,或挂耳咖啡随时随地享用。",
      addToCart: "加入购物车",
      vatNote: "含增值税",
    },
    product: {
      addToCart: "加入购物车",
      quantityLabel: "数量",
      specTitle: "产品规格",
      brewingTitle: "冲煮指南",
      crossSellTitle: "您可能也会喜欢",
      farmLabel: "农场",
      regionLabel: "产区",
      altitudeLabel: "海拔",
      processLabel: "加工方式",
      roastLabel: "烘焙度",
      flavorLabel: "风味特征",
      vatNote: "含增值税",
      breadcrumbShop: "商店",
      prevImageLabel: "上一张图片",
      nextImageLabel: "下一张图片",
    },
    cart: {
      title: "您的购物车",
      empty: "您的购物车是空的。",
      browse: "浏览咖啡",
      subtotal: "小计",
      shippingNote: "运费及税费将在结算时计算",
      checkout: "结算",
      checkoutNotice: `在线结算即将上线——请发邮件至 ${CONTACT_EMAIL} 下单。`,
      remove: "移除",
      quantityLabel: "数量",
      continueShopping: "继续选购",
    },
    faq: [
      {
        question: "Maison Coffee 的咖啡产自哪里?",
        answer:
          "产自越南山罗省梅山——越南阿拉比卡咖啡种植面积最大的高地产区,海拔800米以上,由我们的泰族、苗族和京族农户伙伴种植。",
      },
      {
        question: "咖啡是如何加工的?",
        answer:
          "采用蜜处理法:保留果胶层,在高地阳光下的晒架上晾晒,随后在我们位于产地的烘焙工坊以中浅烘焙完成。",
      },
      {
        question: "是否为咖啡馆或出口合作伙伴供货?",
        answer:
          "是的。我们可批量供应高地阿拉比卡生豆与熟豆,提供完整的产地、产区、海拔与加工方式溯源,并提供寄往全球的样品套装。",
      },
    ],
  },
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localeHref(locale: Locale, path: string): string {
  return `${localePrefixes[locale]}${path}`;
}

export function homeHref(locale: Locale): string {
  return localePrefixes[locale] || "/";
}
