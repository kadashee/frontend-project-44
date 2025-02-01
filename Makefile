install:
	npm ci

brain-games:
	node src/game/brain-games.js
	node src/games/brain-even.js
	node src/games/brain-calc.js
	node src/games/brain-common-divisor.js
	node src/games/brain-progression.js

publish:
	npm publish --dry-run

lint:
	npx eslint
