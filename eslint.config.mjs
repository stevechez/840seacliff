import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
});

 

const eslintConfig = [
	...compat.extends('next/core-web-vitals', 'next/typescript'),
	{
		extends: 'next/core-web-vitals',
		rules: {
			// ADD THE RULE YOU WANT TO DISABLE HERE
			// Example: To disable the rule that warns about using <img> instead of <Image>
			'@next/next/no-img-element': 'off',

			// Example: To disable the rule about unescaped apostrophes
			'react/no-unescaped-entities': 'off',
		},
	},
];

export default eslintConfig;
