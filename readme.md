# **🇰🇪 Kenyan Mobile Number Validator**

A robust and efficient Node.js package designed for accurate **validation and identification of Kenyan mobile phone numbers**. This utility helps developers ensure data integrity by checking if a given string conforms to valid Kenyan mobile number formats for **Safaricom, Airtel, and Telkom**, including the international **E.164 standard**.

## **✨ Features**

- **Precise Validation:** Utilizes a comprehensive regular expression to validate Kenyan mobile numbers.
- **Operator Detection:** Identifies if a number belongs to Safaricom, Airtel, or Telkom.
- **E.164 Compliance:** Supports and validates numbers in the international E.164 format (+2547... or +25411...).
- **Flexible Input:** Handles common national formats (07... or 7...) and converts them to E.164 for validation.
- **Lightweight & Fast:** Designed for performance in Node.js environments.
- **Developer-Friendly API:** Simple and intuitive functions for quick integration into your projects.

## **🚀 Installation**

To add kenyan-mobile-number-validator to your Node.js project, use npm or yarn:

npm install kenyan-mobile-number-validator  
\# OR  
yarn add kenyan-mobile-number-validator  
<br/>

## **💡 Usage**

Here's how you can use the package to validate and get information about Kenyan mobile numbers:

```JavaScript
const { getKenyanMobileOperatorInfo, NETWORKS } = require('kenyan-mobile-number-validator');

// Valid Safaricom number (E.164 format)
const number1 = '+254722123456';
const info1 = getKenyanMobileOperatorInfo(number1);
console.log(`Info for '${number1}':`, info1); // { code: 1, name: "safaricom" }
console.log(`Is Safaricom?`, info1.name === NETWORKS.safaricom.name); // true

// Valid Airtel number (national format with leading zero)
const number2 = '0733123456';
const info2 = getKenyanMobileOperatorInfo(number2);
console.log(`Info for '${number2}':`, info2); // { code: 2, name: "airtel" }
console.log(`Is Airtel?`, info2.name === NETWORKS.airtel.name); // true

// Valid Telkom number (national format without leading zero)
const number3 = '770123456';
const info3 = getKenyanMobileOperatorInfo(number3);
console.log(`Info for '${number3}':`, info3); // { code: 3, name: "telkom" }
console.log(`Is Telkom?`, info3.name === NETWORKS.telkom.name); // true

// Invalid number (too short or wrong prefix)
const invalidNumber1 = '0722123';
const infoInvalid1 = getKenyanMobileOperatorInfo(invalidNumber1);
console.log(`Info for '${invalidNumber1}':`, infoInvalid1); // { code: 0, name: "MNO not found" }
console.log(`Is valid Kenyan number?`, infoInvalid1.name !== NETWORKS.unknown.name); // false

const invalidNumber2 = '+254800123456';
const infoInvalid2 = getKenyanMobileOperatorInfo(invalidNumber2);
console.log(`Info for '${invalidNumber2}':`, infoInvalid2); // { code: 0, name: "MNO not found" }
console.log(`Is valid Kenyan number?`, infoInvalid2.name !== NETWORKS.unknown.name); // false

```

## **🌐 Supported Kenyan Mobile Operators & Prefixes**

This validator is meticulously crafted to recognize the current and common mobile number prefixes for the major Kenyan telecommunication providers:

- **Safaricom:** 070X, 071X, 072X, 0740-0743, 0745, 0746, 0748, 0757-0759, 0768, 0769, 079X, 0110-0117
- **Airtel:** 073X, 0750-0756, 078X, 0100–0108
- **Telkom:** 077X

_(Note: The 0 prefix is for national dialing; the validator handles conversion to +254 for internal validation against E.164 standards.)_

## **💡 Why E.164 Format is Important for Phone Numbers**

The **E.164 standard** is the international recommendation for telephone numbering. It ensures that every phone number is unique globally and allows for seamless routing of calls and messages across different countries.

Using the E.164 format (+ \[Country Code\] \[National Significant Number\]) is crucial for:

- **Global Compatibility:** Ensures your application can handle phone numbers from anywhere in the world.
- **API Integrations:** Many third-party APIs (e.g., SMS gateways, payment systems) require phone numbers in E.164 format.
- **Data Consistency:** Provides a uniform way to store and process phone numbers in your databases.
- **Reduced Errors:** Minimizes ambiguity and incorrect routing, especially for international communications.

This package helps you convert and validate Kenyan numbers into this globally recognized format, making your applications more robust and reliable for **Kenyan phone number data management**.

## **🤝 Contributing**

Contributions are welcome! If you find a bug, have a feature request, or want to improve the code, please feel free to open an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature-name).
3. Make your changes.
4. Commit your changes (git commit -m 'feat: Add new feature').
5. Push to the branch (git push origin feature/your-feature-name).
6. Open a Pull Request.

## **📄 License**

This project is licensed under the MIT License.

## **📧 Contact**

For any questions or feedback, feel free to reach out to the author:

Kelly Egesa

kelly.egesa@icloud.com

[GitHub Profile](https://github.com/EgesaKelly)
