class Strong {
  final double strenghtLevel = 1500.99;
}

class QuickRunner {
  void runQuick() {
    print('runnnnnnnnnner!');
  }
}

class Tall {
  final double height = 1.99;
}

enum Team { blue, red }

class Player with Strong, QuickRunner, Tall {
  final Team team;
  Player({
    required this.team,
  });
}

class Horse with Strong, QuickRunner {}

class kids with QuickRunner {}

void main() {
  var player = Player(
    team: Team.red,
  );
}
