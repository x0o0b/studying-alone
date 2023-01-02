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
}
