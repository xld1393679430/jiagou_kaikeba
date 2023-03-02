#! /usr/bin/env node

import inquirer from 'inquirer';
import ejs from 'ejs'
import fs from 'node:fs'
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path"

const __dirname = dirname(fileURLToPath(import.meta.url))

inquirer.prompt([
	{
		type: "input",
		name: "name",
		message: "Project name",
		default: "AAA"
	}
]).then(answers => {
	const tmplPath = path.join(__dirname, "templates")
	const targetPath = process.cwd()

	fs.readdir(tmplPath, (err, files) => {
		if (err) {
			throw new Error(err)
		}
		files.forEach(file => {
			ejs.renderFile(path.join(tmplPath, file), answers, (err, result) => {
				if (err) {
					throw new Error(err)
				}
				fs.writeFileSync(path.join(targetPath, file), result)
			})
		})
	})
})
