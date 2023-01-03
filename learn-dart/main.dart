void main(List<String> args) {
  /// #1.0 Hello World

  print("hello world");

  /// #1.1 The Var Keyword

  var name = "tokoyami"; // Method 1
  String name1 = "towa"; // Method 2
  name = "tokoyami towa";

  /// #1.2 Dynamic Type

  dynamic Vtube; // dynamic type
  Vtube = 'towa';
  Vtube = 12345;
  Vtube = true;
  var Zzz; // dynamic type

  /// #1.3 Nullable Variables

  String? Brain = "useless"; // String or null
  Brain = null;

  /// #1.4 Final Variables

  final realname = "Minwoo";
  // realname = "Sun";  Uncorrectable
  final String username = "Hoseon";
  // username = "Hina";  Uncorrectable

  /// #1.5 Late Variables

  late final String meme;
  // print(meme);  Failed to use meme
  meme = 'zerotwo';
  // meme = 'cocaine'  Uncorrectable

  /// #1.6 Constant Variables

  const price = 360000; // 컴파일 시점에 바뀌지 않는 값
  // final API = fetchAPI();  컴파일 시점에 바뀌는 값

  /// #2.0 Basic Data Types

  String food = 'dogfood';
  bool girlFriend = false;
  int Like = 5000500000000;
  double dollar = 234.99;
  num x = 34343434;
  x = 3434.3434;

  /// #2.1 Lists
  var giveMeSix = true;
  var case1 = [
    1,
    2,
    3,
    4,
    5,
    if (giveMeSix) 6, // giveMeSix가 true이면 6을 넣음
  ];

  if (giveMeSix) {
    case1.add(6); // 위와 같은 기능이다.
  }

  ///#2.2 String Interpolation

  var suki = 'towa';
  var membership = 4;
  var sentence =
      'My favorite Vtuber is $suki. I subscribed to the membership for ${membership + 3} months.';
  print(sentence);

  /// #2.3 Collection For

  var LoveFruits = ["Strawberry", "Melon"];
  var newFruits = [
    for (var fruit in LoveFruits) "❤️ $fruit",
    "Mango",
    "Apple",
  ];

  print(newFruits); // 출력결과 [Mango, Apple, ❤️ Strawberry, ❤️ Melon]

  /// #2.4 Maps

  var player = {
    'name': 'towa',
    'xp': 99.99,
    'superpower': false,
  };

  Map<int, bool> play = {
    1: true,
    2: false,
    3: true,
  };

  /// #2.5 Sets
  var numbers = {1, 2, 3, 4};
  numbers.add(1);
  numbers.add(1);
  numbers.add(1);
  print(numbers); // 출력결과 {1, 2, 3, 4}
}
