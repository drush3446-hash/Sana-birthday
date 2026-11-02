import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
test("the five opening scrapbook scenes exist in order", () => {
  for (const id of ["page-1","page-2","page-3","page-4","page-5","letter","reasons"]) assert.match(html, new RegExp('id="' + id + '"'));
  assert.ok(html.indexOf('id="page-1"') < html.indexOf('id="page-2"'));
  assert.ok(html.indexOf('id="page-2"') < html.indexOf('id="page-3"'));
  assert.ok(html.indexOf('id="page-3"') < html.indexOf('id="page-4"'));
  assert.ok(html.indexOf('id="page-4"') < html.indexOf('id="page-5"'));
  assert.ok(html.indexOf('id="page-5"') < html.indexOf('id="letter"'));
});
test("the requested copy and November date choices are present", () => {
  for (const phrase of ["kitty wants to deliver a message!","accept ♡","decline","NOVEMBER","kitty wants to know what day is today","kitty wants you to make a wish before blowing the candle","Dear, Sana,","10 THINGS I LOVE"]) assert.ok(html.includes(phrase), phrase);
  assert.match(html, /data-date="08"/);
  assert.match(html, /data-date="26"/);
});
test("all ten reasons have their own photo collage and numbered panel", () => {
  const panels = html.match(/<article class="reason-panel(?: final-reason)?">/g) || [];
  assert.equal(panels.length, 10);
  for (let n=1;n<=10;n++) assert.ok(html.includes('class="reason-number">'+String(n).padStart(2,"0")+'</span>'));
  for (const slot of ["smile","eyes","laugh","heart","habits","strength","voice","dreams","presence","you"]) assert.ok(html.includes('data-photo="'+slot+'"'));
});
test("interactive controls and responsive layout are wired", () => {
  for (const id of ["accept","decline","date-message","cake","flame","progress"]) assert.ok(html.includes('id="'+id+'"'));
  assert.match(html, /addEventListener\("click",blowCandle\)/);
  assert.match(html, /@media\(max-width:760px\)/);
  assert.match(html, /prefers-reduced-motion/);
});
test("Android-first mobile layout has viewport, safe-area spacing, touch targets and overflow protection", () => {
  assert.match(html, /name="viewport"[^>]*width=device-width/);
  assert.match(html, /env\(safe-area-inset-bottom/);
  assert.match(html, /@media\(max-width:760px\)/);
  assert.match(html, /min-height:\s*48px/);
  assert.match(html, /overflow-x:\s*hidden/);
  assert.match(html, /scroll-margin-top/);
  assert.match(html, /font-size:\s*clamp\(/);
  assert.match(html, /-webkit-tap-highlight-color/);
});

test("the Snoopy mascot is replaced by the supplied kitten sticker artwork", () => {
  assert.doesNotMatch(html, /class="dog/);
  assert.equal((html.match(/class="cat-mascot/g) || []).length, 5);
  assert.match(html, /assets\/cat-stickers\.webp/);
  assert.match(html, /kitty wants to deliver a message!/);
  assert.doesNotMatch(html, /Snoopy|snoopy|beagle/i);
});

test("the ten-things chapter has a styled responsive keepsake gallery and kitten accents", () => {
  assert.match(html, /Ten reasons — polished keepsake gallery/);
  assert.match(html, /grid-template-columns:repeat\(2,minmax\(0,1fr\)\)/);
  assert.match(html, /reason-panel\.final-reason\{grid-column:1\/-1/);
  assert.match(html, /assets\/cat-stickers\.webp/);
  assert.match(html, /@media\(max-width:370px\)/);
  assert.equal((html.match(/<article class="reason-panel(?: final-reason)?">/g) || []).length, 10);
});

test("the ten-things gallery uses both supplied floral and cherry artwork with varied crops", () => {
  assert.equal((html.match(/class="photo-slot art-slot/g) || []).length, 18);
  assert.ok(html.includes("Acgtt98b3UwVsR1HmHYa/image.jpg"));
  assert.ok(html.includes("qVMMYcIevBIRKaslLMWM/image.jpg"));
  assert.match(html, /reason-panel:nth-child\(2\).*?border-radius:50%/s);
  assert.match(html, /reason-panel.final-reason/);
  assert.match(html, /@media\(max-width:760px\)/);
});
