package main

import "fmt"

func main(){
	var price int = 100
	fmt.Println("Price is", price, "dollars")

	var taxRate float64 = 0.08
	var tax float64 = float64(price) * taxRate // print is int so in order for it to be able to work with tax we need to convert is to float64
	fmt.Println("Tax is", tax, "dollars.")

	var total float64 = float64(price) + tax // same as the above price needs to converted to float.
	fmt.Println("Total cost is", total, "dollars." )

	var availableFunds int = 120 
	fmt.Println(availableFunds, "dollars available.")
	fmt.Println("Within budget ?",  total <= float64(availableFunds)) //available funds is int and total is float 64 in order to do comparision they must be of same type so we convert available funds into float64
}