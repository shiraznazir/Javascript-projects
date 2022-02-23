const format0 = /^\d{10}$/
    const format1 = /^\d{3}\-\d{3}\-\d{4}$/
    const format2 = /^\(\d{3}\)\d{3}\-\d{4}$/
    const format3 = /^\(\d{3}\) \d{3}\-\d{4}$/
    const format4 = /^\d{3} \d{3} \d{4}$/
    const format5 = /^1 \d{3} \d{3} \d{4}$/
    const format6 = /^1 \(\d{3}\) \d{3}\-\d{4}$/
    const format7 = /^1\(\d{3}\)\d{3}\-\d{4}$/
    const format8 = /^1 \d{3}\-\d{3}\-\d{4}$/
    
	return format0.test(str) || format1.test(str) || format2.test(str) || format3.test(str) || format4.test(str) || format5.test(str) || format6.test(str) || format7.test(str) || format8.test(str)