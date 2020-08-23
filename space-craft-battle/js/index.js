"use strict";
import { Rock, Craft, Lightning } from "./enemies.js";
import { init } from "./play.js";
const app = document.getElementById("app");

// Set up canvas
const canvas = document.querySelector("canvas");
export const ctx = canvas.getContext("2d");
export const width = canvas.width;
export const height = canvas.height;

init();
