// pass_fail reports whether a grade is passing or failing.
package main

import (
	"bufio"
	"fmt"
	"log"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Print("Please enter a grade: ")
	reader := bufio.NewReader(os.Stdin)
	input, err := reader.ReadString('\n')
	//checking err for input
	if err != nil {
		log.Fatal(err)
	}
	//makeing sure that the input doesn't have any escape characters
	input = strings.TrimSpace(input)
	//parsing a string into float64 using strconv package
	grade, err := strconv.ParseFloat(input, 64)
	//checking err for grade
	if err != nil {
		log.Fatal(err)
	}

	var status string 
	// checking the grades to create the status values
	if grade >= 60 {
		status = "passing"
	} else {
		status = "failing"
	}

	fmt.Println("A grade of", grade, "is", status)
}
