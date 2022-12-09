interface Sound{
    public void SoundUp(int level);
    public void SoundDown(int level);
}
class TV implements Sound {
    private int SndLevel;
    public TV() {
        SndLevel = 0;
    }
    public void SoundUp(int level) {
        SndLevel += level;
    }
    public void SoundDown(int level) {
        SndLevel -= level;
        if(SndLevel < 0) SndLevel = 0;
    }
}
class Radio implements Sound {
    private int SndLevel;
    public Radio() {
        SndLevel = 0;
    }
    public void SoundUp(int level) {
        SndLevel += level;
    }
    public void SoundDown(int level) {
        SndLevel -= level;
        if(SndLevel < 0) SndLevel = 0;
    }
}
public class SoundExam {
    public static void main(String[] args) {
        Sound radio = new Radio();
        Sound tv = new TV();
        radio.SoundUp(5);
        tv.SoundUp(5);
    }
}
