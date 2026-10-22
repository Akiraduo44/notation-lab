!function(t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.Vex = e() : t.Vex = e();
}("undefined" != typeof window ? window : "undefined" != typeof globalThis ? globalThis : this, () => (() => {
  "use strict";
  var t = { d: (e2, i2) => {
    for (var b2 in i2) t.o(i2, b2) && !t.o(e2, b2) && Object.defineProperty(e2, b2, { enumerable: true, get: i2[b2] });
  } };
  t.g = function() {
    if ("object" == typeof globalThis) return globalThis;
    try {
      return this || new Function("return this")();
    } catch (t2) {
      if ("object" == typeof window) return window;
    }
  }(), t.o = (t2, e2) => Object.prototype.hasOwnProperty.call(t2, e2), t.r = (t2) => {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  };
  var e = {};
  t.d(e, { default: () => i });
  var i = {};
  function b(t2, e2, i2 = true) {
    if ("object" != typeof t2 || null === t2) return false;
    let b2 = t2.constructor;
    if (i2) {
      for (; null !== t2; ) {
        if (b2 = t2.constructor, "CATEGORY" in b2 && b2.CATEGORY === e2) return true;
        t2 = Object.getPrototypeOf(t2);
      }
      return false;
    }
    return "CATEGORY" in b2 && b2.CATEGORY === e2;
  }
  t.r(i), t.d(i, { Accidental: () => bt, Annotation: () => ct, AnnotationHorizontalJustify: () => ht, AnnotationVerticalJustify: () => mt, Articulation: () => ut, BEAM_BOTH: () => Oe, BEAM_LEFT: () => Fe, BEAM_RIGHT: () => Me, BarNote: () => At, Barline: () => kt, BarlineType: () => zt, Beam: () => Re, Bend: () => Nt, BoundingBox: () => D, BoundingBoxComputation: () => C, Builder: () => Ke, CanvasContext: () => Qt, Category: () => x, ChordSymbol: () => Mt, ChordSymbolHorizontalJustify: () => Bt, ChordSymbolVerticalJustify: () => Dt, Clef: () => de, ClefNote: () => Le, Crescendo: () => We, Curve: () => Ie, CurvePosition: () => Ue, Dot: () => Ot, EasyScore: () => Qe, EasyScoreGrammar: () => je, Element: () => R, Factory: () => vi, Flow: () => ki, Font: () => F, FontStyle: () => P, FontWeight: () => E, Formatter: () => Pe, Fraction: () => z, FretHandFinger: () => Rt, GhostNote: () => ti, Glyph: () => Z, GlyphNote: () => ei, GraceNote: () => ii, GraceNoteGroup: () => jt, GraceTabNote: () => wi, KeyManager: () => zi, KeySigNote: () => bi, KeySignature: () => _e, Modifier: () => tt, ModifierContext: () => ce, ModifierPosition: () => J, MultiMeasureRest: () => ni, Music: () => et, Note: () => vt, NoteHead: () => Lt, NoteSubGroup: () => Vt, Ornament: () => Kt, OutlineCode: () => $, Parenthesis: () => $t, Parser: () => Ye, PedalMarking: () => li, Piece: () => Ve, Registry: () => O, RenderContext: () => ft, Renderer: () => le, RendererBackends: () => be, RendererLineEndType: () => ae, RepeatNote: () => ri, Repetition: () => xe, RuntimeError: () => g, SVGContext: () => ie, Stave: () => ze, StaveConnector: () => De, StaveHairpin: () => Bi, StaveLine: () => mi, StaveModifier: () => Pt, StaveModifierPosition: () => wt, StaveNote: () => It, StaveSection: () => ge, StaveTempo: () => ye, StaveText: () => ue, StaveTie: () => Gt, Stem: () => at, StemmableNote: () => Wt, StringNumber: () => oe, Stroke: () => re, SymbolModifiers: () => Et, SymbolTypes: () => Ct, System: () => ci, TabNote: () => di, TabSlide: () => Di, TabStave: () => _i, TabTie: () => Ht, TextBracket: () => yi, TextBracketPosition: () => gi, TextDynamics: () => ui, TextFormatter: () => rt, TextJustification: () => ne, TextNote: () => pe, TickContext: () => Ce, Tickable: () => Tt, TimeSigNote: () => fi, TimeSignature: () => Te, TimeSignatureGlyph: () => Se, Tremolo: () => Ci, Tuning: () => Ei, Tuplet: () => Ae, TupletLocation: () => ke, Vex: () => Yi, Vibrato: () => he, VibratoBracket: () => Si, Voice: () => Xt, VoiceMode: () => Yt, Volta: () => fe, VoltaType: () => se, defined: () => p, drawDot: () => St, globalObject: () => y, isAccidental: () => a, isAnnotation: () => n, isBarline: () => s, isCategory: () => b, isDot: () => l, isGraceNote: () => o, isGraceNoteGroup: () => r, isHTMLCanvas: () => Jt, isHTMLDiv: () => qt, isNote: () => h, isRenderContext: () => m, isStaveNote: () => c, isStemmableNote: () => d, isTabNote: () => _, log: () => u, midLine: () => S, normalizeAngle: () => v, prefix: () => T, sumArray: () => w, warn: () => f });
  const a = (t2) => b(t2, x.Accidental), n = (t2) => b(t2, x.Annotation), s = (t2) => b(t2, x.Barline), l = (t2) => b(t2, x.Dot), o = (t2) => b(t2, x.GraceNote), r = (t2) => b(t2, x.GraceNoteGroup), h = (t2) => b(t2, x.Note), m = (t2) => b(t2, x.RenderContext), c = (t2) => b(t2, x.StaveNote), d = (t2) => b(t2, x.StemmableNote), _ = (t2) => b(t2, x.TabNote);
  var x;
  !function(t2) {
    t2.Accidental = "Accidental", t2.Annotation = "Annotation", t2.Articulation = "Articulation", t2.Barline = "Barline", t2.BarNote = "BarNote", t2.Beam = "Beam", t2.Bend = "Bend", t2.ChordSymbol = "ChordSymbol", t2.Clef = "Clef", t2.ClefNote = "ClefNote", t2.Crescendo = "Crescendo", t2.Curve = "Curve", t2.Dot = "Dot", t2.Element = "Element", t2.Fraction = "Fraction", t2.FretHandFinger = "FretHandFinger", t2.GhostNote = "GhostNote", t2.Glyph = "Glyph", t2.GlyphNote = "GlyphNote", t2.GraceNote = "GraceNote", t2.GraceNoteGroup = "GraceNoteGroup", t2.GraceTabNote = "GraceTabNote", t2.KeySignature = "KeySignature", t2.KeySigNote = "KeySigNote", t2.Modifier = "Modifier", t2.MultiMeasureRest = "MultiMeasureRest", t2.Note = "Note", t2.NoteHead = "NoteHead", t2.NoteSubGroup = "NoteSubGroup", t2.Ornament = "Ornament", t2.Parenthesis = "Parenthesis", t2.PedalMarking = "PedalMarking", t2.RenderContext = "RenderContext", t2.RepeatNote = "RepeatNote", t2.Repetition = "Repetition", t2.Stave = "Stave", t2.StaveConnector = "StaveConnector", t2.StaveHairpin = "StaveHairpin", t2.StaveLine = "StaveLine", t2.StaveModifier = "StaveModifier", t2.StaveNote = "StaveNote", t2.StaveSection = "StaveSection", t2.StaveTempo = "StaveTempo", t2.StaveText = "StaveText", t2.StaveTie = "StaveTie", t2.Stem = "Stem", t2.StemmableNote = "StemmableNote", t2.StringNumber = "StringNumber", t2.Stroke = "Stroke", t2.System = "System", t2.TabNote = "TabNote", t2.TabSlide = "TabSlide", t2.TabStave = "TabStave", t2.TabTie = "TabTie", t2.TextBracket = "TextBracket", t2.TextDynamics = "TextDynamics", t2.TextNote = "TextNote", t2.Tickable = "Tickable", t2.TimeSignature = "TimeSignature", t2.TimeSigNote = "TimeSigNote", t2.Tremolo = "Tremolo", t2.Tuplet = "Tuplet", t2.Vibrato = "Vibrato", t2.VibratoBracket = "VibratoBracket", t2.Voice = "Voice", t2.Volta = "Volta";
  }(x || (x = {}));
  class g extends Error {
    constructor(t2, e2 = "") {
      super("[RuntimeError] " + t2 + ": " + e2), this.code = t2;
    }
  }
  function y() {
    return "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t.g ? t.g : Function("return this")();
  }
  function p(t2, e2 = "undefined", i2 = "") {
    if (void 0 === t2) throw new g(e2, i2);
    return t2;
  }
  function u(t2, ...e2) {
    if (!e2) return;
    const i2 = Array.prototype.slice.call(e2).join(" ");
    y().console.log(t2 + ": " + i2);
  }
  function f(...t2) {
    const e2 = t2.join(" "), i2 = new Error();
    y().console.log("Warning: ", e2, i2.stack);
  }
  function S(t2, e2) {
    let i2 = e2 + (t2 - e2) / 2;
    var b2, a2;
    return i2 % 2 > 0 && (i2 = ((b2 = 10 * i2) % (a2 = 5) >= a2 / 2 ? parseInt("" + b2 / a2, 10) * a2 + a2 : parseInt("" + b2 / a2, 10) * a2) / 10), i2;
  }
  function T(t2) {
    return `vf-${t2}`;
  }
  function v(t2) {
    return (t2 %= 2 * Math.PI) < 0 && (t2 += 2 * Math.PI), t2;
  }
  function w(t2) {
    return t2.reduce((t3, e2) => t3 + e2, 0);
  }
  class z {
    static get CATEGORY() {
      return x.Fraction;
    }
    static GCD(t2, e2) {
      if ("number" != typeof t2 || Number.isNaN(t2) || "number" != typeof e2 || Number.isNaN(e2)) throw new g("BadArgument", `Invalid numbers: ${t2}, ${e2}`);
      let i2;
      for (; 0 !== e2; ) i2 = e2, e2 = t2 % e2, t2 = i2;
      return t2;
    }
    static LCM(t2, e2) {
      return t2 * e2 / z.GCD(t2, e2);
    }
    static LCMM(t2) {
      return 0 === t2.length ? 0 : 1 === t2.length ? t2[0] : 2 === t2.length ? z.LCM(t2[0], t2[1]) : z.LCM(t2.shift(), z.LCMM(t2));
    }
    constructor(t2, e2) {
      this.numerator = 1, this.denominator = 1, this.set(t2, e2);
    }
    set(t2 = 1, e2 = 1) {
      return this.numerator = t2, this.denominator = e2, this;
    }
    value() {
      return this.numerator / this.denominator;
    }
    simplify() {
      let t2 = this.numerator, e2 = this.denominator;
      const i2 = z.GCD(t2, e2);
      return t2 /= i2, e2 /= i2, e2 < 0 && (e2 = -e2, t2 = -t2), this.set(t2, e2);
    }
    add(t2 = 0, e2 = 1) {
      const [i2, b2] = B(t2, e2), a2 = z.LCM(this.denominator, b2), n2 = a2 / this.denominator, s2 = a2 / b2, l2 = this.numerator * n2 + i2 * s2;
      return this.set(l2, a2);
    }
    subtract(t2 = 0, e2 = 1) {
      const [i2, b2] = B(t2, e2), a2 = z.LCM(this.denominator, b2), n2 = a2 / this.denominator, s2 = a2 / b2, l2 = this.numerator * n2 - i2 * s2;
      return this.set(l2, a2);
    }
    multiply(t2 = 1, e2 = 1) {
      const [i2, b2] = B(t2, e2);
      return this.set(this.numerator * i2, this.denominator * b2);
    }
    divide(t2 = 1, e2 = 1) {
      const [i2, b2] = B(t2, e2);
      return this.set(this.numerator * b2, this.denominator * i2);
    }
    equals(t2) {
      const e2 = z.__staticFractionA.copy(t2).simplify(), i2 = z.__staticFractionB.copy(this).simplify();
      return e2.numerator === i2.numerator && e2.denominator === i2.denominator;
    }
    greaterThan(t2) {
      const e2 = z.__staticFractionB.copy(this);
      return e2.subtract(t2), e2.numerator > 0;
    }
    greaterThanEquals(t2) {
      const e2 = z.__staticFractionB.copy(this);
      return e2.subtract(t2), e2.numerator >= 0;
    }
    lessThan(t2) {
      return !this.greaterThanEquals(t2);
    }
    lessThanEquals(t2) {
      return !this.greaterThan(t2);
    }
    clone() {
      return new z(this.numerator, this.denominator);
    }
    copy(t2) {
      return "number" == typeof t2 ? this.set(t2, 1) : this.set(t2.numerator, t2.denominator);
    }
    quotient() {
      return Math.floor(this.numerator / this.denominator);
    }
    remainder() {
      return this.numerator % this.denominator;
    }
    makeAbs() {
      return this.denominator = Math.abs(this.denominator), this.numerator = Math.abs(this.numerator), this;
    }
    toString() {
      return `${this.numerator}/${this.denominator}`;
    }
    toSimplifiedString() {
      return z.__staticFractionTmp.copy(this).simplify().toString();
    }
    toMixedString() {
      let t2 = "";
      const e2 = this.quotient(), i2 = z.__staticFractionTmp.copy(this);
      return e2 < 0 && i2.makeAbs(), 0 !== e2 ? (t2 += e2, 0 !== i2.numerator && (t2 += ` ${i2.toSimplifiedString()}`)) : t2 = 0 === i2.numerator ? "0" : i2.toSimplifiedString(), t2;
    }
    parse(t2) {
      const e2 = t2.split("/"), i2 = parseInt(e2[0], 10), b2 = e2[1] ? parseInt(e2[1], 10) : 1;
      return this.set(i2, b2);
    }
  }
  function B(t2, e2 = 1) {
    return "number" == typeof t2 ? [t2, e2] : [t2.numerator, t2.denominator];
  }
  z.__staticFractionA = new z(), z.__staticFractionB = new z(), z.__staticFractionTmp = new z();
  class D {
    static copy(t2) {
      return new D(t2.x, t2.y, t2.w, t2.h);
    }
    constructor(t2, e2, i2, b2) {
      this.x = t2, this.y = e2, this.w = i2, this.h = b2;
    }
    getX() {
      return this.x;
    }
    getY() {
      return this.y;
    }
    getW() {
      return this.w;
    }
    getH() {
      return this.h;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    setW(t2) {
      return this.w = t2, this;
    }
    setH(t2) {
      return this.h = t2, this;
    }
    move(t2, e2) {
      return this.x += t2, this.y += e2, this;
    }
    clone() {
      return D.copy(this);
    }
    mergeWith(t2) {
      const e2 = t2, i2 = this.x < e2.x ? this.x : e2.x, b2 = this.y < e2.y ? this.y : e2.y, a2 = Math.max(this.x + this.w, e2.x + e2.w) - i2, n2 = Math.max(this.y + this.h, e2.y + e2.h) - b2;
      return this.x = i2, this.y = b2, this.w = a2, this.h = n2, this;
    }
  }
  class C {
    constructor() {
      this.x1 = Number.NaN, this.y1 = Number.NaN, this.x2 = Number.NaN, this.y2 = Number.NaN;
    }
    getX1() {
      return this.x1;
    }
    getY1() {
      return this.y1;
    }
    width() {
      return this.x2 - this.x1;
    }
    height() {
      return this.y2 - this.y1;
    }
    addPoint(t2, e2) {
      (isNaN(this.x1) || t2 < this.x1) && (this.x1 = t2), (isNaN(this.x2) || t2 > this.x2) && (this.x2 = t2), (isNaN(this.y1) || e2 < this.y1) && (this.y1 = e2), (isNaN(this.y2) || e2 > this.y2) && (this.y2 = e2);
    }
    addX(t2) {
      this.addPoint(t2, this.y1);
    }
    addY(t2) {
      this.addPoint(this.x1, t2);
    }
    addQuadraticCurve(t2, e2, i2, b2, a2, n2) {
      this.addPoint(t2, e2), this.addPoint(a2, n2);
      const s2 = i2 - t2;
      let l2 = s2 - (a2 - i2);
      if (0 != l2) {
        const e3 = s2 / l2;
        if (e3 > 0 && e3 < 1) {
          const b3 = 1 - e3;
          this.addX(b3 * b3 * t2 + 2 * b3 * e3 * i2 + e3 * e3 * a2);
        }
      }
      const o2 = b2 - e2;
      if (l2 = o2 - (n2 - b2), 0 != l2) {
        const t3 = o2 / l2;
        if (t3 > 0 && t3 < 1) {
          const i3 = 1 - t3;
          this.addY(i3 * i3 * e2 + 2 * i3 * t3 * b2 + t3 * t3 * n2);
        }
      }
    }
    addBezierCurve(t2, e2, i2, b2, a2, n2, s2, l2) {
      const o2 = [t2, e2], r2 = [i2, b2], h2 = [a2, n2], m2 = [s2, l2];
      let c2;
      this.addPoint(o2[0], o2[1]), this.addPoint(m2[0], m2[1]);
      const d2 = (t3, e3) => Math.pow(1 - t3, 3) * o2[e3] + 3 * Math.pow(1 - t3, 2) * t3 * r2[e3] + 3 * (1 - t3) * Math.pow(t3, 2) * h2[e3] + Math.pow(t3, 3) * m2[e3];
      for (c2 = 0; c2 <= 1; c2++) {
        const t3 = 6 * o2[c2] - 12 * r2[c2] + 6 * h2[c2], e3 = -3 * o2[c2] + 9 * r2[c2] - 9 * h2[c2] + 3 * m2[c2], i3 = 3 * r2[c2] - 3 * o2[c2];
        if (0 === e3) {
          if (0 === t3) continue;
          const e4 = -i3 / t3;
          0 < e4 && e4 < 1 && (0 === c2 && this.addX(d2(e4, c2)), 1 === c2 && this.addY(d2(e4, c2)));
          continue;
        }
        const b3 = Math.pow(t3, 2) - 4 * i3 * e3;
        if (b3 < 0) continue;
        const a3 = (-t3 + Math.sqrt(b3)) / (2 * e3);
        0 < a3 && a3 < 1 && (0 === c2 && this.addX(d2(a3, c2)), 1 === c2 && this.addY(d2(a3, c2)));
        const n3 = (-t3 - Math.sqrt(b3)) / (2 * e3);
        0 < n3 && n3 < 1 && (0 === c2 && this.addX(d2(n3, c2)), 1 === c2 && this.addY(d2(n3, c2)));
      }
    }
  }
  var E, P, k = function(t2, e2, i2, b2) {
    return new (i2 || (i2 = Promise))(function(a2, n2) {
      function s2(t3) {
        try {
          o2(b2.next(t3));
        } catch (t4) {
          n2(t4);
        }
      }
      function l2(t3) {
        try {
          o2(b2.throw(t3));
        } catch (t4) {
          n2(t4);
        }
      }
      function o2(t3) {
        var e3;
        t3.done ? a2(t3.value) : (e3 = t3.value, e3 instanceof i2 ? e3 : new i2(function(t4) {
          t4(e3);
        })).then(s2, l2);
      }
      o2((b2 = b2.apply(t2, e2 || [])).next());
    });
  };
  let A;
  !function(t2) {
    t2.NORMAL = "normal", t2.BOLD = "bold";
  }(E || (E = {})), function(t2) {
    t2.NORMAL = "normal", t2.ITALIC = "italic";
  }(P || (P = {}));
  const N = {};
  class F {
    static convertSizeToPixelValue(t2 = F.SIZE) {
      var e2;
      if ("number" == typeof t2) return t2 * F.scaleToPxFrom.pt;
      {
        const i2 = parseFloat(t2);
        if (isNaN(i2)) return 0;
        const b2 = t2.replace(/[\d.\s]/g, "").toLowerCase();
        return i2 * (null !== (e2 = F.scaleToPxFrom[b2]) && void 0 !== e2 ? e2 : 1);
      }
    }
    static convertSizeToPointValue(t2 = F.SIZE) {
      var e2;
      if ("number" == typeof t2) return t2;
      {
        const i2 = parseFloat(t2);
        if (isNaN(i2)) return 0;
        const b2 = t2.replace(/[\d.\s]/g, "").toLowerCase();
        return i2 * ((null !== (e2 = F.scaleToPxFrom[b2]) && void 0 !== e2 ? e2 : 1) / F.scaleToPxFrom.pt);
      }
    }
    static validate(t2, e2, i2, b2) {
      if ("string" == typeof t2 && void 0 === e2 && void 0 === i2 && void 0 === b2) return F.fromCSSString(t2);
      let a2;
      return "object" == typeof t2 ? (a2 = t2.family, e2 = t2.size, i2 = t2.weight, b2 = t2.style) : a2 = t2, a2 = null != a2 ? a2 : F.SANS_SERIF, e2 = null != e2 ? e2 : F.SIZE + "pt", i2 = null != i2 ? i2 : E.NORMAL, b2 = null != b2 ? b2 : P.NORMAL, "" === i2 && (i2 = E.NORMAL), "" === b2 && (b2 = P.NORMAL), "number" == typeof e2 && (e2 = `${e2}pt`), "number" == typeof i2 && (i2 = i2.toString()), { family: a2, size: e2, weight: i2, style: b2 };
    }
    static fromCSSString(t2) {
      A || (A = document.createElement("span")), A.style.font = t2;
      const { fontFamily: e2, fontSize: i2, fontWeight: b2, fontStyle: a2 } = A.style;
      return { family: e2, size: i2, weight: b2, style: a2 };
    }
    static toCSSString(t2) {
      var e2;
      if (!t2) return "";
      let i2;
      const b2 = t2.style;
      let a2;
      i2 = b2 === P.NORMAL || "" === b2 || void 0 === b2 ? "" : b2.trim() + " ";
      const n2 = t2.weight;
      let s2;
      a2 = n2 === E.NORMAL || "" === n2 || void 0 === n2 ? "" : "number" == typeof n2 ? n2 + " " : n2.trim() + " ";
      const l2 = t2.size;
      s2 = void 0 === l2 ? F.SIZE + "pt " : "number" == typeof l2 ? l2 + "pt " : l2.trim() + " ";
      return `${i2}${a2}${s2}${null !== (e2 = t2.family) && void 0 !== e2 ? e2 : F.SANS_SERIF}`;
    }
    static scaleSize(t2, e2) {
      if ("number" == typeof t2) return t2 * e2;
      return `${parseFloat(t2) * e2}${t2.replace(/[\d.\s]/g, "")}`;
    }
    static isBold(t2) {
      if (t2) {
        if ("number" == typeof t2) return t2 >= 600;
        {
          const e2 = parseInt(t2, 10);
          return isNaN(e2) ? "bold" === t2.toLowerCase() : e2 >= 600;
        }
      }
      return false;
    }
    static isItalic(t2) {
      return !!t2 && t2.toLowerCase() === P.ITALIC;
    }
    static loadWebFont(t2, e2, i2 = true) {
      return k(this, void 0, void 0, function* () {
        const b2 = new FontFace(t2, (i2 ? `url(${e2}2) format('woff2'), ` : "") + `url(${e2}) format('woff')`);
        return yield b2.load(), document.fonts.add(b2), b2;
      });
    }
    static loadWebFonts() {
      return k(this, void 0, void 0, function* () {
        const t2 = F.WEB_FONT_HOST, e2 = F.WEB_FONT_FILES;
        for (const i2 in e2) {
          const b2 = e2[i2];
          F.loadWebFont(i2, t2 + b2);
        }
      });
    }
    static load(t2, e2, i2) {
      let b2 = N[t2];
      return b2 || (b2 = new F(t2), N[t2] = b2), e2 && b2.setData(e2), i2 && b2.setMetrics(i2), b2;
    }
    constructor(t2) {
      this.name = t2;
    }
    getName() {
      return this.name;
    }
    getData() {
      return p(this.data, "FontError", "Missing font data");
    }
    getMetrics() {
      return p(this.metrics, "FontError", "Missing metrics");
    }
    setData(t2) {
      this.data = t2;
    }
    setMetrics(t2) {
      this.metrics = t2;
    }
    hasData() {
      return void 0 !== this.data;
    }
    getResolution() {
      return this.getData().resolution;
    }
    getGlyphs() {
      return this.getData().glyphs;
    }
    lookupMetric(t2, e2) {
      const i2 = t2.split(".");
      let b2 = this.getMetrics();
      for (let t3 = 0; t3 < i2.length; t3++) {
        const a2 = b2[i2[t3]];
        if (void 0 === a2) return e2;
        b2 = a2;
      }
      return b2;
    }
    toString() {
      return "[" + this.name + " Font]";
    }
  }
  F.SANS_SERIF = "Arial, sans-serif", F.SERIF = "Times New Roman, serif", F.SIZE = 10, F.scaleToPxFrom = { pt: 4 / 3, px: 1, em: 16, "%": 0.16, in: 96, mm: 96 / 25.4, cm: 96 / 2.54 }, F.WEB_FONT_HOST = "https://unpkg.com/vexflow-fonts@1.0.3/", F.WEB_FONT_FILES = { "Roboto Slab": "robotoslab/RobotoSlab-Medium_2.001.woff", PetalumaScript: "petaluma/PetalumaScript_1.10_FS.woff" };
  class M {
    constructor() {
      this.id = {}, this.type = {}, this.class = {};
    }
  }
  class O {
    static getDefaultRegistry() {
      return O.defaultRegistry;
    }
    static enableDefaultRegistry(t2) {
      O.defaultRegistry = t2;
    }
    static disableDefaultRegistry() {
      O.defaultRegistry = void 0;
    }
    constructor() {
      this.index = new M();
    }
    clear() {
      return this.index = new M(), this;
    }
    setIndexValue(t2, e2, i2, b2) {
      const a2 = this.index;
      a2[t2][e2] || (a2[t2][e2] = {}), a2[t2][e2][i2] = b2;
    }
    updateIndex({ id: t2, name: e2, value: i2, oldValue: b2 }) {
      const a2 = this.getElementById(t2);
      void 0 !== b2 && this.index[e2][b2] && delete this.index[e2][b2][t2], i2 && a2 && this.setIndexValue(e2, i2, a2.getAttribute("id"), a2);
    }
    register(t2, e2) {
      if (!(e2 = e2 || t2.getAttribute("id"))) throw new g("Can't add element without `id` attribute to registry");
      return t2.setAttribute("id", e2), this.setIndexValue("id", e2, e2, t2), this.updateIndex({ id: e2, name: "type", value: t2.getAttribute("type"), oldValue: void 0 }), t2.onRegister(this), this;
    }
    getElementById(t2) {
      var e2, i2;
      return null === (i2 = null === (e2 = this.index.id) || void 0 === e2 ? void 0 : e2[t2]) || void 0 === i2 ? void 0 : i2[t2];
    }
    getElementsByAttribute(t2, e2) {
      const i2 = this.index[t2];
      if (i2) {
        const t3 = i2[e2];
        if (t3) {
          return Object.keys(t3).map((e3) => t3[e3]);
        }
      }
      return [];
    }
    getElementsByType(t2) {
      return this.getElementsByAttribute("type", t2);
    }
    getElementsByClass(t2) {
      return this.getElementsByAttribute("class", t2);
    }
    onUpdate(t2) {
      return ["id", "type", "class"].includes(t2.name) && this.updateIndex(t2), this;
    }
  }
  class R {
    static get CATEGORY() {
      return x.Element;
    }
    static newID() {
      return "auto" + R.ID++;
    }
    constructor() {
      var t2;
      this.children = [], this.attrs = { id: R.newID(), type: this.getCategory(), class: "" }, this.rendered = false, null === (t2 = O.getDefaultRegistry()) || void 0 === t2 || t2.register(this);
    }
    addChildElement(t2) {
      return this.children.push(t2), this;
    }
    getCategory() {
      return this.constructor.CATEGORY;
    }
    setStyle(t2) {
      return this.style = t2, this;
    }
    setGroupStyle(t2) {
      return this.style = t2, this.children.forEach((e2) => e2.setGroupStyle(t2)), this;
    }
    getStyle() {
      return this.style;
    }
    applyStyle(t2 = this.context, e2 = this.getStyle()) {
      return e2 && t2 ? (t2.save(), e2.shadowColor && t2.setShadowColor(e2.shadowColor), e2.shadowBlur && t2.setShadowBlur(e2.shadowBlur), e2.fillStyle && t2.setFillStyle(e2.fillStyle), e2.strokeStyle && t2.setStrokeStyle(e2.strokeStyle), e2.lineWidth && t2.setLineWidth(e2.lineWidth), this) : this;
    }
    restoreStyle(t2 = this.context, e2 = this.getStyle()) {
      return e2 && t2 ? (t2.restore(), this) : this;
    }
    drawWithStyle() {
      this.checkContext(), this.applyStyle(), this.draw(), this.restoreStyle();
    }
    hasClass(t2) {
      var e2;
      return !!this.attrs.class && -1 != (null === (e2 = this.attrs.class) || void 0 === e2 ? void 0 : e2.split(" ").indexOf(t2));
    }
    addClass(t2) {
      var e2;
      return this.hasClass(t2) || (this.attrs.class ? this.attrs.class = `${this.attrs.class} ${t2}` : this.attrs.class = `${t2}`, null === (e2 = this.registry) || void 0 === e2 || e2.onUpdate({ id: this.attrs.id, name: "class", value: t2, oldValue: void 0 })), this;
    }
    removeClass(t2) {
      var e2, i2;
      if (!this.hasClass(t2)) return this;
      const b2 = null === (e2 = this.attrs.class) || void 0 === e2 ? void 0 : e2.split(" ");
      return b2 && (b2.splice(b2.indexOf(t2)), this.attrs.class = b2.join(" ")), null === (i2 = this.registry) || void 0 === i2 || i2.onUpdate({ id: this.attrs.id, name: "class", value: void 0, oldValue: t2 }), this;
    }
    onRegister(t2) {
      return this.registry = t2, this;
    }
    isRendered() {
      return this.rendered;
    }
    setRendered(t2 = true) {
      return this.rendered = t2, this;
    }
    getAttributes() {
      return this.attrs;
    }
    getAttribute(t2) {
      return this.attrs[t2];
    }
    getSVGElement(t2 = "") {
      const e2 = T(this.attrs.id + t2), i2 = document.getElementById(e2);
      if (i2) return i2;
    }
    setAttribute(t2, e2) {
      var i2;
      const b2 = this.attrs.id, a2 = this.attrs[t2];
      return this.attrs[t2] = e2, null === (i2 = this.registry) || void 0 === i2 || i2.onUpdate({ id: b2, name: t2, value: e2, oldValue: a2 }), this;
    }
    getBoundingBox() {
      return this.boundingBox;
    }
    getContext() {
      return this.context;
    }
    setContext(t2) {
      return this.context = t2, this;
    }
    checkContext() {
      return p(this.context, "NoContext", "No rendering context attached to instance.");
    }
    set font(t2) {
      this.setFont(t2);
    }
    get font() {
      return F.toCSSString(this.textFont);
    }
    setFont(t2, e2, i2, b2) {
      const a2 = this.constructor.TEXT_FONT, n2 = "object" == typeof t2, s2 = "string" == typeof t2, l2 = void 0 === t2, o2 = void 0 === e2 && void 0 === i2 && void 0 === b2;
      return this.textFont = n2 ? Object.assign(Object.assign({}, a2), t2) : s2 && o2 ? F.fromCSSString(t2) : l2 && o2 ? Object.assign({}, a2) : F.validate(null != t2 ? t2 : a2.family, null != e2 ? e2 : a2.size, null != i2 ? i2 : a2.weight, null != b2 ? b2 : a2.style), this;
    }
    getFont() {
      return this.textFont || this.resetFont(), F.toCSSString(this.textFont);
    }
    resetFont() {
      this.setFont();
    }
    get fontInfo() {
      return this.textFont || this.resetFont(), Object.assign({}, this.textFont);
    }
    set fontInfo(t2) {
      this.setFont(t2);
    }
    setFontSize(t2) {
      const e2 = this.fontInfo;
      return this.setFont(e2.family, t2, e2.weight, e2.style), this;
    }
    getFontSize() {
      return this.fontSize;
    }
    set fontSize(t2) {
      this.setFontSize(t2);
    }
    get fontSize() {
      let t2 = this.fontInfo.size;
      return "number" == typeof t2 && (t2 = `${t2}pt`), t2;
    }
    get fontSizeInPoints() {
      return F.convertSizeToPointValue(this.fontSize);
    }
    get fontSizeInPixels() {
      return F.convertSizeToPixelValue(this.fontSize);
    }
    get fontStyle() {
      return this.fontInfo.style;
    }
    set fontStyle(t2) {
      const e2 = this.fontInfo;
      this.setFont(e2.family, e2.size, e2.weight, t2);
    }
    get fontWeight() {
      return this.fontInfo.weight + "";
    }
    set fontWeight(t2) {
      const e2 = this.fontInfo;
      this.setFont(e2.family, e2.size, t2, e2.style);
    }
  }
  R.ID = 1e3, R.TEXT_FONT = { family: F.SANS_SERIF, size: F.SIZE, weight: E.NORMAL, style: P.NORMAL };
  const L = 16384, W = { "1/2": 32768, 1: 16384, 2: 8192, 4: 4096, 8: 2048, 16: 1024, 32: 512, 64: 256, 128: 128, 256: 64 }, U = { w: "1", h: "2", q: "4", b: "256" }, I = { C: { num: 0 }, Am: { num: 0 }, F: { acc: "b", num: 1 }, Dm: { acc: "b", num: 1 }, Bb: { acc: "b", num: 2 }, Gm: { acc: "b", num: 2 }, Eb: { acc: "b", num: 3 }, Cm: { acc: "b", num: 3 }, Ab: { acc: "b", num: 4 }, Fm: { acc: "b", num: 4 }, Db: { acc: "b", num: 5 }, Bbm: { acc: "b", num: 5 }, Gb: { acc: "b", num: 6 }, Ebm: { acc: "b", num: 6 }, Cb: { acc: "b", num: 7 }, Abm: { acc: "b", num: 7 }, G: { acc: "#", num: 1 }, Em: { acc: "#", num: 1 }, D: { acc: "#", num: 2 }, Bm: { acc: "#", num: 2 }, A: { acc: "#", num: 3 }, "F#m": { acc: "#", num: 3 }, E: { acc: "#", num: 4 }, "C#m": { acc: "#", num: 4 }, B: { acc: "#", num: 5 }, "G#m": { acc: "#", num: 5 }, "F#": { acc: "#", num: 6 }, "D#m": { acc: "#", num: 6 }, "C#": { acc: "#", num: 7 }, "A#m": { acc: "#", num: 7 } }, G = { treble: { line_shift: 0 }, bass: { line_shift: 6 }, tenor: { line_shift: 4 }, alto: { line_shift: 3 }, soprano: { line_shift: 1 }, percussion: { line_shift: 0 }, "mezzo-soprano": { line_shift: 2 }, "baritone-c": { line_shift: 5 }, "baritone-f": { line_shift: 5 }, subbass: { line_shift: 7 }, french: { line_shift: -1 } }, H = { C: { index: 0, int_val: 0 }, CN: { index: 0, int_val: 0, accidental: "n" }, "C#": { index: 0, int_val: 1, accidental: "#" }, "C##": { index: 0, int_val: 2, accidental: "##" }, CB: { index: 0, int_val: 11, accidental: "b" }, CBB: { index: 0, int_val: 10, accidental: "bb" }, D: { index: 1, int_val: 2 }, DN: { index: 1, int_val: 2, accidental: "n" }, "D#": { index: 1, int_val: 3, accidental: "#" }, "D##": { index: 1, int_val: 4, accidental: "##" }, DB: { index: 1, int_val: 1, accidental: "b" }, DBB: { index: 1, int_val: 0, accidental: "bb" }, E: { index: 2, int_val: 4 }, EN: { index: 2, int_val: 4, accidental: "n" }, "E#": { index: 2, int_val: 5, accidental: "#" }, "E##": { index: 2, int_val: 6, accidental: "##" }, EB: { index: 2, int_val: 3, accidental: "b" }, EBB: { index: 2, int_val: 2, accidental: "bb" }, F: { index: 3, int_val: 5 }, FN: { index: 3, int_val: 5, accidental: "n" }, "F#": { index: 3, int_val: 6, accidental: "#" }, "F##": { index: 3, int_val: 7, accidental: "##" }, FB: { index: 3, int_val: 4, accidental: "b" }, FBB: { index: 3, int_val: 3, accidental: "bb" }, G: { index: 4, int_val: 7 }, GN: { index: 4, int_val: 7, accidental: "n" }, "G#": { index: 4, int_val: 8, accidental: "#" }, "G##": { index: 4, int_val: 9, accidental: "##" }, GB: { index: 4, int_val: 6, accidental: "b" }, GBB: { index: 4, int_val: 5, accidental: "bb" }, A: { index: 5, int_val: 9 }, AN: { index: 5, int_val: 9, accidental: "n" }, "A#": { index: 5, int_val: 10, accidental: "#" }, "A##": { index: 5, int_val: 11, accidental: "##" }, AB: { index: 5, int_val: 8, accidental: "b" }, ABB: { index: 5, int_val: 7, accidental: "bb" }, B: { index: 6, int_val: 11 }, BN: { index: 6, int_val: 11, accidental: "n" }, "B#": { index: 6, int_val: 12, accidental: "#" }, "B##": { index: 6, int_val: 13, accidental: "##" }, BB: { index: 6, int_val: 10, accidental: "b" }, BBB: { index: 6, int_val: 9, accidental: "bb" }, R: { index: 6, rest: true }, X: { index: 6, accidental: "", octave: 4, code: "noteheadXBlack", shift_right: 5.5 } }, Y = { "#": { code: "accidentalSharp", parenRightPaddingAdjustment: -1 }, "##": { code: "accidentalDoubleSharp", parenRightPaddingAdjustment: -1 }, b: { code: "accidentalFlat", parenRightPaddingAdjustment: -2 }, bb: { code: "accidentalDoubleFlat", parenRightPaddingAdjustment: -2 }, n: { code: "accidentalNatural", parenRightPaddingAdjustment: -1 }, "{": { code: "accidentalParensLeft", parenRightPaddingAdjustment: -1 }, "}": { code: "accidentalParensRight", parenRightPaddingAdjustment: -1 }, db: { code: "accidentalThreeQuarterTonesFlatZimmermann", parenRightPaddingAdjustment: -1 }, d: { code: "accidentalQuarterToneFlatStein", parenRightPaddingAdjustment: 0 }, "++": { code: "accidentalThreeQuarterTonesSharpStein", parenRightPaddingAdjustment: -1 }, "+": { code: "accidentalQuarterToneSharpStein", parenRightPaddingAdjustment: -1 }, "+-": { code: "accidentalKucukMucennebSharp", parenRightPaddingAdjustment: -1 }, bs: { code: "accidentalBakiyeFlat", parenRightPaddingAdjustment: -1 }, bss: { code: "accidentalBuyukMucennebFlat", parenRightPaddingAdjustment: -1 }, o: { code: "accidentalSori", parenRightPaddingAdjustment: -1 }, k: { code: "accidentalKoron", parenRightPaddingAdjustment: -1 }, bbs: { code: "vexAccidentalMicrotonal1", parenRightPaddingAdjustment: -1 }, "++-": { code: "accidentalBuyukMucennebSharp", parenRightPaddingAdjustment: -1 }, ashs: { code: "vexAccidentalMicrotonal3", parenRightPaddingAdjustment: -1 }, afhf: { code: "vexAccidentalMicrotonal4", parenRightPaddingAdjustment: -1 }, accSagittal5v7KleismaUp: { code: "accSagittal5v7KleismaUp", parenRightPaddingAdjustment: -1 }, accSagittal5v7KleismaDown: { code: "accSagittal5v7KleismaDown", parenRightPaddingAdjustment: -1 }, accSagittal5CommaUp: { code: "accSagittal5CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal5CommaDown: { code: "accSagittal5CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal7CommaUp: { code: "accSagittal7CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal7CommaDown: { code: "accSagittal7CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal25SmallDiesisUp: { code: "accSagittal25SmallDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal25SmallDiesisDown: { code: "accSagittal25SmallDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal35MediumDiesisUp: { code: "accSagittal35MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal35MediumDiesisDown: { code: "accSagittal35MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal11MediumDiesisUp: { code: "accSagittal11MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal11MediumDiesisDown: { code: "accSagittal11MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal11LargeDiesisUp: { code: "accSagittal11LargeDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal11LargeDiesisDown: { code: "accSagittal11LargeDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal35LargeDiesisUp: { code: "accSagittal35LargeDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal35LargeDiesisDown: { code: "accSagittal35LargeDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp25SDown: { code: "accSagittalSharp25SDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat25SUp: { code: "accSagittalFlat25SUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp7CDown: { code: "accSagittalSharp7CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat7CUp: { code: "accSagittalFlat7CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp5CDown: { code: "accSagittalSharp5CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat5CUp: { code: "accSagittalFlat5CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v7kDown: { code: "accSagittalSharp5v7kDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v7kUp: { code: "accSagittalFlat5v7kUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp: { code: "accSagittalSharp", parenRightPaddingAdjustment: -1 }, accSagittalFlat: { code: "accSagittalFlat", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v7kUp: { code: "accSagittalSharp5v7kUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v7kDown: { code: "accSagittalFlat5v7kDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5CUp: { code: "accSagittalSharp5CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5CDown: { code: "accSagittalFlat5CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp7CUp: { code: "accSagittalSharp7CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat7CDown: { code: "accSagittalFlat7CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp25SUp: { code: "accSagittalSharp25SUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat25SDown: { code: "accSagittalFlat25SDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp35MUp: { code: "accSagittalSharp35MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat35MDown: { code: "accSagittalFlat35MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp11MUp: { code: "accSagittalSharp11MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat11MDown: { code: "accSagittalFlat11MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp11LUp: { code: "accSagittalSharp11LUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat11LDown: { code: "accSagittalFlat11LDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp35LUp: { code: "accSagittalSharp35LUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat35LDown: { code: "accSagittalFlat35LDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp25SDown: { code: "accSagittalDoubleSharp25SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat25SUp: { code: "accSagittalDoubleFlat25SUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp7CDown: { code: "accSagittalDoubleSharp7CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat7CUp: { code: "accSagittalDoubleFlat7CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp5CDown: { code: "accSagittalDoubleSharp5CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat5CUp: { code: "accSagittalDoubleFlat5CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp5v7kDown: { code: "accSagittalDoubleSharp5v7kDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat5v7kUp: { code: "accSagittalDoubleFlat5v7kUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp: { code: "accSagittalDoubleSharp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat: { code: "accSagittalDoubleFlat", parenRightPaddingAdjustment: -1 }, accSagittal7v11KleismaUp: { code: "accSagittal7v11KleismaUp", parenRightPaddingAdjustment: -1 }, accSagittal7v11KleismaDown: { code: "accSagittal7v11KleismaDown", parenRightPaddingAdjustment: -1 }, accSagittal17CommaUp: { code: "accSagittal17CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal17CommaDown: { code: "accSagittal17CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal55CommaUp: { code: "accSagittal55CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal55CommaDown: { code: "accSagittal55CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal7v11CommaUp: { code: "accSagittal7v11CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal7v11CommaDown: { code: "accSagittal7v11CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal5v11SmallDiesisUp: { code: "accSagittal5v11SmallDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal5v11SmallDiesisDown: { code: "accSagittal5v11SmallDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v11SDown: { code: "accSagittalSharp5v11SDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v11SUp: { code: "accSagittalFlat5v11SUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v11CDown: { code: "accSagittalSharp7v11CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v11CUp: { code: "accSagittalFlat7v11CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp55CDown: { code: "accSagittalSharp55CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat55CUp: { code: "accSagittalFlat55CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp17CDown: { code: "accSagittalSharp17CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat17CUp: { code: "accSagittalFlat17CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v11kDown: { code: "accSagittalSharp7v11kDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v11kUp: { code: "accSagittalFlat7v11kUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v11kUp: { code: "accSagittalSharp7v11kUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v11kDown: { code: "accSagittalFlat7v11kDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp17CUp: { code: "accSagittalSharp17CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat17CDown: { code: "accSagittalFlat17CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp55CUp: { code: "accSagittalSharp55CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat55CDown: { code: "accSagittalFlat55CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v11CUp: { code: "accSagittalSharp7v11CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v11CDown: { code: "accSagittalFlat7v11CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v11SUp: { code: "accSagittalSharp5v11SUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v11SDown: { code: "accSagittalFlat5v11SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp5v11SDown: { code: "accSagittalDoubleSharp5v11SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat5v11SUp: { code: "accSagittalDoubleFlat5v11SUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp7v11CDown: { code: "accSagittalDoubleSharp7v11CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat7v11CUp: { code: "accSagittalDoubleFlat7v11CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp55CDown: { code: "accSagittalDoubleSharp55CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat55CUp: { code: "accSagittalDoubleFlat55CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp17CDown: { code: "accSagittalDoubleSharp17CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat17CUp: { code: "accSagittalDoubleFlat17CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp7v11kDown: { code: "accSagittalDoubleSharp7v11kDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat7v11kUp: { code: "accSagittalDoubleFlat7v11kUp", parenRightPaddingAdjustment: -1 }, accSagittal23CommaUp: { code: "accSagittal23CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal23CommaDown: { code: "accSagittal23CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal5v19CommaUp: { code: "accSagittal5v19CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal5v19CommaDown: { code: "accSagittal5v19CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal5v23SmallDiesisUp: { code: "accSagittal5v23SmallDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal5v23SmallDiesisDown: { code: "accSagittal5v23SmallDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v23SDown: { code: "accSagittalSharp5v23SDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v23SUp: { code: "accSagittalFlat5v23SUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v19CDown: { code: "accSagittalSharp5v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v19CUp: { code: "accSagittalFlat5v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp23CDown: { code: "accSagittalSharp23CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat23CUp: { code: "accSagittalFlat23CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp23CUp: { code: "accSagittalSharp23CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat23CDown: { code: "accSagittalFlat23CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v19CUp: { code: "accSagittalSharp5v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v19CDown: { code: "accSagittalFlat5v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v23SUp: { code: "accSagittalSharp5v23SUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v23SDown: { code: "accSagittalFlat5v23SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp5v23SDown: { code: "accSagittalDoubleSharp5v23SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat5v23SUp: { code: "accSagittalDoubleFlat5v23SUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp5v19CDown: { code: "accSagittalDoubleSharp5v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat5v19CUp: { code: "accSagittalDoubleFlat5v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp23CDown: { code: "accSagittalDoubleSharp23CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat23CUp: { code: "accSagittalDoubleFlat23CUp", parenRightPaddingAdjustment: -1 }, accSagittal19SchismaUp: { code: "accSagittal19SchismaUp", parenRightPaddingAdjustment: -1 }, accSagittal19SchismaDown: { code: "accSagittal19SchismaDown", parenRightPaddingAdjustment: -1 }, accSagittal17KleismaUp: { code: "accSagittal17KleismaUp", parenRightPaddingAdjustment: -1 }, accSagittal17KleismaDown: { code: "accSagittal17KleismaDown", parenRightPaddingAdjustment: -1 }, accSagittal143CommaUp: { code: "accSagittal143CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal143CommaDown: { code: "accSagittal143CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal11v49CommaUp: { code: "accSagittal11v49CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal11v49CommaDown: { code: "accSagittal11v49CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal19CommaUp: { code: "accSagittal19CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal19CommaDown: { code: "accSagittal19CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal7v19CommaUp: { code: "accSagittal7v19CommaUp", parenRightPaddingAdjustment: -1 }, accSagittal7v19CommaDown: { code: "accSagittal7v19CommaDown", parenRightPaddingAdjustment: -1 }, accSagittal49SmallDiesisUp: { code: "accSagittal49SmallDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal49SmallDiesisDown: { code: "accSagittal49SmallDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal23SmallDiesisUp: { code: "accSagittal23SmallDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal23SmallDiesisDown: { code: "accSagittal23SmallDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal5v13MediumDiesisUp: { code: "accSagittal5v13MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal5v13MediumDiesisDown: { code: "accSagittal5v13MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal11v19MediumDiesisUp: { code: "accSagittal11v19MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal11v19MediumDiesisDown: { code: "accSagittal11v19MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal49MediumDiesisUp: { code: "accSagittal49MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal49MediumDiesisDown: { code: "accSagittal49MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal5v49MediumDiesisUp: { code: "accSagittal5v49MediumDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal5v49MediumDiesisDown: { code: "accSagittal5v49MediumDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal49LargeDiesisUp: { code: "accSagittal49LargeDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal49LargeDiesisDown: { code: "accSagittal49LargeDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal11v19LargeDiesisUp: { code: "accSagittal11v19LargeDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal11v19LargeDiesisDown: { code: "accSagittal11v19LargeDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittal5v13LargeDiesisUp: { code: "accSagittal5v13LargeDiesisUp", parenRightPaddingAdjustment: -1 }, accSagittal5v13LargeDiesisDown: { code: "accSagittal5v13LargeDiesisDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp23SDown: { code: "accSagittalSharp23SDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat23SUp: { code: "accSagittalFlat23SUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp49SDown: { code: "accSagittalSharp49SDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat49SUp: { code: "accSagittalFlat49SUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v19CDown: { code: "accSagittalSharp7v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v19CUp: { code: "accSagittalFlat7v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp19CDown: { code: "accSagittalSharp19CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat19CUp: { code: "accSagittalFlat19CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp11v49CDown: { code: "accSagittalSharp11v49CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat11v49CUp: { code: "accSagittalFlat11v49CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp143CDown: { code: "accSagittalSharp143CDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat143CUp: { code: "accSagittalFlat143CUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp17kDown: { code: "accSagittalSharp17kDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat17kUp: { code: "accSagittalFlat17kUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp19sDown: { code: "accSagittalSharp19sDown", parenRightPaddingAdjustment: -1 }, accSagittalFlat19sUp: { code: "accSagittalFlat19sUp", parenRightPaddingAdjustment: -1 }, accSagittalSharp19sUp: { code: "accSagittalSharp19sUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat19sDown: { code: "accSagittalFlat19sDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp17kUp: { code: "accSagittalSharp17kUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat17kDown: { code: "accSagittalFlat17kDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp143CUp: { code: "accSagittalSharp143CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat143CDown: { code: "accSagittalFlat143CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp11v49CUp: { code: "accSagittalSharp11v49CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat11v49CDown: { code: "accSagittalFlat11v49CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp19CUp: { code: "accSagittalSharp19CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat19CDown: { code: "accSagittalFlat19CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp7v19CUp: { code: "accSagittalSharp7v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat7v19CDown: { code: "accSagittalFlat7v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp49SUp: { code: "accSagittalSharp49SUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat49SDown: { code: "accSagittalFlat49SDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp23SUp: { code: "accSagittalSharp23SUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat23SDown: { code: "accSagittalFlat23SDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v13MUp: { code: "accSagittalSharp5v13MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v13MDown: { code: "accSagittalFlat5v13MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp11v19MUp: { code: "accSagittalSharp11v19MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat11v19MDown: { code: "accSagittalFlat11v19MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp49MUp: { code: "accSagittalSharp49MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat49MDown: { code: "accSagittalFlat49MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v49MUp: { code: "accSagittalSharp5v49MUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v49MDown: { code: "accSagittalFlat5v49MDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp49LUp: { code: "accSagittalSharp49LUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat49LDown: { code: "accSagittalFlat49LDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp11v19LUp: { code: "accSagittalSharp11v19LUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat11v19LDown: { code: "accSagittalFlat11v19LDown", parenRightPaddingAdjustment: -1 }, accSagittalSharp5v13LUp: { code: "accSagittalSharp5v13LUp", parenRightPaddingAdjustment: -1 }, accSagittalFlat5v13LDown: { code: "accSagittalFlat5v13LDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp23SDown: { code: "accSagittalDoubleSharp23SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat23SUp: { code: "accSagittalDoubleFlat23SUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp49SDown: { code: "accSagittalDoubleSharp49SDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat49SUp: { code: "accSagittalDoubleFlat49SUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp7v19CDown: { code: "accSagittalDoubleSharp7v19CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat7v19CUp: { code: "accSagittalDoubleFlat7v19CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp19CDown: { code: "accSagittalDoubleSharp19CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat19CUp: { code: "accSagittalDoubleFlat19CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp11v49CDown: { code: "accSagittalDoubleSharp11v49CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat11v49CUp: { code: "accSagittalDoubleFlat11v49CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp143CDown: { code: "accSagittalDoubleSharp143CDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat143CUp: { code: "accSagittalDoubleFlat143CUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp17kDown: { code: "accSagittalDoubleSharp17kDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat17kUp: { code: "accSagittalDoubleFlat17kUp", parenRightPaddingAdjustment: -1 }, accSagittalDoubleSharp19sDown: { code: "accSagittalDoubleSharp19sDown", parenRightPaddingAdjustment: -1 }, accSagittalDoubleFlat19sUp: { code: "accSagittalDoubleFlat19sUp", parenRightPaddingAdjustment: -1 }, accSagittalShaftUp: { code: "accSagittalShaftUp", parenRightPaddingAdjustment: -1 }, accSagittalShaftDown: { code: "accSagittalShaftDown", parenRightPaddingAdjustment: -1 }, accSagittalAcute: { code: "accSagittalAcute", parenRightPaddingAdjustment: -1 }, accSagittalGrave: { code: "accSagittalGrave", parenRightPaddingAdjustment: -1 }, accSagittal1MinaUp: { code: "accSagittal1MinaUp", parenRightPaddingAdjustment: -1 }, accSagittal1MinaDown: { code: "accSagittal1MinaDown", parenRightPaddingAdjustment: -1 }, accSagittal2MinasUp: { code: "accSagittal2MinasUp", parenRightPaddingAdjustment: -1 }, accSagittal2MinasDown: { code: "accSagittal2MinasDown", parenRightPaddingAdjustment: -1 }, accSagittal1TinaUp: { code: "accSagittal1TinaUp", parenRightPaddingAdjustment: -1 }, accSagittal1TinaDown: { code: "accSagittal1TinaDown", parenRightPaddingAdjustment: -1 }, accSagittal2TinasUp: { code: "accSagittal2TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal2TinasDown: { code: "accSagittal2TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal3TinasUp: { code: "accSagittal3TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal3TinasDown: { code: "accSagittal3TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal4TinasUp: { code: "accSagittal4TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal4TinasDown: { code: "accSagittal4TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal5TinasUp: { code: "accSagittal5TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal5TinasDown: { code: "accSagittal5TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal6TinasUp: { code: "accSagittal6TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal6TinasDown: { code: "accSagittal6TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal7TinasUp: { code: "accSagittal7TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal7TinasDown: { code: "accSagittal7TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal8TinasUp: { code: "accSagittal8TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal8TinasDown: { code: "accSagittal8TinasDown", parenRightPaddingAdjustment: -1 }, accSagittal9TinasUp: { code: "accSagittal9TinasUp", parenRightPaddingAdjustment: -1 }, accSagittal9TinasDown: { code: "accSagittal9TinasDown", parenRightPaddingAdjustment: -1 }, accSagittalFractionalTinaUp: { code: "accSagittalFractionalTinaUp", parenRightPaddingAdjustment: -1 }, accSagittalFractionalTinaDown: { code: "accSagittalFractionalTinaDown", parenRightPaddingAdjustment: -1 }, accidentalNarrowReversedFlat: { code: "accidentalNarrowReversedFlat", parenRightPaddingAdjustment: -1 }, accidentalNarrowReversedFlatAndFlat: { code: "accidentalNarrowReversedFlatAndFlat", parenRightPaddingAdjustment: -1 }, accidentalWilsonPlus: { code: "accidentalWilsonPlus", parenRightPaddingAdjustment: -1 }, accidentalWilsonMinus: { code: "accidentalWilsonMinus", parenRightPaddingAdjustment: -1 } }, X = { "a.": { code: "augmentationDot", between_lines: true }, av: { aboveCode: "articStaccatissimoAbove", belowCode: "articStaccatissimoBelow", between_lines: true }, "a>": { aboveCode: "articAccentAbove", belowCode: "articAccentBelow", between_lines: true }, "a-": { aboveCode: "articTenutoAbove", belowCode: "articTenutoBelow", between_lines: true }, "a^": { aboveCode: "articMarcatoAbove", belowCode: "articMarcatoBelow", between_lines: false }, "a+": { code: "pluckedLeftHandPizzicato", between_lines: false }, ao: { aboveCode: "pluckedSnapPizzicatoAbove", belowCode: "pluckedSnapPizzicatoBelow", between_lines: false }, ah: { code: "stringsHarmonic", between_lines: false }, "a@": { aboveCode: "fermataAbove", belowCode: "fermataBelow", between_lines: false }, "a@a": { code: "fermataAbove", between_lines: false }, "a@u": { code: "fermataBelow", between_lines: false }, "a@s": { aboveCode: "fermataShortAbove", belowCode: "fermataShortBelow", between_lines: false }, "a@as": { code: "fermataShortAbove", between_lines: false }, "a@us": { code: "fermataShortBelow", between_lines: false }, "a@l": { aboveCode: "fermataLongAbove", belowCode: "fermataLongBelow", between_lines: false }, "a@al": { code: "fermataLongAbove", between_lines: false }, "a@ul": { code: "fermataLongBelow", between_lines: false }, "a@vl": { aboveCode: "fermataVeryLongAbove", belowCode: "fermataVeryLongBelow", between_lines: false }, "a@avl": { code: "fermataVeryLongAbove", between_lines: false }, "a@uvl": { code: "fermataVeryLongBelow", between_lines: false }, "a|": { code: "stringsUpBow", between_lines: false }, am: { code: "stringsDownBow", between_lines: false }, "a,": { code: "pictChokeCymbal", between_lines: false } }, j = { mordent: { code: "ornamentShortTrill" }, mordent_inverted: { code: "ornamentMordent" }, turn: { code: "ornamentTurn" }, turn_inverted: { code: "ornamentTurnSlash" }, tr: { code: "ornamentTrill" }, upprall: { code: "ornamentPrecompSlideTrillDAnglebert" }, downprall: { code: "ornamentPrecompDoubleCadenceUpperPrefix" }, prallup: { code: "ornamentPrecompTrillSuffixDandrieu" }, pralldown: { code: "ornamentPrecompTrillLowerSuffix" }, upmordent: { code: "ornamentPrecompSlideTrillBach" }, downmordent: { code: "ornamentPrecompDoubleCadenceUpperPrefixTurn" }, lineprall: { code: "ornamentPrecompAppoggTrill" }, prallprall: { code: "ornamentTremblement" }, scoop: { code: "brassScoop" }, doit: { code: "brassDoitMedium" }, fall: { code: "brassFallLipShort" }, doitLong: { code: "brassLiftMedium" }, fallLong: { code: "brassFallRoughMedium" }, bend: { code: "brassBend" }, plungerClosed: { code: "brassMuteClosed" }, plungerOpen: { code: "brassMuteOpen" }, flip: { code: "brassFlip" }, jazzTurn: { code: "brassJazzTurn" }, smear: { code: "brassSmear" } };
  class V {
    static currentMusicFont() {
      if (0 === V.MUSIC_FONT_STACK.length) throw new g("NoFonts", "The font stack is empty. See: await Flow.fetchMusicFont(...); Flow.setMusicFont(...).");
      return V.MUSIC_FONT_STACK[0];
    }
    static clefProperties(t2) {
      if (!t2 || !(t2 in G)) throw new g("BadArgument", "Invalid clef: " + t2);
      return G[t2];
    }
    static keyProperties(t2, e2 = "treble", i2) {
      let b2 = { octave_shift: 0, duration: "4" };
      "object" == typeof i2 && (b2 = Object.assign(Object.assign({}, b2), i2));
      const a2 = V.sanitizeDuration(b2.duration), n2 = t2.split("/");
      if (n2.length < 2) throw new g("BadArguments", `First argument must be note/octave or note/octave/glyph-code: ${t2}`);
      const s2 = n2[0].toUpperCase(), l2 = H[s2];
      if (!l2) throw new g("BadArguments", "Invalid key name: " + s2);
      l2.octave && (n2[1] = l2.octave.toString());
      let o2 = parseInt(n2[1], 10);
      o2 -= b2.octave_shift;
      let r2 = (7 * o2 - 28 + l2.index) / 2;
      r2 += V.clefProperties(e2).line_shift;
      let h2 = 0;
      r2 <= 0 && 2 * r2 % 2 == 0 && (h2 = 1), r2 >= 6 && 2 * r2 % 2 == 0 && (h2 = -1);
      const m2 = void 0 !== l2.int_val ? 12 * o2 + l2.int_val : void 0, c2 = l2.code, d2 = l2.shift_right;
      let _2 = {};
      if (n2.length > 2 && n2[2]) {
        const t3 = n2[2].toUpperCase();
        _2 = { code: this.codeNoteHead(t3, a2) };
      }
      return Object.assign({ key: s2, octave: o2, line: r2, int_value: m2, accidental: l2.accidental, code: c2, stroke: h2, shift_right: d2, displaced: false }, _2);
    }
    static integerToNote(t2) {
      if (void 0 === t2 || t2 < 0 || t2 > 11) throw new g("BadArguments", `integerToNote() requires an integer in the range [0, 11]: ${t2}`);
      const e2 = { 0: "C", 1: "C#", 2: "D", 3: "D#", 4: "E", 5: "F", 6: "F#", 7: "G", 8: "G#", 9: "A", 10: "A#", 11: "B" }[t2];
      if (!e2) throw new g("BadArguments", `Unknown note value for integer: ${t2}`);
      return e2;
    }
    static tabToGlyphProps(t2, e2 = 1) {
      let i2, b2 = 0, a2 = 0;
      if ("X" === t2.toUpperCase()) {
        const t3 = new Z("accidentalDoubleSharp", V.TABLATURE_FONT_SCALE).getMetrics();
        if (i2 = "accidentalDoubleSharp", null == t3.width || null == t3.height) throw new g("InvalidMetrics", "Width and height required");
        b2 = t3.width, a2 = -t3.height / 2;
      } else b2 = V.textWidth(t2);
      return { text: t2, code: i2, getWidth: () => b2 * e2, shift_y: a2 };
    }
    static textWidth(t2) {
      return 7 * t2.toString().length;
    }
    static articulationCodes(t2) {
      return X[t2];
    }
    static accidentalCodes(t2) {
      return Y[t2];
    }
    static ornamentCodes(t2) {
      return j[t2];
    }
    static keySignature(t2) {
      const e2 = I[t2];
      if (!e2) throw new g("BadKeySignature", `Bad key signature spec: '${t2}'`);
      if (!e2.acc) return [];
      const i2 = { b: [2, 0.5, 2.5, 1, 3, 1.5, 3.5], "#": [0, 1.5, -0.5, 1, 2.5, 0.5, 2] }[e2.acc], b2 = [];
      for (let t3 = 0; t3 < e2.num; ++t3) {
        const a2 = i2[t3];
        b2.push({ type: e2.acc, line: a2 });
      }
      return b2;
    }
    static getKeySignatures() {
      return I;
    }
    static hasKeySignature(t2) {
      return t2 in I;
    }
    static sanitizeDuration(t2) {
      const e2 = U[t2];
      if (void 0 !== e2 && (t2 = e2), void 0 === W[t2]) throw new g("BadArguments", `The provided duration is not valid: ${t2}`);
      return t2;
    }
    static durationToFraction(t2) {
      return new z().parse(V.sanitizeDuration(t2));
    }
    static durationToNumber(t2) {
      return V.durationToFraction(t2).value();
    }
    static durationToTicks(t2) {
      t2 = V.sanitizeDuration(t2);
      const e2 = W[t2];
      if (void 0 === e2) throw new g("InvalidDuration");
      return e2;
    }
    static codeNoteHead(t2, e2) {
      let i2 = "";
      switch (t2) {
        case "D0":
          i2 = "noteheadDiamondWhole";
          break;
        case "D1":
          i2 = "noteheadDiamondHalf";
          break;
        case "D2":
        case "D3":
        case "MI":
          i2 = "noteheadDiamondBlack";
          break;
        case "T0":
          i2 = "noteheadTriangleUpWhole";
          break;
        case "T1":
          i2 = "noteheadTriangleUpHalf";
          break;
        case "T2":
        case "T3":
        case "DO":
          i2 = "noteheadTriangleUpBlack";
          break;
        case "X0":
          i2 = "noteheadXWhole";
          break;
        case "X1":
          i2 = "noteheadXHalf";
          break;
        case "X2":
          i2 = "noteheadXBlack";
          break;
        case "X3":
          i2 = "noteheadCircleX";
          break;
        case "S1":
          i2 = "noteheadSquareWhite";
          break;
        case "S2":
        case "LA":
          i2 = "noteheadSquareBlack";
          break;
        case "R1":
          i2 = "vexNoteHeadRectWhite";
          break;
        case "R2":
          i2 = "vexNoteHeadRectBlack";
          break;
        case "RE":
          i2 = "noteheadMoonBlack";
          break;
        case "FA":
          i2 = "noteheadTriangleLeftBlack";
          break;
        case "FAUP":
          i2 = "noteheadTriangleRightBlack";
          break;
        case "SO":
          i2 = "noteheadBlack";
          break;
        case "TI":
          i2 = "noteheadTriangleRoundDownBlack";
          break;
        case "D":
        case "H":
          switch (e2) {
            case "1/2":
              i2 = "noteheadDiamondDoubleWhole";
              break;
            case "1":
              i2 = "noteheadDiamondWhole";
              break;
            case "2":
              i2 = "noteheadDiamondHalf";
              break;
            default:
              i2 = "noteheadDiamondBlack";
          }
          break;
        case "N":
        case "G":
          switch (e2) {
            case "1/2":
              i2 = "noteheadDoubleWhole";
              break;
            case "1":
              i2 = "noteheadWhole";
              break;
            case "2":
              i2 = "noteheadHalf";
              break;
            default:
              i2 = "noteheadBlack";
          }
          break;
        case "M":
        case "X":
          switch (e2) {
            case "1/2":
              i2 = "noteheadXDoubleWhole";
              break;
            case "1":
              i2 = "noteheadXWhole";
              break;
            case "2":
              i2 = "noteheadXHalf";
              break;
            default:
              i2 = "noteheadXBlack";
          }
          break;
        case "CX":
          switch (e2) {
            case "1/2":
              i2 = "noteheadCircleXDoubleWhole";
              break;
            case "1":
              i2 = "noteheadCircleXWhole";
              break;
            case "2":
              i2 = "noteheadCircleXHalf";
              break;
            default:
              i2 = "noteheadCircleX";
          }
          break;
        case "CI":
          switch (e2) {
            case "1/2":
              i2 = "noteheadCircledDoubleWhole";
              break;
            case "1":
              i2 = "noteheadCircledWhole";
              break;
            case "2":
              i2 = "noteheadCircledHalf";
              break;
            default:
              i2 = "noteheadCircledBlack";
          }
          break;
        case "SQ":
          switch (e2) {
            case "1/2":
              i2 = "noteheadDoubleWholeSquare";
              break;
            case "1":
            case "2":
              i2 = "noteheadSquareWhite";
              break;
            default:
              i2 = "noteheadSquareBlack";
          }
          break;
        case "TU":
          switch (e2) {
            case "1/2":
              i2 = "noteheadTriangleUpDoubleWhole";
              break;
            case "1":
              i2 = "noteheadTriangleUpWhole";
              break;
            case "2":
              i2 = "noteheadTriangleUpHalf";
              break;
            default:
              i2 = "noteheadTriangleUpBlack";
          }
          break;
        case "TD":
          switch (e2) {
            case "1/2":
              i2 = "noteheadTriangleDownDoubleWhole";
              break;
            case "1":
              i2 = "noteheadTriangleDownWhole";
              break;
            case "2":
              i2 = "noteheadTriangleDownHalf";
              break;
            default:
              i2 = "noteheadTriangleDownBlack";
          }
          break;
        case "SF":
          switch (e2) {
            case "1/2":
              i2 = "noteheadSlashedDoubleWhole1";
              break;
            case "1":
              i2 = "noteheadSlashedWhole1";
              break;
            case "2":
              i2 = "noteheadSlashedHalf1";
              break;
            default:
              i2 = "noteheadSlashedBlack1";
          }
          break;
        case "SB":
          switch (e2) {
            case "1/2":
              i2 = "noteheadSlashedDoubleWhole2";
              break;
            case "1":
              i2 = "noteheadSlashedWhole2";
              break;
            case "2":
              i2 = "noteheadSlashedHalf2";
              break;
            default:
              i2 = "noteheadSlashedBlack2";
          }
      }
      return i2;
    }
    static getGlyphProps(t2, e2 = "n") {
      t2 = V.sanitizeDuration(t2);
      let i2 = K[t2];
      void 0 === i2 && (i2 = K[4]);
      let b2 = i2[e2];
      const a2 = V.codeNoteHead(e2.toUpperCase(), t2);
      "" != a2 && (b2 = Object.assign(Object.assign({}, b2), { code_head: a2, code: a2 }));
      const n2 = b2.code_head;
      return Object.assign(Object.assign(Object.assign({}, i2.common), { getWidth: (t3 = V.NOTATION_FONT_SCALE) => Z.getWidth(n2, t3) }), b2);
    }
  }
  V.UNISON = true, V.SOFTMAX_FACTOR = 10, V.STEM_WIDTH = 1.5, V.STEM_HEIGHT = 35, V.STAVE_LINE_THICKNESS = 1, V.RENDER_PRECISION_PLACES = 3, V.RESOLUTION = L, V.MUSIC_FONT_STACK = [], V.NOTATION_FONT_SCALE = 39, V.TABLATURE_FONT_SCALE = 39, V.SLASH_NOTEHEAD_WIDTH = 15, V.STAVE_LINE_DISTANCE = 10, V.TEXT_HEIGHT_OFFSET_HACK = 1, V.accidentalMap = Y, V.accidentalColumnsTable = { 1: { a: [1], b: [1] }, 2: { a: [1, 2] }, 3: { a: [1, 3, 2], b: [1, 2, 1], second_on_bottom: [1, 2, 3] }, 4: { a: [1, 3, 4, 2], b: [1, 2, 3, 1], spaced_out_tetrachord: [1, 2, 1, 2] }, 5: { a: [1, 3, 5, 4, 2], b: [1, 2, 4, 3, 1], spaced_out_pentachord: [1, 2, 3, 2, 1], very_spaced_out_pentachord: [1, 2, 1, 2, 1] }, 6: { a: [1, 3, 5, 6, 4, 2], b: [1, 2, 4, 5, 3, 1], spaced_out_hexachord: [1, 3, 2, 1, 3, 2], very_spaced_out_hexachord: [1, 2, 1, 2, 1, 2] } }, V.unicode = { sharp: String.fromCharCode(9839), flat: String.fromCharCode(9837), natural: String.fromCharCode(9838), triangle: String.fromCharCode(9651), "o-with-slash": String.fromCharCode(248), degrees: String.fromCharCode(176), circle: String.fromCharCode(9675) }, V.validTypes = { n: { name: "note" }, r: { name: "rest" }, h: { name: "harmonic" }, m: { name: "muted" }, s: { name: "slash" }, g: { name: "ghost" }, d: { name: "diamond" }, x: { name: "x" }, ci: { name: "circled" }, cx: { name: "circle x" }, sf: { name: "slashed" }, sb: { name: "slashed backward" }, sq: { name: "square" }, tu: { name: "triangle up" }, td: { name: "triangle down" } }, V.TIME4_4 = { num_beats: 4, beat_value: 4, resolution: L };
  const K = { "1/2": { common: { code_head: "", stem: false, flag: false, stem_up_extension: -V.STEM_HEIGHT, stem_down_extension: -V.STEM_HEIGHT, tabnote_stem_up_extension: -V.STEM_HEIGHT, tabnote_stem_down_extension: -V.STEM_HEIGHT, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "restDoubleWhole", rest: true, position: "B/5", dot_shiftY: 0.5 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 1: { common: { code_head: "", stem: false, flag: false, stem_up_extension: -V.STEM_HEIGHT, stem_down_extension: -V.STEM_HEIGHT, tabnote_stem_up_extension: -V.STEM_HEIGHT, tabnote_stem_down_extension: -V.STEM_HEIGHT, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "restWhole", ledger_code_head: "restWholeLegerLine", rest: true, position: "D/5", dot_shiftY: 0.5 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 2: { common: { code_head: "", stem: true, flag: false, stem_up_extension: 0, stem_down_extension: 0, tabnote_stem_up_extension: 0, tabnote_stem_down_extension: 0, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "restHalf", ledger_code_head: "restHalfLegerLine", stem: false, rest: true, position: "B/4", dot_shiftY: -0.5 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 4: { common: { code_head: "", stem: true, flag: false, stem_up_extension: 0, stem_down_extension: 0, tabnote_stem_up_extension: 0, tabnote_stem_down_extension: 0, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "restQuarter", stem: false, rest: true, position: "B/4", dot_shiftY: -0.5, line_above: 1.5, line_below: 1.5 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 8: { common: { code_head: "", stem: true, flag: true, beam_count: 1, stem_beam_extension: 0, code_flag_upstem: "flag8thUp", code_flag_downstem: "flag8thDown", stem_up_extension: 0, stem_down_extension: 0, tabnote_stem_up_extension: 0, tabnote_stem_down_extension: 0, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "rest8th", stem: false, flag: false, rest: true, position: "B/4", dot_shiftY: -0.5, line_above: 1, line_below: 1 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 16: { common: { code_head: "", beam_count: 2, stem_beam_extension: 0, stem: true, flag: true, code_flag_upstem: "flag16thUp", code_flag_downstem: "flag16thDown", stem_up_extension: 0, stem_down_extension: 0, tabnote_stem_up_extension: 0, tabnote_stem_down_extension: 0, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "rest16th", stem: false, flag: false, rest: true, position: "B/4", dot_shiftY: -0.5, line_above: 1, line_below: 2 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 32: { common: { code_head: "", beam_count: 3, stem_beam_extension: 7.5, stem: true, flag: true, code_flag_upstem: "flag32ndUp", code_flag_downstem: "flag32ndDown", stem_up_extension: 9, stem_down_extension: 9, tabnote_stem_up_extension: 9, tabnote_stem_down_extension: 9, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "rest32nd", stem: false, flag: false, rest: true, position: "B/4", dot_shiftY: -1.5, line_above: 2, line_below: 2 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 64: { common: { code_head: "", beam_count: 4, stem_beam_extension: 15, stem: true, flag: true, code_flag_upstem: "flag64thUp", code_flag_downstem: "flag64thDown", stem_up_extension: 13, stem_down_extension: 13, tabnote_stem_up_extension: 13, tabnote_stem_down_extension: 13, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "rest64th", stem: false, flag: false, rest: true, position: "B/4", dot_shiftY: -1.5, line_above: 2, line_below: 3 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } }, 128: { common: { code_head: "", beam_count: 5, stem_beam_extension: 22.5, stem: true, flag: true, code_flag_upstem: "flag128thUp", code_flag_downstem: "flag128thDown", stem_up_extension: 22, stem_down_extension: 22, tabnote_stem_up_extension: 22, tabnote_stem_down_extension: 22, dot_shiftY: 0, line_above: 0, line_below: 0 }, r: { code_head: "rest128th", stem: false, flag: false, rest: true, position: "B/4", dot_shiftY: -2.5, line_above: 3, line_below: 3 }, s: { getWidth: () => V.SLASH_NOTEHEAD_WIDTH, position: "B/4" } } };
  var $, J;
  !function(t2) {
    t2[t2.MOVE = 0] = "MOVE", t2[t2.LINE = 1] = "LINE", t2[t2.QUADRATIC = 2] = "QUADRATIC", t2[t2.BEZIER = 3] = "BEZIER";
  }($ || ($ = {}));
  class q {
    constructor(t2, e2, i2) {
      this.point = -1, this.metrics = Z.loadMetrics(t2, e2, i2), this.bbox = Z.getOutlineBoundingBox(this.metrics.outline, this.metrics.scale, this.metrics.x_shift, this.metrics.y_shift), i2 && (this.point = Z.lookupFontMetric(this.metrics.font, i2, e2, "point", -1));
    }
  }
  class Q {
    constructor(t2, e2, i2, b2) {
      this.outline = t2, this.originX = e2, this.originY = i2, this.scale = b2, this.i = 0, this.precision = 1, this.precision = Math.pow(10, V.RENDER_PRECISION_PLACES);
    }
    done() {
      return this.i >= this.outline.length;
    }
    next() {
      return Math.round(this.outline[this.i++] * this.precision / this.precision);
    }
    nextX() {
      return Math.round((this.originX + this.outline[this.i++] * this.scale) * this.precision) / this.precision;
    }
    nextY() {
      return Math.round((this.originY - this.outline[this.i++] * this.scale) * this.precision) / this.precision;
    }
    static parse(t2) {
      const e2 = [], i2 = t2.split(" ");
      let b2 = 0;
      for (; b2 < i2.length; ) switch (i2[b2++]) {
        case "m":
          e2.push($.MOVE, parseInt(i2[b2++]), parseInt(i2[b2++]));
          break;
        case "l":
          e2.push($.LINE, parseInt(i2[b2++]), parseInt(i2[b2++]));
          break;
        case "q":
          e2.push($.QUADRATIC, parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]));
          break;
        case "b":
          e2.push($.BEZIER, parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]), parseInt(i2[b2++]));
      }
      return e2;
    }
  }
  class Z extends R {
    static get CATEGORY() {
      return x.Glyph;
    }
    static lookupFontMetric(t2, e2, i2, b2, a2) {
      let n2 = t2.lookupMetric(`glyphs.${e2}.${i2}.${b2}`, void 0);
      return void 0 === n2 && (n2 = t2.lookupMetric(`glyphs.${e2}.${b2}`, a2)), n2;
    }
    static lookupGlyph(t2, e2) {
      let i2, b2;
      p(t2, "BadFontStack", "Font stack is misconfigured");
      for (let a2 = 0; a2 < t2.length; a2++) if (b2 = t2[a2], i2 = b2.getGlyphs()[e2], i2) return { glyph: i2, font: b2 };
      throw new g("BadGlyph", `Glyph ${e2} does not exist in font.`);
    }
    static loadMetrics(t2, e2, i2) {
      const { glyph: b2, font: a2 } = Z.lookupGlyph(t2, e2);
      if (!b2.o) throw new g("BadGlyph", `Glyph ${e2} has no outline defined.`);
      let n2 = 0, s2 = 0, l2 = 1;
      i2 && a2 && (n2 = Z.lookupFontMetric(a2, i2, e2, "shiftX", 0), s2 = Z.lookupFontMetric(a2, i2, e2, "shiftY", 0), l2 = Z.lookupFontMetric(a2, i2, e2, "scale", 1));
      const o2 = b2.x_min, r2 = b2.x_max, h2 = b2.ha;
      return b2.cached_outline || (b2.cached_outline = Q.parse(b2.o)), { x_min: o2, x_max: r2, x_shift: n2, y_shift: s2, scale: l2, ha: h2, outline: b2.cached_outline, font: a2, width: r2 - o2, height: h2 };
    }
    static renderGlyph(t2, e2, i2, b2, a2, n2) {
      var s2;
      const l2 = Z.cache.lookup(a2, null == n2 ? void 0 : n2.category), o2 = l2.metrics;
      -1 != l2.point && (b2 = l2.point);
      const r2 = null !== (s2 = null == n2 ? void 0 : n2.scale) && void 0 !== s2 ? s2 : 1, h2 = 72 * b2 / (100 * o2.font.getResolution()) * o2.scale * r2;
      return Z.renderOutline(t2, o2.outline, h2, e2 + o2.x_shift * r2, i2 + o2.y_shift * r2), o2;
    }
    static renderOutline(t2, e2, i2, b2, a2) {
      const n2 = new Q(e2, b2, a2, i2);
      let s2, l2;
      for (t2.beginPath(); !n2.done(); ) switch (n2.next()) {
        case $.MOVE:
          t2.moveTo(n2.nextX(), n2.nextY());
          break;
        case $.LINE:
          t2.lineTo(n2.nextX(), n2.nextY());
          break;
        case $.QUADRATIC:
          s2 = n2.nextX(), l2 = n2.nextY(), t2.quadraticCurveTo(n2.nextX(), n2.nextY(), s2, l2);
          break;
        case $.BEZIER:
          s2 = n2.nextX(), l2 = n2.nextY(), t2.bezierCurveTo(n2.nextX(), n2.nextY(), n2.nextX(), n2.nextY(), s2, l2);
      }
      t2.fill();
    }
    static getOutlineBoundingBox(t2, e2, i2, b2) {
      const a2 = new Q(t2, i2, b2, e2), n2 = new C();
      let s2, l2, o2 = i2, r2 = b2;
      for (; !a2.done(); ) switch (a2.next()) {
        case $.MOVE:
          o2 = a2.nextX(), r2 = a2.nextY();
          break;
        case $.LINE:
          n2.addPoint(o2, r2), o2 = a2.nextX(), r2 = a2.nextY(), n2.addPoint(o2, r2);
          break;
        case $.QUADRATIC:
          s2 = a2.nextX(), l2 = a2.nextY(), n2.addQuadraticCurve(o2, r2, a2.nextX(), a2.nextY(), s2, l2), o2 = s2, r2 = l2;
          break;
        case $.BEZIER:
          s2 = a2.nextX(), l2 = a2.nextY(), n2.addBezierCurve(o2, r2, a2.nextX(), a2.nextY(), a2.nextX(), a2.nextY(), s2, l2), o2 = s2, r2 = l2;
      }
      return new D(n2.getX1(), n2.getY1(), n2.width(), n2.height());
    }
    static getWidth(t2, e2, i2) {
      const b2 = Z.cache.lookup(t2, i2);
      -1 != b2.point && (e2 = b2.point);
      const a2 = 72 * e2 / (100 * b2.metrics.font.getResolution());
      return b2.bbox.getW() * a2;
    }
    constructor(t2, e2, i2) {
      super(), this.bbox = new D(0, 0, 0, 0), this.topGlyphs = [], this.botGlyphs = [], this.options = {}, this.scale = 1, this.code = t2, this.point = e2, this.originShift = { x: 0, y: 0 }, this.x_shift = 0, this.y_shift = 0, i2 ? this.setOptions(i2) : this.reset();
    }
    draw(...t2) {
    }
    getCode() {
      return this.code;
    }
    setOptions(t2) {
      this.options = Object.assign(Object.assign({}, this.options), t2), this.reset();
    }
    setPoint(t2) {
      return this.point = t2, this;
    }
    setStave(t2) {
      return this.stave = t2, this;
    }
    getXShift() {
      return this.x_shift;
    }
    setXShift(t2) {
      return this.x_shift = t2, this;
    }
    getYshift() {
      return this.y_shift;
    }
    setYShift(t2) {
      return this.y_shift = t2, this;
    }
    reset() {
      const t2 = Z.cache.lookup(this.code, this.options.category);
      this.metrics = t2.metrics, -1 != t2.point && (this.point = t2.point), this.scale = 72 * this.point / (100 * this.metrics.font.getResolution()), this.bbox = new D(t2.bbox.getX() * this.scale, t2.bbox.getY() * this.scale, t2.bbox.getW() * this.scale, t2.bbox.getH() * this.scale);
    }
    checkMetrics() {
      return p(this.metrics, "BadGlyph", `Glyph ${this.code} is not initialized.`);
    }
    getMetrics() {
      const t2 = this.checkMetrics(), e2 = t2.scale;
      return { x_min: t2.x_min * this.scale * e2, x_max: t2.x_max * this.scale * e2, width: this.bbox.getW(), height: this.bbox.getH(), scale: this.scale * e2, x_shift: t2.x_shift, y_shift: t2.y_shift, outline: t2.outline, font: t2.font, ha: t2.ha };
    }
    setOriginX(t2) {
      const { bbox: e2 } = this, i2 = (t2 - Math.abs(e2.getX() / e2.getW())) * e2.getW();
      this.originShift.x = -i2;
    }
    setOriginY(t2) {
      const { bbox: e2 } = this, i2 = (t2 - Math.abs(e2.getY() / e2.getH())) * e2.getH();
      this.originShift.y = -i2;
    }
    setOrigin(t2, e2) {
      this.setOriginX(t2), this.setOriginY(e2);
    }
    render(t2, e2, i2) {
      const b2 = this.checkMetrics(), a2 = b2.outline, n2 = this.scale * b2.scale;
      this.setRendered(), this.applyStyle(t2);
      const s2 = e2 + this.originShift.x + b2.x_shift, l2 = i2 + this.originShift.y + b2.y_shift;
      Z.renderOutline(t2, a2, n2, s2, l2), this.restoreStyle(t2);
    }
    checkStave() {
      return p(this.stave, "NoStave", "No stave attached to instance.");
    }
    renderToStave(t2) {
      const e2 = this.checkContext(), i2 = this.checkMetrics(), b2 = this.checkStave(), a2 = i2.outline, n2 = this.scale * i2.scale;
      this.setRendered(), this.applyStyle();
      const s2 = t2 + this.x_shift + i2.x_shift, l2 = b2.getYForGlyphs() + this.y_shift + i2.y_shift;
      Z.renderOutline(e2, a2, n2, s2, l2), this.restoreStyle();
    }
  }
  Z.cache = new class {
    constructor() {
      this.cache = /* @__PURE__ */ new Map();
    }
    lookup(t2, e2) {
      let i2 = this.cache.get(Z.CURRENT_CACHE_KEY);
      void 0 === i2 && (i2 = {}, this.cache.set(Z.CURRENT_CACHE_KEY, i2));
      const b2 = e2 ? `${t2}%${e2}` : t2;
      let a2 = i2[b2];
      return void 0 === a2 && (a2 = new q(Z.MUSIC_FONT_STACK, t2, e2), i2[b2] = a2), a2;
    }
  }(), Z.CURRENT_CACHE_KEY = "", Z.MUSIC_FONT_STACK = [], function(t2) {
    t2[t2.CENTER = 0] = "CENTER", t2[t2.LEFT = 1] = "LEFT", t2[t2.RIGHT = 2] = "RIGHT", t2[t2.ABOVE = 3] = "ABOVE", t2[t2.BELOW = 4] = "BELOW";
  }(J || (J = {}));
  class tt extends R {
    static get CATEGORY() {
      return x.Modifier;
    }
    static get Position() {
      return J;
    }
    static get PositionString() {
      return { center: J.CENTER, above: J.ABOVE, below: J.BELOW, left: J.LEFT, right: J.RIGHT };
    }
    constructor() {
      super(), this.width = 0, this.text_line = 0, this.position = tt.Position.LEFT, this.x_shift = 0, this.y_shift = 0, this.spacingFromNextModifier = 0;
    }
    reset() {
    }
    getWidth() {
      return this.width;
    }
    setWidth(t2) {
      return this.width = t2, this;
    }
    getNote() {
      return p(this.note, "NoNote", "Modifier has no note.");
    }
    checkAttachedNote() {
      const t2 = this.getCategory();
      return p(this.index, "NoIndex", `Can't draw ${t2} without an index.`), p(this.note, "NoNote", `Can't draw ${t2} without a note.`);
    }
    setNote(t2) {
      return this.note = t2, this;
    }
    getIndex() {
      return this.index;
    }
    checkIndex() {
      return p(this.index, "NoIndex", "Modifier has an invalid index.");
    }
    setIndex(t2) {
      return this.index = t2, this;
    }
    getModifierContext() {
      return this.modifierContext;
    }
    checkModifierContext() {
      return p(this.modifierContext, "NoModifierContext", "Modifier Context Required");
    }
    setModifierContext(t2) {
      return this.modifierContext = t2, this;
    }
    getPosition() {
      return this.position;
    }
    setPosition(t2) {
      return this.position = "string" == typeof t2 ? tt.PositionString[t2] : t2, this.reset(), this;
    }
    setTextLine(t2) {
      return this.text_line = t2, this;
    }
    setYShift(t2) {
      return this.y_shift = t2, this;
    }
    setSpacingFromNextModifier(t2) {
      this.spacingFromNextModifier = t2;
    }
    getSpacingFromNextModifier() {
      return this.spacingFromNextModifier;
    }
    setXShift(t2) {
      return this.x_shift = 0, this.position === tt.Position.LEFT ? this.x_shift -= t2 : this.x_shift += t2, this;
    }
    getXShift() {
      return this.x_shift;
    }
    draw() {
      throw this.checkContext(), new g("NotImplemented", "draw() not implemented for this modifier.");
    }
    alignSubNotesWithNote(t2, e2) {
      const i2 = e2.getTickContext(), b2 = i2.getMetrics(), a2 = e2.getStave(), n2 = i2.getX() - b2.modLeftPx - b2.modRightPx + this.getSpacingFromNextModifier();
      t2.forEach((t3) => {
        const e3 = t3.getTickContext();
        a2 && t3.setStave(a2), e3.setXOffset(n2);
      });
    }
  }
  class et {
    static get NUM_TONES() {
      return this.canonical_notes.length;
    }
    static get roots() {
      return ["c", "d", "e", "f", "g", "a", "b"];
    }
    static get root_values() {
      return [0, 2, 4, 5, 7, 9, 11];
    }
    static get root_indices() {
      return { c: 0, d: 1, e: 2, f: 3, g: 4, a: 5, b: 6 };
    }
    static get canonical_notes() {
      return ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
    }
    static get diatonic_intervals() {
      return ["unison", "m2", "M2", "m3", "M3", "p4", "dim5", "p5", "m6", "M6", "b7", "M7", "octave"];
    }
    static get diatonic_accidentals() {
      return { unison: { note: 0, accidental: 0 }, m2: { note: 1, accidental: -1 }, M2: { note: 1, accidental: 0 }, m3: { note: 2, accidental: -1 }, M3: { note: 2, accidental: 0 }, p4: { note: 3, accidental: 0 }, dim5: { note: 4, accidental: -1 }, p5: { note: 4, accidental: 0 }, m6: { note: 5, accidental: -1 }, M6: { note: 5, accidental: 0 }, b7: { note: 6, accidental: -1 }, M7: { note: 6, accidental: 0 }, octave: { note: 7, accidental: 0 } };
    }
    static get intervals() {
      return { u: 0, unison: 0, m2: 1, b2: 1, min2: 1, S: 1, H: 1, 2: 2, M2: 2, maj2: 2, T: 2, W: 2, m3: 3, b3: 3, min3: 3, M3: 4, 3: 4, maj3: 4, 4: 5, p4: 5, "#4": 6, b5: 6, aug4: 6, dim5: 6, 5: 7, p5: 7, "#5": 8, b6: 8, aug5: 8, 6: 9, M6: 9, maj6: 9, b7: 10, m7: 10, min7: 10, dom7: 10, M7: 11, maj7: 11, 8: 12, octave: 12 };
    }
    static get scales() {
      return { major: [2, 2, 1, 2, 2, 2, 1], minor: [2, 1, 2, 2, 1, 2, 2], ionian: [2, 2, 1, 2, 2, 2, 1], dorian: [2, 1, 2, 2, 2, 1, 2], phyrgian: [1, 2, 2, 2, 1, 2, 2], lydian: [2, 2, 2, 1, 2, 2, 1], mixolydian: [2, 2, 1, 2, 2, 1, 2], aeolian: [2, 1, 2, 2, 1, 2, 2], locrian: [1, 2, 2, 1, 2, 2, 2] };
    }
    static get scaleTypes() {
      return { M: et.scales.major, m: et.scales.minor };
    }
    static get accidentals() {
      return ["bb", "b", "n", "#", "##"];
    }
    static get noteValues() {
      return { c: { root_index: 0, int_val: 0 }, cn: { root_index: 0, int_val: 0 }, "c#": { root_index: 0, int_val: 1 }, "c##": { root_index: 0, int_val: 2 }, cb: { root_index: 0, int_val: 11 }, cbb: { root_index: 0, int_val: 10 }, d: { root_index: 1, int_val: 2 }, dn: { root_index: 1, int_val: 2 }, "d#": { root_index: 1, int_val: 3 }, "d##": { root_index: 1, int_val: 4 }, db: { root_index: 1, int_val: 1 }, dbb: { root_index: 1, int_val: 0 }, e: { root_index: 2, int_val: 4 }, en: { root_index: 2, int_val: 4 }, "e#": { root_index: 2, int_val: 5 }, "e##": { root_index: 2, int_val: 6 }, eb: { root_index: 2, int_val: 3 }, ebb: { root_index: 2, int_val: 2 }, f: { root_index: 3, int_val: 5 }, fn: { root_index: 3, int_val: 5 }, "f#": { root_index: 3, int_val: 6 }, "f##": { root_index: 3, int_val: 7 }, fb: { root_index: 3, int_val: 4 }, fbb: { root_index: 3, int_val: 3 }, g: { root_index: 4, int_val: 7 }, gn: { root_index: 4, int_val: 7 }, "g#": { root_index: 4, int_val: 8 }, "g##": { root_index: 4, int_val: 9 }, gb: { root_index: 4, int_val: 6 }, gbb: { root_index: 4, int_val: 5 }, a: { root_index: 5, int_val: 9 }, an: { root_index: 5, int_val: 9 }, "a#": { root_index: 5, int_val: 10 }, "a##": { root_index: 5, int_val: 11 }, ab: { root_index: 5, int_val: 8 }, abb: { root_index: 5, int_val: 7 }, b: { root_index: 6, int_val: 11 }, bn: { root_index: 6, int_val: 11 }, "b#": { root_index: 6, int_val: 0 }, "b##": { root_index: 6, int_val: 1 }, bb: { root_index: 6, int_val: 10 }, bbb: { root_index: 6, int_val: 9 } };
    }
    isValidNoteValue(t2) {
      return t2 >= 0 && t2 < et.canonical_notes.length;
    }
    isValidIntervalValue(t2) {
      return t2 >= 0 && t2 < et.diatonic_intervals.length;
    }
    getNoteParts(t2) {
      if (!t2 || t2.length < 1) throw new g("BadArguments", "Invalid note name: " + t2);
      if (t2.length > 3) throw new g("BadArguments", "Invalid note name: " + t2);
      const e2 = t2.toLowerCase(), i2 = /^([cdefgab])(b|bb|n|#|##)?$/.exec(e2);
      if (null !== i2) {
        return { root: i2[1], accidental: i2[2] };
      }
      throw new g("BadArguments", "Invalid note name: " + t2);
    }
    getKeyParts(t2) {
      if (!t2 || t2.length < 1) throw new g("BadArguments", "Invalid key: " + t2);
      const e2 = t2.toLowerCase(), i2 = /^([cdefgab])(b|#)?(mel|harm|m|M)?$/.exec(e2);
      if (null !== i2) {
        const t3 = i2[1], e3 = i2[2];
        let b2 = i2[3];
        return b2 || (b2 = "M"), { root: t3, accidental: e3, type: b2 };
      }
      throw new g("BadArguments", `Invalid key: ${t2}`);
    }
    getNoteValue(t2) {
      const e2 = et.noteValues[t2];
      if (void 0 === e2) throw new g("BadArguments", `Invalid note name: ${t2}`);
      return e2.int_val;
    }
    getIntervalValue(t2) {
      const e2 = et.intervals[t2];
      if (void 0 === e2) throw new g("BadArguments", `Invalid interval name: ${t2}`);
      return e2;
    }
    getCanonicalNoteName(t2) {
      if (!this.isValidNoteValue(t2)) throw new g("BadArguments", `Invalid note value: ${t2}`);
      return et.canonical_notes[t2];
    }
    getCanonicalIntervalName(t2) {
      if (!this.isValidIntervalValue(t2)) throw new g("BadArguments", `Invalid interval value: ${t2}`);
      return et.diatonic_intervals[t2];
    }
    getRelativeNoteValue(t2, e2, i2 = 1) {
      if (1 !== i2 && -1 !== i2) throw new g("BadArguments", `Invalid direction: ${i2}`);
      let b2 = (t2 + i2 * e2) % et.NUM_TONES;
      return b2 < 0 && (b2 += et.NUM_TONES), b2;
    }
    getRelativeNoteName(t2, e2) {
      const i2 = this.getNoteParts(t2), b2 = this.getNoteValue(i2.root);
      let a2 = e2 - b2;
      if (Math.abs(a2) > et.NUM_TONES - 3) {
        let i3 = 1;
        a2 > 0 && (i3 = -1);
        const n3 = (e2 + 1 + (b2 + 1)) % et.NUM_TONES * i3;
        if (Math.abs(n3) > 2) throw new g("BadArguments", `Notes not related: ${t2}, ${e2})`);
        a2 = n3;
      }
      if (Math.abs(a2) > 2) throw new g("BadArguments", `Notes not related: ${t2}, ${e2})`);
      let n2 = i2.root;
      if (a2 > 0) for (let t3 = 1; t3 <= a2; ++t3) n2 += "#";
      else if (a2 < 0) for (let t3 = -1; t3 >= a2; --t3) n2 += "b";
      return n2;
    }
    getScaleTones(t2, e2) {
      const i2 = [t2];
      let b2 = t2;
      for (let a2 = 0; a2 < e2.length; a2++) b2 = this.getRelativeNoteValue(b2, e2[a2]), b2 !== t2 && i2.push(b2);
      return i2;
    }
    getIntervalBetween(t2, e2, i2 = 1) {
      if (1 !== i2 && -1 !== i2) throw new g("BadArguments", `Invalid direction: ${i2}`);
      if (!this.isValidNoteValue(t2) || !this.isValidNoteValue(e2)) throw new g("BadArguments", `Invalid notes: ${t2}, ${e2}`);
      let b2 = 1 === i2 ? e2 - t2 : t2 - e2;
      return b2 < 0 && (b2 += et.NUM_TONES), b2;
    }
    createScaleMap(t2) {
      const e2 = this.getKeyParts(t2);
      if (!e2.type) throw new g("BadArguments", "Unsupported key type: undefined");
      const i2 = et.scaleTypes[e2.type];
      let b2 = e2.root;
      if (e2.accidental && (b2 += e2.accidental), !i2) throw new g("BadArguments", "Unsupported key type: " + t2);
      const a2 = this.getScaleTones(this.getNoteValue(b2), i2), n2 = et.root_indices[e2.root], s2 = {};
      for (let t3 = 0; t3 < et.roots.length; ++t3) {
        const e3 = (n2 + t3) % et.roots.length, i3 = et.roots[e3];
        let b3 = this.getRelativeNoteName(i3, a2[t3]);
        1 === b3.length && (b3 += "n"), s2[i3] = b3;
      }
      return s2;
    }
  }
  function it(...t2) {
    bt.DEBUG && u("Vex.Flow.Accidental", t2);
  }
  class bt extends tt {
    static get CATEGORY() {
      return x.Accidental;
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return;
      const i2 = V.currentMusicFont(), b2 = i2.lookupMetric("accidental.noteheadAccidentalPadding"), a2 = e2.left_shift + b2, n2 = i2.lookupMetric("accidental.accidentalSpacing"), s2 = i2.lookupMetric("accidental.leftPadding"), l2 = [];
      let o2, r2 = 0;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const i3 = t2[e3], b3 = i3.getNote(), a3 = b3.getStave(), n3 = i3.checkIndex(), s3 = b3.getKeyProps()[n3];
        if (b3 !== o2) {
          for (let t3 = 0; t3 < b3.keys.length; ++t3) r2 = Math.max(b3.getLeftDisplacedHeadPx() - b3.getXShift(), r2);
          o2 = b3;
        }
        if (a3) {
          const t3 = a3.getSpacingBetweenLines(), e4 = a3.getYForLine(s3.line), b4 = Math.round(e4 / t3 * 2) / 2;
          l2.push({ y: e4, line: b4, extraXSpaceNeeded: r2, acc: i3, spacingBetweenStaveLines: t3 });
        } else l2.push({ line: s3.line, extraXSpaceNeeded: r2, acc: i3 });
      }
      l2.sort((t3, e3) => e3.line - t3.line);
      const h2 = [];
      let m2 = 0;
      for (let t3 = 0; t3 < l2.length; t3++) {
        const e3 = l2[t3], i3 = h2[h2.length - 1];
        let b3;
        i3 && (null == i3 ? void 0 : i3.line) === e3.line ? b3 = i3 : (b3 = { line: e3.line, flatLine: true, dblSharpLine: true, numAcc: 0, width: 0, column: 0 }, h2.push(b3)), "b" !== e3.acc.type && "bb" !== e3.acc.type && (b3.flatLine = false), "##" !== e3.acc.type && (b3.dblSharpLine = false), b3.numAcc++, b3.width += e3.acc.getWidth() + n2, m2 = Math.max(e3.extraXSpaceNeeded, m2);
      }
      let c2 = 0;
      for (let t3 = 0; t3 < h2.length; t3++) {
        let e3 = false;
        const i3 = t3;
        let b3 = t3;
        for (; b3 + 1 < h2.length && !e3; ) this.checkCollision(h2[b3], h2[b3 + 1]) ? b3++ : e3 = true;
        const a3 = (t4) => h2[i3 + t4], n3 = (t4) => t4.map(a3), s3 = (t4, e4) => {
          const [i4, b4] = n3([t4, e4]).map((t5) => t5.line);
          return i4 - b4;
        }, l3 = (...t4) => t4.map(n3).every(([t5, e4]) => !this.checkCollision(t5, e4)), o3 = b3 - i3 + 1;
        let r3, m3, d3 = this.checkCollision(h2[i3], h2[b3]) ? "a" : "b";
        switch (o3) {
          case 3:
            "a" === d3 && 0.5 === s3(1, 2) && 0.5 !== s3(0, 1) && (d3 = "second_on_bottom");
            break;
          case 4:
            l3([0, 2], [1, 3]) && (d3 = "spaced_out_tetrachord");
            break;
          case 5:
            "b" === d3 && l3([1, 3]) && (d3 = "spaced_out_pentachord", l3([0, 2], [2, 4]) && (d3 = "very_spaced_out_pentachord"));
            break;
          case 6:
            l3([0, 3], [1, 4], [2, 5]) && (d3 = "spaced_out_hexachord"), l3([0, 2], [2, 4], [1, 3], [3, 5]) && (d3 = "very_spaced_out_hexachord");
        }
        if (o3 >= 7) {
          let e4 = 2, i4 = true;
          for (; true === i4; ) {
            i4 = false;
            for (let t4 = 0; t4 + e4 < h2.length; t4++) if (this.checkCollision(h2[t4], h2[t4 + e4])) {
              i4 = true, e4++;
              break;
            }
          }
          for (r3 = t3; r3 <= b3; r3++) m3 = (r3 - t3) % e4 + 1, h2[r3].column = m3, c2 = c2 > m3 ? c2 : m3;
        } else for (r3 = t3; r3 <= b3; r3++) m3 = V.accidentalColumnsTable[o3][d3][r3 - t3], h2[r3].column = m3, c2 = c2 > m3 ? c2 : m3;
        t3 = b3;
      }
      const d2 = [], _2 = [];
      for (let t3 = 0; t3 <= c2; t3++) d2[t3] = 0, _2[t3] = 0;
      d2[0] = a2 + m2, _2[0] = a2, h2.forEach((t3) => {
        t3.width > d2[t3.column] && (d2[t3.column] = t3.width);
      });
      for (let t3 = 1; t3 < d2.length; t3++) _2[t3] = d2[t3] + _2[t3 - 1];
      const x2 = _2[_2.length - 1];
      let g2 = 0;
      h2.forEach((t3) => {
        let e3 = 0;
        const i3 = g2 + t3.numAcc;
        for (; g2 < i3; g2++) {
          const i4 = _2[t3.column - 1] + e3 + m2;
          l2[g2].acc.setXShift(i4), e3 += l2[g2].acc.getWidth() + n2, it("Line, accCount, shift: ", t3.line, g2, i4);
        }
      }), e2.left_shift = x2 + s2;
    }
    static checkCollision(t2, e2) {
      let i2 = e2.line - t2.line, b2 = 3;
      i2 > 0 ? (b2 = e2.flatLine || e2.dblSharpLine ? 2.5 : 3, t2.dblSharpLine && (i2 -= 0.5)) : (b2 = t2.flatLine || t2.dblSharpLine ? 2.5 : 3, e2.dblSharpLine && (i2 -= 0.5));
      const a2 = Math.abs(i2) < b2;
      return it("Line_1, Line_2, Collision: ", t2.line, e2.line, a2), a2;
    }
    static applyAccidentals(t2, e2) {
      const i2 = [], b2 = {};
      t2.forEach((t3) => {
        const e3 = new z(0, 1);
        t3.getTickables().forEach((t4) => {
          if (t4.shouldIgnoreTicks()) return;
          const a2 = b2[e3.value()];
          a2 ? a2.push(t4) : (i2.push(e3.value()), b2[e3.value()] = [t4]), e3.add(t4.getTicks());
        });
      });
      const n2 = new et();
      e2 || (e2 = "C");
      const s2 = n2.createScaleMap(e2), l2 = {};
      i2.forEach((t3) => {
        const e3 = b2[t3], i3 = [], o2 = (t4) => {
          if (!c(t4) || t4.isRest() || t4.shouldIgnoreTicks()) return;
          const e4 = t4;
          e4.keys.forEach((t5, b3) => {
            const o3 = n2.getNoteParts(t5.split("/")[0]), r2 = t5.split("/")[1], h2 = o3.accidental || "n", m2 = o3.root + h2;
            l2[o3.root + r2] || (l2[o3.root + r2] = s2[o3.root]);
            const c2 = l2[o3.root + r2] === m2, d2 = i3.indexOf(t5) > -1;
            if (e4.getModifiers().forEach((t6, i4) => {
              a(t6) && t6.type == h2 && t6.getIndex() == b3 && e4.getModifiers().splice(i4, 1);
            }), !c2 || c2 && d2) {
              l2[o3.root + r2] = m2;
              const a2 = new bt(h2);
              e4.addModifier(a2, b3), i3.push(t5);
            }
          }), e4.getModifiers().forEach((t5) => {
            r(t5) && t5.getGraceNotes().forEach(o2);
          });
        };
        e3.forEach(o2);
      });
    }
    constructor(t2) {
      super(), it("New accidental: ", t2), this.type = t2, this.position = tt.Position.LEFT, this.render_options = { font_scale: V.NOTATION_FONT_SCALE, parenLeftPadding: 2, parenRightPadding: 2 }, this.accidental = V.accidentalCodes(this.type), p(this.accidental, "ArgumentError", `Unknown accidental type: ${t2}`), this.cautionary = false, this.reset();
    }
    reset() {
      const t2 = this.render_options.font_scale;
      this.glyph = new Z(this.accidental.code, t2), this.glyph.setOriginX(1), this.cautionary && (this.parenLeft = new Z(V.accidentalCodes("{").code, t2), this.parenRight = new Z(V.accidentalCodes("}").code, t2), this.parenLeft.setOriginX(1), this.parenRight.setOriginX(1));
    }
    getWidth() {
      if (this.cautionary) {
        const t2 = p(this.parenLeft), e2 = p(this.parenRight), i2 = t2.getMetrics().width + e2.getMetrics().width + this.render_options.parenLeftPadding + this.render_options.parenRightPadding;
        return this.glyph.getMetrics().width + i2;
      }
      return this.glyph.getMetrics().width;
    }
    setNote(t2) {
      return p(t2, "ArgumentError", `Bad note value: ${t2}`), this.note = t2, o(t2) && (this.render_options.font_scale = 25, this.reset()), this;
    }
    setAsCautionary() {
      return this.cautionary = true, this.render_options.font_scale = 28, this.reset(), this;
    }
    draw() {
      const { type: t2, position: e2, index: i2, cautionary: b2, x_shift: a2, y_shift: n2, glyph: s2, render_options: { parenLeftPadding: l2, parenRightPadding: o2 } } = this, r2 = this.checkContext(), h2 = this.checkAttachedNote();
      this.setRendered();
      const m2 = h2.getModifierStartXY(e2, i2);
      let c2 = m2.x + a2;
      const d2 = m2.y + n2;
      if (it("Rendering: ", t2, c2, d2), b2) {
        const t3 = p(this.parenLeft), e3 = p(this.parenRight);
        e3.render(r2, c2, d2), c2 -= e3.getMetrics().width, c2 -= o2, c2 -= this.accidental.parenRightPaddingAdjustment, s2.render(r2, c2, d2), c2 -= s2.getMetrics().width, c2 -= l2, t3.render(r2, c2, d2);
      } else s2.render(r2, c2, d2);
    }
  }
  bt.DEBUG = false;
  class at extends R {
    static get CATEGORY() {
      return x.Stem;
    }
    static get UP() {
      return 1;
    }
    static get DOWN() {
      return -1;
    }
    static get WIDTH() {
      return V.STEM_WIDTH;
    }
    static get HEIGHT() {
      return V.STEM_HEIGHT;
    }
    constructor(t2) {
      super(), this.stem_up_y_offset = 0, this.stem_down_y_offset = 0, this.stem_up_y_base_offset = 0, this.stem_down_y_base_offset = 0, this.x_begin = (null == t2 ? void 0 : t2.x_begin) || 0, this.x_end = (null == t2 ? void 0 : t2.x_end) || 0, this.y_top = (null == t2 ? void 0 : t2.y_top) || 0, this.y_bottom = (null == t2 ? void 0 : t2.y_bottom) || 0, this.stem_extension = (null == t2 ? void 0 : t2.stem_extension) || 0, this.stem_direction = (null == t2 ? void 0 : t2.stem_direction) || 0, this.hide = (null == t2 ? void 0 : t2.hide) || false, this.isStemlet = (null == t2 ? void 0 : t2.isStemlet) || false, this.stemletHeight = (null == t2 ? void 0 : t2.stemletHeight) || 0, this.renderHeightAdjustment = 0, this.setOptions(t2);
    }
    setOptions(t2) {
      this.stem_up_y_offset = (null == t2 ? void 0 : t2.stem_up_y_offset) || 0, this.stem_down_y_offset = (null == t2 ? void 0 : t2.stem_down_y_offset) || 0, this.stem_up_y_base_offset = (null == t2 ? void 0 : t2.stem_up_y_base_offset) || 0, this.stem_down_y_base_offset = (null == t2 ? void 0 : t2.stem_down_y_base_offset) || 0;
    }
    setNoteHeadXBounds(t2, e2) {
      return this.x_begin = t2, this.x_end = e2, this;
    }
    setDirection(t2) {
      this.stem_direction = t2;
    }
    setExtension(t2) {
      this.stem_extension = t2;
    }
    getExtension() {
      return this.stem_extension;
    }
    setYBounds(t2, e2) {
      this.y_top = t2, this.y_bottom = e2;
    }
    getHeight() {
      const t2 = this.stem_direction === at.UP ? this.stem_up_y_offset : this.stem_down_y_offset;
      return (this.y_bottom - this.y_top + (at.HEIGHT - t2 + this.stem_extension)) * this.stem_direction;
    }
    getBoundingBox() {
      throw new g("NotImplemented", "getBoundingBox() not implemented.");
    }
    getExtents() {
      const t2 = this.stem_direction === at.UP, e2 = [this.y_top, this.y_bottom], i2 = at.HEIGHT + this.stem_extension, b2 = (t2 ? Math.min : Math.max)(...e2), a2 = (t2 ? Math.max : Math.min)(...e2);
      return { topY: b2 + i2 * -this.stem_direction, baseY: a2 };
    }
    setVisibility(t2) {
      return this.hide = !t2, this;
    }
    setStemlet(t2, e2) {
      return this.isStemlet = t2, this.stemletHeight = e2, this;
    }
    adjustHeightForFlag() {
      this.renderHeightAdjustment = V.currentMusicFont().lookupMetric("stem.heightAdjustmentForFlag", -3);
    }
    adjustHeightForBeam() {
      this.renderHeightAdjustment = -at.WIDTH / 2;
    }
    draw() {
      if (this.setRendered(), this.hide) return;
      const t2 = this.checkContext();
      let e2, i2;
      const b2 = this.stem_direction;
      let a2 = 0;
      b2 === at.DOWN ? (e2 = this.x_begin, i2 = this.y_top + this.stem_down_y_offset, a2 = this.stem_down_y_base_offset) : (e2 = this.x_end, i2 = this.y_bottom - this.stem_up_y_offset, a2 = this.stem_up_y_base_offset);
      const n2 = this.getHeight();
      !function(...t3) {
        at.DEBUG && u("Vex.Flow.Stem", t3);
      }("Rendering stem - ", "Top Y: ", this.y_top, "Bottom Y: ", this.y_bottom);
      const s2 = this.isStemlet ? n2 - this.stemletHeight * this.stem_direction : 0;
      t2.save(), this.applyStyle(), t2.openGroup("stem", this.getAttribute("id"), { pointerBBox: true }), t2.beginPath(), t2.setLineWidth(at.WIDTH), t2.moveTo(e2, i2 - s2 + a2), t2.lineTo(e2, i2 - n2 - this.renderHeightAdjustment * b2), t2.stroke(), t2.closeGroup(), this.restoreStyle(), t2.restore();
    }
  }
  function nt(...t2) {
    rt.DEBUG && u("Vex.Flow.TextFormatter", t2);
  }
  at.DEBUG = false;
  const st = {}, lt = {}, ot = {};
  class rt {
    static getFontFamilies() {
      const t2 = [];
      for (const e2 in ot) {
        const i2 = ot[e2];
        t2.push(Object.assign({}, i2));
      }
      return t2;
    }
    static create(t2 = {}) {
      nt("create: ", t2), t2.family || (t2.family = F.SANS_SERIF);
      const e2 = [], i2 = t2.family.split(/\s*,\s*/);
      for (const t3 of i2) {
        for (const i3 in ot) i3.startsWith(t3) && e2.push(ot[i3]);
        if (e2.length > 0) break;
      }
      let b2;
      if (0 === e2.length) b2 = new rt(Object.values(ot)[0]);
      else if (1 === e2.length) b2 = new rt(e2[0]);
      else {
        const i3 = F.isBold(t2.weight), a3 = F.isItalic(t2.style), n2 = e2.find((t3) => t3.bold === i3 && t3.italic === a3);
        if (n2) b2 = new rt(n2);
        else {
          const t3 = e2.find((t4) => t4.italic === a3 || t4.bold === i3);
          b2 = new rt(t3 || e2[0]);
        }
      }
      const a2 = t2.size;
      if (void 0 !== a2) {
        const t3 = F.convertSizeToPointValue(a2);
        b2.setFontSize(t3);
      }
      return b2;
    }
    static getInfo(t2) {
      return ot[t2];
    }
    static registerInfo(t2, e2 = false) {
      nt("registerInfo: ", t2, e2);
      const i2 = t2.family;
      (void 0 === ot[i2] || e2) && (ot[i2] = t2);
    }
    constructor(t2) {
      this.family = "", this.size = 14, this.resolution = 1e3, this.glyphs = {}, this.serifs = false, this.monospaced = false, this.italic = false, this.bold = false, this.superscriptOffset = 0, this.subscriptOffset = 0, this.maxSizeGlyph = "@", this.cacheKey = "", this.updateParams(t2);
    }
    get localHeightCache() {
      var t2;
      return void 0 === lt[this.cacheKey] && (lt[this.cacheKey] = {}), null !== (t2 = lt[this.cacheKey]) && void 0 !== t2 ? t2 : {};
    }
    updateParams(t2) {
      t2.family && (this.family = t2.family), t2.resolution && (this.resolution = t2.resolution), t2.glyphs && (this.glyphs = t2.glyphs), t2.serifs && (this.serifs = t2.serifs), t2.monospaced && (this.monospaced = t2.monospaced), t2.italic && (this.italic = t2.italic), t2.bold && (this.bold = t2.bold), t2.maxSizeGlyph && (this.maxSizeGlyph = t2.maxSizeGlyph), t2.superscriptOffset && (this.superscriptOffset = t2.superscriptOffset), t2.subscriptOffset && (this.subscriptOffset = t2.subscriptOffset), this.updateCacheKey();
    }
    updateCacheKey() {
      const t2 = this.family.replace(/\s+/g, "_"), e2 = this.size, i2 = this.bold ? E.BOLD : E.NORMAL, b2 = this.italic ? P.ITALIC : P.NORMAL;
      this.cacheKey = `${t2}%${e2}%${i2}%${b2}`;
    }
    getGlyphMetrics(t2) {
      return this.glyphs[t2] ? this.glyphs[t2] : this.glyphs[this.maxSizeGlyph];
    }
    get maxHeight() {
      return this.getGlyphMetrics(this.maxSizeGlyph).ha / this.resolution * this.fontSizeInPixels;
    }
    getWidthForCharacterInEm(t2) {
      var e2;
      const i2 = this.getGlyphMetrics(t2);
      if (i2) {
        return (null !== (e2 = i2.advanceWidth) && void 0 !== e2 ? e2 : 0) / this.resolution;
      }
      return 0.65;
    }
    getYForCharacterInPx(t2) {
      const e2 = this.getGlyphMetrics(t2), i2 = { yMin: 0, yMax: this.maxHeight, height: this.maxHeight };
      return e2 ? ("number" == typeof e2.y_min && (i2.yMin = e2.y_min / this.resolution * this.fontSizeInPixels), "number" == typeof e2.y_max && (i2.yMax = e2.y_max / this.resolution * this.fontSizeInPixels), i2.height = i2.yMax - i2.yMin, i2) : i2;
    }
    getYForStringInPx(t2) {
      const e2 = this.localHeightCache, i2 = { yMin: 0, yMax: this.maxHeight, height: this.maxHeight }, b2 = e2[t2];
      if (void 0 !== b2) return b2;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const b3 = this.getYForCharacterInPx(t2[e3]);
        i2.yMin = Math.min(i2.yMin, b3.yMin), i2.yMax = Math.max(i2.yMax, b3.yMax), i2.height = i2.yMax - i2.yMin;
      }
      return e2[t2] = i2, i2;
    }
    getWidthForTextInEm(t2) {
      const e2 = this.cacheKey;
      let i2 = st[e2];
      void 0 === i2 && (i2 = {}, st[e2] = i2);
      let b2 = i2[t2];
      if (void 0 === b2) {
        b2 = 0;
        for (let e3 = 0; e3 < t2.length; ++e3) b2 += this.getWidthForCharacterInEm(t2[e3]);
        i2[t2] = b2;
      }
      return b2;
    }
    getWidthForTextInPx(t2) {
      return this.getWidthForTextInEm(t2) * this.fontSizeInPixels;
    }
    setFontSize(t2) {
      return this.size = t2, this.updateCacheKey(), this;
    }
    get fontSizeInPixels() {
      return this.size * F.scaleToPxFrom.pt;
    }
    getResolution() {
      return this.resolution;
    }
  }
  var ht, mt;
  rt.DEBUG = false, function(t2) {
    t2[t2.LEFT = 1] = "LEFT", t2[t2.CENTER = 2] = "CENTER", t2[t2.RIGHT = 3] = "RIGHT", t2[t2.CENTER_STEM = 4] = "CENTER_STEM";
  }(ht || (ht = {})), function(t2) {
    t2[t2.TOP = 1] = "TOP", t2[t2.CENTER = 2] = "CENTER", t2[t2.BOTTOM = 3] = "BOTTOM", t2[t2.CENTER_STEM = 4] = "CENTER_STEM";
  }(mt || (mt = {}));
  class ct extends tt {
    static get CATEGORY() {
      return x.Annotation;
    }
    static get minAnnotationPadding() {
      return V.currentMusicFont().lookupMetric("noteHead.minPadding");
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0, b2 = 0, a2 = 0, n2 = 0;
      for (let s3 = 0; s3 < t2.length; ++s3) {
        const l3 = t2[s3], o2 = rt.create(l3.textFont);
        let r2 = (2 + o2.getYForStringInPx(l3.text).height) / V.STAVE_LINE_DISTANCE;
        const h2 = l3.checkAttachedNote(), m2 = h2.getGlyphProps().getWidth(), c2 = o2.getWidthForTextInPx(l3.text);
        l3.horizontalJustification === ht.LEFT ? (a2 = Math.max(m2, a2), i2 = Math.max(i2, c2) + ct.minAnnotationPadding) : l3.horizontalJustification === ht.RIGHT ? (n2 = Math.max(m2, n2), b2 = Math.max(b2, c2)) : (i2 = Math.max(i2, c2 / 2) + ct.minAnnotationPadding, b2 = Math.max(b2, c2 / 2), a2 = Math.max(m2 / 2, a2), n2 = Math.max(m2 / 2, n2));
        const x2 = h2.getStave(), g2 = h2.hasStem() ? h2.getStemDirection() : at.UP;
        let y2 = 0, p2 = 5;
        if (_(h2)) if (h2.render_options.draw_stem) {
          const t3 = h2.getStem();
          t3 && (y2 = Math.abs(t3.getHeight()) / V.STAVE_LINE_DISTANCE);
        } else y2 = 0;
        else if (d(h2)) {
          const t3 = h2.getStem();
          t3 && "n" === h2.getNoteType() && (y2 = Math.abs(t3.getHeight()) / V.STAVE_LINE_DISTANCE);
        }
        if (x2 && (p2 = x2.getNumLines()), l3.verticalJustification === this.VerticalJustify.TOP) {
          let t3 = h2.getLineNumber(true);
          _(h2) && (t3 = p2 - (h2.leastString() - 0.5)), g2 === at.UP && (t3 += y2);
          t3 + e2.top_text_line + 0.5 < p2 ? (l3.setTextLine(p2 - t3), r2 += p2 - t3, e2.top_text_line = r2) : (l3.setTextLine(e2.top_text_line), e2.top_text_line += r2);
        } else if (l3.verticalJustification === this.VerticalJustify.BOTTOM) {
          let t3 = p2 - h2.getLineNumber();
          _(h2) && (t3 = h2.greatestString() - 1), g2 === at.DOWN && (t3 += y2);
          const i3 = t3 + e2.text_line + 1;
          i3 < p2 ? (l3.setTextLine(p2 - i3), r2 += p2 - i3, e2.text_line = r2) : (l3.setTextLine(e2.text_line), e2.text_line += r2);
        } else l3.setTextLine(e2.text_line);
      }
      const s2 = Math.min(Math.max(b2 - n2, 0), Math.max(b2 - e2.right_shift, 0)), l2 = Math.min(Math.max(i2 - a2, 0), Math.max(i2 - e2.left_shift, 0));
      return e2.left_shift += l2, e2.right_shift += s2, true;
    }
    constructor(t2) {
      super(), this.text = t2, this.horizontalJustification = ht.CENTER, this.verticalJustification = mt.TOP, this.resetFont(), this.setWidth(V.textWidth(t2));
    }
    setVerticalJustification(t2) {
      return this.verticalJustification = "string" == typeof t2 ? ct.VerticalJustifyString[t2] : t2, this;
    }
    getJustification() {
      return this.horizontalJustification;
    }
    setJustification(t2) {
      return this.horizontalJustification = "string" == typeof t2 ? ct.HorizontalJustifyString[t2] : t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote(), i2 = e2.hasStem() ? e2.getStemDirection() : at.UP, b2 = rt.create(this.textFont), a2 = e2.getModifierStartXY(J.ABOVE, this.index);
      this.setRendered(), t2.save(), this.applyStyle(), t2.openGroup("annotation", this.getAttribute("id")), t2.setFont(this.textFont);
      const n2 = b2.getWidthForTextInPx(this.text), s2 = b2.getYForStringInPx(this.text).height;
      let l2, o2;
      l2 = this.horizontalJustification === ht.LEFT ? a2.x : this.horizontalJustification === ht.RIGHT ? a2.x - n2 : this.horizontalJustification === ht.CENTER ? a2.x - n2 / 2 : e2.getStemX() - n2 / 2;
      let r2 = {}, h2 = 0;
      const m2 = e2.hasStem(), c2 = e2.checkStave();
      if (m2 && (r2 = e2.checkStem().getExtents(), h2 = c2.getSpacingBetweenLines()), this.verticalJustification === mt.BOTTOM) {
        o2 = e2.getYs().reduce((t3, e3) => t3 > e3 ? t3 : e3), o2 += (this.text_line + 1) * V.STAVE_LINE_DISTANCE + s2, m2 && i2 === at.DOWN && (o2 = Math.max(o2, r2.topY + s2 + h2 * this.text_line));
      } else if (this.verticalJustification === mt.CENTER) {
        const t3 = e2.getYForTopText(this.text_line) - 1;
        o2 = t3 + (c2.getYForBottomText(this.text_line) - t3) / 2 + s2 / 2;
      } else if (this.verticalJustification === mt.TOP) {
        o2 = Math.min(...e2.getYs()) - (this.text_line + 1) * V.STAVE_LINE_DISTANCE, m2 && i2 === at.UP && (h2 = r2.topY < c2.getTopLineTopY() ? V.STAVE_LINE_DISTANCE : h2, o2 = Math.min(o2, r2.topY - h2 * (this.text_line + 1)));
      } else {
        const t3 = e2.getStemExtents();
        o2 = t3.topY + (t3.baseY - t3.topY) / 2 + s2 / 2;
      }
      !function(...t3) {
        ct.DEBUG && u("Vex.Flow.Annotation", t3);
      }("Rendering annotation: ", this.text, l2, o2), t2.fillText(this.text, l2, o2), t2.closeGroup(), this.restoreStyle(), t2.restore();
    }
  }
  ct.DEBUG = false, ct.TEXT_FONT = Object.assign({}, R.TEXT_FONT), ct.HorizontalJustify = ht, ct.HorizontalJustifyString = { left: ht.LEFT, right: ht.RIGHT, center: ht.CENTER, centerStem: ht.CENTER_STEM }, ct.VerticalJustify = mt, ct.VerticalJustifyString = { above: mt.TOP, top: mt.TOP, below: mt.BOTTOM, bottom: mt.BOTTOM, center: mt.CENTER, centerStem: mt.CENTER_STEM };
  const { ABOVE: dt, BELOW: _t } = tt.Position;
  function xt(t2, e2) {
    return 0.5 * t2(e2 / 0.5);
  }
  function gt(t2, e2) {
    return e2 === dt ? t2 <= 5 : t2 >= 1;
  }
  function yt(t2, e2) {
    return gt(t2, e2) ? e2 === dt ? Math.ceil : Math.floor : Math.round;
  }
  const pt = (t2) => c(t2) || o(t2);
  class ut extends tt {
    static get CATEGORY() {
      return x.Articulation;
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0;
      const b2 = (t3, e3, i3) => xt(yt(e3, i3), p(t3.glyph.getMetrics().height) / 10 + 0.5);
      t2.forEach((t3) => {
        const a3 = t3.checkAttachedNote();
        i2 = Math.max(a3.getGlyphProps().getWidth(), i2);
        let n3 = 5;
        const s2 = a3.hasStem() ? a3.getStemDirection() : at.UP;
        let l2 = 0;
        if (d(a3)) {
          const t4 = a3.getStem();
          t4 && (l2 = Math.abs(t4.getHeight()) / V.STAVE_LINE_DISTANCE);
        }
        const o2 = a3.getStave();
        if (o2 && (n3 = o2.getNumLines()), t3.getPosition() === dt) {
          let i3 = a3.getLineNumber(true);
          s2 === at.UP && (i3 += l2);
          let o3 = b2(t3, e2.top_text_line, dt);
          const r2 = i3 + e2.top_text_line + 0.5;
          !t3.articulation.between_lines && r2 < n3 && (o3 += n3 - r2), t3.setTextLine(e2.top_text_line), e2.top_text_line += o3;
        } else if (t3.getPosition() === _t) {
          let i3 = Math.max(n3 - a3.getLineNumber(), 0);
          s2 === at.DOWN && (i3 += l2);
          let o3 = b2(t3, e2.text_line, _t);
          const r2 = i3 + e2.text_line + 0.5;
          !t3.articulation.between_lines && r2 < n3 && (o3 += n3 - r2), t3.setTextLine(e2.text_line), e2.text_line += o3;
        }
      });
      const a2 = t2.map((t3) => t3.getWidth()).reduce((t3, e3) => Math.max(e3, t3)), n2 = Math.min(Math.max(a2 - i2, 0), Math.max(a2 - (e2.left_shift + e2.right_shift), 0));
      return e2.left_shift += n2 / 2, e2.right_shift += n2 / 2, true;
    }
    static easyScoreHook({ articulations: t2 }, e2, i2) {
      if (!t2) return;
      const b2 = { staccato: "a.", tenuto: "a-", accent: "a>" };
      t2.split(",").map((t3) => t3.trim().split(".")).map(([t3, e3]) => {
        const a2 = { type: b2[t3] };
        return e3 && (a2.position = tt.PositionString[e3]), i2.getFactory().Articulation(a2);
      }).map((t3) => e2.addModifier(t3, 0));
    }
    constructor(t2) {
      super(), this.type = t2, this.position = dt, this.render_options = { font_scale: V.NOTATION_FONT_SCALE }, this.reset();
    }
    reset() {
      this.articulation = V.articulationCodes(this.type), this.articulation || (this.articulation = { code: this.type, between_lines: false }, this.type.endsWith("Above") && (this.position = dt), this.type.endsWith("Below") && (this.position = _t));
      const t2 = (this.position === dt ? this.articulation.aboveCode : this.articulation.belowCode) || this.articulation.code;
      this.glyph = new Z(null != t2 ? t2 : "", this.render_options.font_scale), p(this.glyph, "ArgumentError", `Articulation not found: ${this.type}`), this.setWidth(p(this.glyph.getMetrics().width));
    }
    setBetweenLines(t2 = true) {
      return this.articulation.between_lines = t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = this.checkIndex(), { position: b2, glyph: a2, text_line: n2 } = this, s2 = this.articulation.between_lines, l2 = e2.checkStave(), o2 = l2.getSpacingBetweenLines(), r2 = _(e2), { x: h2 } = e2.getModifierStartXY(b2, i2), m2 = !s2 || r2, c2 = function(t3, e3) {
        const i3 = e3 === dt && t3.getStemDirection() === at.UP || e3 === _t && t3.getStemDirection() === at.DOWN;
        return pt(t3) ? t3.hasStem() && i3 ? 0.5 : 1 : t3.hasStem() && i3 ? 1 : 0;
      }(e2, b2), d2 = V.currentMusicFont().lookupMetric(`articulation.${a2.getCode()}.padding`, 0);
      let x2 = { [dt]: () => {
        a2.setOrigin(0.5, 1);
        const t3 = function(t4, e3) {
          const i3 = t4.getStemDirection(), { topY: b3, baseY: a3 } = t4.getStemExtents();
          if (pt(t4)) return t4.hasStem() ? i3 === at.UP ? b3 : a3 : Math.min(...t4.getYs());
          if (_(t4)) return t4.hasStem() && i3 === at.UP ? b3 : t4.checkStave().getYForTopText(e3);
          throw new g("UnknownCategory", "Only can get the top and bottom ys of stavenotes and tabnotes");
        }(e2, n2) - (n2 + c2) * o2;
        return m2 ? Math.min(l2.getYForTopText(ut.INITIAL_OFFSET), t3) : t3;
      }, [_t]: () => {
        a2.setOrigin(0.5, 0);
        const t3 = function(t4, e3) {
          const i3 = t4.getStemDirection(), { topY: b3, baseY: a3 } = t4.getStemExtents();
          if (pt(t4)) return t4.hasStem() ? i3 === at.UP ? a3 : b3 : Math.max(...t4.getYs());
          if (_(t4)) return t4.hasStem() ? i3 === at.UP ? t4.checkStave().getYForBottomText(e3) : b3 : t4.checkStave().getYForBottomText(e3);
          throw new g("UnknownCategory", "Only can get the top and bottom ys of stavenotes and tabnotes");
        }(e2, n2) + (n2 + c2) * o2;
        return m2 ? Math.max(l2.getYForBottomText(ut.INITIAL_OFFSET), t3) : t3;
      } }[b2]();
      if (!r2) {
        const t3 = b2 === dt ? -1 : 1, n3 = e2.getKeyProps()[i2].line, l3 = (e2.getYs()[i2] - x2) / o2 + Number(n3), r3 = function(t4, e3, i3, b3) {
          const a3 = xt(yt(e3, i3), e3);
          if (t4 && gt(a3, i3) && a3 % 1 == 0) return a3 + 0.5 * -b3;
          return a3;
        }(s2, l3, b2, t3);
        gt(r3, b2) && a2.setOrigin(0.5, 0.5), x2 += Math.abs(r3 - l3) * o2 * t3 + d2 * t3;
      }
      !function(...t3) {
        ut.DEBUG && u("Vex.Flow.Articulation", t3);
      }(`Rendering articulation at (x: ${h2}, y: ${x2})`), a2.render(t2, h2, x2);
    }
  }
  ut.DEBUG = false, ut.INITIAL_OFFSET = -0.5;
  class ft {
    static get CATEGORY() {
      return x.RenderContext;
    }
    set font(t2) {
      this.setFont(t2);
    }
    get font() {
      return this.getFont();
    }
    setRawFont(t2) {
      return this.setFont(t2), this;
    }
  }
  function St(t2, e2, i2, b2 = "#F55") {
    t2.save(), t2.setFillStyle(b2), t2.beginPath(), t2.arc(e2, i2, 3, 0, 2 * Math.PI, false), t2.closePath(), t2.fill(), t2.restore();
  }
  class Tt extends R {
    static get CATEGORY() {
      return x.Tickable;
    }
    constructor() {
      super(), this._preFormatted = false, this._postFormatted = false, this.ticks = new z(0, 1), this.intrinsicTicks = 0, this.tickMultiplier = new z(1, 1), this.width = 0, this.x_shift = 0, this.modifiers = [], this.tupletStack = [], this.align_center = false, this.center_x_shift = 0, this.ignore_ticks = false, this.formatterMetrics = { freedom: { left: 0, right: 0 }, duration: "", iterations: 0, space: { used: 0, mean: 0, deviation: 0 } };
    }
    reset() {
      return this;
    }
    getTicks() {
      return this.ticks;
    }
    shouldIgnoreTicks() {
      return this.ignore_ticks;
    }
    setIgnoreTicks(t2) {
      return this.ignore_ticks = t2, this;
    }
    setWidth(t2) {
      this.width = t2;
    }
    getWidth() {
      if (!this._preFormatted) throw new g("UnformattedNote", "Can't call GetWidth on an unformatted note.");
      return this.width + (this.modifierContext ? this.modifierContext.getWidth() : 0);
    }
    setXShift(t2) {
      return this.x_shift = t2, this;
    }
    getXShift() {
      return this.x_shift;
    }
    getX() {
      return this.checkTickContext("Can't getX() without a TickContext.").getX() + this.x_shift;
    }
    getFormatterMetrics() {
      return this.formatterMetrics;
    }
    getCenterXShift() {
      return this.isCenterAligned() ? this.center_x_shift : 0;
    }
    setCenterXShift(t2) {
      return this.center_x_shift = t2, this;
    }
    isCenterAligned() {
      return this.align_center;
    }
    setCenterAlignment(t2) {
      return this.align_center = t2, this;
    }
    getVoice() {
      return p(this.voice, "NoVoice", "Tickable has no voice.");
    }
    setVoice(t2) {
      this.voice = t2;
    }
    getTuplet() {
      return this.tuplet;
    }
    getTupletStack() {
      return this.tupletStack;
    }
    resetTuplet(t2) {
      let e2, i2;
      if (t2) {
        const b2 = this.tupletStack.indexOf(t2);
        return -1 !== b2 && (this.tupletStack.splice(b2, 1), e2 = t2.getNoteCount(), i2 = t2.getNotesOccupied(), this.applyTickMultiplier(e2, i2)), this;
      }
      for (; this.tupletStack.length; ) e2 = (t2 = this.tupletStack.pop()).getNoteCount(), i2 = t2.getNotesOccupied(), this.applyTickMultiplier(e2, i2);
      return this;
    }
    setTuplet(t2) {
      if (t2) {
        this.tupletStack.push(t2);
        const e2 = t2.getNoteCount(), i2 = t2.getNotesOccupied();
        this.applyTickMultiplier(i2, e2);
      }
      return this.tuplet = t2, this;
    }
    addToModifierContext(t2) {
      this.modifierContext = t2;
      for (let t3 = 0; t3 < this.modifiers.length; ++t3) this.modifierContext.addMember(this.modifiers[t3]);
      return this.modifierContext.addMember(this), this._preFormatted = false, this;
    }
    addModifier(t2, e2 = 0) {
      return this.modifiers.push(t2), this._preFormatted = false, this;
    }
    getModifiers() {
      return this.modifiers;
    }
    setTickContext(t2) {
      this.tickContext = t2, this._preFormatted = false;
    }
    checkTickContext(t2 = "Tickable has no tick context.") {
      return p(this.tickContext, "NoTickContext", t2);
    }
    preFormat() {
      this._preFormatted || (this.width = 0, this.modifierContext && (this.modifierContext.preFormat(), this.width += this.modifierContext.getWidth()));
    }
    set preFormatted(t2) {
      this._preFormatted = t2;
    }
    get preFormatted() {
      return this._preFormatted;
    }
    postFormat() {
      return this._postFormatted || (this._postFormatted = true), this;
    }
    set postFormatted(t2) {
      this._postFormatted = t2;
    }
    get postFormatted() {
      return this._postFormatted;
    }
    getIntrinsicTicks() {
      return this.intrinsicTicks;
    }
    setIntrinsicTicks(t2) {
      this.intrinsicTicks = t2, this.ticks = this.tickMultiplier.clone().multiply(this.intrinsicTicks);
    }
    getTickMultiplier() {
      return this.tickMultiplier;
    }
    applyTickMultiplier(t2, e2) {
      this.tickMultiplier.multiply(t2, e2), this.ticks = this.tickMultiplier.clone().multiply(this.intrinsicTicks);
    }
    setDuration(t2) {
      const e2 = t2.numerator * (V.RESOLUTION / t2.denominator);
      this.ticks = this.tickMultiplier.clone().multiply(e2), this.intrinsicTicks = this.ticks.value();
    }
    getAbsoluteX() {
      return this.checkTickContext("Can't getAbsoluteX() without a TickContext.").getX();
    }
    setModifierContext(t2) {
      return this.modifierContext = t2, this;
    }
    getModifierContext() {
      return this.modifierContext;
    }
    checkModifierContext() {
      return p(this.modifierContext, "NoModifierContext", "No modifier context attached to this tickable.");
    }
  }
  class vt extends Tt {
    static get CATEGORY() {
      return x.Note;
    }
    static plotMetrics(t2, e2, i2) {
      const b2 = e2.getMetrics(), a2 = e2.getAbsoluteX() - b2.modLeftPx - b2.leftDisplacedHeadPx, n2 = e2.getAbsoluteX() - b2.leftDisplacedHeadPx, s2 = e2.getAbsoluteX(), l2 = e2.getAbsoluteX() + b2.notePx, o2 = e2.getAbsoluteX() + b2.notePx + b2.rightDisplacedHeadPx, r2 = e2.getAbsoluteX() + b2.notePx + b2.rightDisplacedHeadPx + b2.modRightPx, h2 = r2 + (e2.getFormatterMetrics().freedom.right || 0), m2 = r2 - a2;
      t2.save(), t2.setFont(F.SANS_SERIF, 8), t2.fillText(Math.round(m2) + "px", a2 + e2.getXShift(), i2);
      const c2 = i2 + 7;
      function d2(i3, b3, a3, n3 = c2) {
        t2.beginPath(), t2.setStrokeStyle(a3), t2.setFillStyle(a3), t2.setLineWidth(3), t2.moveTo(i3 + e2.getXShift(), n3), t2.lineTo(b3 + e2.getXShift(), n3), t2.stroke();
      }
      d2(a2, n2, "red"), d2(n2, s2, "#999"), d2(s2, l2, "green"), d2(l2, o2, "#999"), d2(o2, r2, "red"), d2(r2, h2, "#DD0"), d2(a2 - e2.getXShift(), a2, "#BBB"), St(t2, s2 + e2.getXShift(), c2, "blue");
      const _2 = e2.getFormatterMetrics();
      if (_2.iterations > 0) {
        const b3 = _2.space.deviation, a3 = b3 >= 0 ? "+" : "";
        t2.setFillStyle("red"), t2.fillText(a3 + Math.round(b3), s2 + e2.getXShift(), i2 - 10);
      }
      t2.restore();
    }
    static parseDuration(t2) {
      if (!t2) return;
      const e2 = /(\d*\/?\d+|[a-z])(d*)([nrhms]|$)/.exec(t2);
      if (!e2) return;
      return { duration: e2[1], dots: e2[2].length, type: e2[3] || "n" };
    }
    static parseNoteStruct(t2) {
      const e2 = vt.parseDuration(t2.duration);
      if (!e2) return;
      let i2 = t2.type;
      if (i2 && !V.validTypes[i2]) return;
      const b2 = [];
      i2 || (i2 = e2.type || "n", void 0 !== t2.keys && t2.keys.forEach((t3, e3) => {
        const a3 = t3.split("/");
        b2[e3] = a3 && 3 === a3.length ? a3[2] : i2;
      }));
      let a2 = V.durationToTicks(e2.duration);
      if (!a2) return;
      const n2 = t2.dots ? t2.dots : e2.dots;
      if ("number" != typeof n2) return;
      let s2 = a2;
      for (let t3 = 0; t3 < n2; t3++) {
        if (s2 <= 1) return;
        s2 /= 2, a2 += s2;
      }
      return { duration: e2.duration, type: i2, customTypes: b2, dots: n2, ticks: a2 };
    }
    constructor(t2) {
      if (super(), !t2) throw new g("BadArguments", "Note must have valid initialization data to identify duration and type.");
      const e2 = vt.parseNoteStruct(t2);
      if (!e2) throw new g("BadArguments", `Invalid note initialization object: ${JSON.stringify(t2)}`);
      this.keys = t2.keys || [], this.keyProps = [], this.duration = e2.duration, this.noteType = e2.type, this.customTypes = e2.customTypes, t2.duration_override ? this.setDuration(t2.duration_override) : this.setIntrinsicTicks(e2.ticks), this.modifiers = [], this.glyphProps = V.getGlyphProps(this.duration, this.noteType), this.customGlyphs = this.customTypes.map((t3) => V.getGlyphProps(this.duration, t3)), this.playNote = void 0, this.ignore_ticks = false, this.width = 0, this.leftDisplacedHeadPx = 0, this.rightDisplacedHeadPx = 0, this.x_shift = 0, this.ys = [], t2.align_center && this.setCenterAlignment(t2.align_center), this.render_options = { annotation_spacing: 5, glyph_font_scale: 1, stroke_px: 1, scale: 1, font: "", y_shift: 0 };
    }
    getPlayNote() {
      return this.playNote;
    }
    setPlayNote(t2) {
      return this.playNote = t2, this;
    }
    isRest() {
      return false;
    }
    addStroke(t2, e2) {
      return e2.setNote(this), e2.setIndex(t2), this.modifiers.push(e2), this.preFormatted = false, this;
    }
    getStave() {
      return this.stave;
    }
    checkStave() {
      return p(this.stave, "NoStave", "No stave attached to instance.");
    }
    setStave(t2) {
      return this.stave = t2, this.setYs([t2.getYForLine(0)]), this.setContext(this.stave.getContext()), this;
    }
    getLeftDisplacedHeadPx() {
      return this.leftDisplacedHeadPx;
    }
    getRightDisplacedHeadPx() {
      return this.rightDisplacedHeadPx;
    }
    setLeftDisplacedHeadPx(t2) {
      return this.leftDisplacedHeadPx = t2, this;
    }
    setRightDisplacedHeadPx(t2) {
      return this.rightDisplacedHeadPx = t2, this;
    }
    shouldIgnoreTicks() {
      return this.ignore_ticks;
    }
    getLineNumber(t2) {
      return 0;
    }
    getLineForRest() {
      return 0;
    }
    getGlyph() {
      return this.glyphProps;
    }
    getGlyphProps() {
      return this.glyphProps;
    }
    getGlyphWidth() {
      return this.glyphProps.getWidth(this.render_options.glyph_font_scale);
    }
    setYs(t2) {
      return this.ys = t2, this;
    }
    getYs() {
      if (0 === this.ys.length) throw new g("NoYValues", "No Y-values calculated for this note.");
      return this.ys;
    }
    getYForTopText(t2) {
      return this.checkStave().getYForTopText(t2);
    }
    getVoice() {
      if (!this.voice) throw new g("NoVoice", "Note has no voice.");
      return this.voice;
    }
    setVoice(t2) {
      return this.voice = t2, this.preFormatted = false, this;
    }
    getTickContext() {
      return this.checkTickContext();
    }
    setTickContext(t2) {
      return this.tickContext = t2, this.preFormatted = false, this;
    }
    getDuration() {
      return this.duration;
    }
    isDotted() {
      return this.getModifiersByType(x.Dot).length > 0;
    }
    hasStem() {
      return false;
    }
    getNoteType() {
      return this.noteType;
    }
    getBeam() {
      return this.beam;
    }
    checkBeam() {
      return p(this.beam, "NoBeam", "No beam attached to instance");
    }
    hasBeam() {
      return null != this.beam;
    }
    setBeam(t2) {
      return this.beam = t2, this;
    }
    addModifier(t2, e2 = 0) {
      const i2 = "Note.addModifier(modifier: Modifier, index: number=0)";
      if ("string" == typeof e2 && (e2 = parseInt(e2), console.warn(i2 + " expected a number for `index`, but received a string.")), "object" != typeof t2 || "number" != typeof e2) throw new g("WrongParams", "Incorrect call signature. Use " + i2 + " instead.");
      return t2.setNote(this), t2.setIndex(e2), super.addModifier(t2), this;
    }
    getModifiersByType(t2) {
      return this.modifiers.filter((e2) => e2.getCategory() === t2);
    }
    getModifierStartXY(t2, e2, i2) {
      if (!this.preFormatted) throw new g("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
      return { x: this.getAbsoluteX(), y: this.ys[0] };
    }
    getRightParenthesisPx(t2) {
      return this.getKeyProps()[t2].displaced ? this.getRightDisplacedHeadPx() : 0;
    }
    getLeftParenthesisPx(t2) {
      return this.getKeyProps()[t2].displaced ? this.getLeftDisplacedHeadPx() - this.x_shift : -this.x_shift;
    }
    getFirstDotPx() {
      let t2 = this.getRightDisplacedHeadPx();
      return 0 !== this.checkModifierContext().getMembers("Parenthesis").length && (t2 += V.currentMusicFont().lookupMetric("parenthesis.default.width")), t2;
    }
    getMetrics() {
      if (!this.preFormatted) throw new g("UnformattedNote", "Can't call getMetrics on an unformatted note.");
      const t2 = this.modifierContext ? this.modifierContext.getState().left_shift : 0, e2 = this.modifierContext ? this.modifierContext.getState().right_shift : 0, i2 = this.getWidth();
      return { width: i2, glyphWidth: this.getGlyphWidth(), notePx: i2 - t2 - e2 - this.leftDisplacedHeadPx - this.rightDisplacedHeadPx, modLeftPx: t2, modRightPx: e2, leftDisplacedHeadPx: this.leftDisplacedHeadPx, rightDisplacedHeadPx: this.rightDisplacedHeadPx, glyphPx: 0 };
    }
    getAbsoluteX() {
      let t2 = this.checkTickContext("Can't getAbsoluteX() without a TickContext.").getX();
      return this.stave && (t2 += this.stave.getNoteStartX() + V.currentMusicFont().lookupMetric("stave.padding")), this.isCenterAligned() && (t2 += this.getCenterXShift()), t2;
    }
    static getPoint(t2) {
      return "default" == t2 ? V.NOTATION_FONT_SCALE : V.NOTATION_FONT_SCALE / 5 * 3;
    }
    getStemDirection() {
      throw new g("NoStem", "No stem attached to this note.");
    }
    getStemExtents() {
      throw new g("NoStem", "No stem attached to this note.");
    }
    getTieRightX() {
      let t2 = this.getAbsoluteX();
      return t2 += this.glyphProps.getWidth() / 2, t2 += -this.width / 2 + this.width + 2, t2;
    }
    getTieLeftX() {
      let t2 = this.getAbsoluteX();
      return t2 += this.glyphProps.getWidth() / 2, t2 -= this.width / 2 + 2, t2;
    }
    getKeys() {
      return this.keys;
    }
    getKeyProps() {
      return this.keyProps;
    }
  }
  var wt, zt, Bt, Dt, Ct, Et;
  !function(t2) {
    t2[t2.CENTER = 0] = "CENTER", t2[t2.LEFT = 1] = "LEFT", t2[t2.RIGHT = 2] = "RIGHT", t2[t2.ABOVE = 3] = "ABOVE", t2[t2.BELOW = 4] = "BELOW", t2[t2.BEGIN = 5] = "BEGIN", t2[t2.END = 6] = "END";
  }(wt || (wt = {}));
  class Pt extends R {
    static get CATEGORY() {
      return x.StaveModifier;
    }
    static get Position() {
      return wt;
    }
    constructor() {
      super(), this.width = 0, this.x = 0, this.padding = 10, this.position = wt.ABOVE;
    }
    getPosition() {
      return this.position;
    }
    setPosition(t2) {
      return this.position = t2, this;
    }
    getStave() {
      return this.stave;
    }
    checkStave() {
      return p(this.stave, "NoStave", "No stave attached to instance.");
    }
    setStave(t2) {
      return this.stave = t2, this;
    }
    getWidth() {
      return this.width;
    }
    setWidth(t2) {
      return this.width = t2, this;
    }
    getX() {
      return this.x;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    placeGlyphOnLine(t2, e2, i2, b2 = 0) {
      t2.setYShift(e2.getYForLine(null != i2 ? i2 : 0) - e2.getYForGlyphs() + b2);
    }
    getPadding(t2) {
      return void 0 !== t2 && t2 < 2 ? 0 : this.padding;
    }
    setPadding(t2) {
      return this.padding = t2, this;
    }
    setLayoutMetrics(t2) {
      return this.layoutMetrics = t2, this;
    }
    getLayoutMetrics() {
      return this.layoutMetrics;
    }
    draw(...t2) {
    }
  }
  !function(t2) {
    t2[t2.SINGLE = 1] = "SINGLE", t2[t2.DOUBLE = 2] = "DOUBLE", t2[t2.END = 3] = "END", t2[t2.REPEAT_BEGIN = 4] = "REPEAT_BEGIN", t2[t2.REPEAT_END = 5] = "REPEAT_END", t2[t2.REPEAT_BOTH = 6] = "REPEAT_BOTH", t2[t2.NONE = 7] = "NONE";
  }(zt || (zt = {}));
  class kt extends Pt {
    static get CATEGORY() {
      return x.Barline;
    }
    static get type() {
      return zt;
    }
    static get typeString() {
      return { single: zt.SINGLE, double: zt.DOUBLE, end: zt.END, repeatBegin: zt.REPEAT_BEGIN, repeatEnd: zt.REPEAT_END, repeatBoth: zt.REPEAT_BOTH, none: zt.NONE };
    }
    constructor(t2) {
      super(), this.thickness = V.STAVE_LINE_THICKNESS;
      const e2 = zt;
      this.widths = {}, this.widths[e2.SINGLE] = 5, this.widths[e2.DOUBLE] = 5, this.widths[e2.END] = 5, this.widths[e2.REPEAT_BEGIN] = 5, this.widths[e2.REPEAT_END] = 5, this.widths[e2.REPEAT_BOTH] = 5, this.widths[e2.NONE] = 5, this.paddings = {}, this.paddings[e2.SINGLE] = 0, this.paddings[e2.DOUBLE] = 0, this.paddings[e2.END] = 0, this.paddings[e2.REPEAT_BEGIN] = 15, this.paddings[e2.REPEAT_END] = 15, this.paddings[e2.REPEAT_BOTH] = 15, this.paddings[e2.NONE] = 0, this.layoutMetricsMap = {}, this.layoutMetricsMap[e2.SINGLE] = { xMin: 0, xMax: 1, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.DOUBLE] = { xMin: -3, xMax: 1, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.END] = { xMin: -5, xMax: 1, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.REPEAT_END] = { xMin: -10, xMax: 1, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.REPEAT_BEGIN] = { xMin: -2, xMax: 10, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.REPEAT_BOTH] = { xMin: -10, xMax: 10, paddingLeft: 5, paddingRight: 5 }, this.layoutMetricsMap[e2.NONE] = { xMin: 0, xMax: 0, paddingLeft: 5, paddingRight: 5 }, this.setPosition(wt.BEGIN), this.setType(t2);
    }
    getType() {
      return this.type;
    }
    setType(t2) {
      return this.type = "string" == typeof t2 ? kt.typeString[t2] : t2, this.setWidth(this.widths[this.type]), this.setPadding(this.paddings[this.type]), this.setLayoutMetrics(this.layoutMetricsMap[this.type]), this;
    }
    draw(t2) {
      const e2 = t2.checkContext();
      switch (this.setRendered(), this.applyStyle(e2), e2.openGroup("stavebarline", this.getAttribute("id")), this.type) {
        case zt.SINGLE:
          this.drawVerticalBar(t2, this.x, false);
          break;
        case zt.DOUBLE:
          this.drawVerticalBar(t2, this.x, true);
          break;
        case zt.END:
          this.drawVerticalEndBar(t2, this.x);
          break;
        case zt.REPEAT_BEGIN:
          this.drawRepeatBar(t2, this.x, true), t2.getX() !== this.x && this.drawVerticalBar(t2, t2.getX());
          break;
        case zt.REPEAT_END:
          this.drawRepeatBar(t2, this.x, false);
          break;
        case zt.REPEAT_BOTH:
          this.drawRepeatBar(t2, this.x, false), this.drawRepeatBar(t2, this.x, true);
      }
      e2.closeGroup(), this.restoreStyle(e2);
    }
    drawVerticalBar(t2, e2, i2) {
      const b2 = t2.checkContext(), a2 = t2.getTopLineTopY(), n2 = t2.getBottomLineBottomY();
      i2 && b2.fillRect(e2 - 3, a2, 1, n2 - a2), b2.fillRect(e2, a2, 1, n2 - a2);
    }
    drawVerticalEndBar(t2, e2) {
      const i2 = t2.checkContext(), b2 = t2.getTopLineTopY(), a2 = t2.getBottomLineBottomY();
      i2.fillRect(e2 - 5, b2, 1, a2 - b2), i2.fillRect(e2 - 2, b2, 3, a2 - b2);
    }
    drawRepeatBar(t2, e2, i2) {
      const b2 = t2.checkContext(), a2 = t2.getTopLineTopY(), n2 = t2.getBottomLineBottomY();
      let s2 = 3;
      i2 || (s2 = -5), b2.fillRect(e2 + s2, a2, 1, n2 - a2), b2.fillRect(e2 - 2, a2, 3, n2 - a2);
      i2 ? s2 += 4 : s2 -= 4;
      const l2 = e2 + s2 + 1;
      let o2 = (t2.getNumLines() - 1) * t2.getSpacingBetweenLines();
      o2 = o2 / 2 - t2.getSpacingBetweenLines() / 2;
      let r2 = a2 + o2 + 1;
      b2.beginPath(), b2.arc(l2, r2, 2, 0, 2 * Math.PI, false), b2.fill(), r2 += t2.getSpacingBetweenLines(), b2.beginPath(), b2.arc(l2, r2, 2, 0, 2 * Math.PI, false), b2.fill();
    }
  }
  class At extends vt {
    static get CATEGORY() {
      return x.BarNote;
    }
    constructor(t2 = zt.SINGLE) {
      super({ duration: "b" }), this.metrics = { widths: {} };
      const e2 = zt;
      this.metrics.widths = { [e2.SINGLE]: 8, [e2.DOUBLE]: 12, [e2.END]: 15, [e2.REPEAT_BEGIN]: 14, [e2.REPEAT_END]: 14, [e2.REPEAT_BOTH]: 18, [e2.NONE]: 0 }, this.ignore_ticks = true, this.setType(t2), this.barline = new kt(t2);
    }
    getType() {
      return this.type;
    }
    setType(t2) {
      return this.type = "string" == typeof t2 ? kt.typeString[t2] : t2, this.setWidth(this.metrics.widths[this.type]), this;
    }
    addToModifierContext(t2) {
      return this;
    }
    preFormat() {
      return this.preFormatted = true, this;
    }
    draw() {
      const t2 = this.checkContext();
      !function(...t3) {
        At.DEBUG && u("Vex.Flow.BarNote", t3);
      }("Rendering bar line at: ", this.getAbsoluteX()), this.applyStyle(t2), t2.openGroup("barnote", this.getAttribute("id")), this.barline.setType(this.type), this.barline.setX(this.getAbsoluteX()), this.barline.draw(this.checkStave()), t2.closeGroup(), this.restoreStyle(t2), this.setRendered();
    }
  }
  At.DEBUG = false;
  class Nt extends tt {
    static get CATEGORY() {
      return x.Bend;
    }
    static get UP() {
      return 0;
    }
    static get DOWN() {
      return 1;
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0;
      for (let b2 = 0; b2 < t2.length; ++b2) {
        const a2 = t2[b2], n2 = a2.checkAttachedNote();
        if (_(n2)) {
          const t3 = n2.leastString() - 1;
          e2.top_text_line < t3 && (e2.top_text_line = t3);
        }
        a2.setXShift(i2), i2 = a2.getWidth(), a2.setTextLine(e2.top_text_line);
      }
      return e2.right_shift += i2, e2.top_text_line += 1, true;
    }
    constructor(t2, e2 = false, i2) {
      super(), this.text = t2, this.x_shift = 0, this.release = e2, this.tap = "", this.resetFont(), this.render_options = { line_width: 1.5, line_style: "#777777", bend_width: 8, release_width: 8 }, i2 ? this.phrase = i2 : (this.phrase = [{ type: Nt.UP, text: this.text }], this.release && this.phrase.push({ type: Nt.DOWN, text: "" })), this.updateWidth();
    }
    setXShift(t2) {
      return this.x_shift = t2, this.updateWidth(), this;
    }
    setTap(t2) {
      return this.tap = t2, this;
    }
    getText() {
      return this.text;
    }
    getTextHeight() {
      return rt.create(this.textFont).maxHeight;
    }
    updateWidth() {
      const t2 = rt.create(this.textFont);
      let e2 = 0;
      for (let b2 = 0; b2 < this.phrase.length; ++b2) {
        const a2 = this.phrase[b2];
        if (void 0 !== a2.width) e2 += a2.width;
        else {
          const b3 = a2.type === Nt.UP ? this.render_options.bend_width : this.render_options.release_width;
          a2.width = Math.max(b3, (i2 = a2.text, t2.getWidthForTextInPx(i2))) + 3, a2.draw_width = a2.width / 2, e2 += a2.width;
        }
      }
      var i2;
      return this.setWidth(e2 + this.x_shift), this;
    }
    draw() {
      var t2;
      const e2 = this.checkContext(), i2 = this.checkAttachedNote();
      this.setRendered();
      const b2 = i2.getModifierStartXY(tt.Position.RIGHT, this.index);
      b2.x += 3, b2.y += 0.5;
      const a2 = this.x_shift, n2 = i2.checkStave().getSpacingBetweenLines(), s2 = i2.getYs().reduce((t3, e3) => t3 < e3 ? t3 : e3), l2 = b2.y - ((this.text_line + 1) * n2 + b2.y - s2) + 3, o2 = b2.y - ((this.text_line + 1) * n2 + b2.y - s2) - 1, r2 = (t3, i3, b3, a3) => {
        const n3 = t3 + b3, s3 = i3;
        e2.save(), e2.beginPath(), e2.setLineWidth(this.render_options.line_width), e2.setStrokeStyle(this.render_options.line_style), e2.setFillStyle(this.render_options.line_style), e2.moveTo(t3, i3), e2.quadraticCurveTo(n3, s3, t3 + b3, a3), e2.stroke(), e2.restore();
      }, h2 = (t3, i3, b3, a3) => {
        e2.save(), e2.beginPath(), e2.setLineWidth(this.render_options.line_width), e2.setStrokeStyle(this.render_options.line_style), e2.setFillStyle(this.render_options.line_style), e2.moveTo(t3, a3), e2.quadraticCurveTo(t3 + b3, a3, t3 + b3, i3), e2.stroke(), e2.restore();
      }, m2 = (t3, i3, b3) => {
        const a3 = i3 + 4 * b3;
        e2.beginPath(), e2.moveTo(t3, i3), e2.lineTo(t3 - 4, a3), e2.lineTo(t3 + 4, a3), e2.closePath(), e2.fill();
      }, c2 = (t3, i3) => {
        e2.save(), e2.setFont(this.textFont);
        const b3 = t3 - e2.measureText(i3).width / 2;
        e2.fillText(i3, b3, o2), e2.restore();
      };
      let d2, _2 = 0, x2 = 0;
      if (null === (t2 = this.tap) || void 0 === t2 ? void 0 : t2.length) {
        c2(i2.getModifierStartXY(tt.Position.CENTER, this.index).x, this.tap);
      }
      for (let t3 = 0; t3 < this.phrase.length; ++t3) {
        const e3 = this.phrase[t3];
        e3.draw_width || (e3.draw_width = 0), 0 === t3 && (e3.draw_width += a2), x2 = e3.draw_width + _2 - (1 === t3 ? a2 : 0), e3.type === Nt.UP && (d2 && d2.type === Nt.UP && m2(b2.x, l2, 1), r2(b2.x, b2.y, x2, l2)), e3.type === Nt.DOWN && (d2 && d2.type === Nt.UP && h2(b2.x, b2.y, x2, l2), d2 && d2.type === Nt.DOWN && (m2(b2.x, b2.y, -1), h2(b2.x, b2.y, x2, l2)), d2 || (x2 = e3.draw_width, h2(b2.x, b2.y, x2, l2))), c2(b2.x + x2, e3.text), d2 = e3, _2 = e3.draw_width, d2.x = b2.x, b2.x += x2;
      }
      if (!d2 || null == d2.x) throw new g("NoLastBendForBend", "Internal error.");
      d2.type === Nt.UP ? m2(d2.x + x2, l2, 1) : d2.type === Nt.DOWN && m2(d2.x + x2, b2.y, -1);
    }
  }
  function Ft(...t2) {
    Mt.DEBUG && u("Vex.Flow.ChordSymbol", t2);
  }
  Nt.TEXT_FONT = Object.assign({}, R.TEXT_FONT), function(t2) {
    t2[t2.LEFT = 1] = "LEFT", t2[t2.CENTER = 2] = "CENTER", t2[t2.RIGHT = 3] = "RIGHT", t2[t2.CENTER_STEM = 4] = "CENTER_STEM";
  }(Bt || (Bt = {})), function(t2) {
    t2[t2.TOP = 1] = "TOP", t2[t2.BOTTOM = 2] = "BOTTOM";
  }(Dt || (Dt = {})), function(t2) {
    t2[t2.GLYPH = 1] = "GLYPH", t2[t2.TEXT = 2] = "TEXT", t2[t2.LINE = 3] = "LINE";
  }(Ct || (Ct = {})), function(t2) {
    t2[t2.NONE = 1] = "NONE", t2[t2.SUBSCRIPT = 2] = "SUBSCRIPT", t2[t2.SUPERSCRIPT = 3] = "SUPERSCRIPT";
  }(Et || (Et = {}));
  class Mt extends tt {
    static get CATEGORY() {
      return x.ChordSymbol;
    }
    static get superSubRatio() {
      return Mt.metrics.global.superSubRatio;
    }
    static set NO_TEXT_FORMAT(t2) {
      Mt.noFormat = t2;
    }
    static get NO_TEXT_FORMAT() {
      return Mt.noFormat;
    }
    static getMetricForGlyph(t2) {
      if (Mt.metrics.glyphs[t2]) return Mt.metrics.glyphs[t2];
    }
    static get engravingFontResolution() {
      return V.currentMusicFont().getResolution();
    }
    static get spacingBetweenBlocks() {
      return Mt.metrics.global.spacing / Mt.engravingFontResolution;
    }
    static getWidthForGlyph(t2) {
      const e2 = Mt.getMetricForGlyph(t2.code);
      return e2 ? e2.advanceWidth / Mt.engravingFontResolution : 0.65;
    }
    static getYShiftForGlyph(t2) {
      const e2 = Mt.getMetricForGlyph(t2.code);
      return e2 ? e2.yOffset / Mt.engravingFontResolution : 0;
    }
    static getXShiftForGlyph(t2) {
      const e2 = Mt.getMetricForGlyph(t2.code);
      return e2 ? -1 * e2.leftSideBearing / Mt.engravingFontResolution : 0;
    }
    static get superscriptOffset() {
      return Mt.metrics.global.superscriptOffset / Mt.engravingFontResolution;
    }
    static get subscriptOffset() {
      return Mt.metrics.global.subscriptOffset / Mt.engravingFontResolution;
    }
    static get kerningOffset() {
      return Mt.metrics.global.kerningOffset / Mt.engravingFontResolution;
    }
    static get metrics() {
      const t2 = V.currentMusicFont().getMetrics().chordSymbol;
      if (!t2) throw new g("BadMetrics", "chordSymbol missing");
      return t2;
    }
    static get lowerKerningText() {
      return Mt.metrics.global.lowerKerningText;
    }
    static get upperKerningText() {
      return Mt.metrics.global.upperKerningText;
    }
    static isSuperscript(t2) {
      return void 0 !== t2.symbolModifier && t2.symbolModifier === Et.SUPERSCRIPT;
    }
    static isSubscript(t2) {
      return void 0 !== t2.symbolModifier && t2.symbolModifier === Et.SUBSCRIPT;
    }
    static get minPadding() {
      return V.currentMusicFont().lookupMetric("noteHead.minPadding");
    }
    static format(t2, e2) {
      var i2;
      if (!t2 || 0 === t2.length) return false;
      let b2 = 0, a2 = 0, n2 = 0, s2 = 0, l2 = 0, o2 = 0;
      for (const r3 of t2) {
        const t3 = F.convertSizeToPointValue(null === (i2 = r3.textFont) || void 0 === i2 ? void 0 : i2.size), h3 = F.scaleSize(t3, 0.05), m2 = 2 * h3, c2 = r3.checkAttachedNote();
        let _2 = 0, x2 = 1, g2 = false;
        for (let t4 = 0; t4 < r3.symbolBlocks.length; ++t4) {
          const e3 = r3.symbolBlocks[t4], i3 = Mt.isSuperscript(e3), n3 = Mt.isSubscript(e3), s3 = i3 || n3 ? Mt.superSubRatio : 1, l3 = e3.symbolType === Ct.GLYPH ? m2 * s3 : h3 * s3;
          (i3 || n3) && (x2 = 2);
          const o3 = r3.textFormatter.fontSizeInPixels, c3 = o3 * s3;
          if (e3.symbolType === Ct.GLYPH && void 0 !== e3.glyph ? (e3.width = Mt.getWidthForGlyph(e3.glyph) * c3, e3.yShift += Mt.getYShiftForGlyph(e3.glyph) * c3, e3.xShift += Mt.getXShiftForGlyph(e3.glyph) * c3, e3.glyph.scale = e3.glyph.scale * l3) : e3.symbolType === Ct.TEXT && (e3.width = e3.width * c3, e3.yShift += r3.getYOffsetForText(e3.text) * l3), e3.symbolType === Ct.GLYPH && void 0 !== e3.glyph && e3.glyph.code === Mt.glyphs.over.code && (x2 = 2), e3.width += Mt.spacingBetweenBlocks * o3 * s3, i3 && t4 > 0) {
            const e4 = r3.symbolBlocks[t4 - 1];
            Mt.isSuperscript(e4) || (a2 = b2);
          }
          n3 && a2 > 0 && (g2 = true, e3.xShift = e3.xShift + (a2 - b2), b2 = a2, a2 = 0, r3.setEnableKerning(false)), i3 || n3 || (a2 = 0), e3.vAlign = g2, b2 += e3.width, _2 = b2;
        }
        if (r3.updateKerningAdjustments(), r3.updateOverBarAdjustments(), r3.getVertical() === Dt.TOP ? (r3.setTextLine(e2.top_text_line), e2.top_text_line += x2) : (r3.setTextLine(e2.text_line + 1), e2.text_line += x2 + 1), r3.getReportWidth() && d(c2)) {
          const t4 = c2.getGlyphProps().getWidth();
          r3.getHorizontal() === Bt.LEFT ? (l2 = Math.max(t4, l2), n2 = Math.max(n2, _2) + Mt.minPadding) : r3.getHorizontal() === Bt.RIGHT ? (o2 = Math.max(t4, o2), s2 = Math.max(s2, _2)) : (n2 = Math.max(n2, _2 / 2) + Mt.minPadding, s2 = Math.max(s2, _2 / 2), l2 = Math.max(t4 / 2, l2), o2 = Math.max(t4 / 2, o2));
        }
        b2 = 0;
      }
      const r2 = Math.min(Math.max(s2 - o2, 0), Math.max(s2 - e2.right_shift, 0)), h2 = Math.min(Math.max(n2 - l2, 0), Math.max(n2 - e2.left_shift, 0));
      return e2.left_shift += h2, e2.right_shift += r2, true;
    }
    constructor() {
      super(), this.symbolBlocks = [], this.horizontal = Bt.LEFT, this.vertical = Dt.TOP, this.useKerning = true, this.reportWidth = true, this.resetFont();
    }
    static get TEXT_FONT() {
      let t2 = "Roboto Slab, Times, serif";
      return "Petaluma" === V.currentMusicFont().getName() && (t2 = "PetalumaScript, Arial, sans-serif"), { family: t2, size: 12, weight: E.NORMAL, style: P.NORMAL };
    }
    get superscriptOffset() {
      return Mt.superscriptOffset * this.textFormatter.fontSizeInPixels;
    }
    get subscriptOffset() {
      return Mt.subscriptOffset * this.textFormatter.fontSizeInPixels;
    }
    setReportWidth(t2) {
      return this.reportWidth = t2, this;
    }
    getReportWidth() {
      return this.reportWidth;
    }
    updateOverBarAdjustments() {
      const t2 = this.symbolBlocks.findIndex(({ symbolType: t3, glyph: e3 }) => t3 === Ct.GLYPH && void 0 !== e3 && "csymDiagonalArrangementSlash" === e3.code);
      if (t2 < 0) return;
      const e2 = this.symbolBlocks[t2].width / 4, i2 = 0.25 * this.textFormatter.fontSizeInPixels;
      let b2 = 0;
      for (; b2 < t2; ++b2) {
        const t3 = this.symbolBlocks[b2];
        t3.xShift = t3.xShift + e2, t3.yShift = t3.yShift - i2;
      }
      for (b2 = t2 + 1; b2 < this.symbolBlocks.length; ++b2) {
        const t3 = this.symbolBlocks[b2];
        t3.xShift = t3.xShift - e2, t3.yShift = t3.yShift + i2;
      }
    }
    updateKerningAdjustments() {
      let t2 = 0;
      for (let e2 = 0; e2 < this.symbolBlocks.length; ++e2) {
        const i2 = this.symbolBlocks[e2];
        t2 += this.getKerningAdjustment(e2), i2.xShift += t2;
      }
    }
    getKerningAdjustment(t2) {
      if (!this.useKerning) return 0;
      const e2 = this.symbolBlocks[t2], i2 = t2 > 0 ? this.symbolBlocks[t2 - 1] : void 0;
      let b2 = 0;
      e2.symbolType === Ct.GLYPH && void 0 !== e2.glyph && e2.glyph.code === Mt.glyphs.over.code && (b2 += e2.glyph.metrics.x_shift), void 0 !== i2 && i2.symbolType === Ct.GLYPH && void 0 !== i2.glyph && i2.glyph.code === Mt.glyphs.over.code && (b2 += i2.glyph.metrics.x_shift);
      let a2 = false, n2 = false;
      void 0 !== i2 && i2.symbolType === Ct.TEXT && (a2 = Mt.upperKerningText.some((t3) => t3 === i2.text[i2.text.length - 1]), n2 = Mt.lowerKerningText.some((t3) => t3 === i2.text[i2.text.length - 1]));
      const s2 = Mt.kerningOffset * this.textFormatter.fontSizeInPixels;
      return a2 && e2.symbolModifier === Et.SUPERSCRIPT && (b2 += s2), n2 && e2.symbolType === Ct.TEXT && (e2.text[0] >= "a" && e2.text[0] <= "z" && (b2 += s2 / 2), Mt.upperKerningText.some((t3) => t3 === (null == i2 ? void 0 : i2.text[i2.text.length - 1])) && (b2 += s2 / 2)), b2;
    }
    getSymbolBlock(t2 = {}) {
      var e2, i2, b2;
      const a2 = null !== (e2 = t2.symbolType) && void 0 !== e2 ? e2 : Ct.TEXT, n2 = { text: null !== (i2 = t2.text) && void 0 !== i2 ? i2 : "", symbolType: a2, symbolModifier: null !== (b2 = t2.symbolModifier) && void 0 !== b2 ? b2 : Et.NONE, xShift: 0, yShift: 0, vAlign: false, width: 0 };
      if (a2 === Ct.GLYPH && "string" == typeof t2.glyph) {
        const e3 = Mt.glyphs[t2.glyph], i3 = 20;
        n2.glyph = new Z(e3.code, i3, { category: "chordSymbol" });
      } else a2 === Ct.TEXT ? n2.width = this.textFormatter.getWidthForTextInEm(n2.text) : a2 === Ct.LINE && (n2.width = t2.width);
      return n2;
    }
    addSymbolBlock(t2) {
      return this.symbolBlocks.push(this.getSymbolBlock(t2)), this;
    }
    addText(t2, e2 = {}) {
      const i2 = Ct.TEXT;
      return this.addSymbolBlock(Object.assign(Object.assign({}, e2), { text: t2, symbolType: i2 }));
    }
    addTextSuperscript(t2) {
      const e2 = Ct.TEXT, i2 = Et.SUPERSCRIPT;
      return this.addSymbolBlock({ text: t2, symbolType: e2, symbolModifier: i2 });
    }
    addTextSubscript(t2) {
      const e2 = Ct.TEXT, i2 = Et.SUBSCRIPT;
      return this.addSymbolBlock({ text: t2, symbolType: e2, symbolModifier: i2 });
    }
    addGlyphSuperscript(t2) {
      const e2 = Ct.GLYPH, i2 = Et.SUPERSCRIPT;
      return this.addSymbolBlock({ glyph: t2, symbolType: e2, symbolModifier: i2 });
    }
    addGlyph(t2, e2 = {}) {
      const i2 = Ct.GLYPH;
      return this.addSymbolBlock(Object.assign(Object.assign({}, e2), { glyph: t2, symbolType: i2 }));
    }
    addGlyphOrText(t2, e2 = {}) {
      let i2 = "";
      for (let b2 = 0; b2 < t2.length; ++b2) {
        const a2 = t2[b2];
        Mt.glyphs[a2] ? (i2.length > 0 && (this.addText(i2, e2), i2 = ""), this.addGlyph(a2, e2)) : i2 += a2;
      }
      return i2.length > 0 && this.addText(i2, e2), this;
    }
    addLine(t2, e2 = {}) {
      const i2 = Ct.LINE;
      return this.addSymbolBlock(Object.assign(Object.assign({}, e2), { symbolType: i2, width: t2 }));
    }
    setFont(t2, e2, i2, b2) {
      return super.setFont(t2, e2, i2, b2), this.textFormatter = rt.create(this.textFont), this;
    }
    setEnableKerning(t2) {
      return this.useKerning = t2, this;
    }
    setVertical(t2) {
      return this.vertical = "string" == typeof t2 ? Mt.VerticalJustifyString[t2] : t2, this;
    }
    getVertical() {
      return this.vertical;
    }
    setHorizontal(t2) {
      return this.horizontal = "string" == typeof t2 ? Mt.HorizontalJustifyString[t2] : t2, this;
    }
    getHorizontal() {
      return this.horizontal;
    }
    getWidth() {
      let t2 = 0;
      return this.symbolBlocks.forEach((e2) => {
        t2 += e2.vAlign ? 0 : e2.width;
      }), t2;
    }
    getYOffsetForText(t2) {
      var e2;
      let i2 = 0, b2 = 0;
      for (b2 = 0; b2 < t2.length; ++b2) {
        const a3 = this.textFormatter.getGlyphMetrics(t2[b2]);
        if (a3) {
          const t3 = null !== (e2 = a3.y_max) && void 0 !== e2 ? e2 : 0;
          i2 = t3 < i2 ? t3 : i2;
        }
      }
      const a2 = this.textFormatter.getResolution();
      return b2 > 0 ? i2 / a2 * -1 : 0;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered(), t2.save(), this.applyStyle(), t2.openGroup("chordsymbol", this.getAttribute("id"));
      const i2 = e2.getModifierStartXY(tt.Position.ABOVE, this.index);
      let b2;
      t2.setFont(this.textFont);
      const a2 = e2.hasStem(), n2 = e2.checkStave();
      if (this.vertical === Dt.BOTTOM) {
        if (b2 = n2.getYForBottomText(this.text_line + V.TEXT_HEIGHT_OFFSET_HACK), a2) {
          const t3 = e2.checkStem().getExtents(), i3 = n2.getSpacingBetweenLines(), a3 = 1 === e2.getStemDirection() ? t3.baseY : t3.topY;
          b2 = Math.max(b2, a3 + i3 * (this.text_line + 2));
        }
      } else {
        const t3 = Math.min(...e2.getYs());
        if (b2 = Math.min(n2.getYForTopText(this.text_line), t3 - 10), a2) {
          const t4 = e2.checkStem().getExtents(), i3 = n2.getSpacingBetweenLines();
          b2 = Math.min(b2, t4.topY - 5 - i3 * this.text_line);
        }
      }
      let s2 = i2.x;
      s2 = this.horizontal === Bt.LEFT ? i2.x : this.horizontal === Bt.RIGHT ? i2.x + this.getWidth() : this.horizontal === Bt.CENTER ? i2.x - this.getWidth() / 2 : e2.getStemX() - this.getWidth() / 2, Ft("Rendering ChordSymbol: ", this.textFormatter, s2, b2), this.symbolBlocks.forEach((e3) => {
        const i3 = Mt.isSuperscript(e3), a3 = Mt.isSubscript(e3);
        let n3 = b2;
        if (Ft("shift was ", e3.xShift, e3.yShift), Ft("curY pre sub ", n3), i3 && (n3 += this.superscriptOffset), a3 && (n3 += this.subscriptOffset), Ft("curY sup/sub ", n3), e3.symbolType === Ct.TEXT) {
          if ((i3 || a3) && (t2.save(), this.textFont)) {
            const { family: e4, size: i4, weight: b3, style: a4 } = this.textFont, n4 = F.scaleSize(i4, Mt.superSubRatio);
            t2.setFont(e4, n4, b3, a4);
          }
          Ft("Rendering Text: ", e3.text, s2 + e3.xShift, n3 + e3.yShift), t2.fillText(e3.text, s2 + e3.xShift, n3 + e3.yShift), (i3 || a3) && t2.restore();
        } else e3.symbolType === Ct.GLYPH && e3.glyph ? (n3 += e3.yShift, Ft("Rendering Glyph: ", e3.glyph.code, s2 + e3.xShift, n3), e3.glyph.render(t2, s2 + e3.xShift, n3)) : e3.symbolType === Ct.LINE && (Ft("Rendering Line : ", e3.width, s2, n3), t2.beginPath(), t2.setLineWidth(1), t2.moveTo(s2, b2), t2.lineTo(s2 + e3.width, n3), t2.stroke());
        s2 += e3.width, e3.vAlign && (s2 += e3.xShift);
      }), t2.closeGroup(), this.restoreStyle(), t2.restore();
    }
  }
  Mt.DEBUG = false, Mt.HorizontalJustify = Bt, Mt.HorizontalJustifyString = { left: Bt.LEFT, right: Bt.RIGHT, center: Bt.CENTER, centerStem: Bt.CENTER_STEM }, Mt.VerticalJustify = Dt, Mt.VerticalJustifyString = { top: Dt.TOP, above: Dt.TOP, below: Dt.BOTTOM, bottom: Dt.BOTTOM }, Mt.glyphs = { diminished: { code: "csymDiminished" }, dim: { code: "csymDiminished" }, halfDiminished: { code: "csymHalfDiminished" }, "+": { code: "csymAugmented" }, augmented: { code: "csymAugmented" }, majorSeventh: { code: "csymMajorSeventh" }, minor: { code: "csymMinor" }, "-": { code: "csymMinor" }, "(": { code: "csymParensLeftTall" }, leftParen: { code: "csymParensLeftTall" }, ")": { code: "csymParensRightTall" }, rightParen: { code: "csymParensRightTall" }, leftBracket: { code: "csymBracketLeftTall" }, rightBracket: { code: "csymBracketRightTall" }, leftParenTall: { code: "csymParensLeftVeryTall" }, rightParenTall: { code: "csymParensRightVeryTall" }, "/": { code: "csymDiagonalArrangementSlash" }, over: { code: "csymDiagonalArrangementSlash" }, "#": { code: "accidentalSharp" }, b: { code: "accidentalFlat" } }, Mt.symbolTypes = Ct, Mt.symbolModifiers = Et, Mt.noFormat = false;
  class Ot extends tt {
    static get CATEGORY() {
      return x.Dot;
    }
    static getDots(t2) {
      return t2.getModifiersByType(Ot.CATEGORY);
    }
    static buildAndAttach(t2, e2) {
      for (const i2 of t2) if (null == e2 ? void 0 : e2.all) for (let t3 = 0; t3 < i2.keys.length; t3++) {
        const e3 = new Ot();
        e3.setDotShiftY(i2.glyphProps.dot_shiftY), i2.addModifier(e3, t3);
      }
      else if (null != (null == e2 ? void 0 : e2.index)) {
        const t3 = new Ot();
        t3.setDotShiftY(i2.glyphProps.dot_shiftY), i2.addModifier(t3, null == e2 ? void 0 : e2.index);
      } else {
        const t3 = new Ot();
        t3.setDotShiftY(i2.glyphProps.dot_shiftY), i2.addModifier(t3, 0);
      }
    }
    static format(t2, e2) {
      const i2 = e2.right_shift;
      if (!t2 || 0 === t2.length) return false;
      const b2 = [], a2 = {};
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const n3 = t2[e3], s3 = n3.getNote();
        let l3, o3;
        if (c(s3)) {
          const t3 = n3.checkIndex();
          l3 = s3.getKeyProps()[t3], o3 = s3.getFirstDotPx();
        } else {
          if (!_(s3)) throw new g("Internal", "Unexpected instance.");
          l3 = { line: 0.5 }, o3 = i2;
        }
        const r3 = s3.getAttribute("id");
        b2.push({ line: l3.line, note: s3, note_id: r3, dot: n3 }), a2[r3] = Math.max(a2[r3] || o3, o3);
      }
      b2.sort((t3, e3) => e3.line - t3.line);
      let n2 = i2, s2 = 0, l2 = null, o2 = null, r2 = null, h2 = 0;
      for (let t3 = 0; t3 < b2.length; ++t3) {
        const { dot: e3, note: i3, note_id: m2, line: c2 } = b2[t3];
        c2 === l2 && i3 === o2 || (n2 = a2[m2]), i3.isRest() || c2 === l2 || (0.5 === Math.abs(c2 % 1) ? h2 = 0 : (h2 = 0.5, null == o2 || o2.isRest() || null == l2 || l2 - c2 != 0.5 ? c2 + h2 === r2 && (h2 = -0.5) : h2 = -0.5)), i3.isRest() ? e3.dot_shiftY += -h2 : e3.dot_shiftY = -h2, r2 = c2 + h2, e3.setXShift(n2), n2 += e3.getWidth() + 1, s2 = n2 > s2 ? n2 : s2, l2 = c2, o2 = i3;
      }
      return e2.right_shift += s2, true;
    }
    constructor() {
      super(), this.position = tt.Position.RIGHT, this.radius = 2, this.setWidth(5), this.dot_shiftY = 0;
    }
    setNote(t2) {
      return this.note = t2, o(t2) && (this.radius *= 0.5, this.setWidth(3)), this;
    }
    setDotShiftY(t2) {
      return this.dot_shiftY = t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.checkStave().getSpacingBetweenLines(), b2 = e2.getModifierStartXY(this.position, this.index, { forceFlagRight: true });
      _(e2) && (b2.y = e2.getStemExtents().baseY);
      const a2 = b2.x + this.x_shift + this.width - this.radius, n2 = b2.y + this.y_shift + this.dot_shiftY * i2;
      t2.beginPath(), t2.arc(a2, n2, this.radius, 0, 2 * Math.PI, false), t2.fill();
    }
  }
  class Rt extends tt {
    static get CATEGORY() {
      return x.FretHandFinger;
    }
    static format(t2, e2) {
      const { left_shift: i2, right_shift: b2 } = e2;
      if (!t2 || 0 === t2.length) return false;
      const a2 = [];
      let n2 = null, s2 = 0, l2 = 0;
      for (let o3 = 0; o3 < t2.length; ++o3) {
        const r3 = t2[o3], h3 = r3.getNote(), m3 = r3.getPosition(), c3 = r3.checkIndex(), d3 = h3.getKeyProps()[c3], _2 = rt.create(r3.textFont).maxHeight;
        if (r3.position === J.ABOVE && (e2.top_text_line += _2 / V.STAVE_LINE_DISTANCE + 0.5), r3.position === J.BELOW && (e2.text_line += _2 / V.STAVE_LINE_DISTANCE + 0.5), h3 !== n2) {
          for (let t3 = 0; t3 < h3.keys.length; ++t3) 0 === i2 && (s2 = Math.max(h3.getLeftDisplacedHeadPx(), s2)), 0 === b2 && (l2 = Math.max(h3.getRightDisplacedHeadPx(), l2));
          n2 = h3;
        }
        a2.push({ note: h3, num: r3, pos: m3, line: d3.line, shiftL: s2, shiftR: l2 });
      }
      a2.sort((t3, e3) => e3.line - t3.line);
      let o2 = 0, r2 = 0, h2 = 0, m2 = 0, c2 = null, d2 = null;
      for (let t3 = 0; t3 < a2.length; ++t3) {
        let e3 = 0;
        const { note: n3, pos: s3, num: _2, line: x2, shiftL: g2, shiftR: y2 } = a2[t3];
        x2 === c2 && n3 === d2 || (o2 = i2 + g2, r2 = b2 + y2);
        const p2 = _2.getWidth() + 1;
        s3 === tt.Position.LEFT ? (_2.setXShift(i2 + o2), e3 = i2 + p2, h2 = e3 > h2 ? e3 : h2) : s3 === tt.Position.RIGHT && (_2.setXShift(r2), e3 = l2 + p2, m2 = e3 > m2 ? e3 : m2), c2 = x2, d2 = n3;
      }
      return e2.left_shift += h2, e2.right_shift += m2, true;
    }
    static easyScoreHook({ fingerings: t2 } = {}, e2, i2) {
      null == t2 || t2.split(",").map((t3) => {
        const e3 = t3.trim().split("."), b2 = { number: e3[0] };
        return e3[1] && (b2.position = e3[1]), i2.getFactory().Fingering(b2);
      }).map((t3, i3) => e2.addModifier(t3, i3));
    }
    constructor(t2) {
      super(), this.finger = t2, this.width = 7, this.position = tt.Position.LEFT, this.x_shift = 0, this.y_shift = 0, this.x_offset = 0, this.y_offset = 0, this.resetFont();
    }
    setFretHandFinger(t2) {
      return this.finger = t2, this;
    }
    getFretHandFinger() {
      return this.finger;
    }
    setOffsetX(t2) {
      return this.x_offset = t2, this;
    }
    setOffsetY(t2) {
      return this.y_offset = t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getModifierStartXY(this.position, this.index);
      let b2 = i2.x + this.x_shift + this.x_offset, a2 = i2.y + this.y_shift + this.y_offset + 5;
      switch (this.position) {
        case tt.Position.ABOVE:
          b2 -= 4, a2 -= 12;
          break;
        case tt.Position.BELOW:
          b2 -= 2, a2 += 10;
          break;
        case tt.Position.LEFT:
          b2 -= this.width;
          break;
        case tt.Position.RIGHT:
          b2 += 1;
          break;
        default:
          throw new g("InvalidPosition", `The position ${this.position} does not exist`);
      }
      t2.save(), t2.setFont(this.textFont), t2.fillText("" + this.finger, b2, a2), t2.restore();
    }
  }
  Rt.TEXT_FONT = { family: F.SANS_SERIF, size: 9, weight: E.BOLD, style: P.NORMAL };
  class Lt extends vt {
    static get CATEGORY() {
      return x.NoteHead;
    }
    constructor(t2) {
      super(t2), this.custom_glyph = false, this.stem_up_x_offset = 0, this.stem_down_x_offset = 0, this.index = t2.index, this.x = t2.x || 0, this.y = t2.y || 0, t2.note_type && (this.noteType = t2.note_type), this.displaced = t2.displaced || false, this.stem_direction = t2.stem_direction || at.UP, this.line = t2.line || 0, this.glyphProps = V.getGlyphProps(this.duration, this.noteType), p(this.glyphProps, "BadArguments", `No glyph found for duration '${this.duration}' and type '${this.noteType}'`), (this.line > 5 || this.line < 0) && this.glyphProps.ledger_code_head && (this.glyphProps.code_head = this.glyphProps.ledger_code_head), this.glyph_code = this.glyphProps.code_head, this.x_shift = t2.x_shift || 0, t2.custom_glyph_code && (this.custom_glyph = true, this.glyph_code = t2.custom_glyph_code, this.stem_up_x_offset = t2.stem_up_x_offset || 0, this.stem_down_x_offset = t2.stem_down_x_offset || 0), this.setStyle(t2.style), this.slashed = t2.slashed || false, this.render_options = Object.assign(Object.assign({}, this.render_options), { glyph_font_scale: t2.glyph_font_scale || V.NOTATION_FONT_SCALE }), this.setWidth(!this.custom_glyph || this.glyph_code.startsWith("noteheadSlashed") || this.glyph_code.startsWith("noteheadCircled") ? this.glyphProps.getWidth(this.render_options.glyph_font_scale) : Z.getWidth(this.glyph_code, this.render_options.glyph_font_scale));
    }
    getWidth() {
      return this.width;
    }
    isDisplaced() {
      return true === this.displaced;
    }
    setX(t2) {
      return this.x = t2, this;
    }
    getY() {
      return this.y;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    getLine() {
      return this.line;
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    getAbsoluteX() {
      const t2 = this.preFormatted ? super.getAbsoluteX() : this.x, e2 = at.WIDTH / 2, i2 = V.currentMusicFont(), b2 = i2.lookupMetric("notehead.shiftX", 0) * this.stem_direction, a2 = i2.lookupMetric("noteHead.displacedShiftX", 0) * this.stem_direction;
      return t2 + b2 + (this.displaced ? (this.width - e2) * this.stem_direction + a2 : 0);
    }
    getBoundingBox() {
      const t2 = this.checkStave().getSpacingBetweenLines(), e2 = t2 / 2, i2 = this.y - e2;
      return new D(this.getAbsoluteX(), i2, this.width, t2);
    }
    setStave(t2) {
      const e2 = this.getLine();
      return this.stave = t2, this.stave && (this.setY(this.stave.getYForNote(e2)), this.setContext(this.stave.getContext())), this;
    }
    preFormat() {
      if (this.preFormatted) return this;
      const t2 = this.getWidth() + this.leftDisplacedHeadPx + this.rightDisplacedHeadPx;
      return this.setWidth(t2), this.preFormatted = true, this;
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      let e2 = this.getAbsoluteX();
      this.custom_glyph && (e2 += this.stem_direction === at.UP ? this.stem_up_x_offset + (this.glyphProps.stem ? this.glyphProps.getWidth(this.render_options.glyph_font_scale) - this.width : 0) : this.stem_down_x_offset);
      const i2 = this.y;
      !function(...t3) {
        Lt.DEBUG && u("Vex.Flow.NoteHead", t3);
      }("Drawing note head '", this.noteType, this.duration, "' at", e2, i2);
      const b2 = this.stem_direction, a2 = this.render_options.glyph_font_scale, n2 = `${this.glyph_code}Stem${b2 === at.UP ? "Up" : "Down"}`;
      if ("s" === this.noteType) {
        const a3 = this.checkStave().getSpacingBetweenLines();
        !function(t3, e3, i3, b3, a4, n3) {
          const s2 = V.SLASH_NOTEHEAD_WIDTH;
          t3.save(), t3.setLineWidth(V.STEM_WIDTH);
          let l2 = false;
          if (V.durationToNumber(e3) > 2 && (l2 = true), l2 || (i3 -= V.STEM_WIDTH / 2 * a4), t3.beginPath(), t3.moveTo(i3, b3 + n3), t3.lineTo(i3, b3 + 1), t3.lineTo(i3 + s2, b3 - n3), t3.lineTo(i3 + s2, b3), t3.lineTo(i3, b3 + n3), t3.closePath(), l2 ? t3.fill() : t3.stroke(), V.durationToFraction(e3).equals(0.5)) {
            const e4 = [-3, -1, s2 + 1, s2 + 3];
            for (let a5 = 0; a5 < e4.length; a5++) t3.beginPath(), t3.moveTo(i3 + e4[a5], b3 - 10), t3.lineTo(i3 + e4[a5], b3 + 11), t3.stroke();
          }
          t3.restore();
        }(t2, this.duration, e2, i2, b2, a3);
      } else Z.renderGlyph(t2, e2, i2, a2, this.glyph_code, { category: `noteHead.${n2}` });
    }
  }
  Lt.DEBUG = false;
  class Wt extends vt {
    static get CATEGORY() {
      return x.StemmableNote;
    }
    constructor(t2) {
      super(t2);
    }
    getStem() {
      return this.stem;
    }
    checkStem() {
      if (!this.stem) throw new g("NoStem", "No stem attached to instance");
      return this.stem;
    }
    setStem(t2) {
      return this.stem = t2, this.addChildElement(t2), this;
    }
    buildStem() {
      const t2 = new at();
      return this.setStem(t2), this;
    }
    buildFlag(t2 = "flag") {
      const { glyphProps: e2 } = this;
      if (this.hasFlag()) {
        const i2 = this.getStemDirection() === at.DOWN ? e2.code_flag_downstem : e2.code_flag_upstem;
        i2 && (this.flag = new Z(i2, this.render_options.glyph_font_scale, { category: t2 }));
      }
    }
    getBaseCustomNoteHeadGlyphProps() {
      return this.getStemDirection() === at.DOWN ? this.customGlyphs[this.customGlyphs.length - 1] : this.customGlyphs[0];
    }
    getStemLength() {
      return at.HEIGHT + this.getStemExtension();
    }
    getBeamCount() {
      const t2 = this.getGlyphProps();
      return t2 ? t2.beam_count : 0;
    }
    getStemMinimumLength() {
      let t2 = V.durationToFraction(this.duration).value() <= 1 ? 0 : 20;
      switch (this.duration) {
        case "8":
          null == this.beam && (t2 = 35);
          break;
        case "16":
          t2 = null == this.beam ? 35 : 25;
          break;
        case "32":
          t2 = null == this.beam ? 45 : 35;
          break;
        case "64":
          t2 = null == this.beam ? 50 : 40;
          break;
        case "128":
          t2 = null == this.beam ? 55 : 45;
      }
      return t2;
    }
    getStemDirection() {
      if (!this.stem_direction) throw new g("NoStem", "No stem attached to this note.");
      return this.stem_direction;
    }
    setStemDirection(t2) {
      if (t2 || (t2 = at.UP), t2 !== at.UP && t2 !== at.DOWN) throw new g("BadArgument", `Invalid stem direction: ${t2}`);
      if (this.stem_direction = t2, this.reset(), this.hasFlag() && this.buildFlag(), this.beam = void 0, this.stem) {
        this.stem.setDirection(t2), this.stem.setExtension(this.getStemExtension());
        const e2 = this.getBaseCustomNoteHeadGlyphProps() || this.getGlyphProps(), i2 = V.currentMusicFont().lookupMetric(`stem.noteHead.${e2.code_head}`, { offsetYBaseStemUp: 0, offsetYTopStemUp: 0, offsetYBaseStemDown: 0, offsetYTopStemDown: 0 });
        this.stem.setOptions({ stem_up_y_offset: i2.offsetYTopStemUp, stem_down_y_offset: i2.offsetYTopStemDown, stem_up_y_base_offset: i2.offsetYBaseStemUp, stem_down_y_base_offset: i2.offsetYBaseStemDown });
      }
      return this.preFormatted && this.preFormat(), this;
    }
    getStemX() {
      const t2 = this.getAbsoluteX() + this.x_shift, e2 = this.getAbsoluteX() + this.x_shift + this.getGlyphWidth();
      return this.stem_direction === at.DOWN ? t2 : e2;
    }
    getCenterGlyphX() {
      return this.getAbsoluteX() + this.x_shift + this.getGlyphWidth() / 2;
    }
    getStemExtension() {
      const t2 = this.getGlyphProps();
      return null != this.stem_extension_override ? this.stem_extension_override : this.beam ? t2.stem_beam_extension : t2 ? this.getStemDirection() === at.UP ? t2.stem_up_extension : t2.stem_down_extension : 0;
    }
    setStemLength(t2) {
      return this.stem_extension_override = t2 - at.HEIGHT, this;
    }
    getStemExtents() {
      if (!this.stem) throw new g("NoStem", "No stem attached to this note.");
      return this.stem.getExtents();
    }
    getYForTopText(t2) {
      const e2 = this.checkStave();
      if (this.hasStem()) {
        const i2 = this.getStemExtents();
        if (!i2) throw new g("InvalidState", "Stem does not have extents.");
        return Math.min(e2.getYForTopText(t2), i2.topY - this.render_options.annotation_spacing * (t2 + 1));
      }
      return e2.getYForTopText(t2);
    }
    getYForBottomText(t2) {
      const e2 = this.checkStave();
      if (this.hasStem()) {
        const i2 = this.getStemExtents();
        if (!i2) throw new g("InvalidState", "Stem does not have extents.");
        return Math.max(e2.getYForTopText(t2), i2.baseY + this.render_options.annotation_spacing * t2);
      }
      return e2.getYForBottomText(t2);
    }
    hasFlag() {
      return 1 == V.getGlyphProps(this.duration).flag && !this.beam;
    }
    postFormat() {
      var t2;
      return null === (t2 = this.beam) || void 0 === t2 || t2.postFormat(), this.postFormatted = true, this;
    }
    drawStem(t2) {
      var e2;
      this.checkContext(), this.setRendered(), this.setStem(new at(t2)), null === (e2 = this.stem) || void 0 === e2 || e2.setContext(this.getContext()).draw();
    }
  }
  function Ut(t2, e2, i2) {
    const b2 = i2;
    t2.line += b2, t2.maxLine += b2, t2.minLine += b2, t2.note.setKeyLine(0, t2.note.getKeyLine(0) + b2);
  }
  class It extends Wt {
    static get CATEGORY() {
      return x.StaveNote;
    }
    static get STEM_UP() {
      return at.UP;
    }
    static get STEM_DOWN() {
      return at.DOWN;
    }
    static get LEDGER_LINE_OFFSET() {
      return 3;
    }
    static get minNoteheadPadding() {
      return V.currentMusicFont().lookupMetric("noteHead.minPadding");
    }
    static format(t2, e2) {
      var i2, b2;
      if (!t2 || t2.length < 2) return false;
      const a2 = [];
      for (let e3 = 0; e3 < t2.length; e3++) {
        const i3 = t2[e3].sortedKeyProps, b3 = i3[0].keyProps.line;
        let n3 = i3[i3.length - 1].keyProps.line;
        const s3 = t2[e3].getStemDirection(), l3 = t2[e3].getStemLength() / 10, o3 = t2[e3].getStemMinimumLength() / 10;
        let r3;
        t2[e3].isRest() ? (r3 = b3 + t2[e3].glyphProps.line_above, n3 = b3 - t2[e3].glyphProps.line_below) : (r3 = 1 === s3 ? i3[i3.length - 1].keyProps.line + l3 : i3[i3.length - 1].keyProps.line, n3 = 1 === s3 ? i3[0].keyProps.line : i3[0].keyProps.line - l3), a2.push({ line: i3[0].keyProps.line, maxLine: r3, minLine: n3, isrest: t2[e3].isRest(), stemDirection: s3, stemMax: l3, stemMin: o3, voice_shift: t2[e3].getVoiceShiftWidth(), is_displaced: t2[e3].isDisplaced(), note: t2[e3] });
      }
      let n2, s2, l2, o2 = 0;
      const r2 = [false, false, false];
      for (let t3 = 0; t3 < a2.length; t3++) r2[t3] = 0 != a2[t3].note.render_options.draw;
      if (r2[0] && r2[1] && r2[2]) o2 = 3, n2 = a2[0], s2 = a2[1], l2 = a2[2];
      else if (r2[0] && r2[1]) o2 = 2, n2 = a2[0], l2 = a2[1];
      else if (r2[0] && r2[2]) o2 = 2, n2 = a2[0], l2 = a2[2];
      else {
        if (!r2[1] || !r2[2]) return true;
        o2 = 2, n2 = a2[1], l2 = a2[2];
      }
      2 === o2 && -1 === n2.stemDirection && 1 === l2.stemDirection && (n2 = a2[1], l2 = a2[0]);
      const h2 = Math.max(n2.voice_shift, l2.voice_shift);
      let m2 = 0;
      if (2 === o2) {
        const t3 = n2.note.hasStem() && l2.note.hasStem() && n2.stemDirection === l2.stemDirection ? 0 : 0.5;
        if (l2.isrest && n2.isrest && n2.note.duration === l2.note.duration) l2.note.render_options.draw = false;
        else if (n2.minLine <= l2.maxLine + t3) if (n2.isrest) Ut(n2, 0, 1);
        else if (l2.isrest) Ut(l2, 0, -1);
        else {
          const t4 = Math.abs(n2.line - l2.line);
          if (n2.note.hasStem() && l2.note.hasStem()) {
            const e3 = V.codeNoteHead(null !== (i2 = n2.note.sortedKeyProps[0].keyProps.code) && void 0 !== i2 ? i2 : "N", n2.note.duration), a3 = V.codeNoteHead(null !== (b2 = l2.note.sortedKeyProps[l2.note.sortedKeyProps.length - 1].keyProps.code) && void 0 !== b2 ? b2 : "N", l2.note.duration);
            !V.UNISON || e3 !== a3 || n2.note.getModifiers().filter((t5) => t5.getCategory() === x.Dot && 0 === t5.getIndex()).length !== l2.note.getModifiers().filter((t5) => t5.getCategory() === x.Dot && 0 === t5.getIndex()).length || t4 < 1 && t4 > 0 || JSON.stringify(n2.note.getStyle()) !== JSON.stringify(l2.note.getStyle()) ? (m2 = h2 + 2, n2.stemDirection === l2.stemDirection ? n2.note.setXShift(m2) : l2.note.setXShift(m2)) : n2.note.voice !== l2.note.voice && n2.stemDirection === l2.stemDirection && (n2.line != l2.line ? (m2 = h2 + 2, n2.note.setXShift(m2)) : 1 === l2.stemDirection && (l2.stemDirection = -1, l2.note.setStemDirection(-1)));
          } else t4 < 1 ? (m2 = h2 + 2, n2.note.duration < l2.note.duration ? n2.note.setXShift(m2) : l2.note.setXShift(m2)) : n2.note.hasStem() ? (n2.stemDirection = -n2.note.getStemDirection(), n2.note.setStemDirection(n2.stemDirection)) : l2.note.hasStem() && (l2.stemDirection = -l2.note.getStemDirection(), l2.note.setStemDirection(l2.stemDirection));
        }
        return e2.right_shift += m2, true;
      }
      if (!s2) throw new g("InvalidState", "noteM not defined.");
      if (s2.isrest && !n2.isrest && !l2.isrest && (n2.minLine <= s2.maxLine || s2.minLine <= l2.maxLine)) {
        return s2.maxLine - s2.minLine < n2.minLine - l2.maxLine ? function(t3, e3, i3) {
          const b3 = t3.line - S(e3.minLine, i3.maxLine);
          t3.note.setKeyLine(0, t3.note.getKeyLine(0) - b3), t3.line -= b3, t3.maxLine -= b3, t3.minLine -= b3;
        }(s2, n2, l2) : (m2 = h2 + 2, s2.note.setXShift(m2), false === l2.note.hasBeam() && (l2.stemDirection = -1, l2.note.setStemDirection(-1)), n2.minLine <= l2.maxLine && false === n2.note.hasBeam() && (n2.stemDirection = 1, n2.note.setStemDirection(1))), e2.right_shift += m2, true;
      }
      return n2.isrest && s2.isrest && l2.isrest ? (n2.note.render_options.draw = false, l2.note.render_options.draw = false, e2.right_shift += m2, true) : (s2.isrest && n2.isrest && s2.minLine <= l2.maxLine && (s2.note.render_options.draw = false), s2.isrest && l2.isrest && n2.minLine <= s2.maxLine && (s2.note.render_options.draw = false), n2.isrest && n2.minLine <= s2.maxLine && Ut(n2, 0, 1), l2.isrest && s2.minLine <= l2.maxLine && Ut(l2, 0, -1), (n2.minLine <= s2.maxLine + 0.5 || s2.minLine <= l2.maxLine) && (m2 = h2 + 2, s2.note.setXShift(m2), false === l2.note.hasBeam() && (l2.stemDirection = -1, l2.note.setStemDirection(-1)), n2.minLine <= l2.maxLine && false === n2.note.hasBeam() && (n2.stemDirection = 1, n2.note.setStemDirection(1))), e2.right_shift += m2, true);
    }
    static postFormat(t2) {
      return !!t2 && (t2.forEach((t3) => t3.postFormat()), true);
    }
    constructor(t2) {
      var e2, i2, b2;
      super(t2), this.minLine = 0, this.maxLine = 0, this.sortedKeyProps = [], this.ledgerLineStyle = {}, this.clef = null !== (e2 = t2.clef) && void 0 !== e2 ? e2 : "treble", this.octave_shift = null !== (i2 = t2.octave_shift) && void 0 !== i2 ? i2 : 0, this.glyphProps = V.getGlyphProps(this.duration, this.noteType), p(this.glyphProps, "BadArguments", `No glyph found for duration '${this.duration}' and type '${this.noteType}'`), this.displaced = false, this.dot_shiftY = 0, this.use_default_head_x = false, this._noteHeads = [], this.modifiers = [], this.render_options = Object.assign(Object.assign({}, this.render_options), { glyph_font_scale: t2.glyph_font_scale || V.NOTATION_FONT_SCALE, stroke_px: t2.stroke_px || It.LEDGER_LINE_OFFSET }), this.calculateKeyProps(), this.buildStem(), t2.auto_stem ? this.autoStem() : this.setStemDirection(null !== (b2 = t2.stem_direction) && void 0 !== b2 ? b2 : at.UP), this.reset(), this.buildFlag();
    }
    reset() {
      super.reset();
      const t2 = this._noteHeads.map((t3) => t3.getStyle());
      this.buildNoteHeads(), this._noteHeads.forEach((e3, i2) => {
        const b2 = t2[i2];
        b2 && e3.setStyle(b2);
      });
      const e2 = this.stave;
      return e2 && this.setStave(e2), this.calcNoteDisplacements(), this;
    }
    setBeam(t2) {
      return this.beam = t2, this.calcNoteDisplacements(), this.stem && this.stem.setExtension(this.getStemExtension()), this;
    }
    buildStem() {
      return this.setStem(new at({ hide: !!this.isRest() })), this;
    }
    buildNoteHeads() {
      this._noteHeads = [];
      const t2 = this.getStemDirection(), e2 = this.getKeys();
      let i2, b2, a2, n2, s2, l2 = false;
      t2 === at.UP ? (a2 = 0, n2 = e2.length, s2 = 1) : (a2 = e2.length - 1, n2 = -1, s2 = -1);
      for (let e3 = a2; e3 !== n2; e3 += s2) {
        const a3 = this.sortedKeyProps[e3].keyProps, n3 = a3.line;
        void 0 === i2 ? i2 = n3 : (b2 = Math.abs(i2 - n3), 0 === b2 || 0.5 === b2 ? l2 = !l2 : (l2 = false, this.use_default_head_x = true)), i2 = n3;
        const s3 = new Lt({ duration: this.duration, note_type: this.noteType, displaced: l2, stem_direction: t2, custom_glyph_code: a3.code, glyph_font_scale: this.render_options.glyph_font_scale, x_shift: a3.shift_right, stem_up_x_offset: a3.stem_up_x_offset, stem_down_x_offset: a3.stem_down_x_offset, line: a3.line });
        this.addChildElement(s3), this._noteHeads[this.sortedKeyProps[e3].index] = s3;
      }
      return this._noteHeads;
    }
    autoStem() {
      this.setStemDirection(this.calculateOptimalStemDirection());
    }
    calculateOptimalStemDirection() {
      this.minLine = this.sortedKeyProps[0].keyProps.line, this.maxLine = this.sortedKeyProps[this.keyProps.length - 1].keyProps.line;
      return (this.minLine + this.maxLine) / 2 < 3 ? at.UP : at.DOWN;
    }
    calculateKeyProps() {
      let t2;
      for (let e2 = 0; e2 < this.keys.length; ++e2) {
        const i2 = this.keys[e2];
        this.glyphProps.rest && (this.glyphProps.position = i2);
        const b2 = { octave_shift: this.octave_shift || 0, duration: this.duration }, a2 = V.keyProperties(i2, this.clef, b2);
        if (!a2) throw new g("BadArguments", `Invalid key for note properties: ${i2}`);
        "R" === a2.key && ("1" === this.duration || "w" === this.duration ? a2.line = 4 : a2.line = 3);
        const n2 = a2.line;
        null == t2 ? t2 = n2 : 0.5 === Math.abs(t2 - n2) && (this.displaced = true, a2.displaced = true, this.keyProps.length > 0 && (this.keyProps[e2 - 1].displaced = true)), t2 = n2, this.keyProps.push(a2);
      }
      this.keyProps.forEach((t3, e2) => {
        this.sortedKeyProps.push({ keyProps: t3, index: e2 });
      }), this.sortedKeyProps.sort((t3, e2) => t3.keyProps.line - e2.keyProps.line);
    }
    getBoundingBox() {
      var t2, e2;
      if (!this.preFormatted) throw new g("UnformattedNote", "Can't call getBoundingBox on an unformatted note.");
      const { width: i2, modLeftPx: b2, leftDisplacedHeadPx: a2 } = this.getMetrics(), n2 = this.getAbsoluteX() - b2 - a2;
      let s2 = 0, l2 = 0;
      const o2 = (null !== (e2 = null === (t2 = this.getStave()) || void 0 === t2 ? void 0 : t2.getSpacingBetweenLines()) && void 0 !== e2 ? e2 : 0) / 2, r2 = 2 * o2;
      if (this.isRest()) {
        const t3 = this.ys[0], e3 = V.durationToFraction(this.duration);
        e3.equals(1) || e3.equals(2) ? (s2 = t3 - o2, l2 = t3 + o2) : (s2 = t3 - this.glyphProps.line_above * r2, l2 = t3 + this.glyphProps.line_below * r2);
      } else if (this.glyphProps.stem) {
        const t3 = this.getStemExtents();
        t3.baseY += o2 * this.getStemDirection(), s2 = Math.min(t3.topY, t3.baseY), l2 = Math.max(t3.topY, t3.baseY);
      } else {
        s2 = 0, l2 = 0;
        for (let t3 = 0; t3 < this.ys.length; ++t3) {
          const e3 = this.ys[t3];
          0 === t3 ? (s2 = e3, l2 = e3) : (s2 = Math.min(e3, s2), l2 = Math.max(e3, l2));
        }
        s2 -= o2, l2 += o2;
      }
      return new D(n2, s2, i2, l2 - s2);
    }
    getLineNumber(t2) {
      if (!this.keyProps.length) throw new g("NoKeyProps", "Can't get bottom note line, because note is not initialized properly.");
      let e2 = this.keyProps[0].line;
      for (let i2 = 0; i2 < this.keyProps.length; i2++) {
        const b2 = this.keyProps[i2].line;
        t2 ? b2 > e2 && (e2 = b2) : b2 < e2 && (e2 = b2);
      }
      return e2;
    }
    isRest() {
      return this.glyphProps.rest;
    }
    isChord() {
      return !this.isRest() && this.keys.length > 1;
    }
    hasStem() {
      return this.glyphProps.stem;
    }
    hasFlag() {
      return super.hasFlag() && !this.isRest();
    }
    getStemX() {
      return "r" === this.noteType ? this.getCenterGlyphX() : super.getStemX() + (this.stem_direction ? at.WIDTH / (2 * -this.stem_direction) : 0);
    }
    getYForTopText(t2) {
      const e2 = this.getStemExtents();
      return Math.min(this.checkStave().getYForTopText(t2), e2.topY - this.render_options.annotation_spacing * (t2 + 1));
    }
    getYForBottomText(t2) {
      const e2 = this.getStemExtents();
      return Math.max(this.checkStave().getYForTopText(t2), e2.baseY + this.render_options.annotation_spacing * t2);
    }
    setStave(t2) {
      super.setStave(t2);
      const e2 = this._noteHeads.map((e3) => (e3.setStave(t2), e3.getY()));
      if (this.setYs(e2), this.stem) {
        const { y_top: t3, y_bottom: e3 } = this.getNoteHeadBounds();
        this.stem.setYBounds(t3, e3);
      }
      return this;
    }
    isDisplaced() {
      return this.displaced;
    }
    setNoteDisplaced(t2) {
      return this.displaced = t2, this;
    }
    getTieRightX() {
      let t2 = this.getAbsoluteX();
      return t2 += this.getGlyphWidth() + this.x_shift + this.rightDisplacedHeadPx, this.modifierContext && (t2 += this.modifierContext.getRightShift()), t2;
    }
    getTieLeftX() {
      let t2 = this.getAbsoluteX();
      return t2 += this.x_shift - this.leftDisplacedHeadPx, t2;
    }
    getLineForRest() {
      let t2 = this.keyProps[0].line;
      if (this.keyProps.length > 1) {
        const e2 = this.keyProps[this.keyProps.length - 1].line;
        t2 = S(Math.max(t2, e2), Math.min(t2, e2));
      }
      return t2;
    }
    getModifierStartXY(t2, e2, i2 = {}) {
      var b2, a2;
      if (!this.preFormatted) throw new g("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
      if (0 === this.ys.length) throw new g("NoYValues", "No Y-Values calculated for this note.");
      const { ABOVE: n2, BELOW: s2, LEFT: l2, RIGHT: o2 } = tt.Position;
      let r2 = 0;
      return t2 === l2 ? r2 = -2 : t2 === o2 ? (r2 = this.getGlyphWidth() + this.x_shift + 2, this.stem_direction === at.UP && this.hasFlag() && (i2.forceFlagRight || ((t3, e3) => e3 === (t3.getStemDirection() === at.UP ? t3.keyProps.length - 1 : 0))(this, e2)) && (r2 += null !== (a2 = null === (b2 = null == this ? void 0 : this.flag) || void 0 === b2 ? void 0 : b2.getMetrics().width) && void 0 !== a2 ? a2 : 0)) : t2 !== s2 && t2 !== n2 || (r2 = this.getGlyphWidth() / 2), { x: this.getAbsoluteX() + r2, y: this.ys[e2] };
    }
    setStyle(t2) {
      return super.setGroupStyle(t2);
    }
    setStemStyle(t2) {
      const e2 = this.getStem();
      return e2 && e2.setStyle(t2), this;
    }
    getStemStyle() {
      var t2;
      return null === (t2 = this.stem) || void 0 === t2 ? void 0 : t2.getStyle();
    }
    setLedgerLineStyle(t2) {
      this.ledgerLineStyle = t2;
    }
    getLedgerLineStyle() {
      return this.ledgerLineStyle;
    }
    setFlagStyle(t2) {
      var e2;
      null === (e2 = this.flag) || void 0 === e2 || e2.setStyle(t2);
    }
    getFlagStyle() {
      var t2;
      return null === (t2 = this.flag) || void 0 === t2 ? void 0 : t2.getStyle();
    }
    setKeyStyle(t2, e2) {
      return this._noteHeads[t2].setStyle(e2), this;
    }
    setKeyLine(t2, e2) {
      return this.keyProps[t2].line = e2, this.reset(), this;
    }
    getKeyLine(t2) {
      return this.keyProps[t2].line;
    }
    getVoiceShiftWidth() {
      return this.getGlyphWidth() * (this.displaced ? 2 : 1);
    }
    calcNoteDisplacements() {
      this.setLeftDisplacedHeadPx(this.displaced && this.stem_direction === at.DOWN ? this.getGlyphWidth() : 0), this.setRightDisplacedHeadPx(!this.hasFlag() && this.displaced && this.stem_direction === at.UP ? this.getGlyphWidth() : 0);
    }
    preFormat() {
      if (this.preFormatted) return;
      let t2 = 0;
      this.modifierContext && (this.modifierContext.preFormat(), 0 === this.modifierContext.getWidth() && (t2 = It.minNoteheadPadding));
      let e2 = this.getGlyphWidth() + this.leftDisplacedHeadPx + this.rightDisplacedHeadPx + t2;
      this.shouldDrawFlag() && this.stem_direction === at.UP && (e2 += this.getGlyphWidth()), this.setWidth(e2), this.preFormatted = true;
    }
    getNoteHeadBounds() {
      let t2, e2, i2, b2, a2 = 1 / 0, n2 = -1 / 0, s2 = this.checkStave().getNumLines(), l2 = 1, o2 = s2, r2 = l2;
      return this._noteHeads.forEach((h2) => {
        const m2 = h2.getLine(), c2 = h2.getY();
        a2 = Math.min(c2, a2), n2 = Math.max(c2, n2), void 0 === e2 && h2.isDisplaced() && (e2 = h2.getAbsoluteX()), void 0 !== t2 || h2.isDisplaced() || (t2 = h2.getAbsoluteX()), s2 = Math.max(m2, s2), l2 = Math.min(m2, l2), h2.isDisplaced() ? (i2 = void 0 === i2 ? m2 : Math.max(m2, i2), b2 = void 0 === b2 ? m2 : Math.min(m2, b2)) : (o2 = Math.max(m2, o2), r2 = Math.min(m2, r2));
      }, this), { y_top: a2, y_bottom: n2, displaced_x: e2, non_displaced_x: t2, highest_line: s2, lowest_line: l2, highest_displaced_line: i2, lowest_displaced_line: b2, highest_non_displaced_line: o2, lowest_non_displaced_line: r2 };
    }
    getNoteHeadBeginX() {
      return this.getAbsoluteX() + this.x_shift;
    }
    getNoteHeadEndX() {
      return this.getNoteHeadBeginX() + this.getGlyphWidth();
    }
    get noteHeads() {
      return this._noteHeads.slice();
    }
    get note_heads() {
      return console.warn("StaveNote.note_heads is deprecated. Use StaveNote.noteHeads instead.", "This accessor will be removed in VexFlow 5.0."), this.noteHeads;
    }
    drawLedgerLines() {
      const t2 = this.checkStave(), { glyphProps: e2, render_options: { stroke_px: i2 } } = this, b2 = this.checkContext(), a2 = e2.getWidth() + 2 * i2, n2 = 2 * (e2.getWidth() + i2) - at.WIDTH / 2;
      if (this.isRest()) return;
      if (!b2) throw new g("NoCanvasContext", "Can't draw without a canvas context.");
      const { highest_line: s2, lowest_line: l2, highest_displaced_line: o2, highest_non_displaced_line: r2, lowest_displaced_line: h2, lowest_non_displaced_line: m2, displaced_x: c2, non_displaced_x: d2 } = this.getNoteHeadBounds();
      if (s2 < 6 && l2 > 0) return;
      const _2 = Math.min(null != c2 ? c2 : 0, null != d2 ? d2 : 0), x2 = (t3, e3, s3) => {
        let l3;
        l3 = s3 && e3 ? _2 - i2 : e3 ? (null != d2 ? d2 : 0) - i2 : (null != c2 ? c2 : 0) - i2;
        const o3 = e3 && s3 ? n2 : a2;
        b2.beginPath(), b2.moveTo(l3, t3), b2.lineTo(l3 + o3, t3), b2.stroke();
      }, y2 = Object.assign(Object.assign({}, t2.getDefaultLedgerLineStyle()), this.getLedgerLineStyle());
      this.applyStyle(b2, y2);
      for (let e3 = 6; e3 <= s2; ++e3) {
        const i3 = void 0 !== d2 && e3 <= r2, b3 = void 0 !== o2 && e3 <= o2;
        x2(t2.getYForNote(e3), i3, b3);
      }
      for (let e3 = 0; e3 >= l2; --e3) {
        const i3 = void 0 !== d2 && e3 >= m2, b3 = void 0 !== h2 && e3 >= h2;
        x2(t2.getYForNote(e3), i3, b3);
      }
      this.restoreStyle(b2, y2);
    }
    drawModifiers(t2) {
      const e2 = this.checkContext();
      for (let i2 = 0; i2 < this.modifiers.length; i2++) {
        const b2 = this.modifiers[i2], a2 = b2.checkIndex(), n2 = this._noteHeads[a2];
        if (n2 == t2) {
          const t3 = n2.getStyle();
          n2.applyStyle(e2, t3), b2.setContext(e2), b2.drawWithStyle(), n2.restoreStyle(e2, t3);
        }
      }
    }
    shouldDrawFlag() {
      const t2 = void 0 !== this.stem, e2 = 1 == this.glyphProps.flag, i2 = void 0 === this.beam;
      return t2 && e2 && i2;
    }
    drawFlag() {
      var t2, e2, i2, b2, a2;
      const n2 = this.checkContext();
      if (!n2) throw new g("NoCanvasContext", "Can't draw without a canvas context.");
      if (this.shouldDrawFlag()) {
        const { y_top: s2, y_bottom: l2 } = this.getNoteHeadBounds(), o2 = this.stem.getHeight(), r2 = this.getStemX(), h2 = this.getStemDirection() === at.DOWN ? s2 - o2 + 2 - (this.glyphProps ? this.glyphProps.stem_down_extension : 0) * this.getStaveNoteScale() - (null !== (e2 = null === (t2 = this.flag) || void 0 === t2 ? void 0 : t2.getMetrics().y_shift) && void 0 !== e2 ? e2 : 0) * (1 - this.getStaveNoteScale()) : l2 - o2 - 2 + (this.glyphProps ? this.glyphProps.stem_up_extension : 0) * this.getStaveNoteScale() - (null !== (b2 = null === (i2 = this.flag) || void 0 === i2 ? void 0 : i2.getMetrics().y_shift) && void 0 !== b2 ? b2 : 0) * (1 - this.getStaveNoteScale());
        null === (a2 = this.flag) || void 0 === a2 || a2.render(n2, r2, h2);
      }
    }
    drawNoteHeads() {
      const t2 = this.checkContext();
      this._noteHeads.forEach((e2) => {
        e2.applyStyle(t2), t2.openGroup("notehead", e2.getAttribute("id"), { pointerBBox: true }), e2.setContext(t2).draw(), this.drawModifiers(e2), t2.closeGroup(), e2.restoreStyle(t2);
      });
    }
    drawStem(t2) {
      const e2 = this.checkContext();
      t2 && this.setStem(new at(t2)), this.shouldDrawFlag() && this.stem && this.stem.adjustHeightForFlag(), this.stem && this.stem.setContext(e2).draw();
    }
    getStaveNoteScale() {
      return 1;
    }
    getStemExtension() {
      const t2 = super.getStemExtension();
      if (!this.glyphProps.stem) return t2;
      const e2 = this.getStemDirection();
      if (e2 !== this.calculateOptimalStemDirection()) return t2;
      let i2;
      i2 = e2 === at.UP ? 3 - this.maxLine : this.minLine - 3;
      const b2 = i2 - 3.5;
      if (b2 <= 0) return t2;
      const a2 = this.getStave();
      let n2 = 10;
      return null != a2 && (n2 = a2.getSpacingBetweenLines()), t2 + b2 * n2;
    }
    draw() {
      if (false === this.render_options.draw) return;
      if (0 === this.ys.length) throw new g("NoYValues", "Can't draw note without Y values.");
      const t2 = this.checkContext(), e2 = this.getNoteHeadBeginX(), i2 = this.hasStem() && !this.beam;
      if (this._noteHeads.forEach((t3) => t3.setX(e2)), this.stem) {
        const t3 = this.getStemX();
        this.stem.setNoteHeadXBounds(t3, t3);
      }
      !function(...t3) {
        It.DEBUG && u("Vex.Flow.StaveNote", t3);
      }("Rendering ", this.isChord() ? "chord :" : "note :", this.keys), this.applyStyle(), t2.openGroup("stavenote", this.getAttribute("id")), this.drawLedgerLines(), i2 && this.drawStem(), this.drawNoteHeads(), this.drawFlag(), t2.closeGroup(), this.restoreStyle(), this.setRendered();
    }
  }
  It.DEBUG = false;
  class Gt extends R {
    static get CATEGORY() {
      return x.StaveTie;
    }
    constructor(t2, e2) {
      super(), this.setNotes(t2), this.text = e2, this.render_options = { cp1: 8, cp2: 12, text_shift_x: 0, first_x_shift: 0, last_x_shift: 0, y_shift: 7, tie_spacing: 0 }, this.resetFont();
    }
    setDirection(t2) {
      return this.direction = t2, this;
    }
    setNotes(t2) {
      if (!t2.first_note && !t2.last_note) throw new g("BadArguments", "Tie needs to have either first_note or last_note set.");
      if (t2.first_indices || (t2.first_indices = [0]), t2.last_indices || (t2.last_indices = [0]), t2.first_indices.length !== t2.last_indices.length) throw new g("BadArguments", "Tied notes must have same number of indices.");
      return this.notes = t2, this;
    }
    isPartial() {
      return !this.notes.first_note || !this.notes.last_note;
    }
    renderTie(t2) {
      if (0 === t2.first_ys.length || 0 === t2.last_ys.length) throw new g("BadArguments", "No Y-values to render");
      const e2 = this.checkContext();
      let i2 = this.render_options.cp1, b2 = this.render_options.cp2;
      Math.abs(t2.last_x_px - t2.first_x_px) < 10 && (i2 = 2, b2 = 8);
      const a2 = this.render_options.first_x_shift, n2 = this.render_options.last_x_shift, s2 = this.render_options.y_shift * t2.direction, l2 = this.notes.first_indices, o2 = this.notes.last_indices;
      this.applyStyle(), e2.openGroup("stavetie", this.getAttribute("id"));
      for (let r2 = 0; r2 < l2.length; ++r2) {
        const h2 = (t2.last_x_px + n2 + (t2.first_x_px + a2)) / 2, m2 = t2.first_ys[l2[r2]] + s2, c2 = t2.last_ys[o2[r2]] + s2;
        if (isNaN(m2) || isNaN(c2)) throw new g("BadArguments", "Bad indices for tie rendering.");
        const d2 = (m2 + c2) / 2 + i2 * t2.direction, _2 = (m2 + c2) / 2 + b2 * t2.direction;
        e2.beginPath(), e2.moveTo(t2.first_x_px + a2, m2), e2.quadraticCurveTo(h2, d2, t2.last_x_px + n2, c2), e2.quadraticCurveTo(h2, _2, t2.first_x_px + a2, m2), e2.closePath(), e2.fill();
      }
      e2.closeGroup(), this.restoreStyle();
    }
    renderText(t2, e2) {
      var i2, b2, a2;
      if (!this.text) return;
      const n2 = this.checkContext();
      let s2 = (t2 + e2) / 2;
      s2 -= n2.measureText(this.text).width / 2;
      const l2 = null !== (b2 = null === (i2 = this.notes.first_note) || void 0 === i2 ? void 0 : i2.checkStave()) && void 0 !== b2 ? b2 : null === (a2 = this.notes.last_note) || void 0 === a2 ? void 0 : a2.checkStave();
      l2 && (n2.save(), n2.setFont(this.textFont), n2.fillText(this.text, s2 + this.render_options.text_shift_x, l2.getYForTopText() - 1), n2.restore());
    }
    getNotes() {
      return this.notes;
    }
    draw() {
      this.checkContext(), this.setRendered();
      const t2 = this.notes.first_note, e2 = this.notes.last_note;
      let i2 = 0, b2 = 0, a2 = [0], n2 = [0], s2 = 0;
      if (t2) i2 = t2.getTieRightX() + this.render_options.tie_spacing, s2 = t2.getStemDirection(), a2 = t2.getYs();
      else if (e2) {
        i2 = e2.checkStave().getTieStartX(), a2 = e2.getYs(), this.notes.first_indices = this.notes.last_indices;
      }
      if (e2) b2 = e2.getTieLeftX() + this.render_options.tie_spacing, s2 = e2.getStemDirection(), n2 = e2.getYs();
      else if (t2) {
        b2 = t2.checkStave().getTieEndX(), n2 = t2.getYs(), this.notes.last_indices = this.notes.first_indices;
      }
      return this.direction && (s2 = this.direction), this.renderTie({ first_x_px: i2, last_x_px: b2, first_ys: a2, last_ys: n2, direction: s2 }), this.renderText(i2, b2), true;
    }
  }
  Gt.TEXT_FONT = Object.assign({}, R.TEXT_FONT);
  class Ht extends Gt {
    static get CATEGORY() {
      return x.TabTie;
    }
    static createHammeron(t2) {
      return new Ht(t2, "H");
    }
    static createPulloff(t2) {
      return new Ht(t2, "P");
    }
    constructor(t2, e2) {
      super(t2, e2), this.render_options.cp1 = 9, this.render_options.cp2 = 11, this.render_options.y_shift = 3, this.direction = -1;
    }
  }
  var Yt;
  !function(t2) {
    t2[t2.STRICT = 1] = "STRICT", t2[t2.SOFT = 2] = "SOFT", t2[t2.FULL = 3] = "FULL";
  }(Yt || (Yt = {}));
  class Xt extends R {
    static get CATEGORY() {
      return x.Voice;
    }
    static get Mode() {
      return Yt;
    }
    constructor(t2) {
      let e2;
      if (super(), this.resolutionMultiplier = 1, this.mode = Yt.STRICT, this.preFormatted = false, this.ticksUsed = new z(0, 1), this.largestTickWidth = 0, this.tickables = [], this.options = { softmaxFactor: V.SOFTMAX_FACTOR }, "string" == typeof t2) {
        const i2 = t2.match(/(\d+)\/(\d+)/);
        i2 && (e2 = { num_beats: parseInt(i2[1]), beat_value: parseInt(i2[2]) });
      } else e2 = t2;
      this.time = Object.assign({ num_beats: 4, beat_value: 4, resolution: V.RESOLUTION }, e2), this.totalTicks = new z(this.time.num_beats * (this.time.resolution / this.time.beat_value), 1), this.smallestTickCount = this.totalTicks.clone();
    }
    getTotalTicks() {
      return this.totalTicks;
    }
    getTicksUsed() {
      return this.ticksUsed;
    }
    getLargestTickWidth() {
      return this.largestTickWidth;
    }
    getSmallestTickCount() {
      return this.smallestTickCount;
    }
    getTickables() {
      return this.tickables;
    }
    getMode() {
      return this.mode;
    }
    setMode(t2) {
      return this.mode = t2, this;
    }
    getResolutionMultiplier() {
      return this.resolutionMultiplier;
    }
    getActualResolution() {
      return this.resolutionMultiplier * this.time.resolution;
    }
    setStave(t2) {
      return this.stave = t2, this.boundingBox = void 0, this;
    }
    getStave() {
      return this.stave;
    }
    getBoundingBox() {
      if (!this.boundingBox) {
        const t2 = this.checkStave();
        let e2;
        for (let i2 = 0; i2 < this.tickables.length; ++i2) {
          const b2 = this.tickables[i2];
          b2.getStave() || b2.setStave(t2);
          const a2 = b2.getBoundingBox();
          a2 && (e2 = e2 ? e2.mergeWith(a2) : a2);
        }
        this.boundingBox = e2;
      }
      return this.boundingBox;
    }
    setStrict(t2) {
      return this.mode = t2 ? Yt.STRICT : Yt.SOFT, this;
    }
    isComplete() {
      return this.mode !== Yt.STRICT && this.mode !== Yt.FULL || this.ticksUsed.equals(this.totalTicks);
    }
    setSoftmaxFactor(t2) {
      return this.options.softmaxFactor = t2, this.expTicksUsed = 0, this;
    }
    reCalculateExpTicksUsed() {
      const t2 = this.ticksUsed.value();
      return this.expTicksUsed = w(this.tickables.map((e2) => Math.pow(this.options.softmaxFactor, e2.getTicks().value() / t2))), this.expTicksUsed;
    }
    softmax(t2) {
      this.expTicksUsed || (this.expTicksUsed = this.reCalculateExpTicksUsed());
      const e2 = this.ticksUsed.value();
      return ((t3) => Math.pow(this.options.softmaxFactor, t3 / e2))(t2) / this.expTicksUsed;
    }
    addTickable(t2) {
      if (!t2.shouldIgnoreTicks()) {
        const e2 = t2.getTicks();
        if (this.ticksUsed.add(e2), this.expTicksUsed = 0, (this.mode === Yt.STRICT || this.mode === Yt.FULL) && this.ticksUsed.greaterThan(this.totalTicks)) throw this.ticksUsed.subtract(e2), new g("BadArgument", "Too many ticks.");
        e2.lessThan(this.smallestTickCount) && (this.smallestTickCount = e2.clone()), this.resolutionMultiplier = this.ticksUsed.denominator, this.totalTicks.add(0, this.ticksUsed.denominator);
      }
      return this.tickables.push(t2), t2.setVoice(this), this;
    }
    addTickables(t2) {
      for (let e2 = 0; e2 < t2.length; ++e2) this.addTickable(t2[e2]);
      return this;
    }
    preFormat() {
      if (this.preFormatted) return this;
      const t2 = this.checkStave();
      return this.tickables.forEach((e2) => {
        e2.getStave() || e2.setStave(t2);
      }), this.preFormatted = true, this;
    }
    checkStave() {
      return p(this.stave, "NoStave", "No stave attached to instance.");
    }
    draw(t2 = this.checkContext(), e2) {
      let i2;
      e2 = null != e2 ? e2 : this.stave, this.setRendered();
      for (let b2 = 0; b2 < this.tickables.length; ++b2) {
        const a2 = this.tickables[b2];
        e2 && a2.setStave(e2), p(a2.getStave(), "MissingStave", "The voice cannot draw tickables without staves.");
        const n2 = a2.getBoundingBox();
        n2 && (i2 = i2 ? i2.mergeWith(n2) : n2), a2.setContext(t2), a2.drawWithStyle();
      }
      this.boundingBox = i2;
    }
  }
  class jt extends tt {
    static get CATEGORY() {
      return x.GraceNoteGroup;
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      const i2 = [];
      let b2 = null, a2 = 0;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const n3 = t2[e3], s3 = n3.getNote(), l2 = c(s3), o2 = l2 ? 4 : 0;
        if (l2 && s3 !== b2) {
          for (let t3 = 0; t3 < s3.keys.length; ++t3) a2 = Math.max(s3.getLeftDisplacedHeadPx(), a2);
          b2 = s3;
        }
        i2.push({ shift: a2, gracenote_group: n3, spacing: o2 });
      }
      let n2, s2 = i2[0].shift;
      for (let t3 = 0; t3 < i2.length; ++t3) {
        const e3 = i2[t3].gracenote_group;
        e3.preFormat(), n2 = e3.getWidth() + i2[t3].spacing, s2 = Math.max(n2, s2);
      }
      for (let t3 = 0; t3 < i2.length; ++t3) {
        const e3 = i2[t3].gracenote_group;
        n2 = e3.getWidth() + i2[t3].spacing, e3.setSpacingFromNextModifier(s2 - Math.min(n2, s2) + It.minNoteheadPadding);
      }
      return e2.left_shift += s2, true;
    }
    constructor(t2, e2) {
      return super(), this.preFormatted = false, this.position = tt.Position.LEFT, this.grace_notes = t2, this.width = 0, this.show_slur = e2, this.slur = void 0, this.voice = new Xt({ num_beats: 4, beat_value: 4, resolution: V.RESOLUTION }).setStrict(false), this.render_options = { slur_y_shift: 0 }, this.beams = [], this.voice.addTickables(this.grace_notes), this;
    }
    preFormat() {
      this.preFormatted || (this.formatter || (this.formatter = new Pe()), this.formatter.joinVoices([this.voice]).format([this.voice], 0, {}), this.setWidth(this.formatter.getMinTotalWidth()), this.preFormatted = true);
    }
    beamNotes(t2) {
      if ((t2 = t2 || this.grace_notes).length > 1) {
        const e2 = new Re(t2);
        e2.render_options.beam_width = 3, e2.render_options.partial_beam_length = 4, this.beams.push(e2);
      }
      return this;
    }
    setWidth(t2) {
      return this.width = t2, this;
    }
    getWidth() {
      return this.width + It.minNoteheadPadding;
    }
    getGraceNotes() {
      return this.grace_notes;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      if (this.setRendered(), function(...t3) {
        jt.DEBUG && u("Vex.Flow.GraceNoteGroup", t3);
      }("Drawing grace note group for:", e2), this.alignSubNotesWithNote(this.getGraceNotes(), e2), this.grace_notes.forEach((e3) => e3.setContext(t2).draw()), this.beams.forEach((e3) => e3.setContext(t2).draw()), this.show_slur) {
        const i2 = c(e2), b2 = i2 ? Gt : Ht;
        this.slur = new b2({ last_note: this.grace_notes[0], first_note: e2, first_indices: [0], last_indices: [0] }), this.slur.render_options.cp2 = 12, this.slur.render_options.y_shift = (i2 ? 7 : 5) + this.render_options.slur_y_shift, this.slur.setContext(t2).draw();
      }
    }
  }
  jt.DEBUG = false;
  class Vt extends tt {
    static get CATEGORY() {
      return x.NoteSubGroup;
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const b2 = t2[e3];
        b2.preFormat(), i2 += b2.getWidth();
      }
      return e2.left_shift += i2, true;
    }
    constructor(t2) {
      super(), this.preFormatted = false, this.position = tt.Position.LEFT, this.subNotes = t2, this.subNotes.forEach((t3) => {
        t3.setIgnoreTicks(false);
      }), this.width = 0, this.formatter = new Pe(), this.voice = new Xt({ num_beats: 4, beat_value: 4, resolution: V.RESOLUTION }).setStrict(false), this.voice.addTickables(this.subNotes);
    }
    preFormat() {
      this.preFormatted || (this.formatter.joinVoices([this.voice]).format([this.voice], 0), this.setWidth(this.formatter.getMinTotalWidth()), this.preFormatted = true);
    }
    setWidth(t2) {
      return this.width = t2, this;
    }
    getWidth() {
      return this.width;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered(), this.alignSubNotesWithNote(this.subNotes, e2), this.subNotes.forEach((e3) => e3.setContext(t2).drawWithStyle());
    }
  }
  class Kt extends tt {
    static get CATEGORY() {
      return x.Ornament;
    }
    static get minPadding() {
      return V.currentMusicFont().lookupMetric("noteHead.minPadding");
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0, b2 = e2.right_shift, a2 = e2.left_shift, n2 = 0;
      for (let s2 = 0; s2 < t2.length; ++s2) {
        const l2 = t2[s2], o2 = 2;
        if (Kt.ornamentRelease.indexOf(l2.type) >= 0 && (l2.x_shift += b2 + 2), Kt.ornamentAttack.indexOf(l2.type) >= 0 && (l2.x_shift -= a2 + 2), l2.reportedWidth && l2.x_shift < 0 ? a2 += l2.reportedWidth : l2.reportedWidth && l2.x_shift >= 0 ? b2 += l2.reportedWidth + Kt.minPadding : i2 = Math.max(l2.getWidth(), i2), Kt.ornamentArticulation.indexOf(l2.type) >= 0) {
          p(l2.note, "NoAttachedNote").getLineNumber() >= 3 || l2.getPosition() === tt.Position.ABOVE ? (e2.top_text_line += o2, l2.y_shift += n2, n2 -= l2.glyph.bbox.getH()) : (e2.text_line += o2, l2.y_shift += n2, n2 += l2.glyph.bbox.getH());
        } else l2.getPosition() === tt.Position.ABOVE ? (l2.setTextLine(e2.top_text_line), e2.top_text_line += o2) : (l2.setTextLine(e2.text_line), e2.text_line += o2);
      }
      return e2.left_shift = a2 + i2 / 2, e2.right_shift = b2 + i2 / 2, true;
    }
    static get ornamentNoteTransition() {
      return ["flip", "jazzTurn", "smear"];
    }
    static get ornamentAttack() {
      return ["scoop"];
    }
    static get ornamentAlignWithNoteHead() {
      return ["doit", "fall", "fallLong", "doitLong", "bend", "plungerClosed", "plungerOpen", "scoop"];
    }
    static get ornamentRelease() {
      return ["doit", "fall", "fallLong", "doitLong", "jazzTurn", "smear", "flip"];
    }
    static get ornamentArticulation() {
      return ["bend", "plungerClosed", "plungerOpen"];
    }
    getMetrics() {
      const t2 = V.currentMusicFont().getMetrics().ornament;
      if (!t2) throw new g("BadMetrics", "ornament missing");
      return t2[this.ornament.code];
    }
    constructor(t2) {
      super(), this.type = t2, this.delayed = false, this.render_options = { font_scale: V.NOTATION_FONT_SCALE, accidentalLowerPadding: 3, accidentalUpperPadding: 3 }, this.ornament = V.ornamentCodes(this.type);
      const e2 = this.getMetrics();
      if (this.adjustForStemDirection = false, this.reportedWidth = e2 && e2.reportedWidth ? e2.reportedWidth : 0, this.stemUpYOffset = e2 && e2.stemUpYOffset ? e2.stemUpYOffset : 0, this.ornamentAlignWithNoteHead = Kt.ornamentAlignWithNoteHead.indexOf(this.type) >= 0, !this.ornament) throw new g("ArgumentError", `Ornament not found: '${this.type}'`);
      this.x_shift = e2 ? e2.xOffset : 0, this.y_shift = e2 ? e2.yOffset : 0, this.glyph = new Z(this.ornament.code, this.render_options.font_scale, { category: `ornament.${this.ornament.code}` }), Kt.ornamentNoteTransition.indexOf(this.type) >= 0 && (this.delayed = true), e2 || this.glyph.setOrigin(0.5, 1);
    }
    setDelayed(t2) {
      return this.delayed = t2, this;
    }
    setUpperAccidental(t2) {
      const e2 = this.render_options.font_scale / 1.3;
      return this.accidentalUpper = new Z(V.accidentalCodes(t2).code, e2), this.accidentalUpper.setOrigin(0.5, 1), this;
    }
    setLowerAccidental(t2) {
      const e2 = this.render_options.font_scale / 1.3;
      return this.accidentalLower = new Z(V.accidentalCodes(t2).code, e2), this.accidentalLower.setOrigin(0.5, 1), this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getStemDirection(), b2 = e2.checkStave();
      this.applyStyle(), t2.openGroup("ornament", this.getAttribute("id"));
      const a2 = e2.checkStem().getExtents();
      let n2 = i2 === at.DOWN ? a2.baseY : a2.topY;
      _(e2) && (e2.hasStem() ? i2 === at.DOWN && (n2 = b2.getYForTopText(this.text_line)) : n2 = b2.getYForTopText(this.text_line));
      const s2 = i2 === at.DOWN, l2 = b2.getSpacingBetweenLines();
      let o2 = 1;
      !s2 && e2.hasBeam() && (o2 += 0.5);
      const r2 = n2 - l2 * (this.text_line + o2), h2 = e2.getModifierStartXY(this.position, this.index);
      let m2 = h2.x, c2 = this.ornamentAlignWithNoteHead ? h2.y : Math.min(b2.getYForTopText(this.text_line), r2);
      if (c2 += this.y_shift, this.delayed) {
        let t3 = 0;
        const i3 = m2 - b2.getNoteStartX();
        if (void 0 !== this.delayXShift) t3 = this.delayXShift;
        else {
          t3 += this.glyph.getMetrics().width / 2;
          const a3 = e2.getVoice().getTickables(), n3 = a3.indexOf(e2), s3 = n3 + 1 < a3.length ? a3[n3 + 1].checkTickContext() : void 0;
          t3 += s3 ? 0.5 * (s3.getX() - i3) : 0.5 * (b2.getX() + b2.getWidth() - m2), this.delayXShift = t3;
        }
        m2 += t3;
      }
      !function(...t3) {
        Kt.DEBUG && u("Vex.Flow.Ornament", t3);
      }("Rendering ornament: ", this.ornament, m2, c2), this.accidentalLower && (this.accidentalLower.render(t2, m2, c2), c2 -= this.accidentalLower.getMetrics().height, c2 -= this.render_options.accidentalLowerPadding), this.stemUpYOffset && e2.hasStem() && 1 === e2.getStemDirection() && (c2 += this.stemUpYOffset), e2.getLineNumber() < 5 && Kt.ornamentNoteTransition.indexOf(this.type) >= 0 && (c2 = e2.checkStave().getBoundingBox().getY() + 40), this.glyph.render(t2, m2 + this.x_shift, c2), this.accidentalUpper && (c2 -= this.glyph.getMetrics().height + this.render_options.accidentalUpperPadding, this.accidentalUpper.render(t2, m2, c2)), t2.closeGroup(), this.restoreStyle();
    }
  }
  Kt.DEBUG = false;
  class $t extends tt {
    static get CATEGORY() {
      return x.Parenthesis;
    }
    static buildAndAttach(t2) {
      for (const e2 of t2) for (let t3 = 0; t3 < e2.keys.length; t3++) e2.addModifier(new $t(J.LEFT), t3), e2.addModifier(new $t(J.RIGHT), t3);
    }
    static format(t2, e2) {
      if (!t2 || 0 === t2.length) return false;
      let i2 = 0, b2 = 0;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const a2 = t2[e3], n2 = a2.getNote(), s2 = a2.getPosition(), l2 = a2.checkIndex();
        let o2 = 0;
        s2 === J.RIGHT && (o2 = n2.getRightParenthesisPx(l2), b2 = b2 > o2 + a2.width ? b2 : o2 + a2.width), s2 === J.LEFT && (o2 = n2.getLeftParenthesisPx(l2), i2 = i2 > o2 + a2.width ? i2 : o2 + a2.width), a2.setXShift(o2);
      }
      return e2.left_shift += i2, e2.right_shift += b2, true;
    }
    constructor(t2) {
      var e2;
      super(), this.position = null != t2 ? t2 : tt.Position.LEFT, this.point = null !== (e2 = V.currentMusicFont().lookupMetric("parenthesis.default.point")) && void 0 !== e2 ? e2 : vt.getPoint("default"), this.setWidth(V.currentMusicFont().lookupMetric("parenthesis.default.width"));
    }
    setNote(t2) {
      var e2, i2;
      return this.note = t2, this.point = null !== (e2 = V.currentMusicFont().lookupMetric("parenthesis.default.point")) && void 0 !== e2 ? e2 : vt.getPoint("default"), this.setWidth(V.currentMusicFont().lookupMetric("parenthesis.default.width")), o(t2) && (this.point = null !== (i2 = V.currentMusicFont().lookupMetric("parenthesis.gracenote.point")) && void 0 !== i2 ? i2 : vt.getPoint("gracenote"), this.setWidth(V.currentMusicFont().lookupMetric("parenthesis.gracenote.width"))), this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getModifierStartXY(this.position, this.index, { forceFlagRight: true }), b2 = i2.x + this.x_shift, a2 = i2.y + this.y_shift;
      this.position == tt.Position.RIGHT ? Z.renderGlyph(t2, b2 + 1, a2, this.point, "noteheadParenthesisRight", { category: "noteHead.standard.noteheadParenthesisRight" }) : this.position == tt.Position.LEFT && Z.renderGlyph(t2, b2 - 2, a2, this.point, "noteheadParenthesisLeft", { category: "noteHead.standard.noteheadParenthesisLeft" });
    }
  }
  function Jt(t2) {
    if (!t2) return false;
    const e2 = y();
    return "function" == typeof e2.HTMLCanvasElement && t2 instanceof e2.HTMLCanvasElement || "function" == typeof t2.getContext && "function" == typeof t2.toDataURL;
  }
  function qt(t2) {
    if (!t2) return false;
    const e2 = y();
    return "function" == typeof e2.HTMLDivElement && t2 instanceof e2.HTMLDivElement || "function" == typeof t2.appendChild && "object" == typeof t2.style;
  }
  class Qt extends ft {
    static get WIDTH() {
      return 600;
    }
    static get HEIGHT() {
      return 400;
    }
    static get CANVAS_BROWSER_SIZE_LIMIT() {
      return 32767;
    }
    static sanitizeCanvasDims(t2, e2) {
      const i2 = this.CANVAS_BROWSER_SIZE_LIMIT;
      return Math.max(t2, e2) > i2 && (f("Canvas dimensions exceed browser limit. Cropping to " + i2), t2 > i2 && (t2 = i2), e2 > i2 && (e2 = i2)), [t2, e2];
    }
    constructor(t2) {
      super(), this.textHeight = 0, this.context2D = t2, t2.canvas ? this.canvas = t2.canvas : this.canvas = { width: Qt.WIDTH, height: Qt.HEIGHT };
    }
    clear() {
      this.context2D.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
    openGroup(t2, e2, i2) {
    }
    closeGroup() {
    }
    add(t2) {
    }
    setFillStyle(t2) {
      return this.context2D.fillStyle = t2, this;
    }
    setBackgroundFillStyle(t2) {
      return this;
    }
    setStrokeStyle(t2) {
      return this.context2D.strokeStyle = t2, this;
    }
    setShadowColor(t2) {
      return this.context2D.shadowColor = t2, this;
    }
    setShadowBlur(t2) {
      const e2 = this.context2D.getTransform(), i2 = Math.sqrt(e2.a * e2.a + e2.b * e2.b + e2.c * e2.c + e2.d * e2.d);
      return this.context2D.shadowBlur = i2 * t2, this;
    }
    setLineWidth(t2) {
      return this.context2D.lineWidth = t2, this;
    }
    setLineCap(t2) {
      return this.context2D.lineCap = t2, this;
    }
    setLineDash(t2) {
      return this.context2D.setLineDash(t2), this;
    }
    scale(t2, e2) {
      return this.context2D.scale(t2, e2), this;
    }
    resize(t2, e2, i2) {
      var b2;
      const a2 = this.context2D.canvas, n2 = null !== (b2 = null != i2 ? i2 : y().devicePixelRatio) && void 0 !== b2 ? b2 : 1;
      return [t2, e2] = Qt.sanitizeCanvasDims(t2 * n2, e2 * n2), t2 = t2 / n2 | 0, e2 = e2 / n2 | 0, a2.width = t2 * n2, a2.height = e2 * n2, Jt(a2) && (a2.style.width = t2 + "px", a2.style.height = e2 + "px"), this.scale(n2, n2);
    }
    rect(t2, e2, i2, b2) {
      return this.context2D.rect(t2, e2, i2, b2), this;
    }
    fillRect(t2, e2, i2, b2) {
      return this.context2D.fillRect(t2, e2, i2, b2), this;
    }
    clearRect(t2, e2, i2, b2) {
      return this.context2D.clearRect(t2, e2, i2, b2), this;
    }
    beginPath() {
      return this.context2D.beginPath(), this;
    }
    moveTo(t2, e2) {
      return this.context2D.moveTo(t2, e2), this;
    }
    lineTo(t2, e2) {
      return this.context2D.lineTo(t2, e2), this;
    }
    bezierCurveTo(t2, e2, i2, b2, a2, n2) {
      return this.context2D.bezierCurveTo(t2, e2, i2, b2, a2, n2), this;
    }
    quadraticCurveTo(t2, e2, i2, b2) {
      return this.context2D.quadraticCurveTo(t2, e2, i2, b2), this;
    }
    arc(t2, e2, i2, b2, a2, n2) {
      return this.context2D.arc(t2, e2, i2, b2, a2, n2), this;
    }
    fill() {
      return this.context2D.fill(), this;
    }
    stroke() {
      return this.context2D.stroke(), this;
    }
    closePath() {
      return this.context2D.closePath(), this;
    }
    measureText(t2) {
      const e2 = this.context2D.measureText(t2);
      let i2 = 0, b2 = 0;
      return e2.fontBoundingBoxAscent ? (i2 = -e2.fontBoundingBoxAscent, b2 = e2.fontBoundingBoxDescent + e2.fontBoundingBoxAscent) : (i2 = -e2.actualBoundingBoxAscent, b2 = e2.actualBoundingBoxDescent + e2.actualBoundingBoxAscent), { x: 0, y: i2, width: e2.width, height: b2 };
    }
    fillText(t2, e2, i2) {
      return this.context2D.fillText(t2, e2, i2), this;
    }
    save() {
      return this.context2D.save(), this;
    }
    restore() {
      return this.context2D.restore(), this;
    }
    set fillStyle(t2) {
      this.context2D.fillStyle = t2;
    }
    get fillStyle() {
      return this.context2D.fillStyle;
    }
    set strokeStyle(t2) {
      this.context2D.strokeStyle = t2;
    }
    get strokeStyle() {
      return this.context2D.strokeStyle;
    }
    setFont(t2, e2, i2, b2) {
      const a2 = F.validate(t2, e2, i2, b2);
      return this.context2D.font = F.toCSSString(a2), this.textHeight = F.convertSizeToPixelValue(a2.size), this;
    }
    getFont() {
      return this.context2D.font;
    }
  }
  const Zt = { path: { x: true, y: true, width: true, height: true, "font-family": true, "font-weight": true, "font-style": true, "font-size": true }, rect: { "font-family": true, "font-weight": true, "font-style": true, "font-size": true }, text: { width: true, height: true } }, te = "http://www.w3.org/2000/svg", ee = 2 * Math.PI;
  class ie extends ft {
    constructor(t2) {
      super(), this.width = 0, this.height = 0, this.precision = 1, this.backgroundFillStyle = "white", this.fontCSSString = "", this.element = t2, this.precision = Math.pow(10, V.RENDER_PRECISION_PLACES);
      const e2 = this.create("svg");
      this.element.appendChild(e2), this.svg = e2, this.parent = this.svg, this.groups = [this.svg], this.path = "", this.pen = { x: NaN, y: NaN }, this.lineWidth = 1;
      const i2 = { "font-family": F.SANS_SERIF, "font-size": F.SIZE + "pt", "font-weight": E.NORMAL, "font-style": P.NORMAL };
      this.state = Object.assign({ scaleX: 1, scaleY: 1 }, i2), this.attributes = Object.assign({ "stroke-width": 0.3, "stroke-dasharray": "none", fill: "black", stroke: "black" }, i2), this.groupAttributes = [], this.applyAttributes(e2, this.attributes), this.groupAttributes.push(Object.assign({}, this.attributes)), this.shadow_attributes = { width: 0, color: "black" }, this.state_stack = [];
    }
    round(t2) {
      return Math.round(t2 * this.precision) / this.precision;
    }
    create(t2) {
      return document.createElementNS(te, t2);
    }
    openGroup(t2, e2, i2) {
      const b2 = this.create("g");
      return this.groups.push(b2), this.parent.appendChild(b2), this.parent = b2, t2 && b2.setAttribute("class", T(t2)), e2 && b2.setAttribute("id", T(e2)), i2 && i2.pointerBBox && b2.setAttribute("pointer-events", "bounding-box"), this.applyAttributes(b2, this.attributes), this.groupAttributes.push(Object.assign(Object.assign({}, this.groupAttributes[this.groupAttributes.length - 1]), this.attributes)), b2;
    }
    closeGroup() {
      this.groups.pop(), this.groupAttributes.pop(), this.parent = this.groups[this.groups.length - 1];
    }
    add(t2) {
      this.parent.appendChild(t2);
    }
    setFillStyle(t2) {
      return this.attributes.fill = t2, this;
    }
    setBackgroundFillStyle(t2) {
      return this.backgroundFillStyle = t2, this;
    }
    setStrokeStyle(t2) {
      return this.attributes.stroke = t2, this;
    }
    setShadowColor(t2) {
      return this.shadow_attributes.color = t2, this;
    }
    setShadowBlur(t2) {
      return this.shadow_attributes.width = t2, this;
    }
    setLineWidth(t2) {
      return this.attributes["stroke-width"] = t2, this.lineWidth = t2, this;
    }
    setLineDash(t2) {
      if ("[object Array]" === Object.prototype.toString.call(t2)) return this.attributes["stroke-dasharray"] = t2.join(","), this;
      throw new g("ArgumentError", "lineDash must be an array of integers.");
    }
    setLineCap(t2) {
      return this.attributes["stroke-linecap"] = t2, this;
    }
    resize(t2, e2) {
      this.width = t2, this.height = e2, this.element.style.width = t2.toString(), this.svg.style.width = t2.toString(), this.svg.style.height = e2.toString();
      const i2 = { width: t2, height: e2 };
      return this.applyAttributes(this.svg, i2), this.scale(this.state.scaleX, this.state.scaleY), this;
    }
    scale(t2, e2) {
      this.state.scaleX = this.state.scaleX ? this.state.scaleX * t2 : t2, this.state.scaleY = this.state.scaleY ? this.state.scaleY * e2 : e2;
      const i2 = this.width / this.state.scaleX, b2 = this.height / this.state.scaleY;
      return this.setViewBox(0, 0, i2, b2), this;
    }
    setViewBox(t2, e2, i2, b2) {
      if ("string" == typeof t2) this.svg.setAttribute("viewBox", t2);
      else {
        const a2 = t2 + " " + e2 + " " + i2 + " " + b2;
        this.svg.setAttribute("viewBox", a2);
      }
    }
    applyAttributes(t2, e2) {
      const i2 = Zt[t2.nodeName];
      for (const b2 in e2) i2 && i2[b2] || !e2[b2] || 0 != this.groupAttributes.length && e2[b2] == this.groupAttributes[this.groupAttributes.length - 1][b2] || t2.setAttributeNS(null, b2, e2[b2]);
      return t2;
    }
    clear() {
      for (; this.svg.lastChild; ) this.svg.removeChild(this.svg.lastChild);
      this.scale(this.state.scaleX, this.state.scaleY);
    }
    rect(t2, e2, i2, b2, a2) {
      b2 < 0 && (e2 += b2, b2 *= -1);
      const n2 = this.create("rect");
      return a2 = null != a2 ? a2 : { fill: "none", "stroke-width": this.lineWidth, stroke: "black" }, t2 = this.round(t2), e2 = this.round(e2), i2 = this.round(i2), b2 = this.round(b2), this.applyAttributes(n2, Object.assign({ x: t2, y: e2, width: i2, height: b2 }, a2)), this.add(n2), this;
    }
    fillRect(t2, e2, i2, b2) {
      const a2 = { fill: this.attributes.fill, stroke: "none" };
      return this.rect(t2, e2, i2, b2, a2), this;
    }
    clearRect(t2, e2, i2, b2) {
      return this.rect(t2, e2, i2, b2, { fill: this.backgroundFillStyle, stroke: "none" }), this;
    }
    beginPath() {
      return this.path = "", this.pen.x = NaN, this.pen.y = NaN, this;
    }
    moveTo(t2, e2) {
      return t2 = this.round(t2), e2 = this.round(e2), this.path += "M" + t2 + " " + e2, this.pen.x = t2, this.pen.y = e2, this;
    }
    lineTo(t2, e2) {
      return t2 = this.round(t2), e2 = this.round(e2), this.path += "L" + t2 + " " + e2, this.pen.x = t2, this.pen.y = e2, this;
    }
    bezierCurveTo(t2, e2, i2, b2, a2, n2) {
      return a2 = this.round(a2), n2 = this.round(n2), t2 = this.round(t2), e2 = this.round(e2), i2 = this.round(i2), b2 = this.round(b2), this.path += "C" + t2 + " " + e2 + "," + i2 + " " + b2 + "," + a2 + " " + n2, this.pen.x = a2, this.pen.y = n2, this;
    }
    quadraticCurveTo(t2, e2, i2, b2) {
      return i2 = this.round(i2), b2 = this.round(b2), t2 = this.round(t2), e2 = this.round(e2), this.path += "Q" + t2 + " " + e2 + "," + i2 + " " + b2, this.pen.x = i2, this.pen.y = b2, this;
    }
    arc(t2, e2, i2, b2, a2, n2) {
      let s2 = t2 + i2 * Math.cos(b2), l2 = e2 + i2 * Math.sin(b2);
      s2 = this.round(s2), l2 = this.round(l2);
      const o2 = v(b2), r2 = v(a2);
      if (!n2 && a2 - b2 >= ee || n2 && b2 - a2 >= ee || o2 === r2) {
        let a3 = t2 + i2 * Math.cos(b2 + Math.PI), n3 = e2 + i2 * Math.sin(b2 + Math.PI);
        a3 = this.round(a3), n3 = this.round(n3), i2 = this.round(i2), this.path += `M${s2} ${l2} A${i2} ${i2} 0 0 0 ${a3} ${n3} `, this.path += `A${i2} ${i2} 0 0 0 ${s2} ${l2}`, this.pen.x = s2, this.pen.y = l2;
      } else {
        let h2, m2 = t2 + i2 * Math.cos(a2), c2 = e2 + i2 * Math.sin(a2);
        b2 = o2, a2 = r2, h2 = Math.abs(a2 - b2) < Math.PI ? n2 : !n2, b2 > a2 && (h2 = !h2);
        const d2 = !n2;
        m2 = this.round(m2), c2 = this.round(c2), i2 = this.round(i2), this.path += `M${s2} ${l2} A${i2} ${i2} 0 ${+h2} ${+d2} ${m2} ${c2}`, this.pen.x = m2, this.pen.y = c2;
      }
      return this;
    }
    closePath() {
      return this.path += "Z", this;
    }
    getShadowStyle() {
      const t2 = this.shadow_attributes;
      return `filter: drop-shadow(0 0 ${t2.width / 1.5}px ${t2.color})`;
    }
    fill(t2) {
      const e2 = this.create("path");
      return void 0 === t2 && (t2 = Object.assign(Object.assign({}, this.attributes), { stroke: "none" })), t2.d = this.path, this.shadow_attributes.width > 0 && (t2.style = this.getShadowStyle()), this.applyAttributes(e2, t2), this.add(e2), this;
    }
    stroke() {
      const t2 = this.create("path"), e2 = Object.assign(Object.assign({}, this.attributes), { fill: "none", "stroke-width": this.lineWidth, d: this.path });
      return this.shadow_attributes.width > 0 && (e2.style = this.getShadowStyle()), this.applyAttributes(t2, e2), this.add(t2), this;
    }
    measureText(t2) {
      return ie.measureTextCache.lookup(t2, this.svg, this.attributes);
    }
    fillText(t2, e2, i2) {
      if (!t2 || t2.length <= 0) return this;
      e2 = this.round(e2), i2 = this.round(i2);
      const b2 = Object.assign(Object.assign({}, this.attributes), { stroke: "none", x: e2, y: i2 }), a2 = this.create("text");
      return a2.textContent = t2, this.applyAttributes(a2, b2), this.add(a2), this;
    }
    save() {
      return this.state_stack.push({ state: { "font-family": this.state["font-family"], "font-weight": this.state["font-weight"], "font-style": this.state["font-style"], "font-size": this.state["font-size"], scale: this.state.scale }, attributes: { "font-family": this.attributes["font-family"], "font-weight": this.attributes["font-weight"], "font-style": this.attributes["font-style"], "font-size": this.attributes["font-size"], fill: this.attributes.fill, stroke: this.attributes.stroke, "stroke-width": this.attributes["stroke-width"], "stroke-dasharray": this.attributes["stroke-dasharray"] }, shadow_attributes: { width: this.shadow_attributes.width, color: this.shadow_attributes.color }, lineWidth: this.lineWidth }), this;
    }
    restore() {
      const t2 = this.state_stack.pop();
      if (t2) {
        const e2 = t2;
        this.state["font-family"] = e2.state["font-family"], this.state["font-weight"] = e2.state["font-weight"], this.state["font-style"] = e2.state["font-style"], this.state["font-size"] = e2.state["font-size"], this.state.scale = e2.state.scale, this.attributes["font-family"] = e2.attributes["font-family"], this.attributes["font-weight"] = e2.attributes["font-weight"], this.attributes["font-style"] = e2.attributes["font-style"], this.attributes["font-size"] = e2.attributes["font-size"], this.attributes.fill = e2.attributes.fill, this.attributes.stroke = e2.attributes.stroke, this.attributes["stroke-width"] = e2.attributes["stroke-width"], this.attributes["stroke-dasharray"] = e2.attributes["stroke-dasharray"], this.shadow_attributes.width = e2.shadow_attributes.width, this.shadow_attributes.color = e2.shadow_attributes.color, this.lineWidth = e2.lineWidth;
      }
      return this;
    }
    set fillStyle(t2) {
      this.setFillStyle(t2);
    }
    get fillStyle() {
      return this.attributes.fill;
    }
    set strokeStyle(t2) {
      this.setStrokeStyle(t2);
    }
    get strokeStyle() {
      return this.attributes.stroke;
    }
    setFont(t2, e2, i2, b2) {
      const a2 = F.validate(t2, e2, i2, b2);
      this.fontCSSString = F.toCSSString(a2);
      const n2 = { "font-family": a2.family, "font-size": a2.size, "font-weight": a2.weight, "font-style": a2.style };
      return this.attributes = Object.assign(Object.assign({}, this.attributes), n2), this.state = Object.assign(Object.assign({}, this.state), n2), this;
    }
    getFont() {
      return this.fontCSSString;
    }
  }
  var be, ae, ne, se;
  ie.measureTextCache = new class {
    constructor() {
      this.cache = {};
    }
    lookup(t2, e2, i2) {
      let b2 = this.cache[t2];
      void 0 === b2 && (b2 = {}, this.cache[t2] = b2);
      const a2 = `${i2["font-family"]}%${i2["font-size"]}%${i2["font-weight"]}%${i2["font-style"]}`;
      let n2 = b2[a2];
      return void 0 === n2 && (n2 = this.measureImpl(t2, e2, i2), b2[a2] = n2), n2;
    }
    measureImpl(t2, e2, i2) {
      let b2 = this.txt;
      b2 || (b2 = document.createElementNS(te, "text"), this.txt = b2), b2.textContent = t2, i2["font-family"] && b2.setAttributeNS(null, "font-family", i2["font-family"]), i2["font-size"] && b2.setAttributeNS(null, "font-size", `${i2["font-size"]}`), i2["font-style"] && b2.setAttributeNS(null, "font-style", i2["font-style"]), i2["font-weight"] && b2.setAttributeNS(null, "font-weight", `${i2["font-weight"]}`), e2.appendChild(b2);
      const a2 = b2.getBBox();
      return e2.removeChild(b2), { x: a2.x, y: a2.y, width: a2.width, height: a2.height };
    }
  }(), function(t2) {
    t2[t2.CANVAS = 1] = "CANVAS", t2[t2.SVG = 2] = "SVG";
  }(be || (be = {})), function(t2) {
    t2[t2.NONE = 1] = "NONE", t2[t2.UP = 2] = "UP", t2[t2.DOWN = 3] = "DOWN";
  }(ae || (ae = {}));
  class le {
    static buildContext(t2, e2, i2, b2, a2 = "#FFF") {
      const n2 = new le(t2, e2);
      i2 && b2 && n2.resize(i2, b2);
      const s2 = n2.getContext();
      return s2.setBackgroundFillStyle(a2), le.lastContext = s2, s2;
    }
    static getCanvasContext(t2, e2, i2, b2) {
      return le.buildContext(t2, le.Backends.CANVAS, e2, i2, b2);
    }
    static getSVGContext(t2, e2, i2, b2) {
      return le.buildContext(t2, le.Backends.SVG, e2, i2, b2);
    }
    static drawDashedLine(t2, e2, i2, b2, a2, n2) {
      t2.beginPath();
      const s2 = b2 - e2, l2 = a2 - i2, o2 = Math.atan2(l2, s2);
      let r2 = e2, h2 = i2;
      t2.moveTo(e2, i2);
      let m2 = 0, c2 = true;
      for (; !(s2 < 0 ? r2 <= b2 : r2 >= b2) || !(l2 < 0 ? h2 <= a2 : h2 >= a2); ) {
        const e3 = n2[m2++ % n2.length], i3 = r2 + Math.cos(o2) * e3;
        r2 = s2 < 0 ? Math.max(b2, i3) : Math.min(b2, i3);
        const d2 = h2 + Math.sin(o2) * e3;
        h2 = l2 < 0 ? Math.max(a2, d2) : Math.min(a2, d2), c2 ? t2.lineTo(r2, h2) : t2.moveTo(r2, h2), c2 = !c2;
      }
      t2.closePath(), t2.stroke();
    }
    constructor(t2, e2) {
      if (m(t2)) this.ctx = t2;
      else {
        if (void 0 === e2) throw new g("InvalidArgument", "Missing backend argument");
        const i2 = e2;
        let b2;
        if ("string" == typeof t2) {
          const e3 = document.getElementById(t2);
          if (!e3) throw new g("BadElementId", `Can't find element with ID "${e3}"`);
          b2 = e3;
        } else b2 = t2;
        if (i2 === le.Backends.CANVAS) {
          if (!Jt(b2)) throw new g("BadElement", "CANVAS context requires an HTMLCanvasElement.");
          const t3 = b2.getContext("2d", { willReadFrequently: true });
          if (!t3) throw new g("BadElement", "Can't get canvas context");
          this.ctx = new Qt(t3);
        } else {
          if (i2 !== le.Backends.SVG) throw new g("InvalidBackend", `No support for backend: ${i2}`);
          if (!qt(b2)) throw new g("BadElement", "SVG context requires an HTMLDivElement.");
          this.ctx = new ie(b2);
        }
      }
    }
    resize(t2, e2) {
      return this.ctx.resize(t2, e2), this;
    }
    getContext() {
      return this.ctx;
    }
  }
  le.Backends = be, le.LineEndType = ae, le.lastContext = void 0;
  class oe extends tt {
    static get CATEGORY() {
      return x.StringNumber;
    }
    static get metrics() {
      var t2;
      return null !== (t2 = V.currentMusicFont().getMetrics().stringNumber) && void 0 !== t2 ? t2 : { verticalPadding: 0, stemPadding: 0, leftPadding: 0, rightPadding: 0 };
    }
    static format(t2, e2) {
      const i2 = e2.left_shift, b2 = e2.right_shift;
      if (!t2 || 0 === t2.length) return false;
      const a2 = [];
      let n2 = null, s2 = 0, l2 = 0;
      for (let i3 = 0; i3 < t2.length; ++i3) {
        const o3 = t2[i3], r3 = o3.getNote(), h3 = o3.getPosition();
        if (!c(r3)) throw new g("NoStaveNote");
        const m3 = o3.checkIndex(), d3 = r3.getKeyProps()[m3], _2 = r3.getModifierContext(), x2 = 2 * o3.radius / V.STAVE_LINE_DISTANCE + 0.5;
        if (_2 && (h3 === J.ABOVE ? (o3.text_line = _2.getState().top_text_line, e2.top_text_line += x2) : h3 === J.BELOW && (o3.text_line = _2.getState().text_line, e2.text_line += x2)), r3 !== n2) {
          for (let t3 = 0; t3 < r3.keys.length; ++t3) h3 === tt.Position.LEFT && (s2 = Math.max(r3.getLeftDisplacedHeadPx(), s2)), 0 === b2 && (l2 = Math.max(r3.getRightDisplacedHeadPx(), l2));
          n2 = r3;
        }
        const y2 = d3.line;
        a2.push({ pos: h3, note: r3, num: o3, line: y2, shiftL: s2, shiftR: l2 });
      }
      a2.sort((t3, e3) => e3.line - t3.line);
      let o2 = 0, r2 = 0, h2 = 0, m2 = null, d2 = null;
      for (let t3 = 0; t3 < a2.length; ++t3) {
        const e3 = a2[t3].note, n3 = a2[t3].pos, l3 = a2[t3].num, c2 = a2[t3].line, _2 = a2[t3].shiftR;
        c2 === m2 && e3 === d2 || (o2 = b2 + _2);
        const x2 = l3.getWidth() + 1;
        let g2 = 0;
        n3 === tt.Position.LEFT ? (l3.setXShift(i2 + s2), g2 = x2, r2 = Math.max(g2, r2)) : n3 === tt.Position.RIGHT && (l3.setXShift(o2), g2 += x2, h2 = g2 > h2 ? g2 : h2), m2 = c2, d2 = e3;
      }
      return e2.left_shift += r2, e2.right_shift += h2, true;
    }
    constructor(t2) {
      super(), this.string_number = t2, this.position = tt.Position.ABOVE, this.x_shift = 0, this.y_shift = 0, this.text_line = 0, this.stem_offset = 0, this.x_offset = 0, this.y_offset = 0, this.dashed = true, this.leg = le.LineEndType.NONE, this.radius = 8, this.drawCircle = true, this.setWidth(2 * this.radius + 4), this.resetFont();
    }
    setLineEndType(t2) {
      return t2 >= le.LineEndType.NONE && t2 <= le.LineEndType.DOWN && (this.leg = t2), this;
    }
    setStringNumber(t2) {
      return this.string_number = t2, this;
    }
    setOffsetX(t2) {
      return this.x_offset = t2, this;
    }
    setOffsetY(t2) {
      return this.y_offset = t2, this;
    }
    setLastNote(t2) {
      return this.last_note = t2, this;
    }
    setDashed(t2) {
      return this.dashed = t2, this;
    }
    setDrawCircle(t2) {
      return this.drawCircle = t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getModifierStartXY(this.position, this.index), b2 = e2.hasStem() ? e2.getStemDirection() : at.UP;
      let a2 = i2.x + this.x_shift + this.x_offset, n2 = {};
      e2.hasStem() && (n2 = e2.checkStem().getExtents());
      let s2 = i2.y + this.y_shift + this.y_offset;
      switch (this.position) {
        case tt.Position.ABOVE:
          s2 = e2.getYs().reduce((t3, e3) => t3 < e3 ? t3 : e3), e2.hasStem() && b2 == at.UP && (s2 = n2.topY + oe.metrics.stemPadding), s2 -= this.radius + oe.metrics.verticalPadding + this.text_line * V.STAVE_LINE_DISTANCE;
          break;
        case tt.Position.BELOW:
          s2 = e2.getYs().reduce((t3, e3) => t3 > e3 ? t3 : e3), e2.hasStem() && b2 == at.DOWN && (s2 = n2.topY - oe.metrics.stemPadding), s2 += this.radius + oe.metrics.verticalPadding + this.text_line * V.STAVE_LINE_DISTANCE;
          break;
        case tt.Position.LEFT:
          a2 -= this.radius / 2 + oe.metrics.leftPadding;
          break;
        case tt.Position.RIGHT:
          a2 += this.radius / 2 + oe.metrics.rightPadding;
          break;
        default:
          throw new g("InvalidPosition", `The position ${this.position} is invalid`);
      }
      t2.save(), this.drawCircle && (t2.beginPath(), t2.arc(a2, s2, this.radius, 0, 2 * Math.PI, false), t2.setLineWidth(1.5), t2.stroke()), t2.setFont(this.textFont);
      const l2 = a2 - t2.measureText(this.string_number).width / 2;
      t2.fillText("" + this.string_number, l2, s2 + 4.5);
      const o2 = this.last_note;
      if (d(o2)) {
        const i3 = o2.getStemX() - e2.getX() + 5;
        let b3, n3;
        switch (t2.setStrokeStyle("#000000"), t2.setLineCap("round"), t2.setLineWidth(0.6), this.dashed ? le.drawDashedLine(t2, a2 + 10, s2, a2 + i3, s2, [3, 3]) : le.drawDashedLine(t2, a2 + 10, s2, a2 + i3, s2, [3, 0]), this.leg) {
          case le.LineEndType.UP:
            b3 = -10, n3 = this.dashed ? [3, 3] : [3, 0], le.drawDashedLine(t2, a2 + i3, s2, a2 + i3, s2 + b3, n3);
            break;
          case le.LineEndType.DOWN:
            b3 = 10, n3 = this.dashed ? [3, 3] : [3, 0], le.drawDashedLine(t2, a2 + i3, s2, a2 + i3, s2 + b3, n3);
        }
      }
      t2.restore();
    }
  }
  oe.TEXT_FONT = { family: F.SANS_SERIF, size: F.SIZE, weight: E.BOLD, style: P.NORMAL };
  class re extends tt {
    static get CATEGORY() {
      return x.Stroke;
    }
    static format(t2, e2) {
      const i2 = e2.left_shift;
      if (!t2 || 0 === t2.length) return false;
      const b2 = t2.map((t3) => {
        const e3 = t3.getNote(), i3 = t3.checkIndex();
        if (c(e3)) {
          const { line: b3 } = e3.getKeyProps()[i3];
          return { line: b3, shift: e3.getLeftDisplacedHeadPx(), stroke: t3 };
        }
        if (_(e3)) {
          const { str: b3 } = e3.getPositions()[i3];
          return { line: b3, shift: 0, stroke: t3 };
        }
        throw new g("Internal", "Unexpected instance.");
      }), a2 = i2, n2 = b2.reduce((t3, { stroke: e3, shift: i3 }) => (e3.setXShift(a2 + i3), Math.max(e3.getWidth() + 0, t3)), 0);
      return e2.left_shift += n2, true;
    }
    constructor(t2, e2) {
      super(), this.options = Object.assign({ all_voices: true }, e2), this.all_voices = this.options.all_voices, this.type = t2, this.position = tt.Position.LEFT, this.render_options = { font_scale: V.NOTATION_FONT_SCALE }, this.resetFont(), this.setXShift(0), this.setWidth(10);
    }
    getPosition() {
      return this.position;
    }
    addEndNote(t2) {
      return this.note_end = t2, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getModifierStartXY(this.position, this.index);
      let b2 = e2.getYs(), a2 = i2.y, n2 = i2.y;
      const s2 = i2.x - 5, l2 = e2.checkStave().getSpacingBetweenLines(), o2 = this.checkModifierContext().getMembers(e2.getCategory());
      for (let t3 = 0; t3 < o2.length; t3++) {
        const e3 = o2[t3];
        if (h(e3)) {
          b2 = e3.getYs();
          for (let e4 = 0; e4 < b2.length; e4++) (this.note === o2[t3] || this.all_voices) && (a2 = Math.min(a2, b2[e4]), n2 = Math.max(n2, b2[e4]));
        }
      }
      let r2 = "", m2 = 0, d2 = 0, _2 = 0, x2 = 0;
      switch (this.type) {
        case re.Type.BRUSH_DOWN:
          r2 = "arrowheadBlackUp", m2 = -3, d2 = a2 - l2 / 2 + 10, n2 += l2 / 2;
          break;
        case re.Type.BRUSH_UP:
          r2 = "arrowheadBlackDown", m2 = 0.5, d2 = n2 + l2 / 2, a2 -= l2 / 2;
          break;
        case re.Type.ROLL_DOWN:
        case re.Type.RASQUEDO_DOWN:
          r2 = "arrowheadBlackUp", m2 = -3, _2 = this.x_shift + m2 - 2, c(e2) ? (a2 += 1.5 * l2, n2 += (n2 - a2) % 2 != 0 ? 0.5 * l2 : l2, d2 = a2 - l2, x2 = n2 + l2 + 2) : (a2 += 1.5 * l2, n2 += l2, d2 = a2 - 0.75 * l2, x2 = n2 + 0.25 * l2);
          break;
        case re.Type.ROLL_UP:
        case re.Type.RASQUEDO_UP:
          r2 = "arrowheadBlackDown", m2 = -4, _2 = this.x_shift + m2 - 1, c(e2) ? (d2 = l2 / 2, a2 += 0.5 * l2, (n2 - a2) % 2 == 0 && (n2 += l2 / 2), d2 = n2 + 0.5 * l2, x2 = a2 - 1.25 * l2) : (a2 += 0.25 * l2, n2 += 0.5 * l2, d2 = n2 + 0.25 * l2, x2 = a2 - l2);
          break;
        case re.Type.ARPEGGIO_DIRECTIONLESS:
          a2 += 0.5 * l2, n2 += l2;
          break;
        default:
          throw new g("InvalidType", `The stroke type ${this.type} does not exist`);
      }
      let y2 = "straight";
      if (this.type === re.Type.BRUSH_DOWN || this.type === re.Type.BRUSH_UP) t2.fillRect(s2 + this.x_shift, a2, 1, n2 - a2);
      else if (y2 = "wiggly", c(e2)) for (let e3 = a2; e3 <= n2; e3 += l2) Z.renderGlyph(t2, s2 + this.x_shift - 4, e3, this.render_options.font_scale, "vexWiggleArpeggioUp");
      else {
        let e3;
        for (e3 = a2; e3 <= n2; e3 += 10) Z.renderGlyph(t2, s2 + this.x_shift - 4, e3, this.render_options.font_scale, "vexWiggleArpeggioUp");
        this.type === re.Type.RASQUEDO_DOWN && (x2 = e3 + 0.25 * l2);
      }
      this.type !== re.Type.ARPEGGIO_DIRECTIONLESS && (Z.renderGlyph(t2, s2 + this.x_shift + m2, d2, this.render_options.font_scale, r2, { category: `stroke_${y2}.${r2}` }), this.type !== re.Type.RASQUEDO_DOWN && this.type !== re.Type.RASQUEDO_UP || (t2.save(), t2.setFont(this.textFont), t2.fillText("R", s2 + _2, x2), t2.restore()));
    }
  }
  re.Type = { BRUSH_DOWN: 1, BRUSH_UP: 2, ROLL_DOWN: 3, ROLL_UP: 4, RASQUEDO_DOWN: 5, RASQUEDO_UP: 6, ARPEGGIO_DIRECTIONLESS: 7 }, re.TEXT_FONT = { family: F.SERIF, size: F.SIZE, weight: E.BOLD, style: P.ITALIC };
  class he extends tt {
    static get CATEGORY() {
      return x.Vibrato;
    }
    static format(t2, e2, i2) {
      if (!t2 || 0 === t2.length) return false;
      let b2 = e2.top_text_line, a2 = 0, n2 = e2.right_shift - 7;
      const s2 = i2.getMembers(Nt.CATEGORY);
      if (s2 && s2.length > 0) {
        b2 -= s2.map((t3) => t3.getTextHeight()).reduce((t3, e3) => t3 > e3 ? t3 : e3) / V.STAVE_LINE_DISTANCE + 1;
      } else e2.top_text_line += 1;
      for (let e3 = 0; e3 < t2.length; ++e3) {
        const i3 = t2[e3];
        i3.setXShift(n2), i3.setTextLine(b2), a2 += i3.getWidth(), n2 += a2;
      }
      return e2.right_shift += a2, true;
    }
    constructor() {
      super(), this.position = tt.Position.RIGHT, this.render_options = { harsh: false, vibrato_width: 20, wave_height: 6, wave_width: 4, wave_girth: 2 }, this.setVibratoWidth(this.render_options.vibrato_width);
    }
    setHarsh(t2) {
      return this.render_options.harsh = t2, this;
    }
    setVibratoWidth(t2) {
      return this.render_options.vibrato_width = t2, this.setWidth(t2), this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkAttachedNote();
      this.setRendered();
      const i2 = e2.getModifierStartXY(tt.Position.RIGHT, this.index).x + this.x_shift, b2 = e2.getYForTopText(this.text_line) + 2;
      he.renderVibrato(t2, i2, b2, this.render_options);
    }
    static renderVibrato(t2, e2, i2, b2) {
      const { harsh: a2, vibrato_width: n2, wave_width: s2, wave_girth: l2, wave_height: o2 } = b2, r2 = n2 / s2;
      let h2;
      if (t2.beginPath(), a2) {
        for (t2.moveTo(e2, i2 + l2 + 1), h2 = 0; h2 < r2 / 2; ++h2) t2.lineTo(e2 + s2, i2 - o2 / 2), e2 += s2, t2.lineTo(e2 + s2, i2 + o2 / 2), e2 += s2;
        for (h2 = 0; h2 < r2 / 2; ++h2) t2.lineTo(e2 - s2, i2 - o2 / 2 + l2 + 1), e2 -= s2, t2.lineTo(e2 - s2, i2 + o2 / 2 + l2 + 1), e2 -= s2;
        t2.fill();
      } else {
        for (t2.moveTo(e2, i2 + l2), h2 = 0; h2 < r2 / 2; ++h2) t2.quadraticCurveTo(e2 + s2 / 2, i2 - o2 / 2, e2 + s2, i2), e2 += s2, t2.quadraticCurveTo(e2 + s2 / 2, i2 + o2 / 2, e2 + s2, i2), e2 += s2;
        for (h2 = 0; h2 < r2 / 2; ++h2) t2.quadraticCurveTo(e2 - s2 / 2, i2 + o2 / 2 + l2, e2 - s2, i2 + l2), e2 -= s2, t2.quadraticCurveTo(e2 - s2 / 2, i2 - o2 / 2 + l2, e2 - s2, i2 + l2), e2 -= s2;
        t2.fill();
      }
    }
  }
  function me(...t2) {
    ce.DEBUG && u("Vex.Flow.ModifierContext", t2);
  }
  class ce {
    constructor() {
      this.state = { left_shift: 0, right_shift: 0, text_line: 0, top_text_line: 0 }, this.members = {}, this.preFormatted = false, this.postFormatted = false, this.formatted = false, this.width = 0, this.spacing = 0;
    }
    addModifier(t2) {
      return me("addModifier is deprecated, use addMember instead."), this.addMember(t2);
    }
    addMember(t2) {
      const e2 = t2.getCategory();
      return this.members[e2] || (this.members[e2] = []), this.members[e2].push(t2), t2.setModifierContext(this), this.preFormatted = false, this;
    }
    getModifiers(t2) {
      return me("getModifiers is deprecated, use getMembers instead."), this.getMembers(t2);
    }
    getMembers(t2) {
      var e2;
      return null !== (e2 = this.members[t2]) && void 0 !== e2 ? e2 : [];
    }
    getWidth() {
      return this.width;
    }
    getLeftShift() {
      return this.state.left_shift;
    }
    getRightShift() {
      return this.state.right_shift;
    }
    getState() {
      return this.state;
    }
    getMetrics() {
      if (!this.formatted) throw new g("UnformattedMember", "Unformatted member has no metrics.");
      return { width: this.state.left_shift + this.state.right_shift + this.spacing, spacing: this.spacing };
    }
    preFormat() {
      if (this.preFormatted) return;
      me("Preformatting ModifierContext");
      const t2 = this.state, e2 = this.members;
      It.format(e2[x.StaveNote], t2), $t.format(e2[x.Parenthesis], t2), Ot.format(e2[x.Dot], t2), Rt.format(e2[x.FretHandFinger], t2), bt.format(e2[x.Accidental], t2), re.format(e2[x.Stroke], t2), jt.format(e2[x.GraceNoteGroup], t2), Vt.format(e2[x.NoteSubGroup], t2), oe.format(e2[x.StringNumber], t2), ut.format(e2[x.Articulation], t2), Kt.format(e2[x.Ornament], t2), ct.format(e2[x.Annotation], t2), Mt.format(e2[x.ChordSymbol], t2), Nt.format(e2[x.Bend], t2), he.format(e2[x.Vibrato], t2, this), this.width = t2.left_shift + t2.right_shift, this.preFormatted = true;
    }
    postFormat() {
      this.postFormatted || (me("Postformatting ModifierContext"), It.postFormat(this.getMembers(x.StaveNote)));
    }
  }
  ce.DEBUG = false;
  class de extends Pt {
    static get CATEGORY() {
      return x.Clef;
    }
    static get types() {
      return { treble: { code: "gClef", line: 3 }, bass: { code: "fClef", line: 1 }, alto: { code: "cClef", line: 2 }, tenor: { code: "cClef", line: 1 }, percussion: { code: "unpitchedPercussionClef1", line: 2 }, soprano: { code: "cClef", line: 4 }, "mezzo-soprano": { code: "cClef", line: 3 }, "baritone-c": { code: "cClef", line: 0 }, "baritone-f": { code: "fClef", line: 2 }, subbass: { code: "fClef", line: 0 }, french: { code: "gClef", line: 4 }, tab: { code: "6stringTabClef", line: 2.5 } };
    }
    static get annotationSmufl() {
      return { "8va": "timeSig8", "8vb": "timeSig8" };
    }
    constructor(t2, e2, i2) {
      super(), this.clef = de.types.treble, this.setPosition(wt.BEGIN), this.setType(t2, e2, i2), this.setWidth(Z.getWidth(this.clef.code, de.getPoint(this.size), `clef_${this.size}`)), function(...t3) {
        de.DEBUG && u("Vex.Flow.Clef", t3);
      }("Creating clef:", t2);
    }
    setType(t2, e2, i2) {
      this.type = t2, this.clef = de.types[t2], this.size = void 0 === e2 ? "default" : e2;
      const b2 = V.currentMusicFont();
      if (void 0 !== i2) {
        const t3 = de.annotationSmufl[i2], e3 = de.getPoint(this.size) / 5 * 3, a2 = b2.lookupMetric(`clef_${this.size}.annotations.${i2}.${this.type}.line`), n2 = b2.lookupMetric(`clef_${this.size}.annotations.${i2}.${this.type}.shiftX`);
        this.annotation = { code: t3, point: e3, line: a2, x_shift: n2 }, this.attachment = new Z(this.annotation.code, this.annotation.point), this.attachment.metrics.x_max = 0, this.attachment.setXShift(this.annotation.x_shift);
      } else this.annotation = void 0;
      return this;
    }
    getWidth() {
      return "tab" === this.type && p(this.stave, "ClefError", "Can't get width without stave."), this.width;
    }
    static getPoint(t2) {
      return "default" == t2 ? V.NOTATION_FONT_SCALE : V.NOTATION_FONT_SCALE / 3 * 2;
    }
    setStave(t2) {
      return this.stave = t2, this;
    }
    draw() {
      const t2 = this.checkStave(), e2 = t2.checkContext();
      this.setRendered(), this.applyStyle(e2), e2.openGroup("clef", this.getAttribute("id")), Z.renderGlyph(e2, this.x, t2.getYForLine(this.clef.line), de.getPoint(this.size), this.clef.code, { category: `clef_${this.size}` }), void 0 !== this.annotation && void 0 !== this.attachment && (this.placeGlyphOnLine(this.attachment, t2, this.annotation.line), this.attachment.setStave(t2), this.attachment.setContext(e2), this.attachment.renderToStave(this.x)), e2.closeGroup(), this.restoreStyle(e2);
    }
  }
  de.DEBUG = false;
  class _e extends Pt {
    static get CATEGORY() {
      return x.KeySignature;
    }
    constructor(t2, e2, i2) {
      super(), this.accList = [], this.setKeySig(t2, e2, i2), this.setPosition(wt.BEGIN), this.glyphFontScale = V.NOTATION_FONT_SCALE, this.glyphs = [], this.xPositions = [], this.paddingForced = false;
    }
    convertToGlyph(t2, e2) {
      const i2 = V.accidentalCodes(t2.type), b2 = new Z(i2.code, this.glyphFontScale);
      let a2 = 1;
      if ("n" === t2.type && e2) {
        const i3 = _e.accidentalSpacing[e2.type];
        if (i3) {
          a2 = e2.line >= t2.line ? i3.above : i3.below;
        }
      }
      this.placeGlyphOnLine(b2, this.checkStave(), t2.line), this.glyphs.push(b2);
      const n2 = this.xPositions[this.xPositions.length - 1], s2 = b2.getMetrics().width + a2;
      this.xPositions.push(n2 + s2), this.width += s2;
    }
    cancelKey(t2) {
      return this.formatted = false, this.cancelKeySpec = t2, this;
    }
    convertToCancelAccList(t2) {
      const e2 = V.keySignature(t2), i2 = this.accList.length > 0 && e2.length > 0 && e2[0].type !== this.accList[0].type, b2 = i2 ? e2.length : e2.length - this.accList.length;
      if (b2 < 1) return;
      const a2 = [];
      for (let t3 = 0; t3 < b2; t3++) {
        let n2 = t3;
        i2 || (n2 = e2.length - b2 + t3);
        const s2 = e2[n2];
        a2.push({ type: "n", line: s2.line });
      }
      return this.accList = a2.concat(this.accList), { accList: a2, type: e2[0].type };
    }
    addToStave(t2) {
      return this.paddingForced = true, t2.addModifier(this), this;
    }
    convertAccLines(t2, e2, i2 = this.accList) {
      let b2, a2, n2 = 0;
      switch (t2) {
        case "soprano":
          "#" === e2 ? b2 = [2.5, 0.5, 2, 0, 1.5, -0.5, 1] : n2 = -1;
          break;
        case "mezzo-soprano":
          "b" === e2 ? b2 = [0, 2, 0.5, 2.5, 1, 3, 1.5] : n2 = 1.5;
          break;
        case "alto":
          n2 = 0.5;
          break;
        case "tenor":
          "#" === e2 ? b2 = [3, 1, 2.5, 0.5, 2, 0, 1.5] : n2 = -0.5;
          break;
        case "baritone-f":
        case "baritone-c":
          "b" === e2 ? b2 = [0.5, 2.5, 1, 3, 1.5, 3.5, 2] : n2 = 2;
          break;
        case "bass":
        case "french":
          n2 = 1;
      }
      if (void 0 !== b2) for (a2 = 0; a2 < i2.length; ++a2) i2[a2].line = b2[a2];
      else if (0 !== n2) for (a2 = 0; a2 < i2.length; ++a2) i2[a2].line += n2;
    }
    getPadding(t2) {
      return this.formatted || this.format(), 0 === this.glyphs.length || !this.paddingForced && t2 < 2 ? 0 : this.padding;
    }
    getWidth() {
      return this.formatted || this.format(), this.width;
    }
    setKeySig(t2, e2, i2) {
      return this.formatted = false, this.keySpec = t2, this.cancelKeySpec = e2, this.alterKeySpec = i2, this;
    }
    alterKey(t2) {
      return this.formatted = false, this.alterKeySpec = t2, this;
    }
    convertToAlterAccList(t2) {
      const e2 = Math.min(t2.length, this.accList.length);
      for (let i2 = 0; i2 < e2; ++i2) t2[i2] && (this.accList[i2].type = t2[i2]);
    }
    format() {
      const t2 = this.checkStave();
      this.width = 0, this.glyphs = [], this.xPositions = [0], this.accList = V.keySignature(p(this.keySpec));
      const e2 = this.accList, i2 = e2.length > 0 ? e2[0].type : void 0;
      let b2;
      if (this.cancelKeySpec && (b2 = this.convertToCancelAccList(this.cancelKeySpec)), this.alterKeySpec && this.convertToAlterAccList(this.alterKeySpec), this.accList.length > 0) {
        const a2 = (this.position === wt.END ? t2.getEndClef() : t2.getClef()) || t2.getClef();
        b2 && this.convertAccLines(a2, b2.type, b2.accList), this.convertAccLines(a2, i2, e2);
        for (let t3 = 0; t3 < this.accList.length; ++t3) this.convertToGlyph(this.accList[t3], this.accList[t3 + 1]);
      }
      this.formatted = true;
    }
    getGlyphs() {
      return this.formatted || this.format(), this.glyphs;
    }
    draw() {
      const t2 = this.checkStave(), e2 = t2.checkContext();
      this.formatted || this.format(), this.setRendered(), this.applyStyle(e2), e2.openGroup("keysignature", this.getAttribute("id"));
      for (let i2 = 0; i2 < this.glyphs.length; i2++) {
        const b2 = this.glyphs[i2], a2 = this.x + this.xPositions[i2];
        b2.setStave(t2), b2.setContext(e2), b2.renderToStave(a2);
      }
      e2.closeGroup(), this.restoreStyle(e2);
    }
  }
  _e.accidentalSpacing = { "#": { above: 6, below: 4 }, b: { above: 4, below: 7 }, n: { above: 4, below: 1 }, "##": { above: 6, below: 4 }, bb: { above: 4, below: 7 }, db: { above: 4, below: 7 }, d: { above: 4, below: 7 }, bbs: { above: 4, below: 7 }, "++": { above: 6, below: 4 }, "+": { above: 6, below: 4 }, "+-": { above: 6, below: 4 }, "++-": { above: 6, below: 4 }, bs: { above: 4, below: 10 }, bss: { above: 4, below: 10 } };
  class xe extends Pt {
    static get CATEGORY() {
      return x.Repetition;
    }
    constructor(t2, e2, i2) {
      super(), this.symbol_type = t2, this.x = e2, this.x_shift = 0, this.y_shift = i2, this.resetFont();
    }
    setShiftX(t2) {
      return this.x_shift = t2, this;
    }
    setShiftY(t2) {
      return this.y_shift = t2, this;
    }
    draw(t2, e2) {
      switch (this.setRendered(), this.symbol_type) {
        case xe.type.CODA_RIGHT:
          this.drawCodaFixed(t2, e2 + t2.getWidth());
          break;
        case xe.type.CODA_LEFT:
          this.drawSymbolText(t2, e2, "Coda", true);
          break;
        case xe.type.SEGNO_LEFT:
          this.drawSignoFixed(t2, e2);
          break;
        case xe.type.SEGNO_RIGHT:
          this.drawSignoFixed(t2, e2 + t2.getWidth());
          break;
        case xe.type.DC:
          this.drawSymbolText(t2, e2, "D.C.", false);
          break;
        case xe.type.DC_AL_CODA:
          this.drawSymbolText(t2, e2, "D.C. al", true);
          break;
        case xe.type.DC_AL_FINE:
          this.drawSymbolText(t2, e2, "D.C. al Fine", false);
          break;
        case xe.type.DS:
          this.drawSymbolText(t2, e2, "D.S.", false);
          break;
        case xe.type.DS_AL_CODA:
          this.drawSymbolText(t2, e2, "D.S. al", true);
          break;
        case xe.type.DS_AL_FINE:
          this.drawSymbolText(t2, e2, "D.S. al Fine", false);
          break;
        case xe.type.FINE:
          this.drawSymbolText(t2, e2, "Fine", false);
          break;
        case xe.type.TO_CODA:
          this.drawSymbolText(t2, e2, "To", true);
      }
      return this;
    }
    drawCodaFixed(t2, e2) {
      const i2 = t2.getYForTopText(t2.getNumLines()) + this.y_shift;
      return Z.renderGlyph(t2.checkContext(), this.x + e2 + this.x_shift, i2 + V.currentMusicFont().lookupMetric("staveRepetition.coda.offsetY"), 40, "coda", { category: "coda" }), this;
    }
    drawSignoFixed(t2, e2) {
      const i2 = t2.getYForTopText(t2.getNumLines()) + this.y_shift;
      return Z.renderGlyph(t2.checkContext(), this.x + e2 + this.x_shift, i2 + V.currentMusicFont().lookupMetric("staveRepetition.segno.offsetY"), 30, "segno", { category: "segno" }), this;
    }
    drawSymbolText(t2, e2, i2, b2) {
      var a2;
      const n2 = t2.checkContext();
      n2.save(), n2.setFont(this.textFont);
      let s2 = 0, l2 = 0;
      const o2 = t2.getNoteStartX() - this.x;
      switch (this.symbol_type) {
        case xe.type.CODA_LEFT:
          s2 = this.x + t2.getVerticalBarWidth(), l2 = s2 + n2.measureText(i2).width + V.currentMusicFont().lookupMetric("staveRepetition.symbolText.offsetX");
          break;
        case xe.type.DC:
        case xe.type.DC_AL_FINE:
        case xe.type.DS:
        case xe.type.DS_AL_FINE:
        case xe.type.FINE:
          s2 = this.x + e2 + this.x_shift + t2.getWidth() - V.currentMusicFont().lookupMetric("staveRepetition.symbolText.spacing") - o2 - n2.measureText(i2).width;
          break;
        default:
          s2 = this.x + e2 + this.x_shift + t2.getWidth() - V.currentMusicFont().lookupMetric("staveRepetition.symbolText.spacing") - o2 - n2.measureText(i2).width - V.currentMusicFont().lookupMetric("staveRepetition.symbolText.offsetX"), l2 = s2 + n2.measureText(i2).width + V.currentMusicFont().lookupMetric("staveRepetition.symbolText.offsetX");
      }
      const r2 = t2.getYForTopText(t2.getNumLines()) + this.y_shift + V.currentMusicFont().lookupMetric("staveRepetition.symbolText.offsetY");
      return b2 && Z.renderGlyph(n2, l2, r2, 2 * F.convertSizeToPointValue(null === (a2 = this.textFont) || void 0 === a2 ? void 0 : a2.size), "coda", { category: "coda" }), n2.fillText(i2, s2, r2 + 5), n2.restore(), this;
    }
  }
  xe.TEXT_FONT = { family: F.SERIF, size: V.NOTATION_FONT_SCALE / 3, weight: E.BOLD, style: P.NORMAL }, xe.type = { NONE: 1, CODA_LEFT: 2, CODA_RIGHT: 3, SEGNO_LEFT: 4, SEGNO_RIGHT: 5, DC: 6, DC_AL_CODA: 7, DC_AL_FINE: 8, DS: 9, DS_AL_CODA: 10, DS_AL_FINE: 11, FINE: 12, TO_CODA: 13 };
  class ge extends Pt {
    static get CATEGORY() {
      return x.StaveSection;
    }
    constructor(t2, e2, i2, b2 = true) {
      super(), this.setWidth(16), this.section = t2, this.x = e2, this.shift_x = 0, this.shift_y = i2, this.drawRect = b2, this.resetFont();
    }
    setStaveSection(t2) {
      return this.section = t2, this;
    }
    setShiftX(t2) {
      return this.shift_x = t2, this;
    }
    setShiftY(t2) {
      return this.shift_y = t2, this;
    }
    draw(t2, e2) {
      const i2 = t2.checkContext();
      this.setRendered(), i2.save(), i2.setLineWidth(2), i2.setFont(this.textFont);
      const b2 = rt.create(this.textFont), a2 = b2.getWidthForTextInPx(this.section), n2 = b2.getYForStringInPx(this.section), s2 = n2.height, l2 = -1 * n2.yMin, o2 = a2 + 4, r2 = s2 + 4, h2 = t2.getYForTopText(1.5) + this.shift_y, m2 = this.x + e2;
      return this.drawRect && (i2.beginPath(), i2.rect(m2, h2 - r2 + l2, o2, r2), i2.stroke()), i2.fillText(this.section, m2 + 2, h2 - 2), i2.restore(), this;
    }
  }
  ge.TEXT_FONT = { family: F.SANS_SERIF, size: 10, weight: E.BOLD, style: P.NORMAL };
  class ye extends Pt {
    static get CATEGORY() {
      return x.StaveTempo;
    }
    constructor(t2, e2, i2) {
      super(), this.render_options = { glyph_font_scale: 30 }, this.tempo = t2, this.position = wt.ABOVE, this.x = e2, this.shift_x = 10, this.shift_y = i2, this.resetFont();
    }
    setTempo(t2) {
      return this.tempo = t2, this;
    }
    setShiftX(t2) {
      return this.shift_x = t2, this;
    }
    setShiftY(t2) {
      return this.shift_y = t2, this;
    }
    draw(t2, e2) {
      const i2 = t2.checkContext();
      this.setRendered();
      const b2 = this.render_options, a2 = b2.glyph_font_scale / V.NOTATION_FONT_SCALE, n2 = this.tempo.name, s2 = this.tempo.duration, l2 = this.tempo.dots || 0, o2 = this.tempo.bpm;
      let r2 = this.x + this.shift_x + e2;
      const h2 = t2.getYForTopText(1) + this.shift_y;
      i2.save();
      const m2 = rt.create(this.textFont);
      if (n2 && (i2.setFont(this.textFont), i2.fillText(n2, r2, h2), r2 += m2.getWidthForTextInPx(n2)), s2 && o2) {
        const t3 = Object.assign(Object.assign({}, this.textFont), { weight: "normal", style: "normal" });
        i2.setFont(t3);
        const e3 = rt.create(t3);
        n2 && (r2 += e3.getWidthForTextInPx("|"), i2.fillText("(", r2, h2), r2 += e3.getWidthForTextInPx("("));
        const m3 = V.getGlyphProps(s2);
        if (r2 += 3 * a2, Z.renderGlyph(i2, r2, h2, b2.glyph_font_scale, m3.code_head), r2 += Z.getWidth(m3.code_head, b2.glyph_font_scale), m3.stem) {
          let t4 = 30;
          m3.beam_count && (t4 += 3 * (m3.beam_count - 1)), t4 *= a2;
          const e4 = h2 - t4;
          if (i2.fillRect(r2 - a2, e4, a2, t4), m3.code && m3.code_flag_upstem) {
            const t5 = Z.renderGlyph(i2, r2, e4, b2.glyph_font_scale, m3.code_flag_upstem, { category: "flag.staveTempo" });
            r2 += t5.width * V.NOTATION_FONT_SCALE / t5.font.getData().resolution;
          }
        }
        for (let t4 = 0; t4 < l2; t4++) r2 += 6 * a2, i2.beginPath(), i2.arc(r2, h2 + 2 * a2, 2 * a2, 0, 2 * Math.PI, false), i2.fill();
        i2.fillText(" = " + o2 + (n2 ? ")" : ""), r2 + 3 * a2, h2);
      }
      return i2.restore(), this;
    }
  }
  ye.TEXT_FONT = { family: F.SERIF, size: 14, weight: E.BOLD, style: P.NORMAL }, function(t2) {
    t2[t2.LEFT = 1] = "LEFT", t2[t2.CENTER = 2] = "CENTER", t2[t2.RIGHT = 3] = "RIGHT";
  }(ne || (ne = {}));
  class pe extends vt {
    static get CATEGORY() {
      return x.TextNote;
    }
    static get GLYPHS() {
      return { segno: { code: "segno" }, tr: { code: "ornamentTrill" }, mordent: { code: "ornamentMordent" }, mordent_upper: { code: "ornamentShortTrill" }, mordent_lower: { code: "ornamentMordent" }, f: { code: "dynamicForte" }, p: { code: "dynamicPiano" }, m: { code: "dynamicMezzo" }, s: { code: "dynamicSforzando" }, z: { code: "dynamicZ" }, coda: { code: "coda" }, pedal_open: { code: "keyboardPedalPed" }, pedal_close: { code: "keyboardPedalUp" }, caesura_straight: { code: "caesura" }, caesura_curved: { code: "caesuraCurved" }, breath: { code: "breathMarkComma" }, tick: { code: "breathMarkTick" }, turn: { code: "ornamentTurn" }, turn_inverted: { code: "ornamentTurnSlash" } };
    }
    constructor(t2) {
      if (super(t2), this.text = t2.text || "", this.superscript = t2.superscript, this.subscript = t2.subscript, this.setFont(t2.font), this.line = t2.line || 0, this.smooth = t2.smooth || false, this.ignore_ticks = t2.ignore_ticks || false, this.justification = ne.LEFT, t2.glyph) {
        const e2 = pe.GLYPHS[t2.glyph];
        if (!e2) throw new g("Invalid glyph type: " + t2.glyph);
        this.glyph = new Z(e2.code, V.NOTATION_FONT_SCALE, { category: "textNote" }), this.setWidth(this.glyph.getMetrics().width);
      } else this.glyph = void 0;
    }
    setJustification(t2) {
      return this.justification = t2, this;
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    getLine() {
      return this.line;
    }
    getText() {
      return this.text;
    }
    preFormat() {
      if (this.preFormatted) return;
      const t2 = this.checkTickContext("Can't preformat without a TickContext.");
      if (this.smooth) this.setWidth(0);
      else if (this.glyph) ;
      else {
        const t3 = this.checkContext();
        t3.setFont(this.textFont), this.setWidth(t3.measureText(this.text).width);
      }
      this.justification === ne.CENTER ? this.leftDisplacedHeadPx = this.width / 2 : this.justification === ne.RIGHT && (this.leftDisplacedHeadPx = this.width), this.rightDisplacedHeadPx = t2.getMetrics().glyphPx / 2, this.preFormatted = true;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkStave(), i2 = this.checkTickContext("Can't draw without a TickContext.");
      this.setRendered();
      let b2 = this.getAbsoluteX() + i2.getMetrics().glyphPx / 2;
      const a2 = this.getWidth();
      let n2;
      if (this.justification === ne.CENTER ? b2 -= a2 / 2 : this.justification === ne.RIGHT && (b2 -= a2), this.glyph) n2 = e2.getYForLine(this.line + -3), this.glyph.render(t2, b2, n2);
      else {
        n2 = e2.getYForLine(this.line + -3), this.applyStyle(t2), t2.setFont(this.textFont), t2.fillText(this.text, b2, n2);
        const i3 = t2.measureText(this.text).height, { family: a3, size: s2, weight: l2, style: o2 } = this.textFont, r2 = F.scaleSize(s2, 0.769231);
        this.superscript && (t2.setFont(a3, r2, l2, o2), t2.fillText(this.superscript, b2 + this.width + 2, n2 - i3 / 2.2)), this.subscript && (t2.setFont(a3, r2, l2, o2), t2.fillText(this.subscript, b2 + this.width + 2, n2 + i3 / 2.2 - 1)), this.restoreStyle(t2);
      }
    }
  }
  pe.TEXT_FONT = { family: F.SANS_SERIF, size: 12, weight: E.NORMAL, style: P.NORMAL }, pe.Justification = ne;
  class ue extends Pt {
    static get CATEGORY() {
      return x.StaveText;
    }
    constructor(t2, e2, i2 = {}) {
      super(), this.setWidth(16), this.text = t2, this.position = e2, this.options = Object.assign({ shift_x: 0, shift_y: 0, justification: pe.Justification.CENTER }, i2), this.resetFont();
    }
    setStaveText(t2) {
      return this.text = t2, this;
    }
    setShiftX(t2) {
      return this.shift_x = t2, this;
    }
    setShiftY(t2) {
      return this.shift_y = t2, this;
    }
    setText(t2) {
      return this.text = t2, this;
    }
    draw(t2) {
      const e2 = t2.checkContext();
      this.setRendered(), e2.save(), e2.setLineWidth(2), e2.setFont(this.textFont);
      const i2 = e2.measureText("" + this.text).width;
      let b2, a2;
      switch (this.position) {
        case wt.LEFT:
        case wt.RIGHT:
          a2 = (t2.getYForLine(0) + t2.getBottomLineY()) / 2 + this.options.shift_y, b2 = this.position === wt.LEFT ? t2.getX() - i2 - 24 + this.options.shift_x : t2.getX() + t2.getWidth() + 24 + this.options.shift_x;
          break;
        case wt.ABOVE:
        case wt.BELOW:
          b2 = t2.getX() + this.options.shift_x, this.options.justification === ne.CENTER ? b2 += t2.getWidth() / 2 - i2 / 2 : this.options.justification === ne.RIGHT && (b2 += t2.getWidth() - i2), a2 = this.position === wt.ABOVE ? t2.getYForTopText(2) + this.options.shift_y : t2.getYForBottomText(2) + this.options.shift_y;
          break;
        default:
          throw new g("InvalidPosition", "Value Must be in Modifier.Position.");
      }
      return e2.fillText("" + this.text, b2, a2 + 4), e2.restore(), this;
    }
  }
  ue.TEXT_FONT = { family: F.SERIF, size: 16, weight: E.NORMAL, style: P.NORMAL }, function(t2) {
    t2[t2.NONE = 1] = "NONE", t2[t2.BEGIN = 2] = "BEGIN", t2[t2.MID = 3] = "MID", t2[t2.END = 4] = "END", t2[t2.BEGIN_END = 5] = "BEGIN_END";
  }(se || (se = {}));
  class fe extends Pt {
    static get CATEGORY() {
      return x.Volta;
    }
    static get type() {
      return se;
    }
    constructor(t2, e2, i2, b2) {
      super(), this.volta = t2, this.x = i2, this.y_shift = b2, this.number = e2, this.resetFont();
    }
    setShiftY(t2) {
      return this.y_shift = t2, this;
    }
    draw(t2, e2) {
      const i2 = t2.checkContext();
      this.setRendered();
      let b2 = t2.getWidth() - e2;
      const a2 = t2.getYForTopText(t2.getNumLines()) + this.y_shift, n2 = 1.5 * t2.getSpacingBetweenLines();
      switch (this.volta) {
        case se.BEGIN:
          i2.fillRect(this.x + e2, a2, 1, n2);
          break;
        case se.END:
          b2 -= 5, i2.fillRect(this.x + e2 + b2, a2, 1, n2);
          break;
        case se.BEGIN_END:
          b2 -= 3, i2.fillRect(this.x + e2, a2, 1, n2), i2.fillRect(this.x + e2 + b2, a2, 1, n2);
      }
      return this.volta !== se.BEGIN && this.volta !== se.BEGIN_END || (i2.save(), i2.setFont(this.textFont), i2.fillText(this.number, this.x + e2 + 5, a2 + 15), i2.restore()), i2.fillRect(this.x + e2, a2, b2, 1), this;
    }
  }
  fe.TEXT_FONT = { family: F.SANS_SERIF, size: 9, weight: E.BOLD, style: P.NORMAL };
  class Se extends Z {
    constructor(t2, e2, i2, b2, a2, n2) {
      var s2;
      super(b2, a2, n2), this.timeSignature = t2, this.topGlyphs = [], this.botGlyphs = [];
      let l2 = 0, o2 = 0;
      for (let t3 = 0; t3 < e2.length; ++t3) {
        let b3 = e2[t3];
        switch (e2[t3]) {
          case "-":
            b3 = "Minus";
            break;
          case "+":
            b3 = i2.length > 0 ? "PlusSmall" : "Plus";
            break;
          case "(":
            b3 = i2.length > 0 ? "ParensLeftSmall" : "ParensLeft";
            break;
          case ")":
            b3 = i2.length > 0 ? "ParensRightSmall" : "ParensRight";
        }
        const a3 = new Z("timeSig" + b3, this.timeSignature.point);
        this.topGlyphs.push(a3), l2 += null !== (s2 = a3.getMetrics().width) && void 0 !== s2 ? s2 : 0, o2 = Math.max(o2, a3.getMetrics().height);
      }
      let r2 = 0;
      for (let t3 = 0; t3 < i2.length; ++t3) {
        let e3 = i2[t3];
        switch (i2[t3]) {
          case "+":
            e3 = "PlusSmall";
            break;
          case "(":
            e3 = "ParensLeftSmall";
            break;
          case ")":
            e3 = "ParensRightSmall";
        }
        const b3 = new Z("timeSig" + e3, this.timeSignature.point);
        this.botGlyphs.push(b3), r2 += p(b3.getMetrics().width), o2 = Math.max(o2, b3.getMetrics().height);
      }
      this.lineShift = o2 > 22 ? 1 : 0, this.width = Math.max(l2, r2), this.xMin = this.getMetrics().x_min, this.topStartX = (this.width - l2) / 2, this.botStartX = (this.width - r2) / 2, this.reset();
    }
    getMetrics() {
      return { x_min: this.xMin, x_max: this.xMin + this.width, width: this.width };
    }
    renderToStave(t2) {
      const e2 = this.checkStave(), i2 = this.checkContext();
      let b2 = t2 + this.topStartX, a2 = 0;
      a2 = this.botGlyphs.length > 0 ? e2.getYForLine(this.timeSignature.topLine - this.lineShift) : (e2.getYForLine(this.timeSignature.topLine) + e2.getYForLine(this.timeSignature.bottomLine)) / 2;
      for (let t3 = 0; t3 < this.topGlyphs.length; ++t3) {
        const e3 = this.topGlyphs[t3];
        Z.renderOutline(i2, e3.getMetrics().outline, this.scale, b2 + this.x_shift, a2), b2 += p(e3.getMetrics().width);
      }
      b2 = t2 + this.botStartX, a2 = e2.getYForLine(this.timeSignature.bottomLine + this.lineShift);
      for (let t3 = 0; t3 < this.botGlyphs.length; ++t3) {
        const n2 = this.botGlyphs[t3];
        this.timeSignature.placeGlyphOnLine(n2, e2, this.timeSignature.getLine()), Z.renderOutline(i2, n2.getMetrics().outline, this.scale, b2 + n2.getMetrics().x_shift, a2), b2 += p(n2.getMetrics().width);
      }
    }
  }
  class Te extends Pt {
    static get CATEGORY() {
      return x.TimeSignature;
    }
    static get glyphs() {
      return { C: { code: "timeSigCommon", line: 2 }, "C|": { code: "timeSigCutCommon", line: 2 } };
    }
    constructor(t2 = "4/4", e2 = 15, i2 = true) {
      super(), this.timeSpec = "4/4", this.line = 0, this.is_numeric = true, this.validate_args = i2;
      const b2 = e2, a2 = V.currentMusicFont();
      this.point = a2.lookupMetric("digits.point") || V.NOTATION_FONT_SCALE;
      const n2 = a2.lookupMetric("digits.shiftLine", 0);
      this.topLine = 2 + n2, this.bottomLine = 4 + n2, this.setPosition(wt.BEGIN), this.setTimeSig(t2), this.setPadding(b2);
    }
    parseTimeSpec(t2) {
      var e2, i2;
      if ("C" === t2 || "C|" === t2) {
        const { line: e3, code: i3 } = Te.glyphs[t2];
        return { line: e3, num: false, glyph: new Z(i3, V.NOTATION_FONT_SCALE) };
      }
      this.validate_args && ((t3) => {
        const e3 = t3.split("/");
        if (2 !== e3.length && "+" !== e3[0] && "-" !== e3[0]) throw new g("BadTimeSignature", `Invalid time spec: ${t3}. Must be in the form "<numerator>/<denominator>"`);
        e3.forEach((e4) => {
          if (0 == /^[0-9+\-()]+$/.test(e4)) throw new g("BadTimeSignature", `Invalid time spec: ${t3}. Must contain valid signatures.`);
        });
      })(t2);
      const b2 = t2.split("/");
      return { line: 0, num: true, glyph: this.makeTimeSignatureGlyph(null !== (e2 = b2[0]) && void 0 !== e2 ? e2 : "", null !== (i2 = b2[1]) && void 0 !== i2 ? i2 : "") };
    }
    makeTimeSignatureGlyph(t2, e2) {
      return new Se(this, t2, e2, "timeSig0", this.point);
    }
    getInfo() {
      const { line: t2, is_numeric: e2, glyph: i2 } = this;
      return { line: t2, num: e2, glyph: i2 };
    }
    setTimeSig(t2) {
      this.timeSpec = t2;
      const e2 = this.parseTimeSpec(t2);
      return this.setGlyph(e2.glyph), this.is_numeric = e2.num, this.line = e2.line, this;
    }
    getTimeSpec() {
      return this.timeSpec;
    }
    getLine() {
      return this.line;
    }
    setLine(t2) {
      this.line = t2;
    }
    getGlyph() {
      return this.glyph;
    }
    setGlyph(t2) {
      this.glyph = t2, this.setWidth(p(this.glyph.getMetrics().width));
    }
    getIsNumeric() {
      return this.is_numeric;
    }
    setIsNumeric(t2) {
      this.is_numeric = t2;
    }
    draw() {
      const t2 = this.checkStave(), e2 = t2.checkContext();
      this.setRendered(), this.applyStyle(e2), e2.openGroup("timesignature", this.getAttribute("id")), this.glyph.setStave(t2), this.glyph.setContext(e2), this.placeGlyphOnLine(this.glyph, t2, this.line), this.glyph.renderToStave(this.x), e2.closeGroup(), this.restoreStyle(e2);
    }
  }
  const ve = { [kt.CATEGORY]: 0, [de.CATEGORY]: 1, [_e.CATEGORY]: 2, [Te.CATEGORY]: 3 }, we = { [Te.CATEGORY]: 0, [_e.CATEGORY]: 1, [kt.CATEGORY]: 2, [de.CATEGORY]: 3 };
  class ze extends R {
    static get CATEGORY() {
      return x.Stave;
    }
    static get defaultPadding() {
      const t2 = V.currentMusicFont();
      return t2.lookupMetric("stave.padding") + t2.lookupMetric("stave.endPaddingMax");
    }
    static get rightPadding() {
      return V.currentMusicFont().lookupMetric("stave.endPaddingMax");
    }
    constructor(t2, e2, i2, b2) {
      super(), this.height = 0, this.x = t2, this.y = e2, this.width = i2, this.formatted = false, this.start_x = t2 + 5, this.end_x = t2 + i2, this.modifiers = [], this.measure = 0, this.clef = "treble", this.endClef = void 0, this.resetFont(), this.options = Object.assign({ vertical_bar_width: 10, num_lines: 5, fill_style: "#999999", left_bar: true, right_bar: true, spacing_between_lines_px: V.STAVE_LINE_DISTANCE, space_above_staff_ln: 4, space_below_staff_ln: 4, top_text_position: 1, bottom_text_position: 4, line_config: [] }, b2), this.bounds = { x: this.x, y: this.y, w: this.width, h: 0 }, this.defaultLedgerLineStyle = { strokeStyle: "#444", lineWidth: 1.4 }, this.resetLines(), this.addModifier(new kt(this.options.left_bar ? zt.SINGLE : zt.NONE)), this.addEndModifier(new kt(this.options.right_bar ? zt.SINGLE : zt.NONE));
    }
    setDefaultLedgerLineStyle(t2) {
      this.defaultLedgerLineStyle = t2;
    }
    getDefaultLedgerLineStyle() {
      return Object.assign(Object.assign({}, this.getStyle()), this.defaultLedgerLineStyle);
    }
    space(t2) {
      return this.options.spacing_between_lines_px * t2;
    }
    resetLines() {
      this.options.line_config = [];
      for (let t2 = 0; t2 < this.options.num_lines; t2++) this.options.line_config.push({ visible: true });
      this.height = (this.options.num_lines + this.options.space_above_staff_ln) * this.options.spacing_between_lines_px, this.options.bottom_text_position = this.options.num_lines;
    }
    setNoteStartX(t2) {
      return this.formatted || this.format(), this.start_x = t2, this;
    }
    getNoteStartX() {
      return this.formatted || this.format(), this.start_x;
    }
    getNoteEndX() {
      return this.formatted || this.format(), this.end_x;
    }
    getTieStartX() {
      return this.start_x;
    }
    getTieEndX() {
      return this.end_x;
    }
    getX() {
      return this.x;
    }
    getNumLines() {
      return this.options.num_lines;
    }
    setNumLines(t2) {
      return this.options.num_lines = t2, this.resetLines(), this;
    }
    setY(t2) {
      return this.y = t2, this;
    }
    getY() {
      return this.y;
    }
    getTopLineTopY() {
      return this.getYForLine(0) - V.STAVE_LINE_THICKNESS / 2;
    }
    getBottomLineBottomY() {
      return this.getYForLine(this.getNumLines() - 1) + V.STAVE_LINE_THICKNESS / 2;
    }
    setX(t2) {
      const e2 = t2 - this.x;
      this.formatted = false, this.x = t2, this.start_x += e2, this.end_x += e2;
      for (let t3 = 0; t3 < this.modifiers.length; t3++) {
        const i2 = this.modifiers[t3];
        i2.setX(i2.getX() + e2);
      }
      return this;
    }
    setWidth(t2) {
      return this.formatted = false, this.width = t2, this.end_x = this.x + t2, this;
    }
    getWidth() {
      return this.width;
    }
    getStyle() {
      return Object.assign({ fillStyle: this.options.fill_style, strokeStyle: this.options.fill_style, lineWidth: V.STAVE_LINE_THICKNESS }, super.getStyle());
    }
    setMeasure(t2) {
      return this.measure = t2, this;
    }
    getMeasure() {
      return this.measure;
    }
    getModifierXShift(t2 = 0) {
      if ("number" != typeof t2) throw new g("InvalidIndex", "Must be of number type");
      if (this.formatted || this.format(), 1 === this.getModifiers(wt.BEGIN).length) return 0;
      if (this.modifiers[t2].getPosition() === wt.RIGHT) return 0;
      let e2 = this.start_x - this.x;
      const i2 = this.modifiers[0];
      return i2.getType() === zt.REPEAT_BEGIN && e2 > i2.getWidth() && (e2 -= i2.getWidth()), e2;
    }
    setRepetitionType(t2, e2 = 0) {
      return this.modifiers.push(new xe(t2, this.x, e2)), this;
    }
    setVoltaType(t2, e2, i2) {
      return this.modifiers.push(new fe(t2, e2, this.x, i2)), this;
    }
    setSection(t2, e2, i2 = 0, b2, a2 = true) {
      const n2 = new ge(t2, this.x + i2, e2, a2);
      return b2 && n2.setFontSize(b2), this.modifiers.push(n2), this;
    }
    setTempo(t2, e2) {
      return this.modifiers.push(new ye(t2, this.x, e2)), this;
    }
    setText(t2, e2, i2 = {}) {
      return this.modifiers.push(new ue(t2, e2, i2)), this;
    }
    getHeight() {
      return this.height;
    }
    getSpacingBetweenLines() {
      return this.options.spacing_between_lines_px;
    }
    getBoundingBox() {
      return new D(this.x, this.y, this.width, this.getBottomY() - this.y);
    }
    getBottomY() {
      const t2 = this.options, e2 = t2.spacing_between_lines_px;
      return this.getYForLine(t2.num_lines) + t2.space_below_staff_ln * e2;
    }
    getBottomLineY() {
      return this.getYForLine(this.options.num_lines);
    }
    getYForLine(t2) {
      const e2 = this.options, i2 = e2.spacing_between_lines_px, b2 = e2.space_above_staff_ln;
      return this.y + t2 * i2 + b2 * i2;
    }
    getLineForY(t2) {
      const e2 = this.options, i2 = e2.spacing_between_lines_px, b2 = e2.space_above_staff_ln;
      return (t2 - this.y) / i2 - b2;
    }
    getYForTopText(t2 = 0) {
      return this.getYForLine(-t2 - this.options.top_text_position);
    }
    getYForBottomText(t2 = 0) {
      return this.getYForLine(this.options.bottom_text_position + t2);
    }
    getYForNote(t2) {
      const e2 = this.options, i2 = e2.spacing_between_lines_px, b2 = e2.space_above_staff_ln;
      return this.y + b2 * i2 + 5 * i2 - t2 * i2;
    }
    getYForGlyphs() {
      return this.getYForLine(3);
    }
    addModifier(t2, e2) {
      return void 0 !== e2 && t2.setPosition(e2), t2.setStave(this), this.formatted = false, this.modifiers.push(t2), this;
    }
    addEndModifier(t2) {
      return this.addModifier(t2, wt.END), this;
    }
    setBegBarType(t2) {
      const { SINGLE: e2, REPEAT_BEGIN: i2, NONE: b2 } = zt;
      return t2 !== e2 && t2 !== i2 && t2 !== b2 || (this.modifiers[0].setType(t2), this.formatted = false), this;
    }
    setEndBarType(t2) {
      return t2 !== zt.REPEAT_BEGIN && (this.modifiers[1].setType(t2), this.formatted = false), this;
    }
    setClefLines(t2) {
      return this.clef = t2, this;
    }
    setClef(t2, e2, i2, b2) {
      void 0 === b2 && (b2 = wt.BEGIN), b2 === wt.END ? this.endClef = t2 : this.clef = t2;
      const a2 = this.getModifiers(b2, de.CATEGORY);
      return 0 === a2.length ? this.addClef(t2, e2, i2, b2) : a2[0].setType(t2, e2, i2), this;
    }
    getClef() {
      return this.clef;
    }
    setEndClef(t2, e2, i2) {
      return this.setClef(t2, e2, i2, wt.END), this;
    }
    getEndClef() {
      return this.endClef;
    }
    setKeySignature(t2, e2, i2) {
      void 0 === i2 && (i2 = wt.BEGIN);
      const b2 = this.getModifiers(i2, _e.CATEGORY);
      return 0 === b2.length ? this.addKeySignature(t2, e2, i2) : b2[0].setKeySig(t2, e2), this;
    }
    setEndKeySignature(t2, e2) {
      return this.setKeySignature(t2, e2, wt.END), this;
    }
    setTimeSignature(t2, e2, i2) {
      void 0 === i2 && (i2 = wt.BEGIN);
      const b2 = this.getModifiers(i2, Te.CATEGORY);
      return 0 === b2.length ? this.addTimeSignature(t2, e2, i2) : b2[0].setTimeSig(t2), this;
    }
    setEndTimeSignature(t2, e2) {
      return this.setTimeSignature(t2, e2, wt.END), this;
    }
    addKeySignature(t2, e2, i2) {
      return void 0 === i2 && (i2 = wt.BEGIN), this.addModifier(new _e(t2, e2).setPosition(i2), i2), this;
    }
    addClef(t2, e2, i2, b2) {
      return void 0 === b2 || b2 === wt.BEGIN ? this.clef = t2 : b2 === wt.END && (this.endClef = t2), this.addModifier(new de(t2, e2, i2), b2), this;
    }
    addEndClef(t2, e2, i2) {
      return this.addClef(t2, e2, i2, wt.END), this;
    }
    addTimeSignature(t2, e2, i2) {
      return this.addModifier(new Te(t2, e2), i2), this;
    }
    addEndTimeSignature(t2, e2) {
      return this.addTimeSignature(t2, e2, wt.END), this;
    }
    addTrebleGlyph() {
      return this.addClef("treble"), this;
    }
    getModifiers(t2, e2) {
      const i2 = void 0 === t2, b2 = void 0 === e2;
      return i2 && b2 ? this.modifiers : i2 ? this.modifiers.filter((t3) => e2 === t3.getCategory()) : b2 ? this.modifiers.filter((e3) => t2 === e3.getPosition()) : this.modifiers.filter((i3) => t2 === i3.getPosition() && e2 === i3.getCategory());
    }
    sortByCategory(t2, e2) {
      for (let i2 = t2.length - 1; i2 >= 0; i2--) for (let b2 = 0; b2 < i2; b2++) if (e2[t2[b2].getCategory()] > e2[t2[b2 + 1].getCategory()]) {
        const e3 = t2[b2];
        t2[b2] = t2[b2 + 1], t2[b2 + 1] = e3;
      }
    }
    format() {
      const t2 = this.modifiers[0], e2 = this.modifiers[1], i2 = this.getModifiers(wt.BEGIN), b2 = this.getModifiers(wt.END);
      let a2, n2, l2;
      this.sortByCategory(i2, ve), this.sortByCategory(b2, we), i2.length > 1 && t2.getType() === zt.REPEAT_BEGIN && (i2.push(i2.splice(0, 1)[0]), i2.splice(0, 0, new kt(zt.SINGLE))), b2.indexOf(e2) > 0 && b2.splice(0, 0, new kt(zt.NONE));
      let o2 = 0, r2 = this.x;
      for (let t3 = 0; t3 < i2.length; t3++) l2 = i2[t3], n2 = l2.getPadding(t3 + o2), a2 = l2.getWidth(), r2 += n2, l2.setX(r2), r2 += a2, n2 + a2 === 0 && o2--;
      this.start_x = r2, r2 = this.x + this.width;
      const h2 = { left: 0, right: 0, paddingRight: 0, paddingLeft: 0 };
      let m2 = 0;
      for (let t3 = 0; t3 < b2.length; t3++) {
        l2 = b2[t3], m2 = s(l2) ? t3 : m2, h2.right = 0, h2.left = 0, h2.paddingRight = 0, h2.paddingLeft = 0;
        const e3 = l2.getLayoutMetrics();
        e3 ? (0 !== t3 && (h2.right = e3.xMax || 0, h2.paddingRight = e3.paddingRight || 0), h2.left = -e3.xMin || 0, h2.paddingLeft = e3.paddingLeft || 0, t3 === b2.length - 1 && (h2.paddingLeft = 0)) : (h2.paddingRight = l2.getPadding(t3 - m2), 0 !== t3 && (h2.right = l2.getWidth()), 0 === t3 && (h2.left = l2.getWidth())), r2 -= h2.paddingRight, r2 -= h2.right, l2.setX(r2), r2 -= h2.left, r2 -= h2.paddingLeft;
      }
      this.end_x = 1 === b2.length ? this.x + this.width : r2, this.formatted = true;
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered(), this.applyStyle(), t2.openGroup("stave", this.getAttribute("id")), this.formatted || this.format();
      const e2 = this.options.num_lines, i2 = this.width, b2 = this.x;
      let a2;
      for (let n2 = 0; n2 < e2; n2++) a2 = this.getYForLine(n2), this.options.line_config[n2].visible && (t2.beginPath(), t2.moveTo(b2, a2), t2.lineTo(b2 + i2, a2), t2.stroke());
      t2.closeGroup(), this.restoreStyle();
      for (let e3 = 0; e3 < this.modifiers.length; e3++) {
        const i3 = this.modifiers[e3];
        "function" == typeof i3.draw && (i3.applyStyle(t2), i3.draw(this, this.getModifierXShift(e3)), i3.restoreStyle(t2));
      }
      if (this.measure > 0) {
        t2.save(), t2.setFont(this.textFont);
        const e3 = t2.measureText("" + this.measure).width;
        a2 = this.getYForTopText(0) + 3, t2.fillText("" + this.measure, this.x - e3 / 2, a2), t2.restore();
      }
      return this;
    }
    getVerticalBarWidth() {
      return this.options.vertical_bar_width;
    }
    getConfigForLines() {
      return this.options.line_config;
    }
    setConfigForLine(t2, e2) {
      if (t2 >= this.options.num_lines || t2 < 0) throw new g("StaveConfigError", "The line number must be within the range of the number of lines in the Stave.");
      if (void 0 === e2.visible) throw new g("StaveConfigError", "The line configuration object is missing the 'visible' property.");
      if ("boolean" != typeof e2.visible) throw new g("StaveConfigError", "The line configuration objects 'visible' property must be true or false.");
      return this.options.line_config[t2] = e2, this;
    }
    setConfigForLines(t2) {
      if (t2.length !== this.options.num_lines) throw new g("StaveConfigError", "The length of the lines configuration array must match the number of lines in the Stave");
      for (const e2 in t2) null == t2[e2].visible && (t2[e2] = this.options.line_config[e2]), this.options.line_config[e2] = Object.assign(Object.assign({}, this.options.line_config[e2]), t2[e2]);
      return this.options.line_config = t2, this;
    }
    static formatBegModifiers(t2) {
      const e2 = (e3) => {
        let i3 = 0;
        t2.forEach((t3) => {
          const b3 = t3.getModifiers(wt.BEGIN, e3);
          b3.length > 0 && b3[0].getX() > i3 && (i3 = b3[0].getX());
        });
        let b2 = 0;
        t2.forEach((t3) => {
          b2 = 0;
          t3.getModifiers(wt.BEGIN, e3).forEach((t4) => {
            i3 - t4.getX() > b2 && (b2 = i3 - t4.getX());
          });
          const a2 = t3.getModifiers(wt.BEGIN);
          let n2 = false;
          a2.forEach((t4) => {
            t4.getCategory() === e3 && (n2 = true), n2 && b2 > 0 && t4.setX(t4.getX() + b2);
          }), t3.setNoteStartX(t3.getNoteStartX() + b2);
        });
      };
      t2.forEach((t3) => {
        t3.formatted || t3.format();
      }), e2(x.Clef), e2(x.KeySignature), e2(x.TimeSignature);
      let i2 = 0;
      t2.forEach((t3) => {
        t3.getNoteStartX() > i2 && (i2 = t3.getNoteStartX());
      }), t2.forEach((t3) => {
        t3.setNoteStartX(i2);
      }), i2 = 0, t2.forEach((t3) => {
        t3.getModifiers(wt.BEGIN, x.Barline).forEach((t4) => {
          t4.getType() == zt.REPEAT_BEGIN && t4.getX() > i2 && (i2 = t4.getX());
        });
      }), t2.forEach((t3) => {
        t3.getModifiers(wt.BEGIN, x.Barline).forEach((t4) => {
          t4.getType() == zt.REPEAT_BEGIN && t4.setX(i2);
        });
      });
    }
  }
  function Be(t2, e2, i2, b2, a2) {
    if (e2 !== De.type.BOLD_DOUBLE_LEFT && e2 !== De.type.BOLD_DOUBLE_RIGHT) throw new g("InvalidConnector", "A REPEAT_BEGIN or REPEAT_END type must be provided.");
    let n2 = 3, s2 = 3.5;
    e2 === De.type.BOLD_DOUBLE_RIGHT && (n2 = -5, s2 = 3), t2.fillRect(i2 + n2, b2, 1, a2 - b2), t2.fillRect(i2 - 2, b2, s2, a2 - b2);
  }
  ze.TEXT_FONT = { family: F.SANS_SERIF, size: 8, weight: E.NORMAL, style: P.NORMAL };
  class De extends R {
    static get CATEGORY() {
      return x.StaveConnector;
    }
    constructor(t2, e2) {
      super(), this.thickness = V.STAVE_LINE_THICKNESS, this.width = 3, this.top_stave = t2, this.bottom_stave = e2, this.type = De.type.DOUBLE, this.resetFont(), this.x_shift = 0, this.texts = [];
    }
    setType(t2) {
      const e2 = "string" == typeof t2 ? De.typeString[t2] : t2;
      return Object.values(De.type).includes(e2) && (this.type = e2), this;
    }
    getType() {
      return this.type;
    }
    setText(t2, e2 = {}) {
      return this.texts.push({ content: t2, options: Object.assign({ shift_x: 0, shift_y: 0 }, e2) }), this;
    }
    setXShift(t2) {
      if ("number" != typeof t2) throw new g("InvalidType", "x_shift must be a Number");
      return this.x_shift = t2, this;
    }
    getXShift() {
      return this.x_shift;
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      let e2 = this.top_stave.getYForLine(0), i2 = this.bottom_stave.getYForLine(this.bottom_stave.getNumLines() - 1) + this.thickness, b2 = this.width, a2 = this.top_stave.getX();
      (this.type === De.type.SINGLE_RIGHT || this.type === De.type.BOLD_DOUBLE_RIGHT || this.type === De.type.THIN_DOUBLE) && (a2 = this.top_stave.getX() + this.top_stave.getWidth());
      let n2 = i2 - e2;
      switch (this.type) {
        case De.type.SINGLE:
        case De.type.SINGLE_LEFT:
        case De.type.SINGLE_RIGHT:
          b2 = 1;
          break;
        case De.type.DOUBLE:
          a2 -= this.width + 2, e2 -= this.thickness, n2 += 0.5;
          break;
        case De.type.BRACE: {
          b2 = 12;
          const a3 = this.top_stave.getX() - 2 + this.x_shift, s2 = e2, l2 = a3, o2 = i2, r2 = a3 - b2, h2 = s2 + n2 / 2, m2 = r2 - 0.9 * b2, c2 = s2 + 0.2 * n2, d2 = a3 + 1.1 * b2, _2 = h2 - 0.135 * n2, x2 = d2, g2 = h2 + 0.135 * n2, y2 = m2, p2 = o2 - 0.2 * n2, u2 = r2 - b2, f2 = p2, S2 = a3 + 0.4 * b2, T2 = h2 + 0.135 * n2, v2 = S2, w2 = h2 - 0.135 * n2, z2 = u2, B2 = c2;
          t2.beginPath(), t2.moveTo(a3, s2), t2.bezierCurveTo(m2, c2, d2, _2, r2, h2), t2.bezierCurveTo(x2, g2, y2, p2, l2, o2), t2.bezierCurveTo(u2, f2, S2, T2, r2, h2), t2.bezierCurveTo(v2, w2, z2, B2, a3, s2), t2.fill(), t2.stroke();
          break;
        }
        case De.type.BRACKET:
          e2 -= 6, i2 += 6, n2 = i2 - e2, Z.renderGlyph(t2, a2 - 5, e2, 40, "bracketTop"), Z.renderGlyph(t2, a2 - 5, i2, 40, "bracketBottom"), a2 -= this.width + 2;
          break;
        case De.type.BOLD_DOUBLE_LEFT:
          Be(t2, this.type, a2 + this.x_shift, e2, i2 - this.thickness);
          break;
        case De.type.BOLD_DOUBLE_RIGHT:
          Be(t2, this.type, a2, e2, i2 - this.thickness);
          break;
        case De.type.THIN_DOUBLE:
          b2 = 1, n2 -= this.thickness;
          break;
        case De.type.NONE:
          break;
        default:
          throw new g("InvalidType", `The provided StaveConnector.type (${this.type}) is invalid.`);
      }
      this.type !== De.type.BRACE && this.type !== De.type.BOLD_DOUBLE_LEFT && this.type !== De.type.BOLD_DOUBLE_RIGHT && this.type !== De.type.NONE && t2.fillRect(a2, e2, b2, n2), this.type === De.type.THIN_DOUBLE && t2.fillRect(a2 - 3, e2, b2, n2), t2.save(), t2.setLineWidth(2), t2.setFont(this.textFont);
      for (let e3 = 0; e3 < this.texts.length; e3++) {
        const i3 = this.texts[e3], b3 = t2.measureText("" + i3.content).width, a3 = this.top_stave.getX() - b3 - 24 + i3.options.shift_x, n3 = (this.top_stave.getYForLine(0) + this.bottom_stave.getBottomLineY()) / 2 + i3.options.shift_y;
        t2.fillText("" + i3.content, a3, n3 + 4);
      }
      t2.restore();
    }
  }
  De.TEXT_FONT = { family: F.SERIF, size: 16, weight: E.NORMAL, style: P.NORMAL }, De.type = { SINGLE_RIGHT: 0, SINGLE_LEFT: 1, SINGLE: 1, DOUBLE: 2, BRACE: 3, BRACKET: 4, BOLD_DOUBLE_LEFT: 5, BOLD_DOUBLE_RIGHT: 6, THIN_DOUBLE: 7, NONE: 8 }, De.typeString = { singleRight: De.type.SINGLE_RIGHT, singleLeft: De.type.SINGLE_LEFT, single: De.type.SINGLE, double: De.type.DOUBLE, brace: De.type.BRACE, bracket: De.type.BRACKET, boldDoubleLeft: De.type.BOLD_DOUBLE_LEFT, boldDoubleRight: De.type.BOLD_DOUBLE_RIGHT, thinDouble: De.type.THIN_DOUBLE, none: De.type.NONE };
  class Ce {
    static getNextContext(t2) {
      const e2 = t2.tContexts, i2 = e2.indexOf(t2);
      if (i2 + 1 < e2.length) return e2[i2 + 1];
    }
    constructor(t2) {
      this.preFormatted = false, this.postFormatted = false, this.tickID = t2 && t2.tickID ? t2.tickID : 0, this.currentTick = new z(0, 1), this.maxTicks = new z(0, 1), this.maxTickable = void 0, this.minTicks = void 0, this.minTickable = void 0, this.padding = 1, this.x = 0, this.xBase = 0, this.xOffset = 0, this.tickables = [], this.tickablesByVoice = {}, this.notePx = 0, this.glyphPx = 0, this.leftDisplacedHeadPx = 0, this.rightDisplacedHeadPx = 0, this.modLeftPx = 0, this.modRightPx = 0, this.totalLeftPx = 0, this.totalRightPx = 0, this.tContexts = [], this.width = 0, this.formatterMetrics = { freedom: { left: 0, right: 0 } };
    }
    getTickID() {
      return this.tickID;
    }
    getX() {
      return this.x;
    }
    setX(t2) {
      return this.x = t2, this.xBase = t2, this.xOffset = 0, this;
    }
    getXBase() {
      return this.xBase;
    }
    setXBase(t2) {
      this.xBase = t2, this.x = t2 + this.xOffset;
    }
    getXOffset() {
      return this.xOffset;
    }
    setXOffset(t2) {
      this.xOffset = t2, this.x = this.xBase + t2;
    }
    getWidth() {
      return this.width + 2 * this.padding;
    }
    setPadding(t2) {
      return this.padding = t2, this;
    }
    getMaxTicks() {
      return this.maxTicks;
    }
    getMinTicks() {
      return this.minTicks;
    }
    getMaxTickable() {
      return this.maxTickable;
    }
    getMinTickable() {
      return this.minTickable;
    }
    getTickables() {
      return this.tickables;
    }
    getTickableForVoice(t2) {
      return this.tickablesByVoice[t2];
    }
    getTickablesByVoice() {
      return this.tickablesByVoice;
    }
    getCenterAlignedTickables() {
      return this.tickables.filter((t2) => t2.isCenterAligned());
    }
    getMetrics() {
      const { width: t2, glyphPx: e2, notePx: i2, leftDisplacedHeadPx: b2, rightDisplacedHeadPx: a2, modLeftPx: n2, modRightPx: s2, totalLeftPx: l2, totalRightPx: o2 } = this;
      return { width: t2, glyphPx: e2, notePx: i2, leftDisplacedHeadPx: b2, rightDisplacedHeadPx: a2, modLeftPx: n2, modRightPx: s2, totalLeftPx: l2, totalRightPx: o2 };
    }
    getCurrentTick() {
      return this.currentTick;
    }
    setCurrentTick(t2) {
      this.currentTick = t2, this.preFormatted = false;
    }
    addTickable(t2, e2) {
      if (!t2) throw new g("BadArgument", "Invalid tickable added.");
      if (!t2.shouldIgnoreTicks()) {
        const e3 = t2.getTicks();
        e3.greaterThan(this.maxTicks) && (this.maxTicks = e3.clone(), this.maxTickable = t2), (null == this.minTicks || e3.lessThan(this.minTicks)) && (this.minTicks = e3.clone(), this.minTickable = t2);
      }
      return t2.setTickContext(this), this.tickables.push(t2), this.tickablesByVoice[e2 || 0] = t2, this.preFormatted = false, this;
    }
    preFormat() {
      if (this.preFormatted) return this;
      for (let t2 = 0; t2 < this.tickables.length; ++t2) {
        const e2 = this.tickables[t2];
        e2.preFormat();
        const i2 = e2.getMetrics();
        this.leftDisplacedHeadPx = Math.max(this.leftDisplacedHeadPx, i2.leftDisplacedHeadPx), this.rightDisplacedHeadPx = Math.max(this.rightDisplacedHeadPx, i2.rightDisplacedHeadPx), this.notePx = Math.max(this.notePx, i2.notePx), this.glyphPx = Math.max(this.glyphPx, i2.glyphWidth || 0), this.modLeftPx = Math.max(this.modLeftPx, i2.modLeftPx), this.modRightPx = Math.max(this.modRightPx, i2.modRightPx), this.totalLeftPx = Math.max(this.totalLeftPx, i2.modLeftPx + i2.leftDisplacedHeadPx), this.totalRightPx = Math.max(this.totalRightPx, i2.modRightPx + i2.rightDisplacedHeadPx), this.width = this.notePx + this.totalLeftPx + this.totalRightPx;
      }
      return this;
    }
    postFormat() {
      return this.postFormatted || (this.postFormatted = true), this;
    }
    getFormatterMetrics() {
      return this.formatterMetrics;
    }
  }
  function Ee(t2, e2, i2, b2) {
    let a2 = e2;
    for (let e3 = i2 + 1; e3 < t2.length; e3++) {
      const i3 = t2[e3];
      if (h(i3) && !i3.isRest() && !i3.shouldIgnoreTicks()) {
        a2 = i3.getLineForRest();
        break;
      }
    }
    if (b2 && e2 !== a2) {
      a2 = S(Math.max(e2, a2), Math.min(e2, a2));
    }
    return a2;
  }
  class Pe {
    static SimpleFormat(t2, e2 = 0, { paddingBetween: i2 = 10 } = {}) {
      t2.reduce((t3, e3) => {
        e3.addToModifierContext(new ce());
        const b2 = new Ce().addTickable(e3).preFormat(), a2 = b2.getMetrics();
        return b2.setX(t3 + a2.totalLeftPx), t3 + b2.getWidth() + a2.totalRightPx + i2;
      }, e2);
    }
    static plotDebugging(t2, e2, i2, b2, a2, n2) {
      const s2 = i2 + (n2 = Object.assign({ stavePadding: V.currentMusicFont().lookupMetric("stave.padding") }, n2)).stavePadding, l2 = e2.contextGaps;
      t2.save(), t2.setFont(F.SANS_SERIF, 8), l2.gaps.forEach((e3) => {
        var i3, n3, l3;
        i3 = s2 + e3.x1, n3 = s2 + e3.x2, l3 = "rgba(100,200,100,0.4)", t2.beginPath(), t2.setStrokeStyle(l3), t2.setFillStyle(l3), t2.setLineWidth(1), t2.fillRect(i3, b2, Math.max(n3 - i3, 0), a2 - b2), t2.setFillStyle("green"), t2.fillText(Math.round(e3.x2 - e3.x1).toString(), s2 + e3.x1, a2 + 12);
      }), t2.setFillStyle("red"), t2.fillText(`Loss: ${(e2.totalCost || 0).toFixed(2)} Shift: ${(e2.totalShift || 0).toFixed(2)} Gap: ${l2.total.toFixed(2)}`, s2 - 20, a2 + 27), t2.restore();
    }
    static FormatAndDraw(t2, e2, i2, b2) {
      let a2 = { auto_beam: false, align_rests: false };
      "object" == typeof b2 ? a2 = Object.assign(Object.assign({}, a2), b2) : "boolean" == typeof b2 && (a2.auto_beam = b2);
      const n2 = new Xt(V.TIME4_4).setMode(Xt.Mode.SOFT).addTickables(i2), s2 = a2.auto_beam ? Re.applyAndGetBeams(n2) : [];
      return new Pe().joinVoices([n2]).formatToStave([n2], e2, { align_rests: a2.align_rests, stave: e2 }), n2.setStave(e2).draw(t2, e2), s2.forEach((e3) => e3.setContext(t2).draw()), n2.getBoundingBox();
    }
    static FormatAndDrawTab(t2, e2, i2, b2, a2, n2, s2) {
      let l2 = { auto_beam: n2, align_rests: false };
      "object" == typeof s2 ? l2 = Object.assign(Object.assign({}, l2), s2) : "boolean" == typeof s2 && (l2.auto_beam = s2);
      const o2 = new Xt(V.TIME4_4).setMode(Xt.Mode.SOFT).addTickables(a2), r2 = new Xt(V.TIME4_4).setMode(Xt.Mode.SOFT).addTickables(b2), h2 = l2.auto_beam ? Re.applyAndGetBeams(o2) : [];
      new Pe().joinVoices([o2]).joinVoices([r2]).formatToStave([o2, r2], i2, { align_rests: l2.align_rests }), o2.draw(t2, i2), r2.draw(t2, e2), h2.forEach((e3) => e3.setContext(t2).draw()), new De(i2, e2).setContext(t2).draw();
    }
    static AlignRestsToNotes(t2, e2, i2) {
      t2.forEach((b2, a2) => {
        if (c(b2) && b2.isRest()) {
          if (b2.getTuplet() && !i2) return;
          const n2 = b2.getGlyphProps().position.toUpperCase();
          if ("R/4" !== n2 && "B/4" !== n2) return;
          if (e2 || b2.getBeam()) {
            const e3 = b2.getKeyProps()[0];
            if (0 === a2) e3.line = Ee(t2, e3.line, a2, false);
            else if (a2 > 0 && a2 < t2.length) {
              const i3 = t2[a2 - 1];
              if (c(i3)) if (i3.isRest()) e3.line = i3.getKeyProps()[0].line;
              else {
                const b3 = i3.getLineForRest();
                e3.line = Ee(t2, b3, a2, true);
              }
            }
            b2.setKeyLine(0, e3.line);
          }
        }
      });
    }
    constructor(t2) {
      this.formatterOptions = Object.assign({ globalSoftmax: false, softmaxFactor: V.SOFTMAX_FACTOR, maxIterations: 5 }, t2), this.justifyWidth = 0, this.totalCost = 0, this.totalShift = 0, this.durationStats = {}, this.minTotalWidth = 0, this.hasMinTotalWidth = false, this.tickContexts = { map: {}, array: [], list: [], resolutionMultiplier: 0 }, this.modifierContexts = [], this.contextGaps = { total: 0, gaps: [] }, this.voices = [], this.lossHistory = [];
    }
    alignRests(t2, e2) {
      if (!t2 || !t2.length) throw new g("BadArgument", "No voices to format rests");
      t2.forEach((t3) => Pe.AlignRestsToNotes(t3.getTickables(), e2));
    }
    preCalculateMinTotalWidth(t2) {
      const e2 = V.currentMusicFont().lookupMetric("stave.unalignedNotePadding");
      let i2 = 0, b2 = 0, a2 = 0;
      const n2 = [], s2 = [];
      if (this.hasMinTotalWidth) return this.minTotalWidth;
      if (!t2) throw new g("BadArgument", "'voices' required to run preCalculateMinTotalWidth");
      this.createTickContexts(t2);
      const { list: l2, map: o2 } = this.tickContexts;
      this.minTotalWidth = 0, l2.forEach((e3) => {
        const l3 = o2[e3];
        l3.preFormat(), l3.getTickables().length < t2.length && (i2 += 1), l3.getTickables().forEach((t3) => {
          b2 += t3.getMetrics().width, a2 += t3.getTicks().value(), n2.push(t3.getMetrics().width), s2.push(t3.getTicks().value());
        });
        const r3 = l3.getWidth();
        this.minTotalWidth += r3;
      }), this.hasMinTotalWidth = true;
      const r2 = b2 > 0 ? b2 / n2.length : 1 / n2.length, h2 = w(n2.map((t3) => Math.pow(t3 - r2, 2))), m2 = Math.pow(h2 / n2.length, 0.5) / r2, c2 = a2 / s2.length, d2 = w(s2.map((t3) => Math.pow(t3 - c2, 2))), _2 = Math.pow(d2 / s2.length, 0.5) / c2, x2 = Math.max(_2, m2) * l2.length * e2, y2 = e2 * i2;
      return this.minTotalWidth + Math.max(y2, x2);
    }
    getMinTotalWidth() {
      if (!this.hasMinTotalWidth) throw new g("NoMinTotalWidth", "Call 'preCalculateMinTotalWidth' or 'preFormat' before calling 'getMinTotalWidth'");
      return this.minTotalWidth;
    }
    static getResolutionMultiplier(t2) {
      if (!t2 || !t2.length) throw new g("BadArgument", "No voices to format");
      const e2 = t2[0].getTotalTicks();
      return t2.reduce((t3, i2) => {
        if (!i2.getTotalTicks().equals(e2)) throw new g("TickMismatch", "Voices should have same total note duration in ticks.");
        if (i2.getMode() === Xt.Mode.STRICT && !i2.isComplete()) throw new g("IncompleteVoice", "Voice does not have enough notes.");
        return Math.max(t3, z.LCM(t3, i2.getResolutionMultiplier()));
      }, 1);
    }
    createModifierContexts(t2) {
      if (0 == t2.length) return;
      const e2 = Pe.getResolutionMultiplier(t2), i2 = /* @__PURE__ */ new Map(), b2 = [];
      t2.forEach((t3) => {
        const a2 = new z(0, e2);
        t3.getTickables().forEach((t4) => {
          const e3 = a2.numerator;
          let n2 = i2.get(t4.getStave());
          if (n2 || (i2.set(t4.getStave(), {}), n2 = i2.get(t4.getStave())), !(n2 ? n2[e3] : void 0)) {
            const t5 = new ce();
            b2.push(t5), n2[e3] = t5;
          }
          t4.addToModifierContext(n2[e3]), a2.add(t4.getTicks());
        });
      }), this.modifierContexts.push({ map: i2, array: b2, resolutionMultiplier: e2 });
    }
    createTickContexts(t2) {
      const e2 = function(t3, e3, i3) {
        if (0 == t3.length) return { map: {}, array: [], list: [], resolutionMultiplier: 0 };
        const b2 = {}, a2 = [], n2 = [], s2 = Pe.getResolutionMultiplier(t3);
        return t3.forEach((t4, l2) => {
          const o2 = new z(0, s2);
          t4.getTickables().forEach((t5) => {
            const s3 = o2.numerator;
            if (!b2[s3]) {
              const t6 = e3({ tickID: s3 });
              n2.push(t6), b2[s3] = t6, a2.push(s3);
            }
            i3(t5, b2[s3], l2), o2.add(t5.getTicks());
          });
        }), { map: b2, array: n2, list: a2.sort((t4, e4) => t4 - e4), resolutionMultiplier: s2 };
      }(t2, (t3) => new Ce(t3), (t3, e3, i3) => e3.addTickable(t3, i3));
      this.tickContexts = e2;
      const i2 = this.tickContexts.array;
      return i2.forEach((t3) => {
        t3.tContexts = i2;
      }), e2;
    }
    getTickContexts() {
      return this.tickContexts;
    }
    preFormat(t2 = 0, e2, i2, b2) {
      const a2 = this.tickContexts;
      if (!a2) throw new g("NoTickContexts", "preFormat requires TickContexts");
      const { list: n2, map: s2 } = a2;
      this.lossHistory = [], i2 && b2 && i2.forEach((t3) => t3.setStave(b2).preFormat());
      let l2 = 0, o2 = 0;
      this.minTotalWidth = 0;
      let r2 = 0;
      n2.forEach((t3) => {
        const e3 = s2[t3];
        e3.preFormat();
        const i3 = e3.getWidth();
        this.minTotalWidth += i3;
        const b3 = e3.getMaxTicks().value();
        r2 += b3;
        const a3 = e3.getMetrics();
        l2 = l2 + o2 + a3.totalLeftPx, e3.setX(l2), o2 = i3 - a3.totalLeftPx;
      });
      const { globalSoftmax: h2, softmaxFactor: m2, maxIterations: c2 } = this.formatterOptions, d2 = w(n2.map((t3) => Math.pow(m2, s2[t3].getMaxTicks().value() / r2)));
      if (this.minTotalWidth = l2 + o2, this.hasMinTotalWidth = true, t2 <= 0) return this.evaluate();
      const _2 = s2[n2[0]], x2 = s2[n2[n2.length - 1]];
      function y2(t3) {
        return n2.map((e3, i3) => {
          const b3 = s2[e3], a3 = b3.getTickablesByVoice();
          let l3;
          if (i3 > 0) {
            const e4 = s2[n2[i3 - 1]];
            for (let o3 = i3 - 1; o3 >= 0; o3--) {
              const i4 = s2[n2[o3]].getTickablesByVoice(), c3 = [];
              if (Object.keys(a3).forEach((t4) => {
                i4[t4] && c3.push(t4);
              }), c3.length > 0) {
                let n3 = 0, s3 = 1 / 0, o4 = 0;
                if (c3.forEach((t4) => {
                  const e5 = i4[t4].getTicks().value();
                  e5 > n3 && (l3 = i4[t4], n3 = e5);
                  const b4 = a3[t4], o5 = b4.getX() - (b4.getMetrics().modLeftPx + b4.getMetrics().leftDisplacedHeadPx), r3 = i4[t4].getMetrics(), h3 = i4[t4].getX() + r3.notePx + r3.modRightPx + r3.rightDisplacedHeadPx;
                  s3 = Math.min(s3, o5 - h3);
                }), s3 = Math.min(s3, b3.getX() - (e4.getX() + 0.05 * t3)), h2) {
                  const e5 = r2;
                  o4 = Math.pow(m2, n3 / e5) / d2 * t3;
                } else void 0 !== l3 && (o4 = l3.getVoice().softmax(n3) * t3);
                return { expectedDistance: o4, maxNegativeShiftPx: s3, fromTickable: l3 };
              }
            }
          }
          return { expectedDistance: 0, fromTickablePx: 0, maxNegativeShiftPx: 0 };
        });
      }
      function u2(t3) {
        const e3 = f2 / 2;
        let i3 = 0;
        return n2.forEach((b3, a3) => {
          const n3 = s2[b3];
          if (a3 > 0) {
            const e4 = n3.getX(), b4 = t3[a3], s3 = p(b4.fromTickable).getX() + b4.expectedDistance - (e4 + i3);
            let l3 = 0;
            s3 > 0 ? i3 += s3 : s3 < 0 && (l3 = Math.min(b4.maxNegativeShiftPx, Math.abs(s3)), i3 += -l3), n3.setX(e4 + i3);
          }
          n3.getCenterAlignedTickables().forEach((t4) => {
            t4.setCenterXShift(e3 - n3.getX());
          });
        }), x2.getX() - _2.getX();
      }
      const f2 = t2 - x2.getMetrics().notePx - x2.getMetrics().totalRightPx - _2.getMetrics().totalLeftPx, S2 = V.currentMusicFont(), T2 = S2.lookupMetric("stave.endPaddingMin"), v2 = S2.lookupMetric("stave.endPaddingMax"), z2 = S2.lookupMetric("stave.padding");
      let B2 = f2;
      const D2 = y2(B2);
      let C2 = u2(D2);
      if (1 === n2.length) return 0;
      const E2 = ((t3, e3) => {
        let i3 = t3 / 2;
        if (e3.length > 1) for (let t4 = 1; t4 < e3.length; ++t4) i3 = Math.min(e3[t4].expectedDistance / 2, i3);
        return i3;
      })(B2, D2), P2 = (t3) => {
        let e3 = 0;
        const i3 = x2 && x2.getMaxTickable();
        if (i3) {
          const b3 = i3.getVoice();
          if (b3.getTicksUsed().value() > b3.getTotalTicks().value()) return 2 * v2 < E2 ? E2 : v2;
          const a3 = i3.getWidth();
          e3 = b3.softmax(x2.getMaxTicks().value()) * t3 - (a3 + z2);
        }
        return 2 * v2 < e3 ? e3 : v2;
      };
      let k2 = P2(B2), A2 = k2 - (v2 - T2);
      const N2 = f2 - A2;
      let F2 = c2;
      for (; C2 > N2 && F2 > 0 || C2 + k2 < N2 && F2 > 1; ) B2 -= C2 - N2, k2 = P2(B2), A2 = k2 - (v2 - T2), C2 = u2(y2(B2)), F2--;
      return this.justifyWidth = t2, this.evaluate();
    }
    evaluate() {
      const t2 = this.tickContexts, e2 = this.justifyWidth;
      this.contextGaps = { total: 0, gaps: [] }, t2.list.forEach((e3, i3) => {
        if (0 === i3) return;
        const b3 = t2.list[i3 - 1], a2 = t2.map[b3], n2 = t2.map[e3], s2 = a2.getMetrics(), l2 = n2.getMetrics(), o2 = a2.getX() + s2.notePx + s2.totalRightPx, r2 = n2.getX() - l2.totalLeftPx, h2 = r2 - o2;
        this.contextGaps.total += h2, this.contextGaps.gaps.push({ x1: o2, x2: r2 }), n2.getFormatterMetrics().freedom.left = h2, a2.getFormatterMetrics().freedom.right = h2;
      }), this.durationStats = {};
      const i2 = this.durationStats;
      this.voices.forEach((t3) => {
        t3.getTickables().forEach((t4, b3, a2) => {
          const n2 = t4.getTicks().clone().simplify().toString(), s2 = t4.getMetrics(), l2 = t4.getFormatterMetrics(), o2 = t4.getX() + s2.notePx + s2.modRightPx + s2.rightDisplacedHeadPx;
          let r2 = 0;
          if (b3 < a2.length - 1) {
            const e3 = a2[b3 + 1], i3 = e3.getMetrics();
            r2 = e3.getX() - i3.modLeftPx - i3.leftDisplacedHeadPx - o2, l2.space.used = e3.getX() - t4.getX(), e3.getFormatterMetrics().freedom.left = r2;
          } else r2 = e2 - o2, l2.space.used = e2 - t4.getX();
          l2.freedom.right = r2, function(t5, e3) {
            const b4 = i2[t5];
            void 0 === b4 ? i2[t5] = { mean: e3, count: 1 } : (b4.count += 1, b4.mean = (b4.mean + e3) / 2);
          }(n2, l2.space.used);
        });
      });
      let b2 = 0;
      return this.voices.forEach((t3) => {
        t3.getTickables().forEach((t4) => {
          const e3 = t4.getTicks().clone().simplify().toString(), a2 = t4.getFormatterMetrics();
          a2.space.mean = i2[e3].mean, a2.duration = e3, a2.iterations += 1, a2.space.deviation = a2.space.used - a2.space.mean, b2 += Math.pow(a2.space.deviation, 2);
        });
      }), this.totalCost = Math.sqrt(b2), this.lossHistory.push(this.totalCost), this.totalCost;
    }
    tune(t2) {
      var e2;
      const i2 = this.tickContexts;
      if (!i2) return 0;
      const b2 = null !== (e2 = null == t2 ? void 0 : t2.alpha) && void 0 !== e2 ? e2 : 0.5;
      let a2 = 0;
      return this.totalShift = 0, i2.list.forEach((t3, e3, n2) => {
        const s2 = i2.map[t3], l2 = e3 > 0 ? i2.map[n2[e3 - 1]] : void 0, o2 = e3 < n2.length - 1 ? i2.map[n2[e3 + 1]] : void 0;
        !function(t4, e4, i3, b3) {
          t4.setX(t4.getX() + e4), t4.getFormatterMetrics().freedom.left += e4, t4.getFormatterMetrics().freedom.right -= e4, i3 && (i3.getFormatterMetrics().freedom.right += e4), b3 && (b3.getFormatterMetrics().freedom.left -= e4);
        }(s2, a2, l2, o2);
        const r2 = -w(s2.getTickables().map((t4) => t4.getFormatterMetrics().space.deviation));
        r2 > 0 ? a2 = -Math.min(s2.getFormatterMetrics().freedom.right, Math.abs(r2)) : r2 < 0 && (a2 = o2 ? Math.min(o2.getFormatterMetrics().freedom.right, Math.abs(r2)) : 0), a2 *= b2, this.totalShift += a2;
      }), this.evaluate();
    }
    postFormat() {
      return this.modifierContexts.forEach((t2) => {
        t2.array.forEach((t3) => t3.postFormat());
      }), this.tickContexts.list.forEach((t2) => {
        this.tickContexts.map[t2].postFormat();
      }), this;
    }
    joinVoices(t2) {
      return this.createModifierContexts(t2), this.hasMinTotalWidth = false, this;
    }
    format(t2, e2, i2) {
      const b2 = Object.assign({ align_rests: false }, i2);
      this.voices = t2;
      const a2 = this.formatterOptions.softmaxFactor;
      return a2 && this.voices.forEach((t3) => t3.setSoftmaxFactor(a2)), this.alignRests(t2, b2.align_rests), this.createTickContexts(t2), this.preFormat(e2, b2.context, t2, b2.stave), b2.stave && this.postFormat(), this;
    }
    formatToStave(t2, e2, i2) {
      const b2 = Object.assign({ context: e2.getContext() }, i2), a2 = e2.getNoteEndX() - e2.getNoteStartX() - ze.defaultPadding;
      return function(...t3) {
        Pe.DEBUG && u("Vex.Flow.Formatter", t3);
      }("Formatting voices to width: ", a2), this.format(t2, a2, b2);
    }
    getTickContext(t2) {
      var e2;
      return null === (e2 = this.tickContexts) || void 0 === e2 ? void 0 : e2.map[t2];
    }
  }
  var ke;
  Pe.DEBUG = false, function(t2) {
    t2[t2.BOTTOM = -1] = "BOTTOM", t2[t2.TOP = 1] = "TOP";
  }(ke || (ke = {}));
  class Ae extends R {
    static get CATEGORY() {
      return x.Tuplet;
    }
    static get LOCATION_TOP() {
      return ke.TOP;
    }
    static get LOCATION_BOTTOM() {
      return ke.BOTTOM;
    }
    static get NESTING_OFFSET() {
      return 15;
    }
    static get metrics() {
      const t2 = V.currentMusicFont().getMetrics().tuplet;
      if (!t2) throw new g("BadMetrics", "tuplet missing");
      return t2;
    }
    constructor(t2, e2 = {}) {
      if (super(), this.numerator_glyphs = [], this.denom_glyphs = [], !t2 || !t2.length) throw new g("BadArguments", "No notes provided for tuplet.");
      this.options = e2, this.notes = t2, this.num_notes = null != this.options.num_notes ? this.options.num_notes : t2.length, this.options.beats_occupied && this.beatsOccupiedDeprecationWarning(), this.notes_occupied = this.options.notes_occupied || this.options.beats_occupied || 2, null != this.options.bracketed ? this.bracketed = this.options.bracketed : this.bracketed = t2.some((t3) => !t3.hasBeam()), this.ratioed = null != this.options.ratioed ? this.options.ratioed : Math.abs(this.notes_occupied - this.num_notes) > 1, this.point = 3 * V.NOTATION_FONT_SCALE / 5, this.y_pos = 16, this.x_pos = 100, this.width = 200, this.setTupletLocation(this.options.location || Ae.LOCATION_TOP), Pe.AlignRestsToNotes(t2, true, true), this.resolveGlyphs(), this.attach();
    }
    attach() {
      for (let t2 = 0; t2 < this.notes.length; t2++) {
        this.notes[t2].setTuplet(this);
      }
    }
    detach() {
      for (let t2 = 0; t2 < this.notes.length; t2++) {
        this.notes[t2].resetTuplet(this);
      }
    }
    setBracketed(t2) {
      return this.bracketed = !!t2, this;
    }
    setRatioed(t2) {
      return this.ratioed = !!t2, this;
    }
    setTupletLocation(t2) {
      return t2 !== Ae.LOCATION_TOP && t2 !== Ae.LOCATION_BOTTOM && (console.warn(`Invalid tuplet location [${t2}]. Using Tuplet.LOCATION_TOP.`), t2 = Ae.LOCATION_TOP), this.location = t2, this;
    }
    getNotes() {
      return this.notes;
    }
    getNoteCount() {
      return this.num_notes;
    }
    beatsOccupiedDeprecationWarning() {
      console.warn("beats_occupied has been deprecated as an option for tuplets. Please use notes_occupied instead.", "Calls to getBeatsOccupied / setBeatsOccupied should now be routed to getNotesOccupied / setNotesOccupied.", "The old methods will be removed in VexFlow 5.0.");
    }
    getBeatsOccupied() {
      return this.beatsOccupiedDeprecationWarning(), this.getNotesOccupied();
    }
    setBeatsOccupied(t2) {
      return this.beatsOccupiedDeprecationWarning(), this.setNotesOccupied(t2);
    }
    getNotesOccupied() {
      return this.notes_occupied;
    }
    setNotesOccupied(t2) {
      this.detach(), this.notes_occupied = t2, this.resolveGlyphs(), this.attach();
    }
    resolveGlyphs() {
      this.numerator_glyphs = [];
      let t2 = this.num_notes;
      for (; t2 >= 1; ) this.numerator_glyphs.unshift(new Z("timeSig" + t2 % 10, this.point)), t2 = parseInt((t2 / 10).toString(), 10);
      for (this.denom_glyphs = [], t2 = this.notes_occupied; t2 >= 1; ) this.denom_glyphs.unshift(new Z("timeSig" + t2 % 10, this.point)), t2 = parseInt((t2 / 10).toString(), 10);
    }
    getNestedTupletCount() {
      const t2 = this.location, e2 = this.notes[0];
      let i2 = a2(e2, t2), b2 = a2(e2, t2);
      function a2(t3, e3) {
        return t3.getTupletStack().filter((t4) => t4.location === e3).length;
      }
      return this.notes.forEach((e3) => {
        const n2 = a2(e3, t2);
        i2 = n2 > i2 ? n2 : i2, b2 = n2 < b2 ? n2 : b2;
      }), i2 - b2;
    }
    getYPosition() {
      const t2 = this.getNestedTupletCount() * Ae.NESTING_OFFSET * -this.location, e2 = this.options.y_offset || 0, i2 = this.notes[0];
      let b2;
      if (this.location === Ae.LOCATION_TOP) {
        b2 = i2.checkStave().getYForLine(0) - Ae.metrics.topModifierOffset;
        for (let t3 = 0; t3 < this.notes.length; ++t3) {
          const e3 = this.notes[t3];
          let i3 = 0;
          const a2 = e3.getModifierContext();
          a2 && (i3 = Math.max(i3, a2.getState().top_text_line));
          const n2 = e3.getYForTopText(i3) - Ae.metrics.noteHeadOffset;
          if (e3.hasStem() || e3.isRest()) {
            const t4 = e3.getStemDirection() === at.UP ? e3.getStemExtents().topY - Ae.metrics.stemOffset : e3.getStemExtents().baseY - Ae.metrics.noteHeadOffset;
            b2 = Math.min(t4, b2), i3 > 0 && (b2 = Math.min(n2, b2));
          }
        }
      } else {
        let t3 = Ae.metrics.bottomLine;
        this.notes.forEach((e3) => {
          const i3 = e3.getModifierContext();
          i3 && (t3 = Math.max(t3, i3.getState().text_line + 1));
        }), b2 = i2.checkStave().getYForLine(t3) + Ae.metrics.noteHeadOffset;
        for (let t4 = 0; t4 < this.notes.length; ++t4) if (this.notes[t4].hasStem() || this.notes[t4].isRest()) {
          const e3 = this.notes[t4].getStemDirection() === at.UP ? this.notes[t4].getStemExtents().baseY + Ae.metrics.noteHeadOffset : this.notes[t4].getStemExtents().topY + Ae.metrics.stemOffset;
          e3 > b2 && (b2 = e3);
        }
      }
      return b2 + t2 + e2;
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      const e2 = this.notes[0], i2 = this.notes[this.notes.length - 1];
      this.bracketed ? (this.x_pos = e2.getTieLeftX() - 5, this.width = i2.getTieRightX() - this.x_pos + 5) : (this.x_pos = e2.getStemX(), this.width = i2.getStemX() - this.x_pos), this.y_pos = this.getYPosition();
      const b2 = (t3, e3) => t3 + p(e3.getMetrics().width);
      let a2 = this.numerator_glyphs.reduce(b2, 0);
      this.ratioed && (a2 = this.denom_glyphs.reduce(b2, a2), a2 += 0.32 * this.point);
      const n2 = this.x_pos + this.width / 2 - a2 / 2;
      if (this.bracketed) {
        const e3 = this.width / 2 - a2 / 2 - 5;
        e3 > 0 && (t2.fillRect(this.x_pos, this.y_pos, e3, 1), t2.fillRect(this.x_pos + this.width / 2 + a2 / 2 + 5, this.y_pos, e3, 1), t2.fillRect(this.x_pos, this.y_pos + (this.location === Ae.LOCATION_BOTTOM ? 1 : 0), 1, 10 * this.location), t2.fillRect(this.x_pos + this.width, this.y_pos + (this.location === Ae.LOCATION_BOTTOM ? 1 : 0), 1, 10 * this.location));
      }
      const s2 = V.currentMusicFont().lookupMetric("digits.shiftY", 0);
      let l2 = 0;
      if (this.numerator_glyphs.forEach((e3) => {
        e3.render(t2, n2 + l2, this.y_pos + this.point / 3 - 2 + s2), l2 += p(e3.getMetrics().width);
      }), this.ratioed) {
        const e3 = n2 + l2 + 0.16 * this.point, i3 = 0.06 * this.point;
        t2.beginPath(), t2.arc(e3, this.y_pos - 0.08 * this.point, i3, 0, 2 * Math.PI, false), t2.closePath(), t2.fill(), t2.beginPath(), t2.arc(e3, this.y_pos + 0.12 * this.point, i3, 0, 2 * Math.PI, false), t2.closePath(), t2.fill(), l2 += 0.32 * this.point, this.denom_glyphs.forEach((e4) => {
          e4.render(t2, n2 + l2, this.y_pos + this.point / 3 - 2 + s2), l2 += p(e4.getMetrics().width);
        });
      }
    }
  }
  function Ne(t2) {
    let e2 = 0;
    return t2.forEach((t3) => {
      t3.keyProps && t3.keyProps.forEach((t4) => {
        e2 += t4.line - 3;
      });
    }), e2 >= 0 ? at.DOWN : at.UP;
  }
  const Fe = "L", Me = "R", Oe = "B";
  class Re extends R {
    static get CATEGORY() {
      return x.Beam;
    }
    getStemDirection() {
      return this.stem_direction;
    }
    static getDefaultBeamGroups(t2) {
      t2 && "c" !== t2 || (t2 = "4/4");
      const e2 = { "1/2": ["1/2"], "2/2": ["1/2"], "3/2": ["1/2"], "4/2": ["1/2"], "1/4": ["1/4"], "2/4": ["1/4"], "3/4": ["1/4"], "4/4": ["1/4"], "1/8": ["1/8"], "2/8": ["2/8"], "3/8": ["3/8"], "4/8": ["2/8"], "1/16": ["1/16"], "2/16": ["2/16"], "3/16": ["3/16"], "4/16": ["2/16"] }[t2];
      if (void 0 !== e2) return e2.map((t3) => new z().parse(t3));
      {
        const e3 = parseInt(t2.split("/")[0], 10), i2 = parseInt(t2.split("/")[1], 10);
        if (e3 % 3 == 0) return [new z(3, i2)];
        if (i2 > 4) return [new z(2, i2)];
        if (i2 <= 4) return [new z(1, i2)];
      }
      return [new z(1, 4)];
    }
    static applyAndGetBeams(t2, e2, i2) {
      return Re.generateBeams(t2.getTickables(), { groups: i2, stem_direction: e2 });
    }
    static generateBeams(t2, e2 = {}) {
      e2.groups && e2.groups.length || (e2.groups = [new z(2, 8)]);
      const i2 = e2.groups.map((t3) => {
        if (!t3.multiply) throw new g("InvalidBeamGroups", "The beam groups must be an array of Vex.Flow.Fractions");
        return t3.clone().multiply(V.RESOLUTION, 1);
      }), b2 = t2;
      let a2 = 0, n2 = [], s2 = [];
      function l2() {
        i2.length - 1 > a2 ? a2 += 1 : a2 = 0;
      }
      !function() {
        let t3 = [], e3 = new z(0, 1);
        b2.forEach((b3) => {
          if (t3 = [], b3.shouldIgnoreTicks()) return n2.push(s2), void (s2 = t3);
          s2.push(b3);
          const o3 = i2[a2].clone(), r3 = (h3 = s2, h3.reduce((t4, e4) => e4.getTicks().clone().add(t4), new z(0, 1))).add(e3);
          var h3;
          const m2 = V.durationToNumber(b3.getDuration()) < 8;
          if (m2 && b3.getTuplet() && (o3.numerator *= 2), r3.greaterThan(o3)) {
            if (!m2) {
              const e4 = s2.pop();
              e4 && t3.push(e4);
            }
            n2.push(s2);
            do {
              e3 = r3.subtract(i2[a2]), l2();
            } while (e3.greaterThanEquals(i2[a2]));
            s2 = t3;
          } else r3.equals(o3) && (n2.push(s2), e3 = new z(0, 1), s2 = t3, l2());
        }), s2.length > 0 && n2.push(s2);
      }(), function() {
        const t3 = [];
        n2.forEach((i3) => {
          let b3 = [];
          i3.forEach((i4, a3, n3) => {
            const s3 = 0 === a3 || a3 === n3.length - 1, l3 = n3[a3 - 1], o3 = !e2.beam_rests && i4.isRest(), r3 = e2.beam_rests && e2.beam_middle_only && i4.isRest() && s3;
            let h3 = false;
            if (e2.maintain_stem_directions && l3 && !i4.isRest() && !l3.isRest()) {
              const t4 = l3.getStemDirection();
              h3 = i4.getStemDirection() !== t4;
            }
            const m2 = parseInt(i4.getDuration(), 10) < 8;
            o3 || r3 || h3 || m2 ? (b3.length > 0 && t3.push(b3), b3 = h3 ? [i4] : []) : b3.push(i4);
          }), b3.length > 0 && t3.push(b3);
        }), n2 = t3;
      }(), n2.forEach((t3) => {
        let i3;
        if (e2.maintain_stem_directions) {
          const e3 = function(t4) {
            for (let e4 = 0; e4 < t4.length; e4++) {
              const i4 = t4[e4];
              if (!i4.isRest()) return i4;
            }
            return false;
          }(t3);
          i3 = e3 ? e3.getStemDirection() : at.UP;
        } else i3 = e2.stem_direction ? e2.stem_direction : Ne(t3);
        !function(t4, e3) {
          t4.forEach((t5) => {
            t5.setStemDirection(e3);
          });
        }(t3, i3);
      });
      const o2 = n2.filter((t3) => {
        if (t3.length > 1) {
          let e3 = true;
          return t3.forEach((t4) => {
            t4.getIntrinsicTicks() >= V.durationToTicks("4") && (e3 = false);
          }), e3;
        }
        return false;
      }), r2 = function() {
        const t3 = [];
        return n2.forEach((e3) => {
          let i3;
          e3.forEach((e4) => {
            const b3 = e4.getTuplet();
            b3 && i3 !== b3 && (i3 = b3, t3.push(i3));
          });
        }), t3;
      }(), h2 = [];
      return o2.forEach((t3) => {
        const i3 = new Re(t3);
        e2.show_stemlets && (i3.render_options.show_stemlets = true), e2.secondary_breaks && (i3.render_options.secondary_break_ticks = V.durationToTicks(e2.secondary_breaks)), true === e2.flat_beams && (i3.render_options.flat_beams = true, i3.render_options.flat_beam_offset = e2.flat_beam_offset), h2.push(i3);
      }), r2.forEach((t3) => {
        const e3 = t3.notes[0].stem_direction === at.DOWN ? ke.BOTTOM : ke.TOP;
        t3.setTupletLocation(e3);
        let i3 = false;
        for (let e4 = 0; e4 < t3.notes.length; e4++) {
          if (!t3.notes[e4].hasBeam()) {
            i3 = true;
            break;
          }
        }
        t3.setBracketed(i3);
      }), h2;
    }
    constructor(t2, e2 = false) {
      if (super(), this.slope = 0, this.y_shift = 0, this.forcedPartialDirections = {}, !t2 || 0 === t2.length) throw new g("BadArguments", "No notes provided for beam.");
      if (1 === t2.length) throw new g("BadArguments", "Too few notes for beam.");
      if (this.ticks = t2[0].getIntrinsicTicks(), this.ticks >= V.durationToTicks("4")) throw new g("BadArguments", "Beams can only be applied to notes shorter than a quarter note.");
      let i2, b2;
      this.stem_direction = t2[0].getStemDirection();
      let a2 = this.stem_direction;
      if (e2 && c(t2[0])) a2 = Ne(t2);
      else if (e2 && _(t2[0])) {
        const e3 = t2.reduce((t3, e4) => t3 + e4.getStemDirection(), 0);
        a2 = e3 > -1 ? at.UP : at.DOWN;
      }
      for (i2 = 0; i2 < t2.length; ++i2) b2 = t2[i2], e2 && (b2.setStemDirection(a2), this.stem_direction = a2), b2.setBeam(this);
      this.postFormatted = false, this.notes = t2, this.beam_count = this.getBeamCount(), this.break_on_indices = [], this.render_options = { beam_width: 5, max_slope: 0.25, min_slope: -0.25, slope_iterations: 20, slope_cost: 100, show_stemlets: false, stemlet_extension: 7, partial_beam_length: 10, flat_beams: false, min_flat_beam_offset: 15 };
    }
    getNotes() {
      return this.notes;
    }
    getBeamCount() {
      return this.notes.map((t2) => t2.getGlyphProps().beam_count).reduce((t2, e2) => e2 > t2 ? e2 : t2);
    }
    breakSecondaryAt(t2) {
      return this.break_on_indices = t2, this;
    }
    setPartialBeamSideAt(t2, e2) {
      return this.forcedPartialDirections[t2] = e2, this;
    }
    unsetPartialBeamSideAt(t2) {
      return delete this.forcedPartialDirections[t2], this;
    }
    getSlopeY(t2, e2, i2, b2) {
      return i2 + (t2 - e2) * b2;
    }
    calculateSlope() {
      const { notes: t2, stem_direction: e2, render_options: { max_slope: i2, min_slope: b2, slope_iterations: a2, slope_cost: n2 } } = this, s2 = t2[0], l2 = function(t3, e3) {
        const i3 = t3.getStemExtents().topY, b3 = t3.getStemX();
        return (e3.getStemExtents().topY - i3) / (e3.getStemX() - b3);
      }(s2, t2[t2.length - 1]), o2 = (i2 - b2) / a2;
      let r2 = Number.MAX_VALUE, h2 = 0, m2 = 0;
      for (let a3 = b2; a3 <= i2; a3 += o2) {
        let i3 = 0, b3 = 0;
        for (let n3 = 1; n3 < t2.length; ++n3) {
          const l3 = t2[n3];
          if (l3.hasStem() || l3.isRest()) {
            const t3 = this.getSlopeY(l3.getStemX(), s2.getStemX(), s2.getStemExtents().topY, a3) + b3, o4 = l3.getStemExtents().topY;
            if (o4 * e2 < t3 * e2) {
              const a4 = Math.abs(o4 - t3);
              b3 += a4 * -e2, i3 += a4 * n3;
            } else i3 += (o4 - t3) * e2;
          }
        }
        const o3 = l2 / 2, c2 = n2 * Math.abs(o3 - a3) + Math.abs(i3);
        c2 < r2 && (r2 = c2, h2 = a3, m2 = b3);
      }
      this.slope = h2, this.y_shift = m2;
    }
    calculateFlatSlope() {
      const { notes: t2, stem_direction: e2, render_options: { beam_width: i2, min_flat_beam_offset: b2, flat_beam_offset: a2 } } = this;
      let n2 = 0, s2 = 0, l2 = 0, o2 = 0;
      for (let i3 = 0; i3 < t2.length; i3++) {
        const b3 = t2[i3], a3 = b3.getStemExtents().topY;
        n2 += a3, e2 === at.DOWN && o2 < a3 ? (o2 = a3, s2 = Math.max(...b3.getYs()), l2 = b3.getBeamCount()) : e2 === at.UP && (0 === o2 || o2 > a3) && (o2 = a3, s2 = Math.min(...b3.getYs()), l2 = b3.getBeamCount());
      }
      let r2 = n2 / t2.length;
      const h2 = b2 + l2 * (1.5 * i2), m2 = s2 + h2 * -e2;
      e2 === at.DOWN && r2 < m2 ? r2 = s2 + h2 : e2 === at.UP && r2 > m2 && (r2 = s2 - h2), a2 ? (e2 === at.DOWN && r2 > a2 || e2 === at.UP && r2 < a2) && (this.render_options.flat_beam_offset = r2) : this.render_options.flat_beam_offset = r2, this.slope = 0, this.y_shift = 0;
    }
    getBeamYToDraw() {
      let t2 = this.notes[0].getStemExtents().topY;
      return this.render_options.flat_beams && this.render_options.flat_beam_offset && (t2 = this.render_options.flat_beam_offset), t2;
    }
    applyStemExtensions() {
      const { notes: t2, slope: e2, y_shift: i2, beam_count: b2, render_options: { show_stemlets: a2, stemlet_extension: n2, beam_width: s2 } } = this, l2 = t2[0], o2 = this.getBeamYToDraw(), r2 = l2.getStemX();
      for (let l3 = 0; l3 < t2.length; ++l3) {
        const h2 = t2[l3], m2 = h2.getStem();
        if (m2) {
          const t3 = h2.getStemX(), { topY: l4 } = h2.getStemExtents(), c2 = this.getSlopeY(t3, r2, o2, e2) + i2, d2 = m2.getExtension(), _2 = h2.getStemDirection() === at.UP ? l4 - c2 : c2 - l4;
          let x2 = 0;
          if (h2.getStemDirection() !== this.stem_direction) {
            x2 = (1 + 1.5 * (h2.getGlyphProps().beam_count - 1)) * this.render_options.beam_width;
          }
          if (m2.setExtension(d2 + _2 + x2), m2.adjustHeightForBeam(), h2.isRest() && a2) {
            const t4 = (b2 - 1) * s2 * 1.5 + s2;
            m2.setVisibility(true).setStemlet(true, t4 + n2);
          }
        }
      }
    }
    lookupBeamDirection(t2, e2, i2, b2, a2) {
      if ("4" === t2) return Fe;
      const n2 = this.forcedPartialDirections[a2];
      if (n2) return n2;
      const s2 = "" + V.durationToNumber(t2) / 2, l2 = e2 < V.durationToTicks(s2), o2 = b2 < V.durationToTicks(s2), r2 = i2 < V.durationToTicks(s2);
      return l2 && o2 && r2 ? Oe : l2 && !o2 && r2 ? Fe : !l2 && o2 && r2 ? Me : this.lookupBeamDirection(s2, e2, i2, b2, a2);
    }
    getBeamLines(t2) {
      const e2 = V.durationToTicks(t2);
      let i2 = false;
      const b2 = [];
      let a2;
      const n2 = this.render_options.partial_beam_length;
      let s2 = false, l2 = 0;
      for (let o3 = 0; o3 < this.notes.length; ++o3) {
        const r2 = this.notes[o3];
        l2 += r2.getTicks().value();
        let h2 = false;
        parseInt(t2, 10) >= 8 && (h2 = -1 !== this.break_on_indices.indexOf(o3), this.render_options.secondary_break_ticks && l2 >= this.render_options.secondary_break_ticks && (l2 = 0, h2 = true));
        const m2 = r2.getIntrinsicTicks() < e2, c2 = r2.getStemX() - at.WIDTH / 2, d2 = this.notes[o3 - 1], _2 = this.notes[o3 + 1], x2 = _2 && _2.getIntrinsicTicks() < e2, g2 = d2 && d2.getIntrinsicTicks() < e2, y2 = d2 && _2 && m2 && !g2 && !x2;
        if (m2) if (i2) a2 = b2[b2.length - 1], a2.end = c2, h2 && (i2 = false, _2 && !x2 && void 0 === a2.end && (a2.end = a2.start - n2));
        else {
          if (a2 = { start: c2, end: void 0 }, i2 = true, y2) {
            const e3 = d2.getIntrinsicTicks(), i3 = _2.getIntrinsicTicks(), b3 = r2.getIntrinsicTicks(), s3 = this.lookupBeamDirection(t2, e3, b3, i3, o3);
            [Fe, Oe].includes(s3) ? a2.end = a2.start - n2 : a2.end = a2.start + n2;
          } else x2 ? h2 && (a2.end = a2.start - n2, i2 = false) : a2.end = (s2 || 0 === o3) && _2 ? a2.start + n2 : a2.start - n2;
          b2.push(a2);
        }
        else i2 = false;
        s2 = h2;
      }
      const o2 = b2[b2.length - 1];
      return o2 && void 0 === o2.end && (o2.end = o2.start - n2), b2;
    }
    drawStems(t2) {
      this.notes.forEach((e2) => {
        const i2 = e2.getStem();
        if (i2) {
          const b2 = e2.getStemX();
          i2.setNoteHeadXBounds(b2, b2), i2.setContext(t2).draw();
        }
      }, this);
    }
    drawBeamLines(t2) {
      const e2 = ["4", "8", "16", "32", "64"], i2 = this.notes[0];
      let b2 = this.getBeamYToDraw();
      const a2 = i2.getStemX(), n2 = this.render_options.beam_width * this.stem_direction;
      for (let i3 = 0; i3 < e2.length; ++i3) {
        const s2 = e2[i3], l2 = this.getBeamLines(s2);
        for (let e3 = 0; e3 < l2.length; ++e3) {
          const i4 = l2[e3], s3 = i4.start, o2 = this.getSlopeY(s3, a2, b2, this.slope), r2 = i4.end;
          if (!r2) throw new g("NoLastBeamX", "lastBeamX undefined.");
          {
            const e4 = this.getSlopeY(r2, a2, b2, this.slope);
            t2.beginPath(), t2.moveTo(s3, o2), t2.lineTo(s3, o2 + n2), t2.lineTo(r2 + 1, e4 + n2), t2.lineTo(r2 + 1, e4), t2.closePath(), t2.fill();
          }
        }
        b2 += 1.5 * n2;
      }
    }
    preFormat() {
      return this;
    }
    postFormat() {
      this.postFormatted || (_(this.notes[0]) || this.render_options.flat_beams ? this.calculateFlatSlope() : this.calculateSlope(), this.applyStemExtensions(), this.postFormatted = true);
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered(), this.unbeamable || (this.postFormatted || this.postFormat(), this.drawStems(t2), this.applyStyle(), t2.openGroup("beam", this.getAttribute("id")), this.drawBeamLines(t2), t2.closeGroup(), this.restoreStyle());
    }
  }
  class Le extends vt {
    static get CATEGORY() {
      return x.ClefNote;
    }
    constructor(t2, e2, i2) {
      super({ duration: "b" }), this.type = t2;
      const b2 = new de(t2, e2, i2);
      this.clef = b2.clef, this.annotation = b2.annotation, this.size = void 0 === e2 ? "default" : e2, this.setWidth(Z.getWidth(this.clef.code, de.getPoint(this.size), `clefNote_${this.size}`)), this.ignore_ticks = true;
    }
    setType(t2, e2, i2) {
      this.type = t2, this.size = e2;
      const b2 = new de(t2, e2, i2);
      return this.clef = b2.clef, this.annotation = b2.annotation, this.setWidth(Z.getWidth(this.clef.code, de.getPoint(this.size), `clefNote_${this.size}`)), this;
    }
    getClef() {
      return this.clef;
    }
    preFormat() {
      return this.preFormatted = true, this;
    }
    draw() {
      const t2 = this.checkStave(), e2 = this.checkContext();
      this.setRendered();
      const i2 = this.getAbsoluteX();
      if (Z.renderGlyph(e2, i2, t2.getYForLine(this.clef.line), de.getPoint(this.size), this.clef.code, { category: `clefNote_${this.size}` }), void 0 !== this.annotation) {
        const b2 = new Z(this.annotation.code, this.annotation.point);
        b2.setContext(e2), b2.setStave(t2), b2.setYShift(t2.getYForLine(this.annotation.line) - t2.getYForGlyphs()), b2.setXShift(this.annotation.x_shift), b2.renderToStave(i2);
      }
    }
  }
  class We extends vt {
    static get CATEGORY() {
      return x.Crescendo;
    }
    constructor(t2) {
      super(t2), this.options = { extend_left: 0, extend_right: 0, y_shift: 0 }, this.decrescendo = false, this.line = t2.line || 0, this.height = 15;
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    setHeight(t2) {
      return this.height = t2, this;
    }
    setDecrescendo(t2) {
      return this.decrescendo = t2, this;
    }
    preFormat() {
      return this.preFormatted = true, this;
    }
    draw() {
      const t2 = this.checkContext(), e2 = this.checkStave();
      this.setRendered();
      const i2 = this.getTickContext(), b2 = Ce.getNextContext(i2), a2 = this.getAbsoluteX(), n2 = b2 ? b2.getX() : e2.getX() + e2.getWidth(), s2 = e2.getYForLine(this.line + -3) + 1;
      !function(...t3) {
        We.DEBUG && u("Vex.Flow.Crescendo", t3);
      }("Drawing ", this.decrescendo ? "decrescendo " : "crescendo ", this.height, "x", a2 - n2), function(t3, e3) {
        const i3 = e3.begin_x, b3 = e3.end_x, a3 = e3.y, n3 = e3.height / 2;
        t3.beginPath(), e3.reverse ? (t3.moveTo(i3, a3 - n3), t3.lineTo(b3, a3), t3.lineTo(i3, a3 + n3)) : (t3.moveTo(b3, a3 - n3), t3.lineTo(i3, a3), t3.lineTo(b3, a3 + n3)), t3.stroke(), t3.closePath();
      }(t2, { begin_x: a2 - this.options.extend_left, end_x: n2 + this.options.extend_right, y: s2 + this.options.y_shift, height: this.height, reverse: this.decrescendo });
    }
  }
  var Ue;
  We.DEBUG = false, function(t2) {
    t2[t2.NEAR_HEAD = 1] = "NEAR_HEAD", t2[t2.NEAR_TOP = 2] = "NEAR_TOP";
  }(Ue || (Ue = {}));
  class Ie extends R {
    static get CATEGORY() {
      return x.Curve;
    }
    static get Position() {
      return Ue;
    }
    static get PositionString() {
      return { nearHead: Ue.NEAR_HEAD, nearTop: Ue.NEAR_TOP };
    }
    constructor(t2, e2, i2) {
      super(), this.render_options = Object.assign({ thickness: 2, x_shift: 0, y_shift: 10, position: Ue.NEAR_HEAD, position_end: Ue.NEAR_HEAD, invert: false, cps: [{ x: 0, y: 10 }, { x: 0, y: 10 }] }, i2), this.from = t2, this.to = e2;
    }
    setNotes(t2, e2) {
      if (!t2 && !e2) throw new g("BadArguments", "Curve needs to have either `from` or `to` set.");
      return this.from = t2, this.to = e2, this;
    }
    isPartial() {
      return !this.from || !this.to;
    }
    renderCurve(t2) {
      const e2 = this.checkContext(), i2 = this.render_options.x_shift, b2 = this.render_options.y_shift * t2.direction, a2 = t2.first_x + i2, n2 = t2.first_y + b2, s2 = t2.last_x - i2, l2 = t2.last_y + b2, o2 = this.render_options.thickness, r2 = this.render_options.cps, { x: h2, y: m2 } = r2[0], { x: c2, y: d2 } = r2[1], _2 = (s2 - a2) / (r2.length + 2);
      e2.beginPath(), e2.moveTo(a2, n2), e2.bezierCurveTo(a2 + _2 + h2, n2 + m2 * t2.direction, s2 - _2 + c2, l2 + d2 * t2.direction, s2, l2), e2.bezierCurveTo(s2 - _2 + c2, l2 + (d2 + o2) * t2.direction, a2 + _2 + h2, n2 + (m2 + o2) * t2.direction, a2, n2), e2.stroke(), e2.closePath(), e2.fill();
    }
    draw() {
      this.checkContext(), this.setRendered();
      const t2 = this.from, e2 = this.to;
      let i2, b2, a2, n2, s2 = 0, l2 = "baseY", o2 = "baseY";
      function r2(t3) {
        return "string" == typeof t3 ? Ie.PositionString[t3] : t3;
      }
      const h2 = r2(this.render_options.position), m2 = r2(this.render_options.position_end);
      if (h2 === Ue.NEAR_TOP && (l2 = "topY", o2 = "topY"), m2 === Ue.NEAR_HEAD ? o2 = "baseY" : m2 === Ue.NEAR_TOP && (o2 = "topY"), t2) i2 = t2.getTieRightX(), s2 = t2.getStemDirection(), a2 = t2.getStemExtents()[l2];
      else {
        i2 = e2.checkStave().getTieStartX(), a2 = e2.getStemExtents()[l2];
      }
      if (e2) b2 = e2.getTieLeftX(), s2 = e2.getStemDirection(), n2 = e2.getStemExtents()[o2];
      else {
        b2 = t2.checkStave().getTieEndX(), n2 = t2.getStemExtents()[o2];
      }
      return this.renderCurve({ first_x: i2, last_x: b2, first_y: a2, last_y: n2, direction: s2 * (true === this.render_options.invert ? -1 : 1) }), true;
    }
  }
  function Ge(...t2) {
    Ye.DEBUG && u("Vex.Flow.Parser", t2);
  }
  function He(t2) {
    if ("matchedString" in t2) return t2.matchedString;
    if ("results" in t2) return He(t2.results);
    const e2 = t2;
    return 1 === e2.length ? He(e2[0]) : 0 === e2.length ? null : e2.map(He);
  }
  class Ye {
    constructor(t2) {
      this.grammar = t2, this.line = "", this.pos = 0, this.errorPos = -1;
    }
    parse(t2) {
      this.line = t2, this.pos = 0, this.errorPos = -1;
      const e2 = this.expect(this.grammar.begin());
      return e2.errorPos = this.errorPos, e2;
    }
    matchFail(t2) {
      -1 === this.errorPos && (this.errorPos = this.pos), this.pos = t2;
    }
    matchSuccess() {
      this.errorPos = -1;
    }
    matchToken(t2, e2 = false) {
      const i2 = e2 ? new RegExp("^((" + t2 + "))") : new RegExp("^((" + t2 + ")\\s*)"), b2 = this.line.slice(this.pos).match(i2);
      return null !== b2 ? { success: true, matchedString: b2[2], incrementPos: b2[1].length, pos: this.pos } : { success: false, pos: this.pos };
    }
    expectOne(t2, e2 = false) {
      const i2 = [], b2 = this.pos;
      let a2 = true, n2 = false;
      if (e2 = true === e2 || true === t2.maybe, t2.expect) for (const e3 of t2.expect) {
        const b3 = this.pos, s3 = this.expect(e3);
        if (s3.success) {
          if (i2.push(s3), n2 = true, t2.or) break;
        } else if (a2 = false, !t2.or) {
          this.pos = b3;
          break;
        }
      }
      const s2 = t2.or && n2 || a2, l2 = s2 || true === e2, o2 = s2 ? 1 : 0;
      return e2 && !s2 && (this.pos = b2), l2 ? this.matchSuccess() : this.matchFail(b2), { success: l2, results: i2, numMatches: o2 };
    }
    expectOneOrMore(t2, e2 = false) {
      const i2 = [], b2 = this.pos;
      let a2 = 0, n2 = true;
      do {
        const e3 = this.expectOne(t2);
        e3.success && e3.results ? (a2++, i2.push(e3.results)) : n2 = false;
      } while (n2);
      const s2 = a2 > 0 || true === e2;
      return !e2 || a2 > 0 || (this.pos = b2), s2 ? this.matchSuccess() : this.matchFail(b2), { success: s2, results: i2, numMatches: a2 };
    }
    expectZeroOrMore(t2) {
      return this.expectOneOrMore(t2, true);
    }
    expect(t2) {
      if (Ge("Evaluating rule function:", t2), !t2) throw new g("Invalid rule function");
      let e2;
      const i2 = t2.bind(this.grammar)();
      if (i2.token) e2 = this.matchToken(i2.token, true === i2.noSpace), e2.success && (this.pos += e2.incrementPos);
      else {
        if (!i2.expect) throw Ge(i2), new g("Bad grammar! No `token` or `expect` property " + i2);
        e2 = i2.oneOrMore ? this.expectOneOrMore(i2) : i2.zeroOrMore ? this.expectZeroOrMore(i2) : this.expectOne(i2);
      }
      const b2 = [];
      return e2.matches = b2, e2.results && e2.results.forEach((t3) => b2.push(He(t3))), i2.run && e2.success && i2.run({ matches: b2 }), e2;
    }
  }
  function Xe(...t2) {
    Qe.DEBUG && u("Vex.Flow.EasyScore", t2);
  }
  Ye.DEBUG = false;
  class je {
    constructor(t2) {
      this.builder = t2;
    }
    begin() {
      return this.LINE;
    }
    LINE() {
      return { expect: [this.PIECE, this.PIECES, this.EOL] };
    }
    PIECE() {
      return { expect: [this.CHORDORNOTE, this.PARAMS], run: () => this.builder.commitPiece() };
    }
    PIECES() {
      return { expect: [this.COMMA, this.PIECE], zeroOrMore: true };
    }
    PARAMS() {
      return { expect: [this.DURATION, this.TYPE, this.DOTS, this.OPTS] };
    }
    CHORDORNOTE() {
      return { expect: [this.CHORD, this.SINGLENOTE], or: true };
    }
    CHORD() {
      return { expect: [this.LPAREN, this.NOTES, this.RPAREN], run: (t2) => this.builder.addChord(t2.matches[1]) };
    }
    NOTES() {
      return { expect: [this.NOTE], oneOrMore: true };
    }
    NOTE() {
      return { expect: [this.NOTENAME, this.ACCIDENTAL, this.OCTAVE] };
    }
    SINGLENOTE() {
      return { expect: [this.NOTENAME, this.ACCIDENTAL, this.OCTAVE], run: (t2) => {
        const e2 = t2;
        this.builder.addSingleNote(e2.matches[0], e2.matches[1], e2.matches[2]);
      } };
    }
    ACCIDENTAL() {
      return { expect: [this.MICROTONES, this.ACCIDENTALS], maybe: true, or: true };
    }
    DOTS() {
      return { expect: [this.DOT], zeroOrMore: true, run: (t2) => this.builder.setNoteDots(t2.matches) };
    }
    TYPE() {
      return { expect: [this.SLASH, this.MAYBESLASH, this.TYPES], maybe: true, run: (t2) => this.builder.setNoteType(t2.matches[2]) };
    }
    DURATION() {
      return { expect: [this.SLASH, this.DURATIONS], maybe: true, run: (t2) => this.builder.setNoteDuration(t2.matches[1]) };
    }
    OPTS() {
      return { expect: [this.LBRACKET, this.KEYVAL, this.KEYVALS, this.RBRACKET], maybe: true };
    }
    KEYVALS() {
      return { expect: [this.COMMA, this.KEYVAL], zeroOrMore: true };
    }
    KEYVAL() {
      return { expect: [this.KEY, this.EQUALS, this.VAL], run: (t2) => this.builder.addNoteOption(t2.matches[0], t2.matches[2].slice(1, -1)) };
    }
    VAL() {
      return { expect: [this.SVAL, this.DVAL], or: true };
    }
    KEY() {
      return { token: "[a-zA-Z][a-zA-Z0-9]*" };
    }
    DVAL() {
      return { token: '["][^"]*["]' };
    }
    SVAL() {
      return { token: "['][^']*[']" };
    }
    NOTENAME() {
      return { token: "[a-gA-G]" };
    }
    OCTAVE() {
      return { token: "[0-9]+" };
    }
    ACCIDENTALS() {
      return { token: "bb|b|##|#|n" };
    }
    MICROTONES() {
      return { token: "bbs|bss|bs|db|d|\\+\\+-|\\+-|\\+\\+|\\+|k|o" };
    }
    DURATIONS() {
      return { token: "[0-9whq]+" };
    }
    TYPES() {
      return { token: "[rRsSmMhHgG]" };
    }
    LPAREN() {
      return { token: "[(]" };
    }
    RPAREN() {
      return { token: "[)]" };
    }
    COMMA() {
      return { token: "[,]" };
    }
    DOT() {
      return { token: "[.]" };
    }
    SLASH() {
      return { token: "[/]" };
    }
    MAYBESLASH() {
      return { token: "[/]?" };
    }
    EQUALS() {
      return { token: "[=]" };
    }
    LBRACKET() {
      return { token: "\\[" };
    }
    RBRACKET() {
      return { token: "\\]" };
    }
    EOL() {
      return { token: "$" };
    }
  }
  class Ve {
    constructor(t2) {
      this.chord = [], this.dots = 0, this.options = {}, this.duration = t2;
    }
  }
  class Ke {
    constructor(t2) {
      this.commitHooks = [], this.factory = t2, this.reset();
    }
    reset(t2) {
      this.options = Object.assign({ stem: "auto", clef: "treble" }, t2), this.elements = { notes: [], accidentals: [] }, this.rollingDuration = "8", this.resetPiece();
    }
    getFactory() {
      return this.factory;
    }
    getElements() {
      return this.elements;
    }
    addCommitHook(t2) {
      this.commitHooks.push(t2);
    }
    resetPiece() {
      Xe("resetPiece"), this.piece = new Ve(this.rollingDuration);
    }
    setNoteDots(t2) {
      Xe("setNoteDots:", t2), t2 && (this.piece.dots = t2.length);
    }
    setNoteDuration(t2) {
      Xe("setNoteDuration:", t2), this.rollingDuration = this.piece.duration = t2 || this.rollingDuration;
    }
    setNoteType(t2) {
      Xe("setNoteType:", t2), t2 && (this.piece.type = t2);
    }
    addNoteOption(t2, e2) {
      Xe("addNoteOption: key:", t2, "value:", e2), this.piece.options[t2] = e2;
    }
    addNote(t2, e2, i2) {
      Xe("addNote:", t2, e2, i2), this.piece.chord.push({ key: t2, accid: e2, octave: i2 });
    }
    addSingleNote(t2, e2, i2) {
      Xe("addSingleNote:", t2, e2, i2), this.addNote(t2, e2, i2);
    }
    addChord(t2) {
      Xe("startChord"), "object" != typeof t2[0] ? this.addSingleNote(t2[0]) : t2.forEach((t3) => {
        t3 && this.addNote(...t3);
      }), Xe("endChord");
    }
    commitPiece() {
      Xe("commitPiece");
      const { factory: t2 } = this;
      if (!t2) return;
      const e2 = Object.assign(Object.assign({}, this.options), this.piece.options), i2 = p(e2.stem, "BadArguments", "options.stem is not defined").toLowerCase(), b2 = p(e2.clef, "BadArguments", "options.clef is not defined").toLowerCase(), { chord: a2, duration: n2, dots: s2, type: l2 } = this.piece, o2 = et.accidentals, r2 = a2.map((t3) => {
        var e3;
        return t3.key + (o2.includes(null !== (e3 = t3.accid) && void 0 !== e3 ? e3 : "") ? t3.accid : "") + "/" + t3.octave;
      }), h2 = "auto" === i2, m2 = "g" == (null == l2 ? void 0 : l2.toLowerCase()) ? t2.GhostNote({ duration: n2, dots: s2 }) : t2.StaveNote({ keys: r2, duration: n2, dots: s2, type: l2, clef: b2, auto_stem: h2 });
      h2 || m2.setStemDirection("up" === i2 ? at.UP : at.DOWN);
      const c2 = [];
      a2.forEach((e3, i3) => {
        const b3 = e3.accid;
        if ("string" == typeof b3) {
          const e4 = t2.Accidental({ type: b3 });
          m2.addModifier(e4, i3), c2.push(e4);
        } else c2.push(void 0);
      });
      for (let t3 = 0; t3 < s2; t3++) Ot.buildAndAttach([m2], { all: true });
      this.commitHooks.forEach((t3) => t3(e2, m2, this)), this.elements.notes.push(m2), this.elements.accidentals.push(c2), this.resetPiece();
    }
  }
  function $e(t2, e2) {
    void 0 !== t2.id && e2.setAttribute("id", t2.id);
  }
  const Je = /\s*,\s*/;
  function qe(t2, e2) {
    void 0 !== t2.class && t2.class.split(Je).forEach((t3) => e2.addClass(t3));
  }
  class Qe {
    constructor(t2 = {}) {
      this.defaults = { clef: "treble", time: "4/4", stem: "auto" }, this.setOptions(t2);
    }
    set(t2) {
      return this.defaults = Object.assign(Object.assign({}, this.defaults), t2), this;
    }
    setOptions(t2) {
      var e2, i2;
      const b2 = t2.factory, a2 = null !== (e2 = t2.builder) && void 0 !== e2 ? e2 : new Ke(b2);
      return this.options = Object.assign(Object.assign({ commitHooks: [$e, qe, ut.easyScoreHook, Rt.easyScoreHook], throwOnError: false }, t2), { factory: b2, builder: a2 }), this.factory = b2, this.builder = a2, this.grammar = new je(this.builder), this.parser = new Ye(this.grammar), null === (i2 = this.options.commitHooks) || void 0 === i2 || i2.forEach((t3) => this.addCommitHook(t3)), this;
    }
    setContext(t2) {
      return this.factory.setContext(t2), this;
    }
    parse(t2, e2 = {}) {
      this.builder.reset(e2);
      const i2 = this.parser.parse(t2);
      if (!i2.success && this.options.throwOnError) throw Xe(i2), new g("Error parsing line: " + t2);
      return i2;
    }
    beam(t2, e2) {
      return this.factory.Beam({ notes: t2, options: e2 }), t2;
    }
    tuplet(t2, e2) {
      return this.factory.Tuplet({ notes: t2, options: e2 }), t2;
    }
    notes(t2, e2 = {}) {
      return e2 = Object.assign({ clef: this.defaults.clef, stem: this.defaults.stem }, e2), this.parse(t2, e2), this.builder.getElements().notes;
    }
    voice(t2, e2 = {}) {
      return e2 = Object.assign({ time: this.defaults.time }, e2), this.factory.Voice(e2).addTickables(t2);
    }
    addCommitHook(t2) {
      this.builder.addCommitHook(t2);
    }
  }
  Qe.DEBUG = false;
  const Ze = "Ghost note must have valid initialization data to identify duration.";
  class ti extends Wt {
    static get CATEGORY() {
      return x.GhostNote;
    }
    constructor(t2) {
      if (!t2) throw new g("BadArguments", Ze);
      let e2;
      if ("string" == typeof t2) e2 = { duration: t2 };
      else {
        if ("object" != typeof t2) throw new g("BadArguments", Ze);
        e2 = t2;
      }
      super(e2), this.setWidth(0);
    }
    isRest() {
      return true;
    }
    setStave(t2) {
      return super.setStave(t2), this;
    }
    addToModifierContext(t2) {
      return this;
    }
    preFormat() {
      return this.preFormatted = true, this;
    }
    draw() {
      this.setRendered();
      for (let t2 = 0; t2 < this.modifiers.length; ++t2) {
        const e2 = this.modifiers[t2];
        n(e2) && (e2.setContext(this.getContext()), e2.drawWithStyle());
      }
    }
  }
  class ei extends vt {
    static get CATEGORY() {
      return x.GlyphNote;
    }
    constructor(t2, e2, i2) {
      super(e2), this.options = Object.assign({ ignoreTicks: false, line: 2 }, i2), this.ignore_ticks = this.options.ignoreTicks, this.setGlyph(t2);
    }
    setGlyph(t2) {
      return this.glyph = t2, this.setWidth(this.glyph.getMetrics().width), this;
    }
    getBoundingBox() {
      return this.glyph.getBoundingBox();
    }
    preFormat() {
      return !this.preFormatted && this.modifierContext && this.modifierContext.preFormat(), this.preFormatted = true, this;
    }
    drawModifiers() {
      const t2 = this.checkContext();
      for (let e2 = 0; e2 < this.modifiers.length; e2++) {
        const i2 = this.modifiers[e2];
        i2.setContext(t2), i2.drawWithStyle();
      }
    }
    getGlyphWidth() {
      return this.glyph.getMetrics().width;
    }
    draw() {
      const t2 = this.checkStave(), e2 = t2.checkContext();
      this.setRendered(), this.applyStyle(e2), e2.openGroup("glyphNote", this.getAttribute("id"));
      const i2 = this.glyph;
      i2.getContext() || i2.setContext(e2), i2.setStave(t2), i2.setYShift(t2.getYForLine(this.options.line) - t2.getYForGlyphs());
      const b2 = this.isCenterAligned() ? this.getAbsoluteX() - this.getWidth() / 2 : this.getAbsoluteX();
      i2.renderToStave(b2), this.drawModifiers(), e2.closeGroup(), this.restoreStyle(e2);
    }
  }
  class ii extends It {
    static get CATEGORY() {
      return x.GraceNote;
    }
    static get LEDGER_LINE_OFFSET() {
      return 2;
    }
    static get SCALE() {
      return 0.66;
    }
    constructor(t2) {
      super(Object.assign({ glyph_font_scale: V.NOTATION_FONT_SCALE * ii.SCALE, stroke_px: ii.LEDGER_LINE_OFFSET }, t2)), this.slash = t2.slash || false, this.slur = true, this.buildNoteHeads(), this.width = 3;
    }
    getStemExtension() {
      if (this.stem_extension_override) return this.stem_extension_override;
      const t2 = this.getGlyphProps();
      if (t2) {
        let e2 = super.getStemExtension();
        if (t2.stem) {
          const t3 = this.getStaveNoteScale();
          e2 = (at.HEIGHT + e2) * t3 - at.HEIGHT;
        }
        return e2;
      }
      return 0;
    }
    getStaveNoteScale() {
      return this.render_options.glyph_font_scale / V.NOTATION_FONT_SCALE;
    }
    draw() {
      super.draw(), this.setRendered();
      const t2 = this.stem;
      if (this.slash && t2) {
        const e2 = this.getStaveNoteScale(), i2 = e2 / 0.66;
        let b2;
        const a2 = this.beam;
        if (a2) a2.postFormatted || a2.postFormat(), b2 = this.calcBeamedNotesSlashBBox(8 * i2, 8 * i2, { stem: 6 * i2, beam: 5 * i2 });
        else {
          const a3 = this.getStemDirection(), n3 = this.getNoteHeadBounds(), s2 = t2.getHeight();
          let l2 = this.getAbsoluteX(), o2 = a3 === at.DOWN ? n3.y_top - s2 : n3.y_bottom - s2;
          const r2 = a3 === at.DOWN ? this.glyphProps.stem_down_extension : this.glyphProps.stem_up_extension;
          let h2 = V.STEM_HEIGHT;
          h2 -= h2 / 2.8, h2 += r2, o2 += h2 * e2 * a3;
          const m2 = a3 === at.UP ? { x1: 1, y1: 0, x2: 13, y2: -9 } : { x1: -4, y1: 1, x2: 13, y2: 9 };
          l2 += m2.x1 * i2, o2 += m2.y1 * i2, b2 = { x1: l2, y1: o2, x2: l2 + m2.x2 * i2, y2: o2 + m2.y2 * i2 };
        }
        const n2 = this.checkContext();
        n2.save(), n2.setLineWidth(1 * i2), n2.beginPath(), n2.moveTo(b2.x1, b2.y1), n2.lineTo(b2.x2, b2.y2), n2.closePath(), n2.stroke(), n2.restore();
      }
    }
    calcBeamedNotesSlashBBox(t2, e2, i2) {
      const b2 = this.beam;
      if (!b2) throw new g("NoBeam", "Can't calculate without a beam.");
      const a2 = b2.slope, n2 = b2.notes[b2.notes.length - 1] === this ? -1 : 1, s2 = Math.atan(a2 * n2), l2 = Math.cos(s2) * e2, o2 = Math.sin(s2) * e2;
      t2 *= this.getStemDirection();
      const r2 = Math.atan((o2 - t2) / l2), h2 = Math.cos(r2) * i2.stem * n2, m2 = Math.sin(r2) * i2.stem, c2 = Math.cos(r2) * i2.beam * n2, d2 = Math.sin(r2) * i2.beam, _2 = this.getStemX(), x2 = b2.notes[0].getStemX(), y2 = b2.getBeamYToDraw() + (_2 - x2) * a2;
      return { x1: _2 - h2, y1: y2 + t2 - m2, x2: _2 + l2 * n2 + c2, y2: y2 + o2 + d2 };
    }
  }
  class bi extends vt {
    static get CATEGORY() {
      return x.KeySigNote;
    }
    constructor(t2, e2, i2) {
      super({ duration: "b" }), this.keySignature = new _e(t2, e2, i2), this.ignore_ticks = true;
    }
    addToModifierContext(t2) {
      return this;
    }
    preFormat() {
      return this.preFormatted = true, this.keySignature.setStave(this.checkStave()), this.setWidth(this.keySignature.getWidth()), this;
    }
    draw() {
      const t2 = this.checkStave().checkContext();
      this.setRendered(), this.keySignature.setX(this.getAbsoluteX()), this.keySignature.setContext(t2), this.keySignature.draw();
    }
  }
  let ai;
  class ni extends R {
    static get CATEGORY() {
      return x.MultiMeasureRest;
    }
    constructor(t2, e2) {
      var i2;
      super(), this.xs = { left: NaN, right: NaN }, this.hasPaddingLeft = false, this.hasPaddingRight = false, this.hasLineThickness = false, this.hasSymbolSpacing = false, this.number_of_measures = t2, this.hasPaddingLeft = "number" == typeof e2.padding_left, this.hasPaddingRight = "number" == typeof e2.padding_right, this.hasLineThickness = "number" == typeof e2.line_thickness, this.hasSymbolSpacing = "number" == typeof e2.symbol_spacing;
      const b2 = V.currentMusicFont();
      this.render_options = Object.assign({ use_symbols: false, show_number: true, number_line: -0.5, number_glyph_point: null !== (i2 = b2.lookupMetric("digits.point")) && void 0 !== i2 ? i2 : V.NOTATION_FONT_SCALE, line: 2, spacing_between_lines_px: V.STAVE_LINE_DISTANCE, serif_thickness: 2, semibreve_rest_glyph_scale: V.NOTATION_FONT_SCALE, padding_left: 0, padding_right: 0, line_thickness: 5, symbol_spacing: 0 }, e2);
      const a2 = b2.lookupMetric("digits.shiftLine", 0);
      this.render_options.number_line += a2;
    }
    getXs() {
      return this.xs;
    }
    setStave(t2) {
      return this.stave = t2, this;
    }
    getStave() {
      return this.stave;
    }
    checkStave() {
      return p(this.stave, "NoStave", "No stave attached to instance.");
    }
    drawLine(t2, e2, i2, b2, a2) {
      const n2 = this.render_options, s2 = t2.getYForLine(n2.line), l2 = 0.1 * (b2 - i2);
      let o2;
      i2 += l2, b2 -= l2, o2 = this.hasLineThickness ? 0.5 * n2.line_thickness : 0.25 * a2;
      const r2 = n2.serif_thickness, h2 = s2 - a2, m2 = s2 + a2, c2 = i2 + r2, d2 = b2 - r2, _2 = s2 - o2, x2 = s2 + o2;
      e2.save(), e2.beginPath(), e2.moveTo(i2, h2), e2.lineTo(c2, h2), e2.lineTo(c2, _2), e2.lineTo(d2, _2), e2.lineTo(d2, h2), e2.lineTo(b2, h2), e2.lineTo(b2, m2), e2.lineTo(d2, m2), e2.lineTo(d2, x2), e2.lineTo(c2, x2), e2.lineTo(c2, m2), e2.lineTo(i2, m2), e2.closePath(), e2.fill();
    }
    drawSymbols(t2, e2, i2, b2, a2) {
      const n2 = Math.floor(this.number_of_measures / 4), s2 = this.number_of_measures % 4, l2 = Math.floor(s2 / 2), o2 = s2 % 2, r2 = this.render_options;
      ai = void 0;
      const h2 = function() {
        if (!ai) {
          const t3 = new Lt({ duration: "w", note_type: "r" });
          ai = { glyph_font_scale: t3.render_options.glyph_font_scale, glyph_code: t3.glyph_code, width: t3.getWidth() };
        }
        return ai;
      }(), m2 = r2.semibreve_rest_glyph_scale, c2 = h2.width * (m2 / h2.glyph_font_scale), d2 = { 2: { width: 0.5 * c2, height: a2 }, 1: { width: c2 } }, _2 = this.hasSymbolSpacing ? r2.symbol_spacing : 10;
      let x2 = i2 + 0.5 * (b2 - i2) - 0.5 * (n2 * d2[2].width + l2 * d2[2].width + o2 * d2[1].width + (n2 + l2 + o2 - 1) * _2);
      const g2 = r2.line, y2 = t2.getYForLine(g2 - 1), p2 = t2.getYForLine(g2), u2 = t2.getYForLine(g2 + 1);
      e2.save(), e2.setStrokeStyle("none"), e2.setLineWidth(0);
      for (let t3 = 0; t3 < n2; ++t3) e2.fillRect(x2, p2 - d2[2].height, d2[2].width, d2[2].height), e2.fillRect(x2, u2 - d2[2].height, d2[2].width, d2[2].height), x2 += d2[2].width + _2;
      for (let t3 = 0; t3 < l2; ++t3) e2.fillRect(x2, p2 - d2[2].height, d2[2].width, d2[2].height), x2 += d2[2].width + _2;
      for (let t3 = 0; t3 < o2; ++t3) Z.renderGlyph(e2, x2, y2, m2, h2.glyph_code), x2 += d2[1].width + _2;
      e2.restore();
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      const e2 = this.checkStave();
      let i2 = e2.getNoteStartX(), b2 = e2.getNoteEndX();
      const a2 = e2.getModifiers(wt.BEGIN);
      1 === a2.length && s(a2[0]) && (i2 -= a2[0].getWidth());
      const n2 = this.render_options;
      this.hasPaddingLeft && (i2 = e2.getX() + n2.padding_left), this.hasPaddingRight && (b2 = e2.getX() + e2.getWidth() - n2.padding_right), this.xs.left = i2, this.xs.right = b2;
      const l2 = n2.spacing_between_lines_px;
      if (n2.use_symbols ? this.drawSymbols(e2, t2, i2, b2, l2) : this.drawLine(e2, t2, i2, b2, l2), n2.show_number) {
        const a3 = "/" + this.number_of_measures, s2 = new Te(a3, 0, false);
        s2.point = n2.number_glyph_point, s2.setTimeSig(a3), s2.setStave(e2), s2.setX(i2 + 0.5 * (b2 - i2) - 0.5 * s2.getInfo().glyph.getMetrics().width), s2.bottomLine = n2.number_line, s2.setContext(t2).draw();
      }
    }
  }
  function si(t2, e2, i2, b2, a2) {
    const n2 = li.GLYPHS[t2], s2 = new Z(n2.code, a2, { category: "pedalMarking" });
    s2.render(e2, i2 - (s2.getMetrics().width - V.STAVE_LINE_DISTANCE) / 2, b2);
  }
  class li extends R {
    static get CATEGORY() {
      return x.PedalMarking;
    }
    static createSustain(t2) {
      return new li(t2);
    }
    static createSostenuto(t2) {
      const e2 = new li(t2);
      return e2.setType(li.type.MIXED), e2.setCustomText("Sost. Ped."), e2;
    }
    static createUnaCorda(t2) {
      const e2 = new li(t2);
      return e2.setType(li.type.TEXT), e2.setCustomText("una corda", "tre corda"), e2;
    }
    constructor(t2) {
      super(), this.notes = t2, this.type = li.type.TEXT, this.line = 0, this.custom_depress_text = "", this.custom_release_text = "", this.resetFont(), this.render_options = { bracket_height: 10, text_margin_right: 6, bracket_line_width: 1, color: "black" };
    }
    setType(t2) {
      return (t2 = "string" == typeof t2 ? li.typeString[t2] : t2) >= li.type.TEXT && t2 <= li.type.MIXED && (this.type = t2), this;
    }
    setCustomText(t2, e2) {
      return this.custom_depress_text = t2 || "", this.custom_release_text = e2 || "", this;
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    drawBracketed() {
      const t2 = this.checkContext();
      let e2, i2, b2 = false;
      this.notes.forEach((a2, n2, s2) => {
        var l2;
        b2 = !b2;
        const o2 = a2.getAbsoluteX(), r2 = a2.checkStave().getYForBottomText(this.line + 3);
        if (o2 < e2) throw new g("InvalidConfiguration", "The notes provided must be in order of ascending x positions");
        const h2 = s2[n2 + 1] === a2, m2 = s2[n2 - 1] === a2;
        let c2 = 0;
        const d2 = null !== (l2 = V.currentMusicFont().lookupMetric(`pedalMarking.${b2 ? "down" : "up"}.point`)) && void 0 !== l2 ? l2 : V.NOTATION_FONT_SCALE;
        if (b2) if (c2 = m2 ? 5 : 0, this.type !== li.type.MIXED || m2) t2.beginPath(), t2.moveTo(o2, r2 - this.render_options.bracket_height), t2.lineTo(o2 + c2, r2), t2.stroke(), t2.closePath();
        else if (this.custom_depress_text) {
          const e3 = t2.measureText(this.custom_depress_text).width;
          t2.fillText(this.custom_depress_text, o2 - e3 / 2, r2), c2 = e3 / 2 + this.render_options.text_margin_right;
        } else si("pedal_depress", t2, o2, r2, d2), c2 = 20 + this.render_options.text_margin_right;
        else c2 = h2 ? -5 : 0, t2.beginPath(), t2.moveTo(e2, i2), t2.lineTo(o2 + c2, r2), t2.lineTo(o2, r2 - this.render_options.bracket_height), t2.stroke(), t2.closePath();
        e2 = o2 + c2, i2 = r2;
      });
    }
    drawText() {
      const t2 = this.checkContext();
      let e2 = false;
      this.notes.forEach((i2) => {
        var b2;
        e2 = !e2;
        const a2 = i2.checkStave(), n2 = i2.getAbsoluteX(), s2 = a2.getYForBottomText(this.line + 3), l2 = null !== (b2 = V.currentMusicFont().lookupMetric(`pedalMarking.${e2 ? "down" : "up"}.point`)) && void 0 !== b2 ? b2 : V.NOTATION_FONT_SCALE;
        let o2 = 0;
        e2 ? this.custom_depress_text ? (o2 = t2.measureText(this.custom_depress_text).width, t2.fillText(this.custom_depress_text, n2 - o2 / 2, s2)) : si("pedal_depress", t2, n2, s2, l2) : this.custom_release_text ? (o2 = t2.measureText(this.custom_release_text).width, t2.fillText(this.custom_release_text, n2 - o2 / 2, s2)) : si("pedal_release", t2, n2, s2, l2);
      });
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered(), t2.save(), t2.setStrokeStyle(this.render_options.color), t2.setFillStyle(this.render_options.color), t2.setFont(this.textFont), function(...t3) {
        li.DEBUG && u("Vex.Flow.PedalMarking", t3);
      }("Rendering Pedal Marking"), this.type === li.type.BRACKET || this.type === li.type.MIXED ? (t2.setLineWidth(this.render_options.bracket_line_width), this.drawBracketed()) : this.type === li.type.TEXT && this.drawText(), t2.restore();
    }
  }
  li.DEBUG = false, li.TEXT_FONT = { family: F.SERIF, size: 12, weight: E.BOLD, style: P.ITALIC }, li.GLYPHS = { pedal_depress: { code: "keyboardPedalPed" }, pedal_release: { code: "keyboardPedalUp" } }, li.type = { TEXT: 1, BRACKET: 2, MIXED: 3 }, li.typeString = { text: li.type.TEXT, bracket: li.type.BRACKET, mixed: li.type.MIXED };
  const oi = { 1: "repeat1Bar", 2: "repeat2Bars", 4: "repeat4Bars", slash: "repeatBarSlash" };
  class ri extends ei {
    static get CATEGORY() {
      return x.RepeatNote;
    }
    constructor(t2, e2, i2) {
      super(new Z(oi[t2] || "repeat1Bar", V.currentMusicFont().lookupMetric("repeatNote.point", 40), { category: "repeatNote" }), Object.assign({ duration: "q", align_center: "slash" !== t2 }, e2), i2);
    }
  }
  function hi(t2, e2, i2, b2, a2, n2, s2) {
    t2.beginPath(), t2.moveTo(e2, i2), t2.lineTo(b2, a2), t2.lineTo(n2, s2), t2.lineTo(e2, i2), t2.closePath(), t2.fill();
  }
  class mi extends R {
    static get CATEGORY() {
      return x.StaveLine;
    }
    constructor(t2) {
      super(), this.setNotes(t2), this.text = "", this.resetFont(), this.render_options = { padding_left: 4, padding_right: 3, line_width: 1, line_dash: void 0, rounded_end: true, color: void 0, draw_start_arrow: false, draw_end_arrow: false, arrowhead_length: 10, arrowhead_angle: Math.PI / 8, text_position_vertical: mi.TextVerticalPosition.TOP, text_justification: mi.TextJustification.CENTER };
    }
    setText(t2) {
      return this.text = t2, this;
    }
    setNotes(t2) {
      if (!t2.first_note && !t2.last_note) throw new g("BadArguments", "Notes needs to have either first_note or last_note set.");
      if (t2.first_indices || (t2.first_indices = [0]), t2.last_indices || (t2.last_indices = [0]), t2.first_indices.length !== t2.last_indices.length) throw new g("BadArguments", "Connected notes must have same number of indices.");
      return this.notes = t2, this.first_note = t2.first_note, this.first_indices = t2.first_indices, this.last_note = t2.last_note, this.last_indices = t2.last_indices, this;
    }
    applyLineStyle() {
      const t2 = this.checkContext(), e2 = this.render_options;
      e2.line_dash && t2.setLineDash(e2.line_dash), e2.line_width && t2.setLineWidth(e2.line_width), e2.rounded_end ? t2.setLineCap("round") : t2.setLineCap("square");
    }
    applyFontStyle() {
      const t2 = this.checkContext();
      t2.setFont(this.textFont);
      const e2 = this.render_options.color;
      e2 && (t2.setStrokeStyle(e2), t2.setFillStyle(e2));
    }
    drawArrowLine(t2, e2, i2) {
      const b2 = this.render_options.draw_start_arrow && this.render_options.draw_end_arrow, a2 = e2.x, n2 = e2.y, s2 = i2.x, l2 = i2.y, o2 = Math.sqrt((s2 - a2) * (s2 - a2) + (l2 - n2) * (l2 - n2)), r2 = (o2 - this.render_options.arrowhead_length / 3) / o2;
      let h2, m2, c2, d2;
      this.render_options.draw_end_arrow || b2 ? (h2 = Math.round(a2 + (s2 - a2) * r2), m2 = Math.round(n2 + (l2 - n2) * r2)) : (h2 = s2, m2 = l2), this.render_options.draw_start_arrow || b2 ? (c2 = a2 + (s2 - a2) * (1 - r2), d2 = n2 + (l2 - n2) * (1 - r2)) : (c2 = a2, d2 = n2), this.render_options.color && (t2.setStrokeStyle(this.render_options.color), t2.setFillStyle(this.render_options.color)), t2.beginPath(), t2.moveTo(c2, d2), t2.lineTo(h2, m2), t2.stroke(), t2.closePath();
      const _2 = Math.atan2(l2 - n2, s2 - a2), x2 = Math.abs(this.render_options.arrowhead_length / Math.cos(this.render_options.arrowhead_angle));
      let g2, y2, p2, u2, f2, S2;
      (this.render_options.draw_end_arrow || b2) && (g2 = _2 + Math.PI + this.render_options.arrowhead_angle, p2 = s2 + Math.cos(g2) * x2, u2 = l2 + Math.sin(g2) * x2, y2 = _2 + Math.PI - this.render_options.arrowhead_angle, f2 = s2 + Math.cos(y2) * x2, S2 = l2 + Math.sin(y2) * x2, hi(t2, p2, u2, s2, l2, f2, S2)), (this.render_options.draw_start_arrow || b2) && (g2 = _2 + this.render_options.arrowhead_angle, p2 = a2 + Math.cos(g2) * x2, u2 = n2 + Math.sin(g2) * x2, y2 = _2 - this.render_options.arrowhead_angle, f2 = a2 + Math.cos(y2) * x2, S2 = n2 + Math.sin(y2) * x2, hi(t2, p2, u2, a2, n2, f2, S2));
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      const e2 = this.first_note, i2 = this.last_note, b2 = this.render_options;
      t2.save(), this.applyLineStyle();
      let a2 = { x: 0, y: 0 }, n2 = { x: 0, y: 0 };
      this.first_indices.forEach((s3, l3) => {
        const o3 = this.last_indices[l3];
        a2 = e2.getModifierStartXY(2, s3), n2 = i2.getModifierStartXY(1, o3);
        const r3 = a2.y > n2.y;
        a2.x += e2.getMetrics().modRightPx + b2.padding_left, n2.x -= i2.getMetrics().modLeftPx + b2.padding_right;
        const h3 = e2.getGlyphProps().getWidth();
        e2.getKeyProps()[s3].displaced && 1 === e2.getStemDirection() && (a2.x += h3 + b2.padding_left);
        i2.getKeyProps()[o3].displaced && -1 === i2.getStemDirection() && (n2.x -= h3 + b2.padding_right), a2.y += r3 ? -3 : 1, n2.y += r3 ? 2 : 0, this.drawArrowLine(t2, a2, n2);
      }), t2.restore();
      const s2 = t2.measureText(this.text).width, l2 = b2.text_justification;
      let o2 = 0;
      if (l2 === mi.TextJustification.LEFT) o2 = a2.x;
      else if (l2 === mi.TextJustification.CENTER) {
        o2 = (n2.x - a2.x) / 2 + a2.x - s2 / 2;
      } else l2 === mi.TextJustification.RIGHT && (o2 = n2.x - s2);
      let r2 = 0;
      const h2 = b2.text_position_vertical;
      return h2 === mi.TextVerticalPosition.TOP ? r2 = e2.checkStave().getYForTopText() : h2 === mi.TextVerticalPosition.BOTTOM && (r2 = e2.checkStave().getYForBottomText(V.TEXT_HEIGHT_OFFSET_HACK)), t2.save(), this.applyFontStyle(), t2.fillText(this.text, o2, r2), t2.restore(), this;
    }
  }
  mi.TEXT_FONT = Object.assign({}, R.TEXT_FONT), mi.TextVerticalPosition = { TOP: 1, BOTTOM: 2 }, mi.TextJustification = ne;
  class ci extends R {
    static get CATEGORY() {
      return x.System;
    }
    constructor(t2 = {}) {
      super(), this.setOptions(t2), this.partStaves = [], this.partStaveInfos = [], this.partVoices = [];
    }
    setOptions(t2 = {}) {
      if (!t2.factory) throw new g("NoFactory", "System.setOptions(options) requires a factory.");
      this.factory = t2.factory, this.options = Object.assign(Object.assign({ factory: this.factory, x: 10, y: 10, width: 500, spaceBetweenStaves: 12, autoWidth: false, noJustification: false, debugFormatter: false, formatIterations: 0, noPadding: false }, t2), { details: Object.assign({ alpha: 0.5 }, t2.details), formatOptions: Object.assign({}, t2.formatOptions) }), false === this.options.noJustification && void 0 === t2.width && (this.options.autoWidth = true);
    }
    getX() {
      return this.options.x;
    }
    setX(t2) {
      this.options.x = t2, this.partStaves.forEach((e2) => {
        e2.setX(t2);
      });
    }
    getY() {
      return this.options.y;
    }
    setY(t2) {
      this.options.y = t2, this.partStaves.forEach((e2) => {
        e2.setY(t2);
      });
    }
    getStaves() {
      return this.partStaves;
    }
    getVoices() {
      return this.partVoices;
    }
    setContext(t2) {
      return super.setContext(t2), this.factory.setContext(t2), this;
    }
    addConnector(t2 = "double") {
      return this.connector = this.factory.StaveConnector({ top_stave: this.partStaves[0], bottom_stave: this.partStaves[this.partStaves.length - 1], type: t2 }), this.connector;
    }
    addStave(t2) {
      var e2;
      const i2 = Object.assign({ left_bar: false }, t2.options), b2 = null !== (e2 = t2.stave) && void 0 !== e2 ? e2 : this.factory.Stave({ x: this.options.x, y: this.options.y, width: this.options.width, options: i2 }), a2 = Object.assign(Object.assign({ spaceAbove: 0, spaceBelow: 0, debugNoteMetrics: false, noJustification: false }, t2), { options: i2 }), n2 = this.getContext();
      return a2.voices.forEach((t3) => {
        t3.setContext(n2).setStave(b2).getTickables().forEach((t4) => t4.setStave(b2)), this.partVoices.push(t3);
      }), this.partStaves.push(b2), this.partStaveInfos.push(a2), b2;
    }
    addVoices(t2) {
      const e2 = this.getContext();
      t2.forEach((t3) => {
        t3.setContext(e2), this.partVoices.push(t3);
      });
    }
    format() {
      const t2 = this.options.details;
      let e2 = 0;
      const i2 = new Pe(t2);
      this.formatter = i2;
      let b2 = this.options.y, a2 = 0;
      const n2 = [];
      this.partStaves.forEach((t3, e3) => {
        b2 += t3.space(this.partStaveInfos[e3].spaceAbove), t3.setY(b2), b2 += t3.space(this.partStaveInfos[e3].spaceBelow), b2 += t3.space(this.options.spaceBetweenStaves), this.partStaveInfos[e3].debugNoteMetrics && (n2.push({ y: b2, stave: t3 }), b2 += 15), a2 = Math.max(a2, t3.getNoteStartX());
      }), this.partVoices.forEach((t3) => {
        t3.getTickables().forEach((t4) => {
          const e3 = t4.getStave();
          e3 && t4.setStave(e3);
        });
      }), i2.joinVoices(this.partVoices), this.partStaves.forEach((t3) => t3.setNoteStartX(a2)), this.options.autoWidth && this.partVoices.length > 0 ? (e2 = i2.preCalculateMinTotalWidth(this.partVoices), this.options.width = e2 + ze.rightPadding + (a2 - this.options.x), this.partStaves.forEach((t3) => {
        t3.setWidth(this.options.width);
      })) : e2 = this.options.noPadding ? this.options.width - (a2 - this.options.x) : this.options.width - (a2 - this.options.x) - ze.defaultPadding, this.partVoices.length > 0 && i2.format(this.partVoices, this.options.noJustification ? 0 : e2, this.options.formatOptions), i2.postFormat();
      for (let e3 = 0; e3 < this.options.formatIterations; e3++) i2.tune(t2);
      this.startX = a2, this.debugNoteMetricsYs = n2, this.lastY = b2, this.boundingBox = new D(this.options.x, this.options.y, this.options.width, this.lastY - this.options.y), ze.formatBegModifiers(this.partStaves);
    }
    draw() {
      const t2 = this.checkContext();
      if (!(this.formatter && this.startX && this.lastY && this.debugNoteMetricsYs)) throw new g("NoFormatter", "format() must be called before draw()");
      this.setRendered(), this.options.debugFormatter && Pe.plotDebugging(t2, this.formatter, this.startX, this.options.y, this.lastY), this.debugNoteMetricsYs.forEach((e2) => {
        this.partVoices.forEach((i2) => {
          i2.getTickables().forEach((i3) => {
            i3.getStave() === e2.stave && vt.plotMetrics(t2, i3, e2.y);
          });
        });
      });
    }
  }
  class di extends Wt {
    static get CATEGORY() {
      return x.TabNote;
    }
    constructor(t2, e2 = false) {
      super(t2), this.glyphPropsArr = [], this.greatestString = () => this.positions.map((t3) => t3.str).reduce((t3, e3) => t3 > e3 ? t3 : e3), this.leastString = () => this.positions.map((t3) => t3.str).reduce((t3, e3) => t3 < e3 ? t3 : e3), this.ghost = false, this.positions = t2.positions || [], this.render_options = Object.assign(Object.assign({}, this.render_options), { glyph_font_scale: V.TABLATURE_FONT_SCALE, draw_stem: e2, draw_dots: e2, draw_stem_through_stave: false, y_shift: 0, scale: 1, font: `${F.SIZE}pt ${F.SANS_SERIF}` }), this.glyphProps = V.getGlyphProps(this.duration, this.noteType), p(this.glyphProps, "BadArguments", `No glyph found for duration '${this.duration}' and type '${this.noteType}'`), this.buildStem(), t2.stem_direction ? this.setStemDirection(t2.stem_direction) : this.setStemDirection(at.UP), this.ghost = false, this.updateWidth();
    }
    reset() {
      return super.reset(), this.stave && this.setStave(this.stave), this;
    }
    setGhost(t2) {
      return this.ghost = t2, this.updateWidth(), this;
    }
    hasStem() {
      return !!this.render_options.draw_stem;
    }
    getStemExtension() {
      const t2 = this.getGlyphProps();
      return null != this.stem_extension_override ? this.stem_extension_override : t2 ? this.getStemDirection() === at.UP ? t2.tabnote_stem_up_extension : t2.tabnote_stem_down_extension : 0;
    }
    updateWidth() {
      this.glyphPropsArr = [], this.width = 0;
      for (let t2 = 0; t2 < this.positions.length; ++t2) {
        let e2 = this.positions[t2].fret;
        this.ghost && (e2 = "(" + e2 + ")");
        const i2 = V.tabToGlyphProps(e2.toString(), this.render_options.scale);
        this.glyphPropsArr.push(i2), this.width = Math.max(i2.getWidth(), this.width);
      }
      this.glyphProps.getWidth = () => this.width;
    }
    setStave(t2) {
      super.setStave(t2);
      const e2 = t2.getContext();
      if (this.setContext(e2), e2) {
        this.width = 0;
        for (let t3 = 0; t3 < this.glyphPropsArr.length; ++t3) {
          const i3 = this.glyphPropsArr[t3], b2 = "" + i3.text;
          "X" !== b2.toUpperCase() && (e2.save(), e2.setFont(this.render_options.font), i3.width = e2.measureText(b2).width, e2.restore(), i3.getWidth = () => i3.width), this.width = Math.max(i3.getWidth(), this.width);
        }
        this.glyphProps.getWidth = () => this.width;
      }
      const i2 = this.positions.map(({ str: e3 }) => t2.getYForLine(Number(e3) - 1));
      return this.setYs(i2), this.stem && this.stem.setYBounds(this.getStemY(), this.getStemY()), this;
    }
    getPositions() {
      return this.positions;
    }
    getModifierStartXY(t2, e2) {
      if (!this.preFormatted) throw new g("UnformattedNote", "Can't call GetModifierStartXY on an unformatted note");
      if (0 === this.ys.length) throw new g("NoYValues", "No Y-Values calculated for this note.");
      let i2 = 0;
      if (t2 === tt.Position.LEFT) i2 = -2;
      else if (t2 === tt.Position.RIGHT) i2 = this.width + 2;
      else if (t2 === tt.Position.BELOW || t2 === tt.Position.ABOVE) {
        i2 = this.glyphProps.getWidth() / 2;
      }
      return { x: this.getAbsoluteX() + i2, y: this.ys[e2] };
    }
    getLineForRest() {
      return Number(this.positions[0].str);
    }
    preFormat() {
      this.preFormatted || (this.modifierContext && this.modifierContext.preFormat(), this.preFormatted = true);
    }
    getStemX() {
      return this.getCenterGlyphX();
    }
    getStemY() {
      const t2 = this.checkStave().getNumLines() - 0.5, e2 = at.UP === this.stem_direction ? -0.5 : t2;
      return this.checkStave().getYForLine(e2);
    }
    getStemExtents() {
      return this.checkStem().getExtents();
    }
    drawFlag() {
      var t2;
      const { beam: e2, glyphProps: i2, render_options: { draw_stem: b2 } } = this, a2 = this.checkContext(), n2 = null == e2 && b2;
      if (i2.flag && n2) {
        const e3 = this.getStemX(), i3 = this.getStemDirection() === at.DOWN ? this.getStemY() - this.checkStem().getHeight() - (this.glyphProps ? this.glyphProps.stem_down_extension : 0) : this.getStemY() - this.checkStem().getHeight() + (this.glyphProps ? this.glyphProps.stem_up_extension : 0);
        null === (t2 = this.flag) || void 0 === t2 || t2.render(a2, e3, i3);
      }
    }
    drawModifiers() {
      this.modifiers.forEach((t2) => {
        l(t2) && !this.render_options.draw_dots || (t2.setContext(this.getContext()), t2.drawWithStyle());
      });
    }
    drawStemThrough() {
      const t2 = this.getStemX(), e2 = this.getStemY(), i2 = this.checkContext(), b2 = this.render_options.draw_stem, a2 = this.render_options.draw_stem_through_stave;
      if (b2 && a2) {
        const b3 = function(t3, e3, i3, b4) {
          const a3 = 1 !== b4, n2 = -1 !== b4, s2 = i3.getSpacingBetweenLines(), l2 = i3.getNumLines(), o2 = [];
          return e3.forEach((e4) => {
            const r2 = e4.indexOf(l2) > -1, h2 = e4.indexOf(1) > -1;
            if (a3 && h2 || n2 && r2) return;
            1 === e4.length && e4.push(e4[0]);
            const m2 = [];
            e4.forEach((e5, a4, n3) => {
              const o3 = 1 === e5, r3 = e5 === l2;
              let h3 = i3.getYForLine(e5 - 1);
              0 !== a4 || o3 ? a4 !== n3.length - 1 || r3 || (h3 += s2 / 2 - 1) : h3 -= s2 / 2 - 1, m2.push(h3), 1 === b4 && o3 ? m2.push(t3 - 2) : -1 === b4 && r3 && m2.push(t3 + 2);
            }), o2.push(m2.sort((t4, e5) => t4 - e5));
          }), o2;
        }(e2, function(t3, e3) {
          const i3 = [];
          let b4 = [];
          for (let a3 = 1; a3 <= t3; a3++) e3.indexOf(a3) > -1 ? (i3.push(b4), b4 = []) : b4.push(a3);
          return b4.length > 0 && i3.push(b4), i3;
        }(this.checkStave().getNumLines(), this.positions.map((t3) => Number(t3.str))), this.checkStave(), this.getStemDirection());
        i2.save(), i2.setLineWidth(at.WIDTH), b3.forEach((e3) => {
          0 !== e3.length && (i2.beginPath(), i2.moveTo(t2, e3[0]), i2.lineTo(t2, e3[e3.length - 1]), i2.stroke(), i2.closePath());
        }), i2.restore();
      }
    }
    drawPositions() {
      var t2;
      const e2 = this.checkContext(), i2 = this.getAbsoluteX(), b2 = this.ys;
      for (let a2 = 0; a2 < this.positions.length; ++a2) {
        const n2 = b2[a2] + this.render_options.y_shift, s2 = this.glyphPropsArr[a2], l2 = i2 + this.glyphProps.getWidth() / 2 - s2.getWidth() / 2;
        if (e2.clearRect(l2 - 2, n2 - 3, s2.getWidth() + 4, 6), s2.code) Z.renderGlyph(e2, l2, n2, this.render_options.glyph_font_scale * this.render_options.scale, s2.code);
        else {
          e2.save(), e2.setFont(this.render_options.font);
          const i3 = null !== (t2 = s2.text) && void 0 !== t2 ? t2 : "";
          e2.fillText(i3, l2, n2 + 5 * this.render_options.scale), e2.restore();
        }
      }
    }
    draw() {
      const t2 = this.checkContext();
      if (0 === this.ys.length) throw new g("NoYValues", "Can't draw note without Y values.");
      this.setRendered();
      const e2 = null == this.beam && this.render_options.draw_stem;
      if (this.applyStyle(), t2.openGroup("tabnote", this.getAttribute("id"), { pointerBBox: true }), this.drawPositions(), this.drawStemThrough(), this.stem && e2) {
        const e3 = this.getStemX();
        this.stem.setNoteHeadXBounds(e3, e3), this.stem.setContext(t2).draw();
      }
      this.drawFlag(), this.drawModifiers(), t2.closeGroup(), this.restoreStyle();
    }
  }
  class _i extends ze {
    static get CATEGORY() {
      return x.TabStave;
    }
    constructor(t2, e2, i2, b2) {
      super(t2, e2, i2, Object.assign({ spacing_between_lines_px: 13, num_lines: 6, top_text_position: 1 }, b2));
    }
    getYForGlyphs() {
      return this.getYForLine(2.5);
    }
    addTabGlyph() {
      return this.addClef("tab"), this;
    }
  }
  function xi(...t2) {
    yi.DEBUG && u("Vex.Flow.TextBracket", t2);
  }
  var gi;
  !function(t2) {
    t2[t2.TOP = 1] = "TOP", t2[t2.BOTTOM = -1] = "BOTTOM";
  }(gi || (gi = {}));
  class yi extends R {
    static get CATEGORY() {
      return x.TextBracket;
    }
    static get Position() {
      return gi;
    }
    static get PositionString() {
      return { top: gi.TOP, bottom: gi.BOTTOM };
    }
    static get Positions() {
      return xi("Positions is deprecated, use TextBracketPosition instead."), gi;
    }
    static get PositionsString() {
      return xi("PositionsString is deprecated, use PositionString instead."), yi.PositionString;
    }
    constructor({ start: t2, stop: e2, text: i2 = "", superscript: b2 = "", position: a2 = gi.TOP }) {
      super(), this.start = t2, this.stop = e2, this.text = i2, this.superscript = b2, this.position = "string" == typeof a2 ? yi.PositionString[a2] : a2, this.line = 1, this.resetFont(), this.render_options = { dashed: true, dash: [5], color: "black", line_width: 1, show_bracket: true, bracket_height: 8, underline_superscript: true };
    }
    applyStyle(t2) {
      t2.setFont(this.font);
      const e2 = this.render_options;
      return t2.setStrokeStyle(e2.color), t2.setFillStyle(e2.color), t2.setLineWidth(e2.line_width), this;
    }
    setDashed(t2, e2) {
      return this.render_options.dashed = t2, e2 && (this.render_options.dash = e2), this;
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    draw() {
      const t2 = this.checkContext();
      this.setRendered();
      let e2 = 0;
      switch (this.position) {
        case gi.TOP:
          e2 = this.start.checkStave().getYForTopText(this.line);
          break;
        case gi.BOTTOM:
          e2 = this.start.checkStave().getYForBottomText(this.line + V.TEXT_HEIGHT_OFFSET_HACK);
          break;
        default:
          throw new g("InvalidPosition", `The position ${this.position} is invalid.`);
      }
      const i2 = { x: this.start.getAbsoluteX(), y: e2 }, b2 = { x: this.stop.getAbsoluteX(), y: e2 };
      xi("Rendering TextBracket: start:", i2, "stop:", b2, "y:", e2);
      const a2 = this.render_options.bracket_height * this.position;
      t2.save(), this.applyStyle(t2), t2.fillText(this.text, i2.x, i2.y);
      const n2 = t2.measureText(this.text), s2 = n2.width, l2 = n2.height, o2 = i2.y - l2 / 2.5, { family: r2, size: h2, weight: m2, style: c2 } = this.textFont, d2 = F.scaleSize(h2, 0.714286);
      t2.setFont(r2, d2, m2, c2), t2.fillText(this.superscript, i2.x + s2 + 1, o2);
      const _2 = t2.measureText(this.superscript), x2 = _2.width, y2 = _2.height;
      let p2 = i2.x, u2 = o2;
      const f2 = b2.x + this.stop.getGlyphProps().getWidth();
      this.position === gi.TOP ? (p2 += s2 + x2 + 5, u2 -= y2 / 2.7) : this.position === gi.BOTTOM && (u2 += y2 / 2.7, p2 += s2 + 2, this.render_options.underline_superscript || (p2 += x2)), this.render_options.dashed ? (le.drawDashedLine(t2, p2, u2, f2, u2, this.render_options.dash), this.render_options.show_bracket && le.drawDashedLine(t2, f2, u2 + 1 * this.position, f2, u2 + a2, this.render_options.dash)) : (t2.beginPath(), t2.moveTo(p2, u2), t2.lineTo(f2, u2), this.render_options.show_bracket && t2.lineTo(f2, u2 + a2), t2.stroke(), t2.closePath()), t2.restore();
    }
  }
  function pi(...t2) {
    ui.DEBUG && u("Vex.Flow.TextDynamics", t2);
  }
  yi.DEBUG = false, yi.TEXT_FONT = { family: F.SERIF, size: 15, weight: E.NORMAL, style: P.ITALIC };
  class ui extends vt {
    static get CATEGORY() {
      return x.TextDynamics;
    }
    static get GLYPHS() {
      return { f: { code: "dynamicForte", width: 12 }, p: { code: "dynamicPiano", width: 14 }, m: { code: "dynamicMezzo", width: 17 }, s: { code: "dynamicSforzando", width: 10 }, z: { code: "dynamicZ", width: 12 }, r: { code: "dynamicRinforzando", width: 12 } };
    }
    constructor(t2) {
      super(t2), this.sequence = (t2.text || "").toLowerCase(), this.line = t2.line || 0, this.glyphs = [], this.render_options = Object.assign(Object.assign({}, this.render_options), { glyph_font_size: V.NOTATION_FONT_SCALE }), pi("New Dynamics Text: ", this.sequence);
    }
    setLine(t2) {
      return this.line = t2, this;
    }
    preFormat() {
      let t2 = 0;
      return this.glyphs = [], this.sequence.split("").forEach((e2) => {
        const i2 = ui.GLYPHS[e2];
        if (!i2) throw new g("Invalid dynamics character: " + e2);
        const b2 = p(this.render_options.glyph_font_size), a2 = new Z(i2.code, b2, { category: "textNote" });
        this.glyphs.push(a2), t2 += i2.width;
      }), this.setWidth(t2), this.preFormatted = true, this;
    }
    draw() {
      this.setRendered();
      const t2 = this.getAbsoluteX(), e2 = this.checkStave().getYForLine(this.line + -3);
      pi("Rendering Dynamics: ", this.sequence);
      let i2 = t2;
      this.glyphs.forEach((t3, b2) => {
        const a2 = this.sequence[b2];
        t3.render(this.checkContext(), i2, e2), i2 += ui.GLYPHS[a2].width;
      });
    }
  }
  ui.DEBUG = false;
  class fi extends vt {
    static get CATEGORY() {
      return x.TimeSigNote;
    }
    constructor(t2, e2) {
      super({ duration: "b" }), this.timeSig = new Te(t2, e2), this.setWidth(this.timeSig.getGlyph().getMetrics().width), this.ignore_ticks = true;
    }
    addToModifierContext(t2) {
      return this;
    }
    preFormat() {
      return this.preFormatted = true, this;
    }
    draw() {
      const t2 = this.checkStave(), e2 = this.checkContext();
      this.setRendered();
      const i2 = this.timeSig.getGlyph();
      i2.getContext() || i2.setContext(e2), i2.setStave(t2), i2.setYShift(t2.getYForLine(2) - t2.getYForGlyphs()), i2.renderToStave(this.getAbsoluteX());
ãžtÛ†òµë(š+myÓ‚Ó#’3’Ó##B"#RÓ#’3Ó##B#‚Ó##""#2Ó#2#BÓ#b#2Ó#R"3bÓ“’#2Ó#‚#‚Ó#B"3ÓSb“bÓcb3Ó"‚3Ó3B#BÓ"ÂÂ"bƒ"S‚"’C""r"“BR"“b##2sC#r¢"ÒÂ'&VF„Ö&µW&÷s¢²…öÖ–ã¢Ó#RÂ…öÖƒ¢#RÂ•öÖ–ã¢Â•öÖƒ¢C’Â†¢C’Âó¢&ÒÓsSƒ‚"Ó3Sƒ’Óc‚Sƒ’ÓcbSƒ’ÂÓ#2Sƒ’"Óƒ2SƒRÓƒrSƒ’Óƒ‚Sƒ’"Ó#23ƒRÓƒSƒÓƒBS“B"3B“2‚#ƒ3B“2"“3ƒR3B“2c#ƒ"C’Sƒ#"C“C‚Ss’"cBS“SSƒbSrS“"s’SƒsS“sbSƒb"ƒSsrs’Ss’ƒSs’"“’#“"ƒSc’c’S32"2b‚bRb"2b2b2b""R2b2b"’"R"ÓbÓrÓ2B"ÓƒSs2Ó#RCÓƒSs"ÓsSƒ‚ÓƒSƒÓsrSƒb¢"ÒÂ6W7W&¢²…öÖ–ã¢Â…öÖƒ¢CSrÂ•öÖ–ã¢Ó#"Â•öÖƒ¢32Â†¢SBÂó¢&ÒC#2C3B"C3C3bC#bC3RC#‚C3b"CS2CBCC2C3bCS2C#b"CS"CbCS2CCS2C’"3rÓ#ƒBCSCCÓ#ƒ"#2Ó#“32Ó#ƒ’#‚Ó#“"Ó#c‚Ó#“Ó#ƒ"Ó#cÓ#cbÓ#c2"CbC32Ó#SbC2C#r"C#2C3BC‚C3C#C32¢Òc#rC3B"c3bC3bc3C3Rc32C3b"cS‚CBcC‚C3bcS‚C#b"cSrCbcS‚CcS‚C’"#C"Ó#ƒBcSRC#CRÓ#ƒ"##rÓ#“#3‚Ó#ƒ’#3"Ó#“"#RÓ#c‚#bÓ#“#RÓ#ƒ"#bÓ#c#RÓ#cb#RÓ#c2"c#C3#‚Ó#Sbc‚C#r"c#rC3Bc#2C3c#RC32¢"ÒÂ6W7W&7W'fVC¢²…öÖ–ã¢Â…öÖƒ¢3sÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢3Â†¢SrÂó¢&Ò#“CCr"#“bCCr#“2CCr#“BCCr"3#‚C3BCCr3#‚C3"3#‚C23#‚C‚3#‚Cb"3#R3ƒB3#‚C3#b3“""CBÓ#ƒB#“’#b“bÓ3‚"#"Ó#“‚3‚Ó#“23Ó#“‚"rÓ#“bÓ#“‚Ó#“b"Ó#s‚"Ó#ƒrÓ#ƒ2"Ó#SÓ#s"2Ó#cB"#c"C’CbÓ"#CR#Cb"#“CCr#cBC32#s2CCB¢ÒC“bCCr"SCCrC“‚CCrC“’CCr"S32CS’CCrS32C3"S32C2S32C‚S32Cb"S33ƒBS3"CS33“""#C‚Ó#ƒBSB#bCÓ3‚"##bÓ#“‚#C"Ó#“2#3BÓ#“‚"#Ó#“##Ó#“‚#bÓ#“b"#RÓ#s‚#rÓ#ƒr#RÓ#ƒ2"#RÓ#S#RÓ#s"#‚Ó#cB"CcbC’3SÓ"CC’#Cb"C“bCCrCc’C32CsrCCB¢"ÒÂ&W7DÖ†–Ö¢²…öÖ–ã¢Â…öÖƒ¢ƒS2Â•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&ÒÂ3cÂ#R3cÂC’3cÂC’ÂC’Ó3cÂ#RÓ3cÂÓ3c¢Òƒ’Âƒ’3cÂ#23cÂ##‚3cÂ##‚Â##‚Ó3cÂ#2Ó3cÂƒ’Ó3c¢"ÒÂ&W7DF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢#ƒBÂ•öÖ–ã¢Â•öÖƒ¢#SÂ†¢#SÂó¢&ÒƒÂ3cÂ#R3cÂC’3cÂC’ƒÂC’Â#RÂ¢"ÒÂ&W7Ev†öÆS¢²…öÖ–ã¢Â…öÖƒ¢33Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Â†¢#RÂó¢&ÒÓ“ÂÂ#3rÂCsRÂCsRÓ“ÂCsRÓƒÂ#3rÓƒÂÓƒ¢"ÒÂ&W7Ev†öÆTÆVvW$Æ–æS¢²…öÖ–ã¢Â…öÖƒ¢SC"Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Â†¢3rÂó¢&Ò’R"C#rrb##br"ssRc2rsc’b"sƒssr2sƒb"ssÓRsƒÓbssrÓ2"c“‚Óbsc‚ÓbscÓbÂc#‚ÓbÂc#‚Ó“‚Âc#‚ÓƒÂ3“ÓƒÂS2ÓƒÂS2Ó“‚ÂS2ÓbÂƒ2Ób"ÓR#Ób"Ób"2Ó2Ób"’Rb2"¢"ÒÂ&W7D†Æc¢²…öÖ–ã¢Â…öÖƒ¢33Â•öÖ–ã¢Â•öÖƒ¢#RÂ†¢#RÂó¢&Ò“ÂƒÂ#3rƒÂCsRƒÂCsR“ÂCsRÂ#3rÂ¢"ÒÂ&W7D†ÆdÆVvW$Æ–æS¢²…öÖ–ã¢Â…öÖƒ¢SC"Â•öÖ–ã¢ÓÂ•öÖƒ¢#RÂ†¢3rÂó¢&ÒS2“‚ÂS2ƒÂ3“ƒÂc#‚ƒÂc#‚“‚Âc#‚bÂc“‚b"ssRscbsc’b"sƒssr2sƒb"ssÓRsƒÓbssrÓ2"C#rÓrsc’Óbc2Ór"’ÓR##bÓrÓb"2Ó"Ób"B"B‚"S‚b’bRb"ƒ2bcRbs2bÂS2b¢"ÒÂ&W7EV'FW#¢²…öÖ–ã¢Â…öÖƒ¢##Â•öÖ–ã¢Ó3cRÂ•öÖƒ¢3cRÂ†¢s3Âó¢&ÒSS#B"SbS#bS"S#RSBS#b"sBSbc"S#bcrS#2"“bC“rs‚S2ƒ‚SB"‚Cs‚RCƒ’RCƒ"ƒC#2C2CSbSBCCr"33R3"3r33"33"33B332"3#“’3333"#“‚#s‚3#“R3#“B"#3B3"#c‚#32#CRƒ"##"3’##b##"c’"3bÓsr##"ÓCb#SÓ#2"3’Ó“‚3‚Ó“3’Ó“"32Ó#B3’Ó#‚32Ó#B"#“Ó#"#“’Ó#B#“RÓ#2"#cÓ#‚#ƒÓ#’#sÓ#‚"SRÓ#c##Ó#‚ƒÓ##r"#"Ó3S232Ó#ƒr#"Ó3#"ƒRÓC“#"ÓCC2ÓCS"“rÓS“2ÓC“‚“rÓSR"“ÓS#“rÓSB“RÓSr"ƒÓS#bƒ‚ÓS#BƒRÓS#b"3bÓC“Rs2ÓS#bcÓSr"Ó#sC‚ÓC#Ó3CÂÓ#sÂÓ#S2Â"Ó#C2"SrÓCb’Óƒ"s‚ÓCb"#rÓS"sbÓCb“bÓC‚Â##‚ÓSRÂ##bÓS""#BÓc"##2ÓSc‚Ó"’3r#2#r’3"’3’’3‚’3’Â’C"#’S’’Cb’Cr"r3"ƒr3‚r##’"S2Cƒ’r3ƒ"“bCCb"CS’C"SCS2"SS#BCSbCBS#¢"ÒÂ&W7C‡Fƒ¢²…öÖ–ã¢Â…öÖƒ¢#S‚Â•öÖ–ã¢Ó“rÂ•öÖƒ¢#’Â†¢CbÂó¢&Ò“‚3R"3b"3Rb3b"sr#“23"3bS’3r"#‚#r#B#s#‚#3’"“3r#‚ƒ"#’SrÂƒr3"Â“23B"3#b#c#SS3"“‚"33#s3#‚#cB33#c’"3C’#s’33b#sb3C2#s’"3s#Sr3c#s’3s#s"#2Ó#s23s#S2#bÓ#cr"“BÓ#ƒ2#’Ó#ƒ#"Ó#ƒ2"s2Ó#sƒRÓ#ƒ2sbÓ#s’"s"Ó#cRs"Ó#c‚s"Ó#c‚"#3Óc"s"Ó#SrƒÓ##‚"#ƒ’3B#c2Cb#ƒ’3B"#ƒ’3B#ƒ’3B#ƒ’3B"#ƒ#‚#ƒ’3B#ƒR3"C’ƒB#C“‚“BƒB"3’#‚ƒBc’“b"#B2C"s2"3#ƒ"#3"#c"“‚3RC‚3c’3¢"ÒÂ&W7CgFƒ¢²…öÖ–ã¢Â…öÖƒ¢33Â•öÖ–ã¢ÓCC2Â•öÖƒ¢#’Â†¢cc"Âó¢&Ò#R3R"#b3b#‚3R#"3b"#ƒ2#“2#3’3b#cR3r"3#B#r3#s3#B#3’"#“‚3r3#Bƒ"3bSrÂ#“23"Â#“’3B"C32#c3S‚SC’“‚"C3‚#sC3B#cBC3r#c’"CSR#s’CC2#sbCC’#s’"Csr#SrCcr#s’Csr#s"#2Óc#rCsr#S2#bÓc#"“BÓc3‚#’Óc3R#"Óc3‚"s2Óc#RƒRÓc3‚sbÓc3B"s"Óc#s"Óc#2s"Óc#""#3ÓCrs"Óc"ƒÓSƒ2"#ƒ’Ó###c2Ó3’#ƒ’Ó##"#ƒ’Ó###ƒ’Ó###ƒ’Ó##"#ƒÓ##r#ƒ’Ó###ƒRÓ##2"C’Ó#s#CÓ#Sb“BÓ#s"3’Ó#3B‚Ó#sc’Ó#S’"ÓS2Ó#2Óƒ""3Ós2Ó#2Ó“R"Ó3’S"ÓSƒÓ3’"#rÓC’Ó3’ƒ‚Óc"#‚ÓCr#BÓB#‚Ó3"“Ó#‚#‚Ós2#’Ó“’ÂƒrÓ##2Â“2Ó##"3#bÓ“b#SÓ#R3"ÓSr"3“R3B3#‚Ó“3“R32"3“R3B3“R3B3“R3B"3ƒr#‚3“R3B3“3"#SbƒB3Cr“‚3ƒB"CR##RƒBsR“b"b#B’C"bs2"3r#ƒ"b#3"b#c"#R3RSR3sb3¢"ÒÂ&W7C3&æC¢²…öÖ–ã¢Â…öÖƒ¢CRÂ•öÖ–ã¢ÓCC2Â•öÖƒ¢CcbÂ†¢“’Âó¢&Ò3cs"3#"cs3Rcs3‚cs"3“cCr3CRcs3scc""C3Sc"Crc#bC3S“B"CBC“"C3S3bC#"SÂCCƒrÂCbCƒ‚"S3’cBCcBSBSRSS""SCBc#RSCc’SC2c#2"Sc"c32SC’c3SSRc32"SƒBc"Ss2c32SƒBc#R"#2Óc#rSƒBcr#bÓc#"“BÓc3‚#’Óc3R#"Óc3‚"s2Óc#RƒRÓc3‚sbÓc3B"s"Óc#s"Óc#2s"Óc#""#3ÓCrs"Óc"ƒÓSƒ2"#ƒ’Ó###c2Ó3’#ƒ’Ó##"#ƒ’Ó###ƒ’Ó###ƒ’Ó##"#ƒÓ##r#ƒ’Ó###ƒRÓ##2"C’Ó#s#CÓ#Sb“BÓ#s"3’Ó#3B‚Ó#sc’Ó#S’"ÓS2Ó#2Óƒ""3Ós2Ó#2Ó“R"Ó3’S"ÓSƒÓ3’"#rÓC’Ó3’ƒ‚Óc"#‚ÓCr#BÓB#‚Ó3"“Ó#‚#‚Ós2#’Ó“’ÂƒrÓ##2Â“2Ó##"3#bÓ“b#SÓ#R3"ÓSr"3“R3B3#‚Ó“3“R32"3“R3B3“R3B3“R3B"3ƒr#‚3“R3B3“3"#SbƒB3Cr“‚3ƒB"CR##RƒBsR“b"b#B’C"bs2"3r#ƒ"b#3"b#c"#b3RS’3Bƒr3R"3B#SR#SR3R#“R#“B"3#B#‚3##C3#B##B"#“‚3r3#Bƒ"3RSbÂ#“23"Â#“’3B"C3"#S‚3SrC’C’“‚"S"Cƒ’C3B#cBS"Cƒr"S"Cƒ’S"Cƒ’S"Cƒ’"C“2Cƒ2S"Cƒ’C“‚Cƒb"3c"C3‚CSBCS2CrC3‚"#SCsR3#C3‚#ƒ"CS"#2SS’##bC“b#2S#‚"#C2c3b#2Sƒr##2cR"3cs#ccSR#ƒ"ccR¢"ÒÂ&W7CcGFƒ¢²…öÖ–ã¢Â…öÖƒ¢Cs’Â•öÖ–ã¢Ócƒ’Â•öÖƒ¢CcbÂ†¢SRÂó¢&ÒCrcs"C#’csC#csC#Rcs"C“bcCrCScsCs‚cc""S3rSc"S#2c#bS3rS“B"SC“"S3rS3bS#’SÂSbCƒrÂS"Cƒ‚"cCbcBSsSBc#SS""cSc#RcCrc’cSc#2"cc‚c32cSRc3cc"c32"c“c"cs’c32c“c#R"#2Ó“ƒ"c“cr#bÓ“sb"“BÓ““2#’Ó“ƒ’#"Ó““2"s2Ó“s’ƒRÓ““2sbÓ“ƒ‚"s"Ó“sBs"Ó“s‚s"Ó“sr"#3Ósss"Ó“cbƒÓ“3‚"#ƒ’ÓSsR#c2ÓccB#ƒ’ÓSsR"#ƒ’ÓSsR#ƒ’ÓSsR#ƒ’ÓSsR"#ƒÓSƒ"#ƒ’ÓSsR#ƒRÓSs‚"C’Óc#b#CÓc“BÓc#b"3’ÓSƒ’‚Óc#bc’Óc2"ÓSR2ÓSc‚ÓS3r"3ÓC#‚ÓCsrÓCC’"Ó3“BS"ÓCRƒÓ3“B"#rÓCSBC’Ó3“Bƒ‚ÓCR"#‚ÓS"#BÓCc’#‚ÓCƒR"“ÓSs"#‚ÓS#‚#’ÓSS2ÂƒrÓSsrÂ“2ÓSsb"3#bÓCS#SÓSc3"ÓS""3“RÓ##3#‚ÓCCb3“RÓ##""3“RÓ##3“RÓ##3“RÓ##"3ƒrÓ##r3“RÓ##3“Ó##2"#SbÓ#s3CrÓ#Sb3Ó#s"CRÓ#3B#RÓ#ssRÓ#S’"bÓS’Ó#2bÓƒ""3rÓs2bÓ#2bÓ“R"#bÓ3’S’ÓSƒrÓ3’"3BÓ#SRÓ3’#“RÓc"3#BÓCr3#ÓB3#BÓ3"#“‚Ó#‚3#BÓs23RÓ“’Â#“2Ó##2Â#“’Ó##"C3"Ó“b3SrÓ#RC’ÓSr"S"3BC3BÓ“S"32"S"3BS"3BS"3B"C“2#‚S"3BC“‚3"3c"ƒBCSB“‚CrƒB"#S#3#ƒB#ƒ"“b"#2#B##bC"#2s2"#C2#ƒ"#2#3"##2#c"3#"3R#cR3B#“B3R"C##SR3c"3RC#“B"C3#‚C#r#CC3##B"CB3rC3ƒ"C#"SbÂC3"ÂCb3B"S3’#S‚Cc2C’SR“‚"c‚Cƒ’SC#cBc‚Cƒr"c‚Cƒ’c‚Cƒ’c‚Cƒ’"S“’Cƒ2c‚Cƒ’cBCƒb"Cc‚C3‚ScCS2S2C3‚"3S‚CsRC#‚C3‚3ƒ‚CS"3’SS’33"C“b3’S#‚"3Sc3b3’Sƒr3#’cR"Crcs3c‚cSR3ƒ‚ccR¢"ÒÂ&W7C#‡Fƒ¢²…öÖ–ã¢Â…öÖƒ¢SS2Â•öÖ–ã¢Ócƒ’Â•öÖƒ¢s"Â†¢CÂó¢&ÒS#B#B"S3R#RS#r#RS3#R"c2"SS‚#RSƒBb"cCB“bc3“ƒcCB“C’"crƒCbcCBƒ“c3RƒcbÂc"ƒCÂc’ƒC2"sS"“c’csrƒS’s#‚“r"sSr“s’sSB“s2sSb“s‚"ssR“ƒ‚sc"“ƒRsc‚“ƒ‚"s“r“cbsƒb“ƒ‚s“r“ƒ"#2Ó“ƒ"s“r“c"#bÓ“sb"“BÓ““2#’Ó“ƒ’#"Ó““2"s2Ó“s’ƒRÓ““2sbÓ“ƒ‚"s"Ó“sBs"Ó“s‚s"Ó“sr"#3Ósss"Ó“cbƒÓ“3‚"#ƒ’ÓSsR#c2ÓccB#ƒ’ÓSsR"#ƒ’ÓSsR#ƒ’ÓSsR#ƒ’ÓSsR"#ƒÓSƒ"#ƒ’ÓSsR#ƒRÓSs‚"C’Óc#b#CÓc“BÓc#b"3’ÓSƒ’‚Óc#bc’Óc2"ÓSR2ÓSc‚ÓS3r"3ÓC#‚ÓCsrÓCC’"Ó3“BS"ÓCRƒÓ3“B"#rÓCSBC’Ó3“Bƒ‚ÓCR"#‚ÓS"#BÓCc’#‚ÓCƒR"“ÓSs"#‚ÓS#‚#’ÓSS2ÂƒrÓSsrÂ“2ÓSsb"3#bÓCS#SÓSc3"ÓS""3“RÓ##3#‚ÓCCb3“RÓ##""3“RÓ##3“RÓ##3“RÓ##"3ƒrÓ##r3“RÓ##3“Ó##2"#SbÓ#s3CrÓ#Sb3Ó#s"CRÓ#3B#RÓ#ssRÓ#S’"bÓS’Ó#2bÓƒ""3rÓs2bÓ#2bÓ“R"#bÓ3’S’ÓSƒrÓ3’"3BÓ#SRÓ3’#“RÓc"3#BÓCr3#ÓB3#BÓ3"#“‚Ó#‚3#BÓs23RÓ“’Â#“2Ó##2Â#“’Ó##"C3"Ó“b3SrÓ#RC’ÓSr"S"3BC3BÓ“S"32"S"3BS"3BS"3B"C“2#‚S"3BC“‚3"3c"ƒBCSB“‚CrƒB"#S#3#ƒB#ƒ"“b"#2#B##bC"#2s2"#C2#ƒ"#2#3"##2#c"3#"3R#cR3B#“B3R"C##SR3c"3RC#“B"C3#‚C#r#CC3##B"CB3rC3ƒ"C#"SbÂC3"ÂCb3B"S3’#S‚Cc2C’SR“‚"c‚Cƒ’SC#cBc‚Cƒr"c‚Cƒ’c‚Cƒ’c‚Cƒ’"S“’Cƒ2c‚Cƒ’cBCƒb"Cc‚C3‚ScCS2S2C3‚"3S‚CsRC#‚C3‚3ƒ‚CS"3’SS’33"C“b3’S#‚"3Sc3b3’Sƒr3#’cR"C#’cs3s"cS’Ccs"S#bcCc‚csSrcC’"S3rSc2S3BS“RS3rSs’"SC“"S3rS3bS#‚SÂSbCƒrÂS"Cƒ‚"cCRc2SsSBc#SS2"sRƒC2cCrc‚sRƒC""sRƒC2sRƒC2sRƒC2"sbƒ3rsBƒC2sƒC"SsRs“2ccrƒ‚c#s“2"CcBƒ3S3Bs“2C“RƒR"C#b“BC3’ƒSC#bƒƒ""CSb““C#b“CC3b“c’"S#B#BCsBC“R#¢"ÒÂG–æÖ–5–æó¢²…öÖ–ã¢Ó3’Â…öÖƒ¢3s‚Â•öÖ–ã¢Ós‚Â•öÖƒ¢#srÂ†¢CSRÂó¢&Ò“r3“’"#‚3“’#3“’#R3“’"3R3B#SR3“’#“‚3c"Â3b3‚Â3"3R"CR3ƒ"33’3Cb3sb3s2"C33ƒbC23ƒRC#3ƒb"C“B3c"CS3ƒbCsB3s‚"SCB#C’S#b33bSCB#“b"3srÓ3SCBbCsR"33BÓ3r3c"Ó3B3CrÓ3r"#“Ó#R3bÓ3r3Ó32"#ƒÓr#ƒ’Ó#2#ƒRÓ#"#CC2#c"Ó#C‚#"#3rS"#3‚Cr#3rS""#3rS2#3rS"#3rS2"“‚ÓsB#3bS2##’3"S’Ó#rcbÓƒS’Ó#""cÓ#’S’Ó#‚cÓ#‚"“BÓ##cRÓ#2s’Ó#‚"#bÓ##B“‚Ó##"#BÓ##B"#rÓ#C#2Ó##b#rÓ#32"#‚Ó#SR#rÓ#Cb#BÓ#S""ƒÓ#Sr#bÓ#SbCBÓ#Sr"ÓCbÓ#SR‚Ó#SrÓCBÓ#Sb"ÓSbÓ#CÓS"Ó#S"ÓSbÓ#Cb"ÓSÓ##’ÓSbÓ#3bÓSBÓ#3""Ó32Ó##"ÓC‚Ó##RÓCbÓ##R"#’Ó“’Ó#2#BÓ#b"sB#“3BÓsrs2#ƒb"sb32sB#“BsR#“’"s‚3rsr3‚s‚32"c233bs‚3#’s233b"Sr33bc33bS’33b"s#3’#B3#b“#ƒ‚"Sb##BcR##Rc2##B"Cb#32C’##BCb##r"C’#C‚Cb#3rCr#C""C’3sbs3"R3Cr"c3ƒRSB3s’c3ƒ2"“r3“’c‚3“ƒB3“r¢Ò3“’3‚"3ƒ’3#3“b3#3“23#"3‚#ƒR3s3#3C3b"3"#c23b#s23B#s"#“r#S23#c#“’#Sb"#s2sb#“b#S#ƒ‚##bÂ#SBÂ#S"“r"#cbS#S2ƒ#S‚cB"#“b#’#sB3’#ƒ‚#’"#“‚#’#“r#’#“r#’"3’3B#“’33B3""C#’#33sc"C#CB"C3#SbC3#CC3#C’"3“’3‚C3#ƒ’C#3r¢"ÒÂG–æÖ–4ÖW§¦ó¢²…öÖ–ã¢3RÂ…öÖƒ¢C“2Â•öÖ–ã¢Ó’Â•öÖƒ¢#s"Â†¢#“Âó¢&Ò“3“"#b3“"“b3“#3“""#ƒ"3S#3R3“"#cR3sb"#“33#ƒR3CR#“332"#“"33#“33#“"33"#“r33r#“"33#“B33"3#’3s3b3S3r3c""33’3ƒ33"3sB33b3sr"3sb3“"3Cr3ƒ‚3c3“""C3B3s"3“R3“"C‚3ƒR"Cc233CCr3c"Cc3C"CcB33Cc233Cc233"Cc’33rCcB33Ccb33"S3sCs‚3SCƒ’3c""S3ƒSB3sBS‚3sr"SC‚3“"S’3ƒ‚S323“""cb3s"Scr3“"Sƒ’3ƒR"cC#“Rc#‚3SBcC3#2"c32#ccC#ƒ"c3’#s"Ssbc’c3#SbSsbs""SsBS’Ssbc‚SsRc2"Ss2CrSs2SRSs2S"SƒR#RSs23RSsr#R"Sƒb#bSƒR#RSƒR#R"cƒB#rc#3ccBsB"c“’CRc“C2c“"CR"s’3RsbCRs’C""c“b“‚s’#‚sRb"S“RÓ"cs"CrcC""Sƒ"Ó#S“ÓRSƒBÓ’"SS"Ó#rSs2Ó#RSc2Ó#r"Cƒ‚S#BÓ#rC“RÓ"Csc2CsB3CsCr"Cs‚“‚CssbCs2ƒ‚"S3R#ƒ’Cƒ"S3R#ƒR"S3r#“‚S3R#“S3b#“B"S3‚3S3‚32S3‚3r"S#"33’S3‚3#BS32332"Sb3CS’3CSr3C"Sr33rSB3CS"3C"Cc‚#ƒ"C“3#’Cs3"Cc"#cCcr#sbCcB#cB"C#"32Cc#S’CCB#2"3ƒ"3ƒ23ƒBBÂ3s‚Â332"3#3#’3#B"#ƒ2R#ƒB#ƒb"#ƒ"‚#ƒ"b#ƒ"r"3#"C’#ƒ"R#ƒ‚3r"3c2#ƒ’3CB##B3c2#ƒr"3cR#“’3cB#“"3cB#“b"3cr33cb323cr3r"3S33’3cr3#B3c332"3CB3C3Cr3C3Cb3C"33b33r3C"3C3C3C"#“b#ƒ"3’3#’#“‚3"#“#c#“R#sb#“"#cB"#S32#ƒ’#S’#s"#2"#‚"##"BÂ#bÂc"C’SrS""R"B"‚br"SC’Rb3r"“#ƒ’s"##B“#ƒr"“2#“’“"#“"“2#“b"“R3“B32“R3r"s’33‚“R3#2ƒ’332"s3Csb33’sB3C"S332cb3Cc33‚"sR#C#3‚“"#ƒ2"c##Bc’##Rcr##B"S#32S2##BS##r"S2#C‚S#3rS#C""c"3s‚sR3br3SR"s3ƒ2cB3s’c‚3ƒ"“3“sb3ƒbƒ23ƒ’¢"ÒÂG–æÖ–4f÷'FS¢²…öÖ–ã¢ÓƒrÂ…öÖƒ¢CCÂ•öÖ–ã¢Óƒ"Â•öÖƒ¢CRÂ†¢S“rÂó¢&ÒCƒbS“r"C“S“rCƒrS“rCƒ’S“r"SRS“bC“’S“rS"S“r"S#‚S“RSrS“bS#2S“R"c3S#"SsbS“c#"SS’"c32Sbc3"Sbc32S"SS’C32c32CcbS“‚C32"S3"C3’SSC32SCC3R"C“2C“’SbCSC“2CsR"S‚SC‚C“2SrSS3b"S’SSS’SC’S’SC’"S’SSS’SSS’SS"C“bS3rS‚SSSBSC""3s3S2CCRS23“’C3b"3cr3C3c’3Cr3cr3C"Cr3C3cr3C3ƒR3C"CB3CC3CC"3C"CS’33RCS"3CCS3C"Cc‚3BCcR33Cc‚3#""CS’#“2Cc‚3bCcR#“‚"C#ƒbCS#ƒrCS2#ƒb"3“’#ƒbCr#ƒbCB#ƒbÂ3S2#ƒbÂ3S#s’"sBÓCb3###S2ÓC"Ó#BÓ#c"#Ó#‚CRÓ#c""Ó#‚Ó#c"Ó#RÓ#c"Ó#bÓ#c""Ó#RÓcRÓƒ2Ó#cÓ#RÓ#r"Ó#"ÓCÓ#RÓSrÓ#BÓC‚"ÓS2Óƒ’Ó2ÓbÓƒ2Óƒ’"rÓC"Ó#2Óƒ’‚Ór"’ÓS‚‚ÓCr’ÓS2"Ó2Ó#B’ÓƒrÓ#""ÓbÓ#rÓRÓ#bÓbÓ#b"ÓbÓ#rÓbÓ#rÓbÓ#r"ÓÓ#RÓRÓ#rÓ2Ó#b"ƒÓ3#RÓ#RS‚Ós2""ÓsBƒ‚ÓR“2Ó""ƒb#CR#bÓ2Cbs""“b#ƒR“#cr“b#ƒR"“b#ƒR“b#ƒR“b#ƒR"S#ƒb“b#ƒb“"#ƒb"“‚#“2#ƒb"#ƒr"ƒ23Bƒ‚#“bƒ23R"“‚33‚ƒ23#2ƒ‚33""Sr3C"3C"3CÂ#3CÂ#R3S2"CƒbS“r#cBC“3s"Sƒ‚¢"ÒÂG–æÖ–5&–æf÷'¦æFó¢²…öÖ–ã¢S‚Â…öÖƒ¢3SrÂ•öÖ–ã¢Â•öÖƒ¢#sRÂ†¢#sRÂó¢&Ò3ƒ23“R"C3“b3ƒ’3“R3“R3“b"S‚3S"CCb3“bC“R3sr"SR3#rS23CBSR33b"C“#ƒRSR3Sb#“2"CcR#s‚Cƒ"#ƒCsB#s‚"C#23CS#s‚C3B#ƒb"3cR33"C‚3#"3ƒb33""#“’#ƒ33R33"3r3B"#“b#s"#“‚#sr#“r#s2"#“B#cb#“R#s#“B#c’"#“#c#“2#cB#“"#c"#S"32#“#S’#s2#"#"#2#BBÂ#rÂc2"SS‚SB""R2R"‚"br"S"C’R‚3r"“2#ƒ’sB##R“"#ƒr"“R3“2#“"“B#“b"“r3R“b3R“r3"sR3CB“r33ƒ’3C""s3CBs23CBs"3CB"’3bC’3CB#r33B"“R3b3b“’3b"ƒB3bƒ‚3bƒB3"ƒr3#RƒB3’ƒR3#""C’3s"“’3C#r3c2"#3ƒ‚c‚3ƒ“r3ƒ‚"#R3ƒ‚#23ƒ‚#B3ƒ‚"#ƒ23C’#CR3ƒR#cr3s""#ƒR3CR#ƒB3Cr#ƒR3CR"#ƒR3CR#ƒR3CR#ƒR3CR"#“3S#ƒb3CR#ƒ‚3Cr"3ƒ23“R3b3sB3C’3“¢"ÒÂG–æÖ–56f÷'¦æFó¢²…öÖ–ã¢S"Â…öÖƒ¢#s‚Â•öÖ–ã¢Ó#"Â•öÖƒ¢#sÂ†¢#“"Âó¢&Ò#S’3ƒ‚"#s3ƒ‚#c23ƒ‚#cr3ƒ‚"3s3c"3R3ƒ‚33‚3s’"3“b33‚3ƒR3SB3“3C‚"C3R3“’33C3#2"3S’#cC#“3ƒB#cb"3C’#c3Sb#c3S"#c"33b3#"#c3#ƒ""3R3#r3323"3#"3‚33"3r333‚33""3‚33"3‚33"3‚33""#ƒr33B3‚33B#“r33B"#c’332#s’33B#s"33B"##3#CR3#’##b3b"#’#“R#’#“’#’#“r"#s2#3"#’#s‚#C2#C’"3#R#ƒ’##2#“R#’"3s2“R3Crƒ3s23b"3cC’3s2s’3c’c2"#’Ó3"33"ÓB#srÓ3""rs’Ó3"3‚Ó’"sRSƒB’sR3B"ƒRƒ"sRcs‚s"#’b“B“‚"b"cB“"C"bSB""s‚S’s2ƒ2s‚s"s3Bs‚SsRC"Âcb#’Âc‚#‚"#2#"s‚#B“#""##b#R##"#’#2"#sRc‚#S23#sRS""#sBsR#sRs#sBs2"#r3"#cB“‚#C’B"#"#c"cc2#r#"#"#s#"#cR#"#cr"#S’3ƒ‚#"3#’ƒB3ƒB¢"ÒÂG–æÖ–5£¢²…öÖ–ã¢#2Â…öÖƒ¢3’Â•öÖ–ã¢"Â•öÖƒ¢#SÂ†¢#C‚Âó¢&Ò#B3c"##"3c#R3cc‚3c"C3R3S’3"3cC3B3c"CCR3CBCC"3SbCCR3S"CC33CCR33’CCB33R"3B##rC3‚333ƒ"#ƒ2"“#B#Crs"“#RÂƒ‚#2Â##2"#R#2#"#2#B#2"#c‚#3#2#C’r"3#s’#ƒBƒ‚3Rs’"3#bƒ3#"s’3#Bs’"3C“233ƒ33BƒB"3C"“r3C“b3C"“r"3C"“‚3C"“‚3C"“‚"3C“r3C"“‚3C“r"33“b33b“b332“b"#“B3B3“b#“B2"#“RC"#“B3b#“B3’"3Csb#“’c23#sb"3sc23Ssb3c2s""3ƒ2#B3ƒSB3ƒ23’"3S’c3ƒ23sRsB"3#"33SS3#’3R"#3’2#“R"#cb2"s’##‚2“r’"r3’c323‚3’"ƒb3Rb3’“R3‚"cr#2s’3"sb3"C’BS‚RSRB"3233’B32#"3‚C"323B3B3‚"s2s"CCbcc""32#c"ƒsr#“’#S‚"32#c"32#c"32#c""#Cb#c232#c"#sr#c2"Cb#c#2#c2S#c"""#3’3#S’r#S""ƒ‚#3“B#3"“"#3"ƒR#3ƒr#3ƒb#3"c’#Cbsb#3c’#3rÂc’#CrÂc’#S"Â“"3""b3SRB33R3SB"#B3c‚3Sr#"3S’¢"ÒÂ÷&æÖVçEG&–ÆÃ¢²…öÖ–ã¢Ó#C’Â…öÖƒ¢#C’Â•öÖ–ã¢Â•öÖƒ¢3sbÂ†¢3sbÂó¢&ÒÓ“"S""Ó#’SC"Ó32SCÓ32SC""Ó#S3BÓ#RSC"Ó#S3’"Ós3cbÓ#S3"ÓcR3ƒ2ÂÓs3cBÂÓCr3cB"#R3ƒ223cbs3s""C’3ƒr3b3ƒbC23ƒr"cr3ƒ"Sb3ƒrc3ƒR"ƒ3ss3ƒs’3s2"ƒ"3sƒ3sƒ3s"#33ƒƒR3s“R3s""3B3“B#ƒb3“2#“3“B"3R3“B3R3“B3R3“B"3Sr3S2333“B3C’3s’"3S’33b3S‚3C’3S’3C""3SB3B3S’3#b3Sr3b"#Sr#“3S"3"#c2#“"#Sr#“#Sr#“#Sr#“"#S#“’#S"#“"#S#“B"#S3R#S3#S32"#S3B#S3‚#S3"#3B3S#S3#’#CR3C2Â#33S2Â##B3C’"c’#ƒr#"33Bƒ232"#rSbc2#sbcb#ƒb"ƒ‚3r“"C2“3’"Ó‚RƒB3RÓBR"Ó‚RÓ‚RÓ‚R"ÓB#"Ó"bÓBr"Ó‚CrÓB#bÓ"32"Ó"c’ÓRS’Ó"c’"Ó"c’Ó"c’Ó"c’"ÓCRCBÓ"c’Ó#"S‚"Ó#"BÓ"ÓR’"ÓSÓ3"ÓC""Ó#SbRÓ#‚Ó#SbCb"Ó#SR’Ó#SbÓ#SbB"Ó##2#3Ó#SB#’Ó#Sb#"Ó“R3#RÓ#‚#ƒ"Ó“R3#R"Ó“R3#RÓ“R3#RÓ“R3#R"Ó“‚3#RÓ“b3#RÓ“b3#R"Ó#sB3#BÓ#b3#RÓ#3r3#R"Ó3C3#BÓ33#BÓ3#’3#B"Ó3SB3#RÓ3S3#BÓ3S23#B"Ó3S’33"Ó3Sr3#bÓ3S’3#’"Ó3Sb33‚Ó3S’33BÓ3S‚33b"Ó3‚3SÓ3SR3CÓ3S23CÂÓ#c3cÂÓ##"3c"ÂÓƒ"3c2ÂÓc‚C"ÓS"CcÓcC3‚ÓS2Cc"Ó“"S"ÓS"Cc"Ó#RCƒ¢Òc"3C‚"Sr3C’c3C’S’3C’"C3CbSR3C’S3C‚"Óc"33‚33’Ó3332"Óƒ23#ÓƒB3#’Óƒ"33"ÓR#Óƒ23‚Ó“2#ƒ2"ÓC‚ƒ‚ÓC’“BÓC‚“’"ÓC‚ƒrÓC‚ƒ‚ÓC‚ƒ‚"Ó#2S2ÓC‚crÓ3rS2"Ó2SRÓ#S2ÓrSB"‚32ÓSrr3""Cb##r’3BCb##R"S2#SCb#3C‚#3’"s‚33BSr#cs‚33"c"3C‚s‚3Cs3Cr¢"ÒÂ÷&æÖVçEGW&ã¢²…öÖ–ã¢Ó3Â…öÖƒ¢3Â•öÖ–ã¢ÓC2Â•öÖƒ¢C2Â†¢#ƒbÂó¢&ÒÓ#s"#R"Ó#cB#bÓ#s#bÓ#cr#b"Ó#"“‚Ó#C’#bÓ###""CBC‚Ó’srÓ3r#r"#cÓ“rÓ#B“Ós"3rÓ#ƒRÓ“r#“rÓ"3‚Ó“’3Ó3BÓ“’"C"3c"Ó“"3“bÓS"C"CRC"‚"3#ƒrC"S‚3cbƒr"#S‚s3ƒr#s’ƒ"##c#Cbc2#32c"Sr#RƒbcSrƒb"#2“BSrS‚sRs’"#sr#b#3B#"#Sb#b"C3r“3C‚#bC2c""CCr#BCCBc’CCrCr"3cRÓc2CCrÓCbCbÓ#"#SrÓ#b33Ó“"#“rÓ#b"s‚Ó“"#32Ó#b#rÓ#"ÓCrÓC‚Óc‚#‚Ó#"Ó#SƒbÓb#Óƒc""Ó3"“’Ó#sR“BÓ#“R“’"Ó3cƒ2Ó33“’Ó3Cb“B"ÓC"bÓ3ƒ‚cRÓC"3b"Ó3C’ÓsrÓC"Ó#‚Ó3ƒBÓc""Ó3BÓƒRÓ33rÓƒ"Ó3#bÓƒR"Ó#cÓsÓ#“rÓƒRÓ#ƒÓƒ"Ó##BÓcÓ#CrÓc2Ó#3RÓc"Óƒ‚ÓsÓ#ÓcÓ“’ÓcB"ÓcÓ#bÓc’ÓƒBÓcÓR"Óƒ’ÓƒÓcÓCrÓc’Óc‚"Ó#s"Ó#BÓ#Ó“RÓ#C"Ó#B"Ó#“2Ó#"Ó#s’Ó#BÓ#ƒbÓ#2"ÓCCrÓbÓ3ƒRÓƒ’ÓCCrÓ2"ÓC3Rc‚ÓCCr‚ÓCC2C2"Ó#ƒ#BÓCCÓ3C’“b"Ó#s"#RÓ#sr#RÓ#s2#R¢"ÒÂ÷&æÖVçEGW&å6Æ6ƒ¢²…öÖ–ã¢Ó3Â…öÖƒ¢3Â•öÖ–ã¢Ó#Â•öÖƒ¢#Â†¢C"Âó¢&ÒÓ#ƒ‚"Ó"#ƒ’Ór#ƒ’ÓB#ƒ’"’#sb‚#ƒ’b#ƒB"#s##s"##sÂ#sÂC2C’"#cÓ“#Ó#b“Ós"3rÓ#ƒRÓ“r#“rÓ"3‚Ó“’3Ó3BÓ“’"C"3c"Ó“3“bÓS"C""C"RC"‚"3#ƒrC"S‚3crƒr"#S‚s3ƒr#ƒƒ""##c#Cbc2#32c"Sr#RƒrcSrƒb"#B“BSrS‚sRƒ"#sr#b#3R#"#Sb#b"C3b3C"#bC"c’"CCr#BCC"ƒ"CCrSB"CC2Ó#BCCr’CCbÓr"#S‚Ó#bC#2Ó#r3CBÓ#b"#SrÓ#b#S‚Ó#b#S‚Ó#b"#2Ó’“Ó#R"Óc’Â#ÓrÂ#Ó“"#Ó##2#Ó#2#Ó#B"BÓ#ƒ2#Ó#ƒ"#Ó#sr"ÓÓ#ƒ’Ó#ƒrRÓ#ƒ’"Ó#"Ó#sbÓÓ#ƒ’Ó‚Ó#ƒB"Ó#2ÓsÓ#2Ó#s"Ó#2Ó#sÂÓ#2ÓsÂÓCbÓC’"Ó#SƒbÓ’#"Ós’c""Ó3"“’Ó#sR“RÓ#“R“’"Ó3cƒBÓ33“’Ó3CR“B"ÓCrÓ3ƒ‚cbÓC3b"Ó3C’ÓsrÓCÓ#‚Ó3ƒ2Óc""Ó3BÓƒRÓ33rÓƒ"Ó3#bÓƒR"Ó#cÓc’Ó#“rÓƒRÓ#s’Óƒ"Ó##2ÓcÓ#CrÓc2Ó#3RÓc"ÓsrÓƒÓ#bÓcÓ“Ócr"ÓS’Ó#RÓcRÓ“2ÓS’Ó’"Óƒ‚ÓƒÓS’ÓCrÓc’Óc‚"Ó#c‚Ó#2Ó#"Ó“bÓ#CÓ#2"Ó3sbÓcRÓ3bÓ#2Ó3CRÓ“"ÓCCrÓrÓC#RÓ#BÓCCrÓcR"Ó#“2#"ÓCCrƒbÓ3“ƒ"Ó#c#bÓ#ƒ2#BÓ#s"#b"Ó#R’Ó“B#bÓRsÂÓ#2rÂÓ#2ƒ’"Ó#"#sbÓ#2#sÓ#2#s""Ó#ƒ‚Ó##ƒÓR#ƒb¢"ÒÂ÷&æÖVçDÖ÷&FVçC¢²…öÖ–ã¢Ó#“bÂ…öÖƒ¢#“bÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢“‚Â†¢C2Âó¢&ÒÓ#ƒB"Ó2#ƒRÓ’#ƒRÓb#ƒR"r#s2R#ƒRB#ƒ"’cB’#s’#c’Â’S’Âc‚‚"‚s’“‚SRrs‚"3ƒ"#"ƒ#rƒ""C2s’3bƒ"Cƒ"3r‚CRsr#3"“"Â3#bÓÂ3Sb3b"CBƒ3“2ƒ3“2ƒÂCBƒ"C#bS’CrƒC#bs"C#BSC#bSbC#bS2"#3bÓs’C#CB#CÓsb"##BÓƒ"#32Óƒ##‚Óƒ""#Ós‚#’Óƒ"#RÓƒ"’Óƒ’#Ós‚c’Ó3r"#’sÓC3"#’#’#’"#BÓb#’#rÓ2Â’Ó"Â’ÓS""’Ó#‚’Ós’’Ó#"2Ó32’Ó3‚’Ó#“‚"Ó2Ó3’Ó3‚2Ó3"Ó#2Ó#“rÓÓ3Ó’Ó3R"Ó#RÓƒÓ#BÓ#“BÓ#BÓ#“BÂÓ#RÓcbÂÓsÓ#"Ó‚Ós‚Ó“’ÓSbÓbÓsr"Ó3Óƒ"Ó#"ÓƒÓ#rÓƒ""ÓCBÓs‚Ó3RÓƒ"ÓCÓƒ"Ó3rÓ‚ÓCRÓsrÓ#32Ó“ÂÓ3#bÂÓ3SbÓ3b"ÓCBÓƒÓ3“2ÓƒÓ3“2ÓƒÂÓCBÓƒ"ÓC#bÓS’ÓCrÓƒÓC#bÓs"ÓC#BÓSÓC#bÓSbÓC#bÓS2"Ó#3bs’ÓC#ÓCBÓ#Csb"Ó##Bƒ"Ó#32ƒÓ##‚ƒ""Ó#s’Ó#’ƒ"Ó#Rƒ"ÓC‚‚Ó#’srÓbƒbÂÓ#’ÂÓ#r"ÂÓ#RRÂÓ#R3r"Ó#2#s"Ó#R#crÓ#R#c‚"Ó#ƒBÓ##srÓb#ƒ"¢"ÒÂ÷&æÖVçE6†÷'EG&–ÆÃ¢²…öÖ–ã¢Ó#“bÂ…öÖƒ¢#“bÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢#rÂ†¢#S2Âó¢&ÒÓ#3ƒ"Ó##Rƒ"Ó##’ƒ"Ó##rƒ""Ó#s’Ó##ƒ"Ó#Rƒ"Ó’ƒ’Ó#s‚Óc’3r"Ó#’ÓsCÓ3"CBƒ‚Ó#’BC"‚s’ƒ’CBrs‚"3ƒ"#"ƒ#rƒ""C2s’3bƒ"Cƒ"3r‚CRsr#3"“"Â3#bÓÂ3Sb3b"CBƒ3“2ƒ3“2ƒÂCBƒ"C#bS’CrƒC#bs"C#BSC#bSbC#bS2"#3bÓs’C#CB#CÓsb"##BÓƒ"#32Óƒ##‚Óƒ""#Ós‚#’Óƒ"#RÓƒ"’Óƒ’#Ós‚c’Ó3r"#’sÓC3"ÓCBÓƒ‚#’ÓBÓC"Ó‚Ós’Óƒ’ÓCBÓrÓs‚"Ó3Óƒ"Ó#"ÓƒÓ#rÓƒ""ÓCBÓs‚Ó3RÓƒ"ÓCÓƒ"Ó3rÓ‚ÓCRÓsrÓ#32Ó“ÂÓ3#bÂÓ3SbÓ3b"ÓCBÓƒÓ3“2ÓƒÓ3“2ÓƒÂÓCBÓƒ"ÓC#bÓS’ÓCrÓƒÓC#bÓs"ÓC#BÓSÓC#bÓSbÓC#bÓS2"Ó#3bs’ÓC#ÓCBÓ#Csb"Ó#3ƒÓ#3Rs’Ó#32ƒ¢"ÒÂ÷&æÖVçEG&VÖ&ÆVÖVçC¢²…öÖ–ã¢ÓC’Â…öÖƒ¢C’Â•öÖ–ã¢Ó#rÂ•öÖƒ¢#rÂ†¢#S2Âó¢&ÒÓC’ƒ"ÓC"ƒ"ÓCrƒ"ÓCBƒ""Ó3ƒ’s’Ó3“rƒ"Ó3“"ƒ"Ó#“rƒ’Ó3ƒrs‚Ó3Cb3r"Ó#rÓ#C‚CÓ#rÂÓ#r"Ó3Bƒ‚Ó#bÓsBC"ÓS’s’Óƒ‚CBÓcs‚"ÓCbƒ"ÓSRƒÓSƒ""Ó3Bs’ÓC"ƒ"Ó3rƒ"S‚ƒ’Ó32s‚’3r"C‚rCC‚ÂC‚"##ƒ‚C‚ƒC"#“bs’#crCB#“Bs‚"3‚ƒ"3ƒ3Bƒ""3#s’32ƒ"3rƒ"CƒR‚3#2srC’“"ÂS2ÓÂS323b"SƒƒSsƒSsƒÂSƒ"ƒ"cBS’S“BƒcBs"c"ScBSbc2S2"CBÓs’S“’CBC‚Ósb"CÓƒ"CÓƒCbÓƒ""3ƒ‚Ós‚3“rÓƒ"3“"Óƒ"#“rÓƒ’3ƒrÓs‚3CbÓ3r"#r#C‚ÓC#rÂ#r"3BÓƒ‚#bsBÓC"S’Ós’ƒ‚ÓCBcÓs‚"CbÓƒ"SRÓƒSÓƒ""3BÓs‚C"Óƒ"3rÓƒ"ÓS‚Óƒ’32Ós‚Ó’Ó3r"ÓC‚ÓrÓCÓC‚ÂÓC‚"Ó##Óƒ‚ÓC‚ÓƒÓC"Ó#“bÓs’Ó#crÓCBÓ#“BÓs‚"Ó3‚Óƒ"Ó3ÓƒÓ3BÓƒ""Ó3#Ós‚Ó32Óƒ"Ó3rÓƒ"ÓCƒRÓ‚Ó3#2ÓsrÓCÓ“ÂÓS2ÂÓS32Ó3b"ÓSƒÓƒÓSsÓƒÓSsÓƒÂÓSƒ"Óƒ"ÓcBÓS’ÓS“BÓƒÓcBÓs"Óc"ÓSÓcBÓSbÓc2ÓS2"ÓCBs’ÓS“’ÓCBÓC‚sb"ÓC’ƒÓC"s’ÓCƒ¢"ÒÂ÷&æÖVçE&V6ö×övuG&–ÆÃ¢²…öÖ–ã¢ÓC’Â…öÖƒ¢C’Â•öÖ–ã¢Ó#rÂ•öÖƒ¢#SRÂ†¢3ƒÂó¢&ÒÓS“3cR"ÓSƒ"3crÓSƒ‚3cbÓSƒR3cr"ÓSc3S"ÓSs23crÓScB3c"ÓScsbÓSc3SÓSc32ÂÓSS’"ÂÓS#rC"ÓCSb#‚ÓS’c2ÓCsr""ÓCBsrÓC3RSBÓCbsb"ÓCƒ"ÓCƒÓCRƒ""Ó3ƒ‚s’Ó3“bƒ"Ó3“"ƒ"Ó#“bƒ’Ó3ƒrs‚Ó3Cb3r"Ó#bÓ#CrCÓ#r"Ó32ƒ‚Ó#bÓs2C"ÓS’s’Óƒ‚CBÓcs‚"ÓCbƒ"ÓSRƒÓSƒ""Ó32s’ÓCƒ"Ó3rƒ"S‚ƒ’Ó3"s‚’3r"C‚‚CC‚ÂC‚"##ƒ‚C’ƒ"C"#“bs’#crCB#“Rs‚"3’ƒ"3ƒ3Bƒ""3#s’32ƒ"3‚ƒ"CƒR‚3#2srC“"ÂS2ÓÂS323b"SƒƒSsƒSsƒÂSƒ"ƒ"cBS’S“RƒcBs"c"ScBSbc2S2"CBÓs’S“’CBC’Ósb"C"Óƒ"CÓƒCbÓƒ""3ƒ’Ós‚3“rÓƒ"3“2Óƒ"#“rÓƒ’3ƒ‚Ós‚3CbÓ3r"#r#C‚ÓC#rÂ#r"3BÓƒ‚#rsBÓC"S’Ós’ƒ’ÓCBcÓs‚"CrÓƒ"SbÓƒSÓƒ""3BÓs‚C"Óƒ"3‚Óƒ"ÓS‚Óƒ’32Ós‚Ó‚Ó3r"ÓC‚ÓrÓCÓCr"Ó##Óƒ‚ÓC‚ÓƒÓC"Ó#“RÓs’Ó#cbÓCBÓ#“BÓs‚"Ó3‚Óƒ"Ó#“’ÓƒÓ32Óƒ""Ó3#Ós‚Ó3"Óƒ"Ó3rÓƒ"ÓCƒBÓ‚Ó3#"ÓsrÓC#bÓsbÂÓS2ÂÓS3RÓ3‚"ÓSsÓs’ÓSS‚ÓcrÓScrÓsr"ÓSƒ"Óƒ2ÓSs2ÓƒÓSs‚Óƒ2"Óc"ÓsÓS“Óƒ2ÓS“‚Ós‚ÂÓcBÓcrÂÓcBCÂÓcB3C’ÂÓc23S2"ÓS“3cRÓc3S‚ÓS“b3c2¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄDævÆV&W'C¢²…öÖ–ã¢ÓC32Â…öÖƒ¢C32Â•öÖ–ã¢Ó#C2Â•öÖƒ¢#rÂ†¢3sÂó¢&ÒÓ3ƒ‚ƒ"Ó3ƒ"ƒ"Ó3ƒbƒ"Ó3ƒBƒ""Ó3c‚s’Ó3srƒ"Ó3s"ƒ"Ó#srƒ’Ó3crs‚Ó3#b3r"ÓƒrÓ##rCÓƒrÂÓƒr"ÓBƒ‚ÓƒbÓS2C"Ó3’s’Óc‚CBÓCs‚"Ó#bƒ"Ó3RƒÓ3ƒ""ÓBs’Ó#"ƒ"Órƒ"s‚ƒ’Ó"s‚#’3r"c‚#rCc‚"#Cƒ‚c’#C"3bs’#ƒrCB3Bs‚"3#’ƒ"3#ƒ3#Bƒ""3Cs’332ƒ"33rƒ"SR‚3C2srC3“"ÂS#2ÓÂSS23b"cƒS“ƒS“ƒÂc"ƒ"c#BS’cBƒc#Bs"c#"Sc#BSbc#2S2"C3BÓs’c’CBC3’Ósb"C#Óƒ"C3ÓƒC#bÓƒ""C’Ós‚CrÓƒ"C"Óƒ"3rÓƒ’CrÓs‚3cbÓ3r"##r#c‚ÓC##r"SBÓƒ‚##r“BÓC"s’Ós’‚ÓCBƒÓs‚"crÓƒ"sRÓƒsÓƒ""SBÓs‚c"Óƒ"S‚Óƒ"Ó3‚Óƒ’S2Ós‚"Ó3r"Ó#‚ÓƒrÓCÓ#r"Ó#Óƒ‚Ó#‚ÓcÓC"Ó#sbÓs’Ó#CbÓCBÓ#sBÓs‚"Ó#ƒ‚Óƒ"Ó#s’ÓƒÓ#ƒBÓƒ""Ó3Ós‚Ó#“2Óƒ"Ó#“rÓƒ"Ó3“2Óƒ‚Ó3"Ós‚Ó3C2Ó3r"ÓCƒ2ÓCC"ÓCÓCƒ2"ÓCƒ2ÓCƒ2ÓCƒ2"ÓSRÓ#rÓCƒBÓC“rÓR"ÓSs’Ó#3RÓSSBÓ“"ÓSs’Ócb"ÓScrÓ3RÓSs’Ó#c2ÓSsRÓ#“"ÓScBÓ33ÓScRÓ3#ÓScBÓ3#R"ÓSƒRÓ3SÓScBÓ3C"ÓSs"Ó3S"ÓcÓ3#bÓS“‚Ó3SÓcBÓ3CR"Óc#BÓ#3RÓc’Ó#“rÓc#BÓ#cr"ÓSCrÓ‚Óc#BÓS’ÓS“rÓs’"ÓC“"cÓS3‚BÓS32"ÓC#bCÓCs"ƒBÓCC2#"Ó3ƒ‚ƒÓ3“bsbÓ3“Bs’¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄ&6ƒ¢²…öÖ–ã¢ÓC32Â…öÖƒ¢C32Â•öÖ–ã¢Ó#C2Â•öÖƒ¢“‚Â†¢CC"Âó¢&Òƒb#ƒB"“B#ƒRƒ’#ƒR“"#ƒR"#R#s2#2#ƒR##ƒ"#rcB#b#s#b#c’Â#rS’Â#cR‚"3bs’#“RSR3Bs‚"3#’ƒ"3#ƒ3#Bƒ""3Cs’332ƒ"33rƒ"SR‚3C2srC3“"ÂS#2ÓÂSS23b"cƒS“ƒS“ƒÂc"ƒ"c#BS’cBƒc#Bs"c#"Sc#BSbc#2S2"C3BÓs’c’CBC3’Ósb"C#Óƒ"C3ÓƒC#bÓƒ""C’Ós‚CrÓƒ"C"Óƒ"3rÓƒ’CrÓs‚3cbÓ3r"##r#c‚ÓC##r"##r##r##r"##"Ób##r##BÓ2Â#rÓ"Â#rÓS""#rÓ#‚#rÓs’#rÓ#"#Ó32#rÓ3‚#bÓ#“‚"“RÓ3#bÓ3‚#Ó3"sRÓ#“rƒrÓ3s‚Ó3R"s2Óƒs2Ó#“Bs2Ó#“BÂs2ÓcbÂ#rÓ#"s’Ós‚“’ÓSbƒÓsr"crÓƒ"sbÓƒsÓƒ""SBÓs‚c"Óƒ"S‚Óƒ"Ó3‚Óƒ’S2Ós‚"Ó3r"Ó#‚ÓƒrÓCÓ#r"Ó#Óƒ‚Ó#‚ÓcÓC"Ó#sbÓs’Ó#CbÓCBÓ#sBÓs‚"Ó#ƒ‚Óƒ"Ó#s’ÓƒÓ#ƒBÓƒ""Ó3Ós‚Ó#“2Óƒ"Ó#“rÓƒ"Ó3“2Óƒ‚Ó3"Ós‚Ó3C2Ó3r"ÓCƒ2ÓCC"ÓCÓCƒ2"ÓCƒ2ÓCƒ2ÓCƒ2"ÓSRÓ#rÓCƒBÓC“rÓR"ÓSs’Ó#3RÓSSBÓ“"ÓSs’Ócb"ÓScrÓ3RÓSs’Ó#c2ÓSsRÓ#“"ÓScBÓ33ÓScRÓ3#ÓScBÓ3#R"ÓSƒbÓ3SÓScBÓ3C"ÓSs"Ó3S"ÓcÓ3#bÓS“‚Ó3SÓcBÓ3CR"Óc#BÓ#3RÓc’Ó#“rÓc#BÓ#cr"ÓSCrÓ‚Óc#BÓS’ÓS“rÓs’"ÓC“"cÓS3‚BÓS32"ÓC#bCÓCs"ƒBÓCC2#"Ó3“2s’ÓC‚c"Ó3“Rs‚"Ó3ƒƒ"Ó3“ƒÓ3ƒRƒ""Ó3c‚s’Ó3sbƒ"Ó3s"ƒ"Ó#srƒ’Ó3crs‚Ó3#b3r"ÓƒrÓ##rCÓƒrÂÓƒr"ÓBƒ‚ÓƒbÓS2C"Ó3’s’Óc‚CBÓCs‚"Ó#bƒ"Ó3RƒÓ3ƒ""ÓBs’Ó#"ƒ"Órƒ"S‚Ó"srƒƒbÂc‚Âs"Âs2RÂs23r"sB#s"s2#crs2#c‚"ƒb#ƒBsb#srƒ#ƒ"¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÅ7Vff—„FæG&–WS¢²…öÖ–ã¢ÓC32Â…öÖƒ¢C32Â•öÖ–ã¢Ó#rÂ•öÖƒ¢#CBÂ†¢3sÂó¢&ÒSsr3C’"SƒR3SSƒ3SSƒ"3S"c3CRS“3SS“r3C’"c#B##’c233"c#B#sR"c#"#Bc#B##c#2#"SS’#rcR3’S“Rƒ2"C“"ÓcSCbbSC"C#bÓCCs"ÓƒBCC2Ó#"3“2Ós’C‚Óc"3“RÓs‚"3ƒÓƒ"3“Óƒ3ƒRÓƒ""3c‚Ós‚3sbÓƒ"3s"Óƒ"#srÓƒ’3crÓs‚3#bÓ3r"ƒr##rÓCƒrÂƒr"BÓƒ‚ƒbS2ÓC"3’Ós’c‚ÓCBCÓs‚"#bÓƒ"3RÓƒ3Óƒ""2Ós‚#"Óƒ"rÓƒ"Ós‚Óƒ’"Ós‚Ó#’Ó3r"Óc‚Ó#rÓCÓc‚"Ó#CÓƒ‚Óc’Ó#ÓC"Ó3bÓs’Ó#ƒrÓCBÓ3BÓs‚"Ó3#’Óƒ"Ó3#ÓƒÓ3#BÓƒ""Ó3CÓs‚Ó332Óƒ"Ó33rÓƒ"ÓSRÓ‚Ó3C2ÓsrÓC3Ó“ÂÓS#2ÂÓSS2Ó3b"ÓcÓƒÓS“ÓƒÓS“ÓƒÂÓc"Óƒ"Óc#BÓS’ÓcBÓƒÓc#BÓs"Óc#"ÓSÓc#BÓSbÓc#2ÓS2"ÓC3Bs’Óc’ÓCBÓC3’sb"ÓC#ƒ"ÓC3ƒÓC#bƒ""ÓC’s’ÓCrƒ"ÓC"ƒ"Ó3rƒ’ÓC‚s‚Ó3cb3r"Ó##rÓ#c‚CÓ##r"ÓSBƒ‚Ó##rÓ“BC"Ós’s’Ó‚CBÓƒs‚"Ócbƒ"ÓsRƒÓsƒ""ÓSBs’Óc"ƒ"ÓS‚ƒ"3‚ƒ’ÓS2s‚Ó"3r"#‚ƒrC#r"#ƒ‚#‚cC"#sbs’#CbCB#sBs‚"#ƒ‚ƒ"#s’ƒ#ƒBƒ""3s’#“2ƒ"#“rƒ"3“2ƒ‚3"s‚3C23r"Cƒ2CC"CCƒ2"Cƒ2Cƒ2Cƒ2"SR#rCƒBC“rR"Ss’#3RSSB“"Ss’cb"Scr3RSs’#c2SsR#“"ScB33ScR3#ScB3#b"Ssr3C’ScB33’Sc‚3Cb¢"ÒÂ÷&æÖVçE&V6ö×F÷V&ÆT6FVæ6UWW%&Vf—ƒ¢²…öÖ–ã¢ÓC3’Â…öÖƒ¢C3’Â•öÖ–ã¢Ó#rÂ•öÖƒ¢#3bÂ†¢3c2Âó¢&ÒÓScB33‚"ÓSSR3CÓSc33’ÓSS‚3C"ÓS3B3‚ÓSCB3CÓS3B33"ÓS3B3rÓS3B3‚ÓS3B3r"ÓSC#“bÓS3B3ÓS3B3"ÓSƒ‚bÓSs"#3bÓSƒ‚sR"ÓSƒ2c"ÓSƒ‚“‚ÓSƒbƒ"ÓSSBÓ#ÓSs‚3BÓScbÓ"ÂÓSS"Ó#BÂÓS#b"ÓC3#bÓCƒ‚SBÓCS"“’"Ó3ƒbsrÓCrS2Ó3ƒ‚sb"Ó3s"ƒ"Ó3ƒ"ƒÓ3srƒ""Ó3cs’Ó3c‚ƒ"Ó3cBƒ"Ó#c‚ƒ’Ó3S’s‚Ó3‚3r"Ós‚Ó#’CÓs’"ÓRƒ‚Ós‚ÓCRC"Ó3s’ÓcCBÓ3"s‚"Ó‚ƒ"Ó#rƒÓ#"ƒ""ÓRs’Ó2ƒ"Ó’ƒ"ƒbƒ’ÓBs‚3r3r"sb3bCsbÂsb"#C’ƒ‚sr#C"3#Bs’#“RCB3#2s‚"33rƒ"3#‚ƒ332ƒ""3C’s’3Cƒ"3Cbƒ"S2‚3SsrC3‚“"ÂS3"ÓÂSc"3b"cƒS“’ƒS“’ƒÂcƒ"c3"S’c#2ƒc3"s"c3Sc3"Sbc3S2"CC"Ós’c#rCBCCrÓsb"C3Óƒ"C3‚ÓƒC3BÓƒ""CrÓs‚C#RÓƒ"C#Óƒ"3#RÓƒ’CbÓs‚3sRÓ3r"#3R#sbÓC#3bÂ#3R"c"Óƒ‚#3R#"ÓC"ƒrÓs’rÓCBƒ’Ós‚"sRÓƒ"ƒBÓƒs’Óƒ""c"Ós‚sÓƒ"cbÓƒ"Ó#’Óƒ’cÓs‚#Ó3r"Ó’Ós’ÓCÓ’"Ó“"Óƒ‚Ó#ÓS2ÓC"Ó#crÓs’Ó#3‚ÓCBÓ#cbÓs‚"Ó#ƒÓƒ"Ó#sÓƒÓ#sRÓƒ""Ó#“2Ós‚Ó#ƒBÓƒ"Ó#ƒ’Óƒ"ÓCSbÓ‚Ó#“BÓsrÓ3“‚ÓsbÂÓCsRÂÓSrÓ3‚"ÓSSBÓƒ2ÓSC2Óƒ"ÓSC2Óƒ2ÂÓSSBÓƒ2"ÓSsbÓc‚ÓSc"Óƒ2ÓSc‚Ós’"Óc3"RÓc2Ó’Óc3"Cb"ÓS“2#“"Óc3"s2Óc’#32"ÓScB33‚ÓSs’3#2ÓSs33R¢"ÒÂ÷&æÖVçE&V6ö×F÷V&ÆT6FVæ6UWW%&Vf—…GW&ã¢²…öÖ–ã¢ÓC3’Â…öÖƒ¢C3’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢#3bÂ†¢CSÂó¢&ÒÓScB33‚"ÓSSR3CÓSc33’ÓSS‚3C"ÓS3B3‚ÓSCB3CÓS3B33"ÓS3B3rÓS3B3‚ÓS3B3r"ÓSC#“bÓS3B3ÓS3B3"ÓSƒ‚bÓSs"#3bÓSƒ‚sR"ÓSƒ2c"ÓSƒ‚“‚ÓSƒbƒ"ÓSSBÓ#ÓSs‚3BÓScbÓ"ÂÓSS"Ó#BÂÓS#b"ÓC3#bÓCƒ‚SBÓCS"“’"Ó3ƒbsrÓCrS2Ó3ƒ‚sb"Ó3s"ƒ"Ó3ƒ"ƒÓ3srƒ""Ó3cs’Ó3c‚ƒ"Ó3cBƒ"Ó#c‚ƒ’Ó3S’s‚Ó3‚3r"Ós‚Ó#’CÓs’"ÓRƒ‚Ós‚ÓCRC"Ó3s’ÓcCBÓ3"s‚"Ó‚ƒ"Ó#rƒÓ#"ƒ""ÓRs’Ó2ƒ"Ó’ƒ"S‚‚ÓBsrƒ’ƒbÂsrÂs’"ÂƒRÂƒ3r"ƒ2#s"ƒ#crƒ#c‚"#2#ƒRƒb#ƒ“R#ƒR"#‚#s’#’#ƒR#B#ƒ2"##RcB##R#s2##R#ƒBÂ##RS’Â#sB‚"3#Bs’3BSR3#2s‚"33rƒ"3#‚ƒ332ƒ""3C’s’3Cƒ"3Cbƒ"S2‚3SsrC3‚“"ÂS3"ÓÂSc"3b"cƒS“’ƒS“’ƒÂcƒ"c3"S’c#2ƒc3"s"c3Sc3"Sbc3S2"CC"Ós’c#rCBCCrÓsb"C3Óƒ"C3‚ÓƒC3BÓƒ""CrÓs‚C#RÓƒ"C#Óƒ"3#RÓƒ’CbÓs‚3sRÓ3r"#3R#sbÓC#3b"#3R#3R#3R"#3Ób#3R#3"Ó2Â##RÓ"Â##RÓS""##RÓ#‚##RÓs’##RÓ#"#’Ó32##RÓ3‚##BÓ#“‚"#2Ó3#BÓ3‚#’Ó3"ƒ2Ó#“r“RÓ3ƒrÓ3R"ƒÓƒƒ"Ó#“Bƒ"Ó#“BÂƒÓcbÂ3bÓ#"ƒ‚Ós‚rÓSbƒ’Ósr"sRÓƒ"ƒBÓƒs’Óƒ""c"Ós‚sÓƒ"cbÓƒ"Ó#’Óƒ’cÓs‚#Ó3r"Ó’Ós’ÓCÓ’"Ó“"Óƒ‚Ó#ÓS2ÓC"Ó#crÓs’Ó#3‚ÓCBÓ#cbÓs‚"Ó#ƒÓƒ"Ó#sÓƒÓ#sRÓƒ""Ó#“2Ós‚Ó#ƒBÓƒ"Ó#ƒ’Óƒ"ÓCSbÓ‚Ó#“BÓsrÓ3“‚ÓsbÂÓCsRÂÓSrÓ3‚"ÓSSBÓƒ2ÓSC2Óƒ"ÓSC2Óƒ2ÂÓSSBÓƒ2"ÓSsbÓc‚ÓSc"Óƒ2ÓSc‚Ós’"Óc3"RÓc2Ó’Óc3"Cb"ÓS“2#“"Óc3"s2Óc’#32"ÓScB33‚ÓSs’3#2ÓSs33R¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÄÆ÷vW%7Vff—ƒ¢²…öÖ–ã¢ÓC3’Â…öÖƒ¢C3’Â•öÖ–ã¢Ó#3bÂ•öÖƒ¢#rÂ†¢3c"Âó¢&ÒÓC3rƒ"ÓC3ƒ"ÓC3Rƒ"ÓC32ƒ""ÓCrs’ÓC#bƒ"ÓC#ƒ"Ó3#Rƒ’ÓCbs‚Ó3sR3r"Ó#3RÓ#sbCÓ#3RÂÓ#3R"Óc"ƒ‚Ó#3RÓ#"C"Óƒrs’ÓrCBÓƒ’s‚"ÓsRƒ"ÓƒBƒÓs’ƒ""Óc"s’Ósƒ"Ócbƒ"#’ƒ’Ócs‚Ó#3r"’s’C’"“"ƒ‚#S2C"#crs’#3‚CB#cbs‚"#ƒƒ"#sƒ#sbƒ""#“"s’#ƒBƒ"#ƒ’ƒ"CSb‚#“Bsr3“bsrÂCsRÓÂSr3‚"SSBƒ2SC2ƒ"SC2ƒ2ÂSSBƒ2"Ssbc‚Sc2ƒ2Sc‚s’"c3"Óbc2’c3"ÓCb"crÓ#Src3"Óc"c#BÓ#"SsÓ33BS“bÓ#ƒrSs‚Ó3#r"SSbÓ3CScrÓ33‚ScÓ3C"S3RÓ3#bSCrÓ3CS3‚Ó33R"S32Ó3’S3BÓ3#2S32Ó3#"SCÓ#“bS32Ó3BS3bÓ3‚"Sƒ‚ÓrSs"Ó#3bSƒ‚ÓsR"Ss’ÓCSƒ‚Ó“SƒRÓcR"SSB#Ss2Ó’Sc2rÂSS"#BÂSÓ#b"C3Ó#bCƒ‚ÓSBCS"Ó“’"3ƒbÓsrCrÓS23ƒ‚Ósb"3s2Óƒ"3ƒ"Óƒ3srÓƒ""3cÓs‚3c‚Óƒ"3cBÓƒ"#c‚Óƒ’3S’Ós‚3‚Ó3r"s‚#’ÓCs’Âs‚"RÓƒ‚s‚CRÓC"3Ós’cÓCB3"Ós‚"‚Óƒ"#rÓƒ#"Óƒ""RÓs‚2Óƒ"’Óƒ"ÓƒbÓƒ’BÓs‚Ó3rÓ3r"ÓsbÓ3bÓCÓsbÂÓsb"Ó#C’Óƒ‚ÓsrÓ#ÓC"Ó3#BÓs’Ó#“RÓCBÓ3#2Ós‚"Ó33rÓƒ"Ó3#‚ÓƒÓ33"Óƒ""Ó3C’Ós‚Ó3CÓƒ"Ó3CbÓƒ"ÓS2Ó‚Ó3SÓsrÓC3’Ó“ÂÓS3"ÂÓSc"Ó3b"ÓcÓƒÓS“’ÓƒÓS“’ÓƒÂÓcÓƒ"Óc3"ÓS’Óc#2ÓƒÓc3"Ós"Óc3ÓSÓc3"ÓSbÓc3ÓS2"ÓCC"s’Óc#rÓCBÓCCrsb"ÓC3rƒÓCCs’ÓC3‚ƒ¢"ÒÂ7G&–æw4F÷vä&÷s¢²…öÖ–ã¢Óc‚Â…öÖƒ¢c‚Â•öÖ–ã¢Â•öÖƒ¢3S2Â†¢3S2Âó¢&ÒÓ##‚Sb"2S‚Ó##RSrÓS‚"##‚SbBS‚##RSr"#CC“B#32SB#3‚C“’"#C"#SB#CC“#C"3s2"#CB#C"3R#Cb"###3rR##‚"#Bb#B#‚""“‚ƒ’“‚"“‚2"“‚CR“‚B“‚#2Â“‚#s2Â#s2ÂÓ“‚#s2ÂÓ“‚CR"Ó“‚ƒ’Ó“‚#2Ó“‚B"Ó#BbÓ“‚2Ó“‚""Ó##Ó#‚"Ó#B"Ó#CBÓ##‚Ó#3rR"Ó#C"#SBÓ#CbÓ#C"3R"Ó#CC“BÓ#C"3s2Ó#CC“"Ó##‚SbÓ#3‚C“’Ó#32SB¢"ÒÂ7G&–æw5W&÷s¢²…öÖ–ã¢ÓÂ…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢#srÂ†¢#srÂó¢&ÒÓCB3“r"Ó3r3“‚ÓC"3“‚ÓC3“‚"Ór3ƒrÓ#’3“‚Ó#3“B"ÓS‚#3BÓb3ƒRÓ“3r"ƒBÓ#bS"ƒB"S‚#3BƒB#bS""r3ƒr“3rb3ƒR"3b3“‚#3“R#‚3“‚"S‚3sbCr3“‚S‚3“ÂS‚3sÂƒ’“"#S“2#""bB‚"Ó’Ó‚ÓbB"ÓS‚3sRÓ#R#ÓS‚3s"ÓS‚3sbÓS‚3sRÓS‚3sb"ÓCB3“rÓS‚3ƒbÓS23“B¢"ÒÂ7G&–æw4†&Ööæ–3¢²…öÖ–ã¢Óƒ"Â…öÖƒ¢ƒ"Â•öÖ–ã¢Óƒ"Â•öÖƒ¢ƒ"Â†¢c2Âó¢&ÒÓ’b"‚Ó"rÓb‚"‚cR‚‚c2"BÓ3‚ÓbÓ#"ÓÓ‚ÓƒRSÓ‚"Óƒ2Óƒ2Ó3Ó‚ÓcÓr"Ó‚ÓÓrÓcÓ‚Ó3"Ó’bÓ‚S2ÓƒR¢ÒB“’"’B"ÓÓSrÓS2"Ó“ÓCRÓÓRÓ“rÓ3"ÓÓsÓƒ"Ó3bÓ"“ÓCR3bÓsÓƒ""Ó“rÓ3ÓR"B“’CrcR“"¢"ÒÂÇV6¶VE6æ—§¦–6Fô&÷fS¢²…öÖ–ã¢ÓÂ…öÖƒ¢Â•öÖ–ã¢ÓÂ•öÖƒ¢#RÂ†¢3RÂó¢&ÒÓ’#“2"#“RÓb#“BÓ2#“R"##ƒ’#“Rr#“"#"#r#"#s‚#"#sbÂ#"SrÂ#RSr"S2CƒRC‚3‚"S‚Sr#bS‚2"CÓS2S‚ÓsÓ3R"ÓS‚#bÓSr2ÓS‚"ÓSBÓCÓsÓS‚Ó3bÓ"ÓS‚ÓÓSrÓ#rÓS‚ÓB"Ó#RSrÓS‚sbÓ"CbÂÓ#"SrÂÓ#"#r"Ó##ƒÓ#"#sbÓ#"#s‚"Ó’#“2Ó’#ƒbÓ2#“¢ÒÓ#"SB"Ó#2"Ó#"‚Ó#"""Ó#2"Ó#2"Ó#2""ÓƒƒÓ3rÓcR“b"ÓBÓBSrÓB#’"ÓBÓBÓS‚Óc’ÓB"Bc‚ÓBBÓS‚"ƒƒB#’BSr"#""cR“b3R""#"SB#""#"“""#Ó‚#"Ó2#"ÓR"Ó#"rÓr’Ó#""ÓbÓbÓbÓ#"ÓÓ#"Ó#"3BÓ#"ÓÓ#"Ó""Ó#"SBÓ#"CÓ#"Cb¢"ÒÂÇV6¶VE6æ—§¦–6Fô&VÆ÷s¢²…öÖ–ã¢ÓÂ…öÖƒ¢Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Â†¢3RÂó¢&Ò’Ó#“2"Ó#“RbÓ#“B2Ó#“R"Ó#Ó#ƒÓ’Ó#“RÓrÓ#“"Ó#"Ó#rÓ#"Ó#s‚Ó#"Ó#sbÂÓ#"ÓSrÂÓ#RÓSr"ÓS2ÓCÓƒRÓC‚Ó3‚Ó"ÓS‚ÓSrÓ#bÓS‚Ó2"ÓCS2ÓS‚sÓ3R"S‚Ó#bSrÓ2S‚"SBCsS‚3b"S‚Sr#rS‚B"#RÓSrS‚Ósb"ÓCbÂ#"ÓSrÂ#"Ó#r"#Ó#ƒ#"Ó#sb#"Ó#s‚"’Ó#“2’Ó#ƒb2Ó#“¢Ò#"ÓSB"#2Ó"#"Ó‚#"Ó""#2Ó"#2Ó"#2Ó""ƒÓƒ3rÓcRÓ“b"BÓBÓSrBÓ#’"BBS‚c’B"ÓBÓÓc‚BÓBS‚"ÓƒÓƒÓBÓ#’ÓBÓSr"Ó#"Ó"ÓcRÓ“bÓ3RÓ""Ó#"ÓSBÓ#"Ó"Ó#"Ó“""Ó#‚Ó#"2Ó#"R"#"ÓrrÓ’#""bbb#"#"#"Ó3B#"#"""#"ÓSB#"ÓC#"ÓCb¢"ÒÂÇV6¶VDÆVgD†æE—§¦–6Fó¢²…öÖ–ã¢ÓSRÂ…öÖƒ¢SRÂ•öÖ–ã¢ÓSrÂ•öÖƒ¢SrÂ†¢3RÂó¢&ÒÓ’##R"##rÓb##bÓ2##r"##2’##rr##"#"b#"#’#"#‚Â#"#"ÂB#""S"#"#’#"C#""#‚b#‚#"#"#"##B##"##Bb"#Ó###BÓ’#’Ór"BÓ#"#rÓ#"#RÓ#"Â#"Ó#"Â#"Ób"#"ÓSB#"Ó3#"ÓC2"bÓ###"Ó###Ó#B"Ó##rÓ##RbÓ##r"Ó#Ó#2Ó’Ó##rÓrÓ##""Ó#"ÓbÓ#"Ó#’Ó#"Ó#‚ÂÓ#"Ó#"ÂÓBÓ#""Ó#Ó#Ó#RÓ#"Ó#rÓ#""Ó##BÓ#’ÓrÓ##BÓ’"Ó#‚bÓ##BbÓ##""ÓS"#"Ó#"#Ó#‚#""ÓB#"ÓC#"Ó#’#"ÂÓ#"#"ÂÓ#"b"Ó##2Ó#"#‚Ó#"#’"Ó’##RÓ’#‚Ó2##2¢"ÒÂ¶W–&ö&EVFÅVC¢²…öÖ–ã¢Â…öÖƒ¢sƒ"Â•öÖ–ã¢ÓÂ•öÖƒ¢SÂ†¢SÂó¢&Ò3’s’"33Rs#3‚s#3#rs#"S#cSC’s#Cs2c“b"Sƒ"SrSccSƒ"Sc"S#‚C#2Sƒ"CsbScBCC"Cƒ2CS2CRC“‚C"3“"CƒCC2CCbC3r"3ƒBSb3ƒbC“b3ƒBS‚"CS3R3ƒBS#’3ƒ’S3R"CrS#C’S3RCBS3"CS‚C“BC#S2C3‚C“B"C“‚SrCs"C“BCƒbC“‚"S#SS"S2SrS#S32"Cc’cCRS#Sƒ"S"c’"3C’cƒrC3rcs3ƒ’cƒrÂ3CBcƒrÂ33Rcs"#ƒbSCB#“’c’#ƒbSsr"#ƒbSC2#ƒbSCB#ƒbSC2"3CCC’#ƒbS#“‚C“"3sC3S’C33cBC#B"3ƒR3S‚3ƒ3“B3ƒR3sr"3s‚3r3ƒR3CR3ƒ233"3"cR3cR#s33b#""#“‚S’3c"#“‚S’"#“‚S’#“‚S’#“‚S’"3Rc#“’S’3"S’"33bc"3Rc3#bc""Cƒbb3“"c"CCRC2ÂC“"ÂS"r"S323BS#2#bS3"32"S3B3bS3B3RS3B3R"S32CBS3B3‚S3BC"S3ƒ‚S3S’S3sB"Ss3#S3#3‚SCB#ƒ2"cSr3“Sƒr3C"c3B3ƒ"cƒb3“rccb3“Rcsb3“r"sc233Rs#3“rsSR3s""scb3RscR3#‚scb3#"sC#Sscb#“sSb#cr"c“’#’s3b#Crs"##"c3bs"c“r#‚cc"“""cBS2c‚S‚cBSB"cBS2cBS2cBS2"cCR“c##’c3b"c“Bs2cSrs‚csRs2"s“r#2s#‚s2sc’“Âƒ#rÂs“’3B"s“Rsbs“bC‚s“Rc""“CrC2s“R#cbƒS3S"“SCR“C’CB“SCR"“CBCB“SCr“C‚C’"cS’Sƒ2ƒsRC“bssBSSb"c3bc2cCSƒrc3bS“"cSBc#c3bcBcC"c#"ccbc’cS‚c#cc"c#"2#ƒ"ƒƒBSsrc"CC""#b“‚#"#S2#b##R"“SBÓ#bƒrSBÓ"“3“CbÓ“3‚"ƒrƒ2ƒƒ2rƒC3r"ƒRƒrƒbƒRƒRƒr"ƒ‚s’ƒBƒrƒ"ƒB"ccBss"#’sr"c#rcC’c3B""SCb“"SƒB’ScRCÂSCB“’ÂSC“r"CƒC’S3’“RS"sB"CBC’C#ÂCB"3“brCB3“’R"#ƒB3ƒs"332"#cb‚#s‚#s"Â#S‚rÂ#Cr“B"cB"#2S2c’B"SbcS’"3’rCr3’‚"C#23’’C#"CB3BC#BC"#’"#3B3rS‚s’ƒ’B"#ccB#CBC2#CBC""3’#“3#r3’#S’"#ƒ3C’3’3"323#""##2CS2#S3sb##’CB"##"Cs"##2CS’##"Ccb"#“bcs2##"S#"#CbSƒrÂ32cƒRÂ3cƒR"#“cƒB#“’cƒR#“BcƒB"cC“bscc‚srS“"S’CsrS’C“S’Cƒ2"sbC#bS’CS2cbC3"C#ƒBC#"“"C#"c"Cƒr3C#cCC‚"s’Src2S"c‚Sr"“bCs’“"Sr“bS"“bCs‚“bCs‚“bCs‚"ƒ‚33R“R3“rS33‚"ƒ233Rƒb33RƒB33R"CC2333R3sRÂCC2"3’s’Sƒ23‚sb¢Ò“ƒ3c"“sb3c‚“s‚3cb“sr3c‚"“c‚3c"“sB3c‚“s"3cb"ƒs"sR“‚3‚ƒs"#Cr"ƒsr3ƒs"cƒsBCR"“C23Bƒƒrƒ"“BC2"“C’3B“CR3B“Cr3B"‚#r“s23BBsR"#r“‚#BS#rsB"“ƒ3c#r#S23’¢ÒccR33‚"cSr33’cc"33’cc33’"cC33bcS"33’cCr33‚"cB#“2c3R332c#"3""c"##cr#sBc"#Cb"cB“‚c"#2c2#R"cb“cR“2cR“"c‚“2cb“cr“""ccb#3‚c2“rcC"#’"c“R#cBc“#Sbc“#Sr"s"#“s#s"s"#ƒ"ccR33‚s"3"cƒ‚33B¢"ÒÂ¶W–&ö&EVFÅW¢²…öÖ–ã¢Â…öÖƒ¢C3RÂ•öÖ–ã¢cRÂ•öÖƒ¢SÂ†¢C3RÂó¢&Ò3s’"3s#32s#3rs#"33"s‚3’s#3#rs’"3s’cSB3cs’3s’cƒR"3SBc3s’c3"3sBc#"33SS‚33‚SƒR33Ss""33bS3b33SS332SCB"3sBS"3CBS#3S‚S""3ƒ’SB3s’S"3ƒBS2"C#"SsRCBS#2C#"S3‚"CsBcCbC#"cBCCc3’"Cƒ’cC‚Cs’cCrCƒBcC‚"SSRSƒS#rcC‚SSRcR"S3RS3RSSRScRSC’SC’"Cs’SRS#S#S‚Sb"CSS"Cc"SRCS‚SB"C‚Cc‚C#’SRC‚Cƒr"C3‚C32C‚CSRC#RCC"CcBC#BCCrC#rCSRC#B"S’CC’CsrC#BC“C3""SSrCs2S#bCcbS3‚Cs""ScCs2SS‚Cs2ScCs2"c#rCrS“’Cs2c#rCC""c#3s‚c#r3“rc#R3ƒr"Sc3Cc’3SBSƒ‚3CÂSc3C"S‚3cRS3‚3CS#r3Cb"CcR3“C“3ƒ2Cs‚3“"CSr3ƒ’Cc"3“Cc3“"C‚3CrC323ƒBC‚3cr"C#B3#RC‚3CC#33""Cs’#“’C323bCCb3"S3R#s’S’#“‚S##“B"SSR#32SC’#cbSSR#C’"Cƒ’cbSSR“’S#rcb"CsBcrCƒBcbCƒcb"C#"#3’CCsRC#"#"3“2#“‚C#"#s2CB#ƒ’"3sB3"3ƒb33ƒ3""33"#cb3SB3"33r#ƒ‚"33#SR33#c"33#S‚"3SR#233#C"33‚#3"3s’c3sB“23s’ƒ"Â3s’c"32“23s’#3C‚“2"#s"‚#“’“2#ƒR“‚"#Crc#Sb##CrC"#S’“‚#Crs2#Sƒr"#s"#2#c##cb#b"#“b#SR#ƒ’#3#“b#C""#“R#cb#“b#S‚#“b#c""#S23"#“#ƒ‚#s23""#3B#“‚#Cr3"#C3"#R#3’#2#ƒ’#R#s2"S2cr#R#ƒbsR"3‚cbC‚cbC2cb"s2#3"cbs2“r"ƒ"#crs2#CBsb#Sb"C‚#“’“R#ƒ’2#“‚"ƒ"3Bc‚#“’s3"“r3Rƒ’3r“"3’"#’3Cb#R3#R#’33b"s’3ƒb#’3cB“‚3s’"c"3“s23ƒ’cr3“"’3cRC‚3“3b3ƒ""B3S"23cr3SB"cr3C“"3CBs’3C""3“3‚3C3S’"Cr3“bC"cbCs2CC23Cs2"ƒ2Css"Cs2srCs2"‚CC’“bCc‚BCc2"cC#B3bC3"C’C#B"c2C#BcC#Bc"C#B"#’Ccr“C#r#’CCR"#2Cƒ’#’CsB#rCƒ""C‚SR“2S’ƒSR"“"S3R’SbrS#"s"Sƒs‚SC’s"ScR"3‚cC‚s"cRcC‚"S2cCbC2cC‚C‚cCr"#RSsRƒbc3’#RcB"#3‚SB#RS3‚#2S#2"#S2S"#C2S2#C‚S""#“S3b#c’S"#ƒ2S#"#“bSS‚#“BSCB#“bSS"#s2c#“bSs"#ƒ’SƒB"#SBc#B#cc"#S‚cb"#CrcSB#C’c3B#CrcCB"3s’#CrcƒB#c‚s"¢Ò3#rCsR"32Csb3#"Csb3‚Csb"#CBCr#sBCsb#CBCC2"#S"3sb#CB3“b#Cr3ƒb"3233‚#cR3S#ƒ’33‚"3sR3sb33‚33‚3c"3S"3ƒ2Cr3ƒ3ƒb3ƒ23“b"3#rCsR3ƒ2C3‚3cCc‚¢"ÒÂ–7D6†ö¶T7–Ö&Ã¢²…öÖ–ã¢Â…öÖƒ¢c‚Â•öÖ–ã¢ÓSRÂ•öÖƒ¢SRÂ†¢3Âó¢&Ò“b##2"r##B##B2##B"#3bBcB##B#‚sB"#C"SR#Cƒ‚#C"s"cbÓ#’#C"ÓC"sRÓCB"32Ó##BC‚Ó#’3’Ó##B"#RÓ#’3Ó##B#‚Ó##""#2Ó#2#BÓ#b#2Ó#R"3bÓ“’#2Ó#‚#‚Ó#B"3ÓSb“bÓcb3Ó"‚3Ó3B#BÓ"ÂÂ"bƒ"S‚"’C""r"“BR"“b##2sC#r¢"ÒÂv–vvÆT'Vvv–FõW¢²…öÖ–ã¢Ó‚Â…öÖƒ¢#c’Â•öÖ–ã¢Â•öÖƒ¢#bÂ†¢#bÂó¢&Ò2ƒ"‚ƒ‚ƒ2ƒ"##2#bSƒƒBcB"#“’c’#S#ƒs‚"3cr32c‚3rcr"3S’“3#Rcr3C"sR"3sb"3s"3s""Â3sb""3ƒ‚“3ƒ2"3ƒ‚“b"3ƒRƒB3ƒ‚ƒ‚3ƒrƒb"3#"#R3s’sb3C"C""#S‚3‚#ƒ"S2Sb##b“"‚"s‚"#rƒ“r2"cRBsBBsB"r“SB3Rb"ƒRƒRƒÂƒ"Ó“ÓrƒÓƒR"Ó’“rÓ“2Ó“R"SRSbÓ2R3BC"2ƒssƒ‚s‚¢"ÒÂ'&÷v†VD&Æ6µW¢²…öÖ–ã¢Â…öÖƒ¢#3’Â•öÖ–ã¢ÓbÂ•öÖƒ¢#c’Â†¢#sRÂó¢&Òs3ƒb"s’3ƒrsB3ƒrsb3ƒr"#3s‚ƒr3ƒr“b3ƒB"#"3CR#b3s"#b3s""332CR#3r#3R#ƒ"#2"3CB’3C2#’3CB#r"3rÓ‚3CB"33"Ó‚"#“’Ó23"Ó‚3RÓr"ƒ3#c"’##3"sBBCB3‚#"cÓ2s"cBÓ"C2Ó‚SRÓrC‚Ó‚"b’#‚Ó‚b""#rCRb#rr#’"C‚3CBs‚#2#"#32"S’3s‚SR3s2SB3s""s3ƒbc3ƒcr3ƒR¢"ÒÂ'&÷v†VD&Æ6´F÷vã¢²…öÖ–ã¢Â…öÖƒ¢#3’Â•öÖ–ã¢bÂ•öÖƒ¢#ƒÂ†¢#sRÂó¢&Ò3RC2"C2CR3rCBCCR"c"3“‚C’CRSRC2"s’3“cR3“bs23“""ƒ3cr3sBCR3cr"#“‚3“‚##3cr#c"3sr"3‚CB3RC"3"CB"3CB3sr33"CB3CB3“B"3323S3CB3c’3C23cr"#"S#ƒ"#s2#3rc"#B#2#r#‚#b#b"ƒ‚“’2ƒ’‚"Sb#2s‚c"2"SCBSB#RS2#‚"#r3S#RS‚ƒ#s"b3srr3crb3c’"3RC2b3ƒ’#BC¢"ÒÒÂföçDfÖ–Ç“¢$vöçf–ÆÆU6×VfÂ"Â&W6öÇWF–öã¢S2ÂvVæW&FVDöã¢###2ÓBÓ#C##££#bã•¢"Ó°¢6öç7Bö’Ò²vÇ—‡3¢²'&6¶WEF÷¢²…öÖ–ã¢Â…öÖƒ¢C“Â•öÖ–ã¢Â•öÖƒ¢#s’Â†¢#s’Âó¢&Òc“r3“’"cƒrC"c“BCc“C""cs3“RcƒC"csBC"#C’c‚cc‚3“S#Bc‚Â#c‚"S’c‚cÂ#ÂÂsb"sb3sBc’sB3s"sr3ƒ"sb3sbsr3s’"c“r3“’sr3ƒ’s23“R¢"ÒÂ'&6¶WD&÷GFöÓ¢²…öÖ–ã¢Â…öÖƒ¢C“Â•öÖ–ã¢Ó#s’Â•öÖƒ¢Â†¢#s’Âó¢&Òc“rÓ3“’"srÓ3ƒ"s2Ó3“RsrÓ3ƒ’"sbÓ3sBsrÓ3s’sbÓ3sb"sbsBÓ3sc’ÂÂÓ#ÂÓS"#Óc‚Óc’Óc‚Â#C’Óc‚"csÓ3“RS#BÓc‚cc‚Ó3“"cƒrÓC"csBÓCcƒÓC""c“rÓ3“’c“ÓC"c“BÓC¢"ÒÂ6Vvæó¢²…öÖ–ã¢Â…öÖƒ¢cSBÂ•öÖ–ã¢Â•öÖƒ¢ƒc’Â†¢ƒc’Âó¢&ÒSCbc“Âƒ3‚#r"ƒC#RƒC#ƒC#""ƒ3"#32ƒC##ƒ3r#3Âƒ’#C‚"s“‚#Sƒb#Sƒ#S"sƒ#Cs“"#Ssƒ2#CrÂCƒrs#Â#rƒc"“’““RCrƒ“r“’“#B"#3bcR“’#s’cR"3C2s2#ƒ‚cR3#R3"CSB“ƒ‚3Sr#"CR“ƒ‚"Csr““Cc“ƒ‚Cc’“ƒ’"SCsbS#b"SCCR"SCƒ’SCƒSCƒB"#“B##RS3BbSB##R"“3’s"##RS2"#Rsbƒ#RC"sS2Â3“rSc2ÂBCR""3R"C""3r"’"#’r#"Â3"2"CB3RC"C‚CRCr"cS2S‚bÂCSbS3ÂsBC2"ƒC"#Sbsƒ3cƒC"3‚"sbƒbƒC"3sc2ƒb"S“’srcSBƒbcb#"Cƒ‚#c"SƒR##‚S3r#c""CcR#S’Cƒ#c"Cs"#c"C"srC‚#C‚C"#b"C2c2C"sC"cr"cC’#bC’3RC#’#b"“C"3"ƒs#b“C"“’"ƒ#SC’“C"C#b“Sr¢ÒS"CCB"‚Cbc’C#b“RCb"ƒ2CCBCCbcbC#b"#S‚#Cc#CƒR"ƒ2Ss2#S3#SSb"‚ccbS“Cc"S"Ss2“Rcc’S“"#BS‚3RSSb#BS3"S"CCB#BCƒR3RCc¢Òscs3"ƒ#Rs2ss‚s2ƒ"s2"ƒ“s3ƒC‚s2ƒs2s2"“rs“R“rsCr“rss""ƒ“ƒc“rƒ‚“rƒCB"ƒ#Rƒƒ‚ƒs2ƒs‚ƒC‚ƒƒ‚"scƒcƒ"ƒƒ‚ss‚ƒs‚"s32s“RsC2ƒCBs32ƒ‚"scs3s32ss"sC2sCr¢"ÒÂ6öF¢²…öÖ–ã¢Â…öÖƒ¢sCRÂ•öÖ–ã¢Ó2Â•öÖƒ¢s3RÂ†¢ƒC‚Âó¢&Ò“#BCcr"Scƒ“b“bc“rsSrƒƒÂSc3‚"SCS‚ScSSS"S‚ÂS#BS‚"SR3‚S2S‚SRSÂSRƒ“b"SCcr3ƒsrS‚c“2Â#Ccr"CCb’CcrCS‚ÂC3""#C"C#’C"ÂSC""SRcb“23rrÂSRÓC2"S#BÓc2SRÓSBS2Óc2ÂSCÓc2"ScÓC2SS"Óc2ScÓSBÂSc"“#2C"sS22“r“ÂSBC""s2C3"cbC"s2C#Âs2CCb"SBCcrs2CS‚cbCcr¢ÒScCcrÂScƒS""ss2Ccrsbƒ3rss2cs¢ÒSRCcrÂ3Ccr"SRƒS3cc‚3Srƒ3¢ÒSRC"ÂSRCR"3C"3cbcR3#’¢ÒScC"Âss"C""ScCRss"#Rsbc¢"ÒÂt6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢cCÂ•öÖ–ã¢ÓccbÂ•öÖƒ¢"Â†¢ss‚Âó¢&Òƒ’Ó3"ccRÓ#s’ƒ’Ó3"sc‚Ó#3‚"Sƒbƒbc3RÓrS“b#""ƒ’Ó3sbƒbƒ’“‚¢ÒcRÓ#“r"S#Ó3RSsbÓ3"SC’Ó3R"CSb3RÓ3RCÓc"3“C“‚C#3"#cB3ƒ’"CS’Sc"CRS#C3‚SC"C“"3SrCs"CƒBCƒ"Cb"#s"CR3c3‚#s"ƒ"CcrÓ“B#s"ÓSb3SÓ“B"C“ÓsbCs‚Ó“BC“Óƒ’"CS’ÓCBC“Óc2CsrÓSb"3s"ÓC2Ó’3s"Ós""S#sr3s"ƒbC3bSr¢ÒCs‚ƒB"c3"3“"C“#CSSr3“""cƒ‚##2cSB3“"cƒ‚3#""Cs‚ƒc2cƒ‚s2Ssr“c"Cc"3rCc’“#Cc"“sb"Cs‚ƒBCc"“Ccr3’¢ÒsbÓs3’"CCBÓ“S’sbÓƒ3B#C’Ó“S’"c#"Ó“SÓ“S’SsÓ“C""s#ÓcssÓƒSRs#Ósc"c“rÓCcrs#Óc2sÓSC’"csRÓ33‚c“2ÓC3‚cƒBÓ3“R"“#"2ƒbÓ#“"“#"ÓCR"SSr3cr“#"##sc‚3cr"Sbc’SC2CSBS#‚S3’"ss2ƒ‚cc‚ss’ss2“S’"sCsrss23’s32C#b"c‚ccsRSSc3Bc"SRS#‚S“‚cSS2SƒB"3ƒr2C2C‚3ƒr#3B"C’ƒB3ƒr3R3“R“cR"3"sC‚ƒ"3C2s#b"rƒSs’CR"S2Ó3cBÓS2#3RÓ3cB"cbÓ3SBSCBÓ3cBSƒ2Ó3c"ccÓcscCBÓC“"ccÓS“2"C3‚Óƒ“’ccÓƒ’Sƒ2Óƒ“’"3sÓƒ“C2Óƒ“’3s2Óƒ“"3cbÓƒƒr3c’Óƒ“3cbÓƒƒ‚"3s2Óƒƒ3cbÓƒƒB3c’Óƒƒ2"S‚Ós#CCÓƒsS‚ÓƒB"3CÓSc"S‚ÓcCBCC’ÓSc""sbÓs3’#CÓSc"sbÓcCB¢"ÒÂ46ÆVc¢²…öÖ–ã¢Â…öÖƒ¢c#rÂ•öÖ–ã¢ÓCƒÂ•öÖƒ¢Cƒ"Â†¢“c"Âó¢&Ò’csR"cSr’csRccrÂÓcSB"’Ócs"ÓccB’Ócs"Â#"Ócs""CÓcSB3"Ócs"CÓccBÂCcSr"#"csRCccr3"csR¢Ò“2Ó3sb"c’ÓS‚“2Ó“rƒ‚ÓS‚"SRÓ“RSƒbÓS‚Sc"Óc"C#bS2Óƒ’CsBÓ3""SR“‚CsB3RS2“""cCcSccRSs’c"“23s’ƒbc“2##2"Sƒc“B“2SƒsSRc“B"3‚SrCs"c“B3‚cC’"C3‚C3‚CCb3crC"SCbSSCSCbCCb"C#RcRSCbSƒ’C“BcR"SCrcSCS‚c3‚S2cS"s#2Cc“‚cSs#2S3"S“2#‚s#2#ƒ’s##‚"C3‚#s’Ccr#‚CC#cR"C‚3C3‚#ƒC3‚3"3“b#s’3“r33“b#ƒ"#cB#’3ƒ2#3CBc"Â#cBcSr"#CbcsR#cBccr#SbcsR"##‚cSr#3bcsR##‚ccrÂ##‚ÓcSB"#CbÓcs"##‚ÓccB#3bÓcs""#cBÓcSB#SbÓcs"#cBÓccBÂ#cBÓ#b"3“bÓ#s‚3C‚Óc3ƒÓ“r"C‚Ó#“r3“bÓ#s’3“rÓ#“r"C3‚Ó#s‚C3‚Ó#“rC3‚Ó#s’"S“2Ó#RCCÓ#c"CcrÓ#R"s#2Ó3“rs#Ó#Rs#2Ó#ƒr"SCrÓcC‚s#2ÓS#rc“‚ÓcC‚"C#RÓc"S2ÓcC‚CS‚Óc3R"CCÓc2C#bÓc"C3"Óc2"SCbÓSrSBÓc2SCbÓSc’"C3‚Ó3“rSCbÓCCBSÓ3“r"3‚ÓSB3crÓ3“r3‚ÓCCB"SƒÓc“3‚ÓcCrCs"Óc“"“2Ó3sbsSRÓc““2ÓSsr¢"ÒÂd6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢ccBÂ•öÖ–ã¢ÓcrÂ•öÖƒ¢#SÂ†¢ƒc‚Âó¢&Ò3cb3c"cr#“‚#Sb3cc‚#“‚"3r"ƒB#3bSc2"#r3b3ƒb#rc"CbÓS‚#r32Ó3"CÓ3‚c2Ó“b“bÓ#B"“BÓCrSrÓCBsbÓCr"#ƒrÓ#"##bÓCr#S’Ó3‚"3S’33Ó“‚3S’ÓCb"#ƒ’3B3S’c332r"#bc#S’SB#3c"cS2ƒ’cs2Sr"’#"CRCr#3""Cr#RBS3“""#’#s’c2#3‚“B#cb"3S3‚#SR333‚"SsÓS"C“‚3‚Ss“"CsrÓ3“’SsÓƒbS#Ó3B"3Óc3RC#’ÓC“B3cbÓSƒR"rÓƒ3rcÓss"’Óƒ3r"ÓƒcBrÓƒ3rÓƒCr"ÓƒsÓƒcrÓƒc‚"#rÓƒƒ‚bÓƒƒb’Óƒƒ‚"3RÓƒƒr#’Óƒƒ‚32Óƒƒr"33Ósr3bÓƒƒr#Óƒ’"S#‚ÓSCBCRÓccBCsÓcb"ccÓ3crSƒÓCƒ‚c#RÓC#‚"scÓSs#BÓ#S’scÓCr"cs#3’scc’s#’c‚"3cb3cc"3#S3c¢Òƒ‚s’"ƒƒrrƒ‚3‚ƒSr"“Sbs’“#Br“Sb3‚"ƒƒr#S"“Sb#’“#B#S""ƒ‚s’ƒS#S"ƒ‚#’¢Òƒ‚Ósr"ƒƒrÓ#Sƒ‚Ó#rƒSÓ#S"“SbÓsr“#BÓ#S“SbÓ#r"ƒƒrÓB“SbÓ3r“#BÓB"ƒ‚ÓsrƒSÓBƒ‚Ó3r¢"ÒÂVç—F6†VEW&7W76–öä6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢3S"Â•öÖ–ã¢Ó#S"Â•öÖƒ¢#S"Â†¢SBÂó¢&Ò’3c2"3CB’3c23SBÂÓ3CB"’Ó3c2Ó3SB’Ó3c2ÂsrÓ3c2"“bÓ3CBƒrÓ3c2“bÓ3SBÂ“b3CB"sr3c2“b3SBƒr3c2¢Ò333c2"33CB3#3c233SBÂ3Ó3CB"33Ó3c23Ó3SB3#Ó3c2ÂCƒ‚Ó3c2"SrÓ3CBC“‚Ó3c2SrÓ3SBÂSr3CB"Cƒ‚3c2Sr3SBC“‚3c2¢"ÒÂ#g7G&–æuF$6ÆVb#¢²…öÖ–ã¢Â…öÖƒ¢C3’Â•öÖ–ã¢ÓsC2Â•öÖƒ¢sCbÂ†¢Cƒ’Âó¢&ÒS"sBÂS"“S‚Â#C’“S‚Â#C’C’Â3ƒrC’Â3ƒr“S‚ÂSƒ2“S‚ÂSƒ2sB¢ÒÓ332ÂCRÓ332Â“"Ó“bÂC3bÓ“bÂCƒÓ332Âc3"Ó332Â3“b33BÂ#3‚33B¢Ò3RƒÂCÓƒÂ##’Óƒ¢ÒScbÓCsB"3“2ÓC"S3ÓC#‚CsRÓC2ÂsÓC"ÂsÓsÂ3s"Ós"3sBÓs3s2Ós3s2Ós"CcRÓcCRÓsC3RÓcr"SCÓ#rC“BÓSbS#ÓC2"Sƒ‚Ó“sRScÓ"SsRÓ““R"c‚Óƒc‚c‚Ó“C2c‚Ó“r"S“"Óssc‚Óƒ#’c’Ós“‚"SBÓsSsRÓsC2SC’Ós#B"ScbÓcsBS3rÓsSSBÓcƒ‚"S“bÓSsbSƒbÓcC’S“bÓcb"ScbÓCsBS“bÓS3bSƒbÓS2¢Ò3C‚ÓS‚"C#‚ÓS#‚3ƒÓS‚C‚ÓS#"CcBÓS“CS"ÓS3’CcBÓSS’"C3bÓcC’CcBÓc’CSRÓc3‚"3cbÓccRC‚Ócc3“RÓccRÂ#2ÓccRÂ#2ÓS‚¢Ò3crÓssb"C3RÓsƒ‚3“bÓssbC’Ósƒ"CsrÓƒS‚CcBÓƒCsrÓƒ#B"C32Ó“C"CsrÓ“Cc"Ó“#r"3cbÓ“S2C‚Ó“C’3“RÓ“S2Â#2Ó“S2Â#2Óssb¢"ÒÂF–ÖU6–s¢²…öÖ–ã¢RÂ…öÖƒ¢3ƒ’Â•öÖ–ã¢Ó#SBÂ•öÖƒ¢#SRÂ†¢S’Âó¢&Ò#“3cr"#"3‚3cr#"#’"#“Ó3cb#"Ó#’3‚Ó3cb"ScCCBÓ3cbScÓ#’"#“3crSc#’CCB3cr¢Ò3sbÓ#"#“Ó3‚3sbÓ#S"3S2Ó3‚"#bÓ###’Ó3‚#bÓ#S"Â#b#"#“3‚#b#S"##’3‚"3sb#3S23‚3sb#S"¢"ÒÂF–ÖU6–s¢²…öÖ–ã¢RÂ…öÖƒ¢33bÂ•öÖ–ã¢Ó#C2Â•öÖƒ¢#CRÂ†¢Cƒ‚Âó¢&Ò3S’Ó#ƒBÂ3S’33b"3C3S23S’3Cb3S3S2Â“’3S2"“3S“b3S2“23S"ƒB3CBƒ’3C‚ƒb3CbÂ#2cR"#"Sb#"c"#"S’"3C"#"S#bCRÂS‚#b"cb#2c#Bc2#2"ƒ3"s"#2s‚#rÂƒ2#rÂƒ2Ó#ƒBÂs2Ó#ƒB"SbÓ3c2Ó#ƒBSbÓ#“ÂSbÓ332"s2Ó3SSbÓ3C2c2Ó3SÂCc‚Ó3S"CƒBÓ332Cs‚Ó3SCƒBÓ3C2ÂCƒBÓ3"Cc‚Ó#ƒBCƒBÓ#“Cs‚Ó#ƒB¢"ÒÂF–ÖU6–s#¢²…öÖ–ã¢RÂ…öÖƒ¢3srÂ•öÖ–ã¢Ó#C2Â•öÖƒ¢#CRÂ†¢Cƒ‚Âó¢&ÒC“"ÓSb"3ƒ"Ó“"CƒÓƒ‚CS"Ó“""“Ó3B#ƒ‚Ó“"#c‚Ó3B"S2Ó3‚s’Ó3BcrÓ3R"3CÓ3bS2Ó3‚ƒ’ÓƒB"S32s2C“B"S32ƒb"#ƒ‚3S2S32#32SR3S2"3Sbs3S23##""3‚C’3“bs’C’"#CRSb“rC’#CR“b"s’#SR#CR“b#b#C"c‚#ssB#Sbc‚#cB"#"#“rc‚#s’sb#ƒ’"#S3B#’3##’3B"3#ƒ‚#s3B#“B3"3C‚ƒ33‚#s3C‚#CR"cRÓS3C‚"C‚Ó#B"#"Ó#s‚cRÓS#"Ó#"s2Ó3S#"Ó3CbSbÓ3S"#Ó3R“bÓ3S#Ó33"rÓ#ƒr#Ó3#Ó#“B"RÓ#3’‚Ó#cbRÓ#S"rÓ##bRÓ#3RRÓ#3"SBÓ#2‚Ó#r#Ó#2"#3‚Ó#ƒ’“bÓ#2#"Ó#S""3SÓ3S#cBÓ3#r3BÓ3S"CƒBÓ#cB3“bÓ3SCS‚Ó3r"SC2Óc2SÓ#SC2Ó""S‚Ó3bSC2ÓCRS3Ó3b"C“"ÓSbS‚Ó3bC“‚ÓC"¢"ÒÂF–ÖU6–s3¢²…öÖ–ã¢RÂ…öÖƒ¢3cBÂ•öÖ–ã¢Ó#CBÂ•öÖƒ¢#CBÂ†¢Cƒ‚Âó¢&Ò3“"#2"SBc‚Src‚SBC2"SBsbSBsSBsB"#c"3SSBƒ’S3S"#"sbB3S#"sbÂ#2sbÂ#"s2"Rƒ#"#c2ƒ"#rs2crƒ#r#"3R#cB#r#Rsb#SR"C#c‚3r#cR3‚#cb"#R#ƒ’c#ƒ"ƒr#ƒ’"3Csb#sR#ƒ’3C#S2"#SRc’3CƒR#s"s""Cc#3‚cbSrc"#C#"c#CÂ#""CÓb#"#BÓB"#C2ÓBcBÓr“rÓr"3CÓcr3rÓ#23CÓcb"#RÓ#ƒ’3CÓ#cB#sRÓ#ƒ’"#Ó#cbsBÓ#ƒ’3rÓ#s‚"#rÓsBc‚Ó#cB#rÓ##""RÓƒ#rÓ#"crÓƒ"#"ÓsBc2Óƒ#"Ó#""#"Óƒ#"ÓsB#"Ósr"s‚Ó#“‚#"Ó“’#bÓ#S"#3bÓ3S3BÓ3S#BÓ3S"S#BÓCr3sBÓ3SS#BÓ3B"3ƒ’#2S#BÓC"CS"2¢"ÒÂF–ÖU6–sC¢²…öÖ–ã¢BÂ…öÖƒ¢CC"Â•öÖ–ã¢Ó#C‚Â•öÖƒ¢#C’Â†¢C“rÂó¢&Ò3Óƒ2Â3Ó#ƒ’ÂƒÓ#ƒ’"cÓ3sÓ#ƒ’cÓ#“‚ÂcÓ33r"ƒÓ3SrcÓ3C‚sÓ3SrÂcbÓ3Sr"c3bÓ33rc#‚Ó3Src3bÓ3C‚Âc3bÓ3"cbÓ#ƒ’c3bÓ#“‚c#‚Ó#ƒ’ÂCƒrÓ#ƒ’ÂCƒrÓƒ2ÂcbÓƒ2"c3bÓcc#‚Óƒ2c3bÓs2Âc3bÓ3B"cbÓBc3bÓ#Bc#‚ÓBÂCƒrÓBÂCƒrR"Csr3BCƒr#BCƒ"3ÂCS’C2"CS"CBCSbCBCSRCB"CC’CBCSCBCSCB"C3bCCCRCBC3’C2Â3R#"3B3b3Â3ÓBÂ3"ÓB"CcB#ƒr3"ÓB#“BS’"Cs3rCc’#“BCs3"Ccr3#Cs3BCc‚3#ÂC3R3S2"C#3S’C33SbC#b3S’"#b3S’C"3S’#r3S’"ƒr3C“b3S’ƒ’3S"C2‚ƒr3Cƒ#3R"#BÓ#BRc"Ós"#ÓC#BÓ#B#Ó3"#"ÓC‚#ÓC2#ÓCR"3bÓsB#bÓS‚3bÓsB"S"Óƒ23bÓsB3’Óƒ2¢"ÒÂF–ÖU6–sS¢²…öÖ–ã¢RÂ…öÖƒ¢3c"Â•öÖ–ã¢Ó#CBÂ•öÖƒ¢#CbÂ†¢C“Âó¢&Ò3’3B"Cbs3’3BCb#CR"CbSCbcBCbSr"3’Ó#BCRs3’Ó#B"3’Ó#’3’Ó#B3’Ó#b"C’ÓC‚3’Ó3RCÓCb"“’ÓS’c"ÓS“"ÓS‚"rÓS’"ÓS’BÓS’"#ÓC’"ÓS’‚ÓS‚"#3RCR#‚Ó3CBCR"3SbÓ"33rCR3SbÓC2"#3‚Ó#“"3SbÓƒB332Ó#ƒ‚"##bÓ#“"#32Ó#“"#3Ó#“""cbÓ#ƒ"“2Ó#“"sBÓ#ƒ‚"S‚Ó#sBcÓ#ƒS‚Ó#sb"cBÓ#cBS‚Ó#c’cÓ#cb"##"Óc‚srÓ#SR##"Ó#3’"rÓs##"Ó“‚s2Ós"#"ÓscÓs#"Ó#""Ó3‚#"Ó##3bÓ#sR"#S"Ó3SCrÓ33‚“’Ó3S"CSbÓ#sR3#RÓ3SCRÓ3#‚"S#Ó’S2Ó##‚S#Ócr"C32s’S#Ó3"CƒrC2"#s#B3“rB33b#B"3ƒB##2#Bs2""#Rƒ"3ƒ"#rƒ""R“"#ƒ"RƒbÂRƒ2"3“’R“"#"“’Â3"“’"#S"“"SB“r#"“""3s"#’#“R“"3C“b"CsB3#C3’#3bCc"#ƒ’"Csr33BCsR3#BCsr33"CS3SBCsr3CbCc’3SB"C33SCCR3SBC3’3S2"#S"3#‚3c33B3R3#‚"ƒ‚3C2#3#‚S33B"s3CBƒ‚3C2ƒ3CB"3’3#Sb3CB3’3C"3’3B3’3r3’3R¢"ÒÂF–ÖU6–sc¢²…öÖ–ã¢RÂ…öÖƒ¢3ƒrÂ•öÖ–ã¢Ó#CBÂ•öÖƒ¢#CRÂ†¢Cƒ’Âó¢&Ò3Sbc’"#b#"#c‚c’#3bC2"#’“‚#"S"#’sR"#bcr#’##"C"33‚#ƒr##R###c#ƒr"C#S’3sB#ƒr3“b#sR"3SbsB3ƒ#Cb3Sb#r"CC‚ƒ"3Sb#"3“bƒ""SCsBSƒ"SC#"ÂSCsr"SCs’SCsrSCsr"S32##RSC“"S3’#2"33S2SB#sbCSB3S2"S‚c2ƒ3S2ƒb##’"#"Ó#2C2#‚#"S‚"3Ó#ƒR#"ÓCbÓ#"3‚Ó3S#RÓ3C‚#c‚Ó3S"SSrÓ#R3c’Ó3SSSrÓ#“""3Sbc’SSrbCCbc’¢Ò3"Ó#“"#bÓCR#SRÓ#“#bÓ##b"3"#bÓcR#SR"3“ÓCR3S3“ÓcR"3"Ó#“3“Ó##b3SÓ#“¢"ÒÂF–ÖU6–ss¢²…öÖ–ã¢RÂ…öÖƒ¢3cbÂ•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&Ò#32Ósr"cÓ33b#"Ó##RcÓ#ƒ""ƒÓ3ccÓ3ScBÓ3c"#cBÓ3S#2Ó3c#rÓ3SB"#s‚Ó3S#c‚Ó3S#sBÓ3S"3c’Ó3c3#Ó3S3S’Ó3c"CRÓ333ƒ"Ó3cCbÓ3CB"CRÓ3#rCRÓ33CRÓ3#‚"3“bÓ##bCRÓ3#B3“bÓ#s’"C‚Ó33“bÓ“b3“’Óc"S2SC#RÓc"Csc"S#r3‚S‚“bS#r#sR"S#b3CS#r3#S#r3#r"S3cS#B3SbS‚3c"CƒB3cS23cC“3c"Ccr3CCsr3cCcr3Sb"Cb##‚Ccr3#rCcB##‚"#3R3S3Cb##‚3#‚3S"ƒb#S"CR3S“#cÂƒb3#"s33rƒb33s’33rÂ3r33r"#"3##’33r#"33Â#"SR"3r3’#"Cb#’3’Âs3’"ƒbSRs’3’ƒbCbÂƒb"S‚s’ƒb3B‚s’"3#‚#B#’s’#2#B"C#RC23Sr#BC#‚"#32ÓsrC2##cbÓ3¢"ÒÂF–ÖU6–sƒ¢²…öÖ–ã¢RÂ…öÖƒ¢3“2Â•öÖ–ã¢Ó#C‚Â•öÖƒ¢#CbÂ†¢C“BÂó¢&ÒCcr#b"SCrcbSBc"SCr‚"#“B3SBSCr#c’C323SB"CcbSB3SBC#c’"#"2C‚SRSb"#"ÓCrS‚Ó#B#"Ós‚"#“BÓ3Sr#"Ó#cBCBÓ3Sr"ScbÓCrCCBÓ3SrScbÓ#cB"Ccr#bScbÓs‚SCÓ2¢Ò#“BÓ#sb"#"ÓCR#"Ó#sb#"Ó##b"“rÓ#b#"ÓC’“rÓ#b"C3RÓƒr#“RÓS’C3RÓ‚"#“BÓ#sbC3RÓ##b3ƒBÓ#sb¢Ò3ƒbcR"ƒ#’#ƒ‚“bƒCB"#“B#ƒ‚ƒ#cR#3"#ƒ‚"CCBƒ3ƒ2#ƒ‚CCB#Cb"3ƒbcRCCBC"s‚¢"ÒÂF–ÖU6–s“¢²…öÖ–ã¢RÂ…öÖƒ¢3ƒrÂ•öÖ–ã¢Ó#CBÂ•öÖƒ¢#CRÂ†¢Cƒ’Âó¢&Ò##2Óc‚"3c2Ó#3Óc‚3C2ÓC""3sÓ“b3crÓS3sÓs2"3c2Ócb3sÓ#3crÓC"#CÓ#ƒR3SBÓ#’3‚Ó#ƒR"c‚Ó#S‚#BÓ#ƒRƒ2Ó#sB"##2Ós2“’Ó#CR##2Ó#b"3Óƒ##2Ó#ƒ2Óƒ"3rÓs2s’Óƒ3rÓ#Â3rÓsb"3rÓsr3rÓsb3rÓsb"CbÓ##23rÓ“CÓ#""#c’Ó3ScRÓ#sR#RÓ3S"S#Óc3“’Ó3SC“"Ó##‚"SSr#BS3bÓ#rSSrÓSb"CC‚#ƒrSSr"S32#""#c3S23cB3S33S2"#"#r#3S2#"#“B"##2Óc‚#"ÓB3"Óc‚¢Ò#sb#“B"3c2Cr3#B#“B3c2##‚"#sb3c2cb3#B"ƒ’Cr##’ƒ’cb"#sb#“Bƒ’##‚##’#“B¢"ÒÂF–ÖU6–t6öÖÖöã¢²…öÖ–ã¢Â…öÖƒ¢Cc2Â•öÖ–ã¢Ó#SbÂ•öÖƒ¢#S‚Â†¢SBÂó¢&ÒCc‚#S‚"CbCrC3"#3RCb“2"C‚3CbCCb3R"S#rCRsCc"#B"S3rrS#brS32r"ccrCrc’rccrsR"ccrSbccrCrccrS"ccBsrccrcccRs"3S3s"cS#3’S“R3s""r3b3s""3ƒ"Ó3c’ÓSB#"Ó3c’"cCÓ3S#BÓ3c’c3RÓ#ƒR"c#’Ó#cCÓ#Bc3bÓ#ÂcÓ#"S“’Ó3cRÓ#S“’Ó#R"3ƒ"Ó3#2S“2Ó#SS‚Ó3#2"“bÓ#‚#SbÓ3#2“bÓ#SRÂ“bCr"3Sb3#“b##‚##‚3#"Cc’#sC#23#CSB#“R"Cs#cBCs#c‚Cs#cb"Cc‚#S‚Cs#c"Cs#S’¢"ÒÂF–ÖU6–t7WD6öÖÖöã¢²…öÖ–ã¢Â…öÖƒ¢Cc2Â•öÖ–ã¢Ó3sbÂ•öÖƒ¢3ƒ‚Â†¢scBÂó¢&ÒcÓ#"S“’Ó3cRÓ#S“’Ó#R"3ƒ"Ó3#2S“2Ó#SS‚Ó3#2"3c’Ó3#23srÓ3#23s2Ó3#2Â3c’3#"Cc’#c’C#‚3rCSR#“""Cs#cBCs#cbCs#cR"Cc‚#S‚Cs#cCs#S’"CbCrC3"#3RCb“2"C‚3CbCCb3R"S#2rCRsCcB#B"S3rrS#rrS32r"ccrCrc’rccrsR"ccrSbccrCrccrS"ccBsrccrcccRs"3c’3scS#3bS“‚3cBÂ3c’SC2"3S2SS’3c’SS"3cSS’Â3BSS’"#“‚SC23RSS’#“‚SS"Â#“‚3c’"r3"3CR"#“‚Ó3cBÓCrÓ33BÂ#“‚ÓS#b"3BÓSC#“‚ÓS3B3RÓSCÂ3S2ÓSC"3c’ÓS#b3cÓSC3c’ÓS3BÂ3c’Ó3c’"3ƒ"Ó3c’3s2Ó3c’3srÓ3c’"cCÓ3S#BÓ3c’c3RÓ#ƒR"c#’Ó#cCÓ#Bc3bÓ#¢Ò“bCr"#“‚3"“b#R#b#ƒ’Â#“‚Ó3"“bÓ#‚##’Ó#ƒR“bÓ##2¢"ÒÂF–ÖU6–uÇW3¢²…öÖ–ã¢Â…öÖƒ¢C‚Â•öÖ–ã¢Ó#BÂ•öÖƒ¢#BÂ†¢C‚Âó¢&Ò3#r32Â3#r#sR"3‚#“B3#r#ƒR3‚#“BÂ#s’#“B"#c#sR#c’#“B#c#ƒRÂ#c32Â’32"B’32#BÂÓ2"’Ó32Ó#2’Ó32Â#cÓ32Â#cÓ#sB"#s’Ó#“B#cÓ#ƒB#c’Ó#“BÂ3‚Ó#“B"3#rÓ#sB3‚Ó#“B3#rÓ#ƒBÂ3#rÓ32ÂScrÓ32"Sƒ‚Ó2SsrÓ32Sƒ‚Ó#2ÂSƒ‚B"Scr32Sƒ‚#BSsr32¢"ÒÂæ÷FV†VDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢S3‚Â•öÖ–ã¢Ós‚Â•öÖƒ¢s’Â†¢3SrÂó¢&Ò32#S‚"##S‚#r#S‚#b#S‚"#3‚’#S‚#C’"Ó#3b##bÓ##b"#Ó#SbÓ#Cb’Ó#Sb"32Ó#Sb#bÓ#Sb#rÓ#Sb"S2Ó#3bC2Ó#SbS2Ó#CR"S2#3‚S2Ó##‚S2##b"32#S‚S2#C’CR#S‚¢ÒcC’#S‚"c3b#S‚cCB#S‚cC"#S‚"cb#3‚c#R#S‚cb#C’"cb#Rcb#3Rcbƒr"3ƒ’“bSs2crS“b"c#R#sb“b#2cr"c#3‚cƒrc#3R"C#S‚c#C’S#S‚"#r#S‚3B#S‚3"#S‚"r#3‚R#S‚r#C’"rÓ#3br##brÓ##b"#rÓ#SbrÓ#CbRÓ#Sb"CÓ#Sb3"Ó#Sb3BÓ#Sb"cÓ#3bSÓ#SbcÓ#CR"cÓ#"cÓ#32cÓƒb"3ƒ’Ó“B#2Ócb#sbÓ“B"cbÓ#"SÓ“BSs2Ócb"cbÓ#3bcbÓƒbcbÓ#32"c3bÓ#SbcbÓ#Cbc#RÓ#Sb"cC’Ó#SbcC"Ó#SbcCBÓ#Sb"csÓ#3bccÓ#SbcsÓ#CR"cs#3‚csÓ##‚cs##b"cC’#S‚cs#C’cc#S‚¢ÒCc"ÓC"CÓC‚CCRÓCBC#"ÓC‚"3BÓ3cÓC‚332Ó3R"#c‚c‚#“RÓcR#c’#’"#c‚sb#c‚s#c‚s2"3BC#c‚’#ƒ"3"3srS33CR3SBS"Cc""CbSCC"C"SÓcbCƒ"c2SÓ#’"Cc"ÓCSÓBC“rÓ#‚¢ÒsSR#S‚"sC"#S‚sC’#S‚sCr#S‚"s##3‚s3#S‚s##C’"s#Ó#3bs###bs#Ó##b"sC"Ó#Sbs#Ó#Cbs3Ó#Sb"sSRÓ#SbsCrÓ#SbsC’Ó#Sb"ssRÓ#3bscRÓ#SbssRÓ#CR"ssR#3‚ssRÓ##‚ssR##b"sSR#S‚ssR#C’scb#S‚¢"ÒÂæ÷FV†VEv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3s2Â•öÖ–ã¢Ó3BÂ•öÖƒ¢3bÂ†¢#sÂó¢&Ò#c’“b"s“b“R"#c’Ó“2Ó“"sÓ“2"S3rCc‚Ó“2S3rÓ“""#c’“bS3r“RCc‚“b¢Ò3C2Ó3‚"#ƒÓCr3#RÓCB3"ÓCr"“BÓ“’#CÓCr#2Ó3R"C‚c‚sbÓc2S#’"“BCCRrc3"#SbS#"Cr#3RS"3C2"#“rS3#2C"3ƒ’ÓcR3c2c23ƒ’Ó#’"3C2Ó3‚3ƒ’Ó"3srÓ#‚¢"ÒÂæ÷FV†VD†Æc¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢Ó32Â•öÖƒ¢3"Â†¢#cRÂó¢&Ò3r“"Óccr“s2"cÓ“"Ó#"CRÓ“""Cc‚S‚3Ó“"Cc‚Óc’"3r“Cc‚C23“b“¢Ò#c‚Óc2"‚Ó#B#cBÓcbS‚Ó#B"SÓs"cÓ#BSÓƒR"#c"SÓ"“BS’"3c#"#bcR3‚#""C‚s3“R#"C‚""#c‚Óc2C‚’#s"Óc¢"ÒÂæ÷FV†VD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢Ó32Â•öÖƒ¢3"Â†¢#cRÂó¢&ÒÓc"cÓ“"Ó#"CRÓ“""Cc‚S‚3Ó“"Cc‚Óc’"3r“Cc‚C23“b“"Óccr“s"¢"ÒÂæ÷FV†VE„&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢Ó3"Â•öÖƒ¢3"Â†¢#cBÂó¢&ÒCc3‚"Cc‚S2CcRCCc‚CrÂCc‚SB"Cc"crCc‚cCcRcBÂCCRƒB"C3“CCƒrC3b“"C‚ƒbC#b“C#ƒ’Â#3RCÂSƒb"3r“C‚ƒ’C"“"#BƒB3"“#’ƒrÂbcr"S22cBS‚"r3‚Cr2CÂƒ2ÂrÓ3‚"ÓS22ÓCÓCr"bÓcbÓSr2Óc2Â#2ÓƒB"3rÓ“#bÓƒ’3"Ó“"SÓƒbC"Ó“C‚Óƒ’Â#3RÓCÂC‚Óƒb"C3Ó“C#Óƒ’C#bÓ“"CCRÓƒBC3bÓ“CC"Óƒ’ÂCc"Ócb"Cc‚ÓS2CcRÓc2Cc‚ÓSr"CcÓ3‚Cc‚ÓCrCcRÓCÂ#ƒR¢"ÒÂæ÷FV†VD6—&6ÆUƒ¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢Óc"Â•öÖƒ¢c2Â†¢3#RÂó¢&Ò#cRÂ3“RR"C#bCRsRC#b3’"3ƒrÓRC#bÓC2C"ÓƒB¢Ò#32Ó#rÂ3cÓCR"#3RÓ“"3#rÓsB#ƒ"Ó“""“’Ó3rƒ2Ó“"3BÓs¢Ò#"Âs2ÓR"C"S2ÓsRC"Ó3’"ƒRC"C2SbƒB¢Ò#3R#’Â‚CR"#32“2CsBƒb“2"3c’3‚#ƒR“233Bs2¢Ò#32#3R"B#3R3"#32Ó#32Ó3BÓ#32"Cc‚3c2Ó#32Cc‚Ó3"#32#3RCc‚33c2#3R¢"ÒÂæ÷FV†VDF÷V&ÆUv†öÆU7V&S¢²…öÖ–ã¢Â…öÖƒ¢C3"Â•öÖ–ã¢Ós’Â•öÖƒ¢srÂ†¢3SbÂó¢&ÒS“#SR"Ss#3RSs’#SRSs#CbÂSs#2ÂS2#2ÂS2#3R"32#SRS2#CbCR#SRÂ##SR"#3R’#SR#CbÂÓ#3"#Ó#SÓ#C"’Ó#SÂ32Ó#S"S2Ó#3CRÓ#SS2Ó#C"ÂS2Ó#ÂSsÓ#ÂSsÓ#3‚"S“Ó#S‚SsÓ#C’Ss’Ó#S‚Âc2Ó#S‚"c#"Ó#3‚cRÓ#S‚c#"Ó#C’Âc#"#3R"c2#SRc#"#CbcR#SR¢ÒSsÓÂS2ÓÂS2RÂSsR¢"ÒÂæ÷FV†VE7V&Uv†—FS¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó#RÂ•öÖƒ¢#RÂ†¢#SÂó¢&Ò3“R#‚Â3“RÓ#‚ÂS"Ó#‚ÂS"#‚¢ÒCCbƒÂƒÂÓƒÂCCbÓƒ¢"ÒÂæ÷FV†VE7V&T&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó#RÂ•öÖƒ¢#RÂ†¢#SÂó¢&ÒCCbƒÂƒÂÓƒÂCCbÓƒ¢"ÒÂæ÷FV†VEG&–ævÆUW&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó3bÂ•öÖƒ¢#"Â†¢#S‚Âó¢&Ò##2sbÂÓ“bÂCCbÓ“b¢"ÒÂæ÷FV†VE6Æ6†VDF÷V&ÆUv†öÆS¢²…öÖ–ã¢ÓcbÂ…öÖƒ¢CSbÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&ÒcS"#“‚"c3‚3RcC’3BcCB3R"c#b3c3B3Rc#’3BÂSc#C‚"SC2#SbSSr#S2SS#Sb"S3#SbS3r#SbS3b#Sb"S#3bS‚#SbS#C‚"S#BS#3RS##2ÂCSRc"#ƒ“BC2ƒ3Sb“B"S2#Bc‚“B“bcb"S2#3bS2ƒbS2#32"#’#SbS2#S2C"#Sb"##Sb#b#Sb#2#Sb"#3b’#Sb#C‚"Ó#B##‚Ó“‚ÂÓƒ‚Ó#s""Ó“RÓ#ƒ‚Ó“"Ó#sbÓ“RÓ#ƒ""Ó“Ó3Ó“RÓ#“Ó“BÓ#“R"ÓsbÓ3rÓƒbÓ3BÓƒ"Ó3r"ÓcRÓ3"Ós"Ó3rÓc‚Ó3RÂ2Ó#C‚"#Ó#S‚bÓ#S2"Ó#S‚"S2Ó#3‚32Ó#S‚S"Ó#SR"S2Ó#bS2Ó#3bS2Ó##RÂrÓc"#ƒÓ“bC‚Óƒ2#bÓ“b"SÓ#B3“2Ó“bCcRÓcb"SÓ#3‚SÓƒrSÓ#3R"S3Ó#S‚SÓ#C‚S‚Ó#S‚"Sc2Ó#3‚SC2Ó#S‚Sc2Ó#SR"Sc2#BSc2Ó##’Sc2“‚ÂcC’#s""cSr#ƒ‚cSR#sbcSr#ƒ""cS"#“‚cSr#“cSR#“R¢ÒcsR"#c’C‚c3‚#’C‚"3Sb3C‚33BC"3c2ƒR3Sr“b3c“Âƒ’ÓSb"ccbsBÓBcC"csRcc’cs"¢ÒS2Óc2"S2Ó#BS2ÓSS2Ó3‚"sbÓCBcÓ3c‚Ó3‚¢ÒC"Óc‚"#“"ÓC‚C"Ó3‚3SÓC‚"#rÓ#S"ÓS##bÓ3r"“’ÓƒB#BÓ“b#"Ó“Â3s2Sb"C"Óc‚3ƒ’2C"ÓC¢ÒS#B"CƒRCBS23C“B3rÂSc2"S#BSSS3r¢"ÒÂæ÷FV†VE6Æ6†VEv†öÆS¢²…öÖ–ã¢ÓsRÂ…öÖƒ¢CC‚Â•öÖ–ã¢Ó#Â•öÖƒ¢#BÂ†¢C#RÂó¢&ÒcC3"c#R3‚c3b3Rc33‚"c23Bc#3rc‚3rÂC3’c"#c’“b3“’ƒ3C2“b"s“b“R"c’Ó3‚ÓC’#ÓÂÓÓ#s"Ó‚Ó#ƒrÓRÓ#sRÓ‚Ó#ƒ"ÓBÓ#“‚ÓrÓ#“ÓrÓ#“B"Óƒ‚Ó3BÓ“’Ó3"Ó“BÓ3B"ÓsbÓ3ÓƒRÓ3BÓƒÓ3BÂ“‚ÓSr"#c’Ó“23‚Ós’“BÓ“2"S3rCc‚Ó“2S3rÓ“""Cc‚CS3rS"SrBÂc3‚#sB"cCR#ƒ’cC"#s‚cCR#ƒB"cC3cCB#“"cCB#“r¢ÒC‚c‚"C‚s‚C‚s"C‚sR"“BCC‚c23"#SbS#"Cr#3RS"3C2"#“rS3#2C"3Sƒb3Cb“‚3C‚“"ÂsrÓSR"C‚c‚c2Ó"SC"¢Ò3ƒ’ÓcR"3C2Ó3‚3ƒ’Ó"3srÓ#‚"#ƒÓCr3#RÓCB3"ÓCr"“BÓ“’#CÓCr#2Ó3R"ƒrÓƒ"“"Ó“R“Óƒ’Â#s’ÓbÂ3cS‚"3ƒ’ÓcR3sbb3ƒ’Ó3’¢"ÒÂæ÷FV†VE6Æ6†VD†Æc¢²…öÖ–ã¢Ó“‚Â…öÖƒ¢C#BÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&Òcb#“‚"S“"3Rc"3"S“‚3R"Sƒ3Sƒ‚3RSƒ23BÂC"c2"3r“3ƒ2ƒ3Cr“"S2C‚#S‚“#Bsb"ÓcS‚“‚2"BÓ#ÓƒBÓ"3"ÓC2#Ó#‚#bÓ3RÂÓ3BÓ#sB"ÓCÓ#ƒ‚Ó3‚Ó#sbÓCÓ#ƒ""Ó3rÓ3ÓCÓ#“"ÓCÓ#“r"Ó#"Ó3rÓ3BÓ3BÓ#‚Ó3r"ÓÓ3"Ó‚Ó3rÓBÓ3RÂSbÓcB"cÓ“"ƒRÓƒ#Ó“""3RÓS#Ó“"#cBÓs’"Cc‚S‚CÓCc‚Ób"CSBrCc‚s‚CcB“‚"C3bCCC’#RCCB3BÂc2#s""c#ƒrc‚#sRc#ƒ"cb#“‚c#“c’#“R¢ÒSbÓ“‚"C’Ós2S"Ó“C’Óƒ""sRÓ#2C’ÓS‚S’Ó3’"“’c“’Cr3""33r‚#Sƒ’3""3S’#3CB#3S#"3c#3c#3c#Â##R’Âc’ÓB"SbÓ“‚cRÓ’cÓB¢ÒC“B"Cbc’CRƒbCbs‚"3“"’CbS2C‚3b"#cbÓcR3crÓb3‚Ó3b"#‚Ó#"#RÓ“Bc2ÓR"rÓ#R#Ó#BBÓ#R"BÓ#RrÓ#RRÓ#RÂ#CRÓ’Â3“b"C“BC"rC‚¢"ÒÂæ÷FV†VE6Æ6†VD&Æ6³¢²…öÖ–ã¢Ó“‚Â…öÖƒ¢C#BÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&Òcb#“‚"S“"3Rc"3"S“‚3R"Sƒ3Sƒ‚3RSƒ23BÂC"c"3r“3ƒ2ƒ3Cr“"Óccr“s""3"ÓCBÓƒ’Ó#ÂÓ3BÓ#sB"ÓCÓ#ƒ‚Ó3‚Ó#s‚ÓCÓ#ƒB"Ó3rÓ3ÓCÓ#“"ÓCÓ#“r"Ó#"Ó3rÓ3BÓ3RÓ#‚Ó3r"ÓÓ3BÓ‚Ó3rÓBÓ3rÂSbÓcB"cÓ“"ƒ"ÓƒrÓ“""Cc‚S‚3Ó“"Cc‚Ós"C3bCCc‚“CSb#Âc2#s"c#ƒRc‚#sRc#ƒ"cb#“‚c#ƒ’c’#“B¢"ÒÂæ÷FV†VE6Æ6†VDF÷V&ÆUv†öÆS#¢²…öÖ–ã¢ÓcbÂ…öÖƒ¢CSbÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&ÒSc2Ó#B"Sc2#3bSc2Ó“‚Sc2##‚"SC2#SbSc2#C’SSB#Sb"S3#SbS3r#SbS3b#Sb"S#3bS‚#SbS#C‚"S#BS#32Sƒr"#ƒ“BCcrcb3“2“B"rc#r“BSƒÂS2#B"S2#3bS2##2S2#3R"32#SbS2#C’CR#Sb"##Sb#r#Sb#b#Sb"2#Cb"#Sbb#S2ÂÓc23"Ósb3RÓc‚3BÓs"3R"Ó“#“‚Óƒ3RÓƒb3B"Ó“R#ƒrÓ“B#“RÓ“R#“"Óƒ‚#s"Ó“R#ƒÓ“"#sbÂ#B"Ó#3‚“‚Ó##’"#Ó#S‚Ó#C‚’Ó#S‚"32Ó#S‚#bÓ#S‚#rÓ#S‚"S2Ó#3‚C2Ó#S‚S2Ó#Cb"S2Ó#BS2Ó#3RS2Óƒr"#ƒÓ“b“bÓcbsÓ“b"CSbÓc3SbÓ“bC2Óƒ2ÂSÓ#b"SÓ#3‚SÓ##RSÓ#3b"S3Ó#S‚SÓ#C‚S‚Ó#S‚"SC2Ó#S‚S3bÓ#S‚S3rÓ#S‚"ScÓ#CbSC’Ó#S‚SSbÓ#S"Âc#bÓ3""c3‚Ó3rc3Ó3Rc3BÓ3r"cSBÓ3cCRÓ3rcC’Ó3B"cSrÓ#ƒ‚cSRÓ#“RcSrÓ#“""cSÓ#s"cSrÓ#ƒ"cSRÓ#sb¢Ò#rC"#c’C‚##RCB#C‚C‚"3Sb3C‚33bC"C"Óc‚3sbc"C"Ó3"C"Ós‚C"ÓsC"ÓsRÂ#“"’Âc‚’"#rCsb#Bƒ’3B¢Òs‚CB"S2#Bc’3rc3"S2c2S23rS2S¢Ò3SbÓC"#“BÓC‚33‚ÓCR3RÓC‚"#rÓ#S2ÓC‚##bÓ3r"ccbƒ’Ócbc2#r"cs"cc’cs"cs‚csRcsbÂ#sÓ’Â3“RÓ’"3SbÓC3ƒrÓ#B3sBÓ3B¢ÒCƒRÓCB"SÓ#BC“BÓ3‚S2Ó3"SÓc2SÓ3‚SÓS¢"ÒÂæ÷FV†VE6Æ6†VEv†öÆS#¢²…öÖ–ã¢ÓsRÂ…öÖƒ¢CC‚Â•öÖ–ã¢Ó#"Â•öÖƒ¢#BÂ†¢C#bÂó¢&ÒCc‚Ó3‚"S3rSrÓS3rÓC’"#c’“bS3r“RCc‚“b"“‚c“b“bCƒÂÓsb3B"Óƒ‚3‚Óƒ3rÓƒB3r"ÓB3Ó“B3‚Ó“’3R"Ó‚#ƒ’Ór#“rÓr#“""Ó#sBÓ‚#ƒBÓR#s‚Âc’C"#BS""#c’Ó“2Ó“"sÓ“2"CCÓSr3C2Ó“23“’Ós’Âc2Ó3"c#RÓ3Rc‚Ó3Bc#"Ó3R"cCÓ#“‚c3Ó3Rc3bÓ3""cCRÓ#ƒrcCBÓ#“BcCBÓ#“"c3‚Ó#scCRÓ#ƒcC"Ó#sR¢Ò“BC"#SbS#"Cr#3RS"3C2"#“rS3#2C"3ƒ’ÓcR3c2c23ƒ’Ó#’"3ƒ’Ósb3ƒ’Óc’3ƒ’Ós2Â#s’ÂSb""“BCc2#Rsb3R¢Ò3C2Ó3‚"#ƒÓCr3#RÓCB3"ÓCr"“BÓ“’#CÓCr#2Ó3R"C‚c‚sbÓc2S#’"C‚sbC‚sC‚s2"C‚ƒC‚s‚C‚s’Â#S‚ÓbÂ3ƒ"Ó‚"3C2Ó3‚3sBÓ#"3cÓ3"¢"ÒÂæ÷FV†VE6Æ6†VD†Æc#¢²…öÖ–ã¢Ó“‚Â…öÖƒ¢C#BÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&Ò3ƒbÓ""Cc‚S‚C3‚ÓSRCc‚B"CSBrCc‚s‚CcB“‚"3r“C#‚cB3s2“"S2C‚#S‚“#Bsb"‚#3rC#"3ÂÓ3"Ó#"3RÓB3BÓ‚3R"Ó3r#“‚Ó#‚3RÓ3B3""ÓC#ƒrÓC#“RÓC#“"Ó3B#s"ÓC#ƒÓ3‚#sRÂƒR"Óc3"S2Ór"BÓ#ÓƒBÓ"cÓ“"CÓcr“RÓ“""3RÓS#Ó“"#cBÓs’"3cÓ#"332ÓC23CrÓ3"ÂSƒÓ3""S“"Ó3rSƒ2Ó3RSƒ‚Ó3r"cbÓ3S“‚Ó3rc"Ó3B"cÓ#ƒ‚c’Ó#“rcÓ#“""c2Ó#sBcÓ#ƒ"c‚Ó#sb¢Ò“’c"33r‚#Sƒ’3""3S’#3CB#3S#"C“B3ƒ"#C""Cbc’CRƒbCbs‚"3“"’CbS2C‚3b"3‚ÓC"3sB3C2Ó#Â#CRrÂƒ’SR"“’c“"Sb“bS‚¢Ò#cbÓcR"#‚Ó#"#RÓ“Bc2ÓR"rÓ#R#Ó#BBÓ#R"SbÓ“‚ƒBÓ#RcbÓr"C’Ós2S"Ó“C’Óƒ""sRÓ#2C’ÓS‚S’Ó3’"c23’“BÓB#RrÂ##RÓ’Â#ƒ"ÓSb"#cbÓcR#sbÓS’#s"Óc"¢"ÒÂæ÷FV†VE6Æ6†VD&Æ6³#¢²…öÖ–ã¢Ó“‚Â…öÖƒ¢C#BÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#"Â†¢C#RÂó¢&Ò3ƒBÓ""Cc‚S‚C3RÓS‚Cc‚"3r“Cc‚C23“b“"‚##3’“crc2ÂÓ3"Ó#B3RÓR3BÓ#3R"Ó3‚#“‚Ó#‚3RÓ3B3""ÓC#ƒ’ÓC#“RÓC#“""ÓC#ƒrÓC#ƒ‚ÓC2#ƒ‚"Ó3R#s"ÓC#ƒÓC#sRÂƒB"Óc3RSb"cÓ“"Ó#"CRÓ“""3cÓ#"#3"Ó“"3BÓcBÂSs’Ó3""S“Ó3rSƒ2Ó3RSƒ‚Ó3r"cbÓ3S“bÓ3rc"Ó3B"cÓ#ƒ‚c’Ó#“rcÓ#“""c2Ó#sBc’Ó#ƒ"c‚Ó#sb¢"ÒÂæ÷FV†VDF–ÖöæDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3s2Â•öÖ–ã¢Ós‚Â•öÖƒ¢s’Â†¢3SrÂó¢&ÒSB#S‚"CƒB#3‚C“B#S‚CƒB#C‚ÂCƒBCb"#ƒ"ƒrCR“R#ƒRƒb"#c‚“"#s’“#sR“""#SRƒr#c"“"#S‚“ÂS"CRÂS"#3‚"32#S‚S"#C‚C2#S‚Â##S‚"#3‚’#S‚#C‚ÂÓ#3b"#Ó#SbÓ#C‚’Ó#SbÂ32Ó#Sb"S"Ó#3bC2Ó#SbS"Ó#C‚ÂS"ÓCRÂ#C’Óƒ"#c‚Ó“#S‚Óƒ’#cBÓ“"#ƒ"Óƒb#sBÓ“#s’Óƒ’"CƒBÓC2#ƒRÓƒBC2Ó“BÂCƒBÓ#3b"SBÓ#SbCƒBÓ#C‚C“BÓ#SbÂSrÓ#Sb"S3rÓ#3bS#‚Ó#SbS3rÓ#C‚ÂS3r#3‚"Sr#S‚S3r#C‚S#‚#S‚¢Ò##ÓRÂ"Ó32Â3rrÂC3R3R¢"ÒÂæ÷FV†VDF–ÖöæEv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3s2Â•öÖ–ã¢Ó32Â•öÖƒ¢3"Â†¢#cRÂó¢&Ò#ƒ"Óƒr"S3Ó2#ƒRÓƒbS3Ó2"S3rS3BÓS3rÓb"S32S3rBS3B"#ƒ"ƒbS32#ƒrƒ2"#c‚“#s’ƒ’#sR“"#SRƒb#c"“#S‚ƒ’Âr""Ó2’B"BÓ2ÓbÓÂ#C’Óƒ2"#c‚Ó“"#S‚Ó“#cBÓ“""#ƒ"Óƒr#sBÓ“"#s’Ó“¢Ò##ÓrÂ"Ó3RÂ3rRÂC3R32¢"ÒÂæ÷FV†VDF–ÖöæD†Æc¢²…öÖ–ã¢Â…öÖƒ¢33RÂ•öÖ–ã¢Ó3"Â•öÖƒ¢32Â†¢#cRÂó¢&ÒCsRÓ2"Cƒ"CƒÓCƒ"Ób"CsR2Cƒ"BCƒÂ#S2ƒr"#C“"#S“#Cb“""##’ƒr#3b“"#3"“Âr2"2b"rÓ2ÓB2ÓÂ##’Óƒb"#CÓ“#3"Óƒ’#3bÓ“"#S2Óƒb#CbÓ“#SÓƒ’¢Ò#ƒBÓRÂ“"32Â“’rÂ3“Ó32¢"ÒÂæ÷FV†VDF–ÖöæD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢33RÂ•öÖ–ã¢Ó3"Â•öÖƒ¢32Â†¢#cRÂó¢&ÒCsRÓB"Cƒ"ÓCƒÓCƒ"Ób"CsR2Cƒ"BCƒÂ#S2ƒr"#C“"#S“#Cb“""##’ƒr#3b“"#3"“Âr2"2B"rÓBÓb2ÓÂ##’Óƒb"#CÓ“#3"Óƒ’#3bÓ“"#S2Óƒb#CbÓ“#SÓƒ’¢"ÒÂæ÷FV†VE&VçF†W6—5&–v‡C¢²…öÖ–ã¢Â…öÖƒ¢sRÂ•öÖ–ã¢Ó#’Â•öÖƒ¢#"Â†¢C#Âó¢&Ò3R"B3"r3Bb3B"#“R3#“‚"#ƒ’#“B#“""c‚Ó#ƒ‚c‚c"Ó#ƒ‚c‚Ó“RSÓ“""Ó#“"Ó#ƒ’Ó#“"BÓ3Ó#“RÓ#“‚""Ó3rÓ3’Ó3""rÓ#“‚BÓ3bÓ3"‚#"Ó#“"‚ÓsB"r3‚sB#"#“R"3Rb3B23R¢"ÒÂæ÷FV†VE&VçF†W6—4ÆVgC¢²…öÖ–ã¢Â…öÖƒ¢sRÂ•öÖ–ã¢Ó#"Â•öÖƒ¢#’Â†¢C#Âó¢&Ò“‚Ó3R"BÓ3"Ó3B"Ó3B"‚Ó#“RrÓ3‚Ó#“‚"rÓ#ƒ’‚Ó#“B‚Ó#“""CrÓ#ƒ‚CÓc"r#ƒ‚C“RS‚“""‚#“"‚#ƒ’‚#“"B3‚#“Rr#“‚"“b33“’3""“#“‚“B3“"3"ƒb#“"sB"“Ó3ÓsBƒbÓ#“R"“‚Ó3R“"Ó3B“RÓ3R¢"ÒÂæ÷FV†VDÖööä&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó#RÂ•öÖƒ¢#RÂ†¢#SÂó¢&ÒƒÂ"##2ÓƒÓ“’“’Óƒ"CCb3CrÓƒCCbÓ“’ÂCCbƒ¢"ÒÂæ÷FV†VEG&–ævÆTÆVgD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢33’Â•öÖ–ã¢Ó3bÂ•öÖƒ¢#"Â†¢#S‚Âó¢&ÒsbÂÓ“bÂCƒ‚Ó“b¢"ÒÂæ÷FV†VEG&–ævÆU&–v‡D&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢33’Â•öÖ–ã¢Ó3bÂ•öÖƒ¢#"Â†¢#S‚Âó¢&ÒCƒ‚sbÂÓ“bÂCƒ‚Ó“b¢"ÒÂæ÷FV†VEG&–ævÆU&÷VæDF÷vä&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó3bÂ•öÖƒ¢#"Â†¢#S‚Âó¢&Ò##bÓ“bÂCCbc2"##bsbCCbc23ƒBsb"c2c‚sbc2¢"ÒÂVvÖVçFF–öäF÷C¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢ÓSÂ•öÖƒ¢SÂ†¢Âó¢&Ò"s"Ós"ÓC3"Ós""CB"Ós"CBÓC"s"s"CBC"s""3"s"C¢"ÒÂG&VÖöÆó¢²…öÖ–ã¢Â…öÖƒ¢#“Â•öÖ–ã¢Ó“2Â•öÖƒ¢“bÂ†¢ƒ’Âó¢&ÒC‚ÂÓ3BÂC‚ÓC2ÂC‚3‚¢"ÒÂfÆs‡F…W¢²…öÖ–ã¢Â…öÖƒ¢#ƒ’Â•öÖ–ã¢ÓƒrÂ•öÖƒ¢"Â†¢ƒ#’Âó¢&ÒÓ3#r""Ó3C2Ó33Ó33‚"#“Ócs2Ó3c2“rÓCC"3S’Óƒ#r3rÓcCR3S’Ósr"#“BÓC3S’Ó“333Ó3r"#ƒ’Óc"#“ÓC’#ƒ‚ÓSb"#“rÓsR#ƒ’Óc‚#“Ós""3BÓsb3Ósb3"Ósb"3#rÓc3BÓsb3#Ós"CbÓs“‚3“RÓCC‚Óƒƒ‚"CbÓsƒCbÓs“CbÓsƒb"3"ÓCS‚C’ÓS“R3"ÓCS‚"3Ó##3rÓCS‚sÓ#ƒ"SÓSs‚Ó3‚S2ÓSb"3bbC’ÓCb3bb"’r3R"#rr"Ó’r’¢"ÒÂfÆs‡F„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Ó"Â•öÖƒ¢ƒrÂ†¢ƒ#’Âó¢&Ò"’ÓrÓ’’Ór"3bÓb#bÓr3RÓ""SS3bÓBC’Cb"r“bS"SbcR"33CS‚s2#ƒ’#S’3Sr"CCRsƒC"SS’CCRcSB"33‚cCCR“"CR#"3rsb33Bs3#Rsb"3sR3Bsb3sb"3S‚3"s"3cb"3BC3S23Cb"3ƒBƒ#r3cr3ƒB“3"3rc3ƒBsr3C2cCR""3C2##2CCs"3c2"3#r33‚33¢"ÒÂfÆsgF…W¢²…öÖ–ã¢Â…öÖƒ¢#s’Â•öÖ–ã¢Óƒ#Â•öÖƒ¢"Â†¢ƒ3"Âó¢&Ò3Ócƒ"C‚ÓSB#c"Óc3#’ÓSƒR"SbÓ3s"“"ÓCS‚cbÓC’"S"Ó3C2SRÓ3cBS2Ó3SB"#sÓS#RÓ3C2#’ÓCC""3CÓc“b3#rÓSƒ23CÓcC"33rÓs3’3CÓs33‚Ós#B"3Ócƒ3#RÓsb3"Óc“r¢ÒÓSC’"#"ÓSc2ÓSS2"ÓSS’"#S‚ÓssbS’ÓSsbsÓcC‚"3‚Ó“S3rÓƒS3‚Ó“"3rÓ“sR3‚Ó“S’3‚Ó“cb"#ƒRÓC3rÓ’3rÓƒ2"#s’ÓcB#ƒBÓC‚#s’ÓSb"#ƒ’Ós’#s’Óc’#ƒ"ÓsR"#“rÓƒ#“"Óƒ#“BÓƒ"3‚Óc3rÓƒ3"Óc’"3ƒ"Ó“c"3CBÓ#3ƒ"ÓC2"3sBÓƒSR3ƒ"Ó“#3s’Óƒƒb"C"Ócs‚3ƒ’Óƒ"C"ÓsC’"332ÓCsC"Óc23ƒ"ÓS3b"3rÓ##‚#cRÓ3ƒ"“"Ó3r"C"ƒ"ÓC‚C""#"r3’3rr"Br¢"ÒÂfÆsgF„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Ó#bÂ•öÖƒ¢ƒ2Â†¢ƒ#’Âó¢&ÒS23Cb"Sb3c2SR3S2Sb3S’"c2Srcb3“’s‚CS""3ƒBs3"#CbSƒ"3Cbcc""3rS23ƒ"c#3SBSS""S23Cb##’3“R#"3cB¢ÒÓB"#"Ó3rÓ#bÓ3r"C2ÓB32Ó3rCÓ#b"cr#3"cR3B’sr"CCRcƒ2#C23RCCRCb"C3"ƒ3rCCRs3CCsƒ2"CC“’C3‚ƒSRCCƒƒ"3#rC’CC3"3sB""3BSb3#S23"Sb"#ƒrS"#“‚Sb#“"SR"#s’CR#ƒC’#s’C‚"#“B#’#s’C#ƒ‚3R"3ƒ"“33CBsb3ƒ"#r"3sBƒsb3ƒ"“"3ƒƒ“2Â3s2ƒs"3s2ƒs3s2ƒs3s2ƒs"3#rsƒ’3cbƒC"3SƒR"#"S“‚##bcs"ƒbc""SS’"S“2Sc"¢"ÒÂfÆs3&æEW¢²…öÖ–ã¢Â…öÖƒ¢#s’Â•öÖ–ã¢Óƒ#Â•öÖƒ¢ƒbÂ†¢rÂó¢&Ò3Ócƒ2"C‚ÓSb#c"Óc3"#’ÓSƒ‚"SbÓ3s2“"ÓCS’cbÓC"SÓ3C2SRÓ3cbS2Ó3SB"#sÓS#RÓ3C2#’ÓC3""3CÓcƒr3#rÓSsR3CÓc3""33rÓs3’3CÓsB33‚Ós#"3Ócƒ23#RÓsb3"Óc“‚¢Ò#sÓ#S’"3CÓCCb3#rÓ3323CÓ3“""33‚ÓCc’3CÓCSR33‚ÓCc""332ÓCc33rÓCcr33BÓCcB"“Ó“"#cRÓ3s"CRÓ#s"SÓ“"c’ÓcS‚Ó#B"#sÓ#S’#BÓ“"#’Ó“"¢ÒÓSS"#"ÓScBÓSSB"ÓSc"#S‚Óss‚S’ÓSsrsÓcC’"3‚Ó“S"3rÓƒS3‚Ó“2"3rÓ“sb3‚Ó“c3‚Ó“c‚"#ƒRÓC"3rÓ3rÓƒB"#s’ÓcR#ƒBÓC’#s’ÓS‚"#ƒ’Óƒ#s’Ós#ƒ"Ósb"#“rÓƒ"#“"Óƒ"#“BÓƒ""3‚Óc"3rÓƒ"3"Ós"3ƒ"Ó“c23CBÓ#"3ƒ"ÓCB"3sBÓƒSr3ƒ"Ó“#"3s’Óƒƒr"C"Ócc‚3ƒ’Óƒ"C"ÓsC"3ƒbÓSc2C"Óc3"3“bÓS“b"C"ÓCC3“RÓS#bC"ÓCƒr"C"ÓC#‚C"ÓC3bC"ÓC3""332Ó##C"Ó3S23ƒ"Ó#ƒR"3r#2#cRÓ3“"ÓSb"C"#Sƒ""C"#S"#"#c‚3’#c3r#c‚"#SB#c‚#c¢"ÒÂfÆs3&æDF÷vã¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Ó#bÂ•öÖƒ¢ƒ2Â†¢’Âó¢&ÒSs2"“sS‚RsC"3CrC"CR#S#s"3r"3ƒBCSB3cC‚3sBC3R"3#B#3’3ƒB3Cr3c#ƒr"Ss2#3R3#"“B¢Òc2Sr"3cbc“2#C‚Sƒ’3#rcC""3ƒ"sb3s"s3srs‚"3ƒ2c“23ƒ2s‚3ƒ2s"3BSR3ƒ2c#3S’Sc""S23C2#S‚C3bs’3“"Sb3c2SR3SSb3S’"c2SrcbCƒCC’¢ÒÓ#ƒ‚"#"Ó3Ó#“‚Ó3"C2Ó#ƒ‚32Ó3CÓ3"crÓCcRÓ3‚’Ó“R"CCRC’#C23"CCRC2"C3SsrCCRCc"C3’S#"CCcSC3Rc"C3’c#b"CCcsRCCcS‚CCccr"CCcƒrCCcƒCCcƒB"C#Rƒ‚CCs3C32ss""CC“’C3RƒCCCƒsb"3#rC’CC3"3sB""3RSb3#S23BSb"#ƒrS"3Sb#“"SR"#s’CR#ƒC’#s’C‚"#“B#’#s’C#ƒ‚3b"3ƒ"“33CBsb3ƒ"#r"3#rsƒ’3ƒ"ƒsr3cBƒ3""#"S“‚##bcs"ƒbc""SS’"S“2Sc"¢"ÒÂfÆscGF…W¢²…öÖ–ã¢Â…öÖƒ¢#s’Â•öÖ–ã¢Óƒ#"Â•öÖƒ¢3s2Â†¢“RÂó¢&Ò332ÓCc"“Ó“"#cRÓ3s"CRÓ#s"SÓ“"c’ÓcS‚Ó#R"#sÓ#S#RÓ“"#’Óƒ2"3CÓC3‚3#rÓ3#B3CÓ3ƒ2"33‚ÓCc’3CÓCC‚33‚ÓCS’"332ÓCc33rÓCcr33BÓCcB¢Ò3Ócƒ2"C‚ÓSr#c"Óc3"#’ÓSƒ‚"SbÓ3sB“"ÓCccbÓC"SÓ3C2SRÓ3cbS2Ó3Sb"#sÓS#RÓ3C2#’ÓC32"3CÓcƒ‚3#rÓSsR3CÓc3B"33rÓs3’3CÓsb33‚Ós#"3Ócƒ23#RÓsr3"Óc“‚¢Ò#s"3CÓsb3#rÓc23CÓ#"33rÓ#r3CÓ“33‚Ó#B"332Ó#"33bÓ#b33BÓ#2"“cR#cRÓ#"CRÓb"C‚srcbS2C2ÂSsr"#s#Bsr#rs‚¢ÒÓSS""#"ÓScBÓSSB"ÓSc""#S‚Óss‚S’ÓSs’sÓcC’"3‚Ó“S"3rÓƒS3rÓ“2"3rÓ“sb3‚Ó“c3‚Ó“c‚"#ƒRÓC"3rÓ"3rÓƒB"#s’ÓcR#ƒBÓC’#s’ÓS‚"#ƒ’Óƒ#s’Ós"#ƒ"Ós‚"#“rÓƒB#“"Óƒ"#“RÓƒB"3‚ÓcB3rÓƒ"3"Ós""3ƒ"Ó“c23CBÓ#"3ƒ"ÓCB"3sBÓƒSr3ƒ"Ó“#23s’Óƒƒr"C"Ócc‚3ƒ’ÓƒBC"ÓsC"3ƒbÓSc2C"Óc3"3“bÓS“b"C"ÓC3"3“RÓS#2C"ÓCƒ"C"ÓC‚C"ÓC#‚C"ÓC#2"3ƒ2Ó3BC"Ó3s’3“bÓ3C"C"Ós3“2Ó#cBC"Ó##""C"ÓS‚C"ÓcbC"Óc2"332C’C"ÓƒB3ƒ"Ób"3r#“"#cR3‚“"#2"C"S#ƒ"3s"C"S#"#"S3r3’S33rS3r"S#BS3rS3¢"ÒÂfÆscGF„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢ÓC2Â•öÖƒ¢ƒBÂ†¢#rÂó¢&ÒS"Ó“b"“Ó"S’ÓcbsÓ3"3Cr#‚CRÓ#2#s"CR"3ƒBƒ3cCR3sBc2"3#BÓ33ƒBsb3cb"S"Ó“b#3RÓC#BÓsb¢Òc2Sr"3cbc“2#C‚Sƒ’3#rcCB"3ƒ"sr3s"s3srs‚"3ƒ2c“23ƒ2s‚3ƒ2s"3BSR3ƒ2c#3S’Sc""S23C2#S‚C3‚s’3“"Sb3c2SR3SSb3S’"c2SrcbCƒCC’¢Ò3B#3""Sc’#S‚c2s’r"“sSb"c’C"3CrC"CR#S#s"3‚"3ƒ"CC’3cCb3s"C3""3ƒ2C#3ƒ2C3’3ƒ2C#’"3B#3"3ƒ23C‚3S’#ƒ‚¢ÒÓSSr"#"ÓSƒÓScrÓSƒ"C2ÓSSr32ÓSƒCÓScr"crÓ3cRÓC‚’Ó3cB"CCRC#C2Ó#3‚CCRÓ#R"C33rCCR“"C3’#C’"CC3srC3b33C3’3SB"CCCbCC3ƒrCC3“r"CCC‚CCCCCC2"C#2SCbCCCcBC3"Sr"CCcSC3"Sƒ"C3‚c‚"CCcsRCCccCCccr"CCcƒ‚CCcƒCCcƒB"C#Rƒ‚CCs3C32ss""CC“’C3RƒCCCƒsb"3#rC’CC3"3sB""3RS‚3#S23BSb"#ƒrS"3S‚#“"Sb"#s’CR#ƒS#s’C‚"#“B#’#s’C#ƒ‚3b"3ƒ"“33CBsb3ƒ"#r"3#rsƒ’3ƒ"ƒsr3cBƒ3""#"S“‚##bcs"ƒbc""SS’"S“2Sc2¢"ÒÂfÆs#‡F…W¢²…öÖ–ã¢Â…öÖƒ¢#s’Â•öÖ–ã¢Óƒ#Â•öÖƒ¢Ss2Â†¢3“BÂó¢&ÒÓSS"#"ÓSc2ÓSS2"ÓSc"#S‚ÓssbS’ÓSsbsÓcC‚"3‚Ó“S3rÓƒS3‚Ó“"3rÓ“sR3‚Ó“S’3‚Ó“cb"#ƒRÓC3rÓ3rÓƒ2"#s’ÓcB#ƒBÓC‚#s’ÓSb"#ƒ’Ós’#s’Ós#ƒ"Ósb"#“rÓƒ"#“"Óƒ#“BÓƒ"3‚Óc"3rÓƒ"3"Óc’"3ƒ"Ó“c"3CBÓ#3ƒ"ÓC2"3sBÓƒSr3ƒ"Ó“#"3s’Óƒƒr"C"Ócc‚3ƒ’Óƒ"C"ÓsC"3ƒ2ÓSSBC"Óc#’3“bÓS“"C"Ó3“’3“bÓS2C"ÓCS""3ƒ"Ó#ƒBC"Ó3S’3“bÓ3#"C"Ó#R3“bÓ#3C"Óƒ"3ƒ2ÓBC"Óƒb3“bÓC’"C"33“b3RC"ƒ"3323C‚C"#B3ƒ"#ƒB"3rS“"#cRC3‚“"S2"C"ƒ‚ƒ"csCbs“2"#"ƒ#R3’ƒ‚3rƒ#R"ƒ‚Bƒ#Rƒ‚¢Ò#s3"3C3#‚#3R3Cs"33‚s23C“‚33‚ƒb"332ƒ33bsb33Bs’"“3Sr#cRsCR#sb"C‚Cc’cb3“2S2C3RÂSCc’"#s3#BCc’#r3sr¢Ò3Ócƒ"C‚ÓS#2#c"Óc3#’ÓS“2"SbÓ3ƒ2“"ÓCcRcbÓC#"C’Ó3C2SRÓ3sBS"Ó3S’ÂSÓ3C2"#sÓS#BÓ3C2#rÓC3""3CÓcƒ‚3#rÓSsR3CÓc3B"33rÓs3r3CÓsb33‚Ós#"3Ócƒ3#RÓsb3"Óc“r¢Ò332ÓCc"“Ó“"#cRÓ3s"CRÓ#s"C‚Ós2cbÓSBS2ÓÂC‚Ós2ÂSÓs2"#sÓ#3"#BÓs2#rÓc2"3CÓC’3#rÓ3R3CÓ3cB"33rÓCc‚3CÓC3R33‚ÓCS""332ÓCc33bÓCcR33BÓCcB¢Ò332Ó“""“ƒB#cRÓ"CRB"C‚#cR#S2cBÂC‚#ÂS#"#sC"#B##r’"3CÓCr3#rÓ3"3CÓ“""33rÓ“r3CÓcB33‚Óƒ"332Ó“"33bÓ“b33BÓ“B¢"ÒÂfÆs#‡F„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢ÓS“Â•öÖƒ¢ƒ2Â†¢3“BÂó¢&ÒÓƒ#‚"#"ÓƒSÓƒ3‚ÓƒS"C2Óƒ#‚32ÓƒSCÓƒC"crÓSƒcRÓcs‚’Óc3R"CCRÓ3#C2ÓS‚CCRÓ3“r"C33bCCRÓs’C3’Ó#""CC‚C3bcC3’ƒR"CC3rCCrCC#r"CCCrCCCCCCB"C#2#sRCC“2C3"#3b"CC3srC323C3‚3CB"CCCbCC3ƒrCC3“b"CCC‚CCCCCC2"C#2SCbCCCcBC3"Sr"CCcC’C3"Sƒ"C3‚cb"CCcsRCCcS‚CCccr"CCcƒrCCcƒCCcƒB"C#Rƒ‚CCs3C32ss""CC“’C3RƒCCCƒsb"3#rC’CC3"3sB""3BSb3#S23"Sb"#ƒrS"#“‚Sb#“"SR"#s’CR#ƒC’#s’C‚"#“B#’#s’C#ƒ‚3R"3ƒ"“33CBsb3ƒ"#r"3#rsƒ’3ƒ"ƒsr3cBƒ3""#"S“‚##bcs"ƒbc""SS’"S“2Sc"¢Ò3BÓ3r"SÓ##S‚Órs’ÓS2"“Ó"S‚Óc‚sÓ3""3Cr#‚CRÓ#2#s"CR"3ƒ"sb3cC23s"c"3ƒ2S3ƒ2cr3ƒ2c"3BÓ3r3ƒ2s’3S’’¢Ò3B#3""Sc’#S‚c2s’r"“sSbc’3‚"3CrC"CR#S#s"3r"3ƒ"CC’3cCb3s"C3""3ƒ2C#3ƒ2C3’3ƒ2C#’"3B#3"3ƒ23Cr3S’#ƒ‚¢Òc2Sr"3cbc“2#C‚Sƒ’3#rcC""3ƒ"sb3s"s3srs‚"3ƒ2c“23ƒ2s‚3ƒ2s"3BSR3ƒ"c#3S’Sc"S23C2#S‚C3bs’3“"Sb3c2SR3SSb3Sr"c2Srcb3“’ƒCC’¢ÒS"ÓCcr"“Ó3s"S’ÓC3RsÓC""3CrÓCCRÓ#“"#s"Ó##R"3ƒBÓƒ’3cÓ#R3sBÓ‚"3#BÓ33ƒ"Ó“B3cÓ#SR"S"ÓCcr#3RÓC#"ÓCCb¢"ÒÂ66–FVçFÄfÆC¢²…öÖ–ã¢Â…öÖƒ¢#2Â•öÖ–ã¢ÓsbÂ•öÖƒ¢CS2Â†¢c#’Âó¢&Ò#ƒ’B"s2##2#ƒs#Cb##2"S"s##2S’s’ÂS‚c3""3rcS"S‚cCBC’cS"Â#cS""c3"’cS"cCBÂrÓ#32"#rÓ#S2rÓ#CRbÓ#S2"3’Ó#S3Ó#S23bÓ#S""#bÓBCRÓ#C‚3‚Ó#""#“"s‚#sÓS"#“"’"#ƒ’B#“"“#“"¢Ò“S‚"C‚ÓƒR“3bƒBÓ3"C‚Óƒ2#BÓ#"sRÓcÂS"“‚"3BS2SRsbS2"“s2ƒbS2“B"“S‚“cb“c"¢"ÒÂ66–FVçFÄæGW&Ã¢²…öÖ–ã¢Â…öÖƒ¢sÂ•öÖ–ã¢Ó3#2Â•öÖƒ¢3#RÂ†¢cC‚Âó¢&Ò#3’#cB"##‚#c‚#3b#cb#3"#c‚"##"#cb##b#c‚##2#cbÂC#bÂCCc‚ÂCc‚ÂÓ#CR"#Ó#cBÓ#Sb’Ó#cB"#bÓ#cB#"Ó#cB#BÓ#cBÂ#rÓ#2Â#rÓCcRÂ#CbÓCcR"#Cb#C‚#CbÓ##b#Cb"#3’#cB#Cb#S2#C2#c¢ÒCÓCÂC“bÂ#rCBÂ#rÓ“B¢"ÒÂ66–FVçFÅ6†'¢²…öÖ–ã¢Â…öÖƒ¢#CBÂ•öÖ–ã¢Ó332Â•öÖƒ¢33BÂ†¢ccrÂó¢&Ò33bS"3Ss3CBS23Sc2Â3S#Sb"33#sb3S#c‚3C2#sb"3#‚#sb33#sb33#sbÂ#ƒ#cbÂ#ƒCƒÂ#CCƒÂ#C#S‚Â"#3"Â"C3RÂs"C3RÂs"##2Âb#""“"r##Âƒ’ÂRÂ‚"#ƒ‚“b’ƒ‚"#Bƒ‚#"ƒ‚#2ƒ‚Âs"“‚Âs"ÓCÂbÓS"ÓsrÓS2Óc2ÂÓ#SR"#Ó#sRÓ#cb’Ó#sR"#BÓ#sR#"Ó#sR#2Ó#sRÂs"Ó#cRÂs"ÓCƒÂ"ÓCƒÂ"Ó#SbÂ#CÓ#3Â#CÓC32Â#ƒÓC32Â#ƒÓ##"Â33bÓ#""3SÓ“"3CBÓ#3SÓ#Â3SÓr"33Óƒb3SÓ“R3C2Óƒb"3#‚Óƒb33Óƒb33ÓƒbÂ#ƒÓ“bÂ#ƒC¢Ò"rÂ#C3"Â#CÓRÂ"Ó3"¢"ÒÂ66–FVçFÄF÷V&ÆU6†'¢²…öÖ–ã¢Â…öÖƒ¢#sRÂ•öÖ–ã¢Ó3rÂ•öÖƒ¢3‚Â†¢#sRÂó¢&Ò3cs2Â3sbs2"3“b“B3ƒrs23“bƒ"Â3“bs’"3sb“’3“b“3ƒr“’Â#““’"#ss’#s’“’#s“Â#scÂ#s"Â#3Â“b3Â#B"Â#Bs’"R“’#B“r“’Â#“’"s’’“’“Â“B"#s2ƒ"’s2Â3Rs2Â3bs2Â“bs2Âcr2ÂcrÓÂ“bÓs2Â3bÓs2Â3RÓs2Â#Ós2"Ó“"’Ós2ÓƒÂÓsr"#Ó“rÓƒ’’Ó“rÂRÓ“r"#BÓsrrÓ“r#BÓƒ’Â#BÓÂ“bÓ3"Â#Ó3"Â#sÓÂ#sÓcÂ#sÓc2Â#sÓsr"#“Ó“r#sÓƒ’#s’Ó“rÂ3sbÓ“r"3“bÓsr3ƒrÓ“r3“bÓƒ’Â3“bÓ“""3sbÓs23“bÓƒ3ƒrÓs2Â3cÓs2Â3cÓs2Â3Ós2Â##‚ÓÂ##‚Â3s2¢"ÒÂ66–FVçFÄF÷V&ÆTfÆC¢²…öÖ–ã¢Â…öÖƒ¢3sÂ•öÖ–ã¢ÓsbÂ•öÖƒ¢CS2Â†¢c#’Âó¢&ÒS3R"CR##2S#2sCƒ‚##2"#“Bs3C2##23ƒÂ3c3""#s’cS"3cCB#“cS"Â#c"cS""#C"c3"#ScS"#C"cCBÂ#Cb“’"s2##2##‚#2#B##2"S"s##2S’s’ÂS‚c3""3rcS"S‚cCBC’cS"Â#cS""c3"’cS"cCBÂrÓ#32"#rÓ#S2rÓ#CRbÓ#S2"3’Ó#C’3Ó#S23bÓ#S"#bÓBCRÓ#Cb3‚Ó#""#C‚Óc’##bÓ"#3’Óƒ"Â#C’Ó#32"#c’Ó#S2#C’Ó#CR#S‚Ó#S2"#ƒÓ#C’#s"Ó#S2#s‚Ó#S"CS‚Ó"#ƒrÓ#Cb3ƒÓ#"S3Bs’S2ÓSS3B#"S3RS3B“"S32B¢Ò“S‚"C‚ÓƒR“3bƒBÓ3"C‚Óƒ2#BÓ#"sRÓcÂS"“‚"3BS2SRsbS2"“s2ƒbS2“B"“S‚“cb“c"¢ÒC3"S‚"3“ÓƒRC3"3bC#bÓ3"#ƒ’Óƒ23cbÓ#"3rÓcÂ#“B“‚"3sbS2#“r3‚S2"C3"s2C#‚S2C3"B"C3"S‚C3"cbC3"c"¢"ÒÂ66–FVçFÅ&Vç4ÆVgC¢²…öÖ–ã¢Â…öÖƒ¢sRÂ•öÖ–ã¢Ó#"Â•öÖƒ¢#’Â†¢C#Âó¢&Ò“‚Ó3R"BÓ3"Ó3B"Ó3B"‚Ó#“RrÓ3‚Ó#“‚"rÓ#ƒ’‚Ó#“B‚Ó#“""CrÓ#ƒ‚CÓc"r#ƒ‚C“RS‚“""‚#“"‚#ƒ’‚#“"B3‚#“Rr#“‚"“b33“’3""“#“‚“B3“"3"ƒb#“"sB"“Ó3ÓsBƒbÓ#“R"“‚Ó3R“"Ó3B“RÓ3R¢"ÒÂ66–FVçFÅ&Vç5&–v‡C¢²…öÖ–ã¢Â…öÖƒ¢sRÂ•öÖ–ã¢Ó#’Â•öÖƒ¢#"Â†¢C#Âó¢&Ò3R"B3"r3Bb3B"#“R3#“‚"#ƒ’#“B#“""c‚Ó#ƒ‚c‚c"Ó#ƒ‚c‚Ó“RSÓ“""Ó#“"Ó#ƒ’Ó#“"BÓ3Ó#“RÓ#“‚""Ó3rÓ3’Ó3""rÓ#“‚BÓ3bÓ3"‚#"Ó#“"‚ÓsB"r3‚sB#"#“R"3Rb3B23R¢"ÒÂ66–FVçFÅV'FW%FöæTfÆE7FV–ã¢²…öÖ–ã¢Â…öÖƒ¢“2Â•öÖ–ã¢ÓsbÂ•öÖƒ¢CS"Â†¢c#‚Âó¢&ÒƒB"rÓCRÓ#bcRÓR"#CRÓ#C’cbÓ#"#CRÓ#C’"#S2Ó#S2#C‚Ó#S#C’Ó#S2"#s"Ó#3R#cBÓ#S2#s"Ó#CRÂ#s‚c3""#S’cS#s‚cC"#c’cSÂ#C‚cS"##’c3"#3‚cS##’cC"Â#3"sB"#R#r##2ƒb“"#r"ƒBS2#rs2¢ÒC‚SB"#3""#"SB#3"R"#32r#3"“’#32"Â#3RÓs’"3BÓs"#rÓSbcÓ"“"S‚“‚Ór“"3b"“"sR“"c"“"c‚"C‚SB“"R“bSB¢"ÒÂ66–FVçFÅF‡&VUV'FW%FöæW4fÆE¦–ÖÖW&Öæã¢²…öÖ–ã¢Â…öÖƒ¢C#"Â•öÖ–ã¢ÓsbÂ•öÖƒ¢CS"Â†¢c#‚Âó¢&Òc‚ƒB"Cƒ"#rc‚s2SSB#r"3sbsBCb#r3ƒBƒbÂ3s’c3""3ccS3s’cC"3scSÂ3C‚cS"33c3"33‚cS33cC"Â33bÓ#3R"3SBÓ#S233bÓ#CR3CBÓ#S2"3c2Ó#C’3S’Ó#S23cÓ#S"SÓCR3c2Ó#C’CC"Ó#""c‚ƒBSC2ÓRc‚Ó#b¢ÒCS’SB"SbsRSSBSbR"SbS‚Sbc‚Sbc""CsBÓs"Sb3bSÓr"3s2Ós’CC‚ÓCÓSbÂ3sBr"3sb"3sB"3sb“’"CS’SB3sbR3“bSB¢ÒƒB"rÓCRÓ#bcRÓR"#CRÓ#C’cbÓ#"#CRÓ#C’"#S2Ó#S2#C‚Ó#S#C’Ó#S2"#s"Ó#3R#cBÓ#S2#s"Ó#CRÂ#s‚c3""#S’cS#s‚cC"#c’cSÂ#C‚cS"##’c3"#3‚cS##’cC"Â#3"sB"#R#r##2ƒb“"#r"ƒBS2#rs2¢ÒC‚SB"#3""#"SB#3"R"#32r#3"“’#32"Â#3RÓs’"3BÓs"#rÓSbcÓ"“"S‚“‚Ór“"3b"“"sR“"c"“"c‚"C‚SB“"R“bSB¢"ÒÂ66–FVçFÅV'FW%FöæU6†'7FV–ã¢²…öÖ–ã¢Â…öÖƒ¢ƒÂ•öÖ–ã¢Ó3bÂ•öÖƒ¢3#Â†¢c3bÂó¢&Ò#C2CB"#S’cB#S"CR#S’SbÂ#S’#C’"#3’#c’#S’#c#S#c’"#3R#c‚#3‚#c’#3b#c‚ÂS#SÂSCcÂ’CcÂ’#C"Âb##""#2r###"Â#"#“’‚’“’"#B“’#"“’#2“’Â’rÂ’Ó#ÂbÓC"ÓcrÓC2ÓSÂÓ#C2"#Ó#cBÓ#SR’Ó#cB"#BÓ#cB#"Ó#cB#2Ó#cBÂ’Ó#CbÂ’ÓCSRÂSÓCSRÂSÓ#3‚Â#C2Ó#’"#S’Ó“’#S"Ó#r#S’Ó#rÂ#S’ÓB"#3’Ó“R#S’Ó"#SÓ“R"#3RÓ“R#3‚Ó“R#3bÓ“RÂSÓ"ÂS#R¢"ÒÂ66–FVçFÅF‡&VUV'FW%FöæW56†'7FV–ã¢²…öÖ–ã¢Â…öÖƒ¢#“Â•öÖ–ã¢Ó3#‚Â•öÖƒ¢33’Â†¢ccrÂó¢&ÒCS‚"Cbs’C’cCbsÂCb#cB"3“r#ƒBCb#sRC’#ƒB"3“2#ƒB3“b#ƒB3“R#ƒBÂ3C‚#sBÂ3C‚Cƒ‚Â3‚Cƒ‚Â3‚#cRÂ##2#C‚Â##2CcRÂƒBCcRÂƒB#CÂ‚##RÂ‚CC"Âc’CC"Âc’#bÂb#B"ƒbr#2“BÂ""#ƒ"“’ƒ""#Bƒ"#"ƒ"#2ƒ"Âc’“"Âc’ÓCrÂbÓS‚"ÓsrrÓcÓc‚ÂÓ#c"#Ó#ƒÓ#s"’Ó#ƒ"#BÓ#ƒ#"Ó#ƒ#2Ó#ƒÂc’Ó#s"Âc’ÓCs"Â‚ÓCs"Â‚Ó#cBÂƒBÓ#C‚ÂƒBÓCSÂ##2ÓCSÂ##2Ó#CÂ3‚Ó##2Â3‚ÓC#bÂ3C‚ÓC#bÂ3C‚Ó#RÂCÓ#B"C‚ÓƒBC’Ó#2C‚Ó“2ÂC‚Ó“’"3“rÓs’C‚Óƒ‚C’Ós’"3“2Ós’3“bÓs’3“RÓs’Â3C‚Óƒ’Â3C‚C‚¢ÒƒBÓ#"Â‚Ó3‚Â‚“’ÂƒBR¢Ò##2#"Â3‚CÂ3‚Ó“‚Â##2ÓR¢"ÒÂ66–FVçFÄ'W—V´×V6VææV$fÆC¢²…öÖ–ã¢Â…öÖƒ¢#srÂ•öÖ–ã¢ÓsbÂ•öÖƒ¢CSBÂ†¢c3Âó¢&Ò3“bR"#s’##R3ƒrs23SB##R"S‚s#B##RcBs’Âc3rÂ33bC’Â33bCƒ"Âc3ƒÂcCƒ‚Â33bS“Â33bcSBÂc2SS"ÂcBc3B"CBcSBcBcCRSbcSBÂ#rcSB"rc3BRcSBrcCRÂ‚S#ÂCSbÂ3“2Â‚CSbÂ’3SÂ#ƒRÂ##"Â’#ƒrÂBÓ#3R"3BÓ#S2BÓ#Cb#"Ó#S2"CRÓ#S3‚Ó#S2CÓ#S""3#2ÓBCRÓ#S#C"Ó#B"3“’s’3srÓS"3“’#"3“bR3“’“"3“rB¢Ò#“rS‚"#SRÓƒR#“r3b#“Ó3"SBÓƒB#3Ó#"ƒÓc2ÂS‚“b"#CS2c’ƒS2"#“rs2#“"S2#“rB"#“rS‚#“rcb#“rc"¢"ÒÂ66–FVçFÄ'W—V´×V6VææV%6†'¢²…öÖ–ã¢Â…öÖƒ¢3C‚Â•öÖ–ã¢Ó33"Â•öÖƒ¢33BÂ†¢ccbÂó¢&ÒC“B#"Cƒ"#RC“#"CƒR#R"Cs‚#RCƒ#RCƒ#RÂ3SB“Â3SBC‚ÂC"cB"C#Rƒ2C’cbC#RsbÂC#R#c‚"C‚#ƒrC#R#s‚C‚#ƒr"C"#ƒRCb#ƒrC2#ƒRÂ3SB#s"Â3SBCƒÂ3rCƒÂ3r#c"Âƒb##bÂƒbC3bÂC‚C3bÂC‚#bÂƒ’#"sbƒ2ƒ"“’sb“Âsb“‚"ƒBƒBsb“"s’ƒb"“Rƒƒbƒ"“"ƒ"“’ƒ“bƒ“‚ƒÂC‚“BÂC‚3RÂBÓ"Ó#rÓ2Ó2ÂÓB"rÓ‚Ó’2ÓR"’Ó#"Ó#bÓ#""#2Ó##Ó#"#"Ó#ÂC‚Óƒ‚ÂC‚ÓCrÂƒ’Óc2"sbÓƒƒ"ÓcBsbÓs2ÂsbÓƒÂsbÓ#cR"“RÓ#ƒ"sbÓ#sRƒRÓ#ƒ""“’Ó#ƒ"“bÓ#ƒ"“‚Ó#ƒ"ÂC‚Ó#c’ÂC‚ÓCs‚ÂƒbÓCs‚ÂƒbÓ#S’Â3rÓ##RÂ3rÓC32Â3SBÓC32Â3SBÓ#RÂC"Ó“’"C#RÓƒC’Ó“rC#RÓƒ’ÂC#RÓ“R"C‚ÓƒC#RÓƒ’C#"ÓƒB"CbÓsbCRÓs’C’Ósb"C"Ós‚CRÓsbC2Ós‚Â3SBÓ“Â3SBÓ3"ÂCƒ‚B"S#"C“RbSBÂSr"C“B#S"C“‚‚¢Ò3r3‚Â3rƒÂƒbCRÂƒbB¢ÒƒbÓ3rÂƒbÓs‚Â3rÓC"Â3rÓ¢"ÒÂ66–FVçFÄ&¶—–TfÆC¢²…öÖ–ã¢Â…öÖƒ¢#srÂ•öÖ–ã¢ÓsbÂ•öÖƒ¢CSBÂ†¢c3Âó¢&Ò3“bR"#s’##R3ƒrs23SB##R"S‚s#B##RcBs’Âc3C‚Â33bCS"Â33bSbÂcC2ÂcBc3B"CBcSBcBcCRSbcSBÂ#rcSB"rc3BRcSBrcCRÂ’3ƒ"Â3‚Â#SRÂ’3‚ÂBÓ#3R"3BÓ#S2BÓ#Cb#"Ó#S2"CRÓ#S3‚Ó#S2C2Ó#S""3#2ÓBCRÓ#S#C"Ó#B"3“’s’3srÓS"3“’#"3“bR3“’“"3“rB¢Ò#“rS‚"#SRÓƒR#“r3b#“Ó3"SbÓƒB#3Ó#"ƒ2Óc2ÂS‚“b"#CS2c’ƒS2"#“rs2#“"S2#“rB"#“rS‚#“rcb#“rc"¢"ÒÂ66–FVçFÄ·V7V´×V6VææV%6†'¢²…öÖ–ã¢Â…öÖƒ¢3C‚Â•öÖ–ã¢Ó3bÂ•öÖƒ¢3‚Â†¢c3BÂó¢&ÒC“B#"Cƒ"#RC“#BCƒr#R"Cs‚#BCƒ#RCƒ#BÂ#c’c‚Â#c’#rÂC"cB"C#RƒC#crC#Rs2ÂC#R#cb"C‚#ƒ"C#R#s"C#"#s’"Cb#ƒRCR#ƒRC#ƒR"C"#ƒRCR#ƒRC2#ƒRÂ#c’#C’Â#c’CS‚Â#3"CS‚Â#3"#3’Âƒ’#"sbƒƒ“rsb“Âsb“‚"ƒBƒBsb“"s’ƒb"“Rs’ƒbƒ“s’"“’ƒ“bs’“‚ƒÂ#3"RÂ#3"S‚ÂBÓ2"Ó#bÓbÓ"ÂÓB"rÓ‚Ó’2ÓR"’Ó#"Ó#BÓ#""#2Ó#"#Ó#"#"Ó#"Â#3"ÓcbÂ#3"Ó#BÂƒ’Óc2"sbÓƒƒÓcbsbÓsÂsbÓ#cB"ƒBÓ#s’sbÓ#c’s’Ó#sb"“RÓ#ƒ"ƒbÓ#ƒ"“Ó#ƒ""“’Ó#ƒ"“bÓ#ƒ"“‚Ó#ƒ"Â#3"Ó#CbÂ#3"ÓCSRÂ#c’ÓCSRÂ#c’Ó#3bÂC"Ó“’"C#RÓƒC#Ó“bC#RÓƒ’ÂC#RÓ“R"C‚ÓƒC#RÓƒ’C#"ÓƒB"CbÓsbCRÓs‚CÓsb"C"Ós‚CRÓsbC2Ós‚Â#c’ÓBÂ#c’ÓSRÂCƒrB"S#"C“RrS2ÂSr"C“B#S"C“‚‚¢"ÒÂ'F–466VçD&÷fS¢²…öÖ–ã¢Â…öÖƒ¢3cÂ•öÖ–ã¢Â•öÖƒ¢#3RÂ†¢#3RÂó¢&Ò#b33r"#33‚#B33r#"33‚"3‚’33‚33Â#ƒR"B#cb#sbr#c’Â3#2sÂBs""S2rc’c"Â#"#’’"#b#"#BÂSRS"S#sS2S2S#c"SRƒ’S#s’S2ƒb¢"ÒÂ'F–466VçD&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢3cÂ•öÖ–ã¢Ó#3RÂ•öÖƒ¢Â†¢#3RÂó¢&Ò#bÓ"##BÓ#""Ó#’Ó’ÂÓS2"BÓs"Óc"rÓc’Â3#2Óc‚ÂBÓ#cb"Ó#ƒRrÓ#c’Ó#sbÂÓ3‚"#Ó33‚Ó33’Ó33‚"#bÓ33r#"Ó33‚#BÓ33rÂSRÓƒ’"S#Óc‚S2ÓƒbS#Ósr"SRÓSS#ÓcS2ÓS2¢"ÒÂ'F–5FVçWFô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢CbÂ†¢CbÂó¢&Ò#cb"Cb’cbS‚Â#"#’’ÂC3R"CSR#CCbCSR’ÂCSRCb"C3RcbCSRS‚CCbcb¢"ÒÂ'F–5FVçWFô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢3bÂ•öÖ–ã¢ÓCbÂ•öÖƒ¢Â†¢CbÂó¢&Ò#"Ó#’Ó’ÂÓCb"#ÓcbÓS‚’ÓcbÂC3RÓcb"CSRÓCbCCbÓcbCSRÓS‚ÂCSRÓ#"C3RCSRÓ’CCb¢"ÒÂ'F–57F66Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢s‚Â•öÖ–ã¢Â•öÖƒ¢s‚Â†¢s‚Âó¢&Òbb"“bb3’Óbs2Ób"“b“R‚3’‚s2"b“Rs2‚3’‚"bbÓbs2Ób3’¢"ÒÂ'F–57F66Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢s‚Â•öÖ–ã¢Ós‚Â•öÖƒ¢Â†¢s‚Âó¢&ÒbÓ“b"“bÓ“b3’Ó‚s2Ó‚"“bÓr‚Ós2‚Ó3’"bÓrs2b3’b"bÓ“bÓbÓ3’ÓbÓs2¢"ÒÂ'F–57F66F—76–Öô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢#rÂ•öÖ–ã¢Â•öÖƒ¢#C‚Â†¢#C‚Âó¢&Òc23Sr"S3S2SB3SrS3S2Â“’3"“"#“R“b#“r“R#“R"ƒR3ƒ’#“Rƒ‚#“rÂ3R3S2"#"3Sr3R3S233Sr"33‚23Sr3S"s2#"3#2s2#""“"sRbs‚"#"r’b"ƒ233‚#"ƒ23#2"c23Srƒ23Ss3Sr¢"ÒÂ'F–57F66F—76–Öô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢#rÂ•öÖ–ã¢Ó#C‚Â•öÖƒ¢Â†¢#C‚Âó¢&Ò#Ó3Sr"32Ó3S2#’Ó3Sr32Ó3S2ÂƒBÓ3"“Ó#“RƒbÓ#“rƒ‚Ó#“R"“‚Ó3“BÓ#“R“RÓ#“rÂC‚Ó3S2"cÓ3SrC‚Ó3S2S2Ó3Sr"ƒ2Ó33‚sÓ3Srƒ2Ó3S"’Ó#"ƒ2Ó3#2’Ó#""“‚ÓbR"s"Ó#"sbs2Ób"Ó33‚s"Ó#"Ó3#2"#Ó3SrÓ3S"Ó3Sr¢"ÒÂ'F–4Ö&6Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢#“bÂ•öÖ–ã¢Â•öÖƒ¢#S2Â†¢#S2Âó¢&Ò3bÂs2#3’Â#“‚"3r3B3ÂC‚"C#b#C’C#b’"C#R3C#b#2C#b#rÂ#33Sb"#23cB##b3c##"3c2"“b3Sb#r3cB“’3cÂ3¢"ÒÂ'F–4Ö&6Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢#“RÂ•öÖ–ã¢Ó#S2Â•öÖƒ¢Â†¢#S2Âó¢&Ò3“ÓÂ#S2Ó#3’Â#‚Ó"’#RÓBrÂ’"Ó#rÓ’"Ó3Ó#2Ó#rÂ“bÓ3Sb"#2Ó3cB#Ó3c#BÓ3c2"#3Ó3Sb#’Ó3cB##‚Ó3cÂC#RÓ3¢"ÒÂfW&ÖF&÷fS¢²…öÖ–ã¢Â…öÖƒ¢c#"Â•öÖ–ã¢Â•öÖƒ¢3c‚Â†¢3c‚Âó¢&Òss‚3sB"CC‚S3cC"S#S#2S3"#3sB3s2S3#SRS#"cRC’#“rC2"#’3rb’"c#cRc’CC2"CCR3s2#c‚3s"C3s2"CC‚3s2CCb3s2CCb3s2"CS3s2CC’3s2CC’3s2"s3B#cRCƒR3s2c#‚3s""ƒsb’ƒSRC2ƒ3R’"ƒ“bcRƒ“’ƒ“b3b"ss‚3sBƒ“bC2ƒC‚#“‚¢Ò3C‚“’"CC‚3C‚CR3“2"SCr“’S2SCrCR"CC‚“’SCrSBS2“’"3C‚“’3“2“’3C‚SB¢"ÒÂfW&ÖF&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢c#"Â•öÖ–ã¢Ó3c‚Â•öÖƒ¢Â†¢3c‚Âó¢&Òss‚Ó3sB"ƒ“bÓcRƒC‚Ó#“‚ƒ“bÓC2"ƒsbÓ’ƒ“bÓ3bƒ“Ó’"s3BÓ#cRƒ3RÓ’ƒSRÓC2"CSÓ3s2c#‚Ó3s"CƒRÓ3s2"CC‚Ó3s2CC’Ó3s2CC’Ó3s2"CCRÓ3s2CCbÓ3s2CCbÓ3s2"cÓ#cRCÓ3s2#c‚Ó3s""#Ó’CÓC2cÓ’"ÓcRbÓ’Ó3r"#Ó3sBÓC2C’Ó#“r"CC‚ÓS3#SRÓS#3s2ÓS3"ss‚Ó3sBS#2ÓS3cC"ÓS#¢Ò3C‚Ó“’"CC‚Ó“’3C‚ÓSB3“2Ó“’"SCrÓ“’S2Ó“’SCrÓSB"CC‚SCrÓCRS2"3C‚Ó“’3“23C‚ÓCR¢"ÒÂfW&ÖFÆöæt&÷fS¢²…öÖ–ã¢Â…öÖƒ¢c#2Â•öÖ–ã¢Â•öÖƒ¢3c‚Â†¢3c‚Âó¢&ÒCÂC3“’ÂƒS‚3“’ÂƒS‚Âƒ“rÂƒ“rS"ƒsrS3ƒ“rS#ƒƒ‚S3Â#S3"S’S3S#Â¢Ò3SC‚"CC’C’3S“B3“RC’"SCrC‚SBC’SCr“B"CC’#C‚SCr#2SB#C‚"3SC‚3“R#C‚3S#2¢"ÒÂfW&ÖFÆöæt&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢c#2Â•öÖ–ã¢Ó3c‚Â•öÖƒ¢Â†¢3c‚Âó¢&ÒÓS"#ÓS3ÓS#’ÓS3ÂƒsrÓS3"ƒ“rÓSƒƒ‚ÓS3ƒ“rÓS#Âƒ“rÂƒS‚ÂƒS‚Ó3“’ÂCÓ3“’ÂCÂ¢Ò3SÓC‚"CC’Ó#C‚3SÓ#23“RÓ#C‚"SCrÓC‚SBÓ#C‚SCrÓ#2"CC’ÓC’SCrÓ“BSBÓC’"3SÓC‚3“RÓC’3SÓ“B¢"ÒÂfW&ÖFfW'”Æöæt&÷fS¢²…öÖ–ã¢Â…öÖƒ¢ƒC"Â•öÖ–ã¢Â•öÖƒ¢SC’Â†¢SC’Âó¢&Ò#sbÂ#sb3“’Â“3b3“’Â“3bÂ“sbÂ“sbS"“SbS3“sbS#“c‚S3Â#SbS3"#3bS#CRS3#3bS#Â#3b¢ÒSrC‚"cbC’Sr“BSS"C’"sbC‚ccC’sb“B"cb#C‚sb#2cc#C‚"SrC‚SS"#C‚Sr#2¢ÒCÂCccÂs"ccÂs"Â#"Â#"ss""“"s“#"sƒ2#Bs“Â#s“"ss"’s“sƒ2Â¢"ÒÂfW&ÖFfW'”Æöæt&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢ƒC"Â•öÖ–ã¢ÓSC’Â•öÖƒ¢Â†¢SC’Âó¢&Ò#3bÓS"#SbÓS3#3bÓS##CRÓS3Â“SbÓS3"“sbÓS“c‚ÓS3“sbÓS#Â“sbÂ“3bÂ“3bÓ3“’Â#sbÓ3“’Â#sbÂ#3b¢ÒSrÓC‚"cbÓ#C‚SrÓ#2SS"Ó#C‚"sbÓC‚ccÓ#C‚sbÓ#2"cbÓC’sbÓ“BccÓC’"SrÓC‚SS"ÓC’SrÓ“B¢ÒÓss""#Ós“Ósƒ2’Ós“Â“"Ós“"#"Óss"#BÓs“#"Ósƒ2Â#"Âs"Âs"ÓccÂCÓccÂCÂ¢"ÒÂfW&ÖF6†÷'D&÷fS¢²…öÖ–ã¢Â…öÖƒ¢cC"Â•öÖ–ã¢Â•öÖƒ¢CSBÂ†¢CSBÂó¢&Ò3c2C‚"Cc"C’3c2“BC‚C’"Sc"C‚SrC’Sc"“B"Cc"#C‚Sc"#2Sr#C‚"3c2C‚C‚#C‚3c2#2¢ÒCsrcCR"CccSBCsBcC’CcrcSB"CCRcCRCSRcSBCC‚cC’ÂB3""#2#’#2"#’’Âƒ""“‚’ƒ‚“RBÂCcSBÂƒ#r’"ƒC"ƒ#’Bƒ3rÂ“B"“#B#“b“#B’"“#3"“#B#2“#"#’¢"ÒÂfW&ÖF6†÷'D&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢cC"Â•öÖ–ã¢ÓCSBÂ•öÖƒ¢Â†¢CSBÂó¢&Ò3c2ÓC‚"Cc"Ó#C‚3c2Ó#2C‚Ó#C‚"Sc"ÓC‚SrÓ#C‚Sc"Ó#2"Cc"ÓC’Sc"Ó“BSrÓC’"3c2ÓC‚C‚ÓC’3c2Ó“B¢Ò“#Ó3""“#BÓ#“#"Ó#’“#BÓ#2"“B“#BÓ’“bÂƒC""ƒ#rÓ’ƒ3rƒ#’ÓBÂCcÓSBÂ“‚Ó’"ƒ"“RÓBƒ‚Â#"Ó#’Ó’"BÓ3"Ó#22Ó#’ÂCCRÓcCR"CcÓcSBCC‚ÓcC’CSRÓcSB"CsrÓcCRCcrÓcSBCsBÓcC’¢"ÒÂ'&VF„Ö&´6öÖÖ¢²…öÖ–ã¢Â…öÖƒ¢“Â•öÖ–ã¢Â•öÖƒ¢3#Â†¢3#Âó¢&Òƒ""#sR#ƒR#R“"#sRƒ2"RCc"#sR3“b#"Cc""3SbCbCc"C2"R#Cb#“BS2#Cb"ƒ#S‚Sr#Cbsr#Sb"“"#cƒB#S’ƒ’#c"“’#S’“B#c“b#c"#2#CR#"#S‚#2#S2"C‚C2#2ƒ2Cr"¢"ÒÂ6W7W&¢²…öÖ–ã¢Â…öÖƒ¢3ƒÂ•öÖ–ã¢Â•öÖƒ¢C“Â†¢C“Âó¢&Ò#ƒRsb"#ƒRsb#ƒRsb#ƒRsb"#sc“b#s’sb#sBsÂ#""b#r"brrÂS"cRSbc"BÂ33BcƒB"33bc“33BcƒR33bcƒ‚"3#sb33bc“‚3#‚sb¢Ò#2#""#"b#2##"r"##‚#"r#’Â#c""#sb#c‚#sBBÂSCbcƒB"SCrc“SCrcƒRSCrcƒ‚"S3sbSCrc“‚SCsbÂC“rsb"Cƒ"c“bC“sbCƒRs¢"ÒÂ6W7W&7W'fVC¢²…öÖ–ã¢Â…öÖƒ¢3c‚Â•öÖ–ã¢Â•öÖƒ¢C“Â†¢C“Âó¢&Ò#c"sr"#CRc“2#S2sr#Cbs"#b#32c2sr3C‚"r#2#"b’b"3r#"#r2"3‚cƒr#S’3C3Bc""3‚c“3‚cƒ‚3‚cƒ‚"3sr3‚c“‚3sr¢ÒCsBsr"CS‚c“2CcRsrCS’s"#2#bCCbc23ƒ’3C‚"#"’#"#2#"#"##’#"’#’"#C2r#3R#C2"S3cƒrCs"3CSbc""S3c“S3cƒ‚S3cƒ‚"SBsrS3c“‚S#2sr¢"ÒÂ&W7DÖ†–Ö¢²…öÖ–ã¢Â…öÖƒ¢CSÂ•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&ÒS‚Ó3c"ƒÓ33‚sÓ3cƒÓ3SÂƒ33‚"S‚3cƒ3Ss3cÂ#"3c"33‚’3c3SÂÓ33‚"#"Ó3cÓ3S’Ó3c¢Òc#bÓ3c"cC‚Ó33‚c3‚Ó3ccC‚Ó3SÂcC‚33‚"c#b3ccC‚3Sc3‚3cÂC“3c"Cc‚33‚Csr3cCc‚3SÂCc‚Ó33‚"C“Ó3cCc‚Ó3SCsrÓ3c¢"ÒÂ&W7DF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢#RÂ•öÖ–ã¢ÓÂ•öÖƒ¢#c"Â†¢#s2Âó¢&ÒS‚Ób"ƒbsÓbƒÓbÂƒ3Sb"S‚3srƒ3crs3srÂ#"3sr"3Sb3sr3crÂb"#"ÓbÓbÓb¢"ÒÂ&W7Ev†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢Ó3Â•öÖƒ¢RÂ†¢3bÂó¢&Ò#r"Ó2’rÓÂÓc‚"#Óƒ’Óƒ’Óƒ’ÂCC‚Óƒ’"Cc‚Óc‚CS’Óƒ’Cc‚ÓƒÂCc‚Ó2"CC‚rCc‚ÓCS’r¢"ÒÂ&W7Ev†öÆTÆVvW$Æ–æS¢²…öÖ–ã¢Ó3’Â…öÖƒ¢CcBÂ•öÖ–ã¢Ó#"Â•öÖƒ¢BÂ†¢3bÂó¢&ÒCC’#Â’#ÂÓ##ÂÓ#Ó#ÂÓ#ÂÓSb"’ÓsbÓcrrÓsbÂCC’Ósb"Cc‚ÓSbCcÓsbCc‚ÓcrÂCc‚Ó#Âcc‚Ó#Âcc‚#¢"ÒÂ&W7D†Æc¢²…öÖ–ã¢Â…öÖƒ¢3#RÂ•öÖ–ã¢ÓBÂ•öÖƒ¢3"Â†¢3bÂó¢&ÒB"#ÓbÓbÓbÂCC‚Ób"Cc‚BCc‚ÓbCc‚ÓbÂCc‚s"CC‚“Cc‚“Cc‚“Â#“"s““¢"ÒÂ&W7D†ÆdÆVvW$Æ–æS¢²…öÖ–ã¢Ó3’Â…öÖƒ¢CcBÂ•öÖ–ã¢ÓBÂ•öÖƒ¢#"Â†¢3bÂó¢&Òcc‚#ÂCc‚#ÂCc‚Sb"CC’sbCc‚crCcsbÂ’sb"SbrsbcrÂ#ÂÓ##ÂÓ#Ó#Â’Ó#ÂCC’Ó#Âcc‚Ó#¢"ÒÂ&W7EV'FW#¢²…öÖ–ã¢Â…öÖƒ¢#3RÂ•öÖ–ã¢Ó33Â•öÖƒ¢CÂ†¢s3"Âó¢&Ò33Ó#3’"3#2Ó##’33Ó#3‚3#rÓ#3RÂSrÓ#B"SBÓbSbÓ#2SBÓ’"SrÓ2SBÓ"SbÓbÂ3B#’"3r##’3R##"3r##bÂ3r#C""3"#S23r#Cb3R#SÂc’Sc’"SRSsrc’Sc’c2Ssr"C2Ss2SSsrC‚Ssb"3bSS’3rSc’3bSc2"CSC23bSSCSC2ÂS3“2"SB3sbS23ƒ’SB3ƒ2"S3S’SB3sS23c2ÂB3r"#R23B#‚Â""b‚2BÂcrÓ“’"3Ó“RcÓ“‚C‚Ó“R"C’Ó#BrÓ“RsRÓ"Ó##’rÓS2Ó“2"bÓ#ƒRÓ#C’BÓ#c’"SBÓCc‚CbÓ33SBÓCc‚"sÓCsrSBÓCc‚cÓCsr"ƒÓCsBsBÓCsrsrÓCsr"“ÓCSbƒrÓCc‚“ÓCc""ƒbÓCCB“ÓCSƒrÓCCb"3RÓ3S2ƒÓC3b3RÓ3S2"#RÓ3r3RÓ3S2#RÓ332"SÓ#Cb#RÓ#ƒ‚3Ó#cR"#bÓ##2crÓ##’ƒrÓ##2"#S"Ó#3b##RÓ##2#CÓ##’Â3‚Ó#s""3#Ó#sR3‚Ó#s"3BÓ#sR"33BÓ#c‚3#RÓ#sR33Ó#sB"33‚Ó#SR33rÓ#c"33‚Ó#S’"33BÓ#C233‚Ó#S33rÓ#C‚¢"ÒÂ&W7C‡Fƒ¢²…öÖ–ã¢Â…öÖƒ¢#sbÂ•öÖ–ã¢Ó#SRÂ•öÖƒ¢#BÂ†¢CS’Âó¢&Ò3ƒB#“""3s’#“B3ƒ2#“"3ƒ#“B"3c#ƒ"3s#“B3c2#ƒ’"#CRC3SB#sB3ƒ’"ƒ"##b#r#2r"#bƒ“b3#bSB"B#ƒB#b#3‚c#ƒB"ƒCb#ƒB#3‚"cRƒR3r#r"CBc‚ƒbsRRc‚"#c’’ƒbc‚#3ƒ"3#Sr#ƒr#"3BCÂSbÓ3SbÂ“BÓ3crÂ3“b#c‚"3“r#sR3“r#c’3“r#s""3ƒB#“"3“r#ƒ"3“2#ƒ‚¢"ÒÂ&W7CgFƒ¢²…öÖ–ã¢Â…öÖƒ¢3CBÂ•öÖ–ã¢ÓSrÂ•öÖƒ¢#BÂ†¢sÂó¢&ÒC“B#c‚"C“R#sRC“R#sC“R#s""Cƒ"#“"C“R#ƒ"C“#ƒ’"CsR#“BCƒ#“BCsr#“B"CSb#ƒ"Ccr#“BCc#ƒ’"#ƒRRC#"#23cB3R"3ƒB3"3R3S‚"#2#ƒB3#C#S’#ƒB"BsrCR#ƒB#32"sƒBR3B3B“‚"#S"c’“rs"##Rc’"C#2cB3#Bs"3ƒ‚ÂC#2cBÂ3S’ÓcR"ƒ2Ó#CR33‚Ó3"#SbÓ##b"#rÓsb“’Ó##R#rÓ#""Ósb#rÓ‚S‚Ósb"Óƒ2CRÓsbÓ#R"c’Ó#sRÓ##b3"Ó#c""SÓ#ƒ’“bÓ#ƒr#Ó#ƒ’"3#Ó“B##"Ó#ƒr#s‚Ó#SÂsBÓs#Â#2Ós3¢"ÒÂ&W7C3&æC¢²…öÖ–ã¢Â…öÖƒ¢3“Â•öÖ–ã¢ÓSrÂ•öÖƒ¢CcÂ†¢“crÂó¢&Ò#rs"C‚s3C‚sC"cÂ3SBÓCb"ƒBÓ#C3#2Ó##c‚Ó#r"#BÓs#Ó###BÓ“r""Ósb#BÓBS‚Ósb"ÓsrCbÓsbÓ#"CÓ#ƒ‚Ó#S"c2Ó#ƒ‚"3#Óƒb#bÓ#ƒ‚#sbÓ#CbÂƒ’Ós#Â##‚Ós3ÂSc"c3‚"Sc2cCBSc2c3’Sc2cC""SC’ccSc2cS"SSrcS‚"SC2cc"SCrcc"SCBcc""S#BcC’S3Bcc"S#‚cSr"3cCƒrC“rSƒ’C3SB"3ƒ2SSb3s’S‚3ƒ2S3"#ƒ"cS"3ƒ2c33‚cS""s’SC’##bcS"s’c’"#C’CSs’SR#CcB"3C3’#c‚CCB#ƒ‚CC"33CC3rC3’3#2C3’"C“‚SCCCCRCS‚CƒRÂCC"3"#srC2#3‚3S3r"#“"ƒb#ƒ‚3‚#“"c"ƒ’#ƒ"#“"#C2#CR#ƒ""ƒ‚ƒ3"#ƒ"ƒ‚#3‚"#rsƒ‚"S2s¢"ÒÂ&W7CcGFƒ¢²…öÖ–ã¢Â…öÖƒ¢C#2Â•öÖ–ã¢ÓsS‚Â•öÖƒ¢CcBÂ†¢##"Âó¢&Ò#rÓƒ2Â#CbÓ“""c‚cCB#ƒ"Ó“’cRc3B"c’cC’c‚cCrc’cC‚"S“Rccrc’cS‚c2ccR"Sƒ’cc‚S“2cc‚S“"cc‚"Sc’cSBSsrcc‚SsRccB"CsBS#Sc2cCBS3Ss2"C"CƒrCSbSRC3RC“B"C3"SCbC#RS2C3"S#b"3#‚cC’C3"cb3ƒ"cC’"##bSCb#sRcC’##bc‚"3cC3‚##bCcR3C3‚"SC“"C’C3‚CsBCcR"SCbSCbS#rS‚S32S#bÂSCrSCrÂS3#2"3“’cC“3CS"#’"33r#R3ƒ"CB3c3""3SrƒB3SC23Sr3B"#S2#ƒ‚3Sr#3R3r#ƒ‚"Sƒr“#ƒ‚S#3b"#ƒRsbS3‚ƒ2sb"CsƒBC"sbCcRs2ÂC#2ÓCR"3#BÓ#BC2Óc’3sBÓS‚"#c"Ó#C3RÓ##"#ƒBÓ#32"#ƒÓƒ#sBÓ##2#ƒÓ#""srÓs‚#ƒÓCr#S‚Ós‚"sRÓƒ“‚Ós‚sRÓS2"#’Ó#ƒ’sRÓ#rƒ‚Ó#ƒ’"3“RÓƒ33Ó#ƒ’3ƒ’Ó“2Â3SÓ3“r"#C‚ÓScB33rÓCC’#ƒRÓS3"ƒbÓS“’##’ÓSƒ#rÓS“""#BÓSC“rÓSƒ2#BÓSc2""ÓC3‚#BÓSsBÓC3‚"ÓSC#’ÓC3‚ÓS"3"ÓcC‚ÓSs’#BÓcC‚"3#ÓSC#cbÓcC‚3RÓSS"¢"ÒÂ&W7C#‡Fƒ¢²…öÖ–ã¢ÓÂ…öÖƒ¢CsRÂ•öÖ–ã¢ÓsS’Â•öÖƒ¢srÂ†¢CsbÂó¢&Òcsr#‚"ccB3"cs"3ccr3""cCB‚cSB3"cC’#‚"SC’ƒƒbc3‚‚cR“3r"CƒrƒSS3ƒsSƒS‚"Sr“Sƒc‚Srƒ“"C2BSr“sCSbB"3“3SB3“s""C3Rƒ"3ƒ#’3sBƒ""SsbƒSrC“Bƒ"SC’ƒ#’"c#“c"ƒƒ2c‚ƒ“Âc#"“"ÂSsRcƒr"CsBS#bScbccBS#rSs2"C"C“CSbS‚C3RC“r"C3"SC’C#RSrC3"C“‚"3#‚cS"C3"S“’3“"cS""##bSS"#cRcS"##bc"3cCC##bS2#S‚CC"SCbSC’CƒrCCSCS3rÂC“‚3#"3“’cCƒ‚#“RCC’#r"33r#R3ƒC23S’3"3SbƒB3C‚C3SbS2"#S"#ƒr3Sb#r332#ƒr"SƒBs2#ƒrS#""#ƒBsbSSrc2sb"Cc’ƒ2CRsbCcBsÂC#RÓ32"3#2Ó#C"ÓƒR3cÓcb"#cÓ#3R3BÓ#b#ƒ"Ó##‚"#s’Ósb#s"Ó#’#s’Ó“’"srÓs"#s’Ó3r#C’Ós""sRÓsbBÓs"sRÓ3r"#rÓ#ƒBsRÓ#R“’Ó#ƒB"3“RÓsb3CÓ#ƒB3“ÓƒrÂ3CrÓC’"#C‚ÓScb33ÓCc#ƒ"ÓS32"ƒbÓc##’ÓSƒ"#rÓS“2"#BÓSC“rÓSƒ2#BÓScB""ÓC3‚#BÓSsBÓC3‚"ÓÓSC#’ÓC3‚ÓÓS2"3"ÓcC’ÓÓSƒ#BÓcC’"3‚ÓSCb#SbÓcC’3rÓScrÂ#bÓƒBÂ#CRÓ“2"cƒ2‚#ƒÓ“#cƒ““b"cƒBRcƒ2’cƒBB"csr#‚cƒB#cƒ2#B¢"ÒÂG–æÖ–5–æó¢²…öÖ–ã¢Ó“RÂ…öÖƒ¢3rÂ•öÖ–ã¢Óc2Â•öÖƒ¢#c2Â†¢C#bÂó¢&ÒƒbÓ#3RÂƒbÓ#bÂs‚Ó#bÂc#bÂcbb"##’Ó#’cbbƒÓb"#SbÓ3"#3‚Ó3"#C‚Ó3""CCRcb33bÓ3"CRC’"CSb#CbCSB“rCSb##2"3sB3s2CSb3C23“b3cr"3Sb3sb3c’3sB3c3sb"#C"3B33sb#cb33‚Â#3‚3Â#3R3R"SB3sr#3R3R#B3s"3‚3s’C‚3srCB3s’"##b“3s’C"3CbÂ#b#2"c233"#3"Cb#s‚""3#‚s"3Bƒ’3#R"‚3#‚B3#‚r3#‚"#3#R"3#‚r3#r"#r3B#R3##r3B"“B“"#r#c’#bÂÓC’Ó#bÂÓ3rÓ#bÂÓ3rÓ#3R¢Ò##br"#R’##2r#rr"ƒrƒ“2#rƒrS2"#Bƒƒr#R#2sr"#“r3r#r#3R#S’#“R"3#B3#R3r3#23R3#R"33b3#B3#‚3#R3323#R"3S33C3#23Cr3r"3Sb#s‚3SB3"3Sb#“"332c3Sb#3’3Cƒr"#C"#3BR#s‚3r"##br#3‚r#3r¢"ÒÂG–æÖ–4ÖW§¦ó¢²…öÖ–ã¢ÓrÂ…öÖƒ¢3sBÂ•öÖ–ã¢Ó"Â•öÖƒ¢#SÂ†¢#S2Âó¢&ÒCƒ‚c2"CcrC‚CƒSCsBC‚"CS’C’CcBC‚Cc"C‚"CC’cRCS"S"CC’S‚"Cc"CC’sbCSR“B"CsBSrCcB#CsS"C“"#ƒCƒ"ƒ2C“"#C""C“3C“"#ƒ‚C“"#“R"C3b3S’CƒB3CCcr3S’"3C3r3“’3S’3S’33Â33r3Â33B3‚"#s"3S’33B3‚33S’"sr3#3"3S’#"3C2Âs23BÂs3"r3cs3S23S2"“b3c’3c"3c"#’3#‚c3c3’3C"Ó#S"#3‚#ƒBÂ"#C"c‚3‚"#C3b3‚"sR3rs3‚s"3‚"ƒb#“RƒB3Bƒb3r"S’“Bƒb#sRsR#C"#S’“2b32"2rb"2Br"BÓb’ÓÂ3bÓ"“ÓS‚ÓƒbÓ"r#"“BÓÓ"#r“’BS2#s’"#3R33"#ƒb3"#C23R#3‚3#C"3‚"#C‚#ƒ’#Cb3"#C‚#“r"#bc#C‚#cR#32#’"s2#"“Bƒ’s2#""s2bs2#s2’"sb2s2"s2b"ƒrÓs’ƒ2ÓÂ#cbÓ"#ƒ"b#s"Ó#s’"#ƒB#b#ƒ"r#ƒB#""3“"3"3"##‚3S’#ƒ‚"3“b3B3“23"3“R3BÂ3“r3B"C3"3“’3B3“’3""C‚#ƒ’C23C‚#“r"3c’CC‚#sR3“’#r"3SbsR3cr3Sb“R"3s#23SbSR3c3r"C#‚Ó23ƒ"bC‚Ó2"S3b“’C“"Ó2SrC’"S3’‚S3r"S3rRÂSB#"Cƒ‚c2SB#C“‚ƒ¢"ÒÂG–æÖ–4f÷'FS¢²…öÖ–ã¢Ó3rÂ…öÖƒ¢33BÂ•öÖ–ã¢Ó“2Â•öÖƒ¢C#Â†¢cBÂó¢&ÒÓ#"Óƒb"Ó“rÓcÓcÓƒbÓ“rÓ#""ÓƒÓ#s‚Ó“rÓ#3bÓCrÓ#s‚"3RÓ##‚Ó3RÓ#s‚ÓÓ#cB"#"s2“‚ÓcBcrS"#3‚#“r#R#’##‚#cBÂ#3‚3Â3C3"3Sb3B3S33Sb3RÂ3Sb3Cb"3C3c3Sb3SB3S3cÂ#Sb3cÂ#Sb3cB"33SSB#“rS3‚S3r"3S’Scb3CSc23SScb"3cbScB3cScb3cBScB"3ƒSS23s2Sc23srSS’"3ƒ"SCb3ƒ"SS3ƒ"SC’"3s2S#‚3ƒ"S3’3s’S3"3SCs‚3S’Sr3SC“‚"3SBCS‚3SCs3S2CcR"3ƒBC#b3S’CCR3sC3""CC#3“C#2CC#"CCRC3C#C#C3"C#2"Cs‚Cs"CS’C3‚CsBCSb"CƒC“rCƒCƒCƒCƒ‚"CcrSSCƒSBCsrS32"3sbcRCSRSs"C#"S“‚"3Scb3c’cb3ccb"##RSS23rcb#s"S“R"#"3c2ƒrS#SBCSbÂ#"3cÂ23c"Ó3CbB3cÓ3SBÂÓ3B"23Ó3RB3Â"3Â"#“B"cbCƒ‚#3bsbƒr"#BÓ3RSRƒbC"3"Â#ÓS""ÓS2Ó#3RÓÓsÓ’Ó#""Ós‚Ó#C"ÓcÓ#3’Óc’Ó#C""Ó“‚Ó#3RÓƒRÓ#C"Ó“"Ó#3’"ÓRÓ##"Ó"Ó#3"ÓRÓ##‚"ÓRÓ#’ÓRÓ##ÓRÓ##"Ó“BÓ#BÓBÓ#2ÓÓ#r"ÓS‚ÓCBÓcbÓ“2ÓS‚Ócr"Ó#"ÓƒbÓS‚Ó#BÓsÓƒb¢"ÒÂG–æÖ–5&–æf÷'¦æFó¢²…öÖ–ã¢Ó"Â…öÖƒ¢#3Â•öÖ–ã¢Â•öÖƒ¢#SBÂ†¢#SBÂó¢&Ò#s"3cB"#3C#3’3cB#"3C‚"c‚3ƒr332sr3#ÂcB3B"’3c2cB3BS3S2"ƒ‚3cb"3cB“R3cb"#"33S"3cb3"3C2"Ór#SR23#Ór#ƒrÂB#C2"c3#B#C2#’3#"c‚3#c23#cR3#"s‚#“rsR3rs‚3‚"C’ƒs‚#s"cR#3Â#2"r#"#"2B2r"BbÂ“B"’r“’r"#r’’#2"#’3"C#3ƒb#s’"##R3#R3‚##3"##’3##b3##‚3"#323B#323r#323R"#323#323"#323"#b#c‚###“#b#s’"##R#C2#b#S’#’#C’"#c"##’#3R#3"#C’##’"3B#C"#s’##’#“R#3R"333‚3##SR33#sR"#s"3cB333C3B3cB¢"ÒÂG–æÖ–56f÷'¦æFó¢²…öÖ–ã¢Â…öÖƒ¢#‚Â•öÖ–ã¢ÓRÂ•öÖƒ¢#c2Â†¢#c‚Âó¢&Ò#C"3#‚"#r#ƒ’##"3r#r3"#S‚#C’#r#sB#3#C’"#“‚#ƒB#ƒR#C’#“R#c’"3#“R3#ƒr3#“"ƒ’3s’33#‚#s"3s’"C’#S’“"3s’C’3R"“’s2C’##’S’“b"cB3rrc2CS"“Bƒ‚ƒ’#"“B""#B#B“Bs2sr#B"s"Cbƒ"#Bs"3’"s2C’s"C‚s"C’"“b“bs‚S"“bc""SS“b3Bs"S"“#’S3B"#BÓr#bC’Ór"#ƒ"“’Ór#ƒ"#B"s#3’#ƒ"“r#r#’"#‚#“"3R#S’#‚#c‚"“23Cr#‚3rSb3Cr"#C"3#‚#33Cr#C"3#‚¢"ÒÂG–æÖ–5£¢²…öÖ–ã¢ÓC"Â…öÖƒ¢#3’Â•öÖ–ã¢ÓÂ•öÖƒ¢#S‚Â†¢#S’Âó¢&Ò##’#“""#3R#ƒ‚#3"#“"#32#“"#3b#ƒB#3b#ƒR#3b#ƒR"#32#s‚#3b#ƒ#3R#s’"ÓC"SR#3"#sbÓBƒR"Óc#BÓSbC2Óc32"ÓSBÓc"ÓSB"Ó3RÓCRÓC"’#’ÓB’"Sc’rC2#bc’"ƒ’3RsRc’ƒS"sÓB3rÓ"#C2#"“rÓ##2b"3BCr#ƒ‚Sb3B‚"#cB“b3Bsb#“B“b"##bSb#3’“b##bsB"#Sr##b#‚#C’#""#S‚#SB#S"#C2s’#S“‚#C’ƒ‚"#"Sb#3bc‚##2Sb"#"S’#’Sb#BSb"c2“"“Bc2ƒbsR"‚#"C’B#"R#RR#BR#B"r#‚R#rr#‚"3"3Br#‚3"#“B"3C3C3#B3R33b3#r"3CB3Cr3C23C3CB3CbÂ3CB3Sb"3323c’3C23cr33b3c’Â333c’Â#c"3c2"#r3c#CR3c#33c"Sb3cb“23csB3c2"B3s"Cr3cr#R3s""r3s3s"‚3s"ƒb3CB“‚3crƒ’3c"3r##"s"#cRC"#3""3r#’3r##3r##"S#r3r#2C2#rÂcb#r"ƒ##RsR#rsb#R"‚#“ƒR#3RR#ƒR"‚#“r#“r"#“r"cr#ƒ’#R#“RCB#“"ƒ#ƒ’s#ƒ’sr#ƒ’"##’#“"#"#ƒ’##"#“¢"ÒÂ÷&æÖVçEG&–ÆÃ¢²…öÖ–ã¢Ó"Â…öÖƒ¢3ƒ2Â•öÖ–ã¢Â•öÖƒ¢3ƒ2Â†¢3ƒ2Âó¢&ÒCcB3“b"3sb3S’C‚3“b3sb3S’Â3cB3s"3Cb3sr3Sr3sr3Cb3srÂ“r3srÂ#CbS#‚"#CbS3#CbS3#CbS3"##bSS"#CbSC#3bSS"Â#2SS""“’SCB#’SS"#"SCr"#BCƒ"“bSC3Cƒr"rCs‚Cs‚rCs"ƒB3srrCs"C3Â23sr"Ór3cÓB3srÓr3cÂÓr3C"23#BÓr3#R23#BÂcb3#B"ƒR3R##’r"“"bC‚"ƒb3R3rƒb3R"“B2ƒb3R“#B"#"“’#"Â#sb"#“‚b#“R#“‚bÂ#“‚C2"3#Cr#“‚sR3#CrÂ3ƒ"#ƒB"C"3#R3ƒ"#ƒB3“b3"CCb3CC#R33bC3‚3C"CS"3CCC‚3CCS3C"C#‚#ƒ‚C3"3#rC#‚3R"CƒR#32C#‚#sCCb#32"SS"3‚S3B#32SS"#cB"CcB3“bSS"3S2S#3“b¢Ò##"C2"Crs‚#Bss‚"3rs’C2s‚Cs‚"#R#RƒR#“’"3r“#C‚3r“Âƒ3#BÂ#sR3#B"#s’3##s’3#B#s’3#"##"C2#s’3##3Rƒr¢"ÒÂ÷&æÖVçEGW&ã¢²…öÖ–ã¢Â…öÖƒ¢CSbÂ•öÖ–ã¢Â•öÖƒ¢#3"Â†¢#3"Âó¢&ÒS#r33B"CC"#c’Cƒ‚33BCC"3""S#BCC"##‚Cc‚#B"Ss##bS32#BSC##b"c2cBS“‚##bc2#BÂc2c2"SS“‚c2#rSƒb“‚"CC‚C2S‚“‚CƒR’Â3#‚#SRÂ#“‚#ƒB"sB33B#c"3r##233B"s“"33B#s‚"3c‚S‚"#RcRs#R#""Sb3#Rrƒ’3"ƒb‚#B3r‚"C2sS’‚C23ÂC2s"‚#3bC2#rs"#3b"#’“"S#3bs##RÂ3#‚s’Â3cS"Cƒ"3“brC32"cSrcBScBcSrSb"S#r33BcSr#cbc33B¢"ÒÂ÷&æÖVçEGW&å6Æ6ƒ¢²…öÖ–ã¢Â…öÖƒ¢CSbÂ•öÖ–ã¢ÓƒÂ•öÖƒ¢32Â†¢3“2Âó¢&ÒS#r33B"CC"#c’Cƒ‚33BCC"3""S#BCC"##‚Cc‚#B"Ss##bS32#BSC##b"c2cBS“‚##bc2#BÂc2c2"SS“‚c2#rSƒb“‚"CC‚C2S‚“‚CƒR’Â3SB#3Â3SBC3"33bCS3SBCC"3CrCSÂ3#2CS"3"C33CS3"CC"Â3"#s’Â#“‚#ƒB"sB33B#c"3r##233B"s“"33B#s‚"3c‚S‚"#RcRs#R#""Sb3#Rrƒ’3"ƒb‚#B3r‚"C2sS’‚C23ÂC2s"‚#3bC2#rs"#3b"#’“"S#3bs##RÂ3"BÂ3"Ó“b"3#2ÓR3"Ó‚3ÓRÂ33bÓR"3SBÓ“b3CrÓR3SBÓ‚Â3SBSRÂ3cS"Cƒ"3“brC32"cSrcBScBcSrSb"S#r33BcSr#cbc33B¢"ÒÂ÷&æÖVçDÖ÷&FVçC¢²…öÖ–ã¢Â…öÖƒ¢Cs2Â•öÖ–ã¢ÓsrÂ•öÖƒ¢3bÂ†¢3“2Âó¢&ÒcCr3"ÂSc"cbÂCCb3Cr"C#’3SrCCB3S2C3R3Sr"C23CrC#23SrCb3S2Â3c2#c"Â3c2C3R"3C2CSR3c2CCb3SBCSRÂ33CSR"3C3R3#CSR3CCbÂ3s2Â3sÂ#23Cr"ƒb3Sr#3S2“"3Sr"c‚3Crƒ3Srs3S2Âc’Â3RC‚Â#ƒ’Â##b"#C2##’B#3‚"#c#C’#S‚BÂ3“RÂ3Ó“"33Ó3Ó"3#ÓÂ3C2Ó"3c2Ó“3SBÓ3c2Ó"Â3c2ƒBÂ3cbƒ’ÂCs‚"C“RCƒBC“"S2SSBÂcƒ#ƒ¢"ÒÂ÷&æÖVçE6†÷'EG&–ÆÃ¢²…öÖ–ã¢Â…öÖƒ¢Cs2Â•öÖ–ã¢Â•öÖƒ¢#C‚Â†¢#C‚Âó¢&ÒcCr3"ÂSc"cbÂCCb3Cr"C33SrCCB3S2C3b3Sr"C23CrC#R3SrCb3S2Â3sÂ#23Cr"ƒb3Sr#3S2“"3Sr"c‚3Crƒ3Srs23S2Âc’Â3RC‚Â#ƒ’Â##b"#C2##’B#3‚"#c#C’#S‚BÂ3cbƒ’ÂCs‚’"C“RCƒ2C“"S2SSBÂcƒ#ƒ¢"ÒÂ÷&æÖVçEG&VÖ&ÆVÖVçC¢²…öÖ–ã¢Â…öÖƒ¢cSBÂ•öÖ–ã¢Â•öÖƒ¢#C‚Â†¢#C‚Âó¢&Ò“r3"Âƒ#"cbÂs‚3C‚"c“3SrsB3SBs3Sr"csB3CrcƒR3Srcsr3S2ÂcC‚3"ÂSc2cbÂCC’3C‚"C3"3SrCCb3SBC3‚3Sr"CR3CrC#b3SrC‚3S2ÂCR3CbÂ3sÂ#23C‚"ƒb3Sr#3SB“"3Sr"c‚3C‚sr3Srs3SBÂc‚3CrÂc’Â3RC‚Â#“Â##b"#C2##’B#3‚Â#CR"#c#S#S‚BÂ3crƒ’ÂCƒ"C“rCƒ"BC“"S2S2SBÂc#R“"Âs3’"sSbsC"BsS"ss"sc"sc’BÂ“C"#ƒ"¢"ÒÂ÷&æÖVçE&V6ö×övuG&–ÆÃ¢²…öÖ–ã¢Â…öÖƒ¢cƒÂ•öÖ–ã¢Â•öÖƒ¢3ƒ‚Â†¢3ƒ‚Âó¢&ÒƒcsÂsCb3S2"s#’3csC23S’s3r3c"s23Ss#23csb3SrÂcƒR3rÂcsÂCƒr3S2"Cƒ3S’CƒR3SbCƒB3Sr"Cc’3cCs‚3cCs"3c"CS"3SCcB3cCSR3SrÂ3C‚sbÂ#C3S2"##23c#3‚3S’##’3c"#b3S2#R3c#’3S’ÂCsbÂCSC"#SS’3’SS"3SS’"SCSS’SS"Â#b"’b’B"#b##B"C‚23RC2bÂs"S"ÂSr“BÂ#cRB"#ƒ"B#c‚’#sbB"#“‚B#ƒ‚B#“R’ÂCR“2ÂSrB"S3BBS#’S#‚B"SSBSCBSCr’ÂccB“bÂssbB"s“2Bss’’sƒ‚B"ƒBs“’Bƒ‚’Â“s’#ƒrÂ“CR3r¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄDævÆV&W'C¢²…öÖ–ã¢Â…öÖƒ¢cc"Â•öÖ–ã¢ÓS‚Â•öÖƒ¢#C‚Â†¢CbÂó¢&Òƒ3BcbÂs#3C‚"sB3Srsr3SBs23Sr"cƒr3C‚c“r3Src“3S2Âcc3"Âcc3"ÂSsRcbÂCc3C‚"CSR3SBCS’3SCSb3S2"CCB3SrCS"3SbCC‚3Sr"C#‚3CrC3‚3SrC33S2Â3#2sÂ#R3Cr"#23S#R3C‚#R3S"#23S#23S#23SÂ#23SÂ#"3SÂ#"3S2Â#3S2Â#3S2Â#’3SB"#r3SB#’3SB#r3SB"“r3Sr#b3Sb#3Sr"“r3Sr“r3Sr“r3Sr"“B3Sr“b3Sr“b3Sr"ƒ3Crƒr3Srƒ23S2Âƒ3CbÂc’cB"ÓS#2ƒ‚r"C’Ó#’Ó‚bÓc2"cbÓ##‚S"Ó##2S’Ó##‚"sbÓ##Rc’Ó##‚s2Ó##b"ƒbÓ#rƒ"Ó##"ƒbÓ#R"ƒBÓ“rƒbÓ#BƒRÓ#"CÓS"SRÓSCÓ""BC2Cc"s2Â3“Â#3’"#Sb#C"B#C’Â#Sb"#s"#c"#c’BÂ3s’ƒ’ÂC“"S‚C“BBS2"S‚S‚S‚ÂS‚"S#bSBS#BÂc3‚“"ÂsS"sc‚sSRBsc"Âsc‚"sƒRss2sƒ"BÂsƒRÂ“S2#ƒ"Â“’3"¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄ&6ƒ¢²…öÖ–ã¢Â…öÖƒ¢cc"Â•öÖ–ã¢ÓS‚Â•öÖƒ¢3#Â†¢Cs’Âó¢&Òƒ3BcbÂs#3C‚"sB3Srsb3SBs23Sr"cƒr3C‚c“‚3Src“3SBÂcc3BÂcc3"Âc3"#S’Âc3"CC""c"Cc"c3"CSBc#BCc"ÂS“’Cc""Ss’CC"Sƒ‚Cc"Ss’CSBÂSs’s2ÂSsRcbÂCc3C‚"CSR3SbCS’3SCS‚3SB"CCR3S’CS"3SrCC‚3S’"C#‚3C‚C3’3S’C33SBÂ3#2sÂ#R3Cr"#23S#R3C‚#23SÂ#23SÂ#"3S2Â#3S2Â#3SBÂ#r3SB"“r3Sr#B3Sb#3Sr"ƒ3C‚ƒ’3Srƒ23SBÂs’3CbÂc’cB"ÓC’#2ƒ‚’"C’Ó#rÓrrÓc2"cbÓ##‚S"Ó##2cÓ##‚"sbÓ##Rc’Ó##‚s2Ó##b"ƒbÓ#rƒ"Ó##"ƒbÓ#2"ƒBÓ“rƒbÓ#BƒRÓ#"C"ÓSSbÓC‚C"Ó"BCBC""c"sRÂ3“Â#3’"#Sb#C"B#S"#sB#c"#sBÂ3s’“ÂC“"S‚C“BBS2"S#bSBS#2BÂSs’“‚ÂSs’ÓƒB"S“’ÓBSs’Ó“RSƒ‚ÓBÂc"ÓB"c3"ÓƒBc#BÓBc3"Ó“RÂc3"ƒ2Âc3‚“"ÂsS"sc‚sS2Bsc""sƒRss2sƒ"BÂ“S2#ƒ"Â“’3"¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÅ7Vff—„FæG&–WS¢²…öÖ–ã¢Â…öÖƒ¢cc"Â•öÖ–ã¢Â•öÖƒ¢CbÂ†¢CbÂó¢&Ò“BSsR"ƒƒrSƒR“Sƒƒ“2SƒR"ƒsrSƒ"ƒƒBSƒRƒƒSƒ2"ƒcrScBƒsSs’ƒcrSs"ƒsSSBƒcrSc"ƒc‚SSr"“"C‚ƒ“rSR“"CS‚"ƒS#2“"3Cbƒ“#ƒ"Âƒ#"crÂsB3C‚"c“r3Srs3SBs23Sr"cƒ3C‚c“3Srcƒ23SBÂSsRc‚ÂCc"3C‚"CCR3SrCS’3SBCS3Sr"C#‚3C‚C3’3SrC33SBÂ3RcrÂ#23C‚"ƒb3Sr#3SB“"3Sr"c‚3C‚ƒ3Srs3SBÂsbÂ3RSRÂ#“"Â#32"#C’#3‚B#C"#cb#SR#cBBÂ#“BSRÂ3s’“"ÂC“"’"C“‚2C“BbC“RB"S‚SSR"S#bSBS#2BÂc3ƒbÂs3r2"sCb2s3’sC2B"sSbsC’sS2"ss2’sc"ss2ÂƒƒB“2"“S2Cb“3#c’“S233‚"“BSsR“S2CcB“3bS#¢"ÒÂ÷&æÖVçE&V6ö×F÷V&ÆT6FVæ6UWW%&Vf—ƒ¢²…öÖ–ã¢Â…öÖƒ¢ƒSrÂ•öÖ–ã¢Â•öÖƒ¢#C‚Â†¢#C‚Âó¢&Ò3ƒ2C"C2ƒ’3“’cbC"ƒr"S#C#2sSbb"S3rS#2BS3"SSBSC2SSB"ccƒ’SSrbcC’s"ss"css2scb’"s“ss‚sƒR"ƒbs“bƒ"B"“’“"ƒ’b“rsBÂ3"C‚3RBC2ÂC‚"cbSBc2BÂcbÂ#3B#ƒ"Â#3"ÂRcbÂ"3C‚"“ƒR3Sr““‚3SB““B3Sr"“c‚3C‚“s‚3Sr“s3S2ÂƒSRcb"sC"3C‚ƒCRƒ2sCb3C"s#b3Srs3r3SBs3"3Sr"s‚3C‚s’3Srs3SB"c2ssB3Cc2ƒ’"C“R3C‚S“2ƒ’C“‚3C2"Cs‚3SrC“"3S2Cƒr3Sr"Cc3C‚Cc’3SrCcB3S2"3Srs2CS’3Cb3“2#3R"#2s’3##ƒBs’"cbsbC2s’“R""C#s’C2##‚C#sR"#3C#“33"#s‚’3#ƒ’"#’c#sb2#’"#23’cRƒ33’"3ƒ2C#“r3’3Cbs2¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÄÆ÷vW%7Vff—ƒ¢²…öÖ–ã¢Â…öÖƒ¢ScRÂ•öÖ–ã¢ÓsÂ•öÖƒ¢#C’Â†¢C#Âó¢&Ò3Crc‚Â#3R3C‚"#r3S’#33SB##b3S’"#3C‚#’3S’#23S2"23“r3CBb3R"##b#B"#"’"3r’#r3R2ÂS“""#cRcsB#c"2"#ƒ#c‚b#s""#“‚#ƒ’#“R2ÂC2ƒbÂS"S#‚SbBS#"SCbS3rSCBÂc“‚#cR"ssR#"sCB#"ssR""sÓ#RssRÓcsS"ÓCB"c“bÓ##bc“rÓ#’c“bÓ##""sBÓ#C2c“bÓ#3"sÓ#3’"srÓ#Cbs‚Ó#Cbs2Ó#Cb"s32Ó#3’s#2Ó#Cbs#’Ó#C2"ƒB#sƒ’ÓcƒBÓc’"s3"ƒB3"ss2#C""c“b3#sr3rs3#"cƒ3c“3#cƒB3‚"S“Rc‚cs#“rc"ƒÂCƒ‚3C‚"Cs3S’CƒB3SBCs‚3S’"CSB3C‚CcB3S’CSb3S2"3Crc‚CC’3C23Srƒb¢"ÒÂ'&74×WFT6Æ÷6VC¢²…öÖ–ã¢Â…öÖƒ¢3"Â•öÖ–ã¢Â•öÖƒ¢3"Â†¢3"Âó¢&Ò#"#Sb"##Rr#Sb#C"#"“2#’r“2Â“2“2Â“2#""##R“2r#’"#Sb#"#C#SbrÂ#Sb“2ÂC#‚“2"CC’##RCC"“2CC’#’"C#‚#SbCC’#CCC"#SbÂ#Sb#SbÂ#SbC#‚"##RCC’#SbCC"#CCC’"“2C#‚#’CC’“2CC"Â“2#Sb¢"ÒÂ'&74×WFT÷Vã¢²…öÖ–ã¢Â…öÖƒ¢#ƒÂ•öÖ–ã¢Â•öÖƒ¢#ƒÂ†¢#ƒÂó¢&Ò#"C2"#"“C23""#"““"C2#"3"C2“"#"C2C23"3"C2¢Ò#"C"C#""CC""#"3c2C#“"3c2"3c2#"#“3c23c2#“"#"C3c2"#“C¢"ÒÂ7G&–æw4F÷vä&÷s¢²…öÖ–ã¢Â…öÖƒ¢3RÂ•öÖ–ã¢Â•öÖƒ¢#“2Â†¢#“2Âó¢&ÒCÂC#“ÂC2#“ÂC2ÂCSBÂCSBC""C32C#"CSBC2CCRC#"Â#C#""C"’C#"C"Â¢"ÒÂ7G&–æw5W&÷s¢²…öÖ–ã¢Â…öÖƒ¢#c"Â•öÖ–ã¢Â•öÖƒ¢3C2Â†¢3C2Âó¢&Ò3sBCƒR"3SrC“B3s"C“3c2C“BÂ33rC“B"3‚Cƒ33C“B3#Cƒ‚Âƒ’‚ÂS’Cƒ"CC“BSbCƒ‚C‚C“BÂ#C“B"CsB’C“BCƒR"CcrCs"Cc‚Âs2"ƒ’s2bƒ"#r2“b#BbÂ3sbCcr"3srCsB3sbCc‚3srCs""3sBCƒR3srCsr3sbCƒ"¢"ÒÂ7G&–æw4†&Ööæ–3¢²…öÖ–ã¢Â…öÖƒ¢ƒÂ•öÖ–ã¢Â•öÖƒ¢ƒÂ†¢ƒÂó¢&Ò3##"##3ƒ####ƒ"3C##ƒƒC"C3ƒCCƒ"3##Cƒƒ##¢Ò3#c"3S’#c#2"3S’S’"#c3#2#cS’"3#c#c#2#2#c¢"ÒÂÇV6¶VE6æ—§¦–6Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢#c’Â•öÖ–ã¢Â•öÖƒ¢3ƒ’Â†¢3ƒ’Âó¢&Ò#2SC"“BSc#2SS"#BSc"sBSCƒ2ScsBSS"ÂsB3ƒb"“2sb3sb#“B"“Bƒbƒb"3ƒr“233ƒrƒb"#23ƒb3ƒr#“B33sb¢Ò“BC"C“2’CC’"sB3CbC#s“‚33bÂsB“2"“Bs2sBƒ2ƒ2s2"#2“2#Bs2#2ƒ2Â#23Cb"3Cr“2#ƒ’33b3Cr#s"“BC3Cr’#s‚C¢"ÒÂÇV6¶VE6æ—§¦–6Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢#c’Â•öÖ–ã¢Â•öÖƒ¢3ƒ’Â†¢3ƒ’Âó¢&Ò#2sB"3ƒr3cr3ƒB3ƒr#cb"“2Sc3ƒrCsB3Sc"3crƒbScCsB"sBsB#cbsbƒBÂsB#"“BsB’ƒ2"#2##B#2’¢Ò“BS#"3Cr3cr#s‚S#3CrCS""#2#R3Cr#ƒ’#ƒ’##RÂ#23cr"“B3ƒr#23sr#B3ƒr"sB3crƒ23ƒrsB3srÂsB#R"C3cr“‚##RC#ƒ’"“BS#CCS"’S#¢"ÒÂ¶W–&ö&EVFÅVC¢²…öÖ–ã¢Â…öÖƒ¢“ƒÂ•öÖ–ã¢ÓÂ•öÖƒ¢SCRÂ†¢SSRÂó¢&Ò3SB""C2s‚3ƒR"C2C""3SBCRC2R3ƒRCR"#“2s‚3#CR#“2R"3SB"#“2C"3#"¢Ò“"ƒ‚"ƒƒbƒ’ƒbƒBƒb"B#23rƒbB3r"r3sbB3c“r3sB"C’#’#’33bC’#ƒr"“"ƒ‚C’r3“R¢ÒsS"3“2"s“R3CBss’3“2s“R3s""ss#ƒRs“R3#Rsƒ‚3B"c“2#2s3r#C’c“r#r"cƒ‚#cBc“##Rcƒ‚#CR"sS"3“2cƒ‚3CrsB3“2¢Ò#CRSr"##SCB#CRS32#3RSCB"#rSCB#’SCB#’SCB"ƒbS#bSCb“"S3r"C2CcBs’Cs‚c2CcB"3BCcRCCcB3rCcB""SbrCcr"Cƒr"Cc2"SC"Ssb"3Crs##"s3Rs#"3Sbs#3Ss#3SBs#"#sRSc3CBs#“rcb"#S’C“R#sBSSr#S’S#‚"#s"CS"#S’Cƒ#cBCcR"3s23#2#“rCb3S3SB"3ƒr#ƒB3ƒ"33ƒr#“‚"3S##"3ƒr#cR3sb#CR"#3C3ƒ#S"SB"#‚3’#R3#‚“""3B"#‚33#""s2ÓBCBÓrSrÓB"#cBC#BÓB#C2r"332“‚#ƒS‚3"“‚"3ƒ’3’3Sr“‚3s2c"Cs‚ÓCbC3RÓ"c#"“bS#rÓSS’C2"sCÓc#bƒbccrÓ"“#’“Rƒ#rÓ“rƒR"ƒbÓ"“S3r‚Ó""#Ór“rÓ"’Ó"#cB#2#"r#cB"#c2#C‚#cB##R#c2#3b"ƒRccB##‚SCB“rcCr"sƒRcc‚ƒRccRs“Rcc‚"ss’cc‚sƒ2cc‚sƒ"cc‚"sSrcSBsc’cc‚scccR"sSrcC’sSrcS"sSrcS"sƒbc‚sS’c#’sƒ2c’"ƒ‚cbs“bc2ƒ‚c"sC3RrS3BcbCCR"“’ƒ“33ƒb“’#Sb"“C“’cB“’S"sƒbs‚ƒ“’#rƒCBs‚"s‚Ss#bs‚sCB"s“’#3sSBsC"ƒ"ƒcB3SƒCR#sƒcB3""sSrCSbƒcBCƒRCSb"S“’##"cCBCSbS“’3#‚"c’CS“’“"c"cB"Sc2Bc‚CS“R#""SC“‚SSb“’SC’“‚"CS’CS2“‚Cƒ‚"3“rƒBC2ƒ’3“’ƒB"CsR#s’C2ƒ’CSB##b"Cƒ"3Cƒ#ƒ’Cƒ"3"CC’CCƒ"3S’CS"CR"3cS32CC"C’3ƒ2S2"3SBSc3SbSC3SBSS"3ƒbcS3S2Sƒ‚3s"c#""C#’s2CRc“2C#bs"SSrS“"S#cƒ‚SSrc#‚"SC’Sc’SSrSƒ"SSBSs2"S#2SS’SCSc"S3SS’"CS’S“"C“RSS’Cc’Sƒ2"C#Rc2CScC3‚c2"C’c‚C’c2CRc""3“’SƒbC"c"3“’S“R"3“’Sƒ23“rSƒR3“’SƒR"C’SS"3“’Ss2CRSc""SCCS‚CCCƒrC“"CS‚"c‚CƒScBCS‚Sƒ‚CcR"cC‚Ss"c3"C“rcC‚S3"C#’ss‚cC‚cC’Sƒ’sC’"3SsƒRC"sƒ"3sbsƒR"Sr3sƒRcR"#r3cb3“’c‚3cb"#CRSrƒb3cb#CRC#’¢"ÒÂ¶W–&ö&EVFÅW¢²…öÖ–ã¢Â…öÖƒ¢Cs2Â•öÖ–ã¢Â•öÖƒ¢Cs2Â†¢Cs2Âó¢&Ò“’“’"cBc’#s’C2c’"“’ƒ"src’“s2"#B#bƒ’#""#b3r##"#’3"#c#2CR#SB"#s’#cb#2sÂ#CR#R"#ƒR#2#SR##R#s"#’Â#ƒr#2Â#ƒ‚#""3‚ƒ23#b3‚“bÂ3‚3B"#“"3‚"3‚""#S‚S‚#sB“"#S‚sb"3C#S‚#b#“B"C#2S‚3ƒbC#2#b"3“"C#2sbC‚“""3c3B3s2"3c"Â3cƒ2"3“"#"3c“b3s’#b"3“R#23“2#"3“2#2"C3b#RC‚#’C#b##RÂCss’"CƒcCs‚sCƒcr"CsB3rCƒSBCsrCr"CsRCs"3Cs#""Cƒ"ƒ"Cs"CsB“"Src’C“s2SBc’"Sƒ"“’S3’c’Sc"s’"c"cBc"#c"C2"S“’“’c"src‚“"Scr#S“"#bSs’#"SCB#bSS’#SS"#’"S##S3b#2S#‚#"S#SB#S‚#2ÂCcr#CR"Cc‚#ƒRCSb#SRCc"#s"ÂCc‚#ƒr"Cc’#ƒ‚Cc‚#ƒrCc’#ƒr"C“‚3‚CsR3CƒR3‚ÂSCr3‚"Ss’#“Sc’3‚Sc’3‚"c#B#S‚Sƒ’#sBcR#S‚"cƒ3CcSR#S‚cƒ#“B"c#BC#2cƒ3ƒbcSRC#2"Ss’3“cRC#2Sƒ’C‚"SCr3cSc’3s2Sc’3cÂC“‚3c"Cc’3“"CƒR3cCsR3s’"Cc‚3“RCc’3“2Cc‚3“2"CcrC3bCc"C‚CSbC#bÂSCs"S#CƒS‚Cs‚SBCƒ"SCBCsBS#rCƒS3BCsr"ScbCsSS"Cs"SS’Cs"S“’Cƒ"Ss’CsS“CsB"c"Sbc‚C“c"S2"Sƒ"Sƒc"S3bc"Sc"Sbc"Sc"cS3rc""Cƒ"S“’S2c"C“c‚"CsScbCsBS“CsSs’"CsBSCBCsSS’Cs"SS""CƒS#CsrS3BCƒS#r"CsSCƒSBCs‚S‚ÂC3bCcr"3“RCc‚C#bCSbC‚Cc""3“"Cc’3“2Cc‚3“2Cc’"3cC“‚3s’CsR3cCƒRÂ3cSCr"3“Ss’3cSc’3s2Sc’"C#2c#BC‚Sƒ’C#2cR"3CcƒC#2cSR3ƒbcƒ"#S‚c#B#“Bcƒ#S‚cSR"#“Ss’#S‚cR#sBSƒ’"3‚SCr3‚Sc’3‚Sc’Â3‚C“‚"#ƒ‚Cc’3‚CƒR3CsRÂ#ƒrCc‚Â#ƒRCc‚"#CRCcr#s"Cc"#SRCSbÂ#S"#S##2S‚#SB"#bSCB#S#‚#2S3b"#Scr#’SS"#SS’"“’S“’#Ss’#bS“""cBc"“c‚src""“’Sƒ"C2c"#c""c’Srs’Sc"c’S3’"ƒ"Cƒ"c’SBs2C“"RCs“CsB"Cs"3rCsB#"Cs3Cs""cCƒCrCsrSBCƒ"ƒCscrCƒs2Cs‚Â#RC3b"#23“R##RC#b#’C‚"#"3“"#23“2#"3“2"ƒ23c#b3s’“b3cÂ3B3c""3“"3c"3s2"S‚C#2“"C‚sbC#2"3C#bC#23ƒb"S‚#S‚#“B#b#S‚""#“sb#S‚“"#sB"3B3‚"3‚"3‚Âƒ23‚"#"#ƒ‚“b3‚#b3"#2#ƒr#"#ƒr#2#ƒ‚Â#2#ƒR"#R#CR#’#s"##R#SRÂs’#"c#s#2cb#"3r#bSB#CR#2"B#3#’#"#"ƒ"“’"#ƒ’#b"c’cBs2“c’sr"“’“’c’C2s’#¢Ò#sb#sb"#C’3C#c"#“#C’3#"3CC3"#C’3“#ƒ’C3""C3"3C3“C3"C3"3“"CR#sbC3"3#C’#“"3C#C’3“#c"3c#C’"#sb#sb3##C’#“#c"¢"ÒÂv–vvÆT'Vvv–FõW¢²…öÖ–ã¢Ó#"Â…öÖƒ¢#C"Â•öÖ–ã¢Â•öÖƒ¢cBÂ†¢cBÂó¢&Ò3C2#""3#2C23C2#"33B3""3‚C‚3‚Cr3"C‚"#“‚CB3BC‚3Cr"#ƒ"#‚#“RC#“3r"#sB#B#s’#R#sb#B"#cR#‚#c‚#B#cR#‚"S‚###cR#‚s2#r""#3bC2#3"#r#3b"C2#bƒ"#3bSR#’ÂÓ#b3r"Ó3"#RÓ33"Ó3"3"Ó#b"Ó3"‚Ó#b""Ób“"Ó#b"Ór""rƒbÓƒ‚2ƒb"r“"ƒbBƒ‚"32r#“B#B“‚"C"3b’3’"S"rC‚S"r"S‚bS"rCB#’"#BsBB“"#sB3#3R#c"rÂ3C2“’"3C‚3CrB3C‚‚"3C2#"3C‚‚3C2#"¢"ÒÂ&WVC&#¢²…öÖ–ã¢Â…öÖƒ¢CƒÂ•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&Òƒ2ƒ"“"#sƒ2#3C#s"ƒC"#s#3"“"ƒ’3C"ƒ’"ƒ2ƒCƒ’ƒ23¢Òc“23cÂS3cÂÓ3cÂƒÓ3c¢Òc“2Óƒ"c"Ó“c“2Ó3cSÓ“"SÓƒSS"Ó“SÓ3"c"Ó#s"SÓ#3"SS"Ó#s""c“2ÓƒcSÓ#s"c“2Ó#3"¢"ÒÂ&WVC$&'3¢²…öÖ–ã¢Â…öÖƒ¢s3RÂ•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&ÒS‚Óƒ"“c‚Ó“S‚Ó3rÓ“"ƒsrÓƒ“rÓ“ƒsrÓ3"“c‚Ó#s"ƒsrÓ#3"“rÓ#s""S‚ÓƒrÓ#s"S‚Ó#3"¢Òƒ2ƒ"“"#sƒ2#3C#s"ƒC"#s#3"“"ƒ’3C"ƒ’"ƒ2ƒCƒ’ƒ23¢Òc“23cÂS3cÂÓ3cÂƒÓ3c¢ÒS‚3cÂƒsr3cÂ3cbÓ3cÂSCrÓ3c¢"ÒÂ&WVCD&'3¢²…öÖ–ã¢Â…öÖƒ¢#C2Â•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&Òƒ2ƒ"“"#sƒ2#3C#s"ƒC"#s#3"“"ƒ’3C"ƒ’"ƒ2ƒCƒ’ƒ23¢Òc“23cÂS3cÂÓ3cÂƒÓ3c¢ÒS‚3cÂƒsr3cÂ3cbÓ3cÂSCrÓ3c¢ÒC#B3cÂ#C23cÂs3"Ó3cÂ“2Ó3c¢Òs“3cÂc‚3cÂ“rÓ3cÂ#s’Ó3c¢Òs“Óƒ"c“’Ó“s“Ó3sC‚Ó“"c‚ÓƒcC’Ó“c‚Ó3"c“’Ó#s"c‚Ó#3"cC’Ó#s""s“ÓƒsC‚Ó#s"s“Ó#3"¢"ÒÂ&WVD&%6Æ6ƒ¢²…öÖ–ã¢Â…öÖƒ¢CƒÂ•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&Òc“23cÂS3cÂÓ3cÂƒÓ3c¢"ÒÂ77–ÔF–Ö–æ—6†VC¢²…öÖ–ã¢Â…öÖƒ¢SÂ•öÖ–ã¢Â•öÖƒ¢SÂ†¢SÂó¢&Ò3cs#"3ccs#Sc"3ccc"s#3cScs#c"3cs#s#ScScs#¢ÒSSrcB"3cƒ"SRC3Rƒ""cBcB#ƒrƒ"#b"ƒ"3c#bƒ"#ƒr"cBSSrƒ"C3bSR"3cc3’#bc#ƒrc3’"SSrSSrC3bc3’SRc"c3’3ccSRc3’C3b"SSrcBc3’#ƒrc’#b¢"ÒÂ77–Ô†ÆdF–Ö–æ—6†VC¢²…öÖ–ã¢ÓÂ…öÖƒ¢S"Â•öÖ–ã¢ÓÂ•öÖƒ¢S"Â†¢S2Âó¢&Òs#2cƒBÂcƒBs#2ÂS“bc3B"3cs#S32cƒ‚CSs#"3ccs#Sc"ƒ‚#R#s32ƒ’ÂÓ3bÂ3bÓÂ#Rƒ‚"3cƒ’32#s"s#3cScs#c"c3BS“bs#CScƒ‚S32¢Òƒ"3c"cBSSrƒ"C3bSR"3cc3’#bc#ƒrc3’"S3rSsbC#bc3’Cƒ‚cbÂCRƒB"ƒ"3cR#32ƒ"#“R¢Òc3’3c"SSrcBc3’#ƒrc’#b"3cƒ"SRC3Rƒ""ƒBCR#“Rƒ"#32RÂSsbS3r"c3’3ccbCƒ‚c3’C#b¢"ÒÂ77–ÔVvÖVçFVC¢²…öÖ–ã¢Â…öÖƒ¢3#Â•öÖ–ã¢“Â•öÖƒ¢CÂ†¢3#Âó¢&ÒCc"CÂ#s"CÂ#s"S“Â“"S“Â“"CÂCÂ3#Â“"3#Â“"3Â#s"3Â#s"3#ÂCc"3#¢"ÒÂ77–ÔÖ¦÷%6WfVçFƒ¢²…öÖ–ã¢Â…öÖƒ¢SÂ•öÖ–ã¢Â•öÖƒ¢C“Â†¢CƒÂó¢&Ò3cS#‚ÂSƒR“bÂ3R“b¢Ò3csbÂBÂs#B¢"ÒÂ66–FVçFÄæ'&÷u&WfW'6VDfÆC¢²…öÖ–ã¢Â…öÖƒ¢cÂ•öÖ–ã¢ÓsbÂ•öÖƒ¢CS"Â†¢c#‚Âó¢&ÒƒB"ÓS2Ó#bcRÓr"“bÓ#C’S2Ó#r“bÓ#C’"#bÓ#S2“’Ó#S#"Ó#S2"##RÓ#3R#bÓ#S2##RÓ#CRÂ#3c3""#"cS#3cC"##"cSÂ“’cS"ƒc3"ƒ’cSƒcC"ÂƒB#B"#R#rƒB#Bs#r"ƒBS2#rs2¢ÒCRSB"ƒBrƒSBƒB#ÂƒrÓs’"BÓs"crÓS‚3"Ó""ƒ"S‚ƒbÓ2ƒ"3b"CRSBƒ"s’ƒ"SB¢"ÒÂ66–FVçFÄæ'&÷u&WfW'6VDfÆDæDfÆC¢²…öÖ–ã¢Â…öÖƒ¢CbÂ•öÖ–ã¢ÓsbÂ•öÖƒ¢CS"Â†¢c#‚Âó¢&ÒCc"#r"33sB3sB#r33‚ƒÂ33Bc3""3RcS33BcC"3#RcSÂ3"cS"#ƒBc3"#“"cS#ƒBcC"Â#ƒ’Ó#3R"3‚Ó#S2#ƒ’Ó#CR#“‚Ó#S2"3#Ó#C’3"Ó#S23rÓ#S"C“"Ó3‚3#Ó#C’C32Ó“B"S“’ƒBS3BÓ“‚S“’Ó#b"Cc"#rS“’s2S3B#r¢ÒSS‚"CS’Ós"S3bC“‚Ó’"3#rÓs’C3Ó3S’ÓcBÂ33ƒRÂ33“"C#"SB33#R3S’SB"SS‚S2SBSs’¢ÒƒB"ÓS2Ó#bcRÓr"“bÓ#C’S2Ó#r“bÓ#C’"#bÓ#S2“’Ó#S#"Ó#S2"##RÓ#3R#bÓ#S2##RÓ#CRÂ#3c3""#"cS#3cC"##"cSÂ“’cS"ƒc3"ƒ’cSƒcC"ÂƒB#B"#R#rƒB#Bs#r"ƒBS2#rs2¢ÒCRSB"ƒBrƒSBƒB#ÂƒrÓs’"BÓs"crÓS‚3"Ó""ƒ"S‚ƒbÓ2ƒ"3b"CRSBƒ"s’ƒ"SB¢"ÒÒÂföçDfÖ–Ç“¢$ÆVÆæB"Â&W6öÇWF–öã¢S2ÂvVæW&FVDöã¢###"Ó"Ó•C#3£S#£3rãsSe¢"Ó°¢6öç7B&’Ò²vÇ—‡3¢²'&6¶WEF÷¢²…öÖ–ã¢Â…öÖƒ¢S‚Â•öÖ–ã¢Â•öÖƒ¢3sÂ†¢3sÂó¢&Ò#""#"SRƒ’ÂSr"s23sbC#Rc#"3r"s3"Ccrs#BCbs3"C3b"s#bSBs3"Cƒ"s3C“‚"sS32s#2S#‚s’S32"c“2S#bsrS32sS3"csBC“‚cƒ2S#cs‚S‚"c3RCbcc"CcrcS"C3R"3cBSc#ƒCS‚“2"SBS#S‚SB#bS"3’SBrSs‚SB"#rSBBCR"ƒB‚“b"#c2C"#"Br¢"ÒÂ'&6¶WD&÷GFöÓ¢²…öÖ–ã¢Â…öÖƒ¢C“bÂ•öÖ–ã¢Ó3“2Â•öÖƒ¢Â†¢3“2Âó¢&Òc“bÓScb"sÓS3’s2ÓScbs‚ÓSC’"sBÓS#s2ÓS32sBÓS#r"s2ÓS‚sBÓSrs2ÓS2"ccÓ3#rsbÓCCRcƒ‚Ó3ƒB"3“"ÓC"c2Ó#2S2Ó’"#b33Ór#cb"cÓ“sBÓ"#bÓrÓcbÓ2"Ó’"ÓÓBÂÓ#2"2ÓSÓ3"2ÓC""Óƒb2Óc"Ós2"BÓ‚Ó“bÓ‚"CRÓSÓCR#2ÓSB"ƒÓC2ƒ’ÓCB3RÓCR"c#ÓC’3“"Ó3RS#2Ó#3b"cc"ÓS3’cCÓCSbcSRÓC“r"c“bÓScbccrÓSSrcƒÓScb¢"ÒÂ&&Æ–æUF–6³¢²…öÖ–ã¢Â…öÖƒ¢SbÂ•öÖ–ã¢ƒsrÂ•öÖƒ¢#"Â†¢#CRÂó¢&ÒC"#c2"cb#ƒrc"#ccb#s""ƒSƒ2cR3ƒrs"CƒR"3RcBƒ"cS2c"BS“rc’bcB"C‚rS#RCS’Â#“""C"#c2#c2#2#cb¢"ÒÂ'&VF„Ö&µF–6³¢²…öÖ–ã¢Â…öÖƒ¢Sc‚Â•öÖ–ã¢Â•öÖƒ¢c#Â†¢c#Âó¢&Ò#S‚"#s‚3’#sb#sB#B"#s’Sb#s’CR#s’SÂ#s’s2"#s‚r#s’ƒ‚#s‚""#ƒC‚#s‚#r#s’3‚"S3bc3"333ƒrCƒr"sCBs’ccScsc“"ƒRss’ssRs3ƒ‚sC"ƒ‚ƒ#Bƒ‚s“2ƒ‚ƒ‚"ƒRƒc‚ƒ‚ƒ3‚ƒ‚ƒS""s“bƒ“BƒBƒƒƒ‚ƒ“B"ss’ƒƒ‚s“ƒ“Bsƒbƒ“2"s’ƒcBscƒs‚s3’ƒs"3s"c"SƒƒbCS’s#B"##’#S"#“‚C“‚#S3ƒ2"###c‚##R#c"##"#cB"#’3"#r#s’#2#“"sRS#rƒ3ƒrC2Ccr"bSc2S‚SC23’Ss2"S3’2SSrSC’""C“"S#B’Sr"SbC’CS’#"C#R"c2#c’B3cr3‚3#2"#3‚3b“r“B#bR"#S‚#C"#"#C2¢"ÒÂ6Vvæó¢²…öÖ–ã¢Â…öÖƒ¢s“‚Â•öÖ–ã¢ÓcRÂ•öÖƒ¢ƒbÂ†¢ƒsÂó¢&ÒbÓ“B"cbÓc’3’Ó“"S2ÓƒR"srS’"Ó#b3‚r"SC2CSb#“‚“"C#3#B"s#b3cRC#cƒ3s2"sS2#rsCB#ssS2#C2"cSR"sS2ss’3"S“’Bc3brc‚B"Ccs2SCBBC“R#‚"C3"“CSBƒ2CCB“"C’s’C#R“C‚ƒr"3S’‚3“c3s2C"3Cs"3Cr3Cƒb"3s2#B3CSb3SC"C’b3ƒBr3“b"SSÓ2CSBÓ"SÓB"S“’ÓbScbÓ"Sƒ2Ó"ƒcB#2s##rƒbB"ƒƒb3ƒs‚#C"ƒƒb#s"ƒSr3“Rƒƒb33ƒsr3c2"s“’CcrƒCC#ƒ#CCR"cC‚Ss"sSRS2sBSCb"ƒ2ƒ"sC2“SR“B"C#’#2“r3b"C’C‚C"3RC’C""CRS2C’C’C‚S""#2c3’S‚3c"’Sb’c2S’"ƒ’3‚"S“BCR"“Cb“ƒ‚Cƒ’“ƒ’C"S“Rc"ƒ3BƒSRss3"ÂS“S“‚ÂSC’cR"C3"s“2Cc"cCrC3"s#2"S3Bƒƒ‚C3"ƒSCsBƒƒ‚"csƒ3BSƒ‚ƒƒ‚c3ƒcB"sƒ‚cƒBƒ#Bc“bƒ‚"s#Bƒ#sBƒ‚s’ƒ’"ƒ’ƒƒ2sSrƒ3Bsƒ‚ƒS""ƒb“ƒBƒ“ƒbƒ“b"ƒ"“#2ƒb“ƒ"“b"sb“ƒBss“CRsC"“s"S“2cc‚““‚c3"Sb““ScrSCR"332s“’C32“C’3ƒƒsb"3"c“23"scR3"s#’"33Sƒ’3"cS‚3c#B"Cc’Cƒ‚3cS32CRS"CƒRCƒ"CsRCƒrCƒCƒR"#cb#C’C"CR33‚3#r"#ƒ‚#r“bsC"’ÓcRs‚C3rÓr"ÓƒRBÓs"Ós’"bÓ“BÓ“BÓ“B¢ÒƒcS3b"“#rSsRƒ“S3’“’SSr"“cRc#‚“S"S“‚“cRc2"“#bcƒ“cRcCB“S"cS‚"ƒcRs2“sƒƒ2s2"ƒRccrƒCRs2ƒ#‚c“‚"sc‚cs“cC’ssc3"ƒ"ScBscbSƒ’s“‚Sƒ""ƒcS3bƒ#BSSƒCS3r¢Ò#S3S"3c2C3b#ƒR3C‚3S2C2"3SBCSb3cbCC‚3cCS""#sS‚3#rCsr#“‚C“r"#C2S#‚#cS#b#S"S#‚"#S2#3"S#‚##"S#2"SrCSB“C“BsbCs""CC#‚CrCCBCC3b"S‚CbCC#CrC2"#b3cƒ3“2“r3sb"#CR3S##R3Sb#3R3S¢"ÒÂ6öF¢²…öÖ–ã¢Â…öÖƒ¢3ƒÂ•öÖ–ã¢Ó“bÂ•öÖƒ¢3rÂ†¢#32Âó¢&Ò#‚Ó#ƒ""SrÓ#CRCRÓ#ƒ"S2Ó#c"cÓ#2cÓ#3"cÓ#r"c2’cÓ3"cÓc""3““B“"#"32ƒ"S3SC2Ccr#“‚S"CR"S3"SSbS3SCrS3"SS""“BSS’cSbSSrsƒSS’"“SSƒ"“#SS’“CSc’"“ƒrcsB“sc’“ƒrc3‚"“ƒBc“‚“ƒrcƒ“ƒbc“"“Ss“s2c“‚“csÂ“CsÂSCRc“b"S3RssbSCRs#2SCsC’"22Csr““b3#br"ƒR“bRƒrR"ƒ3#"ƒƒBƒ#S2"s’Ccrƒ23sƒC‚"cC“2s’CsbƒC“2ÂcC“2"#‚CcrCBC“3CƒR"#C2#RCCb#C#B"r#3R‚#‚Â“c"b"Sc’“Bƒ‚ƒrcs3R"CScƒ2SƒCBCs"scbÂccs‚"‚cƒC‚cs‚3"cƒ"s’cscƒƒbcs‚"SCBC‚c3b#’S“"Â3rSCBÂC#’SC’"C#‚S‚C#‚S3’C#‚S#‚"Cƒ‚#ƒRC#‚C3RCS‚3c"cƒƒS#b“"S“2#B"“Cb’sc2CƒSB’"‚b“cbr“ƒ‚b"RÓ3r‚ÓC"RÓƒ’""Ó#C2RÓs2RÓ#’"#‚Ó#ƒ"RÓ#S‚Ó#ƒ"¢ÒsBc“"s’“3Rsrss"srƒS""3#bƒSRcb“3"#S“’"CCbc“B3ƒRƒBC#bsS’"#c’c“23ƒrc“B3#‚c“2"sBc“#Bc“23’c“¢ÒSsrcƒB"scbƒsBc‚sc2cs‚ƒ#‚"“ƒ’“3"ƒ3r“"“2“#2"R“32““‚“3"r“32"Bƒ#"Rƒ“bBƒc"cƒ‚"s“"sC2¢ÒcrƒB"sSS2s3rc‚C#’"C3’SSb“BSS23bSSB"C3rSSBC3’SSBC3rSSB"3C33rC2Cs‚3ƒrC""’“"#ƒb#c##""crƒB"ƒ’ƒBƒb¢Ò‚ƒ"cc#cBƒƒbƒss#""S#BCsSs3RS#B3sB"S#‚S#BS#BCƒ‚S#bSRÂS32SC’"s“"SS"c’SSsbSS"’SS2ƒcRSS2“3rSS""‚ƒ’C#‚‚#ƒ‚¢"ÒÂt6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢ccBÂ•öÖ–ã¢ÓSS’Â•öÖƒ¢’Â†¢Sc‚Âó¢&Ò3C2ÓƒR"3cbÓƒ3SÓƒR3SrÓƒB"C’Óss23ƒ2Ós“R3“rÓsƒb"Sƒ"Ó3#‚S#‚ÓcC‚SsrÓC“r"Sƒ2Ó#“BSƒ"Ó3RSƒ2Ó#“B"c"Ó#s’Sƒ2Ó#“Bc2Ó#ƒ""sCrÓ“rccÓ#SbsbÓ#3"“C’C2ƒSrÓ’“#"“Sb#b“SRcB“Sbƒb"s“3ƒB“Sb#“r“b3c2"sB3“2sc"3“s323“2"C“‚33bc3"3“2Sc23sB"Cƒ3#RC“33Cƒ3#RÂCCBCcR"CC"CƒRCC"Cs"CC"CƒR"c’ƒƒCC"CƒRSƒ’sCb"c’““bcb“’c’“S‚"c2ƒBc’#rc‚Sb"S3B3ƒrS“’ƒ‚Sc#ƒb"Cƒ"CS2S#rCrSrCS2"C#"CrCSbCS2C3‚C#‚"3Rc23C‚3R3"ƒ‚"3B"3BC23B#""33‚cSB3Bƒƒb3#2sc’"3C2c#’33‚cCR3Cc3b"CB3Sb#s‚S3r#bCS"#2CB#ƒ‚S2##"#rrc2"ƒ"Ó#Óc’3Óc"#rÓ#ƒ‚"Ó#3’cÓ#s"CÓ3#‚#sBÓ3"3CÓ3#‚"CsBÓ3#BC3Ó3#‚CS"Ó3#rÂC“Ó3#"C“Ó3CC“Ó3#C“"Ó33B"C"ÓSƒRCsRÓC#‚CSBÓS2"#“BÓcc‚3sBÓc#"3C‚ÓccB"#sÓc“2#s‚Ócs#sÓcƒ"#sBÓs‚#sÓc“‚#s"Ós2"3"ÓssR#ƒ"Ós3#“"ÓsS2"3C2ÓƒR3Ós“R3#RÓƒR¢ÒCsr"3ƒ"“#"3ƒ’sƒb3ƒ"ƒSB"Cƒ#ƒb3ƒ"CrC‚c’"Sr#RC“‚#32Srs’"SCSr“rSBc‚"CsrCƒ“#rCSRƒ‚¢Ò#S"Ó3R"“bÓ##3"Ó3B#RÓ#r"rÓc’S‚Ó‚#rÓ“B"Ó3""ÓS‚ÓCR"r’ÓbB"3Sb‚#r#rS""3#B33rƒbSb#S2#CbÂ3ƒBCbÂ3“R3ƒB"Cb#“Cb3C‚Cb#“"3S#2Cb#“3sb#3’"#C2ÓC"#s‚C2#C2SR"#SÓr#C2Ócb#CbÓ“"#S"Ó3R#S"Ó#"#S"Ó#r¢ÒSc2Ó“"Sc‚SS"2S3s‚"S2“"S‚s’S‚ƒb"c#B#"SS“’Sƒb#""s3“"cc#"c“B“’"ƒSCss2ƒ2ƒbsb"ƒS‚3BƒS"3‚ƒSR3R"S“RÓ#ƒ’sbÓc‚ÂSc’Ó3¢ÒCÓc"3ÓCr3cÓc3ÓCr"3rÓ“‚3ÓCr3rÓ#r"3BÓ323rÓs’3‚ÓSb"C#’33#‚3b3srƒR"CC3‚C323RC3‚3‚"CC’#"CCb3‚CC‚3""C“Ó3Cc"3rCƒBÓCb"C“ÓS2C“ÓCC“ÓS2"CÓcC“ÓS2CS"Óc2¢"ÒÂ46ÆVc¢²…öÖ–ã¢Â…öÖƒ¢s3Â•öÖ–ã¢ÓSC2Â•öÖƒ¢SC2Â†¢ƒbÂó¢&Ò3Ósƒ""CÓsSR3‚Ósƒ"CÓss2"CrÓC“C2ÓccrCRÓSsr"c#rSÓ#S‚S2Ó#B"c‚c‚cB3CBS‚Cƒ"ƒsc‚s2c“3"s3""CRsƒ"cbss‚SRsƒ""2sC#bsƒ"2sc‚"s#Bs3bs3Âs"BS“bBcs"Bc3BÂB3ƒ""’"B#ƒ‚B“b"rÓ32Ó3"ÓcbÂrÓcs""SÓs3brÓs#rÓs#"’Óss"c’ÓsC’“ÓsS’"3Ósƒ"#Óss‚#rÓsƒ"¢ÒcRÓss"ƒƒÓcƒBsÓssƒÓs3’"#Ó3“R“ƒbÓc"#ÓS"rÓ33B#Ó3sB‚Ó3SB"sc’Óc"rÓ#’ƒ“bÓsR"sCbÓcsc"ÓcsSRÓc"c3’Ós2sÓccsRÓc’"S#BÓ’S“‚Ós’ScÓ“""S#‚Ó3bS#bÓƒRS#‚Óc"S#rÓBS#‚Ó#bS#‚ÓB"S#‚3’S#rS#‚#B"S#b“’S#‚S’S#rs’"S“"“BSC’“RSs“B"cC‚“’c“Bc#’“R"“"SrsCB“BƒCBr"S23sr’#RS2#ƒB"SC#RS23“2S2C’"“BccR3rS#“ƒbc""srsS2ƒSRsrs“sS2"c#bs3Bcƒ‚sS2cS‚sCrÂCc"ccR"3CrS3sBc#‚3CrSƒ"3SCC’3CrCƒB3C‚Cc‚"3“"C’3S2C#‚3crCb"C“"C3‚C#RC#RCS’C#‚"SCC“‚S#BCC‚SCCc‚"SCSBSCS2SCS‚"S3rSCbS3rS#BS3rS3b"Ss2c3’S3rSƒSSc"cbcSrSƒ"cC’S“2cSrÂc’cSr"sbc#"cCrcS"cƒBcCr"ƒ3B3s"ƒSSbƒ3BCc’"ƒ33#2ƒ3B3Sbƒ3"33‚"sC2ƒrƒ#R#cbs“R#r"ssbs3"ƒs#sb"c“Bs’sBsbssr"S#r##2c3‚“2Sƒ"#b"C“R##’Sb##‚SR##’"CSB##Cƒ##’Cc‚##R"3“Rƒ’C3"#2CR#"3c2ƒ3ƒBƒb3sBƒ"3C‚c‚3Sbs’3C‚sb"3Cc3C2cr3CcB"3CrS3CSr3C2SB"3SbCr3C‚C‚3S2Cr"3cB“"3c33c2"3c’Ó3r3crC’3c’b"3c2ÓSB3c’Ósb3crÓR"3SrÓ#3b3cÓƒ23SrÓ#"3sbÓ#cB3SrÓ#S23cÓ#S’"CSbÓ#ƒ’C"Ó#ƒBC#’Ó#ƒ’"S#Ó#ƒ"Cs‚Ó#ƒ’SÓ#ƒR"SC’Ó#SRS3rÓ#s’SCbÓ#s"S“‚ÓsrSSbÓ##RSsrÓ#""c#"ÓcBcRÓc‚c2ÓcB"c3bÓcrc#bÓcBc3Ócb"sC’Ó##Rcs‚ÓsrsBÓ“’"ƒC‚ÓCRƒBÓ#sbƒC‚Ó33r"ƒ#BÓSrƒC‚ÓC3bƒCÓCs"cSrÓcSrs“"ÓSƒ"s3Óc#R"c‚Ócc‚c3‚ÓccBc#"Ócc‚"S3BÓc"Ss"Ócc‚SCrÓcCR"S2ÓSsRS3ÓSƒ’S#2ÓSsR"SrÓSsbSÓSsRS‚ÓSsR"Cs‚ÓSƒ"C“rÓSƒCƒ‚ÓSƒ""CRÓSsCSBÓSƒ"C#‚ÓSs"3ƒ’ÓSs"3“’ÓSs3“RÓSsÂ3c2ÓSs""3#ÓSsR3C‚ÓSs"332ÓSc’Â3#c3"3#2cc"3#2cC3#2cS""3Rsb3#2cƒ3#c“‚"3Bs3b3Bs#23rs3bÂ3"s3b"#ƒsb#“Bs3B#ƒRs#’"#sRccR#sbs#sRcƒ2Â#sR3ƒ""#sb“’#sR#ƒ‚#sR“2"#s’Ós#s‚#sbÓƒ"#ƒBÓ3“’#ƒ"Ó#Cb#ƒBÓ3#2"#ƒ"Óc#’#ƒBÓCsR#ƒ"ÓSS2"#ƒ’Ós##ƒ"Ócc#ƒ’Óc“"3Ós3b#ƒ’Ós#r#“Ós3b"3"Ós#B3rÓs3b3Ós3"3#Óccr3#2Ósb3#ÓcƒrÂ3#Óc3"Â3#‚ÓcCBÂ3CÓcSr"SÓsSr3ƒbÓsrCCRÓsC"cRÓssSCbÓscbSƒÓss¢"ÒÂd6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢ssbÂ•öÖ–ã¢ÓC“bÂ•öÖƒ¢#bÂ†¢s"Âó¢&ÒC"Ósb"ƒBÓCRS“"Ócs‚sbÓScb"ƒsbÓS2ƒcÓ#“‚ƒsBÓƒ2"ƒc‚32ƒsbÓ3"ƒs2"Sc3ƒCR#rs#23"S#B3SC’3S3b3"33B3s2#“r#3’#C""rÓ#’ƒBƒb3r3’"’Óƒ’"ÓS’Ós""Ó#3‚’ÓSBC2Ó#b"#BÓ#C2rÓ#3’#Ó#C""ƒbÓ#cCRÓ#SRcbÓ#c"#c‚Ó##‚#RÓ#c#C"Ó#C’"3SÓS’3#RÓƒ3SÓ#B"3C23SÓ3b3C‚Ó2"3C3b3C’3C#r"C’R3CsR3c2""CCrC#rC3r"c#B3bSrSs2ƒb"sCBÓ#cƒ‚Ó#rs#BÓ’"sCrÓ#3sCrÓ#sCrÓ##""srÓ3#2sCrÓ#cBs3bÓ#“""c‚ÓCCRcƒ‚Ó3scSBÓC"3rÓSCS‚ÓS2CRÓSCÂ#2ÓSC"3’ÓS#SBÓSC“bÓS3’"ÓSS"rÓSBÓS3"ÓScBÓSSbÓSc"rÓcbÓSƒÓS“b"Óc“B3RÓcC‚SÓcƒB"#ƒ‚ÓsBcBÓsr##RÓsB"C"Ósb3#RÓsB3c2Ós¢Ò‚“""ƒ‚C“c‚“b"r#’“’Srƒ"2#S"r##’b#C"CR#ƒ‚"#“rc‚#sb"r#c"#‚#“r#B#sB"“ƒB#B“ƒ’##““bs"‚““s’‚“ƒb“¢Ò“s"Ó#ƒ"sÓC‚#BÓ#s’sÓ#"#RÓRsÓRCRÓ""“ƒ’Ó#rBÓ“b““‚ÓB"“C’Ó#C’“c2ÓcB“c2Ó#’"“c’Ó#ƒ“C2Ó#cR“C’Ó#ƒ¢"ÒÂVç—F6†VEW&7W76–öä6ÆVc¢²…öÖ–ã¢Â…öÖƒ¢3s’Â•öÖ–ã¢Ó#SÂ•öÖƒ¢#SÂ†¢SÂó¢&ÒCƒÓ3c"SrÓ3SrC“Ó3cSÓ3c"SCbÓ#“RSCÓ3CbSCrÓ3#R"S3bs’SC2ÓsSCÓCb"S#23S32SrS3B#3R"CsR3S’S‚3CS‚3S’"C#R3cCS’3S’CC"3c"C3S’Cb3cC’3c"33r#“B3C‚3S23C3CrÂ33rÓs2"33bÓ#cB33rÓ3r33rÓ#"3C2Ó#“B33bÓ#sB33‚Ó#ƒB"CƒÓ3c3S’Ó33C3Ó3c¢ÒCBÓ3C"#rÓ3#crÓ3Cƒ’Ó33"#rÓ3#RÓ3R#rÓ3‚"#Ó#c"#rÓ#ƒ’#Ó#sR"##‚ƒr#"Ó"#’3r"##‚#ƒr##‚####’#S2"sB3S2##‚33b##"3C2"#3S’Sr3Sr3‚3S’"C‚3Sr“b3S’s"3Sb"r3#2#’3Sr’3CB"r#b#SR’ƒr"bÓ’bC2bÓ32ÂbÓ#B"Ó#SbÓ##Ó#3R"2Ó#c’Ó#SbÓ#c""#rÓ3C#BÓ33s’Ó3#‚"CBÓ3C3"Ó3C3‚Ó3C¢"ÒÂ#g7G&–æuF$6ÆVb#¢²…öÖ–ã¢Â…öÖƒ¢C3‚Â•öÖ–ã¢Ósc‚Â•öÖƒ¢scrÂ†¢S3RÂó¢&Ò3c’C3‚"3sBC3’3sC3‚3s"C3‚"3ƒBCc"3ƒ2CCB3ƒBCS"Â3ƒBCsB"3“c“r3ƒbSCr3“c#""3s2"3“s“’3““ÂS32""ScSCBSS""Ss2rScrSs"""SCbSSs’#RSS’3‚"S3bSbSC2S2S3’S2"3#BBCs""3“rB"s"“#3‚BSB“’"SR“2cb“c“""3rs2Cb“23rƒ’"cCR3rcC‚S"#2R#"S"#32B#2##2""#CbR#3‚B#C2R"#s"“sR#cBR#s"““bÂ#s"“cR"#S‚S“b#cBƒC"#cRs’"3RCsB#S2SC#s"SBÂ3C2CSR"3c’C3‚3SCC‚3SrC3‚¢ÒBÓ3#"#rÓ3B#Ó3##BÓ3R"sÓsBCÓ#cS‚Ó#’"##"Ó3Rs’ÓCr“bÓ3r"C#bÓ#"#ƒ’Ó33S’Ó#‚"C“‚ÓcBCc"Ó#Cƒ"Ó#r"c#‚Ó3S#Ó##bSsRÓ#cB"c3Ó#ƒ‚c3Ó#“Rc3Ó#“"c#‚Ó#c’c3Ó#ƒc#’Ó#sb"Sc’Ó3BcbÓ##Sƒ’Ós’"C‚##RSBÓBCc"r"3B3Sr3ƒB#sB3S3‚"#s‚3ƒ#“‚3s"#ƒ‚3s’"#S3S#c‚3ƒ#c3s""BÓ#’SbssRÓr"Ó##‚Ó#RÓ##""’Ó#S‚Ó#CrÓ#C’""Ó3BCRÓ#s’sRÓ#“B"BÓ3#rÓ3‚Ó3#¢ÒC#Rb"3c#C2r3ƒ"#"#sBB33#3"BÂ#CbBÂ3C#b"C#Rb3c’3r3“RsR¢Ò#CRÓb"#ƒÓB#SbÓb#c’Ób"SÓƒƒ‚CÓ“BSÓ3R"CSBÓcƒ‚SÓƒBSBÓsCB"CC‚Ócs‚CC’ÓcƒRCC‚Ócƒ"CSBÓccrCC‚ÓcsRCC’Ócs"SBÓC“rS2Óc’SrÓSS’"3#BÓ#ƒ‚SÓ3ƒ2C3bÓ3‚"#“RÓ#ƒr3BÓ#ƒr3BÓ#ƒrÂ#ƒ"Ó#ƒr"RÓ33##2Ó#ƒrc‚Ó3r"“BÓ3cb"Ó33b“BÓ3C‚Â“BÓ3s"“bÓC3R“bÓ3“"“bÓC2"s2ÓƒS‚ƒ’ÓSsbsÓsr"s‚Ó“’s2Óƒs‚s‚Óƒ“’"s"Ó“Ss‚Ó“3sbÓ“C"c2Ó““"cbÓ“cRc2Ó“s‚"cbÓRc2Ó““’cRÓ‚"s2ÓBƒBÓbƒBÓb"#CRÓb“rÓB##ÓB¢ÒcÓc#""CrÓc‚SbÓc#"SÓc#"CÓcCÓc"CÓcb"CBÓScBCÓSƒ’CBÓSsR"C2ÓSSBCBÓScCBÓSSrÂC2ÓSCb"##ÓCSCBÓCcrC2ÓCcR"#s‚ÓCCR#3’ÓCCb#S’ÓCCB"C‚ÓC“r3#‚ÓCCR3sbÓCc"C#’ÓSbC#bÓSBC#’ÓS"CRÓS32C#’ÓS#C#2ÓS#r"#’Óc‚3SrÓSs’#ƒrÓS“"#RÓc’#rÓc‚#bÓc’"cÓc#"“rÓc’srÓc#"¢ÒSBÓ“S2"3Ó“323RÓ“S23Ó“C‚Â3ÓƒcRÂ#‚ÓƒcR"3RÓsƒ‚3Óƒ3‚#BÓƒ‚"#2Ósc’CRÓsc’ƒÓssb"#S’Ósc"##2ÓscR#C"Ósc""CCÓƒS"33Ósc"3ƒbÓƒR"CC’ÓƒcrCCbÓƒS‚CC’Óƒc2"C3bÓƒƒBCC’ÓƒsBCCBÓƒs‚"3‚Ó“C"C"Ó“B3c2Ó“3R"SBÓ“S2#cBÓ“S#’Ó“S2¢"ÒÂF–ÖU6–s¢²…öÖ–ã¢#Â…öÖƒ¢S2Â•öÖ–ã¢Ó3S‚Â•öÖƒ¢3S’Â†¢srÂó¢&Ò3CÓSb"C#ÓS3crÓSb3“RÓSB"csRÓ33‚S32ÓC“Bc#"ÓCC‚"s3rÓ“"sbÓ#Sbs3BÓs"s3’Ó3Rs3’Ós2s3’ÓS2"cƒ3Rs3’ƒbs##r"CSrc#"CC’S3rSr"33rSB3ƒSr3S’Sr"#ƒ’Sr3#S3RS2"“3r“"Csr#rC""#’’S#"#’‚"#rÓCS‚#’ÓSrƒ‚Ó3""3CÓSb#SÓC“B#“ÓS‚¢ÒC"ÓCS""3S’ÓC#R3“2ÓCS"3sbÓCCB"ƒrB#C"Ó3s’ÓS‚"#c‚33B“2#r#"#3R"3ƒrCC‚#“R3ƒ233C#‚"CbCS"3“RCSCCS""C#‚CCBC2CS"C#CC’"Sr3#BCsC2C“r3s""SƒbÓ#’Sc##"Sƒbƒb"SSbÓ#sSƒbÓ"SƒRÓ“2"Cc‚ÓC#"S3bÓ3#rS‚Ó3sr"C"ÓCS"CC’ÓCC"C3ÓCS"¢"ÒÂF–ÖU6–s¢²…öÖ–ã¢#Â…öÖƒ¢#ƒ2Â•öÖ–ã¢Ó3cBÂ•öÖƒ¢3cbÂ†¢s3Âó¢&Ò#cBÓS#B"3SrÓS#“rÓS#B3#RÓSb"3sBÓC“3c’ÓS‚3sBÓS"3ƒÓC3‚3sbÓCs"3ƒÓCSRÂCb#Cb"C‚3C‚#cRC‚#ƒ""CCCRC‚3C‚CR3“b"#ƒ‚S#r3“RC“33‚S#r"#S2S##sbS#r#cBS#b"#CS‚#C’Sr#CRS2"C’C’“"CCR#rC2"#’3“b32C‚#’C2"3"3ƒ#’3“"33ƒb"S’3c23b3cbC’3cB"cB3C‚“R3Sb33C‚"##"3Srƒ23C‚#23S"#3‚3c##‚3c#323c"#S"33B#C‚3c#S"3S2"#C2S’#S"#C"#C’S"#’ÓC“##’Ó#B#32Ó3r"#cBÓS#B#rÓSb#3"ÓS#B¢"ÒÂF–ÖU6–s#¢²…öÖ–ã¢#Â…öÖƒ¢ccÂ•öÖ–ã¢Ó3s’Â•öÖƒ¢3ƒ"Â†¢scÂó¢&Ò“’ÓSC2"3ÓS32ÓSS#ÓSC"#SRÓCC‚c‚ÓS#2ÓCsR"33‚ÓC#R#ƒ"ÓC33ÓC#R"3“"ÓC33SbÓC#R3sBÓC#b"CƒRÓCc"C#2ÓC3‚CSBÓCS"cC‚ÓC“rSCÓCƒ"S“RÓC“r"ƒ3BÓCCsÓC“rss2ÓCƒ"“SÓ#C"“bÓ3“R“S‚Ó33B"“C"Ó#“SÓ#3“SÓ#R"“"Ó##“3"Ó#B“#Ó#2"ƒcÓ#cBƒ“BÓ#3RƒsrÓ#C‚"ssRÓ3rƒ3RÓ#ƒ’ƒ‚Ó3R"csRÓ33BsC"Ó3#‚s‚Ó33B"SÓ#“Rc’Ó33BSc2Ó3‚"3s"Ó#cBCcRÓ#s‚C#Ó#cB"3RÓ#s"3SÓ#cB3#‚Ó#cb"33Ó#C"3‚Ó#Sb3#BÓ#C’"C“Ós23ƒbÓƒrC3‚Ó3"csR3CS“RC2ccBƒ"csr3c’csr3Scsr3c"SSbS3bcsrCcc3‚S‚"Cc‚SSS#bSCbC“rSS"#“rS‚C’SS3S2S32"3SB##CsRc‚C""#’“rcR3‚#’#c"3"cB#’ƒr#’sb"#’C32Sr#’Cr"C2#R#’3"3"#R"s2CrSR#RcR3‚"ƒbc2s’S2ƒ"S‚"#3‚3#3B#’ƒ2#s""C#R3ƒ’#“"3cr3c3ƒ’"SsR3CCƒ3ƒ’S33s2"cb#“‚S“33cb3r"c#s‚cb#“"c2#ƒR"SrSsb#rSCBS‚"3BÓBC3’323s"Ó3R"Ó3Sb#3ÓƒcrÓ#cR"ƒBÓCCb“"Ó3ƒbƒBÓCR"ƒbÓCƒƒBÓCS‚ƒRÓCc’"ƒ‚ÓSBƒ‚ÓC“ƒ‚ÓS2"“’ÓSC2ƒ’ÓS#b“ÓS3r¢"ÒÂF–ÖU6–s3¢²…öÖ–ã¢#Â…öÖƒ¢SCÂ•öÖ–ã¢Ó3“"Â•öÖƒ¢3“"Â†¢sƒBÂó¢&Ò#bÓSC"3SBÓScB#cBÓSSb3ÓScB"cRÓCcRCCRÓScBS3ÓS3"s#’Ócc“rÓ3ƒ2s#’Ó#sR"s#BÓƒ"s#’Ó3Rs#rÓ‚"Sƒ’“RsbÓcsc""S#2BScr"SCb‚"sSC‚cb#2csr3R"ss‚S2sc’CCBss‚Cs""ss2SCss‚SBssbS#r"sSScBsc’SSrsc"ScB"s3bSc"sCbScBsC"Sc2"cCSS"sBSS2cs"SS""C"SSBSc"SS"CƒSSBÂ3CbSSB"ƒBSCb#S‚SSBsSSB"3bSSRSC2CS3"#’C"3Cs"3"CC""S"3ƒB#r3“23"3ƒBÂSb3ƒB"#3“"r3ƒ’S‚3“"Âc"3“""3SB‚S#2#ƒRCCR“""#CbÓcR3S‚#Cb""#S"Ó‚#CbÓs‚#C‚Ó“"Â#S"Ó"#cBÓC#SÓ#"#SÓ3R"#“Ó3"#sBÓCR#ƒBÓC"C#RÓs"3#‚Ó“R3srÓƒB"CsRÓcRCC"Óc‚CS’ÓcR"S“"Ó‚SrÓcRSSrÓs’"cCRÓs’cRÓ#RcCRÓCr"cC"Ó“BcCRÓƒBcCBÓƒ’"CƒRÓ3sbcbÓ#s‚Sc’Ó3CB"3cÓ3“’CCBÓ3“"C"Ó3“’"SÓ3C#ƒ’Ó3“’#’Ó3sb"ƒ‚Ó#sR#"Ó3#2“‚Ó3"sÓ#C’ƒbÓ#c‚ƒRÓ#C’"c2Ó#Sc‚Ó#C’cbÓ#C’"3bÓ#ƒ‚C‚Ó#SR3bÓ#cb"SRÓC#232Ó33bCRÓ3sr"ÓCƒ"cÓCC‚s‚ÓCc‚"#bÓSC3‚ÓSBsBÓS#b¢"ÒÂF–ÖU6–sC¢²…öÖ–ã¢#Â…öÖƒ¢c32Â•öÖ–ã¢ÓC“Â•öÖƒ¢C“Â†¢“ƒÂó¢&Òc‚ÓsB"cCÓcƒBc#"Ós‚c3BÓc“b"ccrÓc"ccÓcccc"Óc3"cƒRÓ“cƒ2ÓCcRcƒÓ3#rÂcƒRÓsb"ƒ3Ó#rs3bÓcbsƒ2ÓC‚"“"“Ó“B“2Ósb"ƒƒbS2“"3b“BS""ƒC‚CƒsrS2ƒcBC’Âƒ3‚3b"cƒrÓ2sƒ’Bs3’Ó2"cƒsrcƒrScƒBB"cs"33‚cs‚#3csr#ƒR"cSB3s2cs3Scs"3s2"c#"3Cc3b3s2c#B3c"cR#c"c#3Bc2#ƒ‚"c’Ó#"cbcrc’s""Sc’Ó#"c"Ó#2SƒRÓ#2"3RÓ2CƒÓb3“RÓ"#Ó’#sBÓ2#C"ÓB"3c2#C"S"#c‚‚"S2SS"3sr#ƒ‚CS’C""S3bcS"S#bSƒRS3bc‚"S32cƒ2S3bcc"S3Bcs""S#srS3c“S3sr"Cƒrc“2S‚s‚C“BsB"CsBcc‚Cƒ"cƒBCsrcsr"3ƒBC“CSBc2C‚SCr"#S2#ƒ3C2C’#“R3S"s2Ó2“BƒCRs‚"#’Ó‚SÓC"#’Ós""3rÓCr#’Ó#3"Ó3B"SÓƒbC2ÓcSÓs2"c‚Ó#bS"Ó#rSbÓ#R"“"Ó#rs2Ó#bƒ"Ó#2"#ƒ‚ÓcbSbÓƒ##Ócb"SSbÓƒb3srÓcbCcrÓƒ"SƒbÓƒ’ScbÓƒrSsbÓƒr"cbÓƒbS“bÓƒ’cbÓƒ’"cbÓC3"c2Ó#c‚c"Ó3S"S“bÓc#Rc2ÓC“RS“bÓSS’"S“‚ÓcsS“bÓcCS“bÓcSR"c‚ÓsBS“‚Ócƒ2S“bÓs¢"ÒÂF–ÖU6–sS¢²…öÖ–ã¢#Â…öÖƒ¢Sƒ2Â•öÖ–ã¢Ó3ƒ’Â•öÖƒ¢3ƒ’Â†¢ss‚Âó¢&Ò3"ÓS3b"#C’ÓScc‚ÓSS2#’ÓSS’"SrÓCc"3SÓScCSBÓSB"csrÓƒ2Sƒ‚Ó3ƒBcC"Ó#ƒ’"c“BÓƒRcƒ‚ÓSc“BÓr"SC3‚c“B"cC"“B"C#"s2SSBCc"cr"CƒrC‚sBCsr"CR#"C“C"“b"C#‚#ƒBCb##‚C#b#SR"Cc’3"C33rCC"3""sSr3s"Sc’3"cc"3C2"ƒCC“ƒ#3“"ƒCC3""ƒ"ScƒCSCƒ3BSc"sc2SCbƒScsƒRSSb"sSrSC2sc"SCbsS’SCB"CcRCƒBccRSRSsCƒB"3“bCƒBCS"CƒBC#RCƒr"3S2CSB3srCƒ"3cbCsB"#ƒ33#2CR3B3S"#CRcB#c"#SR#CR#""#CbCB#CRS‚#CbS"#32c2#C’R#C2ƒ’"##R3R##‚S##RC"#cBB##R#"#3b’"CCRÓ#b3#Rr3ƒr"Sc’ÓSSÓS"SCrÓƒ’"SsRÓƒSs2ÓcSsRÓs"S#rÓ#sRSsRÓ#rSCrÓ#CR"3CrÓ3crCƒBÓ33BC’Ó3cr"#cÓ3S3‚Ó3cr#ƒ’Ó3c2"“RÓ3#bÓ332SBÓ3r"SRÓ3#s2Ó#“rcRÓ3""#’ÓCc‚#’Ó3crCÓC’"SbÓSR#bÓCƒ"3bÓS"3"ÓS3bƒ"ÓSB‚ÓS#B¢"ÒÂF–ÖU6–sc¢²…öÖ–ã¢#Â…öÖƒ¢ScRÂ•öÖ–ã¢Ó3c2Â•öÖƒ¢3c2Â†¢s#bÂó¢&Ò3“ÓS‚"c#ÓCS‚Cc’ÓSrSC’ÓC“B"ƒBÓ3BsS2Ó3“ƒBÓ#ƒ"cS"S’ƒBÓbsSS‚"SƒC‚c#’S’cbSR"#32Ó33B3“"Ó’#sbÓ3‚"RÓ##‚ƒÓ3BC2Ó#s‚"“‚ÓcBÓ#b“‚Óƒ2"rÓ’“‚ÓCBÓ#r"cr3r#BÓS’CRÓ""S‚3C#3bƒ’3Cr#“""SsR3S2S33CrSS23S2"cC‚3#rc3S2c#R3Cb"ccR3#cSB3#cc3#"cƒr33bcsB3#cƒ3#R"s2CRc“r3S’s23ƒ""cƒBCs"s2C#’c“rCS"S“2S#2ccBSBc3S#"SsbS#Sƒ‚S#2Sƒ"S#2"#“rC2Cs"S‚3ƒCcR"Rsr#r3CBcB#cB"#’Ó#cƒ"#’Ór"S2Ó#s‚#’Ós23bÓ##R"##bÓC“rƒ"Ó3sB3ÓCSB"3CrÓS#2#cRÓSB3RÓS#2"3“ÓS‚3cÓS#23sbÓS#¢Ò3SÓ3Sr"3"Ó3S33rÓ3Sb3#Ó3c2"3#RÓ3R3BÓ3C3#Ó3#r"SC2Ó#3s2Ó##"CC‚ÓS‚"c#"ÓBSsÓ‚S“bÓ""srÓ3"cSRÓBcƒrÓ""sCÓcrs3"ÓC2sCÓS2"s3Ó“bsCÓsbs3rÓƒB"Sc2Ó3#c“Ó#S‚c3BÓ3"3S’Ó3SrC“rÓ3CC#‚Ó3SB¢"ÒÂF–ÖU6–ss¢²…öÖ–ã¢#Â…öÖƒ¢S“"Â•öÖ–ã¢Ó3CRÂ•öÖƒ¢3CRÂ†¢c“Âó¢&Ò#S2ÓC“r"3‚ÓCƒR#sbÓC“r#“rÓCƒr"3cbÓCC3C‚ÓCƒ"3cÓCc‚"CƒrÓB3“Ó3#2C32Ó#"ƒ3RC2Sƒƒ"s#Cb"ƒS"C3bƒCrCbƒS"C#‚"ƒRCcrƒS"CSƒCCc"sc"CsBs“‚Csss’CsB"csBCCRs3"CsBsCcR"c2CcS"C3c#‚C#"3ƒ23cS323s’CS’3c"#C3R3R3c#C’3ƒ""ƒ‚C“Bc‚Cc’3CƒR"cbC“rƒC“Rs2C“r"32CƒBS"C“r3’C“""SC3b#"Cc’3’CS"#“R3B3c“’3#B"Cb3333B3c’3"S“23#BCc‚3S33‚"SƒR3rSƒ’3BSƒ‚3"#cRÓ#C’CS3r33‚ÓCb"#rÓCC"#C"Ó3"##2Ó3sr"#BÓCc"#bÓCC’#BÓCSb"#S2ÓC“r#BÓCƒr##ÓC“r¢"ÒÂF–ÖU6–sƒ¢²…öÖ–ã¢#Â…öÖƒ¢SBÂ•öÖ–ã¢ÓC#‚Â•öÖƒ¢C#‚Â†¢ƒSbÂó¢&Ò#cRÓcb"#ƒ’ÓcR#sBÓcb#ƒÓcb"sÓ#sC“"ÓS“"cSrÓCƒR"s#bÓC‚s#Ó##’s#rÓƒr"SƒR‚s#bÓC‚cƒrC""Ss"#rSsbBSs2#"SsbCBSs"3"SsR3‚"S“‚3S““bS“‚#C’"SƒbC2S“‚33‚S“23sb"3SbcbSS’S3Ccrcb"#32Sƒ"3rcb#sRcb"#’#32SR#’3ƒB"B’#’S2Cbs""ƒ’ÓC‚#rÓbcÓ#r"“"ÓS‚CÓs2BÓB"3rÓ3C2c2Ó#rSÓ#s’"32Ó3“3RÓ3S’32Ó3sB"#cRÓcb32ÓS#BC‚Ócb¢Ò#S‚R"#BC‚#RRcrr"“b“bRc2“bsr"“’#r“b#"“b#’"“r3ƒB##ƒS33r"3SCS#C"C#’#“rCS"Sb3cBC"CSCs"C#""S333S#23SBS33C2ÂS33#rÂS33#"Cc‚SS##cSr#"C’#"CSR3RCC"#R"#S‚R3sr3#R¢Ò3#‚ÓC3‚"S‚Ó#sb#32ÓC3bcÓ3S’"cbÓ#3’S‚Ó#cBcÓ#S""#3ÓSrsbÓ#2#"Ós’"3crÓs"#sBÓ#R3#Ó“‚"CC‚ÓC’3“bÓSbC#2ÓC’"Sc"Ó‚C“ÓC’S#‚Ós""cÓ#SS“ÓSrcÓ“’"Sc’Ó3CcÓ#ƒ‚S“RÓ3‚"3#‚ÓC3‚SÓC"CbÓC3"¢"ÒÂF–ÖU6–s“¢²…öÖ–ã¢#Â…öÖƒ¢C“BÂ•öÖ–ã¢ÓC#Â•öÖƒ¢C#Â†¢ƒC"Âó¢&Ò#3RÓcb"3cÓScB#sRÓcb3‚ÓS“2"c’Ó##’CƒrÓCƒ"ScbÓ3cb"sb#rccBÓBc“BB"s#32s‚c2s“r"s3Cbs#ss‚3‚"3ƒ’cbcS‚SrS3cb"3ScR3sbcb3cBcb"Sb#s"sSƒbSbCC"“b“‚Sb#bc’Sb"33BÓS2CBÓ2#3‚ÓS2"SCB3bC‚ÓS2CƒBÓ#B"cS"sbSƒbs‚c#"#B"c3scCRCc3’R"CcrÓ3"S“’Óc2Sc"Ó“b"#sÓCC"C"Ó3cB3SBÓC#""##RÓCC‚#SRÓCCb#3’ÓCC‚"“RÓ3RC‚ÓCC‚“‚Ó3“R"ƒ’Ó#SR“RÓ#ƒ‚“BÓ#s"s2Ó#32ƒbÓ#CbƒRÓ#32"S"Ó#C‚cRÓ#32SbÓ#3’"#’Ó3rC"Ó#s3Ó#“"C’ÓCC‚#’Ó3cCÓCR"#3RÓcbc’ÓSCCBÓcb¢Ò3CB"CB#’#cB‚“BC"#r#S‚3"##R#r#C"3r#“r#r#s3#ƒB"3cbCC’ƒB3“b#c’CC’"SrC‚CRCC’CcrC3b"S“R3C‚SCb3“"Ss"3s""cb3Rc‚33bcb3#"c’#ƒcb#“‚c2#ƒ’"3CBSSrƒBCsrB¢"ÒÂF–ÖU6–t6öÖÖöã¢²…öÖ–ã¢#Â…öÖƒ¢SƒRÂ•öÖ–ã¢Ó#“‚Â•öÖƒ¢#“BÂ†¢S“"Âó¢&ÒCCBÓCR"ƒ#’ÓCRc#bÓ3CbsCÓ#r"ƒC"#bƒC"Ó#2ƒC""ƒ#S‚ƒC"3’ƒCS‚"s“RCƒS‚ƒ"C‚"scR2sƒR#’ss2b"Cc’Ó##2c“ÓBS“bÓƒ2"3SBÓ#C"C3Ó#3R3“"Ó#C""ƒÓsr#“"Ó#C"#3RÓ##2"3RÓ“’SBÓSrCÓ3"3"ÓS’3BÓƒR3"Ós""Cr3"Ó3r3RÓb"CC’#sBƒ’c#“r#C2"Csr#s‚CS’#sbCc‚#sb"SCb#2Sr#s‚S3’#S2"SrSrSSsrS32cb"CƒRC2SrS2C“rC2ÂCƒ"C2"CcrC‚Cs‚C2Cs"CB"3sBƒ2C3‚sCbƒ"#cB‚332ƒ2#“"c"#3‚C‚#Cb“"#3‚c’"#cÓ’#3‚#’#CR"3ƒ2Ós2#ƒrÓ3’33rÓs2"C"Óc‚3“"Ós2C"Ós""c3cBS#bÓ#rSƒbS’"cC’#S"cCB“2cC’##""c3b3#‚cC’#s‚cCR3B"SBC#2cRCSs’C#’"#C"3‚C‚CR3r3ƒr"#’ÓS‚B“#’32"3Ósb#’ÓcB#’Ós"RÓ3cBC"Ó#CbS"Ó3R"3rÓC#’srÓC#CÓC#’"CCBÓCR3SÓC#’3“rÓC#¢"ÒÂF–ÖU6–t7WD6öÖÖöã¢²…öÖ–ã¢#Â…öÖƒ¢c“RÂ•öÖ–ã¢ÓcƒrÂ•öÖƒ¢cƒrÂ†¢3sBÂó¢&ÒScBÓ“ƒ’"S“RÓ“CRSƒRÓ““Sƒ’Ó“c2ÂS“’Ó“#""cRÓc#‚cÓƒ#Bc2Ós#bÂc’Ó3“’"ƒs‚Ó#SsbÓ3c2s“‚Ó3#"““bÓƒR“3"Ó#B“sbÓS2"Óc2““‚Ós‚Ós"“ƒ’ÓCbÓSb““‚ÓC’"“s‚ÓC2“ƒRÓCR“ƒ"ÓC2"“SÓS’“c‚ÓC2“S’ÓC’"s32Ó#bƒ“BÓ3"ƒRÓsr"cÓ#S’c“BÓ#3RcS"Ó#C’"cbÓ#c"Ós’cRÓ“’"cƒ#’cC"ÓrccR’"c“‚C2cƒR3bc“C"ƒs#Ss“"ƒ"ƒCc"ƒsr#“BƒsB#cRƒsr#s’"ƒ‚Cƒsr33‚ƒSR3ƒ""cƒ2CS‚ss’CC"s3CC‚"c#RCc‚ccBCc"cCBCcRÂc#RSB"c3‚“S‚c#bcc"c3bƒ"c#b“ƒ’c3‚“s’c3R“ƒ’"c2“ƒc#“ƒ’c2“ƒb"C#"ƒCS3B“CRCƒƒƒ‚"C"ƒRC"ƒ3"C2ƒ‚"C#bs2Css2C#sC2"CCRcs‚C#’c“C3Rcs‚"CsBc“CS"cs‚Cccƒ2"Sc2sSRS2sS3s3""ScBs#BScBsCScBs32"SS’Cc’Sc2c3’ScSSB"Cc"CSBS#bCc’C“BCcB""C23"3“’“’#ƒ"32Ó“BcbsCRÓ"#’ÓC‚3Ó"#’Ó3"RÓ3S#’Ó##2S"Ó#“"3S’ÓCSRsÓC#b#S‚ÓCS"SrÓC3C’ÓCSCcBÓCCbÂS3’ÓC#"ÂS3’ÓCsr"S32Ós3’S3bÓSc2S3’ÓcS"S3Óƒ#BS3Ósc‚S3Ós“R"SCbÓ“C‚S3ÓƒcRS32Ó“r"ScBÓ“ƒ’SS"Ó“c"SC2Ó“ƒ’¢ÒCÓ#ƒ‚"“2Ó“r3#‚Ó#ƒ‚#S2Ó#cB"CÓccÓcCÓ‚"SrbCÓ3RCrÓ""#S’S‚ƒ’S‚#r""C3‚#“3#R3cB#cb"S#‚3RCc‚3C“‚3R"SSB3BS3r3RSCb3B"SS2#"SSB#sBSSB#C""C#bRC“‚“’CCbcB"Cbc‚C’“’CbƒB"C#R"CbC’C#3"CsBÓ3’C3"ÓrCC‚Ó3""S2ÓC2CƒrÓC"C“‚ÓC2"SCrÓCS#BÓC2S3bÓC"ÂSC2Ó#s""CcÓ#ƒRSbÓ#s‚Cƒ‚Ó#ƒ"CÓ#ƒ‚CCBÓ#ƒrC#bÓ#ƒ‚¢Òc“B“r"cc‚#2cƒR“rcsr“’"c##bcSB#c3‚#R"c#"#“Bc#"#C"c#"#c‚"sb#c‚cS#ƒrcs‚#s‚"sCb#3Rs##cs3B#C’"sS"##"sC’#3sS"##b"sC2#2sS"#’sC’#R"c“B“rs#r#bs“r¢"ÒÂF–ÖU6–uÇW3¢²…öÖ–ã¢Â…öÖƒ¢ccÂ•öÖ–ã¢Ó3S‚Â•öÖƒ¢3S‚Â†¢sbÂó¢&ÒcRÓSb"c#’ÓC“c#BÓSbc#’ÓSr"c#‚ÓCsRc#’ÓCƒRc#‚ÓCƒ"c2Ó3c#BÓCRcbÓsB"c"Ó“bc"ÓBc"Ó“bÂcCrÓ“‚"ƒ“rÓRs3Ó“’ƒBÓ’"“CÓƒ’“’Ór“3RÓ’"“S"Ó#B“CbÓc’“S"ÓCb"“C‚’“S"ÓB“SÓ2"“"3’“C"#b“323r"c’cƒ#"C‚c’c"cb3“"c’cc‚#“"ScrCƒ‚c’C3bcRCcr"SSbSSC“‚S3SB"C“‚SSrSbS2SB"Cs‚CCbCsRSCƒCc’"CcrSCsB3C‚Cc’#C’"CcRS’CcR#CcRS’Â3s"C’"s2B#s"3bs2#B"C’2cR2Sb2"Ó32’2b"cÓCÓrbÓC""Ó3Rs2ÓC“ÓC"C2Ó"#2Ó#R3BÓ""CcBÓ“‚CCÓ“’CcBÓ“‚ÂCcBÓCR"CsrÓCSbCcBÓ#C’Cc‚Ó3S2"S#bÓSCs‚ÓCƒ‚C“ÓSr"Sƒ’ÓS2SCbÓSSc’ÓS"cRÓSbS“RÓSBcÓSb¢"ÒÂF–ÖU6–uÇW56ÖÆÃ¢²…öÖ–ã¢Â…öÖƒ¢C‚Â•öÖ–ã¢Ó“rÂ•öÖƒ¢“’Â†¢3“bÂó¢&Ò3Ó#ƒB"33Ó#3‚3#Ó#ƒB3#BÓ#SR"3C‚ÓCb3SÓsb3CÓ"3sBÓ#3SÓ#r3SbÓ#2"CƒÓrC’ÓbCCRÓr"ScbÓ’SÓrS3rÓb"c"2Ss’Órc"Ób"Scb#’c"’Sƒ"#B"S#b32SS23"S3’32"3ƒB3’Cs‚3bC3"3’"3Sbc"3c23’3SbC"Â3Sbc‚"3S’sr3S’B3S’CÂ3S’#S"3C#ƒr3S’#cB3c#ƒR"3#SR3#B#ƒr3B#s""3##‚3#Cb3#3bÂ3c’"#sR3’3C’#“R3’Â#s3’"#C#SC#3C"cr3’“bCƒC"ƒ’CC3rRC"#B3c‚CCb3r"rr#r3Â2"#rÓr2rÓ2"“Ó#"C’Ó#"sÓ#""S2Ó#"RÓ#"3rÓ#Â#sRÓ#""#“RÓC#ƒ’Ó#"#“RÓ#rÂ#“RÓC‚"#ƒ‚Ó#3R#ƒ‚Ó’#ƒrÓs"#ƒrÓ#cB#ƒ‚Ó#C2#ƒrÓ#S2"3Ó#ƒB#ƒrÓ#sR#ƒ’Ó#ƒB¢"ÒÂF–ÖU6–tÖ–çW3¢²…öÖ–ã¢Â…öÖƒ¢cc"Â•öÖ–ã¢ÓSBÂ•öÖƒ¢SRÂ†¢’Âó¢&Ò3’Ós‚"C’ÓsbC"Ós‚CRÓsb"CS"ÓsR“BÓsR#s"ÓsR"ƒcÓsbc3"ÓsRƒBÓsb"“S2Ó#“#rÓs’“S2Ócb"“C‚#r“S2Ór“S’"“Cb3r“C‚3“C‚3R"ƒ“bs’“Cc2“#’s’"Css‚ƒ#rs‚cC‚s‚ÂC"s‚"3rBs‚c’"#2ÓcbrÓ3""3’Ós‚#BÓsR3"Ósb¢"ÒÂF–ÖU6–u&Vç5&–v‡C¢²…öÖ–ã¢Â…öÖƒ¢#sBÂ•öÖ–ã¢Ós#2Â•öÖƒ¢s#RÂ†¢CC‚Âó¢&Ò3rÓ3‚"c’Ó3C‚ÓCBS’Ó3‚"ƒ‚ÓRsbÓ#rƒ"Ó#"cBÓƒƒb#Ó“sbCrÓ“32"332Ó3S#32Ós#“"ÓS3B"3“R‚3cbÓ#B3“’ÓS’"3ƒ’#CR3“"CB3“"“B"#““b3c’S##cRscb"c‚CB“’3ƒBCB"’“ƒ‚SCB3b#B"“#"r“cR“CR"#ƒS‚“bƒƒ"#S’#RCcc#3bCC’"#sÓ#cbC2#ss"#S"Ó#3’#sÓƒ"#cRÓc"C‚Óccr##‚Ó3ƒBƒ2ÓS#B"3’Ó’#ÓsƒRcbÓƒ“2"32Ó33rÓr32Ó#B"3rÓ3‚32Ó3B3RÓ3r¢"ÒÂF–ÖU6–u&Vç5&–v‡E6ÖÆÃ¢²…öÖ–ã¢Â…öÖƒ¢SBÂ•öÖ–ã¢ÓC#"Â•öÖƒ¢C#"Â†¢ƒCBÂó¢&ÒC2Óc‚"cÓS“‚C‚Óc‚S2ÓcR"rÓSƒ"ÓSs""ÓSC2"##"#2“2Ó3S#’Ósr"#2cb##RSR#b’"RS3#b#“BsBCb"CRc2“’Sc"sbSƒ‚"3c‚3’cb3Rc‚"S“‚#2c‚rc2"SCb2S“Ss"#2CSSr’CS‚""3ScbC#’ƒB3“"crC"S#S"crC‚"c2ÓC’cr"cbÓ’"3RÓCC’SÓ“"#Ó33"BÓSB#"ÓCcrBÓCƒR"rÓS#rBÓSbÓS#Â3ÓS“"C2Óc‚32Óc23rÓc‚¢"ÒÂF–ÖU6–u&Vç4ÆVgC¢²…öÖ–ã¢Â…öÖƒ¢CÂ•öÖ–ã¢Ós#‚Â•öÖƒ¢s#‚Â†¢CSbÂó¢&ÒSc"ÓC‚"Ss2ÓC2ScbÓC‚SsÓCr"SS2Ó“ƒ‚Sƒ"Ó#RScBÓB"Cs"ÓƒƒBS#rÓ“S"C“rÓ“#"#Ó3SB3cbÓsr#sRÓSC"C‚ÓbsÓ#CC‚Ó#B"cC‚C‚CRS2“b"3Rcs‚ƒ’33#C"S‚"C3“3SsSR3ƒƒ3B"CS’“SCS“#bCc“3’"C3R““RCS’“c"CS“s""3cBC‚CR3B3ƒ2C‚"3R““b3C2C‚3#R#‚"#rc#B##bƒƒsBsS2"3SbC3"’#3R"Ó3"’Ó""ƒÓc#’2Ó#CR“"ÓC3‚"3c2Ó“3b#3Ós3’#“‚Óƒ3R"S#bÓCC"Ó““RCC‚ÓC"Sc"ÓC‚S3rÓCSS"ÓC‚¢"ÒÂF–ÖU6–u&Vç4ÆVgE6ÖÆÃ¢²…öÖ–ã¢Â…öÖƒ¢s2Â•öÖ–ã¢ÓCRÂ•öÖƒ¢CBÂ†¢ƒ’Âó¢&Ò“rÓSƒ2"##"ÓSS2#"ÓSƒ"#’ÓScb"##’ÓC“r##bÓS3B##’ÓSb"#2ÓC#R##’ÓCs"##RÓCC‚""Ósrs2Ó3CB3"Ó#c""c"3s‚ÓS‚ÓC""“ƒ2cbƒ"sR3B"#RC#b‚#sSb3Sb"#C’SS"#CbCcR#S"SR"#3Sƒ"#C’Sc2#CbSƒ""“rSc2#’Sƒ"#bSsb"s3SbCBSRC#’"S#b#S’2S‚"2Ó"BÓ2rÓS‚"sbÓSS’#’Ó#sRRÓCb"“bÓSƒ2ƒÓSc’ƒbÓSƒ2¢"ÒÂæ÷FV†VDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢cBÂ•öÖ–ã¢Ó##2Â•öÖƒ¢##2Â†¢CCbÂó¢&Ò3RÓ3#"c"Ó#cbS‚Ó3‚S‚Ó#ƒ‚Âc"Ó“B"c2Sc"ÓBc2Ó3""cƒ’c2“bc2C2"C23S’##bc#cR"#’3#C3‚3’3#Â#b3#"#“"23‚3"#C‚#s‚Ó#c""bCrB#Rbƒ"BC‚bBBƒ"bB3"bb"rÓ3brÓ"rÓ#BÂrÓS""bÓSbrÓƒbbÓ#"’Ó#sRbÓ“b’Ó#3b"3RÓ3##2Ó#“bÓ3#2¢ÒƒCrÓ3B"ƒsÓ#ƒ‚ƒcÓ3RƒcrÓ3"ƒƒBÓƒrƒƒÓ#SRƒƒbÓ##""ƒsbRƒs‚ÓƒbƒsbB"ƒsr#SRƒsbcƒsb#’"ƒc‚#“ƒsr#c‚ƒs2#s’"ƒSR3Bƒcr3ƒc23B"ƒCB3ƒS"3BƒC‚3B"ƒ#"#cRƒ#R#“"ƒ#"#s‚"ƒ#B#Sƒ#"#S’ƒ#"#SR"ƒ#"sƒ#"##Rƒ#"“rÂƒ#"Ó#"ƒ3RÓ#ƒBƒ#rÓƒbƒ#RÓƒb"ƒCrÓ3Bƒ3rÓ#“Rƒ3RÓ3¢ÒsSrÓ#“"s“2Óss“bÓ#SRs“"Ó#""s“RÓC’s“RÓ3s“RÓ“"sƒb#rs“R3bs“#"ss’#Csƒb#rsƒ2##’"scb#S‚ssb#Cbssb#S‚"sc"#SbscR#S‚sc2#Sb"s3’#3bsS"#S2sC#S""s32srs3r#bs3"“r"s3r#s3r#Rs3’s2Âs3rÓr"sCÓ#"s3rÓ3‚s3’Ós"sSrÓ#“sCÓ#3sC2Ó#c¢Ò#‚Ó#c"CBÓ#S3RÓ#cBCÓ#Sb"S‚Ó#2SbÓ#3bSrÓ##"cÓ3rcÓƒcÓS‚"Sr3cÓƒSrÓ#b"S‚sbSrCRSrcÂS‚"Sb##RS‚CS‚ƒ2"3r#S2Sb#3RSB#S2Â3B#S2"’##"##S’#C""B“‚s’B3B"‚ÓS‚BC"’Ó’"rÓR‚Ós2‚Óƒ’"RÓ#rrÓ"rÓ#"‚Ó#CRRÓcrBÓ#B"#‚Ó#c‚Ó#S"#Ó#S’¢ÒCƒ‚Ó#C""c“2Ós’S“RÓ#C’cƒRÓcbÂc“2ÓSR"c“c“2Ó3bc“Ór"SCƒrcƒBƒBc#cB"CC’#S‚“bCƒ#"#B3c2##ƒ"c2"ƒbSb“b“"ƒbsb"#rÓƒ"ƒb’“"Ó3r"3Ó#B##RÓ3"#C‚Óƒ"Cƒ‚Ó#C"3SbÓ##’CRÓ#C¢ÒC“Óƒ‚"CC’ÓƒbCsrÓƒ‚CcBÓƒ‚"#ƒrÓSb3“’ÓƒR3CÓs‚"#S‚Ó32#sRÓS"#S‚ÓC‚"#ƒ"Ór#S‚Ó##s"Ó2"CS‚C23C#23“’C2"SƒBC“rC2S3r3R"c‚Ó#cbc’Ó’"S“"ÓS‚c‚Ó3c’ÓC""C“Óƒ‚Sc"Óƒ"S#‚Óƒ‚¢"ÒÂæ÷FV†VEv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3ƒÂ•öÖ–ã¢ÓƒbÂ•öÖƒ¢cRÂ†¢3SÂó¢&ÒSCrC"##2Ó#c‚SC2ÓS3crÓ#S’""Ó#32ƒÓ#sC2Ó#C‚Âc"Ó#b"Ó#r#"Ó“rÓcb"bÓ“ÓRÓB"#"C32Ó’c’s"3#r#3‚s#B#C’#3‚"SBS‚3“r#3‚Ccr#""SCrCSCB#RSC’ƒB¢Ò#C‚Ór"3ƒBÓc2#“RÓ"3CÓƒ‚"C#bÓ#2C"ÓS2CRÓC"C3R2C3"ÓBC3RÓb"C23"C3RBC#‚#B"3s23sbC’3C2s2"#s"c’#“s2#ƒ"s""#Ó3R#rS2Sr#"ÓS‚rÓC"ÓS"#RÓsRÓcRRÓs"#C‚ÓrcBÓƒ’#"Ór¢"ÒÂæ÷FV†VD†Æc¢²…öÖ–ã¢Â…öÖƒ¢33BÂ•öÖ–ã¢ÓsBÂ•öÖƒ¢sRÂ†¢3C’Âó¢&ÒCƒSb"crÓ#SCs‚ÓR33Ó#S"“BÓ#C"C2Ó#S‚Ó#C‚"’ÓCC2Ó##’#Ó“""Óc‚2ÓRÓ“"#ƒB#C’“R#r#"3B#S"#ƒ’#S#“r#S""Cƒs‚3sB#S"Cƒs"CƒSbCƒsCƒc2¢Ò#2Ó""3“’b#sBÓƒ3CÓC‚"C"rCrC"2"3“’#rC"#"C#b"3“B3s2S23S2ƒ‚"#“"“R3R“R3“R"3#r#3“RƒSR"c’Óc"“‚’c"Ó#’"cÓ“‚sbÓ“‚#‚Ó“"#2Ó"sBÓƒbÓ¢"ÒÂæ÷FV†VD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢33BÂ•öÖ–ã¢ÓcBÂ•öÖƒ¢cBÂ†¢3#‚Âó¢&Ò"Ó#32"CÓ#3b#"Ó#3R3Ó#3b"CƒB#s’Ó#3bCƒRÓC‚"C2##"CsrCCs‚“""33B#3b3ƒ"#3"3S’#3b"ÓS’ƒ#3b2S’"ÓƒRÓc‚Ósb""Ó#32ÓSr3"Ó#R¢"ÒÂæ÷FV†VE„F÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢s3Â•öÖ–ã¢Ó#cbÂ•öÖƒ¢#crÂ†¢S32Âó¢&Ò‚Ó3s2"3"Ó3c#RÓ3sb#‚Ó3cr"SÓ#ƒrCrÓ33‚SÓ3B"SÓ#S"SÓ#sbSÓ#cB"3ƒb3Ór3rC"3#cb#‚#23#3’"‚3c233#‚33"R3ƒBR3s2r3ƒBÂB3ƒB"“ƒB3c2““"3ƒB“ƒb3s2"“ƒ"3C2“ƒ"3Sb“ƒ"3C‚"“ƒ#3R“ƒ"3r“ƒ#s"““bÓ#ƒR“ƒc“ƒbÓ""’Ó3c““‚Ó3RÓ33b"‚Ó3s2Ó3cBBÓ3s2¢ÒbÓ3ƒ2"C’Ó3#‚3’Ó3crC‚Ó3S"c’SbS‚Ó#"c"Ós2"sR#"s"rs"c"s‚#s‚sb#32s‚#SR"S’3ƒ"s‚3"s23Cr"#’3#‚323s"#’3S"2Ó#’#’#’#2ƒ‚"2Ó##"rÓ“RÓSr"Ó#cRÓ#3bÓ#S""bÓ3ƒ2Ó3BbÓ3C2¢Ò“#2Ó3B"“SRÓ#C“C‚Ó#ƒ’“S"Ó#cR"“cRÓcR“c"Óƒ“cRÓ#R"“c2“cRÓCR“cRÓ#""“c"“c3r“c"s2"“S2#C“c"SB“c“r"“3’#sR“S"#S2“S"#sR"“2#3’“#B#sB“2#S‚"“2s2“B#r“2“B"“B3R“2c“2Cr"“##r“’“‚“#c2"“’Ó#‚“#Ó#b“rÓs‚"“bÓs’“bÓCr“bÓc2"“#2Ó3B“bÓ##2“2Ó#cb¢Ò#Ó3"C2Ó#s"3BÓ33‚Ó#ƒB"CrÓ#SRCRÓ#c‚CRÓ#c"s2ccÓrcb#""s2#32s2ƒBsB#’"Sr#cBs#C2s#cB"3r#3RC2#cB3‚#C’"3"#r3R##b3"#b"#C2#‚S2#B“b"RÓƒbrÓ3bRÓ"Ó#c’RÓ#RrÓ#C""#Ó3BÓ#ƒBÓ3¢Ò#Ó#3‚"3sbÓ“2#sBÓ#3’3#rÓ##b"CsÓ3BCbÓs2C3’ÓSB"S3BÓ“BC“Ó#S2Ór"csÓ“"Ss’Ó#rc#BÓc"s32Ó##bc“Ó#Bs‚Ó##‚"sCbÓ##Rs3rÓ##‚sC"Ó##b"ƒCRÓ#Bsƒ"Ó##bƒBÓ#2"ƒc‚Ó“BƒSBÓ#2ƒcRÓ#2"ƒS"Ós2ƒsÓƒ2ƒcÓs’"ccÓCsƒ’Ó#‚s#BÓƒB"cC"Ó#rcSBÓ3bcC‚Ó3""ƒcBsbrs“c2"ƒƒb3"ƒs#ƒƒb#Âƒƒb3r"ƒS"cBƒƒ2Sƒcrc"ssbsbƒ#rsƒsb"cƒRCRsCBsbsBc‚"S3CRc3‚rSƒ2sb"C23"Cƒrs2CCB"#s’sb3cBc3#Bs"##2c#S’sb##’sb"#S‚R#RC#C"#r"C3Ór3Bs3s"#b"s2Ó“b3CÓs2#S2Ó3"SrÓ#’c‚Ó#SrÓ#2"S‚Ó#RSrÓ#"SrÓ#R"ƒ2Ó#3bcbÓ##2c‚Ó#3R"#Ó#3‚“BÓ#3b#bÓ#3’¢Òsc‚Ó#r"S32ÓCcƒrÓSc’Ó“B"3#Ós2Cc"ÓƒR3“"Ó3"#cÓ“B3BÓƒB#ƒrÓ“b"#3’Ó“2#S2Ó“b#CbÓ“B"3ƒrÓ“R#“BÓSr3CÓ#R"SRÓ#C#bÓsCcRÓCRÂCƒBÓB"3S2ƒ’CC#r3“bSb"3#R3C“b33r"#“rC3#B#“r3""3C‚#“rCB#“‚CR"33b3R3cB3#BC2"S#‚ÓBCƒ’CcBC"Âs#2#"ssCs3r3sS23‚"s“"3"ss’Csƒ’C"ss‚Rs“R#"sƒ2#"SƒbÓbsBsRcS3R"SSrÓ#BSsbÓ2ScrÓ’"s#bÓCrc2ÓcbcsÓ’"sc‚Ó#rsCBÓcscRÓs2¢"ÒÂæ÷FV†VE…v†öÆS¢²…öÖ–ã¢Â…öÖƒ¢SbÂ•öÖ–ã¢ÓC2Â•öÖƒ¢CBÂ†¢#ƒrÂó¢&ÒS2Ó#b"#’Óc2rÓ#rsÓ“b"3BÓ"#C’ÓC#ƒ"Ó#""3srÓc233BÓƒ’3SbÓsb"SBÓcC#"Ó“bCc‚Ó#‚"SsbÓ“bS3BÓsBSS"Ó“b"Sƒ’Ó“2SƒÓ“bSƒRÓ“b"cƒ‚ÓsBc#RÓ“BcSrÓƒ"sÓS‚c“‚ÓssÓs2"c“bÓC2sÓSsÓCr"S2Ó’c3"Ó“‚ScrÓS"ÂCƒRB"sBCRSS’C’c3B“R"s#’cBsSs#’SÂs#’c‚"c“b“bs#bƒ2s“2"c##rcs#"cCR#r"S#‚srSƒ’#rSSr#"3s2sbCƒCC#b‚"#CbcB33B#ƒr3""#"#b#r“2cr#2"cb“""#rs"#r"“’CrS‚s2ƒRS‚"#sBBSr"#RS‚"bÓcBƒBÓC"“bÓ“‚"Ós’"Óc‚Ós"Óƒ2ÓƒÓƒ2"#bÓ#BbÓ“2"Ó#B"S2Ó#b3rÓ#bC’Ó#b¢ÒcÓsr"3sbÓ’S3Ó‚CS"Óc2ÂcBÓC2"BÓcBCrÓSB3ÓcB"ƒ"Óc“bÓcBƒ’ÓcB"#3ÓcR3rÓ#Rƒ2Ó“RÂ3Cr""3#r#b3Cb33B#"Â“b#"c2CrƒB#‚s23r"Cs2SBSBCc2"C2ƒCsbCsr"s’cbSB“BcrsBÂ3s"#rÂScbS2"c2sSƒcS“bs"c3Rcc#Bsc3RsB"c#Crc3RS2c#bSÂC#’#B"CbC’’C’2"Sc’ÓrCSbÓ3RS2ÓsR"cÓsrSƒ‚Ó3c‚ÓC2¢"ÒÂæ÷FV†VE„†Æc¢²…öÖ–ã¢Â…öÖƒ¢C#Â•öÖ–ã¢ÓCbÂ•öÖƒ¢SÂ†¢#“rÂó¢&ÒC“Ó#’"S3’Ó#rSRÓ#rS#Ó#r"cbÓ#’ScÓ#rSƒ2Ó#’"S“‚Ó“bc"Ó#2cÓ“’ÂCbÓ’ÂSC3"SCrCBSCb3RSCrC"S3bSbSCrC‚SC2S2"Cƒ‚“"S‚cbS2sb"Cb#rCs#’CCB#r"3#2ƒ3ƒ#r3CB#BÂ#cBR"#3’3‚#Sb#"#C‚3"32“rƒ“b‚#"2ƒb#2“rb“2"’SBÓsBc2"s"c’r#S’"’ÓSr#ÓCRc’Ó"ÓsrBÓc2Ócb"ÓƒÓs’Óƒ"3’Ó#2’Ó“r#"Ó#2ÂƒbÓ#2"“rÓ#"“Ó#"“2Ó#Â#2Ó#""#c"Óƒ##‚Ó#"#CbÓ“’Â3BÓ#""C“Ó#’3c2ÓsC"Ó#b¢ÒC3RÓC‚"#“Ó33s’Ó"33rÓc’Â#2Ó‚"“Ó3r#rÓ#R#"Ó3r"CRÓs2Ó3SBÓ#r"cÓs’3rÓ“‚SÓƒ‚"#3‚bƒBÓC‚#"Ób"C“’#BC2s2s"Â#Br"R3"##R#r"‚3rR3Br3r"C3"#rCr3R3‚Â#S23b"3CrS#ƒRsR3R""3scB3SBc3c2c2"C2CR3ƒ"cB3“2Sb"Cb#rC"CCb3""CR"Cb‚C"Â3rÓ"C2ÓR3C2ÓC"3s’Ós2"C3RÓC‚C#RÓRC3bÓ#R¢"ÒÂæ÷FV†VE„&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢#ƒ’Â•öÖ–ã¢ÓSbÂ•öÖƒ¢SrÂ†¢32Âó¢&Ò#2Ó##R"c’Ó#BCÓ##2SbÓ#’"3rÓ3“"ÓƒRÓSrÂ#’ÓS"3srÓ“r#cBÓ3#ÓC‚"C2Ó#3ƒBÓ#23“2Ó#ÂC‚Ó#"CbÓ“"CbÓ#rCbÓ“’ÂCbÓƒb"C2ÓC‚CbÓsC2ÓS‚"3CBÓƒ3ƒBÓ#R3crÓ"#S"Ó3"ÓSR#ƒ"Ó#’"3srSr#“rC’3C"C"#"3ƒrsC"ƒr"3“R#rC"#rC#2"3sb##b3ƒ’##23ƒ"##b"33B“"3c##b3Cb#B"#bC"#ƒ’C2#C‚“B"“bccrƒ3#"c“2ƒbsBsbƒ’"32#bS"“bC"#b"#"“’#’#b#b#B"s2B“ƒ"#"CrcbBSr"C‚rc"“‚BS""cBÓrSBS‚Ó2"Óƒ’ÓcbSRÓ#""Ó#"bÓ“rÓ#2"Ó#rÓ#2Ó#b"#2Ó##RBÓ##bBÓ##"¢"ÒÂæ÷FV†VD6—&6ÆU„F÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢C3rÂ•öÖ–ã¢Ó##Â•öÖƒ¢#’Â†¢C3’Âó¢&ÒÓ3B"CÓ#bC2Ó#sR3rÓ#3’"SRc‚C‚ÓƒSCR"S2#c’Sb#"SR#3b"323RS"#ƒrCb3B"2#c’’3rB#“"#3’#S’#C’ÂÓ“b"Ó3BÓ#3"rÓ#c‚¢ÒS“"Ó3r"c#Ó##c’Ó#ƒrc#Ó#S2"c#"Ó#c#"Óƒrc#"ÓSB"c#RÓ#c#"Óƒ‚c#"ÓSR"c#’c#‚#c#’c"c#‚##c#’Cc#‚ƒ"c‚#S2c#‚#3"c#R#C2"c‚#sRc2#S’cb#sB"c"#s"cb#sRc2#sR"SsR#C’S“#c’SsR#cbÂSsR#Cb"Ss2##"SsR#3’Ss2#3ÂSs2ÓS"S“"Ó3rSsRÓ3rSsÓ##R¢Òs’Ó#ƒR"BÓb“bÓ#c’Ó3"rÓc2BÓ#BBÓCR"#C’Ó#C"#BÓScbÓ#""3#BÓ#Sb#sRÓ#S"3Ó#Sb"SBÓ3rCbÓ#SbCs‚Ó#’"SRÓ#cRSBÓƒSRÓ##""S2Ó#ƒ"SRÓ#c’SÓ#sR"S32Ó#C‚S#bÓ#s"S#‚Ó#c"SCÓsBS3’Ó##2SCÓ“’ÂSCÓ#r"SS2#rSCbÓbSC’“R"SC2#3"SS2#bSSB#3""S‚#rS3#32S‚##""S‚S#srSC‚ÂS“""33#bCƒ‚sBC###2"3#R3##b3#b"#"cR#"#BSc2"B’rCbB#r"RsRB3"RS2"#C‚RSr’##‚"sb#bs‚#C"sb##RÂsb“"sRÓ#bsbS"sb2"c’Óƒ’s"ÓƒcbÓ3B"s’Ó#ƒRsÓ#’sbÓ#C’¢Ò3rB"#’’#ƒRC#S"sRÂ#’#"33S2#C‚C#ƒ’S"C#3r3cS23“Cr"CCb#C3R3CC"#rÂC3b‚Â3#‚Ór¢Ò#RÓ3"#bÓ#RÓ#"#RÓB"#’ÓCR#rÓƒ"#’Óc2"“r“B#’2#2C’Â“r“R"“’“B“’“R“’“BÂ3Ó#r"#32Ó‚#ƒRÓSR#S’Óƒ¢ÒCC"ÓC"C3"Ó#"CCÓ3BC3bÓ#‚Â3CBÓ#bÂC#bS‚ÂCCRƒ"CCBsRCCRs‚CCBsb"C#‚Ó2C32CbC#‚b"CCbÓBC#‚ÓCRC32ÓsR"CS"Ó#"CC’ÓCS"Ór"CC"ÓCCS"Ó3CC‚Ó3r¢Ò3#2Ó“"#s"Óƒ3RÓƒr#ƒ‚ÓƒB"#rÓS‚#3’Ós2##RÓc‚Â3#rÓCR"33ÓC‚3#‚ÓCb3#‚ÓC‚"C3"ÓS3c2Óƒ"3“2Ó#"3#2Ó“CÓsB3cBÓƒ’¢"ÒÂæ÷FV†VD6—&6ÆU…v†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3#2Â•öÖ–ã¢Ó“Â•öÖƒ¢ƒBÂ†¢3sBÂó¢&ÒSbÓ#S‚"#CÓ#sBƒBÓ#c‚#2Ó#sB"CSRÓ3CrÓ#sBCCÓ#""CcR’Cc"ÓcCcRÓ#""CcBsCcR3bCcRS""#Cb#cRCSR“B3s#sB"#b#cB#3b#cR##b#cB""“B"#SCR#2"22cbC"BÓSRÓ2Ó3""SbÓ#S‚BÓSBcÓ##"¢Ò#CR"#32#2#C"B#3‚’"#CB“bcRS‚BÂ’SB"#C’“"Sbs’#"“""3SsB#ƒB“"3rƒb"3ƒSB3cbc‚3sbc2"3s’S23ƒSB3ƒS2"3c’C3sbC‚3s"CR"#CR3#r“‚#ƒrS2¢ÒRÓ3"‚Ó“brÓ#rÓ"#Ó#r#Ós2#ÓS"“‚#B##BRsR"“b#r“b#R“‚#R"“’#R“‚#r“‚#R"##RÓ"Cs’ƒ32Â3‚ÓR"RÓ33ÓB#"Ó#¢Ò3sbÓC2"3c2Ó#3sBÓ3B3c’Ó#‚"#cRÓ"33ÓƒR#“‚ÓC‚Â3SrƒR"3s’3cB“B3s""3sr"3s’‚3srR"3S’B3cBs3S’3r"3ƒ"Ó“’3S’Ó3"3cbÓcb"3ƒrÓ#3ƒBÓ‚3ƒbÓR"3sbÓC23ƒrÓ33ƒ"Ó3R¢Ò#3’Ó“r"ƒÓƒr##Ó“B#Ó“""#ÓcCRÓsr#‚Ós2"#C2Ó32cÓ‚#2ÓsRÂ#C‚Ó3b"3cBÓS2#ƒRÓsR3#Ó‚"#3’Ó“r3#rÓƒ#ƒrÓ“r¢"ÒÂæ÷FV†VD6—&6ÆU„†Æc¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Ós’Â•öÖƒ¢s’Â†¢3S‚Âó¢&Ò#3"Ó#S‚"C3RÓ“B3#‚Ó#S‚C"Ó“b"CCRbCCBÓcCCRÓ#r"CCBc’CCR#rCCRC‚"#S‚#S‚C3’s3sB#S‚Â#3#S‚Â#r#Sb"Br#C‚CR#"""BsRC2""Óƒ"Ó#BÓS"CBÓ#C"#rÓcc’Ó#""#3"Ó#S‚sBÓ#S"#2Ó#S‚¢Ò“"c"RCcbƒ‚CRÂ‚S"##bƒ’Cs2ƒbƒ’"#S2ƒb#3bƒ’#CRƒr"3Rƒ#sƒ2#ƒ‚ƒ2"“"c#c‚C##’¢ÒSbÓs‚"CRbC2ÓSbCRÓ#2"cRƒBC’3’SCR"ƒR#s"“bs‚r"“R#Bƒ‚#B“"#r"s3’#“RCRc‚¢Ò3cÓ3""3C‚Ó"3S’Ó#B3S2Ó‚Â3ÓS‚Â3ƒr3r"Cc23“rC‚CRSb"C2#bC"S"C2C"3cÓ3"C2ÓC"3“2Ó“R¢Ò#3"Óƒ2"ƒBÓsr#rÓƒ2#"ÓƒÂ#ƒÓs‚"3C‚ÓC23Ó3#2Ó#""#3"Óƒ23‚Óc‚#s’Óƒ2¢"ÒÂæ÷FV†VD6—&6ÆUƒ¢²…öÖ–ã¢Â…öÖƒ¢3CBÂ•öÖ–ã¢Ós’Â•öÖƒ¢sRÂ†¢3SBÂó¢&Ò“’Ó#"#3bÓ#S‚3rÓ#C"ƒbÓ#S‚"C‚Óƒ23RÓ#S‚3sBÓ#3"C“R32CsRÓ#C“RÓC‚"C“BcbC“RCRC“BSR"3"#S"Cƒrƒ2CR#Sb"ƒ#C2#c"#C’##"#C‚"Cbs#‚#3bs’#’"’B#rs2"“’Ó#Óc‚3RÓSb¢Ò#CRC"Â#BSb"#sbCRcbss2"33rƒ2#CRƒ#“ƒB"3srsb3Sƒ23cBƒ"#CRC"3323#ƒ‚ƒb¢Ò3“"Ó“’Â#ƒR2ÂC#"C‚SBC’3C‚C"CcRSCC‚3CcR“B"CRÓ"Cc"ÓrC3’Ós2¢Òƒ’Ó#"C‚SbÓƒ"C‚ÓC""ƒ’"C‚3RS’sb"’“b"‚Â#rÂƒrÓr"ƒ’Ó#SÓS2#RÓƒ"¢ÒsbÓƒ2"#rÓc2S‚Ós’CÓsÂ#S"Ó3"Â3s"ÓCB"#32Óƒ’33BÓs2#ƒRÓƒ’"sbÓƒ2#RÓƒ’“bÓƒr¢"ÒÂæ÷FV†VD6—&6ÆVDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢cs"Â•öÖ–ã¢Ó#“Â•öÖƒ¢#“Â†¢Sƒ"Âó¢&Ò#rÓC’"C2Ó3c’3rÓC2C2Ó3ƒr"C’Óƒ"CRÓ#s"C’Ósr"S3sSc’S#’"3C’S3ƒ’SC’"r3c’rC’r3ƒ’"Ó#ƒBBSÓcb"bÓC‚Ó3#‚Ó3s2¢Ò“CRÓ3sB"“c‚Ó#ƒ"“c2Ó3C2“c‚Ó3""“cbÓ#CR“c‚Ó#c’“c‚Ó#S‚"“S‚ÓCR“S’Ós’“c"Ó"“C‚#c"“C’Sb“S"c"“3b3sr“Cb3“Cb3C"“#"3“’“323ƒb“323“’Â“’3“r"ƒ“r3sB“’3“bƒ“’3ƒ’"ƒ“B3‚ƒ“r3S2ƒ“233"“B#ƒ“’#Cb“2ƒ2"“2Ó“rC2“’Ó3R"“#rÓ#“r“bÓs2“’Ó#3R"“CRÓ3sB“3Ó3#“#rÓ3Cr¢Ò“RÓ3Cr"#Ó#“"RÓ3#RrÓ3"#BÓ##2#"Ó#c’#BÓ#Cb"#"ÓC#BÓ“b#"Óc‚"#ÓƒR#Ó#"#ÓB"Cc"Ó#“rsÓ#’3Ó#“r"s#rÓ#’SC2Ó#“Bc3’Ó#s"ƒ#‚Ó‚ss2Ó“ƒ‚ÓSr"ƒC"Ó#c‚ƒ3Óc‚ƒ3BÓ#’"ƒSÓ#ƒ‚ƒCBÓ#sRƒCÓ#ƒr"ƒcRÓ#s"ƒcÓ#ƒ’ƒc2Ó#s’"ƒs2Ó##RƒsÓ#Sbƒs2Ó#C"ƒs2Ósƒs2Ó#rƒsÓ“"ƒS‚“bƒc‚ÓC‚ƒc2sR"ƒC‚#“RƒSr##’ƒSB#c""ƒC3RƒC‚3ƒS3RÂƒ3r3R"ƒb#“Rƒ#r3Bƒb3r"ƒ’#bƒR#c‚ƒ‚#C2"ƒR"ƒ"s’ƒBC"cs"#“Rsƒsbs32#C"S3sc#3CScb3s"C3b3cCƒ3sCS’3cr"#“R#ƒ‚3#ƒ2#32Â##Sb"R#ƒr##cb‚#sb"B3R"#“"R3RÂ3R"ƒ"#ƒB“3Bƒ"#“r"sb#bƒ#c"sb#3’"ƒBÓ#S2s‚S’s’Ó“b"“RÓ3CrƒBÓ#ƒ"ƒ’Ó3¢ÒsƒÓ32"ss’Ó#BsƒÓ3ss’Ó#r"sB“"scb#"sC2c""SCBs2cSR#‚S“’Cr"C#bC“r“BCC‚#B"3r“23c’#b33‚#""#"‚#cBƒ##bS2"#3Rc‚#"3R##"S"SR33r3"#c"3“b3""S#233‚S33rSr33‚"c#ƒ‚SS’33‚Sƒb3""sc2c"cs‚##Rs32S"sƒÓ32ssb#bsƒ"ÓB¢ÒC3RÓƒ‚"33rÓ#23ƒrÓƒ‚3SBÓcR"332b33BÓB332Ób"3cbƒb3323R3CBcb"CSb#"3“C#2#"c"#rSr#"Sƒ"ƒ‚"cbcR’cb"SsRÓC’cbÓ#S“bÓ3b"C3RÓƒ‚S3ÓsbCƒÓƒ"¢ÒCCÓ#c’"“BÓ“b3#rÓ#c"#C’Ó“B"crsbÓc"crÓ3"srS’cr#"sC""sB3’sbS"sBCb"#cbÓBsBÓ#r#Ós2"SÓS3CbÓC‚C3RÓCBÂSS"ÓS"sCÓBcbÓCRcƒ2ÓC"ssbÓcbsSbÓ“Bsc’Óƒ"sÓsBscbÓRsCÓC"CCÓ#c’c3"Ó#3"S32Ó#c‚¢"ÒÂæ÷FV†VD6—&6ÆVEv†öÆS¢²…öÖ–ã¢ÓSÂ…öÖƒ¢Cs"Â•öÖ–ã¢Ó#3Â•öÖƒ¢#3"Â†¢Cc2Âó¢&Ò#ƒ’Ó332"SS2Ó#SR3sÓ33CcRÓ3r"cƒÓc"c3RÓ#bcƒÓ3‚"cc"#"cƒÓ3bcsBÓr"S#S’c#b"Ss2“2"3#r33BCC‚3B3“233B"#cB3#R3r33B#ƒr33"ÓS’C’#ƒBB“2"Ós"Ó’Óc‚#bÓs"B"#ƒ’Ó332Ós"Ó“"ƒBÓ33B¢Òc‚Óc’"cRÓccbÓcbcbÓc2"S3SbS“"ÓBSs#b"3s"3rCƒ"“"C#R"##‚s3#BS‚#sRc‚"3BSr“bscbcb"#’ƒ"“CRS2r"c3"3r“’C’R"3323#‚##b##2#sb"3S3"33‚33CB3""C3‚#S"3ƒb3"C2#sb"S“#bSRƒ’ScR"c‚Óc’c2Óc‚ÓC¢Ò#c"Ó#B"cBÓS’#RÓ#BƒÓ"cÓ3"cÓScÓC""“2ScÓ2s3"#ƒBƒb#rsR#SƒR"C#’Ó’3CBƒbC’S""C32Ó3bC3"ÓrC32Ó#b"C"ÓƒRC32ÓSbC#2Ós""#c"Ó#B3SrÓ"3rÓ‚¢Ò#c‚Ó3R"#"Ó3"SBÓ#“‚sbÓ#3"ÓbÓ322Ó“‚ÓbÓcR"2#2ÓbÓBÓ2b"2b"“BÓCÓc23rÓ’"33‚Óƒrs2ÓƒB#cÓƒÂ3s’Óƒr"ScbÓCCCBÓƒSÓsr"c"Ó"Sƒ"Ó3S“RÓr"S#bÓ#S“"ÓCScrÓsb"#c‚Ó3RCS’Ó#c‚3cÓ3B¢"ÒÂæ÷FV†VD6—&6ÆVD†Æc¢²…öÖ–ã¢ÓSÂ…öÖƒ¢3“2Â•öÖ–ã¢ÓsRÂ•öÖƒ¢sRÂ†¢3SÂó¢&ÒSC3’"C‚ƒrS2“BCcBC‚"#S’#S"3Sb##23#S""3R“"c#S"“R##’"Óc‚SÓrcÓS2""Ós"2Ós3rÓs"#B"c’Ó#BÓs"Ós’ÓÓc"#CbÓ#S"#RÓ#3‚ƒbÓ#S""SÓcB33bÓ#S"C#bÓ#’"ScbÓC"SC2Ó3"ScbÓƒ‚"SC3’ScbÓBSSrB¢Ò’ÓC"""Óc‚ÓSÓS’"Órb2ÓCbÓBÓ#""3ƒ’“‚SRS2"#C2##cr#b#B#R"#c##"#C’##"#SR##""3src3‚##"3Cƒ’"C3Rƒ’C"CC#r"C3“"C32ƒ’C3"“"3Cb#C""3s"r"#S2C23B3R#ƒ"C2"ƒRs’“2C23‚R"’ÓC"CRS"2¢Ò3Sb3’"3C23Sb#B3S""#bÓ3BÓCb#S’ÓƒB"ƒÓ‚“bÓRƒ’Ó‚"SbÓsc2Ó‚SBÓ""#3‚3RcBÓ#"“’’"3#Bcb#cBS"#“BS’"3Sb3’3C‚s3Sbc"¢ÒCƒ‚Ós‚"3“"ÓsbCsÓ#RC32ÓSB"#CbÓ##R3CbÓ##“rÓ#r"#3Ó##b#CÓ##b#3RÓ##b"SrÓ#B#2Ó##bƒÓ#R"s‚ÓSB#‚Ó“ÓsB"#3"ÓƒB#‚ÓsƒÓƒB"3CBÓc#c’ÓƒB3rÓs’"C“Ó3’CRÓ3RCSRÓ“B"SÓ#2C“RÓ32C“rÓ#’"Cƒ‚Ós‚SÓCC“BÓS’¢"ÒÂæ÷FV†VD6—&6ÆVD&Æ6³¢²…öÖ–ã¢ÓsÂ…öÖƒ¢3#bÂ•öÖ–ã¢Óc‚Â•öÖƒ¢“"Â†¢3cÂó¢&ÒsbÓ#3’"“Ó#C"ƒÓ#CƒbÓ#C"#c"Ó#3"#2Ó#C"#3‚Ó#3R"Cc’Ó’3ƒBÓ##RCc’Ó3"Ccr#"Cc’ÓbCc‚’"3ƒ2“BCSRƒbC3bS"ƒ2#sb3R#C’#S#sR"3"#3b3B#sbƒR#cB"Ó“Bƒ‚Ó3#rÓsRc"Ó3Ó“‚c’ÓC’"sbÓ#3’ÓÓr’Ó#S¢ÒsrÓ#""Ó3Ó#rƒÓ#2Ó2Ó3"Ó32rÓ32Ó2Ó322"#r##bÓ32Bƒr"“B#3’S#32s2#3‚"3#2#3"#3’#cb##b"3cB3B33ƒB3Sc"#32ƒ3Cc#s’ƒ"“"s#bƒ#"s’"2r3Cbƒb"2ÓC‚bÓr2Ó32"cÓR2Ós’#Ó"#2Ó3RRÓ3SÓ3‚"##’Ó3‚#"Ó3r##Ó3r"#“RÓ#"#SÓ3‚#sBÓ3R"CÓ3233rÓ“’3s2Ós"##‚Ó#b3“2Ó#R33Ó“""srÓ#"#’Ó#’“"Ó#2¢"ÒÂæ÷FV†VDF÷V&ÆUv†öÆU7V&S¢²…öÖ–ã¢Â…öÖƒ¢CsBÂ•öÖ–ã¢Ó#’Â•öÖƒ¢#Â†¢C#Âó¢&ÒcC‚Ó3"cc‚Ó#ƒrcS‚Ó3BccRÓ#“R"cƒ2Ó#’cs‚Ó#c"cƒ2Ó#3R"csr#S‚cƒÓSRcs‚""cs"#ƒBcsr#cbcsr#sb"cc3Bcs#“cs"3BÂcS‚3B"c3R#s’cCr3c3R#“r"c#’#Cc3R#cbc#’#S"Âc#’#3b"c3##Rc#’#3"c3##‚"Sƒ2“Bc3“rc“BÂS#‚“B"#R#r3“2“B#S’#""ƒ’#rB#’#b"c2#s’#rs#r"S"##’SR#2S"##"SR#S‚S"#3‚SR#C‚"S2#cbSR#cSR#cB"3b#“‚C‚#sbS2#“‚Â3R#“‚"B#cBB#“‚r#ƒB"ƒr#3‚#2"BSC22“b"bÓb3b"BÓ3bÓSBÓ“""Ó#c‚BÓsbbÓ##""’Ó#ƒr2Ó#sRÓ#ƒB"3RÓ#sR#bÓ#ƒ‚3Ó#ƒ"S"Ó##SÓ#cC‚Ó#3’"sRÓ“’SRÓ#bS‚Ó“’ÂCÓ“rÂ#sBÓ“rÂc3BÓ“r"c3’Ó#ƒc3RÓ#’c3bÓ#S"cC‚Ó3cCÓ#ƒ‚c3‚Ó3¢Òs"Ócb"SRÓSbS’Óc’SRÓcRÂSRÓS"S2S2SRÓbSR#"c’s2S2c’cs"Âs’s""33cRc2cb#Cbc2ÂS“"cR"c3BƒcbcRc‚s"c3RÓ3c3B3’c3Rb"cRÓS‚c3RÓC’c#‚ÓS‚"CSÓcSS2ÓcS2Óc"#’ÓS’3s2Óc#“RÓS’ÂcbÓS’"s"Ócb3BÓS’BÓc¢"ÒÂæ÷FV†VE7V&Uv†—FS¢²…öÖ–ã¢Â…öÖƒ¢3SÂ•öÖ–ã¢Ó3Â•öÖƒ¢3Â†¢#c"Âó¢&ÒCc‚Óƒ’"CƒRÓƒrCsBÓƒ’CƒÓƒ’"SÓsbC“RÓƒrSÓƒ2"C“‚Óc‚SÓsBC“‚Ós"C“rÓcbC“‚ÓcrC“rÓcrÂC“‚ÓcB"SBÓSBS2Óc2SBÓS‚"S2Ó3‚SBÓSS2ÓCBÂS2Ó3RÂS2Ó“B"C“"cbSÓCRC“B"Cƒ‚3RC“"ƒ’Cƒ‚""CƒBSCƒ‚CCƒRCR"Cƒ"SBCƒ"SCƒ"S2"C#’ƒ’Cs"srCSbƒ’"S2ƒB3Bƒbs’ƒbÂ3’ƒB"32ƒ3bƒ23Rƒ2""c#ƒ"sr"Ó’’sBÓ’"’Ó3rÓ#RrÓ3B"#2ÓS’ÓC#ÓCR"ƒRÓƒr3rÓs2SRÓƒr"Cc‚Óƒ’#"Óƒr3CÓƒr¢Ò#CbÓ#RÂc2Ó#R"cbÓcRÓ#"cbÓr"s2s"c’ÓSsÂs23"ƒ‚#‚s‚#‚ƒ"#‚"C‚3‚3#‚3"#s#‚“3#3#‚Â#s3ÂC#3"C#‚#C#R“"C#RSbÂC3bÓ#rÂ#CbÓ#r¢"ÒÂæ÷FV†VE7V&T&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3C"Â•öÖ–ã¢Ó3Â•öÖƒ¢3"Â†¢#c"Âó¢&Ò#r“"C3’ƒb3B“3s"“"CcrƒCC‚ƒBCS‚ƒ2"C“"CRCƒBsbC“"cr"C“Ó#BC“SbC“Ó32"Cƒ‚ÓCC“Ó3Cƒ‚Ó3R"CSbÓsCƒ‚Óc2Cs‚Óc‚"‚Óƒ23CBÓsb#3Óƒ"#’ÓƒBƒ’Óƒ2cÓ“""ÓC‚BÓƒÓc‚"#’Óƒ’Ó3ÂSb"3b“2ƒrB“"#r“"“"c‚“¢"ÒÂæ÷FV†VEG&–ævÆTF÷väF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢SÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#2Â†¢C#bÂó¢&ÒbÓ3r"3Ó#ƒ’#bÓ3r#’Ó#“r"C2Ó#3b3bÓ#s"C"Ó#S2ÂcR#’"S’#ƒRc"#Cc’#cB"Cb3rSR#“BS‚3rÂC23r"’#s’33B##“R"2ƒBr#C‚B#b"Ó#R’ƒrÓ#2"Óc2Ó3‚ÓS"bÓ#ƒrÓ#BBÓ#CR"bÓ3rbÓ#“RrÓ3R¢ÒsrÓ#“B"s3BÓ#2s32Ó#ss3BÓ#C""s#’#CRs32Ócs3“""s’#ƒRs#’#S’s#B#s""sr#“‚sb#“sB#“‚Âs2#“‚"cƒR#ƒBc“b#“rcƒr#“""cƒ2#S2cƒ2#sBcƒ2#cB"c“ÓƒcƒR‚cƒRÓ3b"srÓ#“Bc“2Ó#rc“Ó#Sb¢Ò‚Ó#3‚"#RÓ#2#RÓ#3‚#Ó#b"#rÓ“#rÓ“’#rÓ“B"#Ó3‚#rÓs2#ÓSbÂ#Ócb"Bcr#"‚ƒ’Â‚c"3BÓS2ƒBS‚#C‚ÓC‚"3SÓƒB3#rÓs233‚ÓƒB"3ƒrÓSB3cÓƒB3sBÓsB"Scr‚CC’Óc‚S‚#"c#b“2Sƒ‚3rc‚cB"cRÓ3"c#"ƒRc’Ó#BÂcRÓcb"c’Ó#rcRÓƒcRÓ“B"c3‚Ó##bc#"Ó#rc#’Ó##R"cSÓ#’cC‚Ó##bcC’Ó#b"cS‚ÓsrcSRÓ“’cS‚ÓƒrÂcS‚Ós"ccrC’cSRÓ“‚ccrÓ#2"ccRƒ‚ccrc"ccrsR"ccR##ccR3Rccrs’"cC#cRccB#3‚cc#cR"c#b#C2c#’#cRc#b#SR"c#‚##"c#b#3bc#‚##‚"c"##Rc#B##2c’##R"3ƒB##2S3r##2Cc##2Â3ƒB##RÂs##R"3#RSr##RCB##"""##"#r#b"ƒ‚#cb##R‚#C’"sR#3’sb#S’sR#C’"s2CrsR#rs2s’"ƒ"Óƒ’s23Rs’Ós‚"ƒBÓ#2ƒ"Ó“Bƒ"Ó“’"‚Ó#3‚ƒbÓ#’“Ó#3‚¢Ò3cÓs’"#“Rs‚33bÓ#b3B#b"#ƒBS#ƒr#ƒB#R"3sr#ƒBs#“sr"C’sb3Cbsb3ƒ2sBÂC#2sb"CCRS2CCsbCCRc‚ÂCCRCr"3cÓs’CC"cRCRÓ¢"ÒÂæ÷FV†VEG&–ævÆTF÷våv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3cbÂ•öÖ–ã¢ÓCRÂ•öÖƒ¢3‚Â†¢#ƒ2Âó¢&Ò#C"Ó#’"#s’Óƒ#S2Ó#’#cbÓ#"CS’ƒB3CÓ“"CÓB"S#sCƒ"SC"S#rƒ’S#BsrS#rƒ2"SB“’S#r“bS#“’ÂSR“’"#2“CR“’32“b"c’ƒs2"3RSB2CR"#bÓsrsb3"CÓs2"#C"Ó#’#’Ó“’#3Ó#’¢Ò#S2ÓR"ƒrS"##‚ÓS"#b"sb#rs’sbsb"“rSsbCBƒSÂ#"S"#SbS##S#3‚S"3S#sRS#“BS"33r#‚33S33rCBÂ33r#""#S2ÓR33B3’3rÓ3R¢"ÒÂæ÷FV†VEG&–ævÆTF÷vä†Æc¢²…öÖ–ã¢Â…öÖƒ¢3CÂ•öÖ–ã¢ÓS’Â•öÖƒ¢S’Â†¢3‚Âó¢&Ò#cbÓ##’"#ƒ"Ó#R#sBÓ##’#s‚Ó##R"CƒrS23SÓ“"C‚3"C“sC“S‚C“cB"Cƒƒ’C“srCƒrƒ2"C#R#RCcB#"CC‚#2"32##b#“r#rc‚##""2##’#’##2#"##’"##"’##’B##‚"BƒBÓB#rr“b"#ÓsbƒcRCRÓSb"#S2Ó##R##"Ó“B#3Ó#2"#cbÓ##’#S’Ó##b#cBÓ##‚¢Ò3B#""CrC23‚#rC3r"#bc2sBs’s’#r"#2s#’cb#"crÂ3Ccr"“2ÓsR#ƒrƒ’#S"“Óƒ"“"Ósb“Ós’¢"ÒÂæ÷FV†VEG&–ævÆTF÷vä&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3CbÂ•öÖ–ã¢ÓC’Â•öÖƒ¢C’Â†¢#“‚Âó¢&Ò##’Ó#R"#S’Ó#"#3‚Ó#R#C‚Ó#"#ƒBÓs2#c’Ó“B#s‚ÓƒBÂCƒ"s2"C“‚#’Cƒ‚ƒBC“‚“B"Cƒ#RC“"#RCƒr#R"c2#23C2#R#2#2""“rCR#2#’#b"ƒB“2ƒr"2c‚srs2"2Sbc2’SbÂ“bÓƒ’"##’Ó#R#bÓ#b#bÓ#R¢"ÒÂæ÷FV†VEG&–ævÆUWF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢SÂ•öÖ–ã¢Ó#2Â•öÖƒ¢#2Â†¢C#bÂó¢&ÒbÓ3r"3Ó#ƒ’#bÓ3r#’Ó#“r"C2Ó#3b3bÓ#s"C"Ó#S2ÂcR#’"S’#ƒRc"#Cc’#cB"Cb3rSR#“BS‚3rÂC23r"’#s’33B##“R"2ƒBr#C‚B#b"Ó#R’ƒrÓ#2"Óc2Ó3‚ÓS"bÓ#ƒrÓ#BBÓ#CR"bÓ3rbÓ#“RrÓ3R¢ÒsrÓ#“‚"s3BÓ#rs32Ó#sRs3BÓ#Cb"s#’#Cs32ÓcRs3ƒ‚"s’#ƒs#’#SRs#B#c‚"sr#“Bsb#ƒrsB#“BÂs2#“B"cƒR#s’c“b#“"cƒr#ƒ‚"cƒ2#C’cƒ2#c’cƒ2#S’"c“ÓƒbcƒRBcƒRÓC"srÓ#“‚c“2Ó##"c“Ó#c¢Òƒ‚Ó#cb""Ó#‚Ó#C’Ó##R"3Ó#RrÓ#b#"Ó#"sÓ##RCBÓ##"SrÓ##RÂ3ƒBÓ##RÂ3ƒBÓ##2"c"Ó##RCcÓ##2S3rÓ##2"c#‚Ó##"c’Ó##Rc#BÓ##2"cCÓ#cRc#‚Ó#3‚c#"Ó#cR"ccRÓ##ccÓ#cRccBÓ#3‚"ccRÓƒ‚ccrÓs’ccRÓ3R"ccrÓC’ccrÓsRccrÓc""cS‚sccr#2cSR“‚"cS#’ccƒBcSR“r"c3‚##bcC’#bcC‚##b"c’#rc#’##Rc#"#r"cRcbcR“BcRƒÂcR3""c#bÓ“2c’#Bc#"ÓƒR"ScrÓ‚c‚ÓcBSƒ‚Ó3r"3ƒrSBS‚Ó#CC’c‚"3SƒB3sBsB3cƒB"3BS233‚ƒB3#rs2"‚Óc#C‚C‚ƒBÓS‚ÂBÓcr"#cb‚Óƒ’#Ó"Â#3‚"#r“#Sb#rs2"#R#2#r“B#r“’"‚#3‚##b#R#3‚"ƒB#2“#3‚ƒb#’"ƒ"ƒ’ƒ"“’ƒ"“B"s2ÓCrs’s‚s2Ó3R"sRÓ#3’s2Ós’sRÓ#r"ƒ‚Ó#cbsRÓ#C’sbÓ#S’¢Ò3Ósr"#ƒBÓS#“Ósr#ƒBÓs"#“RÓs‚#ƒBÓ#R#ƒrÓ"3cs’3BÓ#b33b#b"CCRÓCrCRCC"ÓcR"C#2ÓsbCCbÓcbCC"ÓsbÂC’Ósb"3Ósr3ƒ2ÓsB3CbÓsb¢"ÒÂæ÷FV†VEG&–ævÆUWv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢3cbÂ•öÖ–ã¢ÓCRÂ•öÖƒ¢3‚Â†¢#ƒ2Âó¢&ÒSBÓ#’"S#rÓ“’S#Ó#’S#rÓ#b"S#ÓƒS#rÓ“2S#BÓƒr"CS’Ó“BSÓSCƒÓ#""#s’sCÓb3Cƒ""#C"“’#cb“#S2“’"#bcr#3“’#’ƒ’"ÓCRCc2sbÓC""Ós2ÓSbÓcB"#2Ó#Óƒ2’Ó“""SRÓ#’32Ó#bCRÓ#’¢Ò#"Óc"sbÓ3rƒ2Óc2sbÓSb"ƒrÓc"sbÓs’Óƒb"#S2“R#bÓ##‚C""33rÓ3"3r#B33BÓC’"3Óc33‚ÓS233BÓc"#SbÓc#“BÓc#sRÓc"#"Óc#3‚Óc##Óc¢"ÒÂæ÷FV†VEG&–ævÆUW†Æc¢²…öÖ–ã¢Â…öÖƒ¢3CÂ•öÖ–ã¢ÓS’Â•öÖƒ¢S’Â†¢3‚Âó¢&ÒCS‚Ó##b"Cs‚Ó##’Cc"Ó##2Cc’Ó##’"C“Ó##"Cƒ"Ó##’CƒrÓ##‚"CsrÓƒBC“RÓ#rCƒBÓ“b"#ƒsbCÓcR3CbSb"#3‚##R#c’“B#c#2"##R##’#3"##b##‚##‚"#’#R#r##’#2##R"BÓS2C“"s2Ó3"ÓsÓS‚ÓcB""Óƒ’ÓsrBÓƒ2"cbÓ#R#rÓ#"C2Ó#2"CS‚Ó##b“BÓ#r3#2Ó##"¢ÒSÓcr"#“‚sR#BÓƒ’#CÓ"3ƒ"3sb3s’Â3SrÓ#""3CBÓC23S2Ó#r3SÓ3r"#ƒRÓc23rÓs’3"Ó#r"#s‚Ós#ƒ"Ócb#s’Ócr¢"ÒÂæ÷FV†VEG&–ævÆUW&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3CbÂ•öÖ–ã¢ÓC’Â•öÖƒ¢C’Â†¢#“‚Âó¢&ÒCƒÓ#R"C“‚Ó#’CƒrÓ#RC“"Ó#R"Cƒ"Ós2C“‚Ó“BCƒ‚ÓƒBÂ#ƒBs2"#S’#"#s‚ƒB#c’“B"##’#R#C‚##3‚#R"“bƒ’#b#R#b#bÂ2ÓS"2Óc‚’ÓSbbÓc2"ÓƒÓs2Ósr""Ó“rÓƒrBÓ“2"c2Ó#2#’Ó#bCRÓ#2"CƒÓ#R#2Ó#23C2Ó#R¢"ÒÂæ÷FV†VE6Æ6†VDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢c“rÂ•öÖ–ã¢Ó#“Â•öÖƒ¢#“Â†¢SƒÂó¢&Ò#ÓC‚"C"Ó3sbCÓC‚3rÓ3“""C2Ó3SbCRÓ3sC2Ó3c2ÂC2Ó3C‚"SÓ“rC2Ó#“‚C’Ó#C‚"s‚3rS‚Ó#Bc’Cr"s"3ƒrsR3C2ƒ"3cb"S"C‚c‚3“rc’C‚ÂC’Cb"#B3ƒ32C2#B3“’"’#3R#2332##ƒB"rÓƒ"B3#B"Ó#cBbÓC2Ó#2"Ó3ƒ"Ó3"Ó3C2"#ÓC‚2Ó3“2bÓC‚¢Ò“sbÓ3CB"““Ó33“ƒRÓ3Cb“ƒ‚Ó33r"BÓ#s““’Ó3"BÓ#“"ÂBÓ“B"““bƒBBÓc‚S’"““b#ƒ““b#b““‚#C’"“ƒB3s’““R3B““3Cr"“s3“r“ƒ3“"“sb3“b"“S"3ƒb“cR3“r“S’3“""“C23c“C23ƒ“CR3s"“3r#ƒ‚“3’33r“3r3""“CRS‚“3r#CR“C"#2"“S’Ó#C‚“S#2“S2Ó""“cbÓ3#R“cÓ#sB“c2Ó3"“sbÓ3CB“cbÓ33B“c‚Ó3CB¢Ò"Ó33"#BÓ#s"#Ó3B#"Ó#“B"3RÓ#s‚#rÓ#sb3Ó#s‚ÂCÓ#s‚"3#Ó“’#bÓ#c"#s"Ó#S""3C‚Ós3#‚Óƒ’33‚Óƒ"Cƒ"Ó“’3“"Ó“C3bÓ“’"sBÓs2SsbÓ“’cCÓƒr"ƒCrÓƒ"scÓS‚ƒ’Ó3ÂƒSRÓc’ÂƒSRÓs2"ƒc2Ó##’ƒSrÓ#RƒcÓsr"ƒsbÓ#SRƒc2Ó#3’ƒc2Ó#SR"ƒ“2Ó#32ƒƒbÓ#SRƒƒ‚Ó#C""“Óƒ’ƒ“’Ó#’“Ó#2Â“cb"““"ƒ“’‚“S"ƒ“23“##‚ƒ“’#cR"ƒsr3#Rƒ“3ƒ“23#RÂƒsb3#R"ƒSR3ƒcR3#BƒSR3R"ƒS#"ƒS"#c‚ƒCr#3R"ƒSBSƒSBSƒSB"ƒ#“’ƒCrc‚ƒ3RƒR"s32crs“R#rscRC‚"ƒ3#S2scb“bs“’##R"ƒS#cRƒ3r#S‚ƒCB#c"ƒ#’#ƒ"ƒC#sRƒ3R#s’"ss"#“RƒR#“s“R#“R"cƒR#ss3’#“RsB#ƒr"c#B#RccR#S"cCR#32ÂScb#3""S#r#3’SS2#3bSC#3’"C“##‚SB#3’S#3b"CS#’CsR#rCcr#’"#sRsb3ƒ’#’33#"ƒBS2#bSƒBR"“’ÓBƒB3"ƒ’"#c"Ó‚#RÓS"#3bÓƒ"Â#RÓ#3"3B##R3Ós‚3"s2"3R#c’3B#3’3R#SR"#333R#“3"3"“R#ƒr“’3#2“R3r"“"#B“B#32“Rs’"ƒRÓC2ƒ‚3bƒRÓS2"ƒ’Ó3ƒRÓ“bƒbÓ#C‚""Ó33ƒ’Ó3ƒ’Ó3#2¢Ò3crÓB"3SC23S’23S#""3“"#"3Sƒ"3c2r"SCBsC3’SC“"c"Ss"c‚SSBsBSc2s¢ÒScBÓ3""CcrÓRS#‚Ó3‚C“rÓ#"CC"Óƒ’CS‚ÓCC’Ó“RÂcS‚"c“3csrƒ"c“S’"cƒ‚c“#Bc“r"ScBÓ3"cs‚ÓCRcÓ#r¢"ÒÂæ÷FV†VE6Æ6†VEv†öÆS¢²…öÖ–ã¢ÓsbÂ…öÖƒ¢C“‚Â•öÖ–ã¢Óc‚Â•öÖƒ¢c‚Â†¢33bÂó¢&ÒÓs’Ó#C""SRÓ#"Ó3"Ó#3bBÓ##‚ÂCRÓC2"332Ós#2Ócb#cRÓs"C#’ÓcB3cÓsB3“RÓc‚"Sƒ"Ó3CƒÓS‚S3BÓSB"cSrÓ#c3ÓRcSrÓcR"c’c‚cSr’cCBC"SS"#S“’ƒ’Ssrr"Sƒ"3‚Sc"#rSs"3""sr##bc#Rcrcc‚“B"c3‚#C"cƒ‚#3bcc"#C""SC2#2c2#C"Ss2#3""CSRSBSB“BCƒBsB"3#R“’C"cr3crs’"#32#R#“‚##cR#R"sRSbs2#R#Bƒb"#r#B#"sb"cbÓ“‚Ór#"Óc2"s"Ó"c’Ó“’sÓ"Óƒ’Ó#’rÓ3rÓ3bÓs2"Ó’Ó##RÓ“RÓ#2Ó’Ó#b"Ó‚Ó##’Ó’Ó##bÓ‚Ó##‚"ÓƒRÓ#C"ÓBÓ#3’Ó“RÓ#C"¢ÒƒÓ#’"crBsÓ2cr"ƒrc"cr3s2Cb"33r#r“’#S‚‚"3"3‚3B3‚3‚3‚Â3r3‚"3ƒ’’3C#R3cB‚Â3ƒ2R¢Ò33rÓ’"#3’Óƒ"3Ór#c‚Ó“’ÂCc‚cR"Cƒ"#BCsrS2Cƒ"C"CƒBCƒ"’Cƒ""33rÓ’CcrÓSb3“’Ó¢"ÒÂæ÷FV†VE6Æ6†VD†Æc¢²…öÖ–ã¢Ós’Â…öÖƒ¢CsÂ•öÖ–ã¢ÓƒBÂ•öÖƒ¢ƒBÂ†¢3c‚Âó¢&ÒÓ"Ó#S"Ó“BÓ#cRÓrÓ#cÓÓ#cB"ÓS"Ó#C"Ós’Ó#cRÓc2Ó#C’Âƒ’ÓC‚"#"Óƒ#RÓscrÓs’"#3‚Ósr##Óƒ##’Ós’Â#c"Óƒ"3CbÓs#ƒ’Óƒ3‚Ósb"SsbÓ“C3ÓcbSrÓC"cCBc’ÓccCÓ#’"S“"“bcC3Rc#RcRÂSƒ2B"S32CrScr#SS3BÂc2#"cs‚#cc3b#bccB#3""cS‚#cRcs#cBccB#cR"c#C‚cC#cRc#R#S‚ÂC“s"33r#BCCB“B3“"#B"#ƒ#3‚#B3#B"#rc"ƒƒr“"CR"ÓÓ’’3rÓ"3bÓrÓÓS"Óƒ""S"Ó#C"Ó"CbÓrÂÓs"Ó#2"Ó"Ó#SÓ“Ó#bÓ#"Ó#32¢ÒcÓC’"S‚Ó#’cÓC"S‚Ó3R"ƒ232S‚Órcrb"3“R3r#3’“R3#""C##RCR3BC23¢Ò#sbÓ#‚"#cÓ3#sÓ3#cbÓ3"ƒÓƒb#32Ó3#2ÓBÂCSB“BÂCc‚s""Cƒ3bCsrcCƒC’"Cc’Cƒ#bCsrB"#sbÓ#‚C#"Ócb3SBÓR¢"ÒÂæ÷FV†VE6Æ6†VD&Æ6³¢²…öÖ–ã¢ÓÂ…öÖƒ¢CS"Â•öÖ–ã¢Ó“Â•öÖƒ¢“Â†¢3ƒÂó¢&ÒÓ3Ó#sB"Ó"Ó#c"Ó#Ó#s"ÓÓ#cb"rÓƒbÓcRÓ#3’Ó#’Ó#""SÓSr#"Ósb3bÓcb"RÓsbcRÓcbƒBÓs2"#rÓƒ2CÓƒs2Óƒ2"#3’ÓƒB#’ÓƒB##’ÓƒB"C#‚Ó“3#rÓƒB3srÓS"CƒrC2CcÓS"CƒrÓr"Cƒ"sbCƒrS2CƒRcR"CS’#‚Cs‚“RCc’""SrcCsR3‚C“SÂcS#c""c#"#sBcC#sc3"#sB"cR#scb#sBc#s""SB#32Ss2#c"SC#S"ÂC#"cr"3r#23“"“3SB#2"#s“b3#2#ƒR#"c‚Sr#3bƒb#s2"bÓb“B#32c‚"ÓÓc"Ó3"ÓÓC‚"rÓ#RÓÓƒbBÓ‚"ÓƒÓ“bÓbÓC‚ÓC‚Ós2"ÓCRÓ#C"Ó"Ó#"Ó#‚Ó#’"ÓS‚Ó#SbÓSÓ#CbÓS‚Ó#S"ÓSrÓ#cÓS‚Ó#S‚ÓSrÓ#S’"Ó3Ó#sBÓS2Ó#c’ÓCÓ#sB¢"ÒÂæ÷FV†VE6Æ6†VDF÷V&ÆUv†öÆS#¢²…öÖ–ã¢Â…öÖƒ¢c“rÂ•öÖ–ã¢Ó#“RÂ•öÖƒ¢#“RÂ†¢S“Âó¢&ÒƒsÓ33‚"ƒ“Ó3RƒƒBÓ3CƒƒrÓ3#R"“bÓƒ2“rÓ#sB“2Ó##‚"“Bƒb“"Óc“Bc""“B#C“B#2“b##""“b#sb“2#S“b#cR"ƒ“’3“b#ƒ’“23"ƒs#S2ƒsB3ƒs#sB"ƒS‚Óc‚ƒsƒS‚Ó#r"ƒcÓ#3RƒS‚Ó“ƒcÓ#2Âs3bÓ3"ƒ3BÓ#s“’Óƒ3BÓc’"sƒ’ƒRƒ3B2ƒ’C’"cƒ2csc‚s#2C"3ƒ2#bSƒ’#’Cƒr#R"33#23cB#r3Cr#b"##‚3#“R#C"#c#s"ƒb3CrƒB33r3‚3C‚"S‚3C2sb3Crc23SÂS‚3c"3RC#RS‚3ƒBS2C#2"b3ƒ"’C#RbC2Âb3"ÓcBb32BÓcb"#BÓ3#rÓÓ#bbÓ#s"SÓ#c"CbÓ3RSÓ#ƒBÂSÓSB"S"ÓCRSÓ‚SÓƒ"S‚3#RSRs’S‚#""s23c3#c‚3R"“B#“Bs’3Bƒb#“‚"ƒ’#sƒ’#ƒrƒ’#s‚Âƒ’“B"BÓ“BÓ#ƒ‚Ó‚"‚Ó#CRrÓ#2BÓ#C‚"CÓ“CÓ#C2CÓ#"ÂCÓc""3"#S‚CCb3‚S2Â3"#S’Â#3Rs2"“23"#’c#BC‚"S2#bcrS2c2"cBÓ3RS2rSrÓb"3CÓs“bÓB#cÓS‚"C32Ósr3s"ÓsBC2Ósr"c’ÓSrC“rÓsrSS’ÓsÂsbÓ#3"s“’Ó#sbs3bÓ#S‚scRÓ#sb"ƒ‚Ó#sBƒbÓ#sbƒ"Ó#sbÂƒcÓ#sB"ƒc2Ó3"ƒcÓ#ƒrƒc2Ó3"ƒsÓ33‚ƒcBÓ3#ƒS‚Ó33r¢Ò“cbÓC#R"“ƒbÓ3“r“s’ÓC#R“ƒ"ÓC‚"““Ó3s2“ƒ’Ó3““ƒ’Ó3ƒ""““RÓ#3’““Ó3#‚““RÓ#ƒB"B33BÓC’"C2"““R3ƒR3SR3cr"“ƒ"C"“ƒ’3ƒb““"C"Â“s‚C"“C’3sB“cR3“b“S3“"“C‚332“C‚3c“C‚3CbÂ“C‚Ó3r"“C’ÓƒB“C’ÓS"“C’Óc‚"“CbÓ#C‚“C’Ó3"“CbÓƒ’"“S2Ó3“b“CbÓ#“r“C‚Ó3Cb"“cbÓC#R“SRÓC‚“SÓC#R¢Òc#BÓ3b"CbCSSB#"CƒRƒ"Cƒ"SbC3’SCcSB"c#RƒS3rSbSƒ‚#B"cCr#rc3’c2cCrCb"c#BÓ3bcCrrc3‚ÓB¢ÒCc’Ór"3#B3ƒbÓ‚3#Óc"3C2ƒ3#3r3#rcÂSCrÓ“R"Cc’ÓrS#ÓRC“BÓ¢"ÒÂæ÷FV†VE6Æ6†VEv†öÆS#¢²…öÖ–ã¢Óƒ2Â…öÖƒ¢SÂ•öÖ–ã¢Ó#Â•öÖƒ¢“‚Â†¢3“’Âó¢&Òs3BÓ#ƒ’"c“bÓ#CRs#bÓ#cbsÓ#Sb"SƒbÓcBccÓ#rc#"Ó“"ÂSƒ’Óc"cSBÓSc3Ó3RcSBÓ“B"cbCcSBÓ’cC2"3RsBS3b#rC#sB"sS#csB#Rcr"cbSsSc‚S"ƒb#’Cs"ƒ’"Ó“B#ƒB3"#C’Ó#"#ƒ’ÂÓ‚#ƒR"Ó##sBÓB#ƒRÓ##ƒB"ÓB#SÓ##cbÓ"#S‚"s#BÓCb#’"cbÂƒRB"3bs"cb"Sƒ’"Ó3"CB"#"ÓƒbÓ“bCRÓc"3C2Ó##"“BÓ##c‚Ó##""SBÓ“rCÓ##CcrÓ#2ÂSSBÓ##‚"s3BÓ#ƒ’c’Ó#c‚cc‚Ó#sR¢ÒCsrÓƒ""#c‚s2C‚Ó333‚#"Â3“"33b3B“b3#B"3sƒ‚3Cr3S’“b"CS’’CRcbC3bC2"CƒÓSbCsBÓ2CƒÓ3R"CsrÓƒ"CƒÓcRCƒÓs2¢Ò3Óc"#bÓC2#sbÓc#CbÓSb"cbÓs"ƒÓ#‚cbÓR"c‚ÓCbcbÓcRcrÓSR"#b#bsbÓbƒ’r"C3bÓC#ƒ"Ó#’3cÓƒB"3ƒ"ÓS‚C#ÓSC"ÓSr"3Óc3SrÓc332Óc¢"ÒÂæ÷FV†VE6Æ6†VD†Æc#¢²…öÖ–ã¢Ós2Â…öÖƒ¢CSBÂ•öÖ–ã¢Óƒ‚Â•öÖƒ¢ƒ‚Â†¢3sbÂó¢&ÒcSBÓ#s"c2Ó#"cC’Ó#32c#RÓ#r"CƒÓRSc2Ós2S#2ÓCB"ScBÓcSÓS3’Óƒ""cRCS“bÓ32cRB"c’c’cRSc2c"SRcrS“#SSBS"33b“CSƒB3“"“"#B3B#S’“ƒ’sÂÓC"#C‚"Óƒ‚#sÓSb#SbÓsR#s"Ó#cRÓ“B#sÓ“‚#c’"ÓR#S"ÓB#S’ÓR#SR"Ócb#ÓR#3RÓƒ"##"ÂƒRr"Ó#BC"s23R"ƒ2Óƒ2Ó‚sRÓƒB"#c"Ósb#bÓƒ#32Ósr"C3‚Ó3R3#BÓs3ƒ2ÓS‚"SsÓ##‚Cƒ"ÓcbS#rÓ“r"cSBÓ#sS“RÓ#C2c#Ó#S’¢Ò3“2ÓS2Â3BÂ##RcR"3“"3B#sB"33#""CSRSC#RCCSR"C3’Ó2CSR3RCSB"3“2ÓS2C#RÓ#"C’Ó3r¢Ò#ƒrÓ#"#CbÓ3#s"Ó#r#S’Ó3"sÓƒ’#RÓ3ƒ’ÓR"SbÓCcÓs2SbÓS‚"ƒb#’SbÓrcbrÂ“"3RÂ3S’Óƒ""#ƒrÓ#33rÓ“‚3"Ó¢"ÒÂæ÷FV†VE6Æ6†VD&Æ6³#¢²…öÖ–ã¢ÓƒBÂ…öÖƒ¢CRÂ•öÖ–ã¢Óƒ’Â•öÖƒ¢ƒ’Â†¢3s‚Âó¢&ÒSSrÓ#cR"Ss2Ó#s"Sc"Ó#c‚ScrÓ#s""Sƒ2Ó#cSsrÓ#s"SƒÓ#c’"SsRÓ#C"SƒÓ#S2Ss’Ó#C‚"S#BÓ“Sc2Ó##SCBÓ#B"CRÓ“’CƒRÓcCCRÓ3"C“rSCC’ÓcCƒ"Ó’"Ss"C“‚S‚ScR"Cs‚#"S“C“"r"33ƒbC3‚cr3ƒrƒb"#3#S‚ƒbƒbcrÂr#B"ÓS"#C"S2c2#2"Óƒ’#cRÓc2#SÓsb#S’"Ór#s"Ó“R#c‚Ó#s""Ór#cbÓ’#s"ÓB#s"Ó##SÓ##c"Ó##Sb"ÓB#3RÓ##CRÓ##3’"ÓcƒbÓ“b#rÓƒ“’"c2“RÓ#Sb#"#R"ÓÓ3R#bcbÓ#r"3rÓƒ2ÓÓ3CbÓƒ2"sBÓƒC‚Óƒ2cÓƒÂ#CRÓs"3cbÓ#‚#ƒ’Ócb33ÓSÂC#bÓs"SSrÓ#cRCc’Ó#2SBÓ#32¢"ÒÂæ÷FV†VDF–ÖöæDF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢C#’Â•öÖ–ã¢Ó##Â•öÖƒ¢##Â†¢CC"Âó¢&Ò#"Ó3‚"C"Ó#“B32Ó3‚3rÓ3""CbÓ#cbCRÓ#ƒRCRÓ#sR"SÓ#’C’Ó#C’SÓ#32"C‚ÓS2SÓ“rC’Ósb"C2#C2Óc"C2#’ÂC2#S2"3r#“‚C2#c’CR#ƒB"#b3‚3R3R3R3‚Â#B3‚"#“R23r23‚"#c‚#ƒR#sbÂÓ#"Ó#“ÓsrÓ#3R"#"Ó3‚"Ó3Ó3‚¢ÒS“2Ó3""c‚Ó#SbcÓ#“BcbÓ#sbÂc‚Óƒb"c#S2c‚ÓCc"‚"cR#sbc#cc‚#c‚"Sƒ’#“Rc#ƒBc#“r"Scr#s"Ssr#“BSc’#ƒRÂScr#S"SsRÓ“rSs2"SsRÓC‚"S“2Ó3"SsRÓ#32Ss’Ó#s¢Ò“’Ó#c‚"BÓ#SbrÓ#c’Ó#c""#rÓ“b#BÓ#3‚#RÓ#r"#‚ÓCB#‚Ós’#‚Óc"#"Ó’#‚Ó“’#RÓSRÂ3RÓ’"3CBÓs’#bÓs#sbÓ#""3sÓ“3SBÓƒb3c2Ó“"3“RÓs23s’Ó“3ƒbÓƒB"C“"Ó32C#bÓ#rCS’Ós’"C“ÓƒbC“ÓSC“Óc‚"SrÓ#SC“Ó3‚C“RÓ“2"S3BÓƒBS3Ó##‚S32Ó#b"SCCBS3rÓsRS3’3R"S3#BSCcBS3’ƒb"S###S#‚#S#‚##"S#2S#’S2#2"C“‚“"C“‚#C“‚“BÂC“‚sb"C“BrC“r#C“rc2ÂC“"Â#ƒrsb"#S‚“#s’ƒ#sB“"#"S2#3’ƒb##Rc‚Â#rC"#3"#B3r#"3R"‚B#S’‚ƒb""#C’rS‚#"#b"sR#’ƒR#Cbs’#3b"s"ƒrs"#’s"“r"sbrs"cBsRC"ƒRÓSs’#rs’Óc""“Ó#SƒbÓƒB“Ó#r"“’Ó#c‚“Ó#S‚“"Ó#cb¢Ò3“"Ó#‚"3sBÓ#"3ƒrÓ3B3ƒÓ#rÂƒ#’"sCRs23Rs3’"sbSbsC‚s2S""#3b#"#B#’#""3‚sb#S"#"#s"rÂC32Ó#b"CC’ÓSC3’Ó3"CC’Ó3b"3“"Ó#‚C3"ÓsRC2Ó"¢"ÒÂæ÷FV†VDF–ÖöæEv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢#sÂ•öÖ–ã¢Ó3"Â•öÖƒ¢3"Â†¢#cBÂó¢&Ò#3Ósr"#SbÓ“#CÓƒb#C’Ó“"#ƒÓs2#cRÓ“#s"ÓƒB"3ƒ"Ó#’3BÓ#B3CrÓsb"3“Ó3ƒrÓ#"3“ÓB"3sb"3“Ó23ƒbB"s2sr3‚cb#C#"CB“cbƒ2c“"“‚S2#rƒb"s"2Cc’RC"sb"2B#’#"#"Ó’2rÓ’"#3Ósr“"Óc’c2Ó#"¢Ò#s’Ó#‚"#cÓ#"#sBÓ3B#cbÓ#rÂcb3"SbCRS’3RSb3’"c"SbSbC‚S’S""#"#"“R#""“Bsb3‚#"S‚rÂ3#Ó#b"33bÓS3#RÓ3"33bÓ3R"#s’Ó#‚3‚ÓsR3Ó"¢"ÒÂæ÷FV†VDF–ÖöæD†Æc¢²…öÖ–ã¢Â…öÖƒ¢#“RÂ•öÖ–ã¢ÓC‚Â•öÖƒ¢C‚Â†¢#“bÂó¢&Ò##‚Ó#r"#CRÓ#2#3RÓ##CÓ#2"#cBÓ#2#S"Ó#2#S‚Ó#"CRÓCb3BÓS3cBÓ“‚"C#RÓ#rC#ÓCC#RÓ3R"CbÓC#RÓ#"C#"Ób"#r#3Sc#ƒB3"“B#2#"#r#B#2"s“bƒ#2sr#2"B32‚C2c‚ƒb"rB#2b"rÓ#ÓbÓ"‚ÓBS"ÓSƒ"ÓƒR"##‚Ó#rSbÓCBƒBÓƒB¢Ò#’ÓSr"3BÓc’srÓ3‚CÓR"3Ó#b3ÓSR3ÓC"#RC‚3C"c“’"##RSb#rS##Sb"#3S2##bSb##‚Sb"3#2Ó#b#sbB3#SR"#“‚ÓsR3#BÓC"3RÓS’"#cRÓ’#ƒrÓƒb#sbÓ“’"#’ÓSr#CRÓ#R##‚Ócr¢"ÒÂæ÷FV†VDF–ÖöæD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢ÓCbÂ•öÖƒ¢CbÂ†¢#“"Âó¢&Ò#cbÓ#"#ƒ’Ó“B#s‚Ó#’#ƒBÓ#"CbÓsb33ÓSb3crÓR"CCbÓ#2C32ÓC’CCbÓ3b"C"#’CCbÓC3R2"CR3bC’3C‚32"#S"“b3SBƒ’3BC2"##R##C2#B#3R#"#B#"#’##"#’"#BCCsRƒ""’B’B"’ÓbB2Â#3"Ó“""#cbÓ##C"Ó##SbÓ#B¢"ÒÂæ÷FV†VE&VçF†W6—3¢²…öÖ–ã¢ÓsÂ…öÖƒ¢3#’Â•öÖ–ã¢Ó“bÂ•öÖƒ¢#Â†¢3“rÂó¢&Ò3CBÓ#s’"3ƒ"Ó#c"3cÓ#ƒ‚3sÓ#s""CRÓ#323“Ó#SR3“’Ó#CR"CsB’CSRÓS‚Cc‚Ós2"Cb##‚CsBs‚CC‚sB"3cB#ƒ"C2#C’3ƒr#s"3CB#ƒ’3S’#ƒR3S#ƒ‚"33#s’33‚#ƒ’332#ƒr"3#R#C‚3#‚#c’3#R#S‚"33‚##R3#R#3‚3#‚##’"C"3‚3s’#r3“bsB"CCRC32“"CCRCR"3CbÓ#rCCRÓƒCÓSB"33bÓ#S"3CÓ##233bÓ#3‚"3CBÓ#s’33bÓ#cR33‚Ó#sb¢Ò’Ó#sB"3RÓ#ƒ"#BÓ#s’3Ó#ƒ"C’Ó#cRC"Ó#ƒ"CbÓ#sR"S"Ó#C2SÓ#SbS"Ó#C’"3bÓ#S"Ó#3C’Ó##"ÓcÓS’ÓbÓs2Ó3RÓB"Ós2’Óc’Ó3’Ós2Ób"32##2Ós2“"Ó#Bƒ’"S#cRC2##’S#C’"32#ƒ‚S#s‚Cb#ƒ’"B#s"#2#ƒ‚B#sR"Ó’#c#c’ÓB#cR"Ó#2ÓS‚“2ÓR#B"Ó3rÓ#bÓBÓS"ÓsRÓ3"’Ó#sBÓ#2Ó#3"ÓbÓ#SR¢"ÒÂæ÷FV†VE&VçF†W6—5&–v‡C¢²…öÖ–ã¢Ó3Â…öÖƒ¢ƒ"Â•öÖ–ã¢Ó“’Â•öÖƒ¢#bÂ†¢CRÂó¢&ÒÓrÓ#ƒ""#BÓ#cBÓbÓ#“r"Ó#s""cÓ#’CÓ#S2S"Ó#3b"r“bÓS"ÓsR"‚b‚b‚""’s2‚3b"SR"B#s’“’SBc‚##b"Ó#2#“rÓB#ƒrÓ2#“r"Ó3r#ƒ’Ó#r#“rÓ3"#“B"ÓC2#cbÓC"#ƒRÓC2#sb"Ó3"##RÓC2#SÓ3r##’"ƒBÓrC‚sƒBƒ""3"ÓƒBƒBÓc’cRÓ3""ÓÓ##"#"Ó#BÓ#’"Ó#BÓ#S‚Ó#Ó#3"Ó#BÓ#CR"ÓrÓ#ƒ"Ó#BÓ#cbÓ#"Ó#sb¢"ÒÂæ÷FV†VE&VçF†W6—4ÆVgC¢²…öÖ–ã¢Â…öÖƒ¢bÂ•öÖ–ã¢Ó“rÂ•öÖƒ¢“rÂ†¢3“BÂó¢&Ò3BÓ#ƒB"3‚Ó#ƒ3RÓ#ƒB3rÓ#ƒB"CRÓ#c‚CBÓ#s‚CRÓ#sBÂCBÓ#S2"rÓƒ3‚Ó##R#Ó#B"C"2sÓ#C"ÓSb"C’s2C"3"C2S""3r#c"#‚“Rs"S2#SRCr#’S2#3’"CR#s‚S2#cRS#sB"3#ƒBC#ƒ3R#ƒB"“‚#S’r#ƒB‚#c‚"3r3R#23"‚Ó#c‚’Óc’S2Ós2"3BÓ#ƒB#Ó#sB#rÓ#ƒB¢"ÒÂæ÷FV†VDÖööä&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3#‚Â•öÖ–ã¢Ó#RÂ•öÖƒ¢#RÂ†¢#SÂó¢&Ò3S2Óc"CcRÓCC"ÓCCSÓ""Cs"3CsÓrCs"b"Cc’#BCs"cCc’“""Cbs’Cc’sCS’srÂ#‚s’"3rƒ“‚s’c‚s’"Crƒs"2Ó#2ƒ‚232"c’Ó3B2Ós"#bÓ’"#CÓƒ#RÓcBƒÓƒ"3S2Óc#s‚Óƒ3RÓsB¢"ÒÂæ÷FV†VEG&–ævÆTÆVgD&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3“Â•öÖ–ã¢ÓC"Â•öÖƒ¢C"Â†¢#ƒBÂó¢&Ò3‚Ó#B"3‚Ó“r“rÓ“’#S‚Ó“rÂC3Ó“r"SCBÓ“"Cc’Ó“bSrÓ“2"Sc2ÓƒBSS"Ó“ScÓ“2"SS2ÓcrScBÓsrSS’ÓsÂSCÓSr"#3"cC3bÓƒR33BÓ"ÂS“"##BC"“r3"#B"#"r#BB#B"ƒB“r“""cBsrs"bÓS2S’bÓCR"3’Ó“2rÓsbrÓƒb"3‚Ó#Bs"Ó#BRÓ#B¢"ÒÂæ÷FV†VEG&–ævÆU&–v‡D&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢3“‚Â•öÖ–ã¢Ó3’Â•öÖƒ¢CÂ†¢#s’Âó¢&ÒSC2Ó#"Ss2ÓsbScbÓ#Ss2Ó“BÂSs2Óc‚"SSBCScbÓcbSc3r"S#“rSS2crSCbƒr"C“R#"S#SB#""CSBƒBCƒ#"Ccr“bÂ3RÓ3r"Ós#"ÓCrÓBÓSB"S"Ó“’bÓ“232Ó“2"c’Ó“’S‚Ó#c2Ó“’¢"ÒÂæ÷FV†VEG&–ævÆU&÷VæDF÷vä&Æ6³¢²…öÖ–ã¢Â…öÖƒ¢33BÂ•öÖ–ã¢Ó3BÂ•öÖƒ¢3bÂ†¢#sÂó¢&Ò#S"Ó“""#ƒRÓsb#c’Ó“b#sbÓƒr"Cc‚S"3CbÓ“’CbÓ#2"Cƒs’Csrc"Cƒs"CcRBCƒƒ‚CsR“R"CC#BCSb’CC’r"#C’“b3ƒsB3B“B"2BSr“bc’SB"ƒbb“‚“""rc’ƒ"2sb"#"ÓcBs2Ór3rÓƒR"#S"Ó“"#bÓƒ#3RÓƒb¢"ÒÂVvÖVçFF–öäF÷C¢²…öÖ–ã¢Â…öÖƒ¢“bÂ•öÖ–ã¢ÓSrÂ•öÖƒ¢SrÂ†¢BÂó¢&Ò2Óƒ""bÓƒBÓƒ"BÓƒ""RÓs2CbÓsbsRÓsb"3ÓC‚#Ós"3Óc"3‚#b3BÓ#B3‚"3rC‚3‚323‚C"‚ƒ"3Bs#Rƒ""“RƒBƒ"“’ƒ""32ssRs‚S2sR"BCb#c‚bc""Ócb’Ó#’"2Óƒ"Ós2Óƒ"¢"ÒÂG&VÖöÆó¢²…öÖ–ã¢ÓS‚Â…öÖƒ¢SbÂ•öÖ–ã¢Óƒ‚Â•öÖƒ¢ƒ‚Â†¢sbÂó¢&ÒÓ#bÓ#r"Ó“BÓ#RÓ#2Ó#rÓ“’Ó#r"s2Ó3bÓs"Ó“BSÓcR"##b#"Ó#’#RÓ""##RS##23##RCR"#br##bsb##"“"“B#r###B#r"ƒ2#B“"#rƒ’#rÂÓ“"32"Ó##bÓ’Ó#2#rÓ##"B"Ó##‚Ó3"Ó##bÓbÓ##‚Ó#2"Ó##"Ó‚Ó##‚ÓS‚Ó##"Óƒ""Ó#bÓ#rÓ##"Ó#Ó#rÓ#r¢"ÒÂfÆs‡F…W¢²…öÖ–ã¢Â…öÖƒ¢#cÂ•öÖ–ã¢Óƒ’Â•öÖƒ¢Â†¢ƒ’Âó¢&Ò#cRÓs"3SÓ3R3Ó333bÓƒr"3sbÓƒcr3c’Ó“s’3sbÓ“#2"3crÓsSR3sbÓƒ#’3s2Ós“""#32ÓC#"3SÓc3"3ÓS#"3Ó#““’Ó3s’cbÓ33B"cRÓ#R“Ó#3’cbÓ“""c"ÓsRcRÓ"c"Ó“"C"c"ÓC’S"Ó#BÂ3R"Óc2bÓ2Ó3bÂÓCB"“bÓCCRÓ#SR#’Ó3Sb"srÓSCr#BÓCs‚SÓSB"3‚Óƒ3#CbÓc#’#“‚Ós#"3rÓƒ“3ÓƒS3rÓƒs"3Ó“’3rÓ“3RÓ“"#SbÓR#“rÓ“S#ƒ"Ó“ƒB"##‚Óc‚#32Ó#B##‚ÓCR"#3Ób##‚Óƒ##’Ó“2"#CÓc"#3"Ó#R#3’ÓC2"#SÓs’#C"ÓsB#CbÓs’"#cRÓs#SRÓs’#S’Ósb¢"ÒÂfÆs‡F„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢#cÂ•öÖ–ã¢Â•öÖƒ¢ƒ’Â†¢ƒ’Âó¢&Ò#cRs"#Ss’#S’sb#SRs’"#Cc"#Cbs’#C"sB"#3b#3’C2#3"#R"##‚c‚##’“2##‚ƒ"#SbR##‚CR#32#B"3“’#ƒ"“ƒB#“r“S"3rƒ“3R“3r“"3‚ƒ33rƒs3ƒS"srSCr#“‚s##Cbc#’"“bCCRSSB#BCs‚"CB#’3Sb#SRÂc2"3R3bb2ÂC""c"sRS"#Bc"C’"S’rc"“S’B"3#“cƒ2“#3’"#32C#"cb33B“’3s’"3crsSR3S#3Sc3""3sbƒcr3s2s“"3sbƒ#’"3S3R3sb“#23c’“s’"#cRs33bƒr33¢"ÒÂfÆsgF…W¢²…öÖ–ã¢Â…öÖƒ¢3#rÂ•öÖ–ã¢Óƒ’Â•öÖƒ¢Â†¢ƒ’Âó¢&ÒCRÓs’"C3RÓc‚C#2Óƒ"C#’ÓsB"CSÓ3‚CC"ÓS’CCbÓC’"CcRÓ#CcBÓ"CcrÓcB"CcÓ“c"CcBÓBCcBÓ“ƒB"CsÓƒ#CcrÓ“bCs"Óƒs"CcRÓs#Cs"Ós“CcrÓsSb"CRÓS#CS’ÓcSCCÓSƒR"#Ó#CR3sÓC‚#ƒBÓ3#r"“bÓBcÓ#b‚Óc‚"sRÓ#BƒBÓƒRƒRÓS2"S’s"Óbs""S2ÓS‚SbÓ"#rÓ3"CÓb#rÓ"#’Óc‚#rÓC2#’ÓSR"Ós’#Óc’2Ós""Ó’bÓƒ’Ó“’"ÓsÓ3ÓC‚"3RÓCÓ#S""Ó332"#S‚Ós“2sbÓSSrSbÓcƒ"C’ÓS‚3SÓƒ“bCÓB"CRÓs’C’ÓcRCRÓsR¢ÒC2Óƒb"33Ócƒ3“"Ósc’3cBÓs#2"CRÓC##cbÓS“bƒ’ÓS#"ƒbÓ#ƒ#RÓ3sB"Ó33"SbÓ3sRÓ3"#‚Ó3C2"3‚ÓS3’#ÓC#R#c’ÓCs‚"C2Óƒb3ƒ2Óc#C#Ós2¢"ÒÂfÆsgF„F÷vã¢²…öÖ–ã¢Â…öÖƒ¢3#rÂ•öÖ–ã¢Â•öÖƒ¢ƒ’Â†¢ƒ’Âó¢&ÒS’"sR#Bs"s"b"“bBƒRS2ƒBƒR"##CR‚c‚c#b"CRS##ƒB3#r3sC‚"CcRs#CCSƒRCS’cS"Csƒ#CcrsSbCs"s“"Cc“c"Cs"ƒsCcr“b"CcR#CcB“ƒBCcBB"CS3‚CcrcBCcB""C3Rc‚CCbC’CC"S’"C‚s’C3s"C#Rs’ÂCRs’"C‚c’C’sbC‚sB"C’S‚C‚cRC’c"#S‚s“2CB3Sƒ“b"3RCSbcƒsbSSr"s"332#S"Âƒ‚"#’rsb#2"S’32BS‚¢Òƒb#ƒ"CRC#"33#R3sB"33cƒƒ’S##cbS“b"C2ƒb3cBs#23“"sc’"CRs“C2ƒ‚CRs“’"3‚S3’CRc“‚3src2"Sb3s#c’Cs‚#C#R"ƒb#ƒ#‚3C2R3"¢"ÒÂfÆs3&æEW¢²…öÖ–ã¢Â…öÖƒ¢#c‚Â•öÖ–ã¢ÓƒC’Â•öÖƒ¢C’Â†¢““’Âó¢&Ò3#2Ó##2"3SÓ“‚33rÓ##r3CBÓ#"3S’ÓƒB3SBÓ“B3SbÓƒ‚"3ƒbÓ““’3srÓ#"3ƒrÓc"3CÓsƒ23ƒbÓ“#r3s"ÓƒSR"33Ós3b33BÓsc’33ÓsS2"332Ós‚33Ós#r33Ósr"3CBÓc#3CÓcs‚3CBÓcC’"3CÓSs’3CBÓc‚3C2ÓS“2"3#‚ÓS33‚ÓSS23#‚ÓS#b"33ÓCsR3#‚ÓC“3#‚ÓCƒB"3CrÓ3s3C2ÓC3‚3C‚ÓC""S#r3C‚Ó#"#ƒ‚ÓSb"S2sb“‚S’S""CR“rS2ƒ2C‚“""32#RC#2C#bÂ3#R"b“B#"#"’#’"#2sÓCR"ÓC2BcR2"Ó“‚ÓcÓs’"BÓ#sbÓSrbÓ#b"rÓCSbBÓ33rrÓ3“r"cbÓc3‚rÓS#2#"ÓSƒR"S‚Ós#B“BÓcs#rÓc“r"3‚Ó#CbÓƒ#“RÓƒ“’"3#ÓCB3#Ó#3#Ó3""3"ÓS"3#Óƒ3"Ób"3rÓ“"3"ÓcR3BÓs’"3#2Ó##23#Ó#"3Ó##¢Ò#ƒRÓ3sb"#Óƒ#C’Ó#ƒ’s2Ó#CR"“ÓRBÓS‚“"Ó3R"#ƒ‚Ó3SBƒÓCB#ƒ‚Ó#c’"#ƒRÓ3sb#ƒ‚Ó3c2#ƒrÓ3s¢Ò#sRÓcSr"ÓC“"##bÓSƒ’c2ÓSCr"cRÓ3sbs‚ÓCSbcbÓC‚"sÓ3#2cRÓ3cc‚Ó3C"#sRÓcSrcBÓC‚#cRÓSB¢"ÒÂfÆs3&æDF÷vã¢²…öÖ–ã¢Ó2Â…öÖƒ¢#c‚Â•öÖ–ã¢Óc’Â•öÖƒ¢ƒ#’Â†¢““’Âó¢&Ò3#2“B"3rcB3“3#sB"3"#23BS3"3b"3#R3"ƒr3#S"3‚“ƒ"3#B3#““""S‚c“b#“Rƒs#Cbss""cbc’#rcc‚“BcC""rC#‚#"SSbrC“B"B#C‚r3c’B3‚"Ós‚bƒrÓ3r"BS’3"ÂÓC‚"bÓ##2ÓsB2Ó“’"3Ó#C2’Ó#3‚#"Ó#CÂ32Ó#C2"CRÓ##bCÓ#CRCÓ#3""S2Ó#BC‚Ó##S2Ó#""SÓSbSÓ3“‚Óƒ‚"3Cr3C#ƒ‚#r3C‚ƒ2"33CCb3C‚3s23C2C’"3#‚Cs3#‚CSR3#‚Cc""3CSS3#‚C“r33‚S#B"3CBS“"3C2ScB3CBSs’"332cƒ3CBc#3CcC’"33sr33cƒ‚33c“‚"3CsSR33s#B33BsC"3ƒb“s3s"ƒ#r3ƒbƒ“’"3S’SR3ƒr33sr“2"3Sc’3SbS’3SBcR"3#2“B3CBƒ33r“‚¢Ò#sRc#‚"s#“B#cRCsRcB3ƒ’"cR3Crc‚3"cR33"CcBcb3ƒ’s‚C#‚"#sRc#‚c2S‚##bSc¢Ò#ƒR3Cr"#ƒ‚3#R#ƒr3C#ƒ‚33B"“sb#ƒ‚#CƒR"#S“"rB3"#ƒR3Crs2#b#C’#c¢"ÒÂfÆscGF…W¢²…öÖ–ã¢ÓBÂ…öÖƒ¢#ƒ"Â•öÖ–ã¢Óƒ#BÂ•öÖƒ¢3CrÂ†¢sÂó¢&Ò3SÓƒR"3ƒÓc"3cBÓƒ’3sBÓsR"CbÓ#"3“’Ó’CbÓs"3S’Ós“‚CbÓ“CR3ƒBÓƒs"3C‚ÓsSb3S2ÓsƒR3C‚Óss""3SÓsCB3C‚ÓsS23SÓsC’"3c2Óc#3SbÓsB3c2ÓccB"3cÓSƒ3c2Óc‚3c2ÓS“2"3S’ÓSc3S’ÓSs23S’ÓScr"3s2ÓC“3S’ÓS3b3cbÓS2"3“2Ó3Cb3ƒbÓCCB3“2Ó3“R"3ƒrÓ#c’3“2Ó3#3“Ó#“B"3C‚Ó#r3ƒ"Ó#’3C‚Ós2"3SÓB3C‚Ó#3C‚Ó"3S2ÓcR3SÓ“3S2Ós‚"3C3r3S2Ó#b3C‚b"##b#R3#2‚#s‚cB"ƒb33bƒ#S‚#r#ƒ‚"c"3“Rs"3S2c"3s"C"Cƒc"C#2SRCSB"#rS3rCƒ‚3bS"#BC“‚#bS#bS"ÓCƒBC“rC“""ÓbCCBÓBCcrÓbCSRÂÓbC3R"Ó3CÓC2Ó3s"ÂÓ#cb"bSbÓ#3“2"23R"r2sRÂ2Ó3R"BÓƒR2ÓS"BÓc‚"#’Ó#sb’ÓS32Ó#2"#ÓCC‚#BÓ33B#Ó3“""#BÓS3B#ÓCsr#"ÓSR"BÓs‚3ÓcRS’ÓccB"“rÓsƒC2Ós3"sÓsSR"3CBÓS23ÓƒƒB3CÓ"3C2Ós"3CBÓS’3C2Ócb"3SÓƒR3C2Ósb3CBÓƒ"¢Ò#ƒrÓƒ‚"c"“2ƒbÓrs’C‚"##’S"#CBsB“‚"#ƒ’Ó32#Sb#’#sBÓ2"#“RÓSb#“BÓC"#“RÓC’"#ƒrÓƒ‚#“RÓcb#“"Ósb¢Ò#“‚ÓC"‚Ó#3R#3‚Ó3SsbÓ#“R"sbÓƒ‚ƒ"Ó“rs‚ÓCr"#c‚Ó#S"3rÓS2#2Ó#""33Ó3c3BÓ#s’33Ó3R"3#2ÓC"33Ó3s23#rÓ3ƒr"3ÓC‚3‚ÓC23RÓC‚"#“‚ÓC3rÓC‚3"ÓCR¢Ò3Óc“"rÓS‚#C2Ócbc‚ÓSsR"ƒ"ÓC‚“BÓCƒƒ"ÓCC‚"ƒBÓ3s’ƒ"Ó3“rƒ"Ó3ƒr"#S’ÓSS23RÓCS#bÓC“""3Óccr#ƒrÓSƒ23Óc’"3Óc“3ÓcsB3Ócƒ2¢"ÒÂfÆscGF„F÷vã¢²…öÖ–ã¢ÓRÂ…öÖƒ¢#ƒÂ•öÖ–ã¢Ó3sRÂ•öÖƒ¢s“bÂ†¢sÂó¢&Ò3C‚CR"3C3"3C2C"3C3b"3C223C#b3C2’"“bsC3C“s3ƒCB""cc‚ssBCc“"#2C“BS‚c#B#’ScB"’C‚#CcR’C3b"#r#3b’3S#2#“B"2CR3"s2r’""Ób2#r""Â"ÓsR"BÓ“b"ÓRÓSr"Ó2Ó3rÓÓ#32Ó2Ó#sÂÓ2Ó3ƒ""ÓrÓCsRÓ2ÓC"Ó2ÓCCBÂÓrÓCƒB"Ó2ÓS#ÓrÓC“RÓbÓSr"#2ÓS3’ÓS322ÓS3r"#bÓSC#BÓSC#BÓSC"CÓS#3RÓSC3bÓS#‚"cÓC3RS2ÓC“BcÓCcB"ƒRÓ3sbcÓCsÓ3“2"##RÓ#SR#RÓ3#‚ƒÓ#“‚"3CÓs‚#sbÓ#B3#ÓC‚"3S#B3CrÓCb3SÓB"3Sc23S3r3SS"3Crƒb3Crs3Crs’"3ƒb##’3Cr3"3ƒs’"3“"3R3ƒ’#S23“"#s’"3s"CC’3“"3SB3ƒBC2"3SrS#3cBCs"3SrC“R"3S’SC3SrS#r3SrS32"3cSƒ3cSS23cScr"3C‚sB3cc#B3SBccB"3Crsb3C‚s‚3Crs2"3SrsSr3Crs3"3SsCB"CR“ƒ"3ƒ2ƒ3CR“B"3s’#"CR33“rs’"3C‚CR3s23R3c2C’¢Ò#“‚cS"3c#b3cC"3c3B"#S‚S23Ss’#ƒRSC2"ƒ"33‚#BCS"3BC"ƒ3crƒ3Crƒ3Sr"RCc‚ƒC‚“"C3’"#“‚cScrS3B#C"Ssb¢Ò#“r3s"33sr33sB3R3sr"3#3c3B3sr3r3s2"3#‚3#3#R3Cr3#‚332"#cb#"3#‚#sR3"#3’"sRC‚#"c3R""r“BsbrƒSr"#“r3ssB#SR#3b3¢Ò#ƒRC‚"#“Bb#“3b#“B#b"#ƒ‚Ór#“B’#“""##‚Ó“"#s"Ó3r#SRÓc’"cÓ#32s2Ó3‚#ÓƒB"#ƒRC‚s‚Óƒ‚ƒBÓ#2¢"ÒÂfÆs#‡F…W¢²…öÖ–ã¢Â…öÖƒ¢#S"Â•öÖ–ã¢ÓƒBÂ•öÖƒ¢S3Â†¢33BÂó¢&Ò#“‚ÓS‚"3#‚Ó#b3"ÓS‚3#Ó3’"33Ób33Ó#233Ó’"3CrÓ““b3C2Ósb3CrÓ3r"3#‚Óƒ3r3CrÓ“C233‚Óƒ“"3#Óss‚3#BÓƒb3#Ós“‚"33Ós323#Ósc23#2ÓsC’"3CÓccR33‚ÓsB33rÓcƒ‚"3CÓcCR3CÓcc3CÓcS""332ÓS3B3CÓc’332ÓSs""3C2ÓCs332ÓS233BÓC“""3cÓ3cb3SbÓC3b3cÓC""33Ó#"3cÓ33C‚Ó#Sb"3#‚Óƒr33Ó“r3#‚Ó“2"33Ós’3#‚ÓƒB3#‚Óƒ"3c2ÓSR3S2Ó3r3c2Ó“b"33rs’3c2Ó"3S32"3#rB332“"3#rB"3CBCB3#r#B333""3S’sB3S2S3Src2"3c##‚3c“23c#"#C2Sr3c33r3#RC3R"CrS“b#2SCbs’Sc’"sRs‚c#bsRcSR"c"sCBsRs#2c‚s32"Ssc2S‚sS"S‚sc2"Cbsc"C’sc2C‚sc""rsC"3bsSr#"sSr"c“rBs#bs"S“Rcc"2c3"Cc’SS"S"C#’CSbCC""#"#ƒ’b3ƒ"#"33r"#B#‚#"#3‚#BƒB"#"cb#B‚#2ƒb"’Ó’#3r’"#Ó3"’ÓSb#Ó“R"2Ó#sb#Óƒ’Ó##’"’Ó3S’Ó3B’Ó33""ÓCƒr’ÓC""ÓCCR"SbÓSƒ""ÓS#b#’ÓSSB"“rÓsC"rÓc3"cÓcƒ"#ƒ‚Ó#cRÓƒS#sbÓ“sb"#ƒ‚Ó#"#ƒ‚Ór#ƒrÓR"#ƒrÓCR#ƒ’Ó#’#ƒrÓ3‚"#“‚ÓS‚#ƒrÓS2#ƒ‚ÓS‚¢Ò3BS"sRCsR##’#Sb"33B"3BS#323Sr3R#ƒr¢Ò#sÓs2"#rs"#32ÓBs’#b"ƒcr“b“‚ƒ#r"ƒB“Bƒsbƒ"ƒB"#sÓs2C‚"#C"3’¢Ò#s’Ó3“b"3"Ó##2#32Ó33ƒÓ#s’"ƒÓ"BÓ“"ƒÓSb"ƒ"Ó“ƒÓRƒÓ“‚"#s’Ó3“bcrÓ#R#c’Ó#ƒ¢Ò#C’Óc’"c’Ó3Sr“rÓS#ƒ‚ÓCs"#C’Óc’3ÓCC##’ÓC“‚¢"ÒÂfÆs#‡F„F÷vã¢²…öÖ–ã¢ÓÂ…öÖƒ¢#S"Â•öÖ–ã¢ÓSƒÂ•öÖƒ¢sSBÂ†¢33BÂó¢&Ò#“‚ƒb"#ƒrs2#ƒ‚ƒb#ƒrƒ"#ƒ‚S#ƒrcb#ƒ’Sr"#ƒ‚#‚#ƒrC2#ƒ‚3R"“rcs#sb“B#cRss’"SbScc’rSc""CR#’Cƒ""CSB"’#ƒr"3s2’33"2#B’#S‚#3""#c’Sr#‚"’ÓS2##2’Ób"#"Ó3‚’Óƒ"#Ó’"#BÓ##2ÓS‚#BÓƒ"#"Ó3c#BÓ#Sb#"Ó3"ÓS#"ÓC’bÓCSB"ÓSCÓSBÓS#‚"ÓccrÓSƒ2Ó2Óc#B"Óƒ’ÓcsRÓ2Ós“"CbÓƒ3BBÓƒ#R3bÓƒ#’"SÓƒ3RC‚Óƒ3BC’Óƒ3R"c"ÓƒbS‚Óƒ3RS‚Óƒ#B"sRÓsƒc‚ÓƒRsRÓs“R"CrÓcc‚sRÓs#rÓc“‚"#C2ÓSƒ’s’ÓcC#2Óc‚"3cÓ33#RÓSr3cÓC’"3S’Ó#Cb3cÓ#ƒ"3cÓ#cR"3CBÓ#b3SrÓ#3R3S2Ó##""3#rÓƒb33Ó#B3#rÓ“b"33rÓS3#rÓsb332ÓcB"3c2Ór3SÓR3c2Óc"33r3c2#B3S2cR"3#‚R3#‚’3#‚""3333#‚#33#R"3c#“B3C‚ƒB3c#3’"3C23“’3c333Sb3cB"332Cc"33BC#332CC"3CSs2332S3CS3r"3CS“23CSƒ3CSƒ‚"33cc33rcb33‚cC""3#sb3#2csr3#c“"3#‚scR3#s#b3#BsCB"3Cr“#B33‚ƒ‚3Crƒs"33CB3Cr“cR3C2B"3#‚SB33Cr33S"#“‚ƒb3#cr3"ƒb¢Ò#C’S3r"c’#ƒR##’C#b33c’"#C’S3rƒ‚3“’“rCC‚¢Ò#s’3#B"ƒ"’#c’#’crS2"ƒCƒ#bƒ32"3"SƒƒBB#"#s’3#Bƒ#r#32#S‚¢Ò#s"ƒBÓ#cb#C"ÓC‚ÓsB"ƒÓ#3’ƒ"Ó#SbƒÓ#C‚"#rÓCBƒÓ“’“bÓs"#ss’Ó“‚#32ÓS‚¢Ò3BÓ##""sRÓSCr3RÓ3S’#32ÓC#’"3BÓ##""ÓCb##’Ó3#‚¢"ÒÂ66–FVçFÄfÆC¢²…öÖ–ã¢Â…öÖƒ¢#’Â•öÖ–ã¢Ó#‚Â•öÖƒ¢Cs"Â†¢cƒÂó¢&Ò#’Ó3"CbÓ#ƒ’32Ó33’Ó#“r"rÓ#C2cRÓ#sBƒbÓ#S‚"3#r#32ÓS23Ó3"#“‚ƒb3Cr3cb"“#“r#“#Sb#S#“r"Cr#ƒ’sr#“rc2#“B"ƒb#cR#r#ƒBr#sBÂƒR#cBÂƒR3"“CcRƒR3Sbƒ‚C"“BSS’“C“r“BS#r"ƒBcS“BSƒ’“c#"cbcƒƒccƒcƒÂcRcƒ"3rcCRC’cs‚3rccR"32S#23bcR3"Sc2Â32Cs‚"#b##2323“2#’3‚"ÓC#"Ó’"rÓ#ƒrÓƒ’BÓ#3’"#’Ó3#Ó#“R#2Ó3¢Òc‚ÓR"sb"sÓc‚s"Ó#’"ƒrs’C2ƒsRÂƒb’"s3RB#C3R"#B#‚ƒ3R“23""#3‚“"##‚##3’‚"#3c2#3‚ƒB#3bsR"c‚ÓR“2Ó3"ÓS’¢"ÒÂ66–FVçFÄæGW&Ã¢²…öÖ–ã¢Â…öÖƒ¢#BÂ•öÖ–ã¢ÓCSbÂ•öÖƒ¢Cc"Â†¢“‚Âó¢&Ò#SRÓcSr"#ƒÓc#B#sÓcSr#sRÓc3b"#ƒRÓS“’#ƒ"ÓcR#ƒRÓc‚"#“"Ó3#ƒ‚ÓS#ƒ’ÓC"#ƒ’Óc#“"Ó#S2#ƒ’Ó#r"3#‚#“"ÓcR#“r3""3Bc‚3#‚3"SÂ3Bs2Â3R“Â3R“’Â3r##R"3B#S’3r##’3#Cb"#s"#“‚#“r#sB3"3R"c2#cb#B#s’3B#s""s"SBc‚3C‚s"C3""sS“Rs"SCs"Scr"SbccRsc’cbcC""rSs’’cSrc‚"2CB’C32r#ƒ’"Ór“BC2"2Ó3BÓSÓ“""rÓ#’2Óc2rÓ“""3RÓ#SrÓ#C2rÓ#S"C’Ó#C’3’Ó#SC2Ó#SÂ##2Ó##2Â#3Ó##"Â#3Ó3S’"##2ÓSb#3ÓC##2ÓCcB"#3bÓc’##2ÓSS##bÓSƒR"#SRÓcSr#CÓc3B#3bÓcSr¢ÒS‚Óc2"SRƒSbÓBS232ÂSb“’"ƒR“’cR“’sR“‚"#3"‚3BBƒ2rÂ#C’Â#3bcb"#3"ÓC‚#3R#’#3"Ó"S‚ÓƒsBÓc2RÓs2¢"ÒÂ66–FVçFÅ6†'¢²…öÖ–ã¢Ó#"Â…öÖƒ¢3“Â•öÖ–ã¢Ó3ƒBÂ•öÖƒ¢3ƒ2Â†¢scrÂó¢&Ò#"ÓSS2"#’ÓS#b#2ÓSS"#bÓS3b"##bÓCs##RÓSr##bÓCƒ‚"##RÓC#R##bÓCSR##RÓCC"##bÓ3“"##RÓCR##RÓC""#32Ó3R##’Ó3c2#3"Ó33BÂ#“rÓ#“""33ÓCc’3Ó3S23ÓC""3CrÓCƒR332ÓCsr33‚ÓCƒR"3c2ÓCc’3SbÓCƒr3S’ÓCsr"3sBÓC‚3s2ÓCSB3sBÓC3R"3sbÓ3ƒ"3sbÓCR3sbÓ3“2"3s"Ó#sb3sbÓ3Cr3s2Ó3ÂCSRÓ#S’"SSÓSbS3BÓ#C2SCBÓ#3""SSÓ’SSÓ3rSS"Ó#B"S#bÓs‚SC’Ó“SCÓs‚ÂS#2Ós‚"SrÓs’SrÓs‚S2Ós‚"C2ÓCsBÓƒ‚C3‚Ó“RÂ3s’ÓR"3ƒ"ÓC"3ƒÓƒR3ƒÓc2"3ƒB“b3ƒ2B3ƒBS"S23C#RrCcB‚"SC’s2S#B3‚SC2S"Sc"#C’SSB“’Sc"##2"SSB#“BSc"#cBSc#s’"S3b3RSC’3‚SCB3RÂS323R"Sr3"S#‚3RS#23R"3ƒ"#cbCs"#“BC#‚#s’Â3sr3CB"3S’S33sBCb3s"Cc’"3C‚SS"3SbS3’3SrSS"Â3CrSS"Â3C2SS""3RS#‚33SC’3rSCBÂ3RS"3##C’3RCb3‚332Â#C2#3""#3’3c#C2#sR#C"3‚"##bC#R#3‚3ƒ2#3‚C2"“’3S’“BC’“’3ƒ""“2##2“b3"“B#c‚"s"#"S2#R"#’"B‚2“"Bƒ2"cb""ƒB"32#’r3’B3"C‚3"3r#’C"3"ƒrSR“R3’CCbÂƒ2ÓsR"sbÓCRƒÓ“’s’Ó#""bÓs’#"ÓSbc’Ócb"Ó3"Ó#3"ÓBÓƒbÓ3"Ó“r"ÓrÓ33Ó3"Ó#cbÓ’Ó#“‚"ÓÓ3SbÓrÓ3CrÓ2Ó3SB""Ó3S2Ó3SbbÓ3SB"crÓ3#c2Ó3CRÓ33"cbÓ3srcbÓ33‚cbÓ3Sr"ƒ’ÓS#bcbÓC#‚sÓCsr"#"ÓSS2“"ÓS3bƒ’ÓSS2¢Ò#CÓ3""#C2Ó3r#C"Ó#C"Óc’"#CRcR#CRÓ2#CR3"3Rs’#c’c’#“"s2"3Ó#3‚23RÓS2¢"ÒÂ66–FVçFÄF÷V&ÆU6†'¢²…öÖ–ã¢Â…öÖƒ¢#ƒrÂ•öÖ–ã¢ÓS’Â•öÖƒ¢S’Â†¢3‚Âó¢&ÒƒBÓ##’"rÓ#b“Ó##’“‚Ó##R"#Ó#R3‚ÓƒbcrÓSB"#3"Ó“R#"ÓR##"ÓR"3CrÓƒ’#sÓ#R3ÓSr"3sÓ#3SbÓ“b3c2Ó#"3“bÓs’3ƒÓ#3ƒ’Ó“""C"Ó"CÓSBCbÓ#R"3srÓ#rCÓc’CÓCbÂ3#RB"C"“3SC"3sBc‚"C2#rC“bC2r"3ƒ"#C’C‚3“rsb"3S##’3s##3c##’"3B#3C##’3#‚##2"#sBsB3“’#ƒRƒr"#"B#S"S#3"#‚"“"ƒrs23"3"c"s‚“2ƒb“"ƒ"“2"c‚“sR“2s"“2"C‚s’c"ƒbS2ƒr"C3rC2c‚CSB"ƒbC“"Sb3""rÓ2ƒ’“‚B"BÓ“BsbÓ3"CRÓc""Ó#BbÓ"ÓB""ÓSBÓ3B2ÓCB"c"Ó#R#bÓsbC‚Ó“2"ƒBÓ##’c’Ó##RsbÓ##’¢"ÒÂ66–FVçFÄF÷V&ÆTfÆC¢²…öÖ–ã¢Â…öÖƒ¢3S’Â•öÖ–ã¢Ó##Â•öÖƒ¢CCbÂ†¢ccbÂó¢&ÒC2Ó3r"s"Ó3SRÓ3rc2Ó3"cÓƒb‚Ó#c‚3BÓ##b"#3bÓcƒbÓCR#"Ó""#32Ó3#3RÓƒR#32Ó‚"#3’Ó###32Óc#3RÓ“"#S’Ó#Cb#CÓ#32#3’Ó#C"3Ó##‚#ƒBÓ#S"#“Ó#3‚"CcRÓr3c’Óc2CbÓƒR"Srs2SC‚Sr‚"CS3rSr##’SR#ƒB"C’3RC3b3"C#"3R"33#ƒr3ƒ"3R3Sb3R"3#sB3#B#ƒ"3##sBÂ3#sBÂ3Scb"3Rc#3SƒR3"c2"#“BcC"3c#‚3RcC"Â#“"cC""#cBc#"#ƒ"cC#cbc3b"#S2SsR#S’cb#SbS“"#CbC‚#C‚S#2#CbCs"#C‚#C2#Cb3c#C‚3"Â#C‚ƒr"cB#3‚####R“2#3‚"ƒR#2C#3‚"##b"ƒB##’ƒR##ƒB##R"ƒb3RƒR#S‚ƒb#ƒr"ƒS#‚ƒb3ƒbƒ"CS‚"sSƒ"ƒSCrs‚Scb"Sbc2cbS“c‚c2ÂS2c2"#2SƒCc#bS“‚"’S3r#Scb’SS""#SB’S3’S#"#b3“#BCs"#bC3""Bcb#b#ƒ"bsB"Óc‚2Ó"Ó“""Ó#s’Ó#b2Ó#C""3Ó3BbÓ#“BBÓ3‚"C2Ó3r3RÓ3r3’Ó3r¢Ò3Ós""3"r3"ÓCR3"Ó’Â3"ƒb"3SS‚3B#3#CR"3ƒ2cb3cc23s2cb"C3RC2C"cbC’Sr"CCR#rCC3‚CCR3""CCBCCR#"CCB‚"3Ós"3“rC’3SBÓB¢ÒsRÓCr"s23sRÓƒbsRÓ#’"‚ƒ"s2c"“"sb"3"ƒB#BƒB#‚ƒB"“S"SbƒBsBc’"“2C“"C’“2CR"“"32“23r“23R"sRÓCrSrÓ3#RÓ“R¢"ÒÂ66–FVçFÅ&Vç4ÆVgC¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó#sÂ•öÖƒ¢#c‚Â†¢S3‚Âó¢&ÒrÓ3ƒ’"#rÓ3sBBÓ3ƒ’#Ó3ƒB"CÓ3Cr3"Ó3cr3rÓ3Sr"SÓ#“BC‚Ó33SÓ3"#"Ó#rSÓ#cRCÓ#3b"c2ÓcR“BÓcBs"Ór"S’ÓcÓCbS’Ó#r"CR##2S’s‚“BS2"ƒr3SBsb#c"ƒ’3R"sr3ƒBƒr3cB“3ƒ"C23s2cb3ƒrS23ƒ2"#B3SB3r3cr33c"Ó3R32#C‚ÂÓ“""ƒRÓ3s"BÓ“2#rÓ#ƒr"rÓ3ƒ’“"Ó3ƒ2“’Ó3ƒ’¢"ÒÂ66–FVçFÅ&Vç5&–v‡C¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Ó#sRÂ•öÖƒ¢#srÂ†¢SS"Âó¢&ÒS‚Ó3“b"“bÓ3SBsRÓ3“bƒRÓ3s"#2c‚Ó#3‚#Ó"S2#c‚#’ƒB“"C’3“"33#3cB"#b3“’C3“r323“’"3cb3“’3ƒr"3‚Ó3S33BÂ#“"#r#3‚Ó2#cbr#S2"C2’RƒC2“‚"CÓ#C2ÓC2Ó"c2Ó##R3RÓ“"‚ÓcB"3bÓ3rCRÓ#S3bÓ#s‚"CÓ3CB3bÓ3#3rÓ33"C"Ó3SbC"Ó3CrC"Ó3S"S‚Ó3“bC"Ó3sB3rÓ3“b¢"ÒÂ66–FVçFÅV'FW%FöæTfÆE7FV–ã¢²…öÖ–ã¢Â…öÖƒ¢#‚Â•öÖ–ã¢Ó#CÂ•öÖƒ¢CCÂ†¢cƒÂó¢&Ò#s"Ó3Cb"#ƒBÓ332#s‚Ó3Cb#ƒÓ3C"3Óƒr#“rÓ#ƒR3Ó#3R"#sRsr3ÓcR#s’SR"#c‚C3"#s"#c"#c‚3CrÂ#c‚Csr"#cBS“’#c’Sr#cRSS’"#3bc3B#cBc’#S"c3"Â#3Rc3B"#rcR##c3B##cR"#rS2#SsR#rSC2"#C’#rCƒ#CS"#b#SR#23cB#b3Â#b#rÂ#R#’"SB#C2“B##‚sB#3‚"#S3‚#C‚#B#S"2CS#S#"ƒ#"“BÓ#ƒ’Ósbc‚Ó“’"#SRÓ33b#RÓ3B#3bÓ3#"#s"Ó3Cb#c"Ó3C2#c‚Ó3Cb¢Ò#32ÓS"src‚ÓR‚ÓSb"c2CbcR#’c23r"“bƒ"c"c"s2s2"3ƒ’‚ƒb#ƒ’"#Rc2cƒ’ƒrsRÂ##c"##RÓ3R###’##"Ó2"#32ÓS##’ÓsR#3ÓB¢"ÒÂ66–FVçFÅF‡&VUV'FW%FöæW4fÆE¦–ÖÖW&Öæã¢²…öÖ–ã¢Â…öÖƒ¢C#"Â•öÖ–ã¢Ó#CÂ•öÖƒ¢CCÂ†¢cƒÂó¢&Ò#s"Ó3Cb"#ƒBÓ332#s‚Ó3Cb#ƒÓ3C"3Óƒr#“rÓ#ƒR3Ó#3R"#sRsr3ÓcR#s’SR"#c‚C3"#s"#c"#c‚3CrÂ#c‚Csr"#cBS“’#c’Sr#cRSS’"#3bc3B#cBc’#S"c3"Â#3Rc3B"#rcR##c3B##cR"#rS2#SsR#rSC2"#C’#rCƒ#CS"#b#SR#23cB#b3Â#b#rÂ#R#’"SB#C2“B##‚sB#3‚"#S3‚#C‚#B#S"2CS#S#"ƒ#"“BÓ#ƒ’Ósbc‚Ó“’"#SRÓ33b#RÓ3B#3bÓ3#"#s"Ó3Cb#c"Ó3C2#c‚Ó3Cb¢Ò33bÓ3Cb"3S2Ó33b3CÓ3Cb3CbÓ3C2"C2Ó#ƒ’3s"Ó3#3“2Ó3B"c‚ƒSCÓ“’c‚Ósb"cRCc‚c‚#"C“r#SS“‚#SSr#S"CSB#C2CƒB#SCc’#C‚"3“2#’C32#3‚C2##‚Â3“"#rÂ3“"#SR"3“rC’3“"33“R3cB"CS23“rCSCCƒ"3“cRCSC23“rSsR"3s2c3B3ƒrcR3ƒrc3BÂ3s"c3B"3CBS“’3Sbc3"3CBc’"3CCsr3C2SS’33‚SrÂ3CC3""332sr3C3Cr33b#c""3‚Óƒr3#‚SR3‚ÓcR"3#BÓ3323‚Ó#3R3Ó#ƒR"33bÓ3Cb3#rÓ3C33Ó3Cb¢Ò#32ÓS"src‚ÓR‚ÓSb"c2CbcR#’c23r"“bƒ"c"c"s2s2"3ƒ’‚ƒb#ƒ’"#Rc2cƒ’ƒrsRÂ##c"##RÓ3R###’##"Ó2"#32ÓS##’ÓsR#3ÓB¢Ò3sBÓS"3ƒ2Ó3R3srÓB3s’ÓsR"3ƒrc3ƒbÓ23ƒr#’Â3“2c2"Cs‚ƒ’C#sRCC‚ƒ’"Sƒ"Cƒ‚ƒ’Sƒb"SCBCbS3Bs2SCbc""S3rrSCB3rSC2#’"3sBÓSSÓSbC3’ÓR¢"ÒÂ66–FVçFÅV'FW%FöæU6†'7FV–ã¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó33‚Â•öÖƒ¢3SÂ†¢cƒ’Âó¢&Ò“BÓCƒr"##RÓC3"#RÓCc’##2ÓCS""#3‚Ó#3"##’Ó3cb#3bÓ#“‚"3srÓ“’#ƒRÓ##33Ó#’"C‚ÓcB3“rÓ“2CÓƒ"C3"Óƒ‚C#‚Ó3‚C3"ÓB"C"ÓC"C3"ÓSRC#‚ÓC""3ƒ’ÓCbCbÓC"3“’ÓC2Â#3RÓƒR"#32Ó##3RÓc2#32ÓC""#32R#3"#"#32c2"3"##S’#ƒRr"Cb##b3“3BCCR"3s2#ƒBC’#c‚C"#ƒB"3CB#ƒ3cB#ƒB3Sb#ƒ""#3"#S‚3r#sb#c’#cb"#33‚#3"#sR#3"#“"#SR##’3sB#3"CC"ƒ2Csƒ’SƒBC“"ƒCbƒCC’ƒC#‚"ƒB#Cbƒ3S2ƒB3"C‚##"C#3b“B##‚"c‚b#b#’"rƒbCBB"#rcb’s22cbÂ3Rcb"ƒB“BƒRcb3RƒB"ƒrÓƒBc"ƒb3"“Ó“bƒ’Ó32“ÓcRÂ"ÓB"3RÓ#2#rÓ3"3RÓ3""32Ó#S23RÓ##b3RÓ#C"C’Ó#sb32Ó#c’3rÓ#sb"c"Ó#sRS"Ó#sbSbÓ#sbÂƒbÓ#CRÂƒbÓ#Sb"s’Ó3ƒrƒÓ3srÓ3C2"“BÓCƒrƒÓC’s’ÓCSB¢"ÒÂ66–FVçFÅF‡&VUV'FW%FöæW56†'7FV–ã¢²…öÖ–ã¢Ó#2Â…öÖƒ¢3ƒ‚Â•öÖ–ã¢Ó3s2Â•öÖƒ¢CCRÂ†¢ƒ‚Âó¢&ÒBÓS3r"3‚ÓCsR3rÓS‚3‚ÓC“R"CrÓ#“"3‚ÓC2CBÓ3S2"#"Ó#s‚c‚Ó#ƒr“Ó#ƒ""#C2ÓCCB#RÓ332##RÓ3ƒ’"#cÓCcr#C‚ÓCSB#SÓCcR"#ƒÓCCb#s"ÓCc’#sbÓCSR"#“"Ó3Cr#“"ÓCb#ƒ‚Ó3ƒB"#ƒ‚Ó#c"#ƒ’Ó3##ƒ‚Ó#“Â3sBÓ#CR"3sbÓ33sBÓ#cb3sBÓ#ƒ‚"3“ÓCSb3s’Ó3Sr3s’ÓCR"CbÓ3“bC"ÓC3bCRÓC‚"C#2Ó#ƒrC#Ó3cC#2Ó3#2"C#"Ó#3RC#2Ó#c’C#2Ó#S""CSÓ##’C3"Ó#32CCÓ#3""SCrÓ“‚S#BÓ#RSCrÓ“’ÂSCrÓƒ’"S#ÓC’SCbÓS’SCÓC’"C“rÓS"SbÓC’SrÓC’"C‚Óc‚Cc’ÓSbCCBÓc2"C#2S"C’Ó#’C#"""C#bCC#RƒC#R’"C“RcCC’CRCs"S2"SS"#’S#bsSCbƒ’"SS’#s’SSr#CSS2#c""S33CSS’3#BSS"3C"C“33S#3CSr33‚"C3"3Cs3#BCS"3‚"CC’SS"C3b3“"CC"Cs"CS"Sƒ‚CSSc2CS"SsR"CCbc#"CS"S“’CSc"C3bcCCCBc#’CC‚cC"C‚c#‚C#‚cCC#c3b"C’c"C2c#Cc"3ƒb#“r3“bS3“3“’"#“r#sB3Sb#ƒ‚3#r#ƒ"#“C2#“R3r#“B3c"#sBSS#ƒ‚CS"#ƒBS"#S’Sc’#sScB#cRSc’"#CSS’#S2Sc’#C‚Sc2"#3S3r#3"SSB#3SCbÂ#3Cƒ‚"#323c’#3CC‚#3"C’"#3b#c#3b332#3‚#“r"Sb#CR##SRƒ2#S"SB3“bSB#“RSB3Cb"SCbSBC2S2C"CC3‚CRC#2SC3‚Â3‚C3‚"‚C2#‚C3b‚C#‚""3SB‚3“2B3sB"’#3‚’3R’#sb"C’##bƒ’#32c’#3"2c2b##"2#""r“23‚’B"#’c"rc’2c""3’c23"c"3Rc2"Bs2ccbƒ"s"ÓBCb"rÂ“"Ó3"ÂÓS"Ó32Ó#BÓ’ÓSrÓ32Ós"Ó’Ó3Ó3"Ó#CÓ’Ó#sB"ÓbÓ3#BÓ’Ó3#Ó2Ó3#B"bÓ3#2ÓÓ3#BÓ3#B"ƒ"Ó3r3"Ó3rS‚Ó3"ƒÓ3sbƒ"Ó33ƒÓ3S2"BÓS3rƒÓC3“BÓCƒB¢Ò#“BÓ“""#“rÓ3r#“RÓs2#“RÓSb"3C’3Ó’3#Â3‚"3s’#r3#RB3S2#"3sBÓsb3sbS’3sBÓ’"#“BÓ“"3CrÓƒ"3#Óƒb¢ÒSBÓ#"Sr#SBÓs2SbÓ#b"S‚ƒ"S‚CS‚c""#3“Rƒ2ƒb#bƒ’"##R##’c2##b3""#rÓr##2Ó3R##Ós¢"ÒÂ66–FVçFÄ'W—V´×V6VææV$fÆC¢²…öÖ–ã¢"Â…öÖƒ¢#ƒrÂ•öÖ–ã¢Ó#C‚Â•öÖƒ¢C3"Â†¢cƒÂó¢&ÒC#‚"3"#3’C2“’3c2#3’"#S’#3"#ƒ’#3’#sR#3b"“’#r#3’##b#’#bÂ“r#bÂ“r#C2Â“r#S"3Cr3r#C‚#s"#“‚#“R"3sb3Cr3c3#B3s"33B"3ƒ’C3R3ƒr3sb3“2CR"3C‚CSB3ƒBCc"3srCcR"#"3ƒr3C3"#SC’"#2C‚#23“R#2C"Â#2C3"3CrC“#S"CS3Cc’"3sbSr3cC“R3s"SR"3ƒ’S“’3ƒrSCb3“2Ss""3C‚cb3ƒBc#R3src#‚Â#2SSb"“bS“2#"Sc’“’Sƒ""s’c#"“2c2“2c#"Âsrc#""SSƒ‚cc#Sc‚"CrS32SSsC‚SS""#’Cƒ‚‚Src’S2"2CSR"Cƒ"2Cs"""3S2C#"’3ƒ’"CRC‚Sb3s"3ƒ’"CR3c2CR3“"CR3srÂ#’3R"2#ƒ"32#“‚""s#CR’#’ÂC##b"3‚cbC#b3‚ƒb"BÓ“’3BC2RÓsb"3Ó3CBBÓ#CbrÓ#“r"CÓ3Sr3"Ó3S23RÓ3Sr"S‚Ó3CrCRÓ3SrSÓ3SB"#’Ó3srÓ33“’Ó3R"C2c’3CbÓ#C2Óƒ‚"C#‚C2ƒ’C2‚¢Ò3S3R"3C2b3S#b3C‚r"ƒÓc23‚Óc’#CRÓr"ƒ’ÓCbƒ2Ó#RƒBÓƒb"“2C’“"ÓB“2rÂ“’S""#ƒBs‚##bc2#S2s‚"3rs#“Bs‚3RsR"3S3R3Cc"3SS¢"ÒÂ66–FVçFÄ'W—V´×V6VææV%6†'¢²…öÖ–ã¢ÓÂ…öÖƒ¢CcrÂ•öÖ–ã¢ÓCcÂ•öÖƒ¢3SÂ†¢ƒÂó¢&Ò#3Ócc""#SbÓcR#C’ÓcCr#SRÓc3"#cBÓC“R#cÓSsR#cBÓS3B"#cÓ3c#cBÓCS#c"ÓCb"CRÓ3#B3"Ó3C‚3c2Ó33b"CbÓCCRCRÓ3cBCbÓCR"C3ÓS“2CbÓC“"C’ÓSC"CS‚ÓS32CSBÓSs2CSbÓSSB"CcBÓC‚Cc"ÓC“BCcBÓCSR"CS’Ó3BCcBÓ3ƒ2Cc"Ó3C‚"S3Ó#“‚CƒBÓ3‚S‚Ó3B"SsÓ#S’SSBÓ#“"ScbÓ#s‚"Ss’Ó“"SsRÓ#3bSs’Ó#R"SsbÓcBSs’Óƒ2SsrÓs2"SSbÓC2Ss2ÓCrScrÓC2"SC2ÓCBSS2ÓC2SC’ÓC2"CS’ÓcBSbÓSCƒrÓSr"Cc"Ó"CS’ÓCBCcÓ#"Âc‚Ósb"ccrÓ#Bc3’ÓsccÓS2"cs"’csÓ’cs’Âcs"Cb"cC‚cc‚“Bcc"‚"cRc3"‚c#RÂSƒ“b"Cc’s"SCBƒ‚Srs’"Cs3Cc’“Cs"S#CCƒ‚3RSB3‚"Ss2“rSSC‚Sscr"Ssr#sSsb##"Ssr#Cb"SS23Ssr#“Scr3"S3r#“rSC’3SC2#“‚"Cƒ#ƒRSr#“"C“‚#ƒ‚"C“CCƒ"3#rCƒR3c’"C“BCCRC“"C#"C“BC32"Cƒ‚Cƒ"C“BCS‚C“"Cc’"CsrSBCƒrC“C“SB"CSRCƒBCcrSBCS‚C“R"CSCcBCS"Cs‚CS"Cs"C32#sRCC"C"C3‚33‚"#ƒ"#Cb3ƒ2#cR332#SRÂ#“3Cb"#“B3ƒ"#“"3S’#“B3s"#ƒrC‚#“B3“R#“"Cb"#sbC3R#ƒBC#2#ƒ’C3R"#S’C#2#c’C3R#cBC#’"#S3“r#SRCb#S"Cb"#3R#3’#C"3Cb#3’#“""cb##‚#"#3Rƒ’#3""‚s3B##2"#r"#C#c#S"#ƒB##‚""3c’#sR#"c’"3‚s3"c’3Rs"##bƒRc‚sR“rƒ"##23##bcb##RC’Â##2rÂCRÓ#""ÓÓ“"2Ó#’ÓÓC‚"ÓsÓÓ‚2ÓCR""ÓƒrÓƒBBÓƒr"#"ÓƒbBÓƒrrÓƒr"RÓcBS2Ós’ƒBÓs"#rÓCRSÓS‚ƒ2ÓS2"#RÓ##R#bÓs2#bÓ“’Â#2Ó##’"3"Ó#sRCÓ#Cb3"Ó#C’"3BÓ3R3"Ó#ƒR3BÓ#“‚"3RÓ3ƒ"3BÓ33b3"Ó3S’"CBÓ3“b3RÓ3ƒb3BÓ3“b"SÓ3“RCRÓ3“bC‚Ó3“b"#RÓ3sbsÓ3ƒr“2Ó3ƒ""#bÓSb#RÓC#"#RÓCc‚"#3Ócc"#rÓSc2#’Óc¢Ò#s#r"#sB“B#s"S#sBs""C#R#"3#B"3sB"ÂC#R"C#"c"C#2ƒ‚C#2sR¢Ò#c"Ósr"#cBÓ3r#cBÓcB#cBÓS"C‚Ó’3RÓ#‚3cbÓ#"CRÓsBCbÓ3CbÓS2"#c"Ó#23cBÓƒb3"Ó“’¢"ÒÂ66–FVçFÄ&¶—–TfÆC¢²…öÖ–ã¢"Â…öÖƒ¢#ƒrÂ•öÖ–ã¢Ó#3bÂ•öÖƒ¢CCBÂ†¢cƒÂó¢&ÒCÓ3C"S‚Ó33CRÓ3CSÓ33r"#’Ó#ƒBsrÓ3B“’Ó#“‚"C2ƒb3CbÓ“2C2Ós"CCRC2rC2#R"3"#SbC2#b3c2#Sb"#S’#C’#ƒ’#Sb#sR#S2"“’##R#3’#C2#’#32Â“r##2Â“r#c"“’33B“r#ƒR“’3"3CrCb#C’3Sr#“‚3ƒ""3sbC3’3cC23s"C#R"3“Sb3ƒBCcR3“C“"3ƒ’S3r3“S#23“S3"3s"ScB3ƒBSSb3ƒ"ScB"3C‚SSr3crScB3S’Sc""#BCƒr3S3r#S2S"#bS‚#bC“r#bSr"“bc#bSC’#2Sƒ"s’c3’“2c#“2c3’Âsrc3’"ScRcc3‚Sc#R"CRCƒ"C‚ScBCBS#2ÂCRCS‚"#’CRrC3’c‚C#"23cb"3“r23ƒb""#C23#R’#ƒr"C23rSb#cR“’#ƒRÂ3‚ƒ2"BÓƒ3BcBÓS’"3Ó3#rBÓ##’rÓ#s’"CÓ3C3"Ó33b3RÓ3C¢ÒƒÓCR"ƒ’Ó#’ƒ2Ó‚ƒBÓc’"“2cb“"2“23RÂ“’c’"#ƒB“R##bƒ#S2“R"3rƒ‚#“B“R3R“""3SS"3Cs’3Sc‚"3C2#23SC23C‚3R"ƒÓCR3RÓS#CRÓ“’¢"ÒÂ66–FVçFÄ¶öÖ6†'¢²…öÖ–ã¢Â…öÖƒ¢3Â•öÖ–ã¢Ó33‚Â•öÖƒ¢3SÂ†¢cƒ’Âó¢&Ò“BÓCƒr"##RÓC3"#RÓCc’##2ÓCS""#3‚Ó#3"##’Ó3cb#3bÓ#“‚"3srÓ“’#ƒRÓ##33Ó#’"C‚ÓcB3“rÓ“2CÓƒ"C3"Óƒ‚C#‚Ó3‚C3"ÓB"C"ÓC"C3"ÓSRC#‚ÓC""3ƒ’ÓCbCbÓC"3“’ÓC2Â#3RÓƒR"#32Ó##3RÓc2#32ÓC""#32R#3"#"#32c2"3"##S’#ƒRr"Cb##b3“3BCCR"3s2#ƒBC’#c‚C"#ƒB"3CB#ƒ3cB#ƒB3Sb#ƒ""#3"#S‚3r#sb#c’#cb"#33‚#3"#sR#3"#“"#SR##’3sB#3"CC"ƒ2Csƒ’SƒBC“"ƒCbƒCC’ƒC#‚"ƒB#Cbƒ3S2ƒB3"C‚##"C#3b“B##‚"c‚b#b#’"rƒbCBB"#rcb’s22cbÂ3Rcb"ƒB“BƒRcb3RƒB"ƒrÓƒBc"ƒb3"“Ó“bƒ’Ó32“ÓcRÂ"ÓB"3RÓ#2#rÓ3"3RÓ3""32Ó#S23RÓ##b3RÓ#C"C’Ó#sb32Ó#c’3rÓ#sb"c"Ó#sRS"Ó#sbSbÓ#sbÂƒbÓ#CRÂƒbÓ#Sb"s’Ó3ƒrƒÓ3srÓ3C2"“BÓCƒrƒÓC’s’ÓCSB¢"ÒÂ66–FVçFÄ·V7V´×V6VææV%6†'¢²…öÖ–ã¢Â…öÖƒ¢3S’Â•öÖ–ã¢ÓC#Â•öÖƒ¢3C2Â†¢sc2Âó¢&Ò#3bÓcR"#c"ÓSC2#SbÓSƒ2#cÓScB"#c’ÓC#2#c‚ÓS2#c’ÓCcB"#cbÓ3C#c’Ó3“b#c‚Ó3crÂ3cÓ3‚"CRÓ#sb3ƒBÓ3"3“’Ó#“‚"C2Óƒ’C"Ó#C‚CbÓ#’"3“RÓcBC"ÓsC’ÓcB"3ƒ"Ócb3“"ÓcB3ƒrÓcB"#cBÓ“23C2Ósb3BÓƒB"#c’Ó"#cRÓc2#c‚Ó3""CSBÓc"33Óƒ’3“"Ós‚"SÓ#2CsrÓS‚C“BÓCR"Src"SbSr32"Cƒr"Sr“RS2""CsCƒ""Csr""#sBcbCb“R3Cƒ"#sb3‚#sR“#sbB"3SSB3CB3#RC‚"C"#23src3“bsb"C"#ƒBC‚#3C"#S‚"3“"3C"3"Cb3"3s"3‚3ƒb33s’3"#ƒr#“3C233B#“rÂ#“RCR"#“‚CC#“rCb#“‚C#‚"#“"CsR#“‚CS"#“rCcB"#ƒ"C“B#ƒ’Cƒ"#“BC“B"#cBCƒ#sBC“B#cbC“"#SRCSR#S’CsB#SbCcB"#3’#ƒ"#C‚3“r#C23C"C‚#c‚#’#s‚s’#sB"c"cBc"#S"c"#S2Âc"3""s’‚crcR‚Âƒb‚Â#33"##’“"#3‚##’R"##‚Sb##‚s’##‚c‚"cb#s2C2#3""ÓS’br2ÂÓ3‚"BÓcÓÓSbBÓc"#rÓS‚’Óc#2Óc"##"Ó"“"ÓCSrÓ#r"##Ó#2##ÓC2##Ós2"CrÓ#r“bÓ#rsÓ#2"ƒ’Ó#ƒ‚“"Ó##‚ƒ’Ó##’"“RÓ3CrƒRÓ3R“bÓ3#R""Ó3sB“"Ó3cb“‚Ó3sB"#RÓ3s2rÓ3sB#Ó3sBÂ##Ó3S"##"ÓCS‚##Ó3ƒb##ÓC#""#3bÓcR##2ÓSB##RÓSS"¢"ÒÂ66–FVçFÄ¶÷&öã¢²…öÖ–ã¢Â…öÖƒ¢32Â•öÖ–ã¢ÓCc"Â•öÖƒ¢ƒÂ†¢cC"Âó¢&ÒS’ÓccR"s"ÓcC’c’Ócc"s"ÓcSr"c’Óc#bs"ÓcC"c’Óc3B"c’Óc#"c’Óc#Rc’Óc#BÂc’Óc"SRÓSbcÓCSbc‚Ó3"ƒbÓscbÓcbsbÓs""Óc2“RÓsBÓcb"3“Ó3R#BÓ##“‚Ós‚"C3bÓC’Ó#rC3bÓ#r"3“bCbC3b#"C232Â3ƒ"SR"Cb#C2#s#Srs’""#S’#’#S2r#S’"#’#S’#C‚"2Ó3s"#"2Ósb"bÓcb2ÓCSBbÓS3b"S’ÓccRbÓc3‚CÓcs¢ÒSR“’"3c2#BSbC#S‚ƒB"SRÓ‚#S’Ó#BcÓc’¢"ÒÂ66–FVçFÅ6÷&“¢²…öÖ–ã¢Â…öÖƒ¢C3BÂ•öÖ–ã¢Ó#“RÂ•öÖƒ¢3#RÂ†¢c#Âó¢&Ò“BÓC#R"“bÓC’“BÓC‚“bÓC2"“BÓ“B“bÓ33r“bÓ#cb"3cBÓ#r#SÓs3‚ÓS"3cÓ3#3c2Ó“"3cBÓ#Sb"CÓ3ƒr3cÓ3Sr3s2Ó3sr"C2Ó3s2C"Ó3ƒ"C2Ó3sr"C‚ÓBC‚Ó#ƒrC‚Ó#ÂC‚ÓR"S“RÓ3RCsrÓƒ"S3bÓS’"c#Rc"Ó#rc#RÓ#""S“2C‚c#B#2c‚3’ÂC’r"C#23sC’#"C#2#ƒR"C#bC2C#23ƒ"C#b3“2"C‚C3bC#bCRC#RC#b"3ƒBCc‚C’CC’3“’Cc‚"3c’CC‚3sCc‚3c’CS’"3c’C3b3c’CCB3c’CCÂ3c’C#‚Â3c’C#2"3cr3‚3c’3#‚3cr#32Â3S2C2Â“"#rÂ“"3cr"s2Cb“"3ƒ2ƒB3“b"SC#"crC2cC#""CBC#C‚C#"CrC#""3rC23‚Cb3rCÂ3r3“"Â3r##’"32#s"#C2c‚#Sb"2#sb#b#sB’#sb"#c"b#sb#s""3R“’#3’#"Â3‚c"CÓC‚3‚S‚3‚ÓCR"SbÓƒÓS‚ƒBÓs"#BÓ#R3RÓƒ’#BÓ“’"#’Ó#3R#BÓ###bÓ##‚"C’Ó#S23RÓ#C’C"Ó#S2"s‚Ó#CS’Ó#S2c’Ó#C2"CÓ#b“‚Ó#32#Ó##RÂCÓ3Sb"“BÓC#RCÓCbCÓCb¢Ò“BÓ#R"“23‚“BÓ3r“2S"3Rƒ’#32#"#sRr"3cbs332ƒB3Ssb"3cBÓS‚3cb#r3cbÓb"“BÓ#R3‚Óƒ#SÓB¢ÒC’C’ÂS#brÂCƒRÓÂC’Ó3b¢"ÒÂ'F–466VçD&÷fS¢²…öÖ–ã¢Â…öÖƒ¢C#RÂ•öÖ–ã¢Â•öÖƒ¢3#bÂ†¢3#bÂó¢&Ò#r"s‚"Cbc"b"3Cr"c‚CR#S2“"S#ƒBC’#‚CS’cr"c‚#S’SSr“BSƒ’##"c"#sBc#cRc"#s"S“‚#“"c"#ƒc‚#ƒr"Csr3CrSS’3"S‚33"sbCcR3sB3ƒB#sRC#R"SbCc’c‚Cc‚cCc’"#RCSbCRCc’3rCcR"S23s“bC3"s‚3“’"CR3S2C‚3c2CR3Sr"c‚332CR3CBS"33r"3c##Rcb#“‚#c"#c"“"SB3"#2#C’s"23b#3"S2R"2’#’#"Â’"b2Â#b"#r#r#r¢"ÒÂ'F–466VçD&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢C#RÂ•öÖ–ã¢Ó3#bÂ•öÖƒ¢Â†¢3#bÂó¢&Ò#bÓCc’Â#rÓCc’"s‚ÓCS‚CbÓCc’c"ÓCcB"3CrÓ3Src‚ÓC#b#S2Ó3ƒ"S#Ó#ƒRC’Ó3CCS’Ó3""c‚Ó#SSrÓ#sbSƒ’Ó#C’"c"Ó“bcÓ#Bc"Ó#"S“‚Ós’c"Óƒ’c‚Óƒ2"CsrÓ#"SS’ÓSrS‚Ó3‚"sbÓB3sBÓƒR#sRÓCR"Sbc‚Óc"#RÓ2CR3rÓB"S2Ó“’“bÓ3rs‚Ós"CRÓrC‚ÓrCRÓ""c‚Ó3rCRÓ#RS"Ó3""3cÓ#CRcbÓs#c"Ó#’"“"Ó3R3"Ó#cb#C’Ó3"2ÓC32#Ó33rS2Ó3cb"ÓCSb’ÓCC"ÓCC‚ÂÓCc"bÓCc’2ÓCc‚ÓCc’¢"ÒÂ'F–5FVçWFô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢CsÂ•öÖ–ã¢Â•öÖƒ¢SbÂ†¢SbÂó¢&Ò3r"“rSbs’"C’b#c‚33‚b"Cƒ"BC3"bCS’b"SSbS‚2S3B"cSSƒ‚c#2"cs‚#rcc""cs‚"cSBS’cƒCRcs"S2"SsRcbs2Scs2"#SRƒC#bs‚3Cƒ"cs’##"ƒ“2s’Â3bs’"s#Bs‚rƒR"’3"Ó2Sb’C2"CRb#b#B3b#"3rsb2‚¢"ÒÂ'F–5FVçWFô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢CsÂ•öÖ–ã¢ÓS’Â•öÖƒ¢Ó2Â†¢SbÂó¢&Ò3rÓƒR"“rÓƒBSbÓƒRs’ÓƒB"C’Ós’#c‚ÓƒB33‚Ós’"Cƒ"ÓƒC3"Ós’CS’Ós’"SSbÓƒRS‚Óƒ"S3BÓƒR"cSÓsRSƒ‚ÓƒRc#Óƒ""cs‚ÓS‚cc"Ós2cs‚ÓsR"cSBÓ#bcƒÓCcs"Ó3""SÓcbÓ"ScÓ""#SRÓBC#bÓr3CÓB"cÓb##"ÓB“2ÓbÂ3bÓb"ÓB#BÓrr"’ÓS2Ó2Ó#’’ÓC""CRÓc’#bÓc3bÓcR"3rÓƒRsbÓƒ"‚ÓƒR¢"ÒÂ'F–57F66Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢"Â•öÖ–ã¢Â•öÖƒ¢SbÂ†¢SbÂó¢&Ò“‚"3"#2’#"r"c"SScs’"S‚C‚c#Bc3r"#RƒbSBcr3cr"c2##Rr#RƒR#b"#2“rCR##"3#’"2“"c2"#r"’cbs’Bc’"cR#rCc"S2Cb"“‚sb’ƒ‚¢"ÒÂ'F–57F66Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢"Â•öÖ–ã¢ÓSbÂ•öÖƒ¢Â†¢SbÂó¢&Ò3"Ó#""cÓ"SÓsBc2ÓCR"S‚ÓsbcÓcÓƒ‚"#RÓ3’S2ÓS‚3ÓS‚"c2RÓƒRÓ’"#2Ó#rCRÓ23Ób"2Ó3B"Óc"Ó“‚"’ÓS‚ÓCRBÓSb"cRÓ“rCÓcBS2Ós’"“‚Ó##RsRÓ#bƒ‚Ó##R"3"Ó#"’Ó##R#"Ó#r¢"ÒÂ'F–57F66F—76–Öô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢Â•öÖƒ¢CÂ†¢CÂó¢&ÒB"CBRC2#’3‚sR"“rC#2S‚#rƒ3#"#CSB“’C32#CCB"ƒSC#Cƒ"“2S2""S“"crSs2CS“""SRScr“"S“"s"SƒR"C“3"SCb2S#rÂCƒB"#r#s’BCbB3Cr"ƒB#C2“2S"B"“bƒb2“"b¢"ÒÂ'F–57F66F—76–Öô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢3’Â•öÖ–ã¢ÓCÂ•öÖƒ¢Â†¢CÂó¢&Òƒ‚ÓS“""CRÓScr‚ÓS“"#‚ÓSƒR"#ÓC“c‚ÓSCb“rÓS#rÂ#ÓCƒB"s2Ó#s’ƒbÓCbƒbÓ3Cr"rÓ#SrÓ“2C‚ÓB"BBÓ2‚ÓbÂ“b"SbÓRS‚Ó#’c"ÓsR"2ÓC#2C"Ó#r#Ó3#"ÓCSBÓC32ÓCCB"’ÓSCÓCƒ"rÓS2"ƒ‚ÓS“"32ÓSs2S’ÓS“"¢"ÒÂ'F–4Ö&6Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢3“bÂ•öÖ–ã¢Â•öÖƒ¢3#‚Â†¢3#‚Âó¢&ÒCsr"S2Cƒ‚Sb"Ss#BSCbCSc2ƒ"SCrƒ2SsCrSccb"3SbC#"Cƒr#cRCR33"3CbCC"3SBC#’3SC3bÂ3CbCCB"3‚CcR3CCSb33CcBÂ3"Cc’"#sBCC’#“BCƒ#ƒBCc"#C"C2#c"C3‚#S2C#R"Sb“bsr3C2"#sB"Sb#bSB2R"#r#ÓB3R’#"C"#23"#3r#"ƒBS2S’#’s"3’"#SR#c’C#R“2#"#sR##’#c"#SR#cb#C""CC‚B3#BS3“ƒb"CsrCSbBCcr¢"ÒÂ'F–4Ö&6Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢3“bÂ•öÖ–ã¢Ó3#‚Â•öÖƒ¢Â†¢3#‚Âó¢&Ò#S‚ÓCc’"#“rÓCC’#sbÓCƒ#ƒrÓCc"3#‚ÓC23‚ÓC3‚3rÓC#R"SBÓ“b3“2Ó3C2CS‚Ó#sB"Sc’ÓSbSCBÓSBSSrÓR"SC2Ó#SsRÓ3RSc"Ó#"S#‚Ó#2S3’Ó#S32Ó#"CƒrÓS2SÓ#’C“‚Ó3’"3RÓ#c’C#’Ó#R3srÓ#"#“RÓ##’3‚Ó#SR3BÓ#C""#"ÓB#CbÓSƒÓƒb"“BBÓBB"cÓ2ƒ"sÓb"Ó#B#BÓCrÓƒ"#2Óƒ2ÓCrÓcb"#RÓC#"ƒBÓ#cRcbÓ33"##RÓCC"#bÓC#’##ÓC3bÂ##RÓCCB"#S"ÓCcR#3ÓCSb#CÓCcB¢"ÒÂfW&ÖF&÷fS¢²…öÖ–ã¢Â…öÖƒ¢Cs"Â•öÖ–ã¢"Â•öÖƒ¢CSBÂ†¢CS"Âó¢&Ò3’"s‚‚cb3rss2"c23“"ƒ#S""#ƒBC#2“’3S2#3’3“""3s2CS‚3"CCB3CCSB"C32C33“RCS‚CCCb"c2S2S33cS“b#sb"S“R#c2CBS“R3ÂS“Rƒ‚"c"SS“bsRSƒ’SR"c3’s2c’C2c3c"cS"cCRƒ"cC‚“""ccr“Bcc3"cc"c2"cƒ#s‚cs##"cs"#C‚"ScScrcƒ3ƒbc3‚Cƒ"3“bcSBS‚c#RCS"cC’"#“c3"3cBcSB3#RcCB"cS#b#3Rc2#Scb"B#C’ƒRCCb#b3Sr"BsB##"Ó2“b"’B#BBc’"#’B"bb"3’3RB32B¢Ò33‚3r"3sC3S3b3Sr3b"3ƒsR3ƒrC3ƒC2"3ƒ’“B3ƒ"s’3ƒ"ƒR"3Sb3"3ƒ’3sB#""#c’SB3#‚Cr3Sb"##R#R#S"SB##‚Sr"#cC‚##"ƒ#3"Sb"33‚3r#ƒrC3"C¢"ÒÂfW&ÖF&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢S’Â•öÖ–ã¢ÓC3Â•öÖƒ¢ÓÂ†¢C#’Âó¢&Ò3CBÓcR"SÓSC2C"Óc"CS"ÓSsb"s2Ó#S2cRÓCsccÓ3cB"sCbÓ“‚s3rÓ#BsSÓS2"s#rÓS’sCBÓƒ"sCBÓS’"cƒ‚Óƒ‚sÓS’c“BÓc‚"cs‚Ó’cƒrÓ“bcƒ2Ó""Sc"Ó3BcC‚Óƒ2cÓ#S""3ƒrÓC3’SbÓ3s2CS‚ÓCb"3#‚ÓCC’3crÓCCb3CrÓCC’"ƒÓ3ƒb#sBÓCC’##RÓC#2"c’Ós’Ó33c’Ó#c""sRÓ#c’ÓcsÓC"ƒBÓS‚s‚ÓƒBÓs’"ƒ"Ó3’ƒBÓS"ƒBÓCR"c‚Ós’Ó#bƒ"ÓB"#bÓ3"C’32Ó""#ÓS"#BÓ3’#"ÓCR"Ó##2’ÓrÓ2Óc"CÓSS2Ó3C‚#rÓCc‚"3BÓc’“"ÓS“#C2Óc’"3CBÓcR3rÓc’33Óc‚¢ÒCRÓ“"C3RÓSrC#’Ó“"C3RÓƒB"3‚Ó#rC3RÓƒb3s’Ó#r"#sÓCb#ƒrÓ#r#s"Ó3R"#c’Óc’#c’ÓSR#c’Óc""3cBÓƒ2#c’Ó#‚3"Ós¢"ÒÂfW&ÖFÆöæt&÷fS¢²…öÖ–ã¢Â…öÖƒ¢S“Â•öÖ–ã¢ÓbÂ•öÖƒ¢33rÂ†¢3C2Âó¢&Ò#Ó’"3bB#’Ó’3R2"C’’CRCRC’s‚"C‚C2C’#C’3"C"3"C#CR#Sb"c233‚C"33Cb33‚"c‚3CcR33‚cb33‚"#s’3323‚33b#’33B"sc3rC3’33S“’3#2"sƒ2#“‚ssR3rsƒ"3RÂs“bc"ƒBrƒRƒ"c‚"ƒSCBƒCCRƒSR""ƒ#B3“bƒC"##‚ƒ3B3""scCc‚ƒbCS’ƒ"CcrÂSRCƒR"C32"CƒrCs‚Â3ƒr"#23#R#cB"’rC2s’"#Ó’’rbÓ’¢ÒC22"C3’bC22C#RB"CsrC"CcB’CsB#""Cs‚c"Cs‚C’Cs‚SRÂCs‚ƒB"CcRcCs‚’Cs‚3R"CC’s2CccrCS’s2"3SBR3ƒbs’3SBSb"3S’s3SB“R3SbƒB"3ccR3cc’3ccb"C223s"B3s22¢"ÒÂfW&ÖFÆöæt&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢c"Â•öÖ–ã¢Ó33RÂ•öÖƒ¢rÂ†¢3C"Âó¢&Òs“2ÓCƒ""ƒSÓCCBƒ#"ÓCƒ"ƒC"ÓCs"ƒcrÓ3SrƒcÓCbƒcrÓ3ƒr"ƒcRÓ33bƒcrÓ3SƒcrÓ3C2"ƒSÓƒ’ƒS‚Ó#ƒrƒSRÓ#3‚"ƒ3"Ó3"ƒCrÓ3RƒCÓƒB"ƒ#BÓrƒ3"Ó#bƒ3"ÓrÂƒ#"Ór"ƒRÓ3ƒbÓ’ƒbÓ#"s“‚Óƒ‚ƒ"ÓSs“‚Óc’"ƒRÓ#“"s“‚ÓSrƒÓ##R"ss"Ó3#rƒbÓ3‚ƒÓ3#r"3cÓ3#Bc3RÓ3#rC“rÓ3#R"s‚Ó3#r#cRÓ3#2sÓ3#r"SÓ3BS’Ó3#rSÓ3#ÂSÓ#“r"c"ÓƒrSRÓ#ccÓ##R"sÓcc"ÓCBsÓ""c‚Ó#sÓC‚sÓ32"S2cbÓc’ÂS""#"Ó#"3r’#BÓ"BÓ#rÓSRbÓƒ’"Ó3S’Ó#Ó#s’"bÓCS"Ó3“2ÓC#"C"ÓCƒ’ÓCs‚#ÓCƒÂCRÓCƒÂCRÓCƒ"¢ÒC’Óƒ2"CSBÓs’C#Óƒ2C3RÓƒ"SRÓ#BCƒrÓsbSBÓS‚"SRÓƒ’SrÓ"SRÓ"SrÓS‚SRÓs’SrÓc‚"SRÓC"SrÓS"SrÓC‚"CƒRÓS2Ó#’SÓ"CC‚Ó’Cs"Ó’CcÓ’"3ƒÓ#"C#RÓ’C"Ó""3c2ÓCb3s"Ó#r3c2Ó3RÂ3c2ÓC’"3cBÓB3c2Ós3cÓ“B"C’Óƒ23sBÓc‚3srÓƒ2¢"ÒÂfW&ÖFfW'”Æöæt&÷fS¢²…öÖ–ã¢Â…öÖƒ¢sRÂ•öÖ–ã¢ÓBÂ•öÖƒ¢C3rÂ†¢CSÂó¢&Ò#bÓ#"C"ÓB3bÓ#"3’Ó""C’S2C’BC’32ÂC’CC‚"c’Cs‚C’CcrS"Cs‚Âs"Cs‚"ƒCƒsRCs‚s‚Cs‚"CBCsr"Csr#"CsrÂ#rCsr"“C2CsCS"Csrc“‚Cs"“s‚CC"“cbCs“sbCcr"“ƒ’“’“ƒR3#r“ƒR#2"““’Ó’““c““R#""3c"#‚b33R"#Sr#‚##R3S’""S“b#S3rrScr"“sbc#B’c‚““‚c#B"Src#bƒ’c#Bcc"c#R"Cbc#’3S2c#‚#c#’"rS“’c#’rc‚"rC#‚#cB"bÓBcR23""#bÓ#rÓ#"Ó’¢ÒƒrÓ’"#r3#bÓr#BB"#rSR#’3r#rCb"##C#r“rs’"#’#c"##Sb#2#c"Â##2#c""CSb#S"3#S‚3s’#SRÂss"#3’"ƒB#’s“"#3‚ƒ"#3R"ƒ‚c’ƒbc2ƒ’R"ƒ3BÓBƒ#Cbƒb’"ƒSrSbƒS"2ƒSr3R"ƒSƒ2ƒSr“’ƒS‚C"ƒ#r3cƒC#C"ƒC3"sƒb3“ƒ#3ƒ2ƒ’3ƒ’"ƒ’C’Sƒ‚C23ƒrC""S23src2C’S2C"s2#rS2#S’SC2"ƒrÓ’sb2srÓ’¢ÒCs‚2"S3bC“2Sb"Sƒ"cSc’BSƒ3"ÂSƒ"ƒ’ÂSƒƒ’"SƒrSƒ“‚Sƒ"r"SCsSsrS‚Ss"s"S#sS3BsS#‚s"CS’cbSsCƒc‚"C#23"C3bcBC#2SB"C#‚ƒ‚C#2‚C#R""Cs‚2C3‚#"C3’B¢"ÒÂfW&ÖFfW'”Æöæt&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢cƒbÂ•öÖ–ã¢ÓC#rÂ•öÖƒ¢3Â†¢CSrÂó¢&ÒSbÓcR"#ƒ"Óc"3"Óc"#rÓc2"“#BÓcbC“rÓc‚sÓcb"“s2ÓSs“S2Ócb“c‚ÓS“2"“ƒ‚ÓCSR“ƒBÓS32““ÓC“B"“ƒ"Ó#c"“ƒBÓ3““ƒ"Ó3#r"“sbÓc’“ƒ"Ó“r“ƒÓ3B"“sbÓB“sRÓS“sbÓ32"“cbC2“sbB“sR#2"“C#“S23r“C23R"“32Ósb“3bÓ"“32ÓCR"“3RÓ#“32Ó““32Ór"“CÓ3r“CÓƒ2“CÓ#CRÂ“CÓC3R"“’ÓCS‚“CÓCS“3RÓCS‚"ƒ“BÓCS’“ÓCS‚“2ÓCS‚"#bÓCcrccRÓCcC3RÓCcr"ƒ‚ÓCcrcrÓCcr#rÓCc‚"CRÓC#RCRÓCcrC"ÓCcR"CbÓCCbÓCbCbÓC‚"C2Ó3#RCbÓ3sbC2Ó3S"C"ÓS’C"Ó#3bC"ÓC‚"#"rC"Ó3"3bÓb"Ó#rÓrÓ"rÓC#ÓS‚rÓ#ƒ’ÂrÓCsB"bÓSs’rÓSrÓSCB"SbÓcR#"Óc2#rÓcR¢Òsƒ’Ó3“"ƒ3RÓ3SrƒbÓ3“"ƒ#’Ó3ƒ"ƒSÓ#SbƒCBÓ3#BƒSÓ#“"ƒC‚Ó#3ƒSÓ#C‚ƒSÓ#3’"ƒCRÓ3RƒCRÓ“’ƒCRÓcrÂƒCRÓs""ƒ3r#2ƒCRÓCƒC‚Ó’"ƒ’Ó#rƒ’Bƒ’ÓrÂƒ’Ó##""sƒ‚Ó#C"ƒ’Ó#3‚ƒRÓ#C"Â#2Ó##’"ƒÓ#’ƒbÓ##’ƒÓ##2ÂƒÓc"s’ÓRƒÓCRƒÓ3"s’ÓSsrÓ“Bs’Ós""c2#Bs’Ó#bsb"3rÓbCR’C"3BÓ3’3BÓr3BÓ#r"3‚ÓR3BÓc3rÓƒ"Â3‚Ó“r"CRÓ3C23‚Ó#Cb3‚Ó#“B"s’Ó3srC‚Ó3cBSÓ3sr"sƒ’Ó3“3ƒ2Ó3srSƒbÓ3ƒ¢ÒCƒÓcB"ScbÓcRSC’ÓcBScbÓC"S#rScbÓScB"C3bÓsC#bC3bÓ’ÂC3bÓƒ‚ÂC3bÓC2"CSBÓc2C3bÓS2C3’Óc"CƒÓcBCcBÓc2Cs"ÓcB¢"ÒÂfW&ÖFfW'•6†÷'D&÷fS¢²…öÖ–ã¢Â…öÖƒ¢sÂ•öÖ–ã¢Ó3Â•öÖƒ¢C“bÂ†¢S#rÂó¢&Ò‚ÓCR"#BÓ#Ó#’#BÓB"“ƒbR#BC‚sR"SSrcƒ‚ƒCR3"sC“R"S#sBSCBsbS3sB"CƒcƒrSRsBC“"sb"3CC“C32c#3ƒrSSb"s2#r#S"3crc‚#C2"#"C‚“R#"c2"c‚c32#rS"C""crs“b3"3R"C“BS2#sb#s’3ƒB3“2"S‚S‚SBS2SS‚"SC2SS#bS‚S32S2"“#2c2cs3Sbs“’#""‚ÓCR“S"#’“ƒBÓB¢Òƒ3rÓb"ƒ3‚ƒ3‚Óƒ3‚ÓB"s“’ƒ"ƒ3‚3rƒ‚c"Sc3c’s#s’c3’#sB"SC3“bSS23srSCb3ƒb"S‚C#"S32C2S#rC#""C“CSC#"S2CR"3Cr##’CCR3C3“b#ƒR"#2CR#“rs#3’r"ƒBr“’3bƒB#b"ƒ’’ƒBBƒb""##b#b#Ó#R’Â#3‚3R"C“B#CR3#rC‚sb"S#S2S#SSR#S2"S#b#CRSB#S2S##S"s#’s2S“"ƒbcc3¢ÒC“R"SbSSR"SSb3"S#bbSC3"Sƒbc‚Sƒ23RSƒbS"Ss’RSƒbƒbSƒ""S32“Scbc‚SS2“"CS’SBSb“C“Bsr"CC"#"CC‚CRCC"3R"CCRRCC"rCC""CsrrCSbsbCcRCb"C“RCƒrCƒr¢"ÒÂfW&ÖFfW'•6†÷'D&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢c“rÂ•öÖ–ã¢ÓCsRÂ•öÖƒ¢2Â†¢Cƒ‚Âó¢&ÒSrÓ3ƒ2"S3Ó3c’SBÓ3ƒ2S#Ó3sr"ssRÓ3cÓ#ƒ‚c“BÓ#"ƒ#B2ƒÓ“Bƒ#"ÓC‚"sƒ’Órƒ‚bs“’"S#Ó#"c“‚Ós"cÓC2"Cƒ‚Ó##bS‚Ó##"C“‚Ó##b"CS"Ó#’CsrÓ##bCcrÓ##"#"r3sÓ3R#ƒRÓcR"ƒr’“r“2’"s’BƒB’ƒr"sÓ2sBsB"s2Ó2sÓbsÓ’"#3RÓ#"ƒbÓS2#bÓ“BÂCƒBÓ3s"SrÓ3ƒ2C“"Ó3s’SÓ3ƒ2¢ÒS2ÓcƒB"S3’ÓcCrSrÓcsBS#‚Ócc"“rÓS2ccRÓCƒ"s“2Ó3‚"““’Ó#B“C‚Ó"“ƒBÓs2"BÓÓ#BÓb"““’Ó2BÓr"ÓB"“s2Ó“““ƒÓÂ“c2Ó#2"SS"ÓSRƒ#RÓƒBcƒ‚Ó3CB"S#‚ÓS#SC2ÓSrS3bÓS#"SRÓSRS#ÓS#SBÓSb"SbÓ#‚3“2Ó3sB#sBÓ#S2"#rbBÓƒBs"Ó3’"br#B’#"r"’22r"b"Ó2b2"Ó’ÓBÓr"BÓ3bBÓr’Ó#r"rÓs’CRÓƒbƒÓ3""Cƒ"Óccr#C"Ó33‚3cÓSB"S2ÓcƒBCƒrÓcs"C“Ócƒ2¢ÒCƒrÓcB"SS"Ó“‚S#2ÓcBSS"Ó3r"SCBÓ3SSÓs‚SC’ÓSR"S#ÓSCÓ’S3rÓÂSrÓ"CCbÓ#’C“"Ó’Cc""CCRÓC"CCBÓ3"CCRÓ3r"CcBÓCRCSÓsbCS‚Ó"CƒrÓcBCc‚ÓSrCcrÓcB¢"ÒÂfW&ÖF6†÷'D&÷fS¢²…öÖ–ã¢Â…öÖƒ¢SCRÂ•öÖ–ã¢Ó‚Â•öÖƒ¢3C‚Â†¢3cbÂó¢&ÒbÓ#b"3bÓ’#bÓ#r3Ób"3SB3CC2r#C’##2"3c’3C‚3c3Cb3cB3C‚"3ƒ"3C3s23C‚3sr3CbÂS3“’"sC2S“’3cs"c‚"sS2ÓrsCrÓ2sSÓr"sc"ÓsSbÓrsS’Ób"sƒRƒBssbsƒRC‚"sc‚SsƒR"ss’3‚Â3“’C“"3s’S3“"C“‚3ƒBS"3SrCƒ‚3s"S3cBC“R"#r3r#C‚3sC#S"ƒB"#R"2c’s’sR"SRcRS’"’3b’#"bÓ#bÓr2Ó#"¢Ò3Sr#B"3cr#r3c#B3c2#B"C3‚C#"C"C3C’"C#’SC33C3C"C“2C#‚sC#’“2"332Cr3S’“2332sb"3CC"33233rs‚"3Sr#B3C233Cb#B¢"ÒÂfW&ÖF6†÷'D&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢ScRÂ•öÖ–ã¢Ó33RÂ•öÖƒ¢Â†¢3CRÂó¢&Ò3ƒbÓCƒ""C#"ÓCSR3“RÓCƒ"CRÓCsB"s3"ÓrS#bÓ3C2c3Ó#3""ƒB"scRÓs’s“’ÓC""sS"Ó#"sƒBsc‚Ór"C3bÓ3#cCRÓ#SCÓ#’"C’Ó3#‚C#’Ó3#RC#RÓ3#‚"CÓ3‚C2Ó3#‚C‚Ó3#R"3R#s’Ó#"SrÓR"bB#’B#2B"r"2BB"Ó2r"rÓ#2Ó2Ór"#ÓC‚"Ó3BÓ3’"crÓ#3‚cÓrRÓsr"3SÓCSR##’Ó3#ƒ’Ó3ƒ2"3ƒbÓCƒ"3crÓCsB3srÓCƒ"¢Ò3ƒ"Ó#2"CbÓ#r3ƒ’Ó#23“bÓ#"CS"ÓSbC3Ó“’CCbÓƒ"CcÓƒRCSbÓ3"CS‚Ó‚"CC‚Ó3"CcÓcbCSBÓC’"C‚ÓbCC"Ó"C3Ób"3“rÓ’CÓbCRÓr"3C‚ÓS3sbÓB3SÓB"3SbÓs3C‚Ó“3SBÓ3"3ƒ"Ó#23SrÓ“’3c2Ó#2¢"ÒÂ'&VF„Ö&´6öÖÖ¢²…öÖ–ã¢Â…öÖƒ¢C‚Â•öÖ–ã¢Â•öÖƒ¢#sRÂ†¢#sRÂó¢&Ò#"ƒrs‚Sb#sBC‚"#2#’#b##2cB"#b#“B#2#3‚##cR"C3“#33rs3cr"#"3“b3B3“R#‚3“b"c‚3ƒ"R3“bƒR3ƒB"Cb3s’c3ƒ"S23ƒ""3#‚"3c’3Sr"33#23r"3#B#sR#"#C2"cbcr3’s’Cbcr"“Bss2crƒ"c‚"C2ƒ’sB#Bƒ"cs’C‚ƒSBƒ"#cb#BCR#r"##CR##2¢"ÒÂ'&VF„Ö&µW&÷s¢²…öÖ–ã¢Â…öÖƒ¢#SBÂ•öÖ–ã¢Â•öÖƒ¢S“RÂ†¢S“RÂó¢&Ò#32"#SbC‚#SB#S23"#s"ƒ2#cB“"#cR3‚"3CSR#ƒ’#sB#“R3cB"3Ssb3#rSC3Cc#‚"3cbƒR3SBsC’3cbsƒ""3S’ƒSr3cbƒ#’3c2ƒC""3#rƒR33BƒS"33ƒ3""3"csB3Rsc’3s#"#C‚3Sr#ƒ‚Scr#c’Cc""##R##b#C3B#C"#c‚"##S#"#3"#2#C2"c’s#c2C‚rScB"3"ƒ3RS‚scS2ƒ"#ƒS#’ƒC#rƒS"BƒS’ƒSbƒS"ƒ#‚bƒCrƒ3‚Âƒ#R""scRƒBrsƒR"“B#Rs2SS"3"33‚"#32#bƒB#2C"¢"ÒÂ6W7W&¢²…öÖ–ã¢Â…öÖƒ¢ScbÂ•öÖ–ã¢Â•öÖƒ¢Sc"Â†¢Sc2Âó¢&Òsb"C’#"#B“"3rr"CCBc2ƒ#ƒr3RCSR"S#‚ssCƒBccS‚s‚"S3s“"S3ss‚S3sƒR"S#Bƒ‚S3s“’S3ƒR"C“s“"S2ƒRC“‚ƒ""3“cƒ2CSbsSbC#s#"C‚#c"#sRSC2cBC"sb#rrCR¢Ò##b"#C‚2#3‚ÓB#C2rÂ3S23r"sS’c3‚C“3"c3"CcB"ƒBƒRs“Rcƒ‚ƒ’sC"ss’sƒbs“bƒRsƒ‚s“b"c#‚c’s#Bs3"cs‚cc‚"3#C"S#2CƒRCb3c2"#rc’#cR“#rC"##"3#rS‚#’CR"##"#2##"#’###b"##"##"###b"##b##r##"2¢"ÒÂ6W7W&7W'fVC¢²…öÖ–ã¢Â…öÖƒ¢3ƒbÂ•öÖ–ã¢ÓÂ•öÖƒ¢SƒBÂ†¢S“BÂó¢&ÒƒÓB"#CbB#2Ó2#3"3CrCB#ƒ‚S"3R“’"S#bCsC##CbCƒ‚3S"SSbcsSCbS3rSSbc2"SC2s“‚SSbs2SS2sSb"SBƒ3rS3rƒ#"S#ƒ#‚"C“ƒCSƒCC“BƒC"Cs"ƒ3"Cƒ"ƒCCsrƒ3‚"Cbcs‚C3bsƒRCbs3r"Cc3‚CbccRC‚cS""C#RSC’S“RC#RSS2"3RƒbC#R3“R3ƒr#ƒr"ƒÓB#s#"##‚S‚¢ÒB#B"C’3’#’#BC3""#Bsbc“’ƒR"#b#sbSbcbƒB##2"3rc#b#ƒ3ƒB3rS"3RccB3rc3’3rcS"3ss23Bs3s3r"#c"ƒ‚#“Rs“R#s‚ƒ‚"#CRs“’#Sbƒ‚#C’ƒR"scC#’sSssb"sc#sc3Bsc#‚"srSsbSƒRsrSC’"B##’srCRc3#"#bs’cC"“R"B#Bb#B#B¢"ÒÂ&W7DÖ†–Ö¢²…öÖ–ã¢Â…öÖƒ¢3cbÂ•öÖ–ã¢Ó#SRÂ•öÖƒ¢#SRÂ†¢SÂó¢&Ò3“rÓ3cr"SBÓ3C2C3bÓ3crCc‚Ó3Cr"S‚Ó3‚SbÓ3CS‚Ó33"S#rÓ3S‚Ó#rS#rÓr"S#b32S#rÓrS#r2ÂS#b3"S3SS#b3#2S#3C"C#‚3crCsr3cCS"3cr"3sB3S’C3cr3“23cB"3Sr3323c3SB3Sr3Cr"3Sb“3Sr#S"3SbsÂ3Sb3"3CÓ3r3SrÓƒ"3CbÓ“B"3“rÓ3cr33rÓ3SB3SÓ3cr¢ÒCbÓ3Sr"S‚Ó3SbC’Ó3SrS2Ó3Sr"SBÓ332“Ó3S#Ó33‚"s2Ó3Rc‚Ó33s2Ó3#Âs23""3"3Sbs233Sr3C‚"c‚3cB"3c2ƒ’3cB"23B’3c23C‚Â2BÂB"Ó3"Ó“‚Ó#"CbÓ3SrÓ33bÓ3Sr¢"ÒÂ&W7DF÷V&ÆUv†öÆS¢²…öÖ–ã¢Â…öÖƒ¢#"Â•öÖ–ã¢Â•öÖƒ¢#C’Â†¢#C’Âó¢&ÒC2"S‚C‚S""#B#ƒb"r"sb“bs2#rsbS‚"s2##sB3‚s2s’"sb3Bs2#C‚sb#sb"C3S2sb33c23Cb"“R3S’#R3Sb3S’"3"3Cbs23S’S"3SB"3R#3C33r"#C2#“#c‚ÂsBÂBsBÂBC‚"C2Bbr¢"ÒÂ&W7Ev†öÆS¢²…öÖ–ã¢Â…öÖƒ¢SÂ•öÖ–ã¢Ó#Â•öÖƒ¢BÂ†¢3BÂó¢&Ò3SbÓs2Â3SbÓsÂcC"Ós"s’ÓRcƒÓssrÓCR"s#Óƒ"s’ÓBs#Ó“""sÓ#s#Ócs’ÓC"cs"rsBc“B"cC’#ccB#cSr#"cRrc3B#c#r"“"’C32r#c"r"#’rc’#C’""’Ór"B’Ób"ÓC2’Ó#bÓ3R"ÓƒBÓS‚2Ós""sbÓs2ÓCrrÓs2¢"ÒÂ&W7Ev†öÆTÆVvW$Æ–æS¢²…öÖ–ã¢Ó“rÂ…öÖƒ¢cƒRÂ•öÖ–ã¢ÓSrÂ•öÖƒ¢#’Â†¢ƒbÂó¢&Ò“bÓ##b"crÓ##2#Ó##bCBÓ##R"3Ó##"#rÓ##"#S"Ó##"ÂCCBÓ##""ccÓ#rS#Ó##"S“RÓ##""sCbÓ3s2Ó#bsCbÓ#"sCBÓc"sCbÓ‚sCrÓƒR"sC2Ó3’sC2ÓS2sC2ÓCb"sƒ’ÓBsC2ÓbsS"Ór"ƒƒ2Óbƒ#Ó2ƒSÓb"“cRÓ’“Ób“3rÓB"“ƒb2“s"Ór“ƒbÓÂ“ƒbb"“c23R“ƒBr“ƒ"3""ƒƒrC"“3r3’“2C""3’#rcRC"3#32ÂÓsb#r"Ó#c#Ó3‚#rÓ##b"Ó#ƒ"BÓ#c’#Ó#s’#2"Ó#sÓrÓ#ƒrBÓ#sbÓ"Ó#’Ó#rÓ#S2Ó#2Ó#3Ó#B"ÓS2Ó3Ó“Ó3Ós2Ó3"ÓC‚Ó#’Ó‚Ó3Óƒ"Ó#r"bÓ3"Ó#"Ó#’ÓbÓ#r"Ós"2ÓC2ÓS‚"BÓcrÓRrÓC"S2Ó##22Ó#rBÓ#r"“bÓ##bc‚Ó##bƒ"Ó##b¢"ÒÂ&W7D†Æc¢²…öÖ–ã¢Â…öÖƒ¢S‚Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"Âó¢&Ò“‚ÂSSb"ccRS“"c#’"sCbƒ"s#2sC2#’"s3bsBsC’BsCCB"cs#3"s#’#Rs‚#3""Ss##’c3b#3"c2##’"3Sb#32C“‚##’C#b#32Âs2#32"s’’#32##"SBscB"b“RB3RbR"“‚2#r#’¢"ÒÂ&W7D†ÆdÆVvW$Æ–æS¢²…öÖ–ã¢Ó#Â…öÖƒ¢CC‚Â•öÖ–ã¢Ó#Â•öÖƒ¢C2Â†¢c2Âó¢&Ò3“rÓ#’"Cƒ"Ó#2C#bÓ#’CSRÓ#r"S#bÓ#BC“rÓ#BSÓ#B"c‚ÓrSSBÓ#BSƒ"Ó#2"cCRÓc#"ÓBcCBÓr"cR#bcC‚2c#’#"S“R3"c‚#’c"3"S#b3rSs"3RSC’3r"C“‚3bSr3rSr3r"Cs3RCƒr3RCs‚3R"CCRS2CS3RCCR3’"CC’ƒ’CCRcCCbs2ÂCSBr"3s2#bCSbs2C#‚#b"3#B#B3Sb#b3C#b"#’#2#ƒr#2#C‚#2"Cb“2Sb#2#""bs3"“’ƒr"’"2S’3"Bs‚’ƒ’"’S’rs’c2"ÓBCR’C’"CRÂÓCR"ÓS32ÓS‚CRÓBCb"Ós2#"ÓS‚3"Ós232ÂÓs2’"ÓSÓ2ÓsbÓc‚Ó"ÓrÓrÓCÓbÓ#‚Ór"‚Ó2Ó3rÓr3’Ó2"3“rÓ#’#2Ó23‚Ó#’¢"ÒÂ&W7EV'FW#¢²…öÖ–ã¢Â…öÖƒ¢#c2Â•öÖ–ã¢ÓCRÂ•öÖƒ¢CRÂ†¢ƒ3Âó¢&ÒSÓS“b"cBÓSc2c2ÓSƒ’cÓSsR"cÓSCbcBÓSSrcÓSS""#BÓ3“bC‚ÓC“R3RÓCCb"#"Ó3ƒ#"Ó3“#"Ó3ƒB"“’Ó#SR#"Ó33S‚Ó#s""##‚Ó#Sb#’Ó#C’#rÓ#S2"3#BÓ3Cb#sBÓ#s#“‚Ó3"3S2Ó3c’33Ó3Sb3CÓ3c’"3cÓ3cr3SbÓ3c’3SrÓ3c’"3s’Ó33b3s2Ó3c3s’Ó3C‚Â3srÓ3#R"3CBÓ#3"3s"Ó#“"3cbÓ#S‚"#C’ÓS‚3Óƒ#s‚Ór"#C"Ó3b#CRÓC’#C"ÓC""#S‚Ór#C"Ó#b#C‚Ór"3#‚s‚#ƒB#3CR"3SBS‚3CBB3SB3"33r#b3SBsr3S“b"#2C3R#“B#ƒ‚#C’3S’"RSsRƒ’CƒrS‚S3b"s‚S“‚RSƒR“"S“‚"S’S“"s"S“‚cbS“b"3’Sc"CRSƒ23’Ss""S2S#r3’SSCRS3’"c‚3CB“‚Cc’#RC""ƒr3rƒ3#‚ƒr3r"S2#c’ƒr#“Bsb#ƒB"c"#2#"#S"“#3R"CƒC‚#2C“""CbS‚Cs2C2cb"“’cRc#Rs’“R"ƒ2Ós’3#cÓ#’"SbÓƒbs2Óƒ‚cBÓƒR"Ó#cS‚Ó“’ÓrÓs2"“bÓSSrÓ3cbC’ÓCcB"#BÓSƒR"ÓSc’’ÓSƒ"CRÓS“‚3"ÓSƒ‚3‚ÓS“‚"SÓS“bCrÓS“‚SÓS“‚¢"ÒÂ&W7C‡Fƒ¢²…öÖ–ã¢Â…öÖƒ¢#ƒ’Â•öÖ–ã¢Ó#cÂ•öÖƒ¢#cÂ†¢S#Âó¢&ÒcBÓ3sB"#"Ó3C“Ó3s2#2Ó3Sr"#sbÓ“#3‚Ó#“"#S‚Ó#C""C#ƒR332Ó3b3S’#‚"Cb3BC2#“BCb3BÂCb3#"3“23SBCR3CC3SB"3ƒ"3S23ƒ’3SB3ƒb3SB"#“"33Cr3Cr3R332"sB##R#Sb#sb#b#S"Sr#’c‚##"c2#’"C##‚S#’CR##""3#Cb3B#323#C"3R#c"3#S"3"#Sb"Cr#“‚C#s"Cr#ƒR"#r3crCr3#2SB3SB"“B3sbB3s2"3sb"C‚33bsR3sbc23c2"2ƒ##ƒ‚"#3R"Ssc"’#BƒB3R#B"s3b#r#BC‚#r"#ƒ’#2S"#C‚sR"cBÓ3sB#SbÓc"“2Ó#2¢"ÒÂ&W7CgFƒ¢²…öÖ–ã¢Â…öÖƒ¢332Â•öÖ–ã¢Ó3#‚Â•öÖƒ¢#CBÂ†¢Ss"Âó¢&Ò#’ÓCs"#CbÓCS‚##"ÓCsr#3bÓCc‚"3rÓ33‚#s’ÓC#R3Ó3ƒB"3#BÓ##b3"Ó33rÓ#c""C#‚c3SÓ“B3ƒb3R"Cƒ3‚CCR#RCƒ#S’"Ccr3CrCƒ33Csr3C"CCR3SCc3SCSB3S"C‚33rC3"3SC’3Cr"C"332CR33bC233B"##2#R3CB#“B#“B#CR"#3b#S’##’#32#3R#Cb"#3‚#sb#3‚#cR#3‚#s"#"33‚#3‚3"##b33B"“23C#b3C“’3C"ƒb#ƒ’Sb3CB3r"S’ƒcb#SRS’#r"Sb#rS’sb“"#r"#3bCbs’#r#B3R"33‚#sS’#“‚ƒ""#ƒ’ÓC’3"C’3""“bÓ#"#sbÓ“’#3RÓr"sbÓBƒrÓ#rsbÓ#rÂsbÓ"SrÓS2srÓƒ‚cBÓs""c’Ó’CÓrÓb"rÓC‚C2Ó2#’Ó#r"Ó#rBÓs2Ó“’"bÓƒbÓCrÓcr"ƒ"Ó#“BrÓ#c"3rÓ#“B"cÓ#sb"Ó#“B#‚Ó#ƒ’"#’Ó#C"ƒÓ#c‚#2Ó#S’"#3bÓ#3##2Ó#3b##’Ó#3"#C2Ó#3"#3’Ó#3#CÓ#3"#3RÓ#sR#C‚Ó#Cb#3’Ó#c"#"ÓCSb##Ó33B#"Ó3“R"#’ÓCs#"ÓCc"#2ÓCc‚¢"ÒÂ&W7C3&æC¢²…öÖ–ã¢Â…öÖƒ¢3CrÂ•öÖ–ã¢ÓC“‚Â•öÖƒ¢Cƒ2Â†¢“ƒÂó¢&ÒsrÓsb"#rÓc““BÓs##’ÓsB"#32ÓcSR##RÓcƒ#3Ócc‚"#“"Ó3“#S2ÓScr#sRÓCƒ"3cÓC‚3"Ó#sR33bÓc"CS"C3“2"C#"#S""C“rc#’CcrCsrCƒ"SS2"ScCrC“‚c3RScC"Cƒc“SccRC“"cƒB"CcBc“bCsRc“BCc’c“b"C‚csBCC‚c“bC3cƒRÂ3cc#b"332c3S2c‚3C2c""3‚c#’3#Rc3rcb"#3’ccr#“"cS#cRcc"#Bcs##‚cc‚#bcs"ƒbSS’Ccs“Rc#‚"ƒRS3rƒbSS"ƒRSCB"rCbƒRC“R“RCSR"c3s"B3ƒ’3B3s""sB3s2cb3s"s3s""##b3ƒ2“"3sB#’3sr"3ƒrCs‚#ƒRC"33CCB"3cB3ƒb3s’CCB3cBCR"#sb#s3cB3#23##“‚"#cR#cb#s"#c‚#c‚#cb"#S"#sb#c#cb#Sb#c’"C2332##’3ƒb332"r3#r3332‚33"C2#C2c"3BCb#“"S‚CRC2#S"s’"Sc2c‚“"“’c2"3R3"#2c2#S’“‚"#cbÓS‚#“rc2#ƒB"#rÓ#S’Ó“#3Ó“b"ƒbÓcbƒbÓr“’ÓsR"ƒÓSƒÓc2ƒ2ÓSR"Ó2cÓ#23RÓ2"’ÓcbS’Ó2#Ó3""Ó‚2ÓƒBÓ"Ó“bÓCBbÓs"BÓ#ƒr#Ó#SbS"Ó#ƒr"3rÓ#ƒ"BÓ#ƒr#RÓ#ƒr"ƒBÓ#c’SÓ#ƒsÓ#c’"“bÓ#sR“Ó#c’“2Ó#s"“’Ó#ƒr“rÓ#s‚“’Ó#ƒ""ƒBÓ3C2“’Ó3Bƒ’Ó3#R"ƒÓ3C‚ƒBÓ3Cbƒ2Ó3Cr"3BÓS“RS‚ÓC#’3ÓS‚"SbÓcsr3BÓc#BSÓcC‚"srÓsbS‚Óc“2cÓs2¢"ÒÂ&W7CcGFƒ¢²…öÖ–ã¢Â…öÖƒ¢C#‚Â•öÖ–ã¢Ós#Â•öÖƒ¢CsBÂ†¢“BÂó¢&Ò#Ó3r"##’Ó"#RÓ3r##"Ó#R"#3‚Ó“ƒB#32ÓB#3bÓ““B"#ƒ"Ósƒ#C‚Ó“B#cRÓƒC‚"3ƒbÓ3c’3rÓcCB3SBÓSr"C“BC#"Ó#"CSÓS2"cSCS#‚#C’SS3“’"cbc#’cSscbS“’"ccƒcbcC‚cRcs"SSccRSƒbcƒrScbcsr"Cƒc‚S#rcC’Sc3R"CcBcCsBc2Cc‚c"CC‚c#"CS‚cCSBcR"3cbcc"C#RcS3“rcc""33cS‚3SBcc"3C2cc"#C"Ss"#ƒRcCr#S2c’"#3bS#‚#3’SSr#3bSC2"#cbC#3bCƒB#SCC""3#R3s2#sB3sr33s2"C3bC’3cb3s2C23ƒ2ÂC“BCS""CsB3cCƒRCbCsB3ƒ’"3ƒ2#C‚CsB#“rC3R#c’"3#3#‚3sr#ƒ‚3S3"#sb3C3R33r#“3C"ƒb#c’#3R3C“B3"ƒ#3ƒ2#Sbƒ#C2"ƒrS2ƒ#Bƒbs’"#s’c2“"ƒb#32c2"3BcR#ƒ‚c2#“Rc2"CbR3CBs"3s’“""3ƒrÓBCbc’3“r#r"3#Ó“R3ƒÓS"3c’Óƒb"3‚Ós’3#Óƒ’3#ÓƒB"##23RÓ#’#s"#"Óƒs3RÓ3"‚Ó#r#Ó“b‚Ó"Â‚Ó“b"3rÓ#C"‚Ó#R#RÓ##’"#’Ó#sRSrÓ#cbƒÓ#sR"#C’Ó#c’##"Ó#sR#3RÓ#sB"3‚Ó#C‚#s"Ó#cB#“BÓ#SR"#ƒÓ3“3RÓ3#“"Ó3CB"#sbÓC#s’Ó3“2#s’Ó3“r"#S’ÓC##s"ÓC‚#cbÓCb"#CbÓC#’#SRÓC#R#SÓC#’"#32ÓCR#C"ÓC#’#3‚ÓC#b"sbÓ3S’##RÓ3ƒ’#Ó3s""#Ó3CbS‚Ó3C‚CÓ3Cb"BÓC‚s2Ó3Cb#rÓ3s"ÓC“‚BÓC3‚ÓCc‚"bÓScBÓS#2ÓSC2"“Óc3R"ÓcCRÓc3R"3Óc#’BÓc3RrÓc3B"##2ÓS“c2Óc#"“Óc2"cbÓƒ#B#2Ócsƒ’ÓsCr"C‚Ó“"SrÓƒS"C‚Óƒƒ"SbÓ“SRC‚Ó“#bSÓ“C"srÓ‚cÓ“s"sÓ““"#Ó3rƒÓ#ƒ2Ó3r¢"ÒÂ&W7C#‡Fƒ¢²…öÖ–ã¢Â…öÖƒ¢C“Â•öÖ–ã¢ÓsÂ•öÖƒ¢s’Â†¢C3Âó¢&Ò#32ÓR"#sÓ“Sb#SbÓ"#cbÓ“ƒÂ3BÓs#2"3“2Ó3S33rÓS“‚3cbÓCsB"SC23"CC"Ó#‚C“"“"cƒrƒCSƒ2C“c3RccR"sr“S‚c“‚ƒƒsr“’"sb“ƒbsr“c‚sr“sb"cƒ‚#RsB““’sB#B"cs#rcƒ2#Rcsr#r"c#’rcSR#rc3’#""SS’“CRc2“ƒSƒb“c‚"SCBSS2“c‚SS’““"CSb3RSb#BCƒ‚3R"C’3CCB3RC33B"3CB“S23s’‚3S2““R"3C“3C“3b3C“r"3CƒCr3Cƒƒ3CƒcB"3ƒss’3CƒR3SBs“2"CcBsc2CbscRC3Rsc""S“"ƒBSsc2SC’sƒb"SCbccSsRsSrSSbs"CƒSƒRS3rc’SrS“‚"Cs‚S“’CƒS“Cs‚S“R"3ƒbcs‚Cs"cCC#‚cs‚"#“Bc"3C2cs‚3BcS"#s’Csr#ƒ"Scr#s‚S#"3c23“R#ƒC#‚3r3“R"3ƒ3“b3c’3“R3sB3“R"Cƒ‚C3bCbC2CC’C’"3ƒB#32Cc’3SrCc‚#sR"3S’#“3s2#S"3sr#sb"#ƒ"3‚33r333‚"ƒ#cB#C23‚#2#“‚"SBrS2#bSBc"#C"bSBC"ƒrb"#s‚#S2b#cRr"C‚ƒ‚33#"3cbSR"3ƒrÓCSb3“2#r"3Ó"3s’ÓSR3SBÓ“B"#ƒ’ÓcR#“rÓ“R3"Ós’"#’Ó3"#c’ÓC"#CRÓ3""ƒ2Ó3r#rÓ3"“bÓ3R""Ó’CBÓCb#Ós"RÓ#’BÓCR‚Óƒ2"ƒbÓ3RÓ#sb3BÓ3R"#3Ó3r“’Ó3R#RÓ3""3#BÓ#Sb#cBÓ#“R#“"Ó#sR"ƒÓC“3#2Ó3ƒ2#cbÓCs"ƒ2ÓCS’ƒÓCƒƒÓCc’"ƒBÓCC"ƒBÓCSBƒBÓCC‚ÂƒBÓC3b"3RÓ3c’ƒBÓC2sÓ3ƒ2""Ó3c2#RÓ3cBBÓ3c2"#’Ó3“’s2Ó3c2CRÓ3sb"ÓSSbÓBÓCC‚bÓS2"’ÓcsÓBÓc#RC2Ócs"CÓccr‚Ócs3Ócc‚"#S2ÓcbƒÓcS‚#2Óc3‚"#3‚Ócƒ‚#C‚ÓcCB#C"ÓccR"“"Ó“S’##Óss’“"Óƒcr"“2Ó““"“"Ó“s“"Ó“ƒ"#Ó#B“BÓB“’Ó#B"#32ÓR#bÓ#B##2Ó#¢"ÒÂG–æÖ–5–æó¢²…öÖ–ã¢ÓC’Â…öÖƒ¢3#rÂ•öÖ–ã¢ÓC"Â•öÖƒ¢SRÂ†¢cSrÂó¢&ÒÓSbÓ#B"ÓC"Ó#"ÓS"Ó#BÓCbÓ#2"Ó’Ó“BÓ3RÓ#"Ó#bÓ“r"CrÓ3‚3RÓs“ÓS"#C’ÓS‚“BÓ#r##2Ó“R"#c"Ó#’#SRÓS#c"Ó3’"#S‚Ór#c"Ó#B#cÓ#"#3"Ór#S"Ó#C"Ór"#Ó"##RÓr#rÓ’"#RÓCƒBÓ#2SrÓ3"ƒ2CS2’ss’"#Scr#rCB#3S2"Cc’S‚3ƒ2#c"Cƒ3ƒ""3SrcƒrCs"c#bC#cƒr"3Rcs‚3CBcƒr33cƒB"#Bc#s’ccB#Cc3B"#sB#bc3R#’cs"#Rs##"s#Rsb"#bs32#Rs#r#"s3"ƒsC"“rs3bƒ’sC""cBs3BsbsC"ssC"SsR‚cƒB3bcCR"ÓrSSrÓSc’ÓrSc2"ÓbSS2ÓrSSbÓrSSB"rSCrÓ2SCr2SCrÂrSCr"ƒ"SsRC2SCrS’ScrÂƒ"CS""SbCbƒ"3rƒƒ"rÓcbC’rCbÓ3b"Óc"Ós2Ó2Ó“’Ó3rÓ3R"ÓsÓ“"ÓcbÓs’ÓsÓƒB"Óc‚Ó“’ÓsÓ“2Óc’Ó“b"ÓSbÓ#BÓcRÓ#2ÓcÓ#B¢Ò“b#S‚"“r#cb“r#c“r#cB"#S#3Cr“’C#’"#32SC2#S###"S32"#ƒSc#C’SSB#cbSc"3CS23Sc332SC"3CBCc3C2Cƒ‚3CBCsB"3#3#23CBC23323c’"#c‚#s"3R3#“R#ƒ"“b#S‚#CR#cR###c¢"ÒÂG–æÖ–4ÖW§¦ó¢²…öÖ–ã¢Ó‚Â…öÖƒ¢SS’Â•öÖ–ã¢ÓSÂ•öÖƒ¢3cRÂ†¢CRÂó¢&ÒC2Ós"c’ƒbÓsC2Ó#b"#3#cBƒ’“’#ƒB"#ƒ"3c2#C2#“r#S’3#r"#ƒr3##ƒR3Cr#ƒr332"#ƒB#s’#ƒr3R#ƒR#“"Â#C’Ó""#sRÓC2#C‚Ó#’#CRÓC2"3“RCR3#ÓC23ƒ’2"Cc"#sCb#BC3b“r"S#23ƒrCsR3C“3C‚ÂS#23Cb"SB3S##sBS2#""SƒSBS“‚"S2SSRSB#’"SƒÓs"S#ÓC‚SC2Ós""c#RÓc2S“2Ós"c‚Óc’"sƒ’Sc“ÓC2sCBÓ2"ƒRs"s“RSbƒRc2"s“‚ƒRƒRsbƒ"ƒ"ss‚“Bs“"“sƒR“B"sSRƒRss“Bsc2“Âc“2C"csR32cƒR3bcƒ32"cS‚S"cc‚32cc"3’"cCRCBcSƒ"cCR""cS‚CC‚cC#Cbcc3Cb"cbSrcS‚CƒRc3‚Sr"Sƒ2SBS“’SrS“"SR"C“RCCbSCrC“rS#Cs"C#3s2CsC#2CC‚3“’"C2CS‚C‚CbC‚C3""3cSrC‚C“3ƒbSr"3#C“3CrSr332S"c3r#SbCCB#r3ƒ"Âc33r"sBCƒ‚c3ƒrsBC3‚"SbS#sBSs2S2"3rS#bC‚S#BC2S#b"’S2#rS#b‚S#"Ób3“’cbCsr#2C3’"Ó#b3ƒ2Ó#3“RÓ#b3ƒ’ÂÓ#b3s’"ÓB3sÓ#B3s"Ó#3s"Ób3s"Ó"3sÓ’3s""’3sbB3sB"3sb"3b3S’3"3sb3b3s"3333b3S3R3CÂ33#2"’Ó3R#2#2rƒR"C2ÓsbÓcR’Ós¢"ÒÂG–æÖ–4f÷'FS¢²…öÖ–ã¢ÓCBÂ…öÖƒ¢3Â•öÖ–ã¢ÓRÂ•öÖƒ¢SBÂ†¢c’Âó¢&ÒÓÓcb"s2sbrÓS2SÓ3"#b3CB“"cB#"#S2"#c‚33‚##b3C2#Cb3C"3ƒB3“R3r3323S23c"3“rC’3“2CR3“rC""3crCC"3“rC#’3ƒrC3b"3SCCB3cCCB3SbCCB"#bCSR3"CC’#SRCSBÂ#bCsB"#"SC#BC“R#"S‚"#’S“2#"SSr#2Ssb"#3bc#B#Rc2##Rc#B"#cRc"#CRc#B#S2c’"3‚SS"#ƒrS“b3"Ssr"33bS323"S3B3#2S32"CC‚c3cbS32CCBSƒ2"3“’c“bCS"cC‚C#2cs"3ƒ"sb3“Rs3ƒrs2"3‚s#b3Srs#332s#b"#rcƒB#s"s#b#3’s"cCSR3Rc#"cScÂCSR"Ó#2CC‚ÓCSRÓ2CSB"Ó"3s"ÓSRC#bÓsb3“r"Ó’3SrÓ‚3crÓ’3c"Ó“R3CrÓ’3S2ÓR3C‚"Óc23CbÓƒB3CbÓs23Cb"3CBÓC23CBÓ#"3CBÂc23CB"S2ƒbc2#“S’#3’"#2Cb#BC"c"Ó3RÓcÓC"ÓbÓc"Ós2ÓS"ÓCRÓcÓS‚ÓS‚"Ó“ÓC‚Ós’ÓC’ÓƒRÓC‚"Ó’ÓS2Ó“bÓC‚Ó"ÓC’"Ó“’Ó#BÓC2Ós"Óc‚Ó“’"Ó#rÓ3rÓ#2Ó#‚Ó#rÓ3""Ó“BÓC‚Ó#rÓCÓ#2ÓCR"ÓÓcbÓcBÓcÓ3"Óc‚¢"ÒÂG–æÖ–5&–æf÷'¦æFó¢²…öÖ–ã¢ÓsRÂ…öÖƒ¢3#"Â•öÖ–ã¢Ó“Â•öÖƒ¢3#RÂ†¢CRÂó¢&Ò#2Ó3"CÓ#R#rÓ332Ó#‚"#‚Ó’ƒÓB#RÓS2"CR#3"c"C3"C‚#3‚Cr#"C‚##R"3‚3#ƒB#“#CR3#"3c23B3#R3#3CB3‚"3sr33c’3"3s23"3ƒB33ƒ33ƒ"3"CcBCRC3rCcB3ƒ’"CCbC32CcRC#’CSRC#’"3“CCRC#‚CCC’CCR"3RC#’3cCCR33BC3‚"cr3Cb#S"C2#"3“2"S23#Rc233‚S‚332"C‚C3‚SB3c2S3“’"#Cc‚CrCSb3BCc‚"CS‚RCc‚‚CcR"Óc23CbC’Ób3cr"Ó‚#CÓs‚#ƒ’Ó“‚#s"3"33ÓS#SbÓ2#“r"3r3B3r3#3r3"Â3r#“""Ó#rc#3"#2Ó3’Ó#"Ó3¢"ÒÂG–æÖ–56f÷'¦æFó¢²…öÖ–ã¢Â…öÖƒ¢#“bÂ•öÖ–ã¢Â•öÖƒ¢3s’Â†¢3s’Âó¢&ÒS"sBccb"3“"S‚#s"B3Cbs"CR#rCsBCR“"3S’#ƒrCR#3b3ƒ’#cR"#c3#R3#‚3‚#“B3R"c‚C2#b3Cƒ3cb"cbC#bcrC‚cbC#2"sbC3‚cbC3"crC3b"“’CCƒ2CC“CC"33“2#3‚CC#“RC#""33B3s3r3sb3#R3s"3c23ƒb3C23s3S23s’"C#"CCR3ƒbC"C‚C#"C#bCS‚C#RCC’C#bCSB"C#"Cc’C#bCc"C#RCcR"#sBSCb3“RS‚332SCb"cS2#3"SCb“S3"ƒbCR3"Cs"‚C3’"s3CrsR3ƒrs3cr""#Sbs3"ƒR#s’"#’#RC#3"sb##b"#ƒBc‚#3‚#b#cb“r"33#“Sr3CB"#“‚#3#r#“‚#""#s‚r#“B’#ƒR‚"#c"‚#sr#cb‚Â#S’‚"BSr#rSb#R"“bƒBc2“bsÂ“bƒB""#"“b“"“b"“b#’"#B#r"c2“Bƒ"#Rs"#B"r’C"c‚#b3‚"ƒb2“B"2cs‚Bc‚"SS2#2¢"ÒÂG–æÖ–5£¢²…öÖ–ã¢ÓC2Â…öÖƒ¢33Â•öÖ–ã¢Â•öÖƒ¢3#‚Â†¢3#‚Âó¢&ÒÓCR"ÓbbÓ3"Ór"2#Ó2b’"CBcC’C‚“bc"#ƒB#"“c#3‚Cb"3C‚B3R3#rB"CcsR3“2BC3R3"Cc‚“CcBƒCcrƒb"CSbBCc‚“RCcR“’"#ƒrs2C"33C‚cr"#3’sb#ssB#SRsb"c‚sB#rsb“BsB"3cr3C#3b#3b#“‚#“B"CS’C#2C"3c2C3"3“""CsrCSBCcrC3CsRCC""CsBCc"CsrCSbCsRCS’"CSBCs"Cc’Cc’Cc"Cs""C3"Cc‚CCbCs"C3’Cc’"3SbCC‚CbCc3ƒCSR"#C#"3rC32#S‚C#""’CC"srC#"CBC#‚"“BCCRBCCB“’CCR"c’C32ƒRCCRsbCC""#r3“SbC’3’Cb"Ó’3C2b3s2Ór3Sr"c2323#3b3BÂs‚3"3"3r“R3‚B3r"#C3Bc‚3r#23Â“2#s"Ó3rSr“b’CR"ÓS’rÓCb3bÓc’#"ÓCRÓSR2ÓS¢"ÒÂ÷&æÖVçEG&–ÆÃ¢²…öÖ–ã¢Â…öÖƒ¢SSÂ•öÖ–ã¢Ó‚Â•öÖƒ¢S3’Â†¢SSrÂó¢&Ò3#c""“c"#s‚cR#3RcRÂ“c3‚"ƒrc“2“cS"“ccr"cssbƒBsr“2ssb"3rsCrSssb3rscb"3cSB3Rsb3cƒRÂ3S“bÂS"Sƒ‚"BS3’#2SƒRrSs"Csr2S3S"2CC‚Cc2CC‚Â2CS""S2C3"bC3b#2C3""3BC3RsRC3""C32"Sr3‚3#‚Cr##2"s2S2ƒ"SrCb"#’Ó#bs’Ó“2Ó#b"##"Ó#"#2Ó#b#rÓ#B"#c’Ór#32Ób#S2Ó#r"3C23R3#R’3Cbcb"3C2S‚3C2Cr3CBCr"3#2“"3Cs33rƒr"#“sb3“B3ƒBÂ#cBC‚"##’3#cCR#3‚3"#"s#’3#2SB"“BC3‚#2#S’“’3C‚Â#s"CC""#ƒBCS"#sbCC#s’CC"3RCc"#ƒrCc#“RCc"Â3"Cc""3CbCsr3#RCc"3CCcB"3cbSc3SrS23cbS3"3#c"3cbS“‚3Sbc‚¢ÒsS’Sƒ‚"sScsC’S“"s32Ss"Sƒ‚ScsSCc3S#"Sƒ2S32SƒbSBSƒbS#B"ScSsbSsrSC’SsrSs""SrSSSCSƒ"S#‚ScB"CbC#2Cƒ"S‚CS"Cc""3ƒ"3S23“"3“r3ƒB3s"3ƒr3R3ƒ3C3ƒb3‚"3“"#sR3ƒ’#“R3“"#ƒR"C’#C23“2#c"3“2#C2"C3#c"C’#C2C#R#SR"S#3s2CS’#“‚Cƒ‚332"S#23SBS#3cbS#23c"S#33rS#23CbS#3C"S‚#“RS23#2S‚3"S3"S‚#s’S#B#""SC’cbS32ƒ‚S3cb"Ssr“’Sc2cbSs"ƒB"Sƒ3Sƒ’Sƒ#ÂSƒ3""c3CrSƒ3‚Sƒ"33r"s3“"c3"3cBccR3ƒB"s“2S‚sƒRC’s“2C3R"sS’Sƒ‚s“2SS’sƒRSsb¢"ÒÂ÷&æÖVçEGW&ã¢²…öÖ–ã¢Â…öÖƒ¢SsBÂ•öÖ–ã¢Â•öÖƒ¢3"Â†¢3"Âó¢&ÒcS"ƒb3"s#rs“bCb"ƒ#r##2ƒ#"c2ƒ#r“2"ƒ‚3Cƒ#r#c"ƒ#3"ccRCC’sƒRC‚s#’CC’"c3bCCbcSRCC’cCrCC‚"Sƒ’3ƒBcCCSƒbC#"Âc"3"c#ƒRc2#“cR#ƒR"c##ƒ‚c2#ƒRcb#ƒr"cSR#“Rc3"#“BcCB#“R"s#ƒBcsB#“Rc“2#ƒ’"ss2#’sC#sRss2#3""c“rSbss2ƒBs3Bc"ccBSBcƒRSBcsRSB"Ss’c‚c3RSBc‚S‚"CSR#C"S32ƒbC“R#2"#cC3ƒr#“333SB"cC3"##RC#"“C3""#3#‚“‚C3"C’3“""##’b#“R#c""3ssbB#""CB2C2#’“b2"c‚bS22cB"#C‚#"#32##C‚3’"#CbCr#C‚#B#C‚3R"##bsr#C2cB#3’sr"#bs##sr#RsB"CBSBƒbS‚cbSB"s’s#"SBc"S2#"c"s’S2ƒ’"c##‚S2#’SR#r"c#ƒƒ#c##ƒ"ƒ2#s’c‚#ƒsb#ƒ"3#R“#C2#c’#ƒB##’"Ss"bC"#BCsRS2"cSS“‚bc#R¢"ÒÂ÷&æÖVçEGW&å6Æ6ƒ¢²…öÖ–ã¢Â…öÖƒ¢SsBÂ•öÖ–ã¢ÓbÂ•öÖƒ¢CRÂ†¢SÂó¢&ÒCCÓS2"CSbÓcCSRÓ‚CSbÓƒ’"CSRƒCSRÓBCSR32"Ss"BC“SRS33"cSÓS“‚Bc#RÓ"ƒb3s#rÓs“bCR"ƒ#r##"ƒ#"cƒ#r“""ƒ‚33‚ƒ#r#cƒ#3"ccRCC‚sƒRCbs#’CC‚"c3bCCRcSRCC‚cCrCCb"Sƒ’3ƒ2cC3’SƒbC#Âc"#“‚"c#ƒBc2#ƒ’cR#ƒB"c##ƒrc2#ƒBcb#ƒR"cSR#“Bc3"#“"cCB#“B"s#ƒ"csB#“Bc“2#ƒ‚"ss2#rsC#sBss2#3"c“rSBss2ƒ2s3BS‚"ccBS2cƒRS2csRS2"Ss’crc3RS2c‚Sr"CSR#CS32ƒ2C“R#""CSB#C"CSR#CCSR#C"ÂCSB33r"CS"Cƒ‚CSB3ƒbCS"C3’"C32SsCS"SrCSSCb"C#RSƒ2C3SsRC3Sƒ2ÂC#"Sƒ2"C2ScbCRSƒ"C‚Ss2"C"SCbCScC"SS2Â3“r#ƒr"#c3“’3S23#R33cb"cC3##RC#“C3"#3#r“‚C3C‚3“"##‚b#“B#c"3c’sBB#"CBC2#r“b"c‚BS2c2"#C‚##32’#C‚3r"#CbCR#C‚#"#C‚3B"##bsb#C2c2#3’sb"#bc‚##sb#Rs2"CBS2ƒbSrcbS2"s’c‚#"S2S‚"S2#c"srS2ƒr"c##bS2#rSR#b"c#s’s’#S’##s’"ƒ2#s‚c‚#s’sb#s’"3#Rƒ’#C2#cb#ƒ"##b"3“R33C‚c‚3s"C‚"3“2s3“2’3“2ƒ’"CCÓS23“ÓbC"Ós‚¢"ÒÂ÷&æÖVçDÖ÷&FVçC¢²…öÖ–ã¢Â…öÖƒ¢sÂ•öÖ–ã¢Â•öÖƒ¢C“rÂ†¢C“rÂó¢&ÒS2"S#‚3’S#bBS#r#r"S3s"S3SS3c"S#‚3‚S3“BS#‚rÂS#‚3Cr"SS"3S’S3r3SBSCB3S’"Ss’33‚Sc3S’Sc’3S2"csB#rc’#“rc3’#SR"s’“c“#sB“"sS’#Rs3"“sCB“r"“C3“RƒR#s’ƒsr33r"C““c‚C#"“ƒbCSR"‚S2BC“R‚SR""S#B‚SrrS#"“c‚Sb““BS3“s‚S#B"“cS‚“cRS2“c2S"s“‚3Sb“CcBƒC‚C"ss‚3Cs“3Crsƒ23C"sSr3SBss"3CscR3Cb"ccCsRs#3“"c“C3""cSrcCBSBc#’Sr"Sc2C“‚S“‚SrSƒ2S"S#rCsSSC“S3’CƒÂS#rSs"C“"sbS#bc’S#2cs"Cs"csrCƒsBCs"c“B"CcR3“’CsBSƒRCc‚C“"C3’3cbCSb3ƒrCC‚3sb"3ƒB3#CR33b3“’3#"333cr3c’3#3SB33b"3#R3sb3#‚3c’3#r3s2"##bC“#“C2#cRCSb"ƒ’SR#2S#"SR"SrC“srSRcrS"##’sRC#3Cb"#"###""#"#R"#2b#’"#B3#rSR#S"ƒ’#ƒ’"Cr3C23"33rC3C2"s3#2Sb3C2cB33b"#cb“r“b#sb#3"#3b"33rSr#“s3BSr"C#r3cSr3ƒbsB"Cc#sBC#‚##’CCB#S""Cc"cbCc#3‚Cc#""S2CcR‚CƒrSR¢"ÒÂ÷&æÖVçE6†÷'EG&–ÆÃ¢²…öÖ–ã¢Â…öÖƒ¢sCrÂ•öÖ–ã¢Â•öÖƒ¢#C2Â†¢#C2Âó¢&Ò3s’"C#‚B3“RCB"CsBSbCCR#bCc3’"SS"SrSƒ’S#b#""Scbc‚SSbc2Scc‚"SsRSrSc’c‚Ss"cb"ccB3bS“"rc#‚s""s32cƒR2s"ƒ"3RsSrsƒ2"r#C’ƒsR“Csr"cr3#B#‚#s"SB#“R"sb3Cc‚33sb33B"s23Cbsb3Csb3C2"Sr3Sc‚3C‚c23S"Cr3CrS23SS3S"3333bR3#BÂƒSrSr"ƒCBC2ƒS"S2ƒC‚C2"ƒ3RSƒCC2ƒ3‚CB"sSr#C"ƒRƒbsƒ#’"cƒR#“‚s3’#c‚s2#ƒB"cC3cs3RcSR3"S“#ƒ‚c#R3c‚3B"C“rs’SSB#SbS#r#R"CƒcBC“sCƒRcB"Cc"s’CsBcBCc’c‚"3s"#“RC3b##CR#S‚"#s‚3CB3Cb3#B3"3CB"“’3#S"3CB##b33B"“"“bc#sB#‚#32"#BCbC‚#2ƒ’"C"C‚#"#r3"3r"Sbc‚ƒBƒRB3""“b“"sBƒBƒb“""##‚S‚#b“"#Rƒ"3"3b#S"B#ƒ"sR"3s’33"3SB¢"ÒÂ÷&æÖVçEG&VÖ&ÆVÖVçC¢²…öÖ–ã¢Â…öÖƒ¢“ƒ"Â•öÖ–ã¢Â•öÖƒ¢##BÂ†¢##BÂó¢&Ò"c23b3"C‚#2"Sr#B“Bcb#R“B"sr3RcB3s3R"“b#"ƒ23Rƒ’3"#c‚C#r“B#CRc‚"3#2b#ƒ‚b3Bb"3c’#33bb3S"C"S23ƒB#’3“’C"SCRCC"ƒBCs"B"S#2S‚S‚SBSbS‚"SC2CRS#‚S‚S3bSB"cCCRSsb"c‚s‚"c“‚rcS‚#rcsrr"s#’#2s‚rs’#"ƒBcRsSb3"sƒCb"“BSBƒ3r“Rƒs#B"“#c2“c“bc2"“3bS2“#Bc2“3c"#Bc“cR#““b“"""2S2#’ƒ2"ƒB3’3R2S‚#""3S’“B#C‚ƒB3R3‚"C233ƒ‚##2C2#c"CB3#2Cr3RC23#2"3“3#C3#23“R3#"3CB#“B3sR3B3S‚3r"##Bƒb3R#S‚#c’#b"“Bs2#"s’#"s2"cR“2ƒBs2sRs’"“b#sCR##"#"#C‚"3‚c3"33‚"“2#c‚“c’3‚“3r3"ƒbƒbƒs#3’ƒC#"sƒ"sBs“bs’sƒ’sB"sSb“2ss2sBscRƒ"cS"#“s#’#3"c“2#cb"S“b3‚c3B3"cR3‚"S3#s‚Ss23‚SS"#“‚ÂCRc‚"3“2SrC‚cCSr"3s2s3ƒrSr3ƒc"3R#CR3S2“r33##""#C‚#sb#ƒR#cb#cb#s‚"ƒ’#CR##’#sb##cb"ƒCBSb#’#sB"32’#bSb¢"ÒÂ÷&æÖVçE&V6ö×övuG&–ÆÃ¢²…öÖ–ã¢Â…öÖƒ¢cbÂ•öÖ–ã¢ÓSÂ•öÖƒ¢S32Â†¢Sƒ2Âó¢&ÒƒrÓCb"#2ÓB“rÓ3r#BÓ#b"#ƒRS#S3b#cb“B"3Bƒ’#“Bsr#“rƒ’"33rc‚3ƒ’3#ƒ"CS‚323ƒb3CRsb"C“R"Cs"’CƒB""S3CS‚"S‚#""Sƒc‚SSrs’Sc’#B"c#"#3RS“"#2c2#3R"cƒ2“Bc3b#3RcSR##""ƒ3‚#bs3rCs“ƒb"“’Ó32ƒcÓƒƒÓ3’"“ƒBS2“cÓ#r“s’"#"Sb““‚ƒb‚#""SB“3"s’C“"ƒ’crc2“sBƒ2"#‚3"#’#"ss‚"#CB##r#3"#s2#"#S2#c2B"C“b#b3S"s‚C#r3r"S3R3S#b#3bS3R#s""S33S’S3R3#RS3B3C2"C“b3C2SR3cSb3SÂ3’“""#c’cr#ƒ’sb#s’cr"#3B“’#ccr#Ssr"#"3#B##C2c‚#ƒ’"sB3CBb33rƒ’3CB"B3S3CB33#‚"“S"CB“ƒR#S"“s“r"“32#“Cb#‚“C#"“3r“#r#“##R"ƒS#ƒƒ‚cƒsƒb"cƒr3c’s“’#cbsS3#R"c33“ccR3ƒ2cCr3“"Scr3#rc"3“Sƒ3c’"S#r“’SSB#ƒBSC2#C""S‚c‚S#s’SBc‚"Cƒ"“"S2c‚C“Rsr"3S23#‚CCB#CCR#“""3"3C233‚33‚3#B3C2"#cb#“r#“"3C2#sb3#r"#B#R#C‚#3’#3"ƒ"C2s’“2"s2s’"“"#"rs’R""ƒSBƒb3ƒBC2"C‚C#2S’#C"S332"CRSCBCbCcBCRSB"S2s3CRcbC‚cc‚"Csc‚SRsCBS"scb"2s3’ssBsCr"SBrcS‚ÓSƒb"#b#"23ƒ2b#S""sRÓ3b3RcbC"3BÓs"“"ÓS’"Ós""ƒrÓCbSÓs"sÓc2¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄDævÆV&W'C¢²…öÖ–ã¢Â…öÖƒ¢ƒ‚Â•öÖ–ã¢Ó3ƒÂ•öÖƒ¢#S"Â†¢c3"Âó¢&ÒScÓS3’"C3’ÓCƒS#rÓC“rCƒBÓCƒR"3SBÓCcC’ÓCs‚3ƒÓCsr"3ÓSB#3bÓ3ƒ’cÓ#ƒR"#BÓ“‚#rÓ3R#BÓr"“bSR#BÓCC‚"3‚“’#3ƒb#c‚“’"3“’ƒ33r“’3cr“""SB#"CCcbCsrC2"c’Ó3ScrÓ’S“Ó3"s’rcC"Ó3csÓb"ƒc3sc’S"ƒ‚ƒ‚"ƒ“’SƒsBCBƒƒrS"“3br“2S“#b3‚"“cRC2“C‚“B“Sbc‚"rÓ“s2#B“s‚Ó"C‚3#RÓ3rb"scRSrCcBS""C‚ƒB“"“b#"CR“#cB#“"“S2c’“"s’c‚"#Sb#’#‚R#3c‚"#“"#cr#sr"3#33’B"3c’C‚33’’3SR32"SR“bC‚“bCcBC‚"Scr3C2SS‚#3‚Scr#ƒr"SSR3c2ScR3SrSc"3c2"S3’3SbSS3c2SCr3c"C32#c‚S"33Ccb3"33RsC#3b3sB“’"3c23#Rcb3‚c2"#ƒbƒ23"c2#“2c‚"#‚3#cB##b#Cr#s""cB3S#33rƒ"3S"3‚Cb3S#‚33r"3sbƒB#cRS‚#’"Rc#Rcb#c"““’s’’cRcr"“SR#s’“ƒR#2“s2#C‚"“23r“C23“33r"ƒƒr3"“B3rƒ“b3R"ƒS"#ƒƒsB#“‚ƒc2#“"c“2crƒB#3bsCr#B"c"CccrSc3’C"SC’SrS“"CSsCR"C2##S2ƒCS"#""#s#C‚3c#3b3R#C‚"s’##’#3’#C‚#’#C""Ó#’cRƒƒR"’ÓBÓS22Ós‚"3“rÓS#bSbÓ3rƒ2ÓCcB"SRÓSCrC3"ÓS3bCc‚ÓSCr"ScÓS3’S#BÓSCrSCÓSCB¢"ÒÂ÷&æÖVçE&V6ö×6Æ–FUG&–ÆÄ&6ƒ¢²…öÖ–ã¢Â…öÖƒ¢ƒRÂ•öÖ–ã¢Ó3ƒÂ•öÖƒ¢CcRÂ†¢ƒCRÂó¢&Òc#BÓSCB"cC"ÓS#‚c3‚ÓSC2cC"ÓS3r"c3’ÓSBcC"ÓS#BcC"ÓS#"S“ÓCCBc#’ÓCƒrc’ÓCcr"S#2ÓC2Ss2ÓC#"SS2ÓC"C“‚ÓCRSBÓCRSrÓCR"3“’Ó3ƒ’CcBÓCRC3ÓCR"ƒ’ÓSr#ƒÓ33sbÓ#SR"s"Órs‚ÓCBs"Ó3"s2Ós"Ós"Ór"ƒrƒb“2Cr“"#Cb#3##b##"#3"3#’#c"#3#ƒ##2"CSbC‚3S’c2C2"SCÓC“BS‚Ó"c#RS’ScbÓSƒ’2"c“C‚cC‚ƒ‚cc‚‚"scrc“rcsBcr"s32S2s’crs#Bc2"ƒCBBsc’Rƒ‚c"“2ÓC"ƒs2Ó#2ƒƒbÓC""“s2Ó“’ÓC"“3rÓ#r"‚32“ƒbr““b#"C‚ƒ#C‚3RcR"S3rC‚cbSS""CrÓ#BSrC‚Ó2"3‚Ó#sR3‚Ó‚CÓ“"Â3rÓ#ƒ’"CRÓ3"3rÓ#“R3‚Ó3"c‚Ó#ƒBSbÓ3BcBÓ#“""ƒBÓ#C"sbÓ#sƒÓ#Sb"“’Ó’“bÓ“’“’ÓSB"bS‚“’Ó’bs"#‚ƒr2cr#sr"c‚##2C2#"SR##2"#“2s’##2“#2"##ƒ2#B“#Rƒb"3#’3b#c3‚#“"ƒB"3sBr3CRb3S‚r"C#3ƒBr3“R""Cs’ƒBC3r3rCS’S’"c#3RS#3RScBƒb"sbC2cSR#ƒ"c“R33B"cB3Cbcc2Cc3r3s2"CcBsScB#ƒrSR##‚"CCSCS2SbCCrS"CBs2C32SC#bS‚"#ƒ233b3s##‚332#ƒ‚"##3cb#c3Sb#C3cb"C‚3‚“B3cbc’3S"2#SR32#“r’#sR"“r3"#s#ƒR"“’33B“’3"“’3#B"“"C#‚“’3cr“B3“r"scCrƒrSs’SsR"S‚csscSrscs"3RcC‚Crcs3‚cc"‚Sb#BcRRSc"C#2#RC"3r3r"C2ƒC“bC2ƒr"““"#r#rc’C2"“cR“ƒr“s""“3b3"“SR“Cb#"ƒ#’#c‚“s’ƒcr##R"sc3rƒ3sƒ3r"c“#S‚s3’3rs’#“r"cRCrccB#’cCsr"Sƒ’3‚S“’CS“23‚"Ss"C‚Sƒ23‚Ss’C"CR3rS##bCcr#c"3#r3s"3“3C23cb3cb"33s23r3s23‚3s2"SB#“R#3’3s2“3C‚"SR3‚##C2ƒR“""ÓS2#"s’2"cÓ3rÓSbC’Ó#S""#’Ó3SBsrÓ3#r“"Ó3C2"SÓS33RÓC’3“rÓC“R"S“2ÓSCrS3rÓSCScBÓSCr"c#BÓSCBc2ÓSCrc2ÓSCb¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÅ7Vff—„FæG&–WS¢²…öÖ–ã¢Â…öÖƒ¢2Â•öÖ–ã¢Ó#Â•öÖƒ¢S#Â†¢SCÂó¢&Òs“Ób"ƒCB32ƒ"Ó2ƒ#’B"“ƒ#s“r“3r“"““B#ƒ‚“ƒB#s‚“ƒR#ƒ‚"’#c’B#ƒ‚r#s‚"sr"3B#rSc2"S‚C22c"#’C2"#3c’s’C2#BSR"3C‚ƒ’#ƒ“‚3RC2"CCBCSCr#sCCB3Sr"C3SCrCCBCƒ"CCSB"ƒ‚sSCccR#“’sS"S‚sCrs‚sSc‚sC’"s’cƒB’sC"ƒ’s#r"c2c3"sbccRscC‚"Sbc’S‚c#"SbcR"sS“’Sbc"cS“’"ƒbcsbS“’ƒc"3cR"c2bcR"#CBSc’scR#S“R"3C’3Cb3#"S3C’C32"3C‚3"3C’33B3C’3#B"#ƒ’“r3CR#cb3#R##‚"#3‚sB#sƒ#S2sB"ƒ‚#R##sB#"ƒr"CR3‚s"#CRS’#sb"“bC2#’3C2#3ƒ""S2C3‚ƒBC3c‚C3‚"C23‚C3‚#"C3"“SR3#B“ƒ’3ƒB“s3SB"ƒS#r“##S‚ƒƒb“""ƒ3‚"ƒCr#ƒC"""ƒ#B#‚ƒ#‚’ƒ#R#"ƒ"“2ƒRSƒ’s"s3Css’#cBscb33r"cƒ‚C3s’C#s2C3"cCrC2csBC3ccC#""cb33‚c3"3ƒ2c’3c"S2crSsR#ƒ"SCb##2"Cƒ#"S2SC“‚#""CS"sCS’#"CS’S2"C##SRCC"“’C3"##‚"33rC‚3“’3‚3ƒ3cB"#sbC3b3rC#‚#“rC3b"#R3“r#S2C3b#3C#2"#2s"C‚#ƒ’ƒƒB"#’rS’C"rr#2#"S’S‚#brCb3’"“#sb#rC2#b"#b3#"#“"#r3"#CR#s’##23#3"#“B"3cb#s‚#C‚#“"#b"3crb33r3CbcR"C"Ó’3srÓr3ƒrÓ’"C3‚ÓBC"Ó’C#2Ó2"S‚ƒ‚CsBrC“RSR"c#‚#ƒBSc"SS“"#b"cSr##2cC‚#cbcS#C2"sr2csrSBc“bƒB"sSRÓ#’s#bÓbs3rÓ#’"s“ÓbscRÓ#’ssbÓ#B¢"ÒÂ÷&æÖVçE&V6ö×F÷V&ÆT6FVæ6UWW%&Vf—ƒ¢²…öÖ–ã¢Â…öÖƒ¢#CbÂ•öÖ–ã¢Ó3Â•öÖƒ¢#“bÂ†¢3#bÂó¢&Ò3cÓC2"SS’S’CCRÓC2S2r"c“‚#3bcRcS"s’"sB#C‚sB#C2s#C‚"s#r#3Rs’#C‚s##C2ÂƒC‚C""ƒƒ2"ƒc#"ƒs""“r3"ƒ“"“2’"“Cbc"“#rC"“3’S"3r“"“s"‚’Cr"Sr#CB#BS#"sb“c2#c‚#2Âsb""#RÓ’ƒ‚Ó’#Ó’"#SÓb##RÓ’#3rÓB"#ƒB#r#cB2#sBb"3ƒ“3#2s‚3S3R"3“R#3ƒB“r3ƒR#"C2“CR#C“r"S‚CC3b3BCcrƒR"ScB2S#’BSCr2"cr3"Sƒ2S“r""scr#3‚cs‚“"s’cr"s“B3sƒ#S’s“#ƒ""sS"#“Bssb3rscB3B"cSbcBs#S‚cƒ’#b"c#’CBcCbSc3rCB"c2cc#CBc2S"S"3RSc"#rS#R#S‚"CS"3SrC“3CBCs3Sr"3“r3#C33SrC3CB"3bs3c‚#s3CR#’"#ƒ#r3bSB32#r"#CBs#Sb#r#SBSB"CR33r###bs’#ƒ""3c23R3SB#"3c2"s33‚“r3c2ƒB3SB"S3c233Sr3#"“S’ƒr#s““"##2"“3’cr“Ss2“CRcr"“#ƒB“32cr“#rs2"ƒ‚3C2ƒƒr#3‚ƒS"#“"sS’3“Rs“R3srss‚3“R"s3CBsC"3“Rs#B3sr"c“‚33‚s3Cs3C"SCBSBcS"#s"cR#r"C"“‚SrCS‚“‚"3B33sr“‚3C‚"“R3s2#BƒrCB#sR"S‚C#bƒR3“2ƒ"C#‚"’3cb#bC#b#b3ƒ’"3r23Cb3#r"B#ƒr3#“B"sB3bC’“B“""3cÓC2#3Ó’#ƒ’ÓC2¢"ÒÂ÷&æÖVçE&V6ö×F÷V&ÆT6FVæ6UWW%&Vf—…GW&ã¢²…öÖ–ã¢Â…öÖƒ¢##bÂ•öÖ–ã¢Ó#3rÂ•öÖƒ¢C3bÂ†¢cs2Âó¢&Ò#s’Ó3C"#“2Ó#S"#“2Ó3r#“RÓ#s‚"#sr3b#ƒrÓSb#ƒ"ÓS’Â#s2‚"3‚sb#ƒ’3r32Sr"3C’#233"“23C"#2"3s‚c‚3S’#23cr“""CSb3RC#"C#‚s‚"SÓ"Csb2C“2Ó""Sc‚#2S#bÓ"SCB"S“rS2Ss‚3"Sƒ‚C""sRƒbc#’cc’C2"sc#ƒBs#‚#bsS#Cb"scR3sc2#ƒ‚scR#“R"sc23rscR3"scR3R"s3r3"sSB3sCB3‚"s‚#ƒrs#’#“‚s#R#“""S“‚CRcs2#CRc3r“B"Ss‚3S“3RSƒB3"SSrCrSs3ScR3R"CCr3#Sb#"Cƒ‚#cR"C23SC323CCr3S"3S‚3#23ƒ‚3S3s"3C"#c’#’3#’#ƒR#“’#C‚"#SBS##cB3B#S’C‚"##‚cb#S2SSB#CrSƒ‚"#‚c#‚##Bc###2c#‚Â#Rc#‚"#c2#c#b#"c’"#c#c’#cRÂ#Sƒb"#3C‚#BSr#rC#‚"#rcb#B#ƒ‚#R##b"#"ƒ#"c‚#‚sB"“B33Bc‚#323#ƒB"C‚3cbs’3SbcB3cb"B333B3cb‚3SB"“BSB“c’#sR“3##"ƒs2#"ƒƒrsƒƒƒr"ss‚3SbƒCR#Sbƒ’3"s3r3s’sc23s"sS3s’"c“‚3S2s#B3s’s3sÂc##3""CRBSsSBC“RB"3"3‚3srB3C#"s2Cƒr“"r#ƒB"SRC#c’CRc"C#"C"CSC#CRCb"#“"#23s233B"B#c"#ƒ"#s""c‚3’3"c‚“"“’"3S’Ó#b##RÓb#“"Ó#b"SƒRsbCCbÓ#bS3"cc‚#"cbRcCc"c“2##‚cƒ#’cƒr##‚"s##2s##‚sr#’"ƒc2sS"cssR"ƒCBrƒ"C"ƒ‚r"“cbƒsrbƒ“B3’"“#2“B“bsR“’ƒR"““R#’“CR3r“c‚s’"#RƒB’#r“r"’SbSBCƒr“‚"cb#3‚3"S"#"#RSƒ#“R3"##Sb#rS"#‚SR"##‚Óc2##2Ór##RÓƒ’"#s’Ó3C#3Ó##2#SÓ#s‚¢"ÒÂ÷&æÖVçE&V6ö×G&–ÆÄÆ÷vW%7Vff—ƒ¢²…öÖ–ã¢Â…öÖƒ¢ƒ32Â•öÖ–ã¢Ó3’Â•öÖƒ¢3’Â†¢c#‚Âó¢&Òss‚ÓCCB"ƒÓCCRsƒRÓCCBs“2ÓCCR"3rÓ33‚ƒ“BÓCCR“c’Ó3“r"#3rC’Ó#C#Ó’"ƒBCb#ss"3"#BCCBcBC3C2CCB"“c3“““’CCB“s‚C#b"ƒCc2“#23Bƒƒb#3b"ƒ"#‚ƒ3"Sƒ#r#‚"sƒbcrs“b3s“2S2"ccC‚sCB#Ssb3C"S“’CS’c3’CCRc’CS’"SCCSsrCS’SSrCCB"C3’“rSr3CCsB#c’"C#"s’C3R“C3Rs’"33‚3“23“"#S3s’3#‚"#sRC3’3#C#2#“‚C3’"#"3“b#S2C3’#3C#R"s#’s332#‚#c‚"CRrs2b""c‚“‚3"c"Ss‚"“B#cB"SS2#’"#3#“"#’#ƒ"#’#“""#cB#c#C#“"#S#ƒ""#sB#C"#c‚#SR#c’#C‚"3CbCb3Bs’3#R""3sb3S3"3SB"C"3R3“"C2#""CS"rC#’SbCCƒ""SC#“Cƒc‚S#3"SSb3rSCr3"SS"3r"Ss2#“RSc"3rScr3""c#B#rS“R#s"c#Cb"s#cSrCRcƒRs""sSRÓ#rs3"Ó’sC"Ó#r"sƒbÓbscRÓ#rssRÓ#B"ƒSrs2ƒ’rƒC3’"“S"#Sbƒƒr3B“#“B"“s‚#ƒ’“c2#s’“c’#ƒ’"’#c"“ƒR#ƒ’““B#ƒ"3#3Rr#S2#B#CR"ÓBsc“’ƒ"bÓc‚2Ó#bbÓC‚"’Ó#C2bÓC“Ó#"ƒC‚Ó#““SbÓ#s"“Ó#“"s3Ó#cƒ’Ó#“ssÓ#ƒ""c“bÓ#C‚sBÓ#S"s2Ó#C‚"csÓ#ƒBcƒBÓ#C‚cs‚Ó#S‚Âcc"Ó3""cSrÓ3SrcS‚Ó33cSrÓ3CB"sCBÓC3’cSrÓC2cƒ2ÓC#R¢"ÒÂ'&7566ö÷¢²…öÖ–ã¢Â…öÖƒ¢3"Â•öÖ–ã¢Ó3“Â•öÖƒ¢#‚Â†¢C‚Âó¢&ÒÓSc""3“2Ó#SbsÓSB3rÓC""CC’Ó3’C3Óƒ’CC’ÓR"CC‚ÓCC’Ó#bCC’ÓB"C32CCCbBCC‚C"C‚Ó2CCC"B"3“bÓcbC2Ó#2C"ÓCb"CRÓ3“r3CbÓ#C2#’Ó33r"ÓCS2ÓC’ÓC#2"ÓSc"ÓÓCƒRÓS#¢"ÒÂ'&74Fö—DÖVF—VÓ¢²…öÖ–ã¢Â…öÖƒ¢CsbÂ•öÖ–ã¢ÓSÂ•öÖƒ¢332Â†¢3ƒ2Âó¢&ÒbÓs""#rÓs’Ós"#2Ós""#RÓ32ƒ’ÓSbS2ÓC‚"S#B3#rÓrC3R3R"cƒRC3"cR“’c“#“R"csCƒcƒBCC’cƒ‚CsR"cC"CCcSBCƒ"cC‚CSb"C2ƒ2S“’3#S2#C"s’ƒ’33“"R"ÓÓ"sbsb"ÓSÓrÓ32"bÓs"ÓcR2Ós"¢"ÒÂ'&74fÆÄÆ—6†÷'C¢²…öÖ–ã¢Â…öÖƒ¢#“‚Â•öÖ–ã¢Ó3CBÂ•öÖƒ¢cRÂ†¢C’Âó¢&Ò3“bÓC“R"C#ÓCcC"ÓCƒrC‚ÓCsB"C#’Ó3ƒ"C#‚ÓC3RC#’ÓC’"C#bÓ33C#’Ó3cBC#‚Ó3Cr"#ƒRÓbCÓ#’3SbÓB"“‚“B#3’S’s2“B"3’ƒbs’“BS‚“""C’#ƒs2ÂÓS""Óc’Óc"Óc’"#Óc‚2Óc’bÓc’"ƒ‚ÓSbCRÓS’cbÓSb"#cÓcSbÓSb#2Ó“R"3“bÓC“R332Ó#S’3ƒ"Ó3c’¢"ÒÂ'&74Æ–gDÖVF—VÓ¢²…öÖ–ã¢Â…öÖƒ¢ƒrÂ•öÖ–ã¢Â•öÖƒ¢ƒ3‚Â†¢ƒ3‚Âó¢&ÒS"SRS"S2"S‚#2cRrS’b"SRS‚Sb3bSRC‚"3rSR“’sR""###2#"###C"3R3‚###ƒ’#3‚3‚Â33b3‚"C‚3ƒ3“23Cb3#"CcCS"C’C3‚CbCS""CƒRCSCc‚CS"CsrCS"Sc’SS3CC‚SSbCcB"Ss2SC2Ss"S#Ss"S3"cSrc’SƒcRS“Rc‚"c“‚c#csc’cƒBc’"sƒ‚ssC’c#Rss‚cC’"s“‚ss‚s“"s#bs“2sS""ƒs2ƒSrƒbƒCƒ’ƒCR"“ƒR“S“#rƒcr“s2ƒƒr"ƒBCr"3RB3B"c"#‚32Sbc"ƒr"Cbƒ"c"CRS‚cB"#R#rC“3b#rÂ#"#r"“2#R“‚""sBƒR"s‚"C‚’#b“b2"#‚’C23R’"“3’#"“c’"“C‚ƒ"ƒCR“#"“#’“C’“r“3b"sCbƒ"ss2“’sS2ƒƒb"sCBsƒsCBƒ"sCBs“"c3Rcƒs3rssrcƒ2"S#BSƒ2SS2cƒS3bccR"C3’SSBS#S2S"3SrC33srS3cC“"Â3SrCb"3B3cB3Sb3s’3C23cB"#3‚3c#ƒ‚3cB#cB3cB"s23#"3Srƒ33B"cr#CRc‚#ƒcr#c""RsBcb“"Srƒ"sRs“Rs2ƒRs"b"3cbBS2"s2“‚ƒR"3rCR2#b"SC"rCb¢"ÒÂ'&74fÆÅ&÷Vv„ÖVF—VÓ¢²…öÖ–ã¢Â…öÖƒ¢s“Â•öÖ–ã¢Â•öÖƒ¢ƒ’Â†¢ƒ’Âó¢&Òr"3’#’#b3’s"3‚#3’’3’R"ƒB“2#Rs“2"CBƒ2s2“2cƒ’"#"sr3Rs’#‚sr"r#’"sr‚ƒb"ƒsb3#BB#“"“S’33"s“’3rƒS3#ƒ#R3#"sS’3SBss"3BsSR3#"sc3s2sc3csc3cb"sS’3“"sc3s’sc3ƒB"cƒCsrsS2CSs3Csr"cSBCsBcs"CsrccBCsR"cbCcrc3‚Csc#"Cc‚"SƒbCcRS“’CcRS“"CcR"ScBCƒSsCcRScBCc’"Sc’SRScBCƒrScbC“R"SsRSS2Ss"S#SsRS3r"Ss"SƒRSsRScBSs2SsR"CƒccRSccSrS3’cc‚"C"ccRCS‚ccBC3RccR"3ƒ"c“3“"ccr3ƒ"cs""3ƒ2s3ƒ"c“23ƒ2c“b"3ƒbss23ƒrs#B3ƒrsC’"#“rƒS‚3ƒ"ƒ#‚3SƒSr"##’ƒc#sBƒS‚#SƒS‚"“ƒ“r#rƒc2“2ƒs"c2"ƒb“3bƒ“sb"s’ƒBCRS#BƒB"cbƒ2sRƒBsƒ2"C2“bC’ƒC2ƒr"C‚"C2CRb"S23S"’S2#R"3’c’S2CRCRS‚"#bs’3bsR3s’"bs#"s’rsb"2C’#b"’cr“"s’"“##b3S"‚"CR“s‚#"#BC"Sb“2Cr“SbS“3R"#“s“Rsƒ3#s“R"3Cbsc‚33rs“R3Cbs“b"3CBsC23Cbsc3CBsS2"3C2sb3CBs323C2s#B"CSRc3C2cS3“c""SRcRCsS“’C“cR"S#‚S“‚SBcRS#2c2"S3bSs’S3BS“"S3bSƒb"S#BS#2S3bSc"S#bSC"S#2SRS#BSrS#2S"c#CRS#2CC"ScCR"c3’Cbc#bCRc3BCb"csrC2cS"C‚ccBC"sCbcƒrCRc“bCb"s#3“"sbCbs#C"s#3s2s#3ƒbs#3ƒ"ƒ3#SRsB3sS’#S""ƒ“r#cƒSB#SRƒsb#c"“#b#c"“’#c“’#c""“c’“r“c2#c"“cR#S""“sƒB“c’“2“sƒ’"3R“s’3r““‚R"s#"C2RSb‚"“b3s’#Rƒb#r"ƒrS’“Brƒrƒ""rƒr3r“Br¢"ÒÂ'&74&VæC¢²…öÖ–ã¢Â…öÖƒ¢3ƒÂ•öÖ–ã¢Â•öÖƒ¢3crÂ†¢3crÂó¢&Ò#“‚"Cs"S3S’C‚B"S3r3RSsS3“""SC2#bSC2c2SC2“ÂSC2#cb"SCB3‚SC2#ƒSC2#“R"SC’C32SCb3SBSC’3“R"SC2SrSC’CS’SCrCƒ""S32S#‚SCSbSCBS#‚"SS‚S#BS#‚SBS#"S‚Cs‚SC“‚S‚Cƒ‚"SB3‚SrC#RSB3s""SR#cBSB3SR#ƒ""CCbƒSR##CƒB“’"#“BS3“bc3CBS"“"“B##bSS‚cr"CR#c’c"#rCR#3"Cb3S’Cb3Cb3#‚"3rC“rCbCRCRCS"#rS#23bSr3rS#2"BC“‚BS#BbS2"2Cƒ2C“"2Cƒr"C’CSbC32"B##‚3C‚B#ƒ‚"2srB#B“B"c‚S2#R#ƒB"#‚#rSBr"#“‚#32B#cb¢"ÒÂ'&74×WFT6Æ÷6VC¢²…öÖ–ã¢Â…öÖƒ¢#sBÂ•öÖ–ã¢Â•öÖƒ¢#cÂ†¢#cÂó¢&Ò#2"#’#b#r"#b2#RB#b’Â#R#rÂ#RS2"#bc#bSb#bS‚"3s"cB#c‚c23‚cB"3“RƒB3ƒ2cB3“RcbÂ3“Rƒ’"3Sr##’3“"#’3ƒb##’"#’##‚3##’#cR##‚Â##23"#’3Sr##R3#‚#’3CB"ƒ’3sB#23cB“r3sB"ƒB3s2ƒr3sBƒb3s2"sr3S’s’3s"sr3cbÂsr3C‚Âs2##"Â3’##""#b"##"#’"sB“’2ƒ’"CbSr’Sr3Sr"‚cc‚S‚ƒ‚c"sc3cScÂcrS‚"ƒBbcrCs#b"#2“""“b¢"ÒÂ'&74×WFT÷Vã¢²…öÖ–ã¢Â…öÖƒ¢32Â•öÖ–ã¢Â•öÖƒ¢3’Â†¢3’Âó¢&Ò#cR"CSƒ’3c2rCS"ƒ‚ÂCS#R"3C‚3ƒ2CC#ƒRCR3C2"#’CCR#ƒ‚C#b#C‚CCR"ƒB3s’c‚CCR3"C#"c’3cBs’3s2s23c’"#233#2#sR"#3ƒ‚“B¢Ò#c""#‚s2ƒc"SBcb"Css“C"#R"S"##bCƒrCR#b"“r3sBs’#“R33CB"##‚3ƒ"#r3ƒ#r3ƒ""33c#S"3ƒ"#sb3s"3sB3‚3#‚3S3S233"C##23“r#ƒBC#S2"3“2c2C#"CRƒ"#c"3SB“#ƒ‚c2¢"ÒÂ'&74fÆ—¢²…öÖ–ã¢Â…öÖƒ¢C"Â•öÖ–ã¢Â•öÖƒ¢3cÂ†¢3cÂó¢&ÒSs’"SS2Ss’c‚SSrr"S"SB3S’#s#b3ƒr"#’S#CRS3’S#"#Sr#bS##2S‚"Csr2SC“BÂ#R"r#“"Sb"CƒB3rCCc"C"#ƒrCSC"#’ÂC"3c2¢"ÒÂ'&74¦§¥GW&ã¢²…öÖ–ã¢Â…öÖƒ¢cCbÂ•öÖ–ã¢Â•öÖƒ¢#"Â†¢#"Âó¢&Ò3"3cr323#r3CB"3ƒ’SR3sBC3ƒ"C’"C“CRC#2ƒRCSbB"SrSBC“RSSSB"S#BCBS2SBSrS"S“‚s"SCr#SsR“‚"s#Bc#RC"cc"#B"scRC2s##BsCB3"ƒ“2Crƒ"s"ƒSRR"“3#"“cb“#2ƒb"“"#R“#2#2“r#R"ƒs“’ƒ“b#Rƒƒ2#’"ƒ"S2ƒS"ƒ2ƒ3"cr"sƒ’CBƒRC‚s“bCB"ss2Sbsƒ"CBssbCr"c“#SsSr“’s###""c23cS‚#ƒ"c33"S#r#S‚Sƒ3SSb#ƒ‚"C#SbC“B##"CSR“"3“’C2C"CrCRC2"3srSr3“"C23ƒbCr"#S’#ƒ"3C#3#C""#’3R#CR#“‚#3"3R"sr#s’#B3R“"#“r"SR#r3r##‚“Rsr"S"3bB#s’"BSbSS"S2cb3"SCRS‚"R3sRƒ‚“‚‚"3RC‚#BC23C‚"Sr3"CC‚C‚C2"#S"32ƒb“b#’cR"3#sR"#“"¢"ÒÂ'&756ÖV#¢²…öÖ–ã¢Â…öÖƒ¢33BÂ•öÖ–ã¢Â•öÖƒ¢SÂ†¢SÂó¢&Ò3#"CsR#R3“C3bC2"CƒC2Cs‚3Cƒ3r"CsRSBCƒCrCƒS"CC’C‚Cc‚S‚CS‚SB"3“R3"C3"3rC23""3C2C3sr3"3c3r"##’“B3C‚#cbs2"c‚#r#b#’ƒb#r"’“"C‚#r3#’"#bS’C‚3"ƒ’"S’c23"#’CRC‚"“‚ƒBs"s‚ƒBƒB"3s2‚ƒB‚ƒ"#2#bSrS‚ƒ23r"3##SR’#ƒ’¢"ÒÂ7G&–æw4F÷vä&÷s¢²…öÖ–ã¢Â…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢3cbÂ†¢3cbÂó¢&ÒCR"C#RrC2ÓC#’"C3’cbC3R3"C3’C‚"CC#c‚C3’3rCC#""C3bC"CC3BC3’3cÂC3RC2"C#2Cc’C3RC3bC3CSb"3CBS‚CbS3s2S"#BS#r#“‚S##SS#r"cC“‚SbS#r‚S‚"rC3‚3"CƒRCc‚ÂrC#b"B33rr3“br3cr"C#s"#b"C"rs2"22#rÓ2B"C3’#’23R#B"C"S2C"C2CC’"C’CC‚ƒBC’""C‚#RC’crC‚“""C’#S"C‚##‚C‚#CÂC’3""33C2s"33“’3C"#b3CrSb3Cbƒ3Cr"3s"3B#c"3Cr3‚33‚Â3“3rÂ3“#CR"3“3‚3“"#"3“sb"3“r#23“3“"c""CR3“’B3“2¢"ÒÂ7G&–æw5W&÷s¢²…öÖ–ã¢Â…öÖƒ¢#’Â•öÖ–ã¢Â•öÖƒ¢Cƒ’Â†¢Cƒ’Âó¢&ÒS"ƒBC"s"ƒ#b"#“rSSB##2#"#c3ƒ""3Rc“3RS“‚3‚cCR"3BsB3Rc“r3sB"#sbcs#ƒ‚sB#ƒ"c“r"Sr3#3bC““b3ÂSrCB"s2S#b3B#sbB3“b"3csrcSsbS"c3‚"2c“B#bcƒB#"c“B"csB’c“Bc“Âcs"c22cC’bc#b"RsBC"Ccs"3r"Srr#‚S‚¢"ÒÂ7G&–æw4†&Ööæ–3¢²…öÖ–ã¢Â…öÖƒ¢“Â•öÖ–ã¢Â•öÖƒ¢#"Â†¢#"Âó¢&ÒC2"#sR#"#r#sRS2"#r#“#sR#b#"#“"SBc2#“##""C2sbs¢Ò#"c‚"C2Rƒ’cbS’sR"3’#BC3’r"s’“’3’C‚Sbƒ"CR##b#b#"##b"“’#c2##bƒ##"#3RS##2“b#3Rs2"#2“"#3R#‚##Rr"#"c‚ƒsbSc‚¢"ÒÂÇV6¶VE6æ—§¦–6Fô&÷fS¢²…öÖ–ã¢Â…öÖƒ¢#Â•öÖ–ã¢Â•öÖƒ¢3#RÂ†¢3#RÂó¢&Òs"#ƒ’“’#C#ƒ’CR"#S‚ƒ2#ƒ’3#sBSb"sB#c’#3b#r#2#CÂsBC‚"sBC#’sBCRsbC#""3Cc‚c‚CSS2Cc‚"rCS#Cc‚rCc"‚C#’rCCB‚C3R"R3rr3ƒ’R3Cr"cbS’#“R##2"sƒRƒ’¢Ò3BSR"S"3ƒBSRS"ƒR"R#32S"s’ƒ#’"B“"B##B#b"sB#B3rB3rÂsB##‚"#32C‚##r##2ƒ2"#3b3#3RC2#3b3R"“rs"#3bR##2ƒR"3BSRsrcSrSR¢"ÒÂÇV6¶VE6æ—§¦–6Fô&VÆ÷s¢²…öÖ–ã¢Â…öÖƒ¢#Â•öÖ–ã¢Â•öÖƒ¢3rÂ†¢3rÂó¢&ÒCRr"c2S22S‚"s2#2ss2rÂs2CÂsCÂsc2Âsc2"#bss’cB“2cb"3B#ƒr#cBƒb3B#32"#ƒ3SB3B3‚#“r332"‚CC"#CC"ƒbC3’"3#Bc’CC"3s"Rsb#cbSR#"ÂRSb"CRrB32#R’¢ÒR##"c"#Sb“"##2s2#3"S2#“"Sb#c’S2#ƒ"s‚3CBS23c3#‚"c‚3ƒBR3s"3R3ƒB"#23sbƒ23ƒB“’3ƒ""#S23##3’3cb#S23Cb"#Cb#“#S23#S3"s##b#3#Sb#2#3bÂs#S‚"C‚3Rs#s‚c2#“""#‚3RC233R3RÂ#B3R"R3r3BR3‚¢"ÒÂÇV6¶VDÆVgD†æE—§¦–6Fó¢²…öÖ–ã¢Â…öÖƒ¢#sÂ•öÖ–ã¢Â•öÖƒ¢#ƒBÂ†¢#ƒBÂó¢&Ò#2"##2B##"##2r"##"3R##2#"##"#’Â##"sb"3s2s#s"sB3#2s"3“ƒ3ƒ"s3“sÂ3“ƒB"3Cr#3"3ƒb#r3ƒ"#3""#’#3‚3r#32#cb#3RÂ#’3cB"sC’#’3“R“2C’"Sb3“2cC’SbC""S‚3sSb3ƒBS‚3sbÂS‚#C"b#3’R#Ccb#3’"##br#3’#3‚Â##2"Ss’#2#’s’"S‚srƒbs’#"s’ÂS‚c2"c#’S‚S"S‚C"#2cbÓ“B¢"ÒÂ¶W–&ö&EVFÅVC¢²…öÖ–ã¢Â…öÖƒ¢“CBÂ•öÖ–ã¢Ó2Â•öÖƒ¢SSÂ†¢Sc2Âó¢&Ò#""’s‚S2RCbÂCB332"c23sbCr3CrC3s""3cBCcR#3‚3“3C#b"CSBS“’CbC“rCSBSC"CS"c‚CSBcRCSBc""3#ssCC"c“B3“bsCr"#C‚ss’#“Rss‚#s"ss’"“2ss‚##’ss’#"ss’"csƒƒss‚crssR"3rs“"S2sƒ’CBs“"’sƒ’#‚s“"‚sƒ’"rs’S’sƒ’C‚s3r"#2s‚bsB#s‚"3bs#’s32s"S2cƒBS"sS2c“‚ÂS2csB"C23ƒbS2SsrS2Cƒ""#cB3b3"3#3‚"3B#rsR"’#b#""#"’B¢ÒsC#R"SbCC"cC#RSbC#’"SrCsRSrCS"SrCcB"cBc"cSrcBSc"cc“‚cBc3Rc2ccr"ƒBs#’cs#crs#’Â“2s#’"3C‚Sc2#s‚s’3C‚cC"3CbS3’3C‚SSB3CrSCr"sC#R3#‚CS’##’C#"¢Ò“s’b"‚2“ƒbb““R’"ƒCr#’s’Cb"bCC’ƒr#rB332"C2cSB#2S‚32Sƒb"C‚cƒRCRccBC‚csR"CsBC‚c“2Cbs"rsb3s2’sb"Sbsb“"sbs2s"3rcs3Rs23‚cƒR"BC3’#RS“RBSr"“ƒbC’C#‚““’C’"“s’C’“ƒRC’“ƒ"C#"“3RC#b“cRC#2“C’C#R"s“R3sbƒƒBC#bƒ3‚CR"ccBS2sB3#2ccB#C’"ccR3ccBCRccR3‚"sS2#’cscRsB#’"ƒRCss2#’s“"32"“sRCrƒs2cR“#2"“cRCR“s‚“c‚sb"“s’b“c2r“cbb¢Ò3“2Ór"c3BCRC“BbSs’S""c3‚cc3bSc3‚Sb"c#Rc‚c3‚cbc3Bc‚"c#crc#Bc‚c#"c‚"S#B‚Sƒ"cBSCBc"C“Rs’SrBSR“""C3R32CsC’CS"32"3ƒ“bCb323“rSR"3c’CR3s2B3c’3"CC"##R3c’ƒb3“R#2"Cc‚#3"CS##‚CS’##’"cSB3CBS3’#SRcb#ƒR"csr3“Rccr3ccsr3sb"cs"CRcsrC"csRC‚"c"CS’ccCC"c3’CSR"Sƒ’Ccc"CcS“"Cc"3C‚3#‚SCcC’C‚"#c’#3"#c‚#c’“’"3s’Ó’#c’CR3‚Ó’"3“2Ór3ƒ2Ó’3ƒ’Ó’¢Ò3“R#C"C“B3ƒ2C‚3CS"3CBÂS#CR"SCBC’S#‚C’S3bC‚"SSBCRSCrC’SSC‚"Ss3ƒ2ScBCbSs3“bÂSs3s’"SS"33Ss3cSc"3CB"3“R#CS#ƒRCc"#S2¢Òƒ#rƒ’"s“"ƒRƒ’ƒB“b"scb#BssR3scbS‚"ƒCR3css"#Sbs“’3B"ƒs3s"ƒSB3c’ƒc23s""ƒ“r3cbƒƒ3s"ƒƒ‚3c’"“s‚#s’“C"3S2“c23#"“sb#S’“ƒ#s"“ƒ#cR"ƒS‚B“C"#2“’Cr"ƒ#rƒ’ƒCr“Bƒ3rƒ’¢Ò#ƒ"""33b3R32B3##2"3S’s3SCR3S’S‚"33‚"3S’ƒ"3S"“R"#SB33"‚#ƒB3"ƒrƒ‚##23#"’"s‚cRƒ"ƒs‚s""“R3rs‚SRƒ"CR"#ƒ""##2#2#S2’¢"ÒÂ¶W–&ö&EVFÅW¢²…öÖ–ã¢Â…öÖƒ¢C3rÂ•öÖ–ã¢Â•öÖƒ¢CcÂ†¢CcÂó¢&Ò33"33B33332"3C"33‚B3CrÂ33‚#b"3C#cB33‚R33‚ƒB"S#b“RC#bCcC‚"SS’sS3bƒ‚SCrs"ScBs"ScsSc2s"Sƒ#Sƒs’Sƒ"ÂSƒ#r"SC2#2SƒRS‚Ss2ƒB"Cs"#S’S‚#’C“R#3‚ÂCCR#ƒR"S“#“"C“B#ƒ‚SC#“"c#"3‚c’#“Bc‚3""c#‚3S’c#R33c#b3Cb"SƒbC"c3"3“2c#CR"CcB3“RSCb3“’SB3“bÂSS’C“"ScrS#BScrSScrS"ScBSC2ScrS#rScrS3b"S3’S“bSS’Sc2ScS“"C“BScBS#cS‚Ssr"3CC2CC"SB3“CcBÂ3CSc"#ƒrccB3Cc3#c3""#sS‚#sBc"#s"Scb"#c‚CCR#c’C“B#c’Cc’"rSc’#’Cƒ‚c‚S3"“bSs’’SsR"Ss’"ƒRScƒ’Ss’ƒRSs2"#BCCbƒRS‚ƒ"Csr"#’3ƒS2C#bƒC2"CR3sBSB3sr“’3sb"3#B’3sB3S’"c2#cb#cR#cR"CB#s"ƒ’#c’r#s"Â“b#s""‚“2cr#Cb3‚#’"c3RsbcBcS"“’s2c#s2R"Bc‚s""s"BS‚rcS‚"3cb#S‚#Bc""#S’ƒbs2r#rCR"#Sbr#S’c2#SbC"32#Sbs"#s3r"333r3#2¢"ÒÂ–7D6†ö¶T7–Ö&Ã¢²…öÖ–ã¢Â…öÖƒ¢CrÂ•öÖ–ã¢Â•öÖƒ¢#C"Â†¢#C"Âó¢&Òs’B"#rS‚S23"“"ƒ‚"#"##s2#"ƒr"C233b#"#S2ƒr#“‚"“‚3C‚33CBR3C‚"B#“Rc3C‚b3#r"#sb#ƒ’#ƒ""’#C’#cb2#S‚"#ƒ23R#bs"ƒ2"Sbƒb3"ƒ2CBƒ2"#bS23BR“s2"r3’2C’rCR"’#r32"#r"S’3’C2"s’BcRs"¢"ÒÂv–vvÆT'Vvv–FõW¢²…öÖ–ã¢Ó#"Â…öÖƒ¢3Â•öÖ–ã¢Â•öÖƒ¢sbÂ†¢sbÂó¢&Òs2B"“bƒƒ’"#Cb#b#R#3’"3r#sS2#ƒRƒR"3"33R#R3r3"3#r#B3R33##‚"3s2ƒb3C"3S2"C"c’3ƒ’sRC"c’"C3"“BC#Rc’C3"s’"3s2ƒC3"rC2SB"#3R#S"3#2#b#ƒR#CR"###S2##’#S2##R#S2"c‚#R“b#S2ƒ#C""SƒCC"“B"RR“’""s‚ƒ’"ƒBR"ƒSR3R3Rc"Ó3"S2Ó#“BÓ3"c‚"ƒbÓ3"#BÓ3"’"“B3b#"ss2Cb"s2B3Bb3r¢"ÒÂ'Vvv–FõW¢²…öÖ–ã¢Â…öÖƒ¢#c"Â•öÖ–ã¢Â•öÖƒ¢CS’Â†¢CS’Âó¢&Ò“"cc2ƒr#’sCR"CR‚SƒCR“R"ƒ2c2CR#‚SrCR"3#Cb##"“#c"#b"3Cr3‚332#s"3Cr#“R"33“23Cr3C333cB"#S‚C2#ƒ’C2#s"C‚"CRCC’##C#Rƒ2C3b"rCcB3RCS"#CS""CC“RCsr#‚CƒB"#“BS“2“"S#b#C2SSr"33cCr3‚c33c#b"3Bc“233cc3#BcsR"#c"s3b3"sB#ƒRs#’"ssc2#3sCB#sS2"#"sƒ2S2sc‚#Rsc‚"cƒ3#ƒBC2ƒ‚"#ƒ‚“#"#"ƒc#Cbƒ“"332““’3‚“CR332“s""#cbƒ23323"3cB"ƒ’R#C“B#R2"#"s‚CR32#"S2"c‚#S#"#3‚##2Âƒ#Sr"#c’332##ƒ2#C3b"3RCR#“B3Sb3R3ƒ"#ƒBCc’3RC#b#“‚CCr"##‚S#R#c’C“"#SS"ƒ2c“rSCRƒ2Ss"“cCƒ2c2ƒBc#b"“rcs“2cS“Bcc"#s"s3R#2s’#3s3R"#“Rs3B#s’s3R#ƒrs3R"3#2s3"3Rs3"3Bs3""3Ss3332s3"3Cs3""3srsC"3c’s#’3srs3""3ssc3srsCr3sBsSBÂ3ƒ“‚"#r#cb#sB“SB#C‚#""ƒb##B#ƒ’“b#"SB#c’sr#cr#“""ƒ#BR“ƒrS’“r"sƒrBƒs“r"S’sCBsc#sCR"cs3‚“"sCB#RsC"CRc“"Sbs#Ssb"3Rc323‚cs"3RcS""ƒBS‚3RS“SSS""##’CsR“’S2#2Cƒ‚"#S’C3#C’CSb#S’CCB"##’3ƒ‚#S’C##C’Cr"S3#R#23cRsr3CR"R#s’3B3‚#“b"s2#"ƒB#Ss2##r"‚#2s2sbƒRS""#SR3C‚sr“’S"#ƒ"B#sB#R#ƒ"#"#c"““#ƒ"‚#sR"S“B##b“c2ƒ’“3’"s’ƒS#Rƒ“b“’ƒsr"c2ƒ’c’ƒ3rc2ƒ#B"s’sc’c2s“bc‚sƒ2"#"c“rs#’SBs"#cbcs##Rc“#cbcƒ‚"#c#"#cbcC‚#3"c3R"ƒ"S3BcrS“2#Ss"SRC“c2S‚SRSR"s’CC‚SRCs‚c2CcR"#SR3c#r3“R“"3ƒ"#ƒ‚3C2#c’3S’#ƒ‚3Sr"#cb3"#ƒ‚33#sR3#"CB##2##’#s‚ƒB#S2"ƒR3BB“2ƒRcb"‚S2ƒR“bƒR"“3R#’cB¢"ÒÂ'Vvv–FôF÷vã¢²…öÖ–ã¢Â…öÖƒ¢#‚Â•öÖ–ã¢Â•öÖƒ¢CCÂ†¢CCÂó¢&Òcb"3#c#“‚#S’ƒ"3B#sR3"#cb3B#s"3"#“R3B#ƒ"3#ƒ’"#S"3#ƒr3‚#c’3"#r3#C3##’3"“332#"3“B3R"SC"ƒb3c2s3ƒ’""S#CS""Csr"SSƒ‚"S#B‚SCr"cc2SBS“"S‚S“‚"ƒccsbc#"ƒcC"s2sBƒcsRs’c“"ƒbs“RSbsCb#ss"S2ƒ#’c2ƒS2ƒ’"s‚ƒc‚S2ƒCc"ƒS""ƒƒ‚ƒRƒsb“Bƒƒ2"ƒ“Sb#‚“"Sb“32"#b#‚#B“s’#b""#2ƒ#bCB#"c"Rsƒb#2C‚CR"sR##ƒ‚“sR#r"B#s"sR#3rƒ‚#S"s23‚3"#ƒBSB#“b"##b33’“3‚#’3#‚"#cRCR#S23S’#cR3ƒ"#S‚CCr#cRC‚#cBC3"SBSC#C"C“’“’S#"’Sƒ#BSSR’Scr"Cc#r’S“B#c‚"#Bcƒc2cCbƒBcc""#32sC"##2c“’#32s’"##bssr#32sS"#3scB"3Rƒc"#ƒ#"s2ƒC"Bƒ“RBƒsRBƒƒB"‚“3B“B’“B"“"#b3R“cc“ƒb"#b##’#2#2#b##""“"#cB#b#C“r#S""ƒ#sBƒr#sƒB#sB"Sb#cs#sBc2#cR"ƒB“ƒ2#R#C"#2"cR“#s“ccR“C"ƒ‚ƒS2cRƒ“’s"ƒsb"ssƒB‚ƒ#3‚ƒ"“scBƒBssr“ss"sBsC“sSrƒBsS"rcƒ2S2s#"#‚sB"c‚cƒcS’c‚c3b"ƒ‚SC‚c‚S“sRSs"srCs’S"CCƒ’"##2C3#’CS2##2CC2"s’3“##2C##’C‚"#‚3cc23ƒCR3s"s3#"‚3C‚ƒ‚33‚"3"#S2CR33"#sr"C‚“‚3"#3b3r#‚"Cr“sS"‚#"sBSrcbsbsBcr"S2#"sBCrcr3r"’“ƒ"C‚#B““R"3r“’ƒR“c"S’“C""’ƒcrƒ“’’ƒƒ"#bƒb’ƒCBBƒ#r"#srSsc’ƒBsC"3‚c“3"s‚3‚s"3cc‚3‚cƒB3Rcsr"“"c‚‚cSRc3R"S’S3sSƒ’S’Sc"ƒBCSRS’Src‚Cƒ"3"3ƒb“‚C3RC‚"C‚3CCB3s"C‚3Sr"CB3rC‚332Cr3#B"#3RC3r33RÂ“‚3R"ƒ"3B“B3Bƒ‚3BÂ3"3B"#“"3B3"""#cb#ƒrB#s’"ccB3"#32Cb“’"#r#ƒBrRc‚"CB3"’3r"cbSSBB¢"ÒÂ&WVC&#¢²…öÖ–ã¢Â…öÖƒ¢S“’Â•öÖ–ã¢Ó#SÂ•öÖƒ¢sRÂ†¢C#RÂó¢&Ò#b“‚"#SRsR#3bƒB#CbsR"#“B#cRsR#sBƒR"3#2Cr3Br3#r#R"#ƒ’#R3#2c‚3BƒB"#3‚#S"#c’#3’#S2#S""ƒr##"##"#S"#r#C""s2#bƒ2#bsr#""Srsc2“BSrƒ2"sB3‚SrccS"#b“‚ƒ’#r#’¢ÒsbÓ33B"ƒÓ#ƒRÓ3RC‚Ó3""ƒ3S"3“bÓc‚c2ÓS‚"ƒc2BƒSRc2ƒcBƒ""ƒ#‚#"ƒSRCƒSRsb"ƒ‚#2ƒ##’ƒR#2"s“2#’ƒB#2s“’#"ÂC#"’"#bÓs’#“ÓC‚cBÓ#B"Ó#2ÓƒbÓ“b"2Ó#3"Ó#’Ó##R"S"Ó3#RBÓ#cR3rÓ#“B"cbÓ33rSRÓ33S’Ó33r"sbÓ33Bc’Ó33rs"Ó33b¢Òsc’Ó3c"ƒ#’Ó#cBss’Ó3cƒ#’Ó#ƒB"sc’Ósbƒ#"Ó#3"s“’Ó#"sC"Óc2scÓcrsSÓc2"sbÓƒBs32Óc2s#2Óc‚"cƒ2Ó##‚s‚Ó#"c“2Ó#2"cs"Ó#S2csRÓ#3bcs"Ó#CR"cƒ2Ó#ƒcs"Ó#c"csRÓ#s"sS"Ó3S2s2Ó3‚s3"Ó3#r"sc’Ó3csSbÓ3Srsc2Ó3c¢"ÒÂ&WVC$&'3¢²…öÖ–ã¢Â…öÖƒ¢ssRÂ•öÖ–ã¢Ó#CrÂ•öÖƒ¢3c2Â†¢cÂó¢&Ò“’C""ƒs23S“b3ƒBƒ“23cr"C3bSs#’#C’SƒRCrÂ“Ós’"c"ÓsBsbÓƒ’c‚Óƒ2""Ó“bC‚ÓCr#BÓ#R"3bÓbÓrÓS2ÓbÓC2"##B“b#BS‚cR"ƒ’SrC#R#3"c#B3c’"ƒƒC“RƒS"S3ƒcS#‚"“’C"ƒ“’Cc’“C3’¢Ò33233‚"3"#C333r3r#sB"#sb#3R#“r##R#ƒr##‚Â#32#c’"#23sbƒb3rƒ23‚"##RCC#"3“r#rC’"#CbCSB##‚CS"#3"CS‚"33233‚#ƒBCC3323ƒ¢Òb##‚"crS‚R“"“"sB"“S’R#R“c2“""Cs‚Ó#Csc"Ó32c#"ÓC"3Ó3SC#2Ó#s’3cbÓ3B"#ƒRÓ3CB#“‚Ó3c#ƒ’Ó3Sb"#3’Ó#S‚#s"Ó3B#SÓ#ƒ‚"#cÓ“b##‚Ó##‚#3RÓ#"SrÓ#’3C‚ÓCBC3bÓ“"33#cƒ“‚ƒc#""“23rc3C2sb3C"b##‚r#ƒ’#S"¢ÒsÓR"#Ó#SrÓC23‚Ósb"““‚Ó#BÓ#’BÓ#RÂ“#BÓS2"“2Óƒ‚ƒ“’Ó3Rƒ“rÓ""“C’Ó#"“#bÓcb“3’ÓCR"““‚Ór“cb“sb’"sÓR3"Ó3"S‚Óc2¢"ÒÂ&WVCD&'3¢²…öÖ–ã¢Â…öÖƒ¢3sBÂ•öÖ–ã¢Ó3BÂ•öÖƒ¢3BÂ†¢c‚Âó¢&Òs‚Ó#cb"“"Ó#S‚ƒ"Ó#cbƒ‚Ó#cB"BÓ#C“‚Ó#SrÓ#Cb"c3‚r#ƒ’Ó#RCcrÓB"ƒs2#ssbcs“2#b"“r33rƒ“B#ƒR“b3R"ƒƒrC“3SBƒ“r3s’"ƒS"C3‚ƒsrC#bƒcrC3‚"ƒBC#ƒC"C3‚ƒ#’C3""3RÓ32S“"#c"3cb""Ó#“"ÓcC‚ÓƒB"ÓCBBÓ#‚Ó3R"BÓcÓC‚ÓSB"c2Ó#SRrÓ“bCRÓ##2"s‚Ó#cbc‚Ó#c"s"Ó#cb¢Ò#“C‚"3#R##23"C‚3‚s"332#Sb3#‚#3R33#Cb"#cB3c2333R#“‚33b"#C"3s2#SR3c’#C‚3s2"##3Cr#3"3s2##R3cB"#"#ƒ‚#b3#r#23R"“#S"“2#sR“#c""##"#“#3"#"#R"#“C‚#cBs#s’C‚¢ÒƒRÓ3cr"ƒ#’Ó3S’ƒ’Ó3crƒ#BÓ3cB"ƒSÓ3C2ƒ3RÓ3S2ƒCBÓ3Cr"3sRb#rÓ##‚#RÓrÂcs"cCB#3Rc3"ƒBcC2#2"c#b3c3’#S2c3B#sb"S“33rcB3#RcB33r"SS3#Sƒ33rScr33"ƒs2Ó3R3#’c2"sC’Ó##"ƒ#’ÓcsƒRÓƒB"s3rÓ#CRsC"Ó#3s3rÓ#3‚"sC"Ó#cs3rÓ#C’s3’Ó#SR"ƒ"Ó3SrsSRÓ#“rsƒ"Ó3#R"ƒRÓ3crƒRÓ3c2ƒ’Ó3cr¢Ò3“bÓ3c"C‚Ó3SbCÓ3cC2Ó3S’"c’Ó##2CsÓ3rSC2Ó#c’"ƒ“bÓ’sbÓSbs“RÓƒ"cBSB“ƒR3rsB“b"#B##2ƒ’s#ƒr"sb3##B#S2#R#“""S’33c’3#rcR33"CR3#BSR33S3#‚"C‚#S‚23"ƒ#s‚"3SrÓ#"ƒ’rS“‚ÓcR"332Ó#3‚3CÓ#"332Ó##2"33‚Ó#c"332Ó#CR33BÓ#S2"3ƒBÓ3S3SÓ#“B3s"Ó3‚"3“bÓ3c3ƒbÓ3SB3“Ó3c¢Òc"ÓC3‚"sBÓC32cbÓC3‚c’ÓC3b"3sBÓ3#3rÓ3ƒB3’Ó3Cb"ccÓ“bCsÓ#32ScÓS‚"“3sbsSÓ3’ƒC’"“s’Cr“SB“"“sr’"“C2#C2“c‚sr“s#b"“#B#S2“3R#S“3#S2"“#C‚“##S2“R#S""ƒBƒƒs‚##RƒC‚#""#2Ó#s’SsRC3cBÓC"“’Ó3RbÓ#ƒ’“’Ó3"2Ó33‚“’Ó3#Ó33"C’ÓC#bRÓ3s3‚Ó3“b"c"ÓC3‚SÓC3"SbÓC3‚¢ÒƒsRÓ#“R"ƒƒ"Ó#“ƒs‚Ó#“Rƒs’Ó#“B"“3BÓƒ’“BÓ#S‚“#Ó##2"ƒs"Ó“b“#RÓCr“Ó#"ƒCÓs‚ƒS‚ÓƒBƒC‚Ós‚"ƒ"Ó’ƒ3Ós‚ƒ#2Óƒ‚ÂssrÓs2"ssÓ“’ss2ÓƒssÓ“"sƒbÓ#3ssÓ#ssBÓ##"ƒc"Ó#ƒ’ƒ’Ó#S2ƒ3rÓ#c’"ƒsRÓ#“RƒcRÓ#“"ƒsÓ#“R¢"ÒÂ&WVD&%6Æ6ƒ¢²…öÖ–ã¢Â…öÖƒ¢c3Â•öÖ–ã¢Ó##RÂ•öÖƒ¢#cRÂ†¢C“Âó¢&Òs‚Ó3#B"“"Ó3Bƒ"Ó3#Rƒ‚Ó3#"BÓ#“‚“bÓ3rrÓ3""c3‚C’#ƒ’Óƒ2CcrÓs""ƒs2#RsbBs“"c"“r#s’ƒ“B##’“b#C‚"ƒƒr3CB“#“‚ƒ“r3#"ƒS"3ƒ"ƒsr3c’ƒcr3ƒ"ƒB3c2ƒC"3ƒ2ƒ#’3sb"3RÓ“c2“"3cBSR""Ósr“"Ó‚CRÓ3r"Ó#"BÓƒbÓ“""BÓ#rÓ#bÓ#""c2Ó3"rÓ#S2C"Ó#ƒB"s‚Ó3#Bc‚Ó3‚s"Ó3#2¢"ÒÂ77–ÔF–Ö–æ—6†VC¢²…öÖ–ã¢Â…öÖƒ¢SbÂ•öÖ–ã¢Â•öÖƒ¢SÂ†¢SÂó¢&Ò3“r"s#’#cRSsbÓs#’“R"s3crs#’#“rs#233"Cs"cscc‚C“‚SƒbS“R"3Rs#C#2s3s"s#"#S2s2#“Rs##sRs’"3"SBCBcƒrsRcR"3sB"Cc‚C#"#r#S332’#“""CrS"“b“"S2"3“r##2S"3rB¢Ò3C“R"3"3B#32ƒB#"#b"3#BSƒ’CRC3‚#S3’"CRc3cc23ƒ’c"SCBSRCc’cSRSsb"S“3“"ScBCsSƒ2C3""S“b3C2S“23sBS“b3S’"3C“RS“b#CƒR“b¢"ÒÂ77–Ô†ÆdF–Ö–æ—6†VC¢²…öÖ–ã¢Ó3"Â…öÖƒ¢C“bÂ•öÖ–ã¢Ó32Â•öÖƒ¢C“"Â†¢S#RÂó¢&ÒÓ#’ÓC‚"Ó3bÓ’ÓC‚Ó’ÓC"rÓ#rÓ3""Ó#B"3B“BSb’“RSb"3s"#rC2#ƒ""CSR23“rC#bB"csr#S‚SSbCRcsC"cs‚#ƒ’csr#c‚cs‚#s‚"S“2S3’cs‚3ƒcSBCcr"S“"SCS“2SCS“"SCÂcƒBc3""s2cs‚scCrsccR"sBc“sBcƒBsBcƒ‚"srsBsBc“‚ss"c“s‚ssrc“bs‚"ccc“cƒs‚cssÂSS"SƒR"Cs‚c3BS3cbSrc#B"3ccƒBC3‚cC‚3“rcc"3s23Cc“r3#s2"##bcsr#sRs2#Sc“2"#rCC’Cc‚s"SC2"3#B’CÓB3s"ƒ‚#‚Ó#C23sr"Ó3ÓrC2ƒbCb"ÓCbÓ32Ó3RÓbÓCbÓ#B"ÓC"ÓC"ÓCbÓ3bÓCRÓ3’"Ó#’ÓC‚Ó3rÓCbÓ32ÓC‚¢ÒCs’"##S#‚####R"#‚#“r##cR#B#ƒ"3SSsRc2C##C‚SR"3srSƒ"3S’Ss’3c’Sƒ"SS3bC#"SƒbCc‚Scr"Cs’3ƒ"Cb#c#“‚¢Ò#ƒR"s’3r#CR#br"#c‚ƒ’Cr#SrÂS3rCƒr"SCrCSRSCCsrSCBCcr"SSb3sSS"C#bSSb3“r"C#’SBSSb#sBS2#r"#ƒR3ƒB#"33bR¢"ÒÂ77–ÔVvÖVçFVC¢²…öÖ–ã¢Â…öÖƒ¢S3Â•öÖ–ã¢Â•öÖƒ¢S3’Â†¢S3’Âó¢&Ò3ƒ"3“2B3ƒBB3“’"3“rCb3“r#B3“r3bÂ3“r332"s3b3#rS33c#B33"sc23C2sSR3#rsc2332"sSR3csc23C‚sc3SB"c3RC3s#bC"cƒ‚C3Â3“C3Â3“CƒR"3ƒbcb3“"S#b3ƒbScb"3“"ccB3ƒbc#R3ƒrcCR"3“Rc“3“2cs"3“Rcƒ"3sbsS23“Rs3ƒ’s3B"3Srssb3s"sc"3c’ssb"3SssR3SBssb3S2ssb"3#rsC33rsc’3#rsS’"3#rc#3#‚s3#rcc"33C3‚3#‚SS’3#‚C“‚Â#’C3‚"BC3#C3‚rCC""C22C#RC’"r3“’C‚C2"333‚CR3c’ƒR3C"3333B“’33b#cR33B"332c2332#sb332##"3cb2332’3C‚c2"3ƒ3crr3sBB¢"ÒÂ77–ÔÖ¦÷%6WfVçFƒ¢²…öÖ–ã¢Â…öÖƒ¢S“2Â•öÖ–ã¢Â•öÖƒ¢Sc’Â†¢Sc’Âó¢&Ò#BÂC“r#r"ƒ’ScR3RsC2"ƒSB“‚ƒCrS"ƒSRc2"ƒ"#ƒCR#‚ƒ3Rcb"ScBSƒRs33#‚cC‚CSb"C3RsƒbS#cS"Cƒs#"3“rƒ’C’ƒ’C‚ƒ’"3c’s“"3ƒrƒ’3s’ƒ"rs2#C‚SƒR#‚3s’"S2cbS‚"r#‚C223R"ƒ’3ƒbcRS"’“R"¢Òc2Cr"S2S2S‚CrSbC‚"cBs’Crc2S‚s"C#bcCB#S33B33‚Cƒ‚"CC"ccC3"cSRC3bcc"CS‚cCRCCbccCS"cSR"s#r##SCrS2c3b3c"s3b#"s3"#2s3b#b"sB“s3b“bs3“""s’C‚S3rsr3S’c2"c2CrsBSc‚Cr¢"ÒÂ77–ÔÖ–æ÷#¢²…öÖ–ã¢Â…öÖƒ¢Cƒ"Â•öÖ–ã¢“2Â•öÖƒ¢#cRÂ†¢s"Âó¢&Òc‚#s‚"“r#s’sr#s‚ƒr#s‚"C3#“"#sR#ƒr3S2#ƒ‚ÂC3#“"cc3"S‚#“RSƒR3"c“23cs"3Bcƒ‚3"csB3Cbc“r3#BcƒR33‚"ScB3ƒ"cC3cbcb3ƒBÂ#r3c"3Crr3c3cb"’3B33223#"c‚#s‚cb#“R#s‚¢"ÒÂ77–Õ&Vç4ÆVgEFÆÃ¢²…öÖ–ã¢Â…öÖƒ¢ƒRÂ•öÖ–ã¢Â•öÖƒ¢3BÂ†¢3BÂó¢&Ò#R"##br##2##2"##’3r##’#B##’3""##ƒ##’S"##Rcb"cr#2#b#Bƒc"ƒbcb#B33‚ƒ’CsB"ƒ"scRƒRccRƒ"sb"“ƒƒbƒ"ƒRƒBƒCR"#CR3’#3‚sƒB"#cb3“r#S’3Cb#cb3s"#S’CC2#cbC#cBC#r"##bCƒ’#S2Cc2#C‚Cƒ’"“2CSB#"Cƒ’#2Ccr"B#“"S‚CBC3Cb"ƒbC3‚“s‚"2s#ss’sS"csrsrc“2"3bC‚S“2bSB"CB“bc"3r“R“’"“b"S‚cbs’3’"#"#r#B¢"ÒÂ77–Õ&Vç5&–v‡EFÆÃ¢²…öÖ–ã¢ÓCÂ…öÖƒ¢ƒ’Â•öÖ–ã¢Â•öÖƒ¢S‚Â†¢S‚Âó¢&Ò3"c2BC"Ó2SRb"#"“’ƒbC‚c‚"ƒ’#S‚CRS2cb#B"#sccr#3’3s’#c‚S2"#CbƒS"#sRs‚#csƒ"C“R“rsr#‚#“R"ÓBS#BBSRS#B"ÓbS#"ÓBS#BÓbS#B"ÓCbCƒ’Ó32S#ÓC2S2"ÓS‚CrÓS2CcBÓS‚CC"Ó3b33RÓS‚3“ÓS"3cB"c‚3‚#s3R#B"c2ƒƒ2‚Sb3r“c’"#bcc‚ƒBƒB#sC""#rc3#rcSR#rcC""cbC#b#rSc“"C“""CbC2333##‚"’#’’’rc’"3#’#B2¢"ÒÂ77–Ô'&6¶WDÆVgEFÆÃ¢²…öÖ–ã¢Â…öÖƒ¢3#‚Â•öÖ–ã¢"Â•öÖƒ¢ƒrÂ†¢ƒRÂó¢&Òc‚2"sbBs2s22"ƒb2""S2"#C2#B2##"2Â#ƒr2"3s’r3r23C‚2"Cs"#C3R#BCs"c’"CcrSbCs"3"Cc’CB"CCbsBCc"c‚CSbsBÂC3’sB"3#rcbC"cr3cBcb"#cRcr3rcb#ƒRcrÂ#’cr"ƒrCsR“’#c’ƒ’3s""cb“ƒRƒbcCRƒrƒRÂ3sr""CR3ƒ’"C""CSb#rC3"CC‚R"Cs"“bCcrC‚Cs"s2"CcBCbCs"2Cc’3"C3’c"CS’cCS"c""C#’3RSs23’"“2r#‚#"’cB3r"2“sR““2“ƒ"3cs#2ƒs23ss""#’c‚3cC’#’c#‚Â#’Sc2"Sbƒ‚#’CRC’#Cb"S2#"SRcbSRC2"c‚2S2"Sb2¢"ÒÂ77–Ô'&6¶WE&–v‡EFÆÃ¢²…öÖ–ã¢Â…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢ƒ#’Â†¢ƒ#’Âó¢&Òr"3s"#’#2Ó2#ƒr#Â3s2#’"Cb3"3ƒ233“R3"C3bcC#‚32C3"C2"CC’C3’sbCC“""C32#CCCC3bs"C’c“bC#"3cbC’S3"CbƒƒrC’sc2Cbƒ3"CR“#Cbƒ“’CR“ÂCRb"C"3RCRbCR#bÂC"CR"3s2ƒ’C2sC‚“""3#ƒ’3Sbƒ’33‚ƒ’Â#Rƒ’Â#R“BÂSb“B"bS2#r“Rƒr"cB2#2B“2"#"C2SbC2"ƒBCBC"CBc2CB"#cB3‚CBCB#2C"#cR“S‚#cB#cR“ƒR"#c"ƒCR#cR“##cBƒƒ2"#S’s#S’ƒ#S’sSR"#s’#C2#S’SSB#s3“’"#ƒRs#ƒ#’#ƒB“B"“RS##"cS‚Sb"#’ƒ#rCr#rCrÂ#’s2"R3232¢"ÒÂ77–Õ&Vç4ÆVgEfW'•FÆÃ¢²…öÖ–ã¢Â…öÖƒ¢bÂ•öÖ–ã¢Â•öÖƒ¢“3BÂ†¢“3BÂó¢&Ò#‚"Crr3rCB’"cr"cCRcrs2"S‚SBcr#cB3r"r3rC#B3#Sb"c2c“‚ƒBC3RsScr"c"sƒ‚c"s#’c"sSr"c’“bc"ƒ#’c2ƒs2"’s"ƒ“Bƒr"3"3#‚##3r#c’"#B3CR33#’3B3C""“b33"B3Cb"3C"s#c’ƒ"32sR#“""3’BS’#BC‚S’"sC"’“ƒ‚ƒs"SS’2cƒ‚bc#B"S‚##bbCCb3233b""#s2Sr“Bƒ’"#‚R2‚¢"ÒÂ77–Õ&Vç5&–v‡EfW'•FÆÃ¢²…öÖ–ã¢Ó#Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢’Â†¢’Âó¢&ÒÓ2"##"’ÓB""3bSb#b323"CR"“’#sBS‚#‚ƒB“’"csƒ‚3RC3’c2cR"#"ƒcB“"CRCr"SC3‚#crƒb3S"3bCS2C‚C3’CbCS2Â3RCS2Â3CS2"rC#2rCC’rCC"#r#ƒr’3sr33"“b“c2sƒBƒRsB"Rƒ‚"“BRƒcr"“c#BRsS2“’cƒ‚"ÓB#2s"CƒBC‚3CB"Ó#’Ó’sBÓ#’3‚"Ób#rÓ#’sbÓ#BS""Ó2Ó2rÓB2¢"ÒÂ77–ÔF–vöæÄ'&ævVÖVçE6Æ6ƒ¢²…öÖ–ã¢Â…öÖƒ¢““Â•öÖ–ã¢Ó#rÂ•öÖƒ¢#‚Â†¢SBÂó¢&ÒBÓ3r"S‚Ó’3RÓCRCbÓ#""3“"332sR#s’#rÂscRs"3s"3#’“c‚“bc‚#R"C#BC3’C23S’Cr3“r"C#bCSrC#BCCBC#bCS"CbCsrC#bCcbC#2CsR"3sBCc"CCƒR3ƒRCs2"ƒ#c’3’3“r#Cb33"s3bƒ33#"ƒƒB“s’"3SbCS"c’sBCƒRSsb"3"3"#Cb3CrC2#3b"Sr’ƒB"b’Ó3r2#2"BÓ3rÓ’Ó3"¢"ÒÂ66–FVçFÄæ'&÷u&WfW'6VDfÆC¢²…öÖ–ã¢Â…öÖƒ¢#‚Â•öÖ–ã¢Ó#3Â•öÖƒ¢CC’Â†¢cƒÂó¢&Ò#s"Ó332"#ƒBÓ3##s‚Ó332#ƒÓ3#‚"3ÓsB#“rÓ#s"3Ó##""#sR“#“‚ÓS"#s’c‚"#c‚CCR#s"#sR#c‚3cÂ#c‚C“"#cBc"#c’S3#cRSs""#3bcCr#cBc3"#S"cCRÂ#3RcCr"#rc‚##cCr##c#‚"#rS#b#Sƒ‚#rSSb"#C3"#rC“B#CcB"#b#c‚#23sr#R3#2Â#b#3Â#R#3""SB#Sb“B#CsB#S"#cB3‚#c#B#cB"2S2S#cB##2"“B3"B"“BÓ#sbÓc2c‚Óƒb"#SRÓ3#2#RÓ#“#3bÓ3r"#s"Ó332#c"Ó33#c‚Ó332¢Ò#32Ó3‚"s3c‚Ó“"RÓCR"c2S’cRC"c2S"“b“Rc"sRs2ƒb"3"‚“’#""#Rsbc"ƒrƒ‚Â##s2"##RÓ#"##C"##""#32Ó3‚##’Óc"#3Ó¢"ÒÂ66–FVçFÄæ'&÷u&WfW'6VDfÆDæDfÆC¢²…öÖ–ã¢Â…öÖƒ¢33RÂ•öÖ–ã¢Ó#3Â•öÖƒ¢CC’Â†¢cƒÂó¢&ÒSC“"C‚c"SS3SSs""3"cCrC‚c3"CcCR"#"c‚#BcCr#Bc#‚"rS#b‚Sƒ‚rSSb"‚C3"rC“B‚CcB"##c‚#3sr#3#2Â##3""ƒb#Sb’#C“‚#S"c"#cBs‚#cc’#cB"S2#’#cBb##2"“B3"B"’Ó#sbÓc23rÓƒb"CBÓ3#2#Ó#“3"Ó3r"S2Ó332CrÓ33SÓ332"cÓ3#SrÓ332S‚Ó3#‚"c‚ÓsBcrÓ#s"c‚Ó##""SB“c‚ÓS"Src‚"SCCRS2#sRS3c¢ÒCƒS2"3s"#cBCs"##2C3"#cB"3#‚#Sb3S’#cB3CB#c"#c‚#3"3‚#S#ƒ‚#CÂ#cb#3Â#cb#c‚"#s"C3"#cb3#2#c’3sr"#sRS#b#s"CcB#sRC“B"#cRc‚#sRSSb#s"Sƒ‚"#C‚cCr#c"c#‚#c"cCrÂ#CbcCr"#’c"#3cCR#’c3""#RC“#rSs"#2S3Â#RCCR"#r“#R3c##sR"ƒ2ÓsB#2c‚ƒ2ÓS""“’Ó3#ƒ2Ó##"ƒbÓ#s""#Ó332#"Ó3#‚#BÓ332"##‚Ó3#2#RÓ332##Ó33"#ƒ‚Ó#sb#CbÓ3r#c‚Ó#“"Cƒ"“BCRÓƒbCƒ"Óc2"CƒS2Cƒ"BCƒ"3"¢ÒC3"3bS’3bC"3bS"SR“R3RsRC"ƒb"s2"c“’c‚""#sbƒ’"Rƒ‚Â#Bs2"#rÓ#"#BC"#RÂ3Ó3‚"C3“RÓ“"cÓC2¢ÒC’S’"C"3C’SC‚C""#C’Ó3‚3sBÓC23BÓ“""#S‚Ó#"#S"Ó#S2Óc""#c"s2#c#c"C"Â#c‚sb"3S2"#“Rƒ‚3#2""3ƒb“R3c2"3sB“’"C’S’C’ƒbC#sR¢"ÒÂ66–FVçFÅv–Ç6öåÇW3¢²…öÖ–ã¢Â…öÖƒ¢#“‚Â•öÖ–ã¢Ó#‚Â•öÖƒ¢#‚Â†¢C3bÂó¢&Ò#3"Ó3B"#3bÓ3#3bÓ3#3bÓ3RÂ#3bÓ#“R"#C2ÓS"#3’Ó#2#C"Ó3"Â3c’c""C#’#C2C#RCr"Cb#C2C#’#bC#‚#3b"3ƒ2##RCb#S3“2#3"Â3sr##"#Cb“‚33bsr#“3‚"#C’#C"#C‚CR#Cb“2"##R3B#S#cR#C"#ƒr"#’3B##3‚#R3B"#B3"#r3B#b3""“b#“"“b3“b3"“2ƒB“B#Sb“B##"ƒrC‚“"C““B"CbÓs"Cr“BÓ3""Óc22Ó“‚Ó#r"ÓƒrÓsÓs’"Ó#3RBÓ#2bÓ#’"#Ó#SR"Ó#C"BÓ#S"3bÓ#CR#bÓ#S’3Ó#C’"ƒÓ’ƒRÓ#3"ÓSB"sbÓ#S‚ƒÓS‚sbÓ#’"#3"Ó3BsbÓ#“‚ƒbÓ3r¢"ÒÂ66–FVçFÅv–Ç6öäÖ–çW3¢²…öÖ–ã¢Â…öÖƒ¢#ƒBÂ•öÖ–ã¢Óc2Â•öÖƒ¢c2Â†¢3#bÂó¢&Ò3ƒbÓ#3""C’Óc2CRÓ##"C‚Óƒ"3ƒ"Óc’CÓ#C‚Óƒ’"3"##‚#cB3C‚"r#3R#b#32#"#3R"2#’’#3R2##‚"Sr2“’s’"#’c’#Rb“R"3#2Ó“BRÓ#’##"Ó"3sBÓ#3R33‚Ó#b3S2Ó#3R"3ƒbÓ#3"3srÓ#3R3ƒ"Ó#32¢"ÒÒÂföçDfÖ–Ç“¢%WFÇVÖ"Â&W6öÇWF–öã¢S2ÂvVæW&FVDöã¢###"Ó"Ó…C“£s£Sãƒu¢"ÒÂÆ’Ò²77–ÔF–Ö–æ—6†VC¢²ÆVgE6–FT&V&–æs¢Ó“RÂGfæ6Uv–GFƒ¢SbÂ”öfg6WC¢ÒÂ77–Ô†ÆdF–Ö–æ—6†VC¢²ÆVgE6–FT&V&–æs¢Ó3"ÂGfæ6Uv–GFƒ¢SbÂ”öfg6WC¢ÒÂ77–ÔVvÖVçFVC¢²ÆVgE6–FT&V&–æs¢Ó#RÂGfæ6Uv–GFƒ¢S3Â”öfg6WC¢ÒÂ77–Õ&Vç4ÆVgEFÆÃ¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢SRÂ”öfg6WC¢SÒÂ77–Õ&Vç5&–v‡EFÆÃ¢²ÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢ƒ’Â”öfg6WC¢SÒÂ77–Ô'&6¶WDÆVgEFÆÃ¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3#‚Â”öfg6WC¢ÒÂ77–Ô'&6¶WE&–v‡EFÆÃ¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢cÂ”öfg6WC¢ÒÂ77–Õ&Vç4ÆVgEfW'•FÆÃ¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#Â”öfg6WC¢#SÒÂ77–Õ&Vç5&–v‡EfW'•FÆÃ¢²ÆVgE6–FT&V&–æs¢ÓÂGfæ6Uv–GFƒ¢Â”öfg6WC¢#SÒÂ77–ÔF–vöæÄ'&ævVÖVçE6Æ6ƒ¢²ÆVgE6–FT&V&–æs¢ÓÂGfæ6Uv–GFƒ¢““Â”öfg6WC¢ÒÂ77–ÔÖ–æ÷#¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Cƒ"Â”öfg6WC¢ÒÂ77–ÔÖ¦÷%6WfVçFƒ¢²ÆVgE6–FT&V&–æs¢Â”öfg6WC¢ÂGfæ6Uv–GFƒ¢cÒÂ66–FVçFÅ6†'¢²ÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢C#RÂ”öfg6WC¢ÓC#"ÒÂ66–FVçFÄfÆC¢²ÆVgE6–FT&V&–æs¢ÓÂGfæ6Uv–GFƒ¢##‚Â”öfg6WC¢Ó#ƒBÒÓ°¢6öç7Bv’Ò²76–æs¢SÂvÇ—‡3¢²"#¢²…öÖ–ã¢Â…öÖƒ¢#SÂ•öÖ–ã¢Â•öÖƒ¢SÂ†¢SÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#SÒÂ¢²…öÖ–ã¢32Â…öÖƒ¢S3BÂ•öÖ–ã¢Ó2Â•öÖƒ¢sSÂ†¢scBÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢SsÒÂ¢²…öÖ–ã¢C‚Â…öÖƒ¢#3RÂ•öÖ–ã¢ÓrÂ•öÖƒ¢s3BÂ†¢sSÂÆVgE6–FT&V&–æs¢C‚ÂGfæ6Uv–GFƒ¢#ƒbÒÂ#¢²…öÖ–ã¢SbÂ…öÖƒ¢SsÂ•öÖ–ã¢Ó’Â•öÖƒ¢sCÂ†¢scÂÆVgE6–FT&V&–æs¢SbÂGfæ6Uv–GFƒ¢c#bÒÂ3¢²…öÖ–ã¢SÂ…öÖƒ¢S#‚Â•öÖ–ã¢ÓrÂ•öÖƒ¢s3Â†¢s3‚ÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢Sƒ’ÒÂC¢²…öÖ–ã¢3‚Â…öÖƒ¢ScBÂ•öÖ–ã¢Ó2Â•öÖƒ¢sC2Â†¢sSbÂÆVgE6–FT&V&–æs¢3‚ÂGfæ6Uv–GFƒ¢cBÒÂS¢²…öÖ–ã¢C"Â…öÖƒ¢cÂ•öÖ–ã¢Ó3BÂ•öÖƒ¢sC2Â†¢ssrÂÆVgE6–FT&V&–æs¢C"ÂGfæ6Uv–GFƒ¢cC‚ÒÂc¢²…öÖ–ã¢CrÂ…öÖƒ¢cbÂ•öÖ–ã¢ÓbÂ•öÖƒ¢sC2Â†¢sS’ÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢ccrÒÂs¢²…öÖ–ã¢CrÂ…öÖƒ¢ScrÂ•öÖ–ã¢RÂ•öÖƒ¢s3’Â†¢s3BÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢cRÒÂƒ¢²…öÖ–ã¢CÂ…öÖƒ¢SCÂ•öÖ–ã¢ÓRÂ•öÖƒ¢sS"Â†¢scrÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢SƒRÒÂ“¢²…öÖ–ã¢CÂ…öÖƒ¢S3rÂ•öÖ–ã¢ÓS"Â•öÖƒ¢s3bÂ†¢sƒ‚ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢S“"ÒÂ"#¢²…öÖ–ã¢C’Â…öÖƒ¢ƒÂ•öÖ–ã¢ÓrÂ•öÖƒ¢scÂ†¢sc‚ÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢#3ÒÂr"s¢²…öÖ–ã¢3’Â…öÖƒ¢3BÂ•öÖ–ã¢S“bÂ•öÖƒ¢ƒBÂ†¢#‚ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢3S2ÒÂ"2#¢²…öÖ–ã¢32Â…öÖƒ¢S“’Â•öÖ–ã¢Ó‚Â•öÖƒ¢scRÂ†¢ss2ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢cC‚ÒÂC¢²…öÖ–ã¢S2Â…öÖƒ¢C“RÂ•öÖ–ã¢ÓÂ•öÖƒ¢ƒ#2Â†¢“3BÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢ScÒÂ"R#¢²…öÖ–ã¢3RÂ…öÖƒ¢cSbÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢ƒ‚Â†¢“3bÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢sÒÂ"b#¢²…öÖ–ã¢S2Â…öÖƒ¢CCÂ•öÖ–ã¢Ó2Â•öÖƒ¢sS2Â†¢sSbÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢SÒÂ"r#¢²…öÖ–ã¢C2Â…öÖƒ¢cÂ•öÖ–ã¢S“Â•öÖƒ¢ƒÂ†¢##ÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢#rÒÂ"‚#¢²…öÖ–ã¢CÂ…öÖƒ¢3Â•öÖ–ã¢Ó3bÂ•öÖƒ¢ƒCRÂ†¢ƒƒÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢3‚ÒÂ"’#¢²…öÖ–ã¢Ó‚Â…öÖƒ¢#SrÂ•öÖ–ã¢Ó#Â•öÖƒ¢ƒS"Â†¢ƒs2ÂÆVgE6–FT&V&–æs¢Ó‚ÂGfæ6Uv–GFƒ¢#ƒÒÂ"¢#¢²…öÖ–ã¢S’Â…öÖƒ¢S3’Â•öÖ–ã¢sRÂ•öÖƒ¢Sƒ’Â†¢CBÂÆVgE6–FT&V&–æs¢S’ÂGfæ6Uv–GFƒ¢cÒÂ"²#¢²…öÖ–ã¢32Â…öÖƒ¢3cÂ•öÖ–ã¢ƒÂ•öÖƒ¢SƒrÂ†¢CrÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢CÒÂ"Â#¢²…öÖ–ã¢RÂ…öÖƒ¢sbÂ•öÖ–ã¢Ó#’Â•öÖƒ¢“"Â†¢##ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢#RÒÂ"Ò#¢²…öÖ–ã¢CÂ…öÖƒ¢3ƒÂ•öÖ–ã¢3rÂ•öÖƒ¢CS"Â†¢3RÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢C#"ÒÂ"â#¢²…öÖ–ã¢C‚Â…öÖƒ¢ƒRÂ•öÖ–ã¢ÓSbÂ•öÖƒ¢ƒBÂ†¢CÂÆVgE6–FT&V&–æs¢C‚ÂGfæ6Uv–GFƒ¢##rÒÂ"ò#¢²…öÖ–ã¢ÓS‚Â…öÖƒ¢cSBÂ•öÖ–ã¢Ó#"Â•öÖƒ¢ƒCBÂ†¢“cbÂÆVgE6–FT&V&–æs¢ÓS‚ÂGfæ6Uv–GFƒ¢c#bÒÂ#¢#¢²…öÖ–ã¢cRÂ…öÖƒ¢##RÂ•öÖ–ã¢“rÂ•öÖƒ¢S3bÂ†¢C3’ÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢3"ÒÂ#²#¢²…öÖ–ã¢2Â…öÖƒ¢#“RÂ•öÖ–ã¢Ó3’Â•öÖƒ¢S3bÂ†¢csRÂÆVgE6–FT&V&–æs¢2ÂGfæ6Uv–GFƒ¢33BÒÂ#Â#¢²…öÖ–ã¢#‚Â…öÖƒ¢C3‚Â•öÖ–ã¢ÓÂ•öÖƒ¢crÂ†¢c‚ÂÆVgE6–FT&V&–æs¢#‚ÂGfæ6Uv–GFƒ¢CsRÒÂ#Ò#¢²…öÖ–ã¢CÂ…öÖƒ¢3ƒ2Â•öÖ–ã¢“’ã“S“ƒcCƒS##ƒ’Â•öÖƒ¢SCÂ†¢3CãC3S“CssÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢C#"ÒÂ#â#¢²…öÖ–ã¢3RÂ…öÖƒ¢C#Â•öÖ–ã¢#‚Â•öÖƒ¢c3"Â†¢cBÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢CcbÒÂ#ò#¢²…öÖ–ã¢CRÂ…öÖƒ¢SC‚Â•öÖ–ã¢ÓrÂ•öÖƒ¢scrÂ†¢sƒBÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢S“"ÒÂ$#¢²…öÖ–ã¢SÂ…öÖƒ¢s3Â•öÖ–ã¢Ós‚Â•öÖƒ¢sS2Â†¢ƒ3ÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢sƒÒÂ¢²…öÖ–ã¢3rÂ…öÖƒ¢SSBÂ•öÖ–ã¢ÓBÂ•öÖƒ¢sCbÂ†¢sSÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢crÒÂ#¢²…öÖ–ã¢3rÂ…öÖƒ¢S3"Â•öÖ–ã¢2Â•öÖƒ¢sƒ2Â†¢sƒÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢Ss’ÒÂ3¢²…öÖ–ã¢3rÂ…öÖƒ¢Sƒ2Â•öÖ–ã¢Ó2Â•öÖƒ¢ssRÂ†¢ss‚ÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢c#2ÒÂC¢²…öÖ–ã¢SÂ…öÖƒ¢S3Â•öÖ–ã¢ÓRÂ•öÖƒ¢sC’Â†¢scBÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢Ss’ÒÂS¢²…öÖ–ã¢CRÂ…öÖƒ¢S3Â•öÖ–ã¢ÓÂ•öÖƒ¢sC2Â†¢sCBÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢SƒRÒÂc¢²…öÖ–ã¢CRÂ…öÖƒ¢CS’Â•öÖ–ã¢#2Â•öÖƒ¢s#rÂ†¢sBÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢SÒÂs¢²…öÖ–ã¢3Â…öÖƒ¢SsrÂ•öÖ–ã¢Ó‚Â•öÖƒ¢s32Â†¢sCÂÆVgE6–FT&V&–æs¢3ÂGfæ6Uv–GFƒ¢cÒÂƒ¢²…öÖ–ã¢3rÂ…öÖƒ¢C“2Â•öÖ–ã¢Ó#"Â•öÖƒ¢sS‚Â†¢sƒÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢S3RÒÂ“¢²…öÖ–ã¢CrÂ…öÖƒ¢SÂ•öÖ–ã¢Ó2Â•öÖƒ¢s3Â†¢s3BÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢SCÒÂ£¢²…öÖ–ã¢32Â…öÖƒ¢S3Â•öÖ–ã¢Ó#2Â•öÖƒ¢s#RÂ†¢sC‚ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢Ss2ÒÂ³¢²…öÖ–ã¢C2Â…öÖƒ¢SRÂ•öÖ–ã¢ÓÂ•öÖƒ¢sCÂ†¢sSÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢ScÒÂÃ¢²…öÖ–ã¢C’Â…öÖƒ¢CSrÂ•öÖ–ã¢Ó"Â•öÖƒ¢sCbÂ†¢sC‚ÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢SÒÂÓ¢²…öÖ–ã¢3RÂ…öÖƒ¢c“’Â•öÖ–ã¢Â•öÖƒ¢sCBÂ†¢sC2ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢sC2ÒÂã¢²…öÖ–ã¢3BÂ…öÖƒ¢S32Â•öÖ–ã¢ÓrÂ•öÖƒ¢scÂ†¢ss‚ÂÆVgE6–FT&V&–æs¢3BÂGfæ6Uv–GFƒ¢Ss’ÒÂó¢²…öÖ–ã¢CÂ…öÖƒ¢c‚Â•öÖ–ã¢ÓRÂ•öÖƒ¢s3RÂ†¢sCÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢ccrÒÂ¢²…öÖ–ã¢S2Â…öÖƒ¢CSÂ•öÖ–ã¢Ó‚Â•öÖƒ¢s3RÂ†¢sS2ÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢C“rÒÂ¢²…öÖ–ã¢CÂ…öÖƒ¢S“’Â•öÖ–ã¢ÓcrÂ•öÖƒ¢sCBÂ†¢ƒÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢cC‚ÒÂ#¢²…öÖ–ã¢3’Â…öÖƒ¢CƒrÂ•öÖ–ã¢bÂ•öÖƒ¢s3RÂ†¢s’ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢S3RÒÂ3¢²…öÖ–ã¢3RÂ…öÖƒ¢SS"Â•öÖ–ã¢ÓCrÂ•öÖƒ¢s‚Â†¢sSRÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢cBÒÂC¢²…öÖ–ã¢#bÂ…öÖƒ¢cSbÂ•öÖ–ã¢Ó2Â•öÖƒ¢s‚Â†¢s3ÂÆVgE6–FT&V&–æs¢#bÂGfæ6Uv–GFƒ¢sRÒÂS¢²…öÖ–ã¢CÂ…öÖƒ¢S‚Â•öÖ–ã¢Ó#Â•öÖƒ¢sC‚Â†¢sc‚ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢ScrÒÂc¢²…öÖ–ã¢CrÂ…öÖƒ¢S’Â•öÖ–ã¢Ó#bÂ•öÖƒ¢sCBÂ†¢ssÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢ScrÒÂs¢²…öÖ–ã¢CBÂ…öÖƒ¢sƒ’Â•öÖ–ã¢Ó3RÂ•öÖƒ¢s#Â†¢sSRÂÆVgE6–FT&V&–æs¢CBÂGfæ6Uv–GFƒ¢ƒ32ÒÂƒ¢²…öÖ–ã¢c2Â…öÖƒ¢c3RÂ•öÖ–ã¢ÓÂ•öÖƒ¢sCRÂ†¢sSRÂÆVgE6–FT&V&–æs¢c2ÂGfæ6Uv–GFƒ¢cƒÒÂ“¢²…öÖ–ã¢C2Â…öÖƒ¢S2Â•öÖ–ã¢Ó#Â•öÖƒ¢s3BÂ†¢sSRÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢SCÒÂ£¢²…öÖ–ã¢C"Â…öÖƒ¢SƒBÂ•öÖ–ã¢ÓÂ•öÖƒ¢s3’Â†¢sC’ÂÆVgE6–FT&V&–æs¢C"ÂGfæ6Uv–GFƒ¢c#’ÒÂ%²#¢²…öÖ–ã¢CbÂ…öÖƒ¢3CbÂ•öÖ–ã¢ÓSÂ•öÖƒ¢ƒƒBÂ†¢3BÂÆVgE6–FT&V&–æs¢CbÂGfæ6Uv–GFƒ¢#“ÒÂ%ÅÂ#¢²…öÖ–ã¢#Â…öÖƒ¢cbÂ•öÖ–ã¢ÓÂ•öÖƒ¢s“rÂ†¢ƒ“rÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢cCRÒÂ%Ò#¢²…öÖ–ã¢ÓsbÂ…öÖƒ¢##bÂ•öÖ–ã¢ÓSÂ•öÖƒ¢ƒƒÂ†¢3ÂÆVgE6–FT&V&–æs¢ÓsbÂGfæ6Uv–GFƒ¢#“rÒÂ%â#¢²…öÖ–ã¢C2Â…öÖƒ¢C3rÂ•öÖ–ã¢SrÂ•öÖƒ¢ƒ"Â†¢#“RÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢Cs‚ÒÂó¢²…öÖ–ã¢#’Â…öÖƒ¢Sc2Â•öÖ–ã¢ÓÂ•öÖƒ¢ÓÂ†¢’ÂÆVgE6–FT&V&–æs¢#’ÂGfæ6Uv–GFƒ¢S“‚ÒÂ&#¢²…öÖ–ã¢SBÂ…öÖƒ¢3#Â•öÖ–ã¢SCÂ•öÖƒ¢sCrÂ†¢#rÂÆVgE6–FT&V&–æs¢SBÂGfæ6Uv–GFƒ¢3c‚ÒÂ¢²…öÖ–ã¢#Â…öÖƒ¢CCrÂ•öÖ–ã¢ÓrÂ•öÖƒ¢C“RÂ†¢S"ÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢C“BÒÂ#¢²…öÖ–ã¢3rÂ…öÖƒ¢CcbÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢ssÂ†¢s“rÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢SÒÂ3¢²…öÖ–ã¢3RÂ…öÖƒ¢CSbÂ•öÖ–ã¢Ó’Â•öÖƒ¢SrÂ†¢SbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢CcÒÂC¢²…öÖ–ã¢CRÂ…öÖƒ¢S#Â•öÖ–ã¢ÓRÂ•öÖƒ¢scBÂ†¢ss’ÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢ScÒÂS¢²…öÖ–ã¢32Â…öÖƒ¢3sÂ•öÖ–ã¢ÓRÂ•öÖƒ¢SÂ†¢SbÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢3“rÒÂc¢²…öÖ–ã¢3RÂ…öÖƒ¢CÂ•öÖ–ã¢Ó2Â•öÖƒ¢c“RÂ†¢s‚ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢CS2ÒÂs¢²…öÖ–ã¢32Â…öÖƒ¢SSÂ•öÖ–ã¢Ó#SrÂ•öÖƒ¢SRÂ†¢sc"ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢cÒÂƒ¢²…öÖ–ã¢3"Â…öÖƒ¢CS‚Â•öÖ–ã¢Ó#’Â•öÖƒ¢sC2Â†¢ss"ÂÆVgE6–FT&V&–æs¢3"ÂGfæ6Uv–GFƒ¢C“ÒÂ“¢²…öÖ–ã¢CRÂ…öÖƒ¢crÂ•öÖ–ã¢Ó2Â•öÖƒ¢c3Â†¢cCBÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢##ÒÂ£¢²…öÖ–ã¢Ó#rÂ…öÖƒ¢#cÂ•öÖ–ã¢Ó#3Â•öÖƒ¢cÂ†¢ƒ3"ÂÆVgE6–FT&V&–æs¢Ó#rÂGfæ6Uv–GFƒ¢3‚ÒÂ³¢²…öÖ–ã¢3’Â…öÖƒ¢CC2Â•öÖ–ã¢Ó2Â•öÖƒ¢sÂ†¢s2ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢C“rÒÂÃ¢²…öÖ–ã¢S‚Â…öÖƒ¢c‚Â•öÖ–ã¢Ó‚Â•öÖƒ¢cƒbÂ†¢c“BÂÆVgE6–FT&V&–æs¢S‚ÂGfæ6Uv–GFƒ¢##rÒÂÓ¢²…öÖ–ã¢3’Â…öÖƒ¢cƒ‚Â•öÖ–ã¢ÓBÂ•öÖƒ¢SÂ†¢SRÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢s‚ÒÂã¢²…öÖ–ã¢CRÂ…öÖƒ¢C“Â•öÖ–ã¢Ó3"Â•öÖƒ¢S"Â†¢SCBÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢SCÒÂó¢²…öÖ–ã¢CÂ…öÖƒ¢C#BÂ•öÖ–ã¢Ó"Â•öÖƒ¢C“2Â†¢SRÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢CCrÒÂ¢²…öÖ–ã¢#RÂ…öÖƒ¢S#’Â•öÖ–ã¢Ó#cÂ•öÖƒ¢SÂ†¢scÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢Ss2ÒÂ¢²…öÖ–ã¢S2Â…öÖƒ¢c2Â•öÖ–ã¢Ó#3RÂ•öÖƒ¢SBÂ†¢sC’ÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢c#2ÒÂ#¢²…öÖ–ã¢3"Â…öÖƒ¢CrÂ•öÖ–ã¢ÓrÂ•öÖƒ¢C“"Â†¢C“’ÂÆVgE6–FT&V&–æs¢3"ÂGfæ6Uv–GFƒ¢CcÒÂ3¢²…öÖ–ã¢C’Â…öÖƒ¢CbÂ•öÖ–ã¢Ó"Â•öÖƒ¢S’Â†¢S3ÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢CcÒÂC¢²…öÖ–ã¢3"Â…öÖƒ¢CC"Â•öÖ–ã¢ÓRÂ•öÖƒ¢cƒBÂ†¢cƒ’ÂÆVgE6–FT&V&–æs¢3"ÂGfæ6Uv–GFƒ¢Cc’ÒÂS¢²…öÖ–ã¢CÂ…öÖƒ¢CƒrÂ•öÖ–ã¢ÓRÂ•öÖƒ¢SrÂ†¢S"ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢SÒÂc¢²…öÖ–ã¢bÂ…öÖƒ¢CCÂ•öÖ–ã¢Ó#Â•öÖƒ¢SC"Â†¢Sc"ÂÆVgE6–FT&V&–æs¢bÂGfæ6Uv–GFƒ¢CSbÒÂs¢²…öÖ–ã¢3’Â…öÖƒ¢c3’Â•öÖ–ã¢Ó#"Â•öÖƒ¢SRÂ†¢S#rÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢ccÒÂƒ¢²…öÖ–ã¢RÂ…öÖƒ¢SRÂ•öÖ–ã¢Ó3’Â•öÖƒ¢S3’Â†¢Ss‚ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢SCÒÂ“¢²…öÖ–ã¢Ó“‚Â…öÖƒ¢SÂ•öÖ–ã¢Ó#C"Â•öÖƒ¢SÂ†¢sS2ÂÆVgE6–FT&V&–æs¢Ó“‚ÂGfæ6Uv–GFƒ¢SC‚ÒÂ£¢²…öÖ–ã¢#rÂ…öÖƒ¢Cs’Â•öÖ–ã¢Ó2Â•öÖƒ¢C“BÂ†¢C“rÂÆVgE6–FT&V&–æs¢#rÂGfæ6Uv–GFƒ¢C“BÒÂ'²#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3‚ÒÂ'Â#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3‚ÒÂ'Ò#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3‚ÒÂ'â#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3‚ÒÒÂföçDfÖ–Ç“¢%WFÇVÖ67&—B"Â&W6öÇWF–öã¢S2ÂvVæW&FVDöã¢###ÓbÓECƒ£33£#RãCu¢"ÒÂV’Ò²76–æs¢SÂvÇ—‡3¢²"#¢²…öÖ–ã¢Â…öÖƒ¢S’Â•öÖ–ã¢Â•öÖƒ¢&S2Â†¢&S2ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢S’ÒÂ¢²…öÖ–ã¢#Â…öÖƒ¢C‚Â•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢c‚ÒÂ¢²…öÖ–ã¢rÂ…öÖƒ¢scrÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢rÂGfæ6Uv–GFƒ¢ƒCBÒÂ#¢²…öÖ–ã¢sRãƒCsCSsccCSc3rÂ…öÖƒ¢CÂ•öÖ–ã¢Â•öÖƒ¢CsrÂ†¢CsrÂÆVgE6–FT&V&–æs¢sRÂGfæ6Uv–GFƒ¢3ÒÂ3¢²…öÖ–ã¢sBãƒS3cSƒS3cSƒS3bÂ…öÖƒ¢““BÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢bÒÂC¢²…öÖ–ã¢c2Â…öÖƒ¢BÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢c2ÂGfæ6Uv–GFƒ¢ƒrÒÂS¢²…öÖ–ã¢“bãƒCCƒ#sSCsC“S2Â…öÖƒ¢“ƒ"Â•öÖ–ã¢Ó#Â•öÖƒ¢CSbÂ†¢CsrÂÆVgE6–FT&V&–æs¢“bÂGfæ6Uv–GFƒ¢ƒÒÂc¢²…öÖ–ã¢#Â…öÖƒ¢crÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢CBÒÂs¢²…öÖ–ã¢sbÂ…öÖƒ¢cÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢Ó3ÂGfæ6Uv–GFƒ¢#‚ÒÂƒ¢²…öÖ–ã¢“"Â…öÖƒ¢3’Â•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢“"ÂGfæ6Uv–GFƒ¢3ÒÂ“¢²…öÖ–ã¢ƒBÂ…öÖƒ¢#bÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢ƒBÂGfæ6Uv–GFƒ¢SBÒÂ"#¢²…öÖ–ã¢C2Â…öÖƒ¢3CÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢Cƒ2ÒÂr"s¢²…öÖ–ã¢cbÂ…öÖƒ¢c3BÂ•öÖ–ã¢SRÂ•öÖƒ¢ScÂ†¢SRÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢ssÒÂ"2#¢²…öÖ–ã¢c2Â…öÖƒ¢s’Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢c2ÂGfæ6Uv–GFƒ¢#CbÒÂC¢²…öÖ–ã¢ƒã“#Sc“Ss#scSbÂ…öÖƒ¢"Â•öÖ–ã¢Ó#‚Â•öÖƒ¢c“2Â†¢“ÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢ÒÂ"R#¢²…öÖ–ã¢srÂ…öÖƒ¢3ƒBÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢srÂGfæ6Uv–GFƒ¢CcÒÂ"b#¢²…öÖ–ã¢sBÂ…öÖƒ¢#C"Â•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢#ƒ’ÒÂ"r#¢²…öÖ–ã¢cbÂ…öÖƒ¢3#BÂ•öÖ–ã¢SRÂ•öÖƒ¢ScÂ†¢SRÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢CcÒÂ"‚#¢²…öÖ–ã¢BÂ…öÖƒ¢cSÂ•öÖ–ã¢ÓCc2Â•öÖƒ¢c3bÂ†¢#“’ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢cc"ÒÂ"’#¢²…öÖ–ã¢Â…öÖƒ¢SCrÂ•öÖ–ã¢ÓCc2Â•öÖƒ¢c3bÂ†¢#“’ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢cSBÒÂ"¢#¢²…öÖ–ã¢cbÂ…öÖƒ¢ƒ“2Â•öÖ–ã¢crÂ•öÖƒ¢CSbÂ†¢ƒC’ÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢“S‚ÒÂ"²#¢²…öÖ–ã¢s2Â…öÖƒ¢sÂ•öÖ–ã¢CbÂ•öÖƒ¢#bÂ†¢cÂÆVgE6–FT&V&–æs¢s2ÂGfæ6Uv–GFƒ¢CRÒÂ"Â#¢²…öÖ–ã¢#2Â…öÖƒ¢3RÂ•öÖ–ã¢Ó3Â•öÖƒ¢##Â†¢S3"ÂÆVgE6–FT&V&–æs¢#2ÂGfæ6Uv–GFƒ¢CBÒÂ"Ò#¢²…öÖ–ã¢SBÂ…öÖƒ¢cC2Â•öÖ–ã¢S3‚Â•öÖƒ¢c“"Â†¢SBÂÆVgE6–FT&V&–æs¢SBÂGfæ6Uv–GFƒ¢s“rÒÂ"â#¢²…öÖ–ã¢CRÂ…öÖƒ¢3C"Â•öÖ–ã¢Â•öÖƒ¢#"Â†¢#"ÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢C“2ÒÂ"ò#¢²…öÖ–ã¢Â…öÖƒ¢ssBÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CSbÂ†¢SƒÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢ƒ#BÒÂ#¢#¢²…öÖ–ã¢CRÂ…öÖƒ¢3C"Â•öÖ–ã¢Â•öÖƒ¢ƒ"Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢C’ÒÂ#²#¢²…öÖ–ã¢S2Â…öÖƒ¢3CRÂ•öÖ–ã¢Ó3Â•öÖƒ¢ƒ"Â†¢3“2ÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢C#BÒÂ#Â#¢²…öÖ–ã¢sbÂ…öÖƒ¢ƒ“"Â•öÖ–ã¢rÂ•öÖƒ¢2Â†¢“bÂÆVgE6–FT&V&–æs¢sbÂGfæ6Uv–GFƒ¢rÒÂ#Ò#¢²…öÖ–ã¢CrÂ…öÖƒ¢“ƒÂ•öÖ–ã¢CrÂ•öÖƒ¢“ƒrÂ†¢SƒÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢#rÒÂ#â#¢²…öÖ–ã¢#RÂ…öÖƒ¢“ƒÂ•öÖ–ã¢ƒrÂ•öÖƒ¢““2Â†¢“bÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢cÒÂ#ò#¢²…öÖ–ã¢cRã“#ccc#C“ƒ3‚Â…öÖƒ¢ƒ“Â•öÖ–ã¢Â•öÖƒ¢CsrÂ†¢CsrÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢“S2ÒÂ$#¢²…öÖ–ã¢ƒBã3S“##ƒ3SccBÂ…öÖƒ¢sRã#3Cc“#S#ss3“RÂ•öÖ–ã¢ÓCS2Â•öÖƒ¢C3Â†¢ƒƒBÂÆVgE6–FT&V&–æs¢ƒBÂGfæ6Uv–GFƒ¢ƒ#ÒÂ¢²…öÖ–ã¢sÂ…öÖƒ¢Cc2Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢S32ÒÂ#¢²…öÖ–ã¢ƒÂ…öÖƒ¢#S2Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢3#"ÒÂ3¢²…öÖ–ã¢ƒÂ…öÖƒ¢sBÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢#“ÒÂC¢²…öÖ–ã¢ƒÂ…öÖƒ¢#“Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢3SbÒÂS¢²…öÖ–ã¢ƒÂ…öÖƒ¢“Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢3bÒÂc¢²…öÖ–ã¢ƒÂ…öÖƒ¢sbÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢#SbÒÂs¢²…öÖ–ã¢ƒÂ…öÖƒ¢##bÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢3CbÒÂƒ¢²…öÖ–ã¢ƒÂ…öÖƒ¢C“rÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢Ss‚ÒÂ“¢²…öÖ–ã¢ƒÂ…öÖƒ¢cBÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢cƒRÒÂ£¢²…öÖ–ã¢cÂ…öÖƒ¢Â•öÖ–ã¢Ó#Â•öÖƒ¢CSbÂ†¢CsrÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢c’ÒÂ³¢²…öÖ–ã¢ƒÂ…öÖƒ¢C#rÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢SÒÂÃ¢²…öÖ–ã¢ƒÂ…öÖƒ¢3Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢#ÒÂÓ¢²…öÖ–ã¢“BÂ…öÖƒ¢ƒƒ‚Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢“BÂGfæ6Uv–GFƒ¢“ƒ"ÒÂã¢²…öÖ–ã¢ƒ2Â…öÖƒ¢S’Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒ2ÂGfæ6Uv–GFƒ¢S“"ÒÂó¢²…öÖ–ã¢sÂ…öÖƒ¢#ƒÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢3SÒÂ¢²…öÖ–ã¢ƒÂ…öÖƒ¢#C"Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢#“rÒÂ¢²…öÖ–ã¢sÂ…öÖƒ¢3C‚Â•öÖ–ã¢Ó#CRÂ•öÖƒ¢CsrÂ†¢s#"ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢3sbÒÂ#¢²…öÖ–ã¢ƒÂ…öÖƒ¢#ƒRÂ•öÖ–ã¢Â•öÖƒ¢CSRÂ†¢CSRÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢3ƒRÒÂ3¢²…öÖ–ã¢RÂ…öÖƒ¢bÂ•öÖ–ã¢Ó#Â•öÖƒ¢CsrÂ†¢C“‚ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢#bÒÂC¢²…öÖ–ã¢“bÂ…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢“bÂGfæ6Uv–GFƒ¢CbÒÂS¢²…öÖ–ã¢sÂ…öÖƒ¢CS"Â•öÖ–ã¢Ó#Â•öÖƒ¢CSbÂ†¢CsrÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢S#"ÒÂc¢²…öÖ–ã¢cRÂ…öÖƒ¢CC2Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢S‚ÒÂs¢²…öÖ–ã¢s"Â…öÖƒ¢#SrÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢s"ÂGfæ6Uv–GFƒ¢##’ÒÂƒ¢²…öÖ–ã¢ƒÂ…öÖƒ¢CC’Â•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢S#’ÒÂ“¢²…öÖ–ã¢cRÂ…öÖƒ¢3“bÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢CcÒÂ£¢²…öÖ–ã¢“Â…öÖƒ¢rÂ•öÖ–ã¢Â•öÖƒ¢CSbÂ†¢CSbÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢“rÒÂ%²#¢²…öÖ–ã¢SrÂ…öÖƒ¢SCÂ•öÖ–ã¢Ó3"Â•öÖƒ¢ccBÂ†¢“sbÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢Ss2ÒÂ%ÅÂ#¢²…öÖ–ã¢3bÂ…öÖƒ¢ƒ3Â•öÖ–ã¢Ó#RÂ•öÖƒ¢CSbÂ†¢SƒÂÆVgE6–FT&V&–æs¢3bÂGfæ6Uv–GFƒ¢ƒCÒÂ%Ò#¢²…öÖ–ã¢#2Â…öÖƒ¢C‚Â•öÖ–ã¢Ó3"Â•öÖƒ¢ccBÂ†¢“sbÂÆVgE6–FT&V&–æs¢#2ÂGfæ6Uv–GFƒ¢SS"ÒÂ%â#¢²…öÖ–ã¢sÂ…öÖƒ¢ƒ"Â•öÖ–ã¢s#’Â•öÖƒ¢CSbÂ†¢s#rÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢ƒcBÒÂó¢²…öÖ–ã¢’Â…öÖƒ¢CÂ•öÖ–ã¢ÓSBÂ•öÖƒ¢Â†¢SBÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢c‚ÒÂ&#¢²…öÖ–ã¢CÂ…öÖƒ¢CSbÂ•öÖ–ã¢#ƒ‚Â•öÖƒ¢ScÂ†¢#s"ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢C“bÒÂ¢²…öÖ–ã¢s’Â…öÖƒ¢S2Â•öÖ–ã¢Ó#Â•öÖƒ¢"Â†¢#2ÂÆVgE6–FT&V&–æs¢s’ÂGfæ6Uv–GFƒ¢3"ÒÂ#¢²…öÖ–ã¢ÓbÂ…öÖƒ¢sÂ•öÖ–ã¢Ó#Â•öÖƒ¢ScÂ†¢SƒÂÆVgE6–FT&V&–æs¢ÓbÂGfæ6Uv–GFƒ¢CRÒÂ3¢²…öÖ–ã¢s‚Â…öÖƒ¢“ƒ‚Â•öÖ–ã¢Ó#Â•öÖƒ¢"Â†¢#2ÂÆVgE6–FT&V&–æs¢s‚ÂGfæ6Uv–GFƒ¢crÒÂC¢²…öÖ–ã¢s‚Â…öÖƒ¢SbÂ•öÖ–ã¢Ó#Â•öÖƒ¢ScÂ†¢SƒÂÆVgE6–FT&V&–æs¢s‚ÂGfæ6Uv–GFƒ¢#‚ÒÂS¢²…öÖ–ã¢sBÂ…öÖƒ¢“ƒÂ•öÖ–ã¢Ó#Â•öÖƒ¢"Â†¢#2ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢S’ÒÂc¢²…öÖ–ã¢cBÂ…öÖƒ¢s3Â•öÖ–ã¢Â•öÖƒ¢SƒÂ†¢SƒÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢s#RÒÂs¢²…öÖ–ã¢s‚Â…öÖƒ¢32Â•öÖ–ã¢ÓC3rÂ•öÖƒ¢"Â†¢S3’ÂÆVgE6–FT&V&–æs¢s‚ÂGfæ6Uv–GFƒ¢SrÒÂƒ¢²…öÖ–ã¢C’Â…öÖƒ¢#SRÂ•öÖ–ã¢Â•öÖƒ¢ScÂ†¢ScÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢3RÒÂ“¢²…öÖ–ã¢crÂ…öÖƒ¢S“Â•öÖ–ã¢Â•öÖƒ¢ScÂ†¢ScÂÆVgE6–FT&V&–æs¢crÂGfæ6Uv–GFƒ¢cS"ÒÂ£¢²…öÖ–ã¢ÓSbÂ…öÖƒ¢3ƒÂ•öÖ–ã¢ÓC3rÂ•öÖƒ¢ScÂ†¢““rÂÆVgE6–FT&V&–æs¢ÓSbÂGfæ6Uv–GFƒ¢S#RÒÂ³¢²…öÖ–ã¢cBÂ…öÖƒ¢#C‚Â•öÖ–ã¢Â•öÖƒ¢ScÂ†¢ScÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢#ƒrÒÂÃ¢²…öÖ–ã¢cBÂ…öÖƒ¢SƒrÂ•öÖ–ã¢Â•öÖƒ¢ScÂ†¢ScÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢cS2ÒÂÓ¢²…öÖ–ã¢sBÂ…öÖƒ¢“RÂ•öÖ–ã¢Â•öÖƒ¢"Â†¢"ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢“srÒÂã¢²…öÖ–ã¢sBÂ…öÖƒ¢#s‚Â•öÖ–ã¢Â•öÖƒ¢"Â†¢"ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢3C2ÒÂó¢²…öÖ–ã¢s‚Â…öÖƒ¢CbÂ•öÖ–ã¢Ó#Â•öÖƒ¢"Â†¢#2ÂÆVgE6–FT&V&–æs¢s‚ÂGfæ6Uv–GFƒ¢#BÒÂ¢²…öÖ–ã¢3BÂ…öÖƒ¢’Â•öÖ–ã¢ÓCbÂ•öÖƒ¢"Â†¢S‚ÂÆVgE6–FT&V&–æs¢3BÂGfæ6Uv–GFƒ¢“rÒÂ¢²…öÖ–ã¢s‚Â…öÖƒ¢3RÂ•öÖ–ã¢ÓCbÂ•öÖƒ¢"Â†¢S‚ÂÆVgE6–FT&V&–æs¢s‚ÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢s"Â…öÖƒ¢ƒ‚Â•öÖ–ã¢Â•öÖƒ¢"Â†¢"ÂÆVgE6–FT&V&–æs¢s"ÂGfæ6Uv–GFƒ¢ƒSBÒÂ3¢²…öÖ–ã¢BÂ…öÖƒ¢“32Â•öÖ–ã¢Ó#Â•öÖƒ¢"Â†¢#2ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢#"ÒÂC¢²…öÖ–ã¢#BÂ…öÖƒ¢cs‚Â•öÖ–ã¢ÓrÂ•öÖƒ¢3C2Â†¢3cÂÆVgE6–FT&V&–æs¢#BÂGfæ6Uv–GFƒ¢s3ÒÂS¢²…öÖ–ã¢S"Â…öÖƒ¢ƒÂ•öÖ–ã¢Ó#Â•öÖƒ¢ƒ"Â†¢2ÂÆVgE6–FT&V&–æs¢S"ÂGfæ6Uv–GFƒ¢#CRÒÂc¢²…öÖ–ã¢#bÂ…öÖƒ¢sbÂ•öÖ–ã¢Â•öÖƒ¢ƒ"Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢#bÂGfæ6Uv–GFƒ¢#bÒÂs¢²…öÖ–ã¢S"Â…öÖƒ¢ssrÂ•öÖ–ã¢Â•öÖƒ¢ƒ"Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢S"ÂGfæ6Uv–GFƒ¢ƒ#2ÒÂƒ¢²…öÖ–ã¢C"Â…öÖƒ¢c2Â•öÖ–ã¢Â•öÖƒ¢ƒ"Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢C"ÂGfæ6Uv–GFƒ¢#2ÒÂ“¢²…öÖ–ã¢#BÂ…öÖƒ¢s"Â•öÖ–ã¢ÓC3rÂ•öÖƒ¢ƒ"Â†¢S’ÂÆVgE6–FT&V&–æs¢#BÂGfæ6Uv–GFƒ¢“"ÒÂ£¢²…öÖ–ã¢ƒ‚Â…öÖƒ¢“cÂ•öÖ–ã¢Â•öÖƒ¢ƒ"Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢ƒ‚ÂGfæ6Uv–GFƒ¢3"ÒÂ'²#¢²…öÖ–ã¢c2Â…öÖƒ¢csÂ•öÖ–ã¢Ó3cBÂ•öÖƒ¢S“rÂ†¢“cÂÆVgE6–FT&V&–æs¢c2ÂGfæ6Uv–GFƒ¢sÒÂ'Â#¢²…öÖ–ã¢SÂ…öÖƒ¢3rÂ•öÖ–ã¢Ó#sÂ•öÖƒ¢CSbÂ†¢s#bÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢CSÒÂ'Ò#¢²…öÖ–ã¢#rÂ…öÖƒ¢c3RÂ•öÖ–ã¢Ó3cBÂ•öÖƒ¢S“rÂ†¢“cÂÆVgE6–FT&V&–æs¢#rÂGfæ6Uv–GFƒ¢sÒÂ'â#¢²…öÖ–ã¢#Â…öÖƒ¢#SrÂ•öÖ–ã¢CÂ•öÖƒ¢ƒ2Â†¢C"ÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢3ƒbÒÒÂföçDfÖ–Ç“¢%&ö&÷Fò6Æ""Â&W6öÇWF–öã¢#C‚ÂvVæW&FVDöã¢###ÓbÓUC“£#£S‚ã#¢"ÒÂ–’Ò²vÇ—‡3¢²¢²…öÖ–ã¢ƒbÂ…öÖƒ¢3‚Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢ƒbÂGfæ6Uv–GFƒ¢3’ÒÂ¢²…öÖ–ã¢c"Â…öÖƒ¢ƒbÂ•öÖ–ã¢Â•öÖƒ¢Cs"Â†¢Cs"ÂÆVgE6–FT&V&–æs¢c"ÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢SÂ…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢Cs"Â†¢Cs"ÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢3’ÒÂ3¢²…öÖ–ã¢srÂ…öÖƒ¢SÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢srÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢3‚Â…öÖƒ¢“"Â•öÖ–ã¢Â•öÖƒ¢Cs"Â†¢Cs"ÂÆVgE6–FT&V&–æs¢3‚ÂGfæ6Uv–GFƒ¢3’ÒÂS¢²…öÖ–ã¢“Â…öÖƒ¢srÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CCbÂ†¢CsÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢3’ÒÂc¢²…öÖ–ã¢ƒrÂ…öÖƒ¢cbÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢ƒrÂGfæ6Uv–GFƒ¢3’ÒÂs¢²…öÖ–ã¢ƒrÂ…öÖƒ¢C‚Â•öÖ–ã¢Â•öÖƒ¢CCbÂ†¢CCbÂÆVgE6–FT&V&–æs¢ƒrÂGfæ6Uv–GFƒ¢3’ÒÂƒ¢²…öÖ–ã¢ƒ2Â…öÖƒ¢CrÂ•öÖ–ã¢Ó#bÂ•öÖƒ¢Cs"Â†¢C“‚ÂÆVgE6–FT&V&–æs¢ƒ2ÂGfæ6Uv–GFƒ¢3’ÒÂ“¢²…öÖ–ã¢cRÂ…öÖƒ¢CBÂ•öÖ–ã¢Ó#bÂ•öÖƒ¢Cs"Â†¢C“‚ÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢3’ÒÂ"#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Sc’ÒÂ"#¢²…öÖ–ã¢ƒBÂ…öÖƒ¢Cƒ‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢ƒBÂGfæ6Uv–GFƒ¢cƒ"ÒÂr"s¢²…öÖ–ã¢"Â…öÖƒ¢ƒc’Â•öÖ–ã¢“CRÂ•öÖƒ¢CcbÂ†¢S#ÂÆVgE6–FT&V&–æs¢"ÂGfæ6Uv–GFƒ¢“sÒÂ"2#¢²…öÖ–ã¢‚Â…öÖƒ¢RÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢‚ÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢sÂ…öÖƒ¢C‚Â•öÖ–ã¢Ó#RÂ•öÖƒ¢SƒBÂ†¢sƒ’ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢3’ÒÂ"R#¢²…öÖ–ã¢ƒ’Â…öÖƒ¢s#RÂ•öÖ–ã¢ÓS’Â•öÖƒ¢C“Â†¢SSÂÆVgE6–FT&V&–æs¢ƒ’ÂGfæ6Uv–GFƒ¢ƒ#ÒÂ"b#¢²…öÖ–ã¢“Â…öÖƒ¢CCbÂ•öÖ–ã¢Ó3‚Â•öÖƒ¢C“Â†¢S#’ÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢Cs’ÒÂ"r#¢²…öÖ–ã¢“"Â…öÖƒ¢3“‚Â•öÖ–ã¢“CRÂ•öÖƒ¢CcbÂ†¢S#ÂÆVgE6–FT&V&–æs¢“"ÂGfæ6Uv–GFƒ¢CƒrÒÂ"‚#¢²…öÖ–ã¢rÂ…öÖƒ¢cbÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢rÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"’#¢²…öÖ–ã¢crÂ…öÖƒ¢SsbÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢crÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"¢#¢²…öÖ–ã¢#‚Â…öÖƒ¢sS2Â•öÖ–ã¢s“"Â•öÖƒ¢C“Â†¢c“’ÂÆVgE6–FT&V&–æs¢#‚ÂGfæ6Uv–GFƒ¢s“rÒÂ"²#¢²…öÖ–ã¢ƒRÂ…öÖƒ¢Â•öÖ–ã¢#Â•öÖƒ¢#3bÂ†¢#RÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢“bÒÂ"Â#¢²…öÖ–ã¢rÂ…öÖƒ¢C#Â•öÖ–ã¢Ó3#rÂ•öÖƒ¢#ƒÂ†¢c‚ÂÆVgE6–FT&V&–æs¢rÂGfæ6Uv–GFƒ¢Sc’ÒÂ"Ò#¢²…öÖ–ã¢RÂ…öÖƒ¢ccrÂ•öÖ–ã¢3“Â•öÖƒ¢cs"Â†¢#ƒÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"â#¢²…öÖ–ã¢CrÂ…öÖƒ¢C#‚Â•öÖ–ã¢Â•öÖƒ¢#ƒÂ†¢#ƒÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢Sc’ÒÂ"ò#¢²…öÖ–ã¢Ó2Â…öÖƒ¢SsÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢Ó2ÂGfæ6Uv–GFƒ¢Sc’ÒÂ#¢#¢²…öÖ–ã¢#Â…öÖƒ¢Cƒ"Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ#²#¢²…öÖ–ã¢sÂ…öÖƒ¢CsBÂ•öÖ–ã¢Ó3#rÂ•öÖƒ¢c"Â†¢3ƒ’ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢cƒ"ÒÂ#Â#¢²…öÖ–ã¢“RÂ…öÖƒ¢Â•öÖ–ã¢crÂ•öÖƒ¢#ƒÂ†¢BÂÆVgE6–FT&V&–æs¢“RÂGfæ6Uv–GFƒ¢“bÒÂ#Ò#¢²…öÖ–ã¢ƒRÂ…öÖƒ¢Â•öÖ–ã¢3s"Â•öÖƒ¢sBÂ†¢s"ÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢“bÒÂ#â#¢²…öÖ–ã¢“RÂ…öÖƒ¢Â•öÖ–ã¢cbÂ•öÖƒ¢#s’Â†¢2ÂÆVgE6–FT&V&–æs¢“RÂGfæ6Uv–GFƒ¢“bÒÂ#ò#¢²…öÖ–ã¢bÂ…öÖƒ¢S‚Â•öÖ–ã¢Â•öÖƒ¢CƒÂ†¢CƒÂÆVgE6–FT&V&–æs¢bÂGfæ6Uv–GFƒ¢#SÒÂ$#¢²…öÖ–ã¢cÂ…öÖƒ¢““Â•öÖ–ã¢ÓC3Â•öÖƒ¢C“"Â†¢“#2ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢““rÒÂ¢²…öÖ–ã¢Â…öÖƒ¢CsÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Cs’ÒÂ#¢²…öÖ–ã¢SÂ…öÖƒ¢3s‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢Cs’ÒÂ3¢²…öÖ–ã¢“rÂ…öÖƒ¢3sBÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢“rÂGfæ6Uv–GFƒ¢Cs’ÒÂC¢²…öÖ–ã¢C‚Â…öÖƒ¢3srÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢C‚ÂGfæ6Uv–GFƒ¢Cs’ÒÂS¢²…öÖ–ã¢C’Â…öÖƒ¢#cBÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢3cbÒÂc¢²…öÖ–ã¢SÂ…öÖƒ¢SbÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢#SÒÂs¢²…öÖ–ã¢“‚Â…öÖƒ¢Cc’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢“‚ÂGfæ6Uv–GFƒ¢S“2ÒÂƒ¢²…öÖ–ã¢SÂ…öÖƒ¢3#"Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢Cs’ÒÂ“¢²…öÖ–ã¢CÂ…öÖƒ¢C3bÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢Sc’ÒÂ£¢²…öÖ–ã¢3RÂ…öÖƒ¢“s2Â•öÖ–ã¢Ó#RÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3’ÒÂ³¢²…öÖ–ã¢S2Â…öÖƒ¢CsRÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢S2ÂGfæ6Uv–GFƒ¢Cs’ÒÂÃ¢²…öÖ–ã¢SrÂ…öÖƒ¢ƒ’Â•öÖ–ã¢Â•öÖƒ¢CSBÂ†¢CSBÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢#SÒÂÓ¢²…öÖ–ã¢CRÂ…öÖƒ¢ScÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢sbÒÂã¢²…öÖ–ã¢S"Â…öÖƒ¢3RÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢S"ÂGfæ6Uv–GFƒ¢Cs’ÒÂó¢²…öÖ–ã¢ƒ’Â…öÖƒ¢SÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢ƒ’ÂGfæ6Uv–GFƒ¢S“2ÒÂ¢²…öÖ–ã¢C’Â…öÖƒ¢#s"Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢3cbÒÂ¢²…öÖ–ã¢ƒ’Â…öÖƒ¢ScbÂ•öÖ–ã¢ÓCrÂ•öÖƒ¢C“Â†¢c3‚ÂÆVgE6–FT&V&–æs¢ƒ’ÂGfæ6Uv–GFƒ¢S“2ÒÂ#¢²…öÖ–ã¢SÂ…öÖƒ¢Cc‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢Cs’ÒÂ3¢²…öÖ–ã¢sBÂ…öÖƒ¢#cbÂ•öÖ–ã¢Ó#bÂ•öÖƒ¢C“Â†¢SrÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢3cbÒÂC¢²…öÖ–ã¢CBÂ…öÖƒ¢#’Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CBÂGfæ6Uv–GFƒ¢#SÒÂS¢²…öÖ–ã¢CrÂ…öÖƒ¢3bÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢Cs’ÒÂc¢²…öÖ–ã¢ÓÂ…öÖƒ¢3cBÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢ÓÂGfæ6Uv–GFƒ¢3cbÒÂs¢²…öÖ–ã¢rÂ…öÖƒ¢“3Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢rÂGfæ6Uv–GFƒ¢“32ÒÂƒ¢²…öÖ–ã¢Â…öÖƒ¢3c2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3cbÒÂ“¢²…öÖ–ã¢Ó2Â…öÖƒ¢3c‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢Ó2ÂGfæ6Uv–GFƒ¢3cbÒÂ£¢²…öÖ–ã¢#"Â…öÖƒ¢#2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢#"ÂGfæ6Uv–GFƒ¢#SÒÂ%²#¢²…öÖ–ã¢CbÂ…öÖƒ¢cCBÂ•öÖ–ã¢ÓC2Â•öÖƒ¢CcbÂ†¢ƒs’ÂÆVgE6–FT&V&–æs¢CbÂGfæ6Uv–GFƒ¢cƒ"ÒÂ%ÅÂ#¢²…öÖ–ã¢Ó2Â…öÖƒ¢SsÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢Ó2ÂGfæ6Uv–GFƒ¢Sc’ÒÂ%Ò#¢²…öÖ–ã¢3‚Â…öÖƒ¢S3bÂ•öÖ–ã¢ÓC2Â•öÖƒ¢CcbÂ†¢ƒs’ÂÆVgE6–FT&V&–æs¢3‚ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ%â#¢²…öÖ–ã¢RÂ…öÖƒ¢ƒÂ•öÖ–ã¢c“"Â•öÖƒ¢C“Â†¢s“’ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢“bÒÂó¢²…öÖ–ã¢Ó’Â…öÖƒ¢C’Â•öÖ–ã¢ÓCRÂ•öÖƒ¢Ó##2Â†¢ƒ"ÂÆVgE6–FT&V&–æs¢Ó’ÂGfæ6Uv–GFƒ¢3’ÒÂ&#¢²…öÖ–ã¢C"Â…öÖƒ¢C“RÂ•öÖ–ã¢“"Â•öÖƒ¢C“Â†¢#“’ÂÆVgE6–FT&V&–æs¢C"ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ¢²…öÖ–ã¢s2Â…öÖƒ¢sÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢s2ÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢3RÂ…öÖƒ¢s"Â•öÖ–ã¢Ó#BÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢#SÒÂ3¢²…öÖ–ã¢ƒRÂ…öÖƒ¢ƒrÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢ƒBÂ…öÖƒ¢#Â•öÖ–ã¢Ó#BÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢ƒBÂGfæ6Uv–GFƒ¢#SÒÂS¢²…öÖ–ã¢cRÂ…öÖƒ¢Srã#SsCƒ#SsCƒ2Â•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢3’ÒÂc¢²…öÖ–ã¢#BÂ…öÖƒ¢sC"Â•öÖ–ã¢Â•öÖƒ¢C“Â†¢C“ÂÆVgE6–FT&V&–æs¢#BÂGfæ6Uv–GFƒ¢cƒ"ÒÂs¢²…öÖ–ã¢ƒBÂ…öÖƒ¢#Â•öÖ–ã¢ÓC3Â•öÖƒ¢ƒbÂ†¢SrÂÆVgE6–FT&V&–æs¢ƒBÂGfæ6Uv–GFƒ¢#SÒÂƒ¢²…öÖ–ã¢CbÂ…öÖƒ¢2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CbÂGfæ6Uv–GFƒ¢#SÒÂ“¢²…öÖ–ã¢CrÂ…öÖƒ¢C#‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢Sc’ÒÂ£¢²…öÖ–ã¢Ó“BÂ…öÖƒ¢C#"Â•öÖ–ã¢ÓC3Â•öÖƒ¢CcbÂ†¢ƒ“rÂÆVgE6–FT&V&–æs¢Ó“BÂGfæ6Uv–GFƒ¢Sc’ÒÂ³¢²…öÖ–ã¢3rÂ…öÖƒ¢’Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢3’ÒÂÃ¢²…öÖ–ã¢CrÂ…öÖƒ¢C#‚Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢Sc’ÒÂÓ¢²…öÖ–ã¢#bÂ…öÖƒ¢cƒ‚Â•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢#bÂGfæ6Uv–GFƒ¢ƒ#ÒÂã¢²…öÖ–ã¢CRÂ…öÖƒ¢2Â•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢#SÒÂó¢²…öÖ–ã¢ƒ"Â…öÖƒ¢s‚Â•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢ƒ"ÂGfæ6Uv–GFƒ¢#SÒÂ¢²…öÖ–ã¢3’Â…öÖƒ¢sRÂ•öÖ–ã¢ÓCBÂ•öÖƒ¢ƒbÂ†¢C“ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢#SÒÂ¢²…öÖ–ã¢“Â…öÖƒ¢#"Â•öÖ–ã¢ÓCBÂ•öÖƒ¢ƒbÂ†¢C“ÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢#SÒÂ#¢²…öÖ–ã¢3RÂ…öÖƒ¢ƒ#2Â•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢s“rÒÂ3¢²…öÖ–ã¢C‚Â…öÖƒ¢CÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢C‚ÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢3Â…öÖƒ¢cSrÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢C3rÂ†¢CcÂÆVgE6–FT&V&–æs¢3ÂGfæ6Uv–GFƒ¢cƒ"ÒÂS¢²…öÖ–ã¢CÂ…öÖƒ¢rÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢c"Â†¢ƒbÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢#SÒÂc¢²…öÖ–ã¢Â…öÖƒ¢BÂ•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢3’ÒÂs¢²…öÖ–ã¢’Â…öÖƒ¢S“"Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢S“2ÒÂƒ¢²…öÖ–ã¢"Â…öÖƒ¢#Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢"ÂGfæ6Uv–GFƒ¢3’ÒÂ“¢²…öÖ–ã¢BÂ…öÖƒ¢bÂ•öÖ–ã¢ÓC3Â•öÖƒ¢c"Â†¢C“2ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢3’ÒÂ£¢²…öÖ–ã¢3BÂ…öÖƒ¢“ƒ"Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢3BÂGfæ6Uv–GFƒ¢#BÒÂ'²#¢²…öÖ–ã¢cÂ…öÖƒ¢sCBÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢s“rÒÂ'Â#¢²…öÖ–ã¢sbÂ…öÖƒ¢3“’Â•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢sbÂGfæ6Uv–GFƒ¢Ss2ÒÂ'Ò#¢²…öÖ–ã¢CRÂ…öÖƒ¢s#’Â•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢s“rÒÂ'â#¢²…öÖ–ã¢crÂ…öÖƒ¢#’Â•öÖ–ã¢S’Â•öÖƒ¢“#BÂ†¢CRÂÆVgE6–FT&V&–æs¢crÂGfæ6Uv–GFƒ¢“bÒÒÂföçDfÖ–Ç“¢$&–Â"Â&W6öÇWF–öã¢#C‚ÂvVæW&FVDöã¢###"ÓÓEC#£S£#ã¢"ÒÂv’Ò²6×VfÃ¢fÇ6RÂæÖS¢%4å2"Â76–æs¢SÂFW67&—F–öã¢$'V–ÇBÖ–â6ç2×6W&–bföçB"Â&öÆC¢G'VRÂ—FÆ–3¢G'VRÂÖöæ÷76VC¢fÇ6RÂ6W&–g3¢fÇ6RÂvÇ—‡3¢²¢²…öÖ–ã¢ƒRÂ…öÖƒ¢CÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢3’ÒÂ¢²…öÖ–ã¢##2Â…öÖƒ¢sc2Â•öÖ–ã¢Â•öÖƒ¢Cs"Â†¢Cs"ÂÆVgE6–FT&V&–æs¢##2ÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢cãƒC#3CS#3BÂ…öÖƒ¢3Â•öÖ–ã¢Â•öÖƒ¢Cs"Â†¢Cs"ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢3’ÒÂ3¢²…öÖ–ã¢ƒbÂ…öÖƒ¢CbÂ•öÖ–ã¢Ó#bÂ•öÖƒ¢Cs"Â†¢C“‚ÂÆVgE6–FT&V&–æs¢ƒbÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢#bÂ…öÖƒ¢CÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢#bÂGfæ6Uv–GFƒ¢3’ÒÂS¢²…öÖ–ã¢ƒRÂ…öÖƒ¢SrÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CCbÂ†¢CsÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢3’ÒÂc¢²…öÖ–ã¢srÂ…öÖƒ¢CRÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢srÂGfæ6Uv–GFƒ¢3’ÒÂs¢²…öÖ–ã¢“rÂ…öÖƒ¢CbÂ•öÖ–ã¢Â•öÖƒ¢CCrÂ†¢CCrÂÆVgE6–FT&V&–æs¢“rÂGfæ6Uv–GFƒ¢3’ÒÂƒ¢²…öÖ–ã¢ƒ2Â…öÖƒ¢C’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢ƒ2ÂGfæ6Uv–GFƒ¢3’ÒÂ“¢²…öÖ–ã¢ƒRÂ…öÖƒ¢C’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢Cs"Â†¢C“rÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢3’ÒÂ"#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Sc’ÒÂ"#¢²…öÖ–ã¢sbÂ…öÖƒ¢3“’Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢sbÂGfæ6Uv–GFƒ¢Sc’ÒÂr"s¢²…öÖ–ã¢“BÂ…öÖƒ¢c3Â•öÖ–ã¢“CrÂ•öÖƒ¢CcbÂ†¢S’ÂÆVgE6–FT&V&–æs¢“BÂGfæ6Uv–GFƒ¢s#rÒÂ"2#¢²…öÖ–ã¢#Â…öÖƒ¢2Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢s2Â…öÖƒ¢C2Â•öÖ–ã¢Ó#Â•öÖƒ¢cÂ†¢ƒ"ÂÆVgE6–FT&V&–æs¢s2ÂGfæ6Uv–GFƒ¢3’ÒÂ"R#¢²…öÖ–ã¢’Â…öÖƒ¢c“RÂ•öÖ–ã¢ÓSBÂ•öÖƒ¢C“Â†¢SCRÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢ƒ#ÒÂ"b#¢²…öÖ–ã¢ƒ‚Â…öÖƒ¢3’Â•öÖ–ã¢Ó3BÂ•öÖƒ¢C“Â†¢S#RÂÆVgE6–FT&V&–æs¢ƒ‚ÂGfæ6Uv–GFƒ¢3cbÒÂ"r#¢²…öÖ–ã¢“Â…öÖƒ¢#“RÂ•öÖ–ã¢“CrÂ•öÖƒ¢CcbÂ†¢S’ÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢3“ÒÂ"‚#¢²…öÖ–ã¢#BÂ…öÖƒ¢c‚Â•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢#BÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"’#¢²…öÖ–ã¢#BÂ…öÖƒ¢c‚Â•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢#BÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"¢#¢²…öÖ–ã¢cBÂ…öÖƒ¢s#RÂ•öÖ–ã¢ƒcrÂ•öÖƒ¢C“Â†¢c#BÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢s“rÒÂ"²#¢²…öÖ–ã¢BÂ…öÖƒ¢ƒ"Â•öÖ–ã¢#3rÂ•öÖƒ¢#bÂ†¢“c’ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢“bÒÂ"Â#¢²…öÖ–ã¢sÂ…öÖƒ¢3ƒrÂ•öÖ–ã¢Ó#“Â•öÖƒ¢#RÂ†¢C“RÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢Sc’ÒÂ"Ò#¢²…öÖ–ã¢cRÂ…öÖƒ¢c‚Â•öÖ–ã¢CCÂ•öÖƒ¢c#Â†¢ƒÂÆVgE6–FT&V&–æs¢cRÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"â#¢²…öÖ–ã¢ƒbÂ…öÖƒ¢3“Â•öÖ–ã¢Â•öÖƒ¢#RÂ†¢#RÂÆVgE6–FT&V&–æs¢ƒbÂGfæ6Uv–GFƒ¢Sc’ÒÂ"ò#¢²…öÖ–ã¢Â…öÖƒ¢Sc’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Sc’ÒÂ#¢#¢²…öÖ–ã¢ƒRÂ…öÖƒ¢3“Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢ƒRÂGfæ6Uv–GFƒ¢Sc’ÒÂ#²#¢²…öÖ–ã¢sÂ…öÖƒ¢3ƒrÂ•öÖ–ã¢Ó#“Â•öÖƒ¢c"Â†¢3S"ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢Sc’ÒÂ#Â#¢²…öÖ–ã¢"Â…öÖƒ¢ƒ2Â•öÖ–ã¢##bÂ•öÖƒ¢#’Â†¢““2ÂÆVgE6–FT&V&–æs¢"ÂGfæ6Uv–GFƒ¢“bÒÂ#Ò#¢²…öÖ–ã¢BÂ…öÖƒ¢ƒ"Â•öÖ–ã¢CrÂ•öÖƒ¢3Â†¢c2ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢“bÒÂ#â#¢²…öÖ–ã¢"Â…öÖƒ¢ƒ2Â•öÖ–ã¢##bÂ•öÖƒ¢#’Â†¢““2ÂÆVgE6–FT&V&–æs¢"ÂGfæ6Uv–GFƒ¢“bÒÂ#ò#¢²…öÖ–ã¢“Â…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢C“Â†¢C“ÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢3’ÒÂ$#¢²…öÖ–ã¢Â…öÖƒ¢#RÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“2Â†¢“#BÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#s’ÒÂ¢²…öÖ–ã¢Ó2Â…öÖƒ¢3c’Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢Ó2ÂGfæ6Uv–GFƒ¢3cbÒÂ#¢²…öÖ–ã¢SÂ…öÖƒ¢#SrÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢3cbÒÂ3¢²…öÖ–ã¢"Â…öÖƒ¢3“‚Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢"ÂGfæ6Uv–GFƒ¢Cs’ÒÂC¢²…öÖ–ã¢S‚Â…öÖƒ¢3sÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢S‚ÂGfæ6Uv–GFƒ¢Cs’ÒÂS¢²…öÖ–ã¢c"Â…öÖƒ¢#SbÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢c"ÂGfæ6Uv–GFƒ¢3cbÒÂc¢²…öÖ–ã¢c‚Â…öÖƒ¢SrÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢c‚ÂGfæ6Uv–GFƒ¢#SÒÂs¢²…öÖ–ã¢’Â…öÖƒ¢CcRÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢S“2ÒÂƒ¢²…öÖ–ã¢cBÂ…öÖƒ¢3BÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢Cs’ÒÂ“¢²…öÖ–ã¢“Â…öÖƒ¢3ƒRÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢Sc’ÒÂ£¢²…öÖ–ã¢S‚ãƒC“scCsCƒs332Â…öÖƒ¢ƒcRÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢S‚ÂGfæ6Uv–GFƒ¢#BÒÂ³¢²…öÖ–ã¢SÂ…öÖƒ¢3c"Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢3cbÒÂÃ¢²…öÖ–ã¢SÂ…öÖƒ¢cbÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢3’ÒÂÓ¢²…öÖ–ã¢S"Â…öÖƒ¢SSÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢S"ÂGfæ6Uv–GFƒ¢sbÒÂã¢²…öÖ–ã¢SbÂ…öÖƒ¢3Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢SbÂGfæ6Uv–GFƒ¢Cs’ÒÂó¢²…öÖ–ã¢“’Â…öÖƒ¢SÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢C“"Â†¢SrÂÆVgE6–FT&V&–æs¢“’ÂGfæ6Uv–GFƒ¢S“2ÒÂ¢²…öÖ–ã¢S‚Â…öÖƒ¢#srÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢S‚ÂGfæ6Uv–GFƒ¢3cbÒÂ¢²…öÖ–ã¢ƒ‚Â…öÖƒ¢S‚Â•öÖ–ã¢ÓBÂ•öÖƒ¢C“"Â†¢cbÂÆVgE6–FT&V&–æs¢ƒ‚ÂGfæ6Uv–GFƒ¢S“2ÒÂ#¢²…öÖ–ã¢cÂ…öÖƒ¢CS2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢Cs’ÒÂ3¢²…öÖ–ã¢“"Â…öÖƒ¢#S’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢“"ÂGfæ6Uv–GFƒ¢3cbÒÂC¢²…öÖ–ã¢C‚Â…öÖƒ¢#Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢C‚ÂGfæ6Uv–GFƒ¢#SÒÂS¢²…öÖ–ã¢cÂ…öÖƒ¢3BÂ•öÖ–ã¢Ó#RÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢Cs’ÒÂc¢²…öÖ–ã¢’Â…öÖƒ¢3SÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢3cbÒÂs¢²…öÖ–ã¢#RÂ…öÖƒ¢“Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢“32ÒÂƒ¢²…öÖ–ã¢’Â…öÖƒ¢3S2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢3cbÒÂ“¢²…öÖ–ã¢bÂ…öÖƒ¢3SÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢bÂGfæ6Uv–GFƒ¢3cbÒÂ£¢²…öÖ–ã¢CÂ…öÖƒ¢#Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢#SÒÂ%²#¢²…öÖ–ã¢3’Â…öÖƒ¢S3bÂ•öÖ–ã¢ÓCrÂ•öÖƒ¢CcbÂ†¢ƒs2ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢Sc’ÒÂ%ÅÂ#¢²…öÖ–ã¢Â…öÖƒ¢Sc’Â•öÖ–ã¢Ó#RÂ•öÖƒ¢C“Â†¢SbÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢Sc’ÒÂ%Ò#¢²…öÖ–ã¢3’Â…öÖƒ¢C3bÂ•öÖ–ã¢ÓCrÂ•öÖƒ¢CcbÂ†¢ƒs2ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢Sc’ÒÂ%â#¢²…öÖ–ã¢SBÂ…öÖƒ¢“rÂ•öÖ–ã¢c“Â•öÖƒ¢C“Â†¢ƒÂÆVgE6–FT&V&–æs¢SBÂGfæ6Uv–GFƒ¢“cÒÂó¢²…öÖ–ã¢Ó3Â…öÖƒ¢c"Â•öÖ–ã¢ÓCrÂ•öÖƒ¢Ó#srÂ†¢3ÂÆVgE6–FT&V&–æs¢Ó3ÂGfæ6Uv–GFƒ¢3’ÒÂ&#¢²…öÖ–ã¢ƒ’Â…öÖƒ¢CcRÂ•öÖ–ã¢“BÂ•öÖƒ¢CsBÂ†¢#ƒÂÆVgE6–FT&V&–æs¢ƒ’ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ¢²…öÖ–ã¢sBÂ…öÖƒ¢S"Â•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢sBÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢3BÂ…öÖƒ¢SRÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢3BÂGfæ6Uv–GFƒ¢3’ÒÂ3¢²…öÖ–ã¢ƒÂ…öÖƒ¢RÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢#BÒÂC¢²…öÖ–ã¢sÂ…öÖƒ¢““Â•öÖ–ã¢Ó#BÂ•öÖƒ¢CcbÂ†¢C“ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢3’ÒÂS¢²…öÖ–ã¢sRÂ…öÖƒ¢SBÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢sRÂGfæ6Uv–GFƒ¢3’ÒÂc¢²…öÖ–ã¢’Â…öÖƒ¢cCÂ•öÖ–ã¢Â•öÖƒ¢C“Â†¢C“ÂÆVgE6–FT&V&–æs¢’ÂGfæ6Uv–GFƒ¢Sc’ÒÂs¢²…öÖ–ã¢cbÂ…öÖƒ¢"Â•öÖ–ã¢ÓC3Â•öÖƒ¢ƒbÂ†¢SrÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢3’ÒÂƒ¢²…öÖ–ã¢3RÂ…öÖƒ¢S2Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3’ÒÂ“¢²…öÖ–ã¢3bÂ…öÖƒ¢3bÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢3bÂGfæ6Uv–GFƒ¢CSRÒÂ£¢²…öÖ–ã¢Ó“BÂ…öÖƒ¢3BÂ•öÖ–ã¢ÓC3Â•öÖƒ¢CcbÂ†¢ƒ“rÂÆVgE6–FT&V&–æs¢Ó“BÂGfæ6Uv–GFƒ¢CSRÒÂ³¢²…öÖ–ã¢3bÂ…öÖƒ¢bÂ•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢3bÂGfæ6Uv–GFƒ¢#BÒÂÃ¢²…öÖ–ã¢3Â…öÖƒ¢3Â•öÖ–ã¢Â•öÖƒ¢CcbÂ†¢CcbÂÆVgE6–FT&V&–æs¢3ÂGfæ6Uv–GFƒ¢CSRÒÂÓ¢²…öÖ–ã¢3RÂ…öÖƒ¢SsBÂ•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢sbÒÂã¢²…öÖ–ã¢3RÂ…öÖƒ¢““‚Â•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3’ÒÂó¢²…öÖ–ã¢c‚Â…öÖƒ¢c2Â•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢c‚ÂGfæ6Uv–GFƒ¢3’ÒÂ¢²…öÖ–ã¢3RÂ…öÖƒ¢SrÂ•öÖ–ã¢ÓCrÂ•öÖƒ¢ƒbÂ†¢C“2ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3’ÒÂ¢²…öÖ–ã¢s"Â…öÖƒ¢““"Â•öÖ–ã¢ÓCrÂ•öÖƒ¢ƒbÂ†¢C“2ÂÆVgE6–FT&V&–æs¢s"ÂGfæ6Uv–GFƒ¢3’ÒÂ#¢²…öÖ–ã¢32Â…öÖƒ¢sÂ•öÖ–ã¢Â•öÖƒ¢ƒbÂ†¢ƒbÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ3¢²…öÖ–ã¢c2Â…öÖƒ¢“CRÂ•öÖ–ã¢Ó#BÂ•öÖƒ¢ƒbÂ†¢ÂÆVgE6–FT&V&–æs¢c2ÂGfæ6Uv–GFƒ¢#BÒÂC¢²…öÖ–ã¢3bÂ…öÖƒ¢SSBÂ•öÖ–ã¢ÓBÂ•öÖƒ¢C32Â†¢CCrÂÆVgE6–FT&V&–æs¢3bÂGfæ6Uv–GFƒ¢Sc’ÒÂS¢²…öÖ–ã¢3Â…öÖƒ¢““"Â•öÖ–ã¢Ó#BÂ•öÖƒ¢c"Â†¢ƒbÂÆVgE6–FT&V&–æs¢3ÂGfæ6Uv–GFƒ¢3’ÒÂc¢²…öÖ–ã¢#bÂ…öÖƒ¢S2Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢#bÂGfæ6Uv–GFƒ¢#BÒÂs¢²…öÖ–ã¢bÂ…öÖƒ¢Cc2Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢bÂGfæ6Uv–GFƒ¢Cs’ÒÂƒ¢²…öÖ–ã¢RÂ…öÖƒ¢’Â•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢#BÒÂ“¢²…öÖ–ã¢32Â…öÖƒ¢bÂ•öÖ–ã¢ÓC3Â•öÖƒ¢c"Â†¢C“2ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢#BÒÂ£¢²…öÖ–ã¢CÂ…öÖƒ¢“ƒÂ•öÖ–ã¢Â•öÖƒ¢c"Â†¢c"ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢#BÒÂ'²#¢²…öÖ–ã¢SrÂ…öÖƒ¢c3bÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢cƒBÒÂ'Â#¢²…öÖ–ã¢ƒ‚Â…öÖƒ¢3CRÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢ƒ‚ÂGfæ6Uv–GFƒ¢S3"ÒÂ'Ò#¢²…öÖ–ã¢CrÂ…öÖƒ¢c#bÂ•öÖ–ã¢ÓC3Â•öÖƒ¢C“Â†¢“#"ÂÆVgE6–FT&V&–æs¢CrÂGfæ6Uv–GFƒ¢cƒBÒÂ'â#¢²…öÖ–ã¢ƒrÂ…öÖƒ¢Â•öÖ–ã¢SSrÂ•öÖƒ¢ƒƒRÂ†¢3#‚ÂÆVgE6–FT&V&–æs¢ƒrÂGfæ6Uv–GFƒ¢“bÒÒÂföçDfÖ–Ç“¢'6ç2×6W&–b"Â&W6öÇWF–öã¢#C‚ÂvVæW&FVDöã¢###ÓÓ…Cƒ£Cƒ£ãƒ#5¢"ÒÂ†’Ò²6×VfÃ¢fÇ6RÂæÖS¢%4U$”b"Â76–æs¢SÂFW67&—F–öã¢$'V–ÇBÖ–â6W&–bföçB"Â&öÆC¢G'VRÂ—FÆ–3¢G'VRÂÖöæ÷76VC¢fÇ6RÂ6W&–g3¢G'VRÂvÇ—‡3¢²¢²…öÖ–ã¢C’Â…öÖƒ¢“sRÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢#BÒÂ¢²…öÖ–ã¢##rÂ…öÖƒ¢ƒÂ•öÖ–ã¢Â•öÖƒ¢3ƒ2Â†¢3ƒ2ÂÆVgE6–FT&V&–æs¢##rÂGfæ6Uv–GFƒ¢#BÒÂ#¢²…öÖ–ã¢cÂ…öÖƒ¢“cRÂ•öÖ–ã¢Â•öÖƒ¢3ƒ2Â†¢3ƒ2ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢#BÒÂ3¢²…öÖ–ã¢ƒ‚Â…öÖƒ¢ƒƒ2Â•öÖ–ã¢Ó#rÂ•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢ƒ‚ÂGfæ6Uv–GFƒ¢#BÒÂC¢²…öÖ–ã¢#RÂ…öÖƒ¢“crÂ•öÖ–ã¢Â•öÖƒ¢3ƒBÂ†¢3ƒBÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢#BÒÂS¢²…öÖ–ã¢cbÂ…öÖƒ¢ƒ“‚Â•öÖ–ã¢Ó#rÂ•öÖƒ¢C’Â†¢C3bÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢#BÒÂc¢²…öÖ–ã¢sÂ…öÖƒ¢“S‚Â•öÖ–ã¢Ó#rÂ•öÖƒ¢CÂ†¢C#‚ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢#BÒÂs¢²…öÖ–ã¢CÂ…öÖƒ¢“#Â•öÖ–ã¢ÓbÂ•öÖƒ¢3SbÂ†¢3s"ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢#BÒÂƒ¢²…öÖ–ã¢RÂ…öÖƒ¢“Â•öÖ–ã¢Ó#rÂ•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢#BÒÂ“¢²…öÖ–ã¢cÂ…öÖƒ¢“CÂ•öÖ–ã¢ÓCÂ•öÖƒ¢3ƒ2Â†¢C#BÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢#BÒÂ"#¢²…öÖ–ã¢Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢Â†¢ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢S"ÒÂ"#¢²…öÖ–ã¢#cbÂ…öÖƒ¢Cƒ‚Â•öÖ–ã¢Ó#"Â•öÖƒ¢3ƒ2Â†¢CRÂÆVgE6–FT&V&–æs¢#cbÂGfæ6Uv–GFƒ¢cƒ"ÒÂr"s¢²…öÖ–ã¢Srã##“s#cSRÂ…öÖƒ¢cs‚ã#S#CSscsrÂ•öÖ–ã¢ƒƒÂ•öÖƒ¢3ƒRÂ†¢SBÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢ƒ3bÒÂ"2#¢²…öÖ–ã¢Â…öÖƒ¢bÂ•öÖ–ã¢ÓÂ•öÖƒ¢3SbÂ†¢3SrÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#BÒÂC¢²…öÖ–ã¢“Â…öÖƒ¢“3bÂ•öÖ–ã¢ÓƒÂ•öÖƒ¢C“"Â†¢cs"ÂÆVgE6–FT&V&–æs¢“ÂGfæ6Uv–GFƒ¢#BÒÂ"R#¢²…öÖ–ã¢#RÂ…öÖƒ¢SƒÂ•öÖ–ã¢Ó3Â•öÖƒ¢3ƒ‚Â†¢C‚ÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢sbÒÂ"b#¢²…öÖ–ã¢ƒbÂ…öÖƒ¢S3bÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢ƒbÂGfæ6Uv–GFƒ¢S“2ÒÂ"r#¢²…öÖ–ã¢“rã##“s#cSC‚Â…öÖƒ¢#s2ã#S#CSscsrÂ•öÖ–ã¢ƒƒÂ•öÖƒ¢3ƒRÂ†¢SBÂÆVgE6–FT&V&–æs¢“rÂGfæ6Uv–GFƒ¢3c’ÒÂ"‚#¢²…öÖ–ã¢“‚Â…öÖƒ¢c#2Â•öÖ–ã¢Ó3c2Â•öÖƒ¢3ƒ2Â†¢sCbÂÆVgE6–FT&V&–æs¢“‚ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"’#¢²…öÖ–ã¢S’Â…öÖƒ¢SƒBÂ•öÖ–ã¢Ó3c2Â•öÖƒ¢3ƒ2Â†¢sCbÂÆVgE6–FT&V&–æs¢S’ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"¢#¢²…öÖ–ã¢3rã“csƒS###“ƒ“2Â…öÖƒ¢ƒƒbã3“#CsssƒÂ•öÖ–ã¢SC2Â•öÖƒ¢3ƒ2Â†¢ƒCÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢#BÒÂ"²#¢²…öÖ–ã¢cÂ…öÖƒ¢“2Â•öÖ–ã¢"Â•öÖƒ¢3BÂ†¢3"ÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢SRÒÂ"Â#¢²…öÖ–ã¢RÂ…öÖƒ¢3“’Â•öÖ–ã¢Ó#“Â•öÖƒ¢#‚Â†¢C“’ÂÆVgE6–FT&V&–æs¢RÂGfæ6Uv–GFƒ¢S"ÒÂ"Ò#¢²…öÖ–ã¢ƒÂ…öÖƒ¢SƒBÂ•öÖ–ã¢3“bÂ•öÖƒ¢S#RÂ†¢#’ÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢cƒ"ÒÂ"â#¢²…öÖ–ã¢C2Â…öÖƒ¢3sÂ•öÖ–ã¢Ó#"Â•öÖƒ¢#RÂ†¢##rÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢S"ÒÂ"ò#¢²…öÖ–ã¢ÓrÂ…öÖƒ¢SƒbÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢ÓrÂGfæ6Uv–GFƒ¢Sc’ÒÂ#¢#¢²…öÖ–ã¢cbÂ…öÖƒ¢3“BÂ•öÖ–ã¢Ó#"Â•öÖƒ¢“C2Â†¢“cRÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢Sc’ÒÂ#²#¢²…öÖ–ã¢cBÂ…öÖƒ¢CC‚Â•öÖ–ã¢Ó#“Â•öÖƒ¢“C2Â†¢#32ÂÆVgE6–FT&V&–æs¢cBÂGfæ6Uv–GFƒ¢Sc’ÒÂ#Â#¢²…öÖ–ã¢SrÂ…öÖƒ¢“‚Â•öÖ–ã¢ÓRÂ•öÖƒ¢SÂ†¢cbÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢SRÒÂ#Ò#¢²…öÖ–ã¢cÂ…öÖƒ¢“2Â•öÖ–ã¢#CbÂ•öÖƒ¢s“Â†¢SCRÂÆVgE6–FT&V&–æs¢cÂGfæ6Uv–GFƒ¢SRÒÂ#â#¢²…öÖ–ã¢SrÂ…öÖƒ¢“‚Â•öÖ–ã¢ÓRÂ•öÖƒ¢SÂ†¢cbÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢SRÒÂ#ò#¢²…öÖ–ã¢3’Â…öÖƒ¢ƒC‚Â•öÖ–ã¢ÓRÂ•öÖƒ¢3ƒ2Â†¢3“‚ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢“’ÒÂ$#¢²…öÖ–ã¢#3‚Â…öÖƒ¢cSrÂ•öÖ–ã¢Ó#’Â•öÖƒ¢3ƒbÂ†¢CRÂÆVgE6–FT&V&–æs¢#3‚ÂGfæ6Uv–GFƒ¢ƒƒbÒÂ¢²…öÖ–ã¢3Â…öÖƒ¢CCRÂ•öÖ–ã¢Â•öÖƒ¢3ƒÂ†¢3ƒÂÆVgE6–FT&V&–æs¢3ÂGfæ6Uv–GFƒ¢Cs’ÒÂ#¢²…öÖ–ã¢3RÂ…öÖƒ¢#BÂ•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3cbÒÂ3¢²…öÖ–ã¢SrÂ…öÖƒ¢#“bÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢3cbÒÂC¢²…öÖ–ã¢32Â…öÖƒ¢C2Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢Cs’ÒÂS¢²…öÖ–ã¢#RÂ…öÖƒ¢##"Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢#SÒÂc¢²…öÖ–ã¢#RÂ…öÖƒ¢’Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢3’ÒÂs¢²…öÖ–ã¢cbÂ…öÖƒ¢CS"Â•öÖ–ã¢Ó#‚Â•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢cbÂGfæ6Uv–GFƒ¢Cs’ÒÂƒ¢²…öÖ–ã¢3’Â…öÖƒ¢C3‚Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢Cs’ÒÂ“¢²…öÖ–ã¢3rÂ…öÖƒ¢cC"Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢cƒ"ÒÂ£¢²…öÖ–ã¢#Â…öÖƒ¢sS‚Â•öÖ–ã¢Ó#‚Â•öÖƒ¢3SbÂ†¢3ƒBÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢s“rÒÂ³¢²…öÖ–ã¢sÂ…öÖƒ¢Cs’Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢Cs’ÒÂÃ¢²…öÖ–ã¢#RÂ…öÖƒ¢##BÂ•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢#SÒÂÓ¢²…öÖ–ã¢#RÂ…öÖƒ¢sc‚Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢ƒ#ÒÂã¢²…öÖ–ã¢#RÂ…öÖƒ¢CSÂ•öÖ–ã¢Ó#"Â•öÖƒ¢3SbÂ†¢3s‚ÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢Cs’ÒÂó¢²…öÖ–ã¢sÂ…öÖƒ¢C’Â•öÖ–ã¢Ó#‚Â•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢Cs’ÒÂ¢²…öÖ–ã¢32Â…öÖƒ¢Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢3’ÒÂ¢²…öÖ–ã¢sÂ…öÖƒ¢C3RÂ•öÖ–ã¢Ó3cBã#ƒSsSƒƒs#““bÂ•öÖƒ¢3ƒ2Â†¢sCrã#ƒSsSƒƒs#"ÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢Cs’ÒÂ#¢²…öÖ–ã¢3RÂ…öÖƒ¢3CrÂ•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢3cbÒÂ3¢²…öÖ–ã¢ƒbÂ…öÖƒ¢bÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢ƒbÂGfæ6Uv–GFƒ¢3’ÒÂC¢²…öÖ–ã¢3RÂ…öÖƒ¢#BÂ•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢#SÒÂS¢²…öÖ–ã¢#’Â…öÖƒ¢CCBÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢3SbÂ†¢3ƒBÂÆVgE6–FT&V&–æs¢#’ÂGfæ6Uv–GFƒ¢Cs’ÒÂc¢²…öÖ–ã¢32Â…öÖƒ¢C#‚Â•öÖ–ã¢Ó#"Â•öÖƒ¢3SbÂ†¢3s‚ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢Cs’ÒÂs¢²…öÖ–ã¢Â…öÖƒ¢“bÂ•öÖ–ã¢Ó#"Â•öÖƒ¢3SbÂ†¢3s‚ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢“32ÒÂƒ¢²…öÖ–ã¢#Â…öÖƒ¢CC’Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢#ÂGfæ6Uv–GFƒ¢Cs’ÒÂ“¢²…öÖ–ã¢CRÂ…öÖƒ¢CCÂ•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢CRÂGfæ6Uv–GFƒ¢Cs’ÒÂ£¢²…öÖ–ã¢‚Â…öÖƒ¢##"Â•öÖ–ã¢Â•öÖƒ¢3SbÂ†¢3SbÂÆVgE6–FT&V&–æs¢‚ÂGfæ6Uv–GFƒ¢#SÒÂ%²#¢²…öÖ–ã¢ƒÂ…öÖƒ¢c"Â•öÖ–ã¢Ó3’Â•öÖƒ¢3SRÂ†¢csBÂÆVgE6–FT&V&–æs¢ƒÂGfæ6Uv–GFƒ¢cƒ"ÒÂ%ÅÂ#¢²…öÖ–ã¢ÓrÂ…öÖƒ¢SƒbÂ•öÖ–ã¢Ó#rÂ•öÖƒ¢3ƒ2Â†¢CÂÆVgE6–FT&V&–æs¢ÓrÂGfæ6Uv–GFƒ¢Sc’ÒÂ%Ò#¢²…öÖ–ã¢sÂ…öÖƒ¢S"Â•öÖ–ã¢Ó3’Â•öÖƒ¢3SRÂ†¢csBÂÆVgE6–FT&V&–æs¢sÂGfæ6Uv–GFƒ¢cƒ"ÒÂ%â#¢²…öÖ–ã¢C’Â…öÖƒ¢“BÂ•öÖ–ã¢c‚Â•öÖƒ¢3SRÂ†¢sCrÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢“cÒÂó¢²…öÖ–ã¢Â…öÖƒ¢#BÂ•öÖ–ã¢Ó#SRÂ•öÖƒ¢ÓS2Â†¢"ÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#BÒÂ&#¢²…öÖ–ã¢3’Â…öÖƒ¢C“’Â•öÖ–ã¢3rÂ•öÖƒ¢3“"ãS“ƒ3c3“sC‚Â†¢3SRãS“ƒ3c3“sCƒBÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ¢²…öÖ–ã¢sbÂ…öÖƒ¢“RÂ•öÖ–ã¢Ó#Â•öÖƒ¢“C"Â†¢“c"ÂÆVgE6–FT&V&–æs¢sbÂGfæ6Uv–GFƒ¢“’ÒÂ#¢²…öÖ–ã¢bÂ…öÖƒ¢“S‚Â•öÖ–ã¢Ó#Â•öÖƒ¢3“’Â†¢C’ÂÆVgE6–FT&V&–æs¢bÂGfæ6Uv–GFƒ¢#BÒÂ3¢²…öÖ–ã¢SÂ…öÖƒ¢ƒC2Â•öÖ–ã¢Ó#Â•öÖƒ¢“C"Â†¢“c"ÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢“’ÒÂC¢²…öÖ–ã¢SRÂ…öÖƒ¢bÂ•öÖ–ã¢Ó#Â•öÖƒ¢3“’Â†¢C’ÂÆVgE6–FT&V&–æs¢SRÂGfæ6Uv–GFƒ¢#BÒÂS¢²…öÖ–ã¢SÂ…öÖƒ¢ƒc‚Â•öÖ–ã¢Ó#Â•öÖƒ¢“C"Â†¢“c"ÂÆVgE6–FT&V&–æs¢SÂGfæ6Uv–GFƒ¢“’ÒÂc¢²…öÖ–ã¢CÂ…öÖƒ¢sƒ2Â•öÖ–ã¢Â•öÖƒ¢3“’Â†¢3“’ÂÆVgE6–FT&V&–æs¢CÂGfæ6Uv–GFƒ¢cƒ"ÒÂs¢²…öÖ–ã¢SrÂ…öÖƒ¢“c2Â•öÖ–ã¢ÓCCbÂ•öÖƒ¢“C"Â†¢3ƒ‚ÂÆVgE6–FT&V&–æs¢SrÂGfæ6Uv–GFƒ¢#BÒÂƒ¢²…öÖ–ã¢‚Â…öÖƒ¢““rÂ•öÖ–ã¢Â•öÖƒ¢3“’Â†¢3“’ÂÆVgE6–FT&V&–æs¢‚ÂGfæ6Uv–GFƒ¢#BÒÂ“¢²…öÖ–ã¢32Â…öÖƒ¢SbÂ•öÖ–ã¢Â•öÖƒ¢3“’Â†¢3“’ÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢Sc’ÒÂ£¢²…öÖ–ã¢ÓC"Â…öÖƒ¢3“rÂ•öÖ–ã¢ÓCCbÂ•öÖƒ¢3“’Â†¢ƒCRÂÆVgE6–FT&V&–æs¢ÓC"ÂGfæ6Uv–GFƒ¢Sc’ÒÂ³¢²…öÖ–ã¢BÂ…öÖƒ¢#’Â•öÖ–ã¢Â•öÖƒ¢3“’Â†¢3“’ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢#BÒÂÃ¢²…öÖ–ã¢3’Â…öÖƒ¢S#2Â•öÖ–ã¢Â•öÖƒ¢3“’Â†¢3“’ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢Sc’ÒÂÓ¢²…öÖ–ã¢32Â…öÖƒ¢SƒrÂ•öÖ–ã¢Â•öÖƒ¢“CBÂ†¢“CBÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢S“2ÒÂã¢²…öÖ–ã¢32Â…öÖƒ¢““2Â•öÖ–ã¢Â•öÖƒ¢“CBÂ†¢“CBÂÆVgE6–FT&V&–æs¢32ÂGfæ6Uv–GFƒ¢#BÒÂó¢²…öÖ–ã¢S’Â…öÖƒ¢“c2Â•öÖ–ã¢Ó#Â•öÖƒ¢“C"Â†¢“c"ÂÆVgE6–FT&V&–æs¢S’ÂGfæ6Uv–GFƒ¢#BÒÂ¢²…öÖ–ã¢Â…öÖƒ¢“cBÂ•öÖ–ã¢ÓCC2Â•öÖƒ¢“CBÂ†¢3ƒrÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢#BÒÂ¢²…öÖ–ã¢C’Â…öÖƒ¢““’Â•öÖ–ã¢ÓCC2Â•öÖƒ¢“C"ã3S3sc“#sRÂ†¢3ƒRã3S3sc“#sRÂÆVgE6–FT&V&–æs¢C’ÂGfæ6Uv–GFƒ¢#BÒÂ#¢²…öÖ–ã¢Â…öÖƒ¢cƒRÂ•öÖ–ã¢Â•öÖƒ¢“CBÂ†¢“CBÂÆVgE6–FT&V&–æs¢ÂGfæ6Uv–GFƒ¢cƒ"ÒÂ3¢²…öÖ–ã¢BÂ…öÖƒ¢s2Â•öÖ–ã¢Ó#Â•öÖƒ¢“C"ã#c3cƒCSS"Â†¢“c"ã#c3cƒCSS"ÂÆVgE6–FT&V&–æs¢BÂGfæ6Uv–GFƒ¢s“rÒÂC¢²…öÖ–ã¢#rÂ…öÖƒ¢Ss"Â•öÖ–ã¢Ó‚Â•öÖƒ¢ƒbÂ†¢#BÂÆVgE6–FT&V&–æs¢#rÂGfæ6Uv–GFƒ¢Sc’ÒÂS¢²…öÖ–ã¢‚Â…öÖƒ¢“ƒÂ•öÖ–ã¢Ó#Â•öÖƒ¢“#Â†¢“C"ÂÆVgE6–FT&V&–æs¢‚ÂGfæ6Uv–GFƒ¢#BÒÂc¢²…öÖ–ã¢3’Â…öÖƒ¢“sbÂ•öÖ–ã¢Ó#‚Â•öÖƒ¢“#Â†¢“C’ÂÆVgE6–FT&V&–æs¢3’ÂGfæ6Uv–GFƒ¢#BÒÂs¢²…öÖ–ã¢C2Â…öÖƒ¢C#2Â•öÖ–ã¢Ó#‚Â•öÖƒ¢“#Â†¢“C’ÂÆVgE6–FT&V&–æs¢C2ÂGfæ6Uv–GFƒ¢Cs’ÒÂƒ¢²…öÖ–ã¢3RÂ…öÖƒ¢“ƒ’Â•öÖ–ã¢Â•öÖƒ¢“#Â†¢“#ÂÆVgE6–FT&V&–æs¢3RÂGfæ6Uv–GFƒ¢#BÒÂ“¢²…öÖ–ã¢#’Â…öÖƒ¢“sbÂ•öÖ–ã¢ÓCCRÂ•öÖƒ¢“#Â†¢3cbÂÆVgE6–FT&V&–æs¢#’ÂGfæ6Uv–GFƒ¢#BÒÂ£¢²…öÖ–ã¢SRÂ…öÖƒ¢ƒSRÂ•öÖ–ã¢Â•öÖƒ¢“#Â†¢“#ÂÆVgE6–FT&V&–æs¢SRÂGfæ6Uv–GFƒ¢“’ÒÂ'²#¢²…öÖ–ã¢#RÂ…öÖƒ¢srÂ•öÖ–ã¢Ó3srÂ•öÖƒ¢3“rÂ†¢ssBÂÆVgE6–FT&V&–æs¢#RÂGfæ6Uv–GFƒ¢“ƒ2ÒÂ'Â#¢²…öÖ–ã¢3rÂ…öÖƒ¢#s2Â•öÖ–ã¢ÓS"Â•öÖƒ¢S3RÂ†¢#CrÂÆVgE6–FT&V&–æs¢3rÂGfæ6Uv–GFƒ¢CÒÂ'Ò#¢²…öÖ–ã¢#cbÂ…öÖƒ¢ss‚Â•öÖ–ã¢Ó3srÂ•öÖƒ¢3“rÂ†¢ssBÂÆVgE6–FT&V&–æs¢#cbÂGfæ6Uv–GFƒ¢“ƒ2ÒÂ'â#¢²…öÖ–ã¢ƒ"Â…öÖƒ¢#‚Â•öÖ–ã¢3ƒÂ•öÖƒ¢ccbÂ†¢#ƒbÂÆVgE6–FT&V&–æs¢ƒ"ÂGfæ6Uv–GFƒ¢‚ÒÒÂföçDfÖ–Ç“¢'6W&–b"Â&W6öÇWF–öã¢#C‚ÂvVæW&FVDöã¢###ÓÓ…C“£3£"ãSE¢"Ó°¢6Æ72–’°¢7FF–26÷'DæEVæ—VR‡C"ÂS"Â“"’°¢–b‡C"æÆVæwF‚â’°¢6öç7B#"ÒµÓ°¢ÆWB#°¢C"ç6÷'B†S"“°¢f÷"†ÆWBS2Ò²S2ÂC"æÆVæwFƒ²²¶S2’ÓÒS2bb“"‡C%¶S5ÒÂ"’ÇÂ#"çW6‚‡C%¶S5Ò’Â"ÒC%¶S5Ó°¢&WGW&â##°¢Ð¢&WGW&âC#°¢Ð¢7FF–26öçF–ç2‡C"ÂS"’°¢ÆWB“"ÒC"æÆVæwFƒ°¢f÷"ƒ²“"ÒÓ²’–b‡C%¶“%ÒÓÓÒS"’&WGW&âG'VS°¢&WGW&âfÇ6S°¢Ð¢7FF–2vWD6çf46öçFW‡B‡C"’°¢–b‚C"’F‡&÷ræWrr‚$&D&wVÖVçB"Â$–çfÆ–B6çf26VÆV7F÷#¢"²C"“°¢6öç7BS"ÒFö7VÖVçBævWDVÆVÖVçD'”–B‡C"“°¢–b‚S"ÇÂS"ævWD6öçFW‡B’F‡&÷ræWrr‚%Vç7W÷'FVD'&÷w6W$W'&÷""Â%F†—2'&÷w6W"FöW2æ÷B7W÷'B…DÔÃR6çf2"“°¢&WGW&âS"ævWD6öçFW‡B‚#&B"“°¢Ð¢7FF–2&Væ6†Ö&²‡C"ÂS"’°¢6öç7B“"Ò‚ò¢õõU$Uõò¢òæWrFFR‚’’ævWEF–ÖR‚“°¢S"‚“°¢R‡C"Â‚ò¢õõU$Uõò¢òæWrFFR‚’’ævWEF–ÖR‚’Ò“"²&×2"“°¢Ð¢7FF–27F6µG&6R‚’°¢&WGW&âæWrW'&÷"‚’ç7F6³°¢Ð¢Ð¢&WGW&â–’äfÆ÷rÒ¶’ÂbæÆöB‚$'&gW&"Â’Âæ’’ÂbæÆöB‚$vöçf–ÆÆR"ÂÖ’Âæ’’ÂgVæ7F–öâ‚’°¢6öç7BC"Ò¥4ôâç'6R„¥4ôâç7G&–æv–g’„æ’’’ÂS"ÒC"æ6†÷&E7–Ö&öÃ°¢S"bb†S"ævÇ—‡2ÒÆ’’ÂbæÆöB‚%WFÇVÖ"Â&’ÂC"“°¢Ò‚’ÂbæÆöB‚$7W7FöÒ"Âf’Âæ’’ÂbæÆöB‚$ÆVÆæB"Âö’Âæ’’Â¶’ç6WD×W6–4föçB‚$'&gW&"Â$vöçf–ÆÆR"Â$7W7FöÒ"’ÂgVæ7F–öâ‚’°¢°¢6öç7BC"Ò–’Â²föçDfÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÒÒC#°¢bæÆöB†S"ÂC"“°¢6öç7B"Ò$#°¢'Bç&Vv—7FW$–æfò‡²fÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÂÖ…6—¦TvÇ—ƒ¢"ÂÖöæ÷76VC¢fÇ6RÂ&öÆC¢G'VRÂ—FÆ–3¢fÇ6RÂ7WW'67&—Döfg6WC¢ãcbÂ7V'67&—Döfg6WC¢ãcbÂ6W&–g3¢fÇ6RÂFW67&—F–öã¢$vVæW&–24å2föçB"Ò“°¢Ð¢°¢6öç7BC"Òv’Â²föçDfÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÒÒC#°¢bæÆöB†S"ÂC"“°¢6öç7B"Ò$#°¢'Bç&Vv—7FW$–æfò‡²fÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÂÖ…6—¦TvÇ—ƒ¢"ÂÖöæ÷76VC¢fÇ6RÂ&öÆC¢fÇ6RÂ—FÆ–3¢fÇ6RÂ7WW'67&—Döfg6WC¢ãcbÂ7V'67&—Döfg6WC¢ãcbÂ6W&–g3¢fÇ6RÂFW67&—F–öã¢$vVæW&–24å2föçB"Ò“°¢Ð¢°¢6öç7BC"Ò†’Â²föçDfÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÒÒC#°¢bæÆöB†S"ÂC"“°¢6öç7B"Ò$#°¢'Bç&Vv—7FW$–æfò‡²fÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÂÖ…6—¦TvÇ—ƒ¢"ÂÖöæ÷76VC¢fÇ6RÂ&öÆC¢fÇ6RÂ—FÆ–3¢fÇ6RÂ7WW'67&—Döfg6WC¢ãcbÂ7V'67&—Döfg6WC¢ãcbÂ6W&–g3¢G'VRÂFW67&—F–öã¢$vVæW&–24U$”bföçB"Ò“°¢Ð¢°¢6öç7BC"ÒV’Â²föçDfÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÒÒC#°¢bæÆöB†S"ÂC"“°¢6öç7B"Ò&"#°¢'Bç&Vv—7FW$–æfò‡²fÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÂÖ…6—¦TvÇ—ƒ¢"ÂÖöæ÷76VC¢fÇ6RÂ&öÆC¢fÇ6RÂ—FÆ–3¢fÇ6RÂ7WW'67&—Döfg6WC¢ãcbÂ7V'67&—Döfg6WC¢ãcbÂ6W&–g3¢G'VRÂFW67&—F–öã¢%FW‡BföçBFò—"v—F‚F†R'&gW&òvöçf–ÆÆR×W6–2föçG2â"Ò“°¢Ð¢°¢6öç7BC"Òv’Â²föçDfÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÒÒC#°¢bæÆöB†S"ÂC"“°¢6öç7B"Ò&"#°¢'Bç&Vv—7FW$–æfò‡²fÖ–Ç“¢S"Â&W6öÇWF–öã¢“"ÂvÇ—‡3¢#"ÂÖ…6—¦TvÇ—ƒ¢"ÂÖöæ÷76VC¢fÇ6RÂ&öÆC¢fÇ6RÂ—FÆ–3¢fÇ6RÂ7WW'67&—Döfg6WC¢ãcbÂ7V'67&—Döfg6WC¢ãcbÂ6W&–g3¢fÇ6RÂFW67&—F–öã¢%FW‡BföçBFò—"v—F‚F†RWFÇVÖ×W6–2föçBâ"Ò“°¢Ð¢Ò‚’ÂRÒRæFVfVÇC°§Ò’‚’“°¢ò¢¢¢fW„fÆ÷rBã"ãR##BÓRÓ%Cƒ£Sc£#2ãc“¢V#V#C6#ƒ#SF63V6ccv“ssƒ#3“3sV#C†V@¢¢6÷—&–v‡B†2’#Öö†—B×WF†ææ6†WVF—&ÆÖö†—D×WF†æææ6öÓà¢¢‡GG3¢ò÷wwrçfW†fÆ÷ræ6öÒ‡GG3¢òöv—F‡V"æ6öÒó†fR÷fW†fÆ÷p¢¢ð