# cf-warp

> This is a fork with the ability to set a custom location for the configs and a better CLI. Everything else is the same.
> Install it using `npm i -g 5310:cf-warp`

> A simple cli to get [Warp+](https://blog.cloudflare.com/announcing-warp-plus/) as [WireGuard](https://www.wireguard.com/) configuration

> For people who just want a easy way to get a WireGuard of Warp, just download this file: [https://cf-warp.glitch.me/warp.conf](https://cf-warp.glitch.me/warp.conf).
> Source code of the backend can be found [here](https://glitch.com/edit/#!/cf-warp).

## Usage

By using this, you agree the [Privacy Policy](https://www.cloudflare.com/application/privacypolicy/) and [Terms of Service](https://www.cloudflare.com/application/terms/) of Cloudflare 1.1.1.1

### With Node.js (Recommended)

#### Step 1

Install `cf-warp` globally through yarn or npm.

```bash
yarn global add cf-warp # npm i -g cf-warp
```

#### Step 2

Initialize your Warp+ account by running `cf-warp` command.

Example:

```bash
$ cf-warp
Your Warp credentials are located at "C:\Users\maple3142\.cf-warp\data.json", and WireGuard connection file is "C:\Users\maple3142\.cf-warp\cf-warp.conf".
You currently have 1GB Warp+ quota.
To get your current Warp+ quota, simply run "cf-warp".
To increase your Warp+ quota by 10 GB, simply run "cf-warp 10".
```

#### Step 3

Obtain `cf-warp.conf` from `~/.cf-warp/cf-warp.conf` and use it normally.

### Without Node.js

#### Step 1

Go ahead to [releases](https://github.com/maple3142/cf-warp/releases) page and download a binary for your platform.

#### Step 2

Open your cmd/terminal and locate the binary you just downloaded, such as `cf-warp-win.exe` ...

#### Step 3

Use it just like `cf-warp` installed by npm.

## FAQ

### How does `cf-warp` get Warp+ quota for free?

It currently get quota by faking referrers since there is no way to pay for premium version outside of 1.1.1.1 app, but it is recommended to pay for it on your phone if you think their service is good.

## Thanks

https://github.com/yyuueexxiinngg/some-scripts/tree/master/cloudflare
