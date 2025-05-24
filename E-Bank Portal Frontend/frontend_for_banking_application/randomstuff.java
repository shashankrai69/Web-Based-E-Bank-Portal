class cylinder{
    private int radius;
    private int height;
    private int surfaceArea;
    private int volume;


    public int getRadius(){
        return radius;
    }

    public void setRadius(int radius){
        this.radius = radius;
        
    }

    public int getHeight(){
        return  height;
    }

    public void setHeight(int height){
        this.height = height;
    }


    public int calcArea(int radius, int height){
        surfaceArea = (2*(22/7)*radius*height) + (2*(22/7)*radius*radius);
        return surfaceArea;
    }

    public int calcVolume(int radius, int height){
        volume = (22/7)*radius*radius*height;
        return volume;
    }
}

public class randomstuff{

    
    public static void main(String[] args) {
        cylinder somecylinder = new cylinder();
        // somecylinder.setHeight(5);
        // System.out.println(somecylinder.getHeight());
        // somecylinder.setRadius(9);
        // System.out.println(somecylinder.getRadius());
        int radius = 5;
        int height = 6;
        System.out.println(somecylinder.calcArea(radius,height));
        System.out.println(somecylinder.calcVolume(radius, height));

    }
}