package main

import (
	"fmt"
	"time"
)


func main(){ 
	var now time.Time = time.Now()
	var year int = now.Year()
	var month string = now.Month().String()
	date := now.UTC()
	fmt.Println(now, "\n",year, month,date)
}