install:
	npm ci

brain-games:
	node src/game/brain-games.js
	node src/games/brain-even.js
	node src/games/brain-calc.js
	node src/games/brain-gcd.js
	node src/games/brain-progression.js
	node sec/games/brain-prime.js

publish:
	npm publish --dry-run

lint:
	npx eslint
