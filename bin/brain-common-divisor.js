#!/usr/bin/env node
import { runGame } from "../src/index.js";
import { getGameRound, gameDescription } from "../src/games/game-common-divisor.js";

runGame(gameDescription, getGameRound);