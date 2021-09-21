package main

import "fmt"

func main() {
	// var int int = 12 //this shadows the built in int type
	// var append string = "this shadows the append function"
	// var fmt string = "this shadows the fmt package"

	// var count int
	// var language = append([]string{}, "Nepali")
	// fmt.Println(int, append, "on", fmt, language, count)

	var count int = 12
	var suffix string = "minutes of bonus footage"
	var format string = "DVD"
	var languages = append([]string{}, "Nepali")
	fmt.Println(count, suffix, "on", format, languages)

}
