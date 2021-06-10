package main

import (
	"fmt"
	"strings"
)

func main(){
	error := "G$$d"
	replacer := strings.NewReplacer("$","o")
	correct := replacer.Replace(error)

	fmt.Println(error, correct)

}