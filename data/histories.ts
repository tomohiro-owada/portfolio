export type History = {
  index?: number;
  ym: string;
  center: [number, number];
  zoom: number;
  description: string;
  image: string;
  flag?: string; // ← 国旗を追加
  color?: string; // ← 国のイメージカラーを追加
};
export type Coordinate = {
  center: [number, number];
  color: string;
};

const histories: History[] = [
  {
    ym: "1982-01",
    center: [42.904511, 143.167925],
    zoom: 8,
    description: "北海道 帯広市の病院で雪の日に生まれる",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1983-04",
    center: [43.062087, 141.354404],
    zoom: 8,
    image: "https://picsum.photos/id/237/200/300",
    description: "札幌市 小学校1年生まで札幌で過ごす",
  },
  {
    ym: "1984-01",
    center: [43.1245, 143.6106],
    zoom: 8,
    description: "本別町 祖父母と一緒に暮らす",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1985-01",
    center: [36.550096, 139.871997],
    zoom: 8,
    description: "栃木県宇都宮市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1986-01",
    center: [36.183113, 139.733085],
    zoom: 10,
    description: "茨城県古河市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1987-01",
    center: [36.313942, 139.81353],
    zoom: 10,
    description: "栃木県小山市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1988-01",
    center: [35.6663, 139.3158],
    zoom: 10,
    description: "東京都八王子市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1989-01",
    center: [35.562429, 139.388151],
    zoom: 10,
    description: "東京都町田市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1990-01",
    center: [35.626343, 139.633818],
    zoom: 10,
    description: "東京都世田谷区に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1991-01",
    center: [35.739712, 139.747842],
    zoom: 10,
    description: "駒込に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1992-01",
    center: [35.658034, 139.701636],
    zoom: 12,
    description: "渋谷区に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1993-01",
    center: [35.665704, 139.728674],
    zoom: 12,
    description: "六本木に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1994-01",
    center: [35.698383, 139.773072],
    zoom: 12,
    description: "秋葉原に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1995-01",
    center: [35.710835, 139.657027],
    zoom: 12,
    description: "中野区に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1996-01",
    center: [35.9062039, 139.6237359],
    zoom: 12,
    description: "埼玉県さいたま市に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1997-01",
    center: [35.732695, 139.769996],
    zoom: 12,
    description: "東京都荒川区に引っ越す",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1998-01",
    center: [33.585205, 130.331168],
    zoom: 12,
    description: "福岡県福岡市西区",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "1999-01",
    center: [13.4521, 144.7631],
    zoom: 3,
    description: "グアム🇬🇺",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2000-01",
    center: [36.5551, 139.8828],
    zoom: 12,
    description: "栃木県宇都宮市",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2001-01",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-1",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-12",
    center: [51.1656, 10.4515],
    zoom: 5,
    description: "ドイツ🇩🇪ベルリン",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-11",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-10",
    center: [40.1804, 44.5145],
    zoom: 5,
    description: "アルメニア🇦🇲エレバン",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-7",
    center: [52.2323, 21.0084333],
    zoom: 5,
    description: "ポーランド🇵🇱ワルシャワ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-7",
    center: [37.9838, 23.7275],
    zoom: 5,
    description: "ギリシャ🇬🇷アテネ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-7",
    center: [35.8978, 14.5125],
    zoom: 5,
    description: "マルタ🇲🇹バレッタ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-8",
    center: [45.4637, 9.18817],
    zoom: 5,
    description: "イタリア🇮🇹ミラノ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-9",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-11",
    center: [38.7222, -9.1393],
    zoom: 5,
    description: "ポルトガル🇵🇹リスボン",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-12",
    center: [41.0082, 28.9783],
    zoom: 5,
    description: "トルコ🇹🇷イスタンブール",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-12",
    center: [45.4408, 12.3155],
    zoom: 5,
    description: "イタリア🇮🇹ヴェネツィア",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-12",
    center: [50.8466348, 4.3555401],
    zoom: 5,
    description: "ベルギー🇧🇪ブリュッセル",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2021-12",
    center: [51.1656, 10.4515],
    zoom: 5,
    description: "ドイツ🇩🇪ベルリン",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-1",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-1",
    center: [28.6139, 77.209],
    zoom: 5,
    description: "インド🇮🇳ニューデリ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-1",
    center: [21.028472, 105.854167],
    zoom: 5,
    description: "ベトナム🇻🇳ハノイ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-3",
    center: [10.3236, 123.7906],
    zoom: 5,
    description: "フィリピン🇵🇭セブ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-4",
    center: [41.7109, 44.7919],
    zoom: 5,
    description: "ジョージア🇬🇪トビリシ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-5",
    center: [35.89778, 14.5125],
    zoom: 5,
    description: "マルタ🇲🇹バレッタ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-7",
    center: [14.6006, 120.982],
    zoom: 5,
    description: "フィリピン🇵🇭マニラ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2024-7",
    center: [1.28333, 103.85],
    zoom: 5,
    description: "シンガポール🇸🇬",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2024-10",
    center: [13.75222, 100.49389],
    zoom: 5,
    description: "タイ🇹🇭バンコク",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
  {
    ym: "2022-7",
    center: [14.6006, 120.982],
    zoom: 5,
    description: "フィリピン🇵🇭マニラ",
    image:
      "https://fastly.picsum.photos/id/639/536/354.jpg?hmac=BQCVDxVeCKSC1cuqhpCICsOQWvOkgojYvKVQXwbBuWk",
  },
];

const assignIndexToHistories = (histories: History[]): History[] => {
  return histories.map((item, index) => ({
    ...item,
    index,
    flag: countryInfo[detectCountry(histories[index].description)]?.flag || "",
    color:
      countryInfo[detectCountry(histories[index].description)]?.color ||
      "#cccccc", // デフォルトカラー
  }));
};

const countryInfo: Record<string, { flag: string; color: string }> = {
  日本: { flag: "🇯🇵", color: "#bc002d" },
  フィリピン: { flag: "🇵🇭", color: "#0038a8" },
  グアム: { flag: "🇬🇺", color: "#8a1538" },
  ジョージア: { flag: "🇬🇪", color: "#ff0000" },
  ドイツ: { flag: "🇩🇪", color: "#000000" },
  ポーランド: { flag: "🇵🇱", color: "#dc143c" },
  ギリシャ: { flag: "🇬🇷", color: "#0d5eaf" },
  マルタ: { flag: "🇲🇹", color: "#c8102e" },
  イタリア: { flag: "🇮🇹", color: "#008c45" },
  ポルトガル: { flag: "🇵🇹", color: "#006600" },
  トルコ: { flag: "🇹🇷", color: "#e30a17" },
  ベルギー: { flag: "🇧🇪", color: "#000000" },
  インド: { flag: "🇮🇳", color: "#ff9933" },
  ベトナム: { flag: "🇻🇳", color: "#da251d" },
  シンガポール: { flag: "🇸🇬", color: "#ef3340" },
  タイ: { flag: "🇹🇭", color: "#d31245" },
  アルメニア: { flag: "🇦🇲", color: "#0033a0" },
  アメリカ: { flag: "🇺🇸", color: "#3c3b6e" },
  // 必要に応じて追加！
};

const detectCountry = (description: string): string => {
  if (description.includes("フィリピン")) return "フィリピン";
  if (description.includes("グアム")) return "グアム";
  if (description.includes("ジョージア")) return "ジョージア";
  if (description.includes("ドイツ")) return "ドイツ";
  if (description.includes("ポーランド")) return "ポーランド";
  if (description.includes("ギリシャ")) return "ギリシャ";
  if (description.includes("マルタ")) return "マルタ";
  if (description.includes("イタリア")) return "イタリア";
  if (description.includes("ポルトガル")) return "ポルトガル";
  if (description.includes("トルコ")) return "トルコ";
  if (description.includes("ベルギー")) return "ベルギー";
  if (description.includes("インド")) return "インド";
  if (description.includes("ベトナム")) return "ベトナム";
  if (description.includes("シンガポール")) return "シンガポール";
  if (description.includes("タイ")) return "タイ";
  if (description.includes("アルメニア")) return "アルメニア";
  if (
    description.includes("札幌") ||
    description.includes("東京") ||
    description.includes("栃木") ||
    description.includes("中野") ||
    description.includes("駒込")
  )
    return "日本";

  return "日本"; // デフォルト
};

export default assignIndexToHistories(histories);
