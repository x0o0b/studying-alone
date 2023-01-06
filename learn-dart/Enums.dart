enum Team {
  red,
  blue,
}

enum XPLevel { beginner, medium, pro }

class Player {
  String name;
  XPLevel xp;
  Team team;

  Player({
    required this.name,
    required this.xp,
    required this.team,
  });

  void sayHello() {
    print("Hi my name is ${name}");
  }
}

void main() {
  var towa = Player(name: 'towa', xp: XPLevel.beginner, team: Team.red);
  var ayame = towa
    ..name = 'ayame'
    ..xp = XPLevel.pro
    ..team = Team.blue
    ..sayHello();
}
