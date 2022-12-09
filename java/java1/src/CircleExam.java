abstract class ShapeExam{
    public abstract double getArea();
    public abstract double getCircum();
}
public abstract class CircleExam extends ShapeExam{
    private double radius;

    public CircleExam (double rd) {
        radius = rd;
    }

    public double GetArea() {
        return 3.14 * radius * radius;
    }

    public double getCircum() {
        return 2 * radius * 3.14;
    }

    public static void main(String[] args) {
        
    }
}



