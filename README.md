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

### Install Dependencies

In the project's root directory, run the following command to install project dependencies:

```bash
pnpm install
```

### Start the Development Server

Run the following command to start the development server:

```bash
pnpm dev
```

Visit [http://localhost:3001](http://localhost:3001) to view your application.

### Build for Production

Run the following command to build the production version:

```bash
pnpm build
```

## Contributing

Contributions are welcome! If you want to contribute to SocialInsight, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-new-feature`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push your changes to your fork (`git push origin feature-new-feature`).
5. Create a pull request in this repository.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.

## Git Contribution submission specification

- `feat` new features
- `fix` fix the
- `docs` documentation or comments
- `style` code format (changes that do not affect code execution)
- `refactor` refactor
- `perf` performance optimization
- `revert` revert commit
- `test` test related
- `chore` changes in the construction process or auxiliary tools
- `ci` modify CI configuration and scripts
- `types` type definition file changes
- `wip` in development
