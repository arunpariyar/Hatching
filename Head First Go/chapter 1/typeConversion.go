package main

import (
	"fmt"
	"reflect"
)

func main() {

	var number = 100

	fmt.Println(number, reflect.TypeOf(float64(number)))

}
