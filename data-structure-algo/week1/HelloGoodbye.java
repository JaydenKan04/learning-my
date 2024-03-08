public class HelloGoodbye {
    static void hello(String a, String b){
        String helloStr = String.format("Hello %s and %s.", a, b);
        System.out.println(helloStr);
    }

    static void goodbye(String a, String b){
        String goodbyeStr = String.format("Goodbye %s and %s.", a, b);
        System.out.println(goodbyeStr);
    }

    public static void main(String[] args) {
        hello(args[0],args[1]);
        goodbye(args[0], args[1]);
    }
}