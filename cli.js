#!/usr/bin/env node

const path = require('path')
const fs = require('fs-extra')
const program = require('commander')
const untildify = require('untildify')

const generate = require('./lib/generate')
const register = require('./lib/register')
const info = require('./lib/info')
const ref = require('./lib/ref')
const conf = require('./lib/conf')

const sleep = ms => new Promise((resolve) => setTimeout(resolve, ms))
const exists = p => fs.exists(p)
const read = p => fs.readFile(p, 'utf-8')
const write = (p, content) => fs.writeFile(p, content, 'utf-8')

program
	.name('cf-warp')
	.usage('[--dir <path>] [referral]')
	.description(
`A simple cli to get Warp+ as WireGuard configuration.

<<<<<<< HEAD
const resovle = file => path.join(CONFIG_DIR, file)
const exists = file => fs.exists(resovle(file))
const read = file => fs.readFile(resovle(file), 'utf-8')
const write = (file, content) => fs.writeFile(resovle(file), content, 'utf-8')
function sleep(ms) {
	return new Promise(resolve => {
		setTimeout(resolve, ms)
	})
}
function printInfo(data) {
	console.log(
		`Your Warp credentials are located at "${resovle(
			'data.json'
		)}", and WireGuard connection file is "${resovle('cf-warp.conf')}".`
	)
	console.log(
		`You currently have ${data.account.quota / 1000000000}GB Warp+ quota.`
	)
	console.log('To get your current Warp+ quota, simply run "cf-warp".')
	console.log(
		'To increase your Warp+ quota by 10 GB, simply run "cf-warp 10".'
	)
}
async function init() {
	console.log('Initializing Warp credentials...\n')
	const keys = await generate()
	const data = await register(keys)
	await ref(data) // enable Warp+
	const combined = Object.assign({}, keys, data, await info(data))
	await write('data.json', JSON.stringify(combined, null, 2))
	await write('cf-warp.conf', conf(combined))
	printInfo(combined)
}
;(async () => {
	const [dE, wE] = await Promise.all([
		exists('data.json'),
		exists('cf-warp.conf')
	])
	if (!dE) {
		// regenerate if data.json doesn't exists
		return init()
	}
	let data
	try {
		data = JSON.parse(await read('data.json'))
	} catch (e) {
		console.log(
			'"data.json" is corrupted, all the credentials will be reset...\n'
		)
		return init()
	}
	if (!wE) {
		console.log(
			'"cf-warp.conf" missing but "data.json" exists, regenerating a "cf-warp.conf"...\n'
		)
		await write('cf-warp.conf', conf(data))
	}
	const n = parseInt(args[0])
	if (!isNaN(n)) {
		console.log(`Prepare faking Warp+ referrer for ${n} times.`)
		for (let i = 1; i <= n; i++) {
			if (i > 1) {
				await sleep(20000)
			}
			await ref(data)
			console.log(`#${i} fake referrer finished`)
		}
		console.log()
	}
	const newData = await info(data)
	printInfo(newData)
	await write(
		'data.json',
		JSON.stringify(Object.assign({}, data, newData), null, 2)
	)
})()
=======
Run command to generate Warp credentials and Wireguard configuration.
Run command with configuration files in place to view Warp+ quota.
Run command with a number to increment Warp+ quota with that many fake referrals.`
	)
	.option('-d, --dir <path>', 'configuration directory', '~/.cf-warp')
	.arguments('[referral]')
	.action(async (referral = 0, { dir }) => {
		const DATA = path.resolve(`${untildify(dir)}/data.json`)
		const WARP = path.resolve(`${untildify(dir)}/cf-warp.conf`)

		const init = async () => {
			console.log('Initializing Warp credentials...\n')
			const keys = await generate()
			const data = await register(keys)
			await ref(data) // enable Warp+
			const combined = Object.assign({}, keys, data, await info(data))
			await write(DATA, JSON.stringify(combined, null, 2))
			await write(WARP, conf(combined))
			printInfo(combined)
		}
		const printInfo = data => {
			console.log(
`Your Warp credentials are located at "${DATA}", 
and WireGuard connection file is "${WARP}".
`
			)
			console.log(
`You currently have ${data.account.quota / 1000000000}GB Warp+ quota.
`
			)
			console.log(
				'For more information run `cf-warp --help`.'
			)
		}

		if (!(await exists(DATA))) return init()
		let data
		try {
			data = JSON.parse(await read(DATA))
		} catch (e) {
			console.log(
`${DATA} is corrupt. 
Credentials will be reset...
`
			)
			return init()
		}

		if (!(await exists(WARP))) {
			console.log(
`${WARP} is missing.
Regenerating...
`
			)
			await write(WARP, conf(data))
		}

		if (referral) {
			console.log(`Preparing to fake Warp+ referral for ${referral} times.`)
			for (let i = 1; i <= referral; i++) {
				await sleep(20000)
				await ref(data)
				console.log(`#${i} fake referrer finished`)
			}
			console.log()
		}
		const newData = await info(data)
		printInfo(newData)
		await write(
			DATA,
			JSON.stringify(Object.assign({}, data, newData), null, 2)
		)
	})
	.parse(process.argv)
>>>>>>> New CLI with optional custom config directory
