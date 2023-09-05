import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		
		int testCase = sc.nextInt();
		int[] arr = new int[testCase];
		
		for(int i=0; i<testCase; i++) {
			arr[i] = sc.nextInt();
		}
		
		for(int i=0; i<testCase; i++) {
			System.out.println(fibo(arr[i]) + " " + fibo(arr[i]+1));
		}
	}

	private static int fibo(int num) {
		int n1 = 1;
		int n2 = 0;
		int result = 1;
		
		if(num==0) {
			return 1;
		} else if(num==1) {
			return 0;
		} else {
			for(int i=0; i<num-2; i++) {
				n1 = n2;
				n2 = result;
				result = n1 + n2;
			}
			return result;
		}
	}
}
