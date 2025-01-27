# SocialInsight

SocialInsight is a web application designed to monitor and analyze public comments on Facebook. It provides users with detailed insights into trends and public sentiment related to specific names or terms.

## Features

- **Search Terms Input**: Allows users to input specific names or terms to search in public comments.
- **Public Comments Collection**: Uses the Facebook Graph API to retrieve public comments related to the search terms.
- **Sentiment Analysis**: Classifies the retrieved comments as positive, negative, or neutral.
- **Results Presentation**: Displays a visual summary of the results, including sentiment graphs and highlighted comments.

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/your_username/SocialInsight.git
   ```
2. Navigate to the project directory:
   ```sh
   cd SocialInsight
   ```
3. Install the necessary dependencies:
   ```sh
   npm install
   ```
4. Configure environment variables:
   - Create a `.env` file in the root directory of the project.
   - Add your Facebook access token to the `.env` file:
   ```env
   FACEBOOK_ACCESS_TOKEN=YOUR_ACCESS_TOKEN
   ```

## Usage

1. Start the application:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`.
3. Enter the name or search term in the provided field and click "Search".
4. Review the presented results and graphs.

## Contributing

Contributions are welcome! If you want to contribute to SocialInsight, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your changes to your fork (`git push origin feature-new-feature`).
5. Create a pull request in this repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
