/*! For license information please see main.c1c87805.js.LICENSE.txt */ ! function() {
    var e = {
            757: function(e, t, n) {
                e.exports = n(727)
            },
            496: function(e) {
                var t = function() {
                    var e = "undefined" !== typeof document && document.currentScript ? document.currentScript.src : void 0;
                    return function(t) {
                        function n() {
                            return I.buffer != Y && ve(I.buffer), X
                        }

                        function r() {
                            return I.buffer != Y && ve(I.buffer), K
                        }

                        function o() {
                            return I.buffer != Y && ve(I.buffer), Z
                        }

                        function a() {
                            return I.buffer != Y && ve(I.buffer), J
                        }

                        function i() {
                            return I.buffer != Y && ve(I.buffer), ee
                        }

                        function u() {
                            return I.buffer != Y && ve(I.buffer), te
                        }

                        function l() {
                            return I.buffer != Y && ve(I.buffer), ne
                        }

                        function c() {
                            return I.buffer != Y && ve(I.buffer), ae
                        }
                        var s, f, d = "undefined" != typeof(t = t || {}) ? t : {};
                        d.ready = new Promise((function(e, t) {
                            s = e, f = t
                        }));
                        var p, h, m, v = Object.assign({}, d),
                            g = [],
                            y = "./this.program",
                            b = function(e, t) {
                                throw t
                            },
                            w = "object" == typeof window,
                            _ = "function" == typeof importScripts,
                            k = "object" == typeof process && "object" == typeof process.versions && "string" == typeof process.versions.node,
                            E = d.ENVIRONMENT_IS_PTHREAD || !1,
                            x = "";

                        function S(e) {
                            return d.locateFile ? d.locateFile(e, x) : x + e
                        }(w || _) && (_ ? x = self.location.href : "undefined" != typeof document && document.currentScript && (x = document.currentScript.src), e && (x = e), x = 0 !== x.indexOf("blob:") ? x.substr(0, x.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", p = function(e) {
                            var t = new XMLHttpRequest;
                            return t.open("GET", e, !1), t.send(null), t.responseText
                        }, _ && (m = function(e) {
                            var t = new XMLHttpRequest;
                            return t.open("GET", e, !1), t.responseType = "arraybuffer", t.send(null), new Uint8Array(t.response)
                        }), h = function(e, t, n) {
                            var r = new XMLHttpRequest;
                            r.open("GET", e, !0), r.responseType = "arraybuffer", r.onload = function() {
                                200 == r.status || 0 == r.status && r.response ? t(r.response) : n()
                            }, r.onerror = n, r.send(null)
                        });
                        var C = d.print || console.log.bind(console),
                            P = d.printErr || console.warn.bind(console);

                        function L(e) {
                            L.shown || (L.shown = {}), L.shown[e] || (L.shown[e] = 1, P(e))
                        }

                        function T(e, t) {
                            if ("function" == typeof WebAssembly.Function) {
                                for (var n = {
                                        i: "i32",
                                        j: "i64",
                                        f: "f32",
                                        d: "f64"
                                    }, r = {
                                        parameters: [],
                                        results: "v" == t[0] ? [] : [n[t[0]]]
                                    }, o = 1; o < t.length; ++o) r.parameters.push(n[t[o]]);
                                return new WebAssembly.Function(r, e)
                            }
                            var a = [1, 0, 1, 96],
                                i = t.slice(0, 1),
                                u = t.slice(1),
                                l = {
                                    i: 127,
                                    j: 126,
                                    f: 125,
                                    d: 124
                                };
                            a.push(u.length);
                            for (o = 0; o < u.length; ++o) a.push(l[u[o]]);
                            "v" == i ? a.push(0) : a = a.concat([1, l[i]]), a[1] = a.length - 2;
                            var c = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0].concat(a, [2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0])),
                                s = new WebAssembly.Module(c);
                            return new WebAssembly.Instance(s, {
                                e: {
                                    f: e
                                }
                            }).exports.f
                        }
                        Object.assign(d, v), v = null, d.arguments && (g = d.arguments), d.thisProgram && (y = d.thisProgram), d.quit && (b = d.quit);
                        var F, O = [];

                        function A(e, t) {
                            if (F || (F = new WeakMap, function(e, t) {
                                    for (var n = e; n < e + t; n++) {
                                        var r = Ge(n);
                                        r && F.set(r, n)
                                    }
                                }(0, ge.length)), F.has(e)) return F.get(e);
                            var n = function() {
                                if (O.length) return O.pop();
                                try {
                                    ge.grow(1)
                                } catch (P) {
                                    if (!(P instanceof RangeError)) throw P;
                                    throw "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH."
                                }
                                return ge.length - 1
                            }();
                            try {
                                $e(n, e)
                            } catch (P) {
                                if (!(P instanceof TypeError)) throw P;
                                $e(n, T(e, t))
                            }
                            return F.set(e, n), n
                        }
                        var D, N = 0,
                            M = function(e) {
                                N = e
                            };
                        Atomics.load, Atomics.store, Atomics.compareExchange;
                        d.wasmBinary && (D = d.wasmBinary);
                        var I, R, j = d.noExitRuntime || !0;
                        "object" != typeof WebAssembly && De("no native wasm support detected");
                        var B, z = !1;

                        function U(e, t) {
                            e || De(t)
                        }

                        function W(e) {
                            var t = new TextDecoder(e);
                            this.decode = function(e) {
                                return e.buffer instanceof SharedArrayBuffer && (e = new Uint8Array(e)), t.decode.call(t, e)
                            }
                        }
                        var V = "undefined" != typeof TextDecoder ? new W("utf8") : void 0;

                        function Q(e, t, n) {
                            for (var r = t + n, o = t; e[o] && !(o >= r);) ++o;
                            if (o - t > 16 && e.subarray && V) return V.decode(e.subarray(t, o));
                            for (var a = ""; t < o;) {
                                var i = e[t++];
                                if (128 & i) {
                                    var u = 63 & e[t++];
                                    if (192 != (224 & i)) {
                                        var l = 63 & e[t++];
                                        if ((i = 224 == (240 & i) ? (15 & i) << 12 | u << 6 | l : (7 & i) << 18 | u << 12 | l << 6 | 63 & e[t++]) < 65536) a += String.fromCharCode(i);
                                        else {
                                            var c = i - 65536;
                                            a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c)
                                        }
                                    } else a += String.fromCharCode((31 & i) << 6 | u)
                                } else a += String.fromCharCode(i)
                            }
                            return a
                        }

                        function H(e, t) {
                            return e ? Q(r(), e, t) : ""
                        }

                        function q(e, t, n, r) {
                            if (!(r > 0)) return 0;
                            for (var o = n, a = n + r - 1, i = 0; i < e.length; ++i) {
                                var u = e.charCodeAt(i);
                                if (u >= 55296 && u <= 57343) u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++i);
                                if (u <= 127) {
                                    if (n >= a) break;
                                    t[n++] = u
                                } else if (u <= 2047) {
                                    if (n + 1 >= a) break;
                                    t[n++] = 192 | u >> 6, t[n++] = 128 | 63 & u
                                } else if (u <= 65535) {
                                    if (n + 2 >= a) break;
                                    t[n++] = 224 | u >> 12, t[n++] = 128 | u >> 6 & 63, t[n++] = 128 | 63 & u
                                } else {
                                    if (n + 3 >= a) break;
                                    t[n++] = 240 | u >> 18, t[n++] = 128 | u >> 12 & 63, t[n++] = 128 | u >> 6 & 63, t[n++] = 128 | 63 & u
                                }
                            }
                            return t[n] = 0, n - o
                        }

                        function G(e, t, n) {
                            return q(e, r(), t, n)
                        }

                        function $(e) {
                            for (var t = 0, n = 0; n < e.length; ++n) {
                                var r = e.charCodeAt(n);
                                r >= 55296 && r <= 57343 && (r = 65536 + ((1023 & r) << 10) | 1023 & e.charCodeAt(++n)), r <= 127 ? ++t : t += r <= 2047 ? 2 : r <= 65535 ? 3 : 4
                            }
                            return t
                        }
                        var Y, X, K, Z, J, ee, te, ne, re, oe, ae, ie = "undefined" != typeof TextDecoder ? new W("utf-16le") : void 0;

                        function ue(e, t) {
                            for (var n = e, i = n >> 1, u = i + t / 2; !(i >= u) && a()[i];) ++i;
                            if ((n = i << 1) - e > 32 && ie) return ie.decode(r().subarray(e, n));
                            for (var l = "", c = 0; !(c >= t / 2); ++c) {
                                var s = o()[e + 2 * c >> 1];
                                if (0 == s) break;
                                l += String.fromCharCode(s)
                            }
                            return l
                        }

                        function le(e, t, n) {
                            if (void 0 === n && (n = 2147483647), n < 2) return 0;
                            for (var r = t, a = (n -= 2) < 2 * e.length ? n / 2 : e.length, i = 0; i < a; ++i) {
                                var u = e.charCodeAt(i);
                                o()[t >> 1] = u, t += 2
                            }
                            return o()[t >> 1] = 0, t - r
                        }

                        function ce(e) {
                            return 2 * e.length
                        }

                        function se(e, t) {
                            for (var n = 0, r = ""; !(n >= t / 4);) {
                                var o = i()[e + 4 * n >> 2];
                                if (0 == o) break;
                                if (++n, o >= 65536) {
                                    var a = o - 65536;
                                    r += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)
                                } else r += String.fromCharCode(o)
                            }
                            return r
                        }

                        function fe(e, t, n) {
                            if (void 0 === n && (n = 2147483647), n < 4) return 0;
                            for (var r = t, o = r + n - 4, a = 0; a < e.length; ++a) {
                                var u = e.charCodeAt(a);
                                if (u >= 55296 && u <= 57343) u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++a);
                                if (i()[t >> 2] = u, (t += 4) + 4 > o) break
                            }
                            return i()[t >> 2] = 0, t - r
                        }

                        function de(e) {
                            for (var t = 0, n = 0; n < e.length; ++n) {
                                var r = e.charCodeAt(n);
                                r >= 55296 && r <= 57343 && ++n, t += 4
                            }
                            return t
                        }

                        function pe(e) {
                            var t = $(e) + 1,
                                r = kr(t);
                            return r && q(e, n(), r, t), r
                        }

                        function he(e) {
                            var t = $(e) + 1,
                                r = Br(t);
                            return q(e, n(), r, t), r
                        }

                        function me(e, t) {
                            n().set(e, t)
                        }

                        function ve(e) {
                            Y = e, d.HEAP8 = X = new Int8Array(e), d.HEAP16 = Z = new Int16Array(e), d.HEAP32 = ee = new Int32Array(e), d.HEAPU8 = K = new Uint8Array(e), d.HEAPU16 = J = new Uint16Array(e), d.HEAPU32 = te = new Uint32Array(e), d.HEAPF32 = ne = new Float32Array(e), d.HEAPF64 = ae = new Float64Array(e), d.HEAP64 = re = new BigInt64Array(e), d.HEAPU64 = oe = new BigUint64Array(e)
                        }
                        E && (Y = d.buffer);
                        var ge, ye = d.INITIAL_MEMORY || 16777216;
                        if (E) I = d.wasmMemory, Y = d.buffer;
                        else if (d.wasmMemory) I = d.wasmMemory;
                        else if (!((I = new WebAssembly.Memory({
                                initial: ye / 65536,
                                maximum: 32768,
                                shared: !0
                            })).buffer instanceof SharedArrayBuffer)) throw P("requested a shared WebAssembly.Memory but the returned buffer is not a SharedArrayBuffer, indicating that while the browser has SharedArrayBuffer it does not have WebAssembly threads support - you may need to set a flag"), k && console.log("(on node you may need: --experimental-wasm-threads --experimental-wasm-bulk-memory and also use a recent version)"), Error("bad memory");
                        I && (Y = I.buffer), ye = Y.byteLength, ve(Y);
                        var be = [],
                            we = [],
                            _e = [],
                            ke = [],
                            Ee = [],
                            xe = !1,
                            Se = 0;

                        function Ce() {
                            return j || Se > 0
                        }

                        function Pe() {
                            !0, E || (d.noFSInit || lt.init.initialized || lt.init(), lt.ignorePermissions = !1, at.init(), je(we))
                        }
                        var Le = 0,
                            Te = null,
                            Fe = null;

                        function Oe(e) {
                            Le++, d.monitorRunDependencies && d.monitorRunDependencies(Le)
                        }

                        function Ae(e) {
                            if (Le--, d.monitorRunDependencies && d.monitorRunDependencies(Le), 0 == Le && (null !== Te && (clearInterval(Te), Te = null), Fe)) {
                                var t = Fe;
                                Fe = null, t()
                            }
                        }

                        function De(e) {
                            E ? postMessage({
                                cmd: "onAbort",
                                arg: e
                            }) : d.onAbort && d.onAbort(e), P(e = "Aborted(" + e + ")"), z = !0, B = 1, e += ". Build with -s ASSERTIONS=1 for more info.";
                            var t = new WebAssembly.RuntimeError(e);
                            throw f(t), t
                        }
                        d.preloadedImages = {}, d.preloadedAudios = {};
                        var Ne;

                        function Me(e) {
                            return e.startsWith("data:application/octet-stream;base64,")
                        }

                        function Ie(e) {
                            try {
                                if (e == Ne && D) return new Uint8Array(D);
                                if (m) return m(e);
                                throw "both async and sync fetching of the wasm failed"
                            } catch (P) {
                                De(P)
                            }
                        }
                        Me(Ne = "Play.wasm") || (Ne = S(Ne));
                        var Re = {
                            220256: function() {
                                return d.discImageDevice.getFileSize()
                            },
                            220302: function(e, t, n, r) {
                                var o = (t >>> 0) + 4294967296 * (n >>> 0);
                                d.discImageDevice.read(e, o, r)
                            },
                            220448: function() {
                                return d.discImageDevice.isDone()
                            }
                        };

                        function je(e) {
                            for (; e.length > 0;) {
                                var t = e.shift();
                                if ("function" != typeof t) {
                                    var n = t.func;
                                    "number" == typeof n ? void 0 === t.arg ? Ge(n)() : Ge(n)(t.arg) : n(void 0 === t.arg ? null : t.arg)
                                } else t(d)
                            }
                        }

                        function Be(e) {
                            var t = Rr(),
                                n = e();
                            return jr(t), n
                        }

                        function ze(e) {
                            var t = Ve.pthreads[e];
                            if (t) {
                                i()[e >> 2] = 0;
                                var n = t.worker;
                                Ve.returnWorkerToPool(n)
                            }
                        }

                        function Ue(e) {
                            Hr(e)
                        }

                        function We(e) {
                            if (e instanceof Vr || "unwind" == e) return B;
                            b(1, e)
                        }
                        var Ve = {
                            unusedWorkers: [],
                            runningWorkers: [],
                            tlsInitFunctions: [],
                            init: function() {
                                E ? Ve.initWorker() : Ve.initMainThread()
                            },
                            initMainThread: function() {
                                for (var e = 0; e < 2; ++e) Ve.allocateUnusedWorker()
                            },
                            initWorker: function() {
                                j = !1
                            },
                            pthreads: {},
                            setExitStatus: function(e) {
                                B = e
                            },
                            terminateAllThreads: function() {
                                for (var e in Ve.pthreads) {
                                    var t = Ve.pthreads[e];
                                    t && t.worker && Ve.returnWorkerToPool(t.worker)
                                }
                                for (var n = 0; n < Ve.unusedWorkers.length; ++n) {
                                    Ve.unusedWorkers[n].terminate()
                                }
                                Ve.unusedWorkers = []
                            },
                            returnWorkerToPool: function(e) {
                                Ve.runWithoutMainThreadQueuedCalls((function() {
                                    delete Ve.pthreads[e.pthread.threadInfoStruct], Ve.unusedWorkers.push(e), Ve.runningWorkers.splice(Ve.runningWorkers.indexOf(e), 1), Dr(e.pthread.threadInfoStruct), e.pthread = void 0
                                }))
                            },
                            runWithoutMainThreadQueuedCalls: function(e) {
                                i()[Wr >> 2] = 0;
                                try {
                                    e()
                                } finally {
                                    i()[Wr >> 2] = 1
                                }
                            },
                            receiveObjectTransfer: function(e) {},
                            threadInit: function() {
                                for (var e in Ve.tlsInitFunctions) Ve.tlsInitFunctions[e]()
                            },
                            loadWasmModuleToWorker: function(t, n) {
                                t.onmessage = function(e) {
                                    var r, o = e.data,
                                        a = o.cmd;
                                    if (t.pthread && (Ve.currentProxiedOperationCallerThread = t.pthread.threadInfoStruct), o.targetThread && o.targetThread != Sr()) {
                                        var u = Ve.pthreads[o.targetThread];
                                        return u ? u.worker.postMessage(o, o.transferList) : P('Internal error! Worker sent a message "' + a + '" to target pthread ' + o.targetThread + ", but that thread no longer exists!"), void(Ve.currentProxiedOperationCallerThread = void 0)
                                    }
                                    "processQueuedMainThreadWork" === a ? Tr() : "spawnThread" === a ? nt(o) : "cleanupThread" === a ? ze(o.thread) : "killThread" === a ? function(e) {
                                        i()[e >> 2] = 0;
                                        var t = Ve.pthreads[e];
                                        delete Ve.pthreads[e], t.worker.terminate(), Dr(e), Ve.runningWorkers.splice(Ve.runningWorkers.indexOf(t.worker), 1), t.worker.pthread = void 0
                                    }(o.thread) : "cancelThread" === a ? (r = o.thread, Ve.pthreads[r].worker.postMessage({
                                        cmd: "cancel"
                                    })) : "loaded" === a ? (t.loaded = !0, n && n(t), t.runPthread && (t.runPthread(), delete t.runPthread)) : "print" === a ? C("Thread " + o.threadId + ": " + o.text) : "printErr" === a ? P("Thread " + o.threadId + ": " + o.text) : "alert" === a ? alert("Thread " + o.threadId + ": " + o.text) : "setimmediate" === o.target ? t.postMessage(o) : "onAbort" === a ? d.onAbort && d.onAbort(o.arg) : P("worker sent an unknown command " + a), Ve.currentProxiedOperationCallerThread = void 0
                                }, t.onerror = function(e) {
                                    throw P("worker sent an error! " + e.filename + ":" + e.lineno + ": " + e.message), e
                                }, t.postMessage({
                                    cmd: "load",
                                    urlOrBlob: d.mainScriptUrlOrBlob || e,
                                    wasmMemory: I,
                                    wasmModule: R
                                })
                            },
                            allocateUnusedWorker: function() {
                                var e = S("Play.worker.js");
                                Ve.unusedWorkers.push(new Worker(e))
                            },
                            getNewWorker: function() {
                                return 0 == Ve.unusedWorkers.length && (Ve.allocateUnusedWorker(), Ve.loadWasmModuleToWorker(Ve.unusedWorkers[0])), Ve.unusedWorkers.pop()
                            }
                        };

                        function Qe(e) {
                            if (E) return jn(1, 0, e);
                            try {
                                Ue(e)
                            } catch (t) {
                                We(t)
                            }
                        }
                        d.establishStackSpace = function() {
                            var e = Sr(),
                                t = i()[e + 44 >> 2],
                                n = i()[e + 48 >> 2];
                            Ir(t, t - n), jr(t)
                        };
                        var He, qe = [];

                        function Ge(e) {
                            var t = qe[e];
                            return t || (e >= qe.length && (qe.length = e + 1), qe[e] = t = ge.get(e)), t
                        }

                        function $e(e, t) {
                            ge.set(e, t), qe[e] = t
                        }
                        d.invokeEntryPoint = function(e, t) {
                            return Ge(e)(t)
                        }, He = E ? function() {
                            return performance.now() - d.__performance_now_clock_drift
                        } : function() {
                            return performance.now()
                        };

                        function Ye(e) {
                            return i()[Pr() >> 2] = e, e
                        }

                        function Xe(e) {
                            this.excPtr = e, this.ptr = e - 16, this.set_type = function(e) {
                                i()[this.ptr + 4 >> 2] = e
                            }, this.get_type = function() {
                                return i()[this.ptr + 4 >> 2]
                            }, this.set_destructor = function(e) {
                                i()[this.ptr + 8 >> 2] = e
                            }, this.get_destructor = function() {
                                return i()[this.ptr + 8 >> 2]
                            }, this.set_refcount = function(e) {
                                i()[this.ptr >> 2] = e
                            }, this.set_caught = function(e) {
                                e = e ? 1 : 0, n()[this.ptr + 12 >> 0] = e
                            }, this.get_caught = function() {
                                return 0 != n()[this.ptr + 12 >> 0]
                            }, this.set_rethrown = function(e) {
                                e = e ? 1 : 0, n()[this.ptr + 13 >> 0] = e
                            }, this.get_rethrown = function() {
                                return 0 != n()[this.ptr + 13 >> 0]
                            }, this.init = function(e, t) {
                                this.set_type(e), this.set_destructor(t), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1)
                            }, this.add_ref = function() {
                                Atomics.add(i(), this.ptr + 0 >> 2, 1)
                            }, this.release_ref = function() {
                                return 1 === Atomics.sub(i(), this.ptr + 0 >> 2, 1)
                            }
                        }

                        function Ke(e) {
                            this.free = function() {
                                _r(this.ptr), this.ptr = 0
                            }, this.set_base_ptr = function(e) {
                                i()[this.ptr >> 2] = e
                            }, this.get_base_ptr = function() {
                                return i()[this.ptr >> 2]
                            }, this.set_adjusted_ptr = function(e) {
                                i()[this.ptr + 4 >> 2] = e
                            }, this.get_adjusted_ptr_addr = function() {
                                return this.ptr + 4
                            }, this.get_adjusted_ptr = function() {
                                return i()[this.ptr + 4 >> 2]
                            }, this.get_exception_ptr = function() {
                                if (Ur(this.get_exception_info().get_type())) return i()[this.get_base_ptr() >> 2];
                                var e = this.get_adjusted_ptr();
                                return 0 !== e ? e : this.get_base_ptr()
                            }, this.get_exception_info = function() {
                                return new Xe(this.get_base_ptr())
                            }, void 0 === e ? (this.ptr = kr(8), this.set_adjusted_ptr(0)) : this.ptr = e
                        }
                        var Ze = [];
                        var Je = 0;
                        var et = 0;

                        function tt(e) {
                            return _r(new Xe(e).ptr)
                        }

                        function nt(e) {
                            var t = Ve.getNewWorker();
                            if (!t) return 6;
                            Ve.runningWorkers.push(t);
                            var n = Ve.pthreads[e.pthread_ptr] = {
                                worker: t,
                                threadInfoStruct: e.pthread_ptr
                            };
                            t.pthread = n;
                            var r = {
                                cmd: "run",
                                start_routine: e.startRoutine,
                                arg: e.arg,
                                threadInfoStruct: e.pthread_ptr
                            };
                            return t.runPthread = function() {
                                r.time = performance.now(), t.postMessage(r, e.transferList)
                            }, t.loaded && (t.runPthread(), delete t.runPthread), 0
                        }
                        var rt = {
                            splitPath: function(e) {
                                return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(e).slice(1)
                            },
                            normalizeArray: function(e, t) {
                                for (var n = 0, r = e.length - 1; r >= 0; r--) {
                                    var o = e[r];
                                    "." === o ? e.splice(r, 1) : ".." === o ? (e.splice(r, 1), n++) : n && (e.splice(r, 1), n--)
                                }
                                if (t)
                                    for (; n; n--) e.unshift("..");
                                return e
                            },
                            normalize: function(e) {
                                var t = "/" === e.charAt(0),
                                    n = "/" === e.substr(-1);
                                return (e = rt.normalizeArray(e.split("/").filter((function(e) {
                                    return !!e
                                })), !t).join("/")) || t || (e = "."), e && n && (e += "/"), (t ? "/" : "") + e
                            },
                            dirname: function(e) {
                                var t = rt.splitPath(e),
                                    n = t[0],
                                    r = t[1];
                                return n || r ? (r && (r = r.substr(0, r.length - 1)), n + r) : "."
                            },
                            basename: function(e) {
                                if ("/" === e) return "/";
                                var t = (e = (e = rt.normalize(e)).replace(/\/$/, "")).lastIndexOf("/");
                                return -1 === t ? e : e.substr(t + 1)
                            },
                            extname: function(e) {
                                return rt.splitPath(e)[3]
                            },
                            join: function() {
                                var e = Array.prototype.slice.call(arguments, 0);
                                return rt.normalize(e.join("/"))
                            },
                            join2: function(e, t) {
                                return rt.normalize(e + "/" + t)
                            }
                        };
                        var ot = {
                                resolve: function() {
                                    for (var e = "", t = !1, n = arguments.length - 1; n >= -1 && !t; n--) {
                                        var r = n >= 0 ? arguments[n] : lt.cwd();
                                        if ("string" != typeof r) throw new TypeError("Arguments to path.resolve must be strings");
                                        if (!r) return "";
                                        e = r + "/" + e, t = "/" === r.charAt(0)
                                    }
                                    return (t ? "/" : "") + (e = rt.normalizeArray(e.split("/").filter((function(e) {
                                        return !!e
                                    })), !t).join("/")) || "."
                                },
                                relative: function(e, t) {
                                    function n(e) {
                                        for (var t = 0; t < e.length && "" === e[t]; t++);
                                        for (var n = e.length - 1; n >= 0 && "" === e[n]; n--);
                                        return t > n ? [] : e.slice(t, n - t + 1)
                                    }
                                    e = ot.resolve(e).substr(1), t = ot.resolve(t).substr(1);
                                    for (var r = n(e.split("/")), o = n(t.split("/")), a = Math.min(r.length, o.length), i = a, u = 0; u < a; u++)
                                        if (r[u] !== o[u]) {
                                            i = u;
                                            break
                                        } var l = [];
                                    for (u = i; u < r.length; u++) l.push("..");
                                    return (l = l.concat(o.slice(i))).join("/")
                                }
                            },
                            at = {
                                ttys: [],
                                init: function() {},
                                shutdown: function() {},
                                register: function(e, t) {
                                    at.ttys[e] = {
                                        input: [],
                                        output: [],
                                        ops: t
                                    }, lt.registerDevice(e, at.stream_ops)
                                },
                                stream_ops: {
                                    open: function(e) {
                                        var t = at.ttys[e.node.rdev];
                                        if (!t) throw new lt.ErrnoError(43);
                                        e.tty = t, e.seekable = !1
                                    },
                                    close: function(e) {
                                        e.tty.ops.flush(e.tty)
                                    },
                                    flush: function(e) {
                                        e.tty.ops.flush(e.tty)
                                    },
                                    read: function(e, t, n, r, o) {
                                        if (!e.tty || !e.tty.ops.get_char) throw new lt.ErrnoError(60);
                                        for (var a = 0, i = 0; i < r; i++) {
                                            var u;
                                            try {
                                                u = e.tty.ops.get_char(e.tty)
                                            } catch (l) {
                                                throw new lt.ErrnoError(29)
                                            }
                                            if (void 0 === u && 0 === a) throw new lt.ErrnoError(6);
                                            if (null === u || void 0 === u) break;
                                            a++, t[n + i] = u
                                        }
                                        return a && (e.node.timestamp = Date.now()), a
                                    },
                                    write: function(e, t, n, r, o) {
                                        if (!e.tty || !e.tty.ops.put_char) throw new lt.ErrnoError(60);
                                        try {
                                            for (var a = 0; a < r; a++) e.tty.ops.put_char(e.tty, t[n + a])
                                        } catch (i) {
                                            throw new lt.ErrnoError(29)
                                        }
                                        return r && (e.node.timestamp = Date.now()), a
                                    }
                                },
                                default_tty_ops: {
                                    get_char: function(e) {
                                        if (!e.input.length) {
                                            var t = null;
                                            if ("undefined" != typeof window && "function" == typeof window.prompt ? null !== (t = window.prompt("Input: ")) && (t += "\n") : "function" == typeof readline && null !== (t = readline()) && (t += "\n"), !t) return null;
                                            e.input = yr(t, !0)
                                        }
                                        return e.input.shift()
                                    },
                                    put_char: function(e, t) {
                                        null === t || 10 === t ? (C(Q(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                                    },
                                    flush: function(e) {
                                        e.output && e.output.length > 0 && (C(Q(e.output, 0)), e.output = [])
                                    }
                                },
                                default_tty1_ops: {
                                    put_char: function(e, t) {
                                        null === t || 10 === t ? (P(Q(e.output, 0)), e.output = []) : 0 != t && e.output.push(t)
                                    },
                                    flush: function(e) {
                                        e.output && e.output.length > 0 && (P(Q(e.output, 0)), e.output = [])
                                    }
                                }
                            };

                        function it(e) {
                            e = function(e, t) {
                                return Math.ceil(e / t) * t
                            }(e, 65536);
                            var t = Er(65536, e);
                            return t ? (function(e, t) {
                                r().fill(0, e, e + t)
                            }(t, e), t) : 0
                        }
                        var ut = {
                            ops_table: null,
                            mount: function(e) {
                                return ut.createNode(null, "/", 16895, 0)
                            },
                            createNode: function(e, t, n, r) {
                                if (lt.isBlkdev(n) || lt.isFIFO(n)) throw new lt.ErrnoError(63);
                                ut.ops_table || (ut.ops_table = {
                                    dir: {
                                        node: {
                                            getattr: ut.node_ops.getattr,
                                            setattr: ut.node_ops.setattr,
                                            lookup: ut.node_ops.lookup,
                                            mknod: ut.node_ops.mknod,
                                            rename: ut.node_ops.rename,
                                            unlink: ut.node_ops.unlink,
                                            rmdir: ut.node_ops.rmdir,
                                            readdir: ut.node_ops.readdir,
                                            symlink: ut.node_ops.symlink
                                        },
                                        stream: {
                                            llseek: ut.stream_ops.llseek
                                        }
                                    },
                                    file: {
                                        node: {
                                            getattr: ut.node_ops.getattr,
                                            setattr: ut.node_ops.setattr
                                        },
                                        stream: {
                                            llseek: ut.stream_ops.llseek,
                                            read: ut.stream_ops.read,
                                            write: ut.stream_ops.write,
                                            allocate: ut.stream_ops.allocate,
                                            mmap: ut.stream_ops.mmap,
                                            msync: ut.stream_ops.msync
                                        }
                                    },
                                    link: {
                                        node: {
                                            getattr: ut.node_ops.getattr,
                                            setattr: ut.node_ops.setattr,
                                            readlink: ut.node_ops.readlink
                                        },
                                        stream: {}
                                    },
                                    chrdev: {
                                        node: {
                                            getattr: ut.node_ops.getattr,
                                            setattr: ut.node_ops.setattr
                                        },
                                        stream: lt.chrdev_stream_ops
                                    }
                                });
                                var o = lt.createNode(e, t, n, r);
                                return lt.isDir(o.mode) ? (o.node_ops = ut.ops_table.dir.node, o.stream_ops = ut.ops_table.dir.stream, o.contents = {}) : lt.isFile(o.mode) ? (o.node_ops = ut.ops_table.file.node, o.stream_ops = ut.ops_table.file.stream, o.usedBytes = 0, o.contents = null) : lt.isLink(o.mode) ? (o.node_ops = ut.ops_table.link.node, o.stream_ops = ut.ops_table.link.stream) : lt.isChrdev(o.mode) && (o.node_ops = ut.ops_table.chrdev.node, o.stream_ops = ut.ops_table.chrdev.stream), o.timestamp = Date.now(), e && (e.contents[t] = o, e.timestamp = o.timestamp), o
                            },
                            getFileDataAsTypedArray: function(e) {
                                return e.contents ? e.contents.subarray ? e.contents.subarray(0, e.usedBytes) : new Uint8Array(e.contents) : new Uint8Array(0)
                            },
                            expandFileStorage: function(e, t) {
                                var n = e.contents ? e.contents.length : 0;
                                if (!(n >= t)) {
                                    t = Math.max(t, n * (n < 1048576 ? 2 : 1.125) >>> 0), 0 != n && (t = Math.max(t, 256));
                                    var r = e.contents;
                                    e.contents = new Uint8Array(t), e.usedBytes > 0 && e.contents.set(r.subarray(0, e.usedBytes), 0)
                                }
                            },
                            resizeFileStorage: function(e, t) {
                                if (e.usedBytes != t)
                                    if (0 == t) e.contents = null, e.usedBytes = 0;
                                    else {
                                        var n = e.contents;
                                        e.contents = new Uint8Array(t), n && e.contents.set(n.subarray(0, Math.min(t, e.usedBytes))), e.usedBytes = t
                                    }
                            },
                            node_ops: {
                                getattr: function(e) {
                                    var t = {};
                                    return t.dev = lt.isChrdev(e.mode) ? e.id : 1, t.ino = e.id, t.mode = e.mode, t.nlink = 1, t.uid = 0, t.gid = 0, t.rdev = e.rdev, lt.isDir(e.mode) ? t.size = 4096 : lt.isFile(e.mode) ? t.size = e.usedBytes : lt.isLink(e.mode) ? t.size = e.link.length : t.size = 0, t.atime = new Date(e.timestamp), t.mtime = new Date(e.timestamp), t.ctime = new Date(e.timestamp), t.blksize = 4096, t.blocks = Math.ceil(t.size / t.blksize), t
                                },
                                setattr: function(e, t) {
                                    void 0 !== t.mode && (e.mode = t.mode), void 0 !== t.timestamp && (e.timestamp = t.timestamp), void 0 !== t.size && ut.resizeFileStorage(e, t.size)
                                },
                                lookup: function(e, t) {
                                    throw lt.genericErrors[44]
                                },
                                mknod: function(e, t, n, r) {
                                    return ut.createNode(e, t, n, r)
                                },
                                rename: function(e, t, n) {
                                    if (lt.isDir(e.mode)) {
                                        var r;
                                        try {
                                            r = lt.lookupNode(t, n)
                                        } catch (a) {}
                                        if (r)
                                            for (var o in r.contents) throw new lt.ErrnoError(55)
                                    }
                                    delete e.parent.contents[e.name], e.parent.timestamp = Date.now(), e.name = n, t.contents[n] = e, t.timestamp = e.parent.timestamp, e.parent = t
                                },
                                unlink: function(e, t) {
                                    delete e.contents[t], e.timestamp = Date.now()
                                },
                                rmdir: function(e, t) {
                                    var n = lt.lookupNode(e, t);
                                    for (var r in n.contents) throw new lt.ErrnoError(55);
                                    delete e.contents[t], e.timestamp = Date.now()
                                },
                                readdir: function(e) {
                                    var t = [".", ".."];
                                    for (var n in e.contents) e.contents.hasOwnProperty(n) && t.push(n);
                                    return t
                                },
                                symlink: function(e, t, n) {
                                    var r = ut.createNode(e, t, 41471, 0);
                                    return r.link = n, r
                                },
                                readlink: function(e) {
                                    if (!lt.isLink(e.mode)) throw new lt.ErrnoError(28);
                                    return e.link
                                }
                            },
                            stream_ops: {
                                read: function(e, t, n, r, o) {
                                    var a = e.node.contents;
                                    if (o >= e.node.usedBytes) return 0;
                                    var i = Math.min(e.node.usedBytes - o, r);
                                    if (i > 8 && a.subarray) t.set(a.subarray(o, o + i), n);
                                    else
                                        for (var u = 0; u < i; u++) t[n + u] = a[o + u];
                                    return i
                                },
                                write: function(e, t, r, o, a, i) {
                                    if (t.buffer === n().buffer && (i = !1), !o) return 0;
                                    var u = e.node;
                                    if (u.timestamp = Date.now(), t.subarray && (!u.contents || u.contents.subarray)) {
                                        if (i) return u.contents = t.subarray(r, r + o), u.usedBytes = o, o;
                                        if (0 === u.usedBytes && 0 === a) return u.contents = t.slice(r, r + o), u.usedBytes = o, o;
                                        if (a + o <= u.usedBytes) return u.contents.set(t.subarray(r, r + o), a), o
                                    }
                                    if (ut.expandFileStorage(u, a + o), u.contents.subarray && t.subarray) u.contents.set(t.subarray(r, r + o), a);
                                    else
                                        for (var l = 0; l < o; l++) u.contents[a + l] = t[r + l];
                                    return u.usedBytes = Math.max(u.usedBytes, a + o), o
                                },
                                llseek: function(e, t, n) {
                                    var r = t;
                                    if (1 === n ? r += e.position : 2 === n && lt.isFile(e.node.mode) && (r += e.node.usedBytes), r < 0) throw new lt.ErrnoError(28);
                                    return r
                                },
                                allocate: function(e, t, n) {
                                    ut.expandFileStorage(e.node, t + n), e.node.usedBytes = Math.max(e.node.usedBytes, t + n)
                                },
                                mmap: function(e, t, r, o, a, i) {
                                    if (0 !== t) throw new lt.ErrnoError(28);
                                    if (!lt.isFile(e.node.mode)) throw new lt.ErrnoError(43);
                                    var u, l, c = e.node.contents;
                                    if (2 & i || c.buffer !== Y) {
                                        if ((o > 0 || o + r < c.length) && (c = c.subarray ? c.subarray(o, o + r) : Array.prototype.slice.call(c, o, o + r)), l = !0, !(u = it(r))) throw new lt.ErrnoError(48);
                                        n().set(c, u)
                                    } else l = !1, u = c.byteOffset;
                                    return {
                                        ptr: u,
                                        allocated: l
                                    }
                                },
                                msync: function(e, t, n, r, o) {
                                    if (!lt.isFile(e.node.mode)) throw new lt.ErrnoError(43);
                                    if (2 & o) return 0;
                                    ut.stream_ops.write(e, t, 0, r, n, !1);
                                    return 0
                                }
                            }
                        };
                        var lt = {
                                root: null,
                                mounts: [],
                                devices: {},
                                streams: [],
                                nextInode: 1,
                                nameTable: null,
                                currentPath: "/",
                                initialized: !1,
                                ignorePermissions: !0,
                                ErrnoError: null,
                                genericErrors: {},
                                filesystems: null,
                                syncFSRequests: 0,
                                lookupPath: function(e) {
                                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (!(e = ot.resolve(lt.cwd(), e))) return {
                                        path: "",
                                        node: null
                                    };
                                    var n = {
                                        follow_mount: !0,
                                        recurse_count: 0
                                    };
                                    for (var r in n) void 0 === t[r] && (t[r] = n[r]);
                                    if (t.recurse_count > 8) throw new lt.ErrnoError(32);
                                    for (var o = rt.normalizeArray(e.split("/").filter((function(e) {
                                            return !!e
                                        })), !1), a = lt.root, i = "/", u = 0; u < o.length; u++) {
                                        var l = u === o.length - 1;
                                        if (l && t.parent) break;
                                        if (a = lt.lookupNode(a, o[u]), i = rt.join2(i, o[u]), lt.isMountpoint(a) && (!l || l && t.follow_mount) && (a = a.mounted.root), !l || t.follow)
                                            for (var c = 0; lt.isLink(a.mode);) {
                                                var s = lt.readlink(i);
                                                i = ot.resolve(rt.dirname(i), s);
                                                var f = lt.lookupPath(i, {
                                                    recurse_count: t.recurse_count
                                                });
                                                if (a = f.node, c++ > 40) throw new lt.ErrnoError(32)
                                            }
                                    }
                                    return {
                                        path: i,
                                        node: a
                                    }
                                },
                                getPath: function(e) {
                                    for (var t;;) {
                                        if (lt.isRoot(e)) {
                                            var n = e.mount.mountpoint;
                                            return t ? "/" !== n[n.length - 1] ? n + "/" + t : n + t : n
                                        }
                                        t = t ? e.name + "/" + t : e.name, e = e.parent
                                    }
                                },
                                hashName: function(e, t) {
                                    for (var n = 0, r = 0; r < t.length; r++) n = (n << 5) - n + t.charCodeAt(r) | 0;
                                    return (e + n >>> 0) % lt.nameTable.length
                                },
                                hashAddNode: function(e) {
                                    var t = lt.hashName(e.parent.id, e.name);
                                    e.name_next = lt.nameTable[t], lt.nameTable[t] = e
                                },
                                hashRemoveNode: function(e) {
                                    var t = lt.hashName(e.parent.id, e.name);
                                    if (lt.nameTable[t] === e) lt.nameTable[t] = e.name_next;
                                    else
                                        for (var n = lt.nameTable[t]; n;) {
                                            if (n.name_next === e) {
                                                n.name_next = e.name_next;
                                                break
                                            }
                                            n = n.name_next
                                        }
                                },
                                lookupNode: function(e, t) {
                                    var n = lt.mayLookup(e);
                                    if (n) throw new lt.ErrnoError(n, e);
                                    for (var r = lt.hashName(e.id, t), o = lt.nameTable[r]; o; o = o.name_next) {
                                        var a = o.name;
                                        if (o.parent.id === e.id && a === t) return o
                                    }
                                    return lt.lookup(e, t)
                                },
                                createNode: function(e, t, n, r) {
                                    var o = new lt.FSNode(e, t, n, r);
                                    return lt.hashAddNode(o), o
                                },
                                destroyNode: function(e) {
                                    lt.hashRemoveNode(e)
                                },
                                isRoot: function(e) {
                                    return e === e.parent
                                },
                                isMountpoint: function(e) {
                                    return !!e.mounted
                                },
                                isFile: function(e) {
                                    return 32768 === (61440 & e)
                                },
                                isDir: function(e) {
                                    return 16384 === (61440 & e)
                                },
                                isLink: function(e) {
                                    return 40960 === (61440 & e)
                                },
                                isChrdev: function(e) {
                                    return 8192 === (61440 & e)
                                },
                                isBlkdev: function(e) {
                                    return 24576 === (61440 & e)
                                },
                                isFIFO: function(e) {
                                    return 4096 === (61440 & e)
                                },
                                isSocket: function(e) {
                                    return 49152 === (49152 & e)
                                },
                                flagModes: {
                                    r: 0,
                                    "r+": 2,
                                    w: 577,
                                    "w+": 578,
                                    a: 1089,
                                    "a+": 1090
                                },
                                modeStringToFlags: function(e) {
                                    var t = lt.flagModes[e];
                                    if ("undefined" == typeof t) throw new Error("Unknown file open mode: " + e);
                                    return t
                                },
                                flagsToPermissionString: function(e) {
                                    var t = ["r", "w", "rw"][3 & e];
                                    return 512 & e && (t += "w"), t
                                },
                                nodePermissions: function(e, t) {
                                    return lt.ignorePermissions || (!t.includes("r") || 292 & e.mode) && (!t.includes("w") || 146 & e.mode) && (!t.includes("x") || 73 & e.mode) ? 0 : 2
                                },
                                mayLookup: function(e) {
                                    var t = lt.nodePermissions(e, "x");
                                    return t || (e.node_ops.lookup ? 0 : 2)
                                },
                                mayCreate: function(e, t) {
                                    try {
                                        lt.lookupNode(e, t);
                                        return 20
                                    } catch (n) {}
                                    return lt.nodePermissions(e, "wx")
                                },
                                mayDelete: function(e, t, n) {
                                    var r;
                                    try {
                                        r = lt.lookupNode(e, t)
                                    } catch (a) {
                                        return a.errno
                                    }
                                    var o = lt.nodePermissions(e, "wx");
                                    if (o) return o;
                                    if (n) {
                                        if (!lt.isDir(r.mode)) return 54;
                                        if (lt.isRoot(r) || lt.getPath(r) === lt.cwd()) return 10
                                    } else if (lt.isDir(r.mode)) return 31;
                                    return 0
                                },
                                mayOpen: function(e, t) {
                                    return e ? lt.isLink(e.mode) ? 32 : lt.isDir(e.mode) && ("r" !== lt.flagsToPermissionString(t) || 512 & t) ? 31 : lt.nodePermissions(e, lt.flagsToPermissionString(t)) : 44
                                },
                                MAX_OPEN_FDS: 4096,
                                nextfd: function() {
                                    for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : lt.MAX_OPEN_FDS, n = e; n <= t; n++)
                                        if (!lt.streams[n]) return n;
                                    throw new lt.ErrnoError(33)
                                },
                                getStream: function(e) {
                                    return lt.streams[e]
                                },
                                createStream: function(e, t, n) {
                                    lt.FSStream || (lt.FSStream = function() {}, lt.FSStream.prototype = {
                                        object: {
                                            get: function() {
                                                return this.node
                                            },
                                            set: function(e) {
                                                this.node = e
                                            }
                                        },
                                        isRead: {
                                            get: function() {
                                                return 1 !== (2097155 & this.flags)
                                            }
                                        },
                                        isWrite: {
                                            get: function() {
                                                return 0 !== (2097155 & this.flags)
                                            }
                                        },
                                        isAppend: {
                                            get: function() {
                                                return 1024 & this.flags
                                            }
                                        }
                                    }), e = Object.assign(new lt.FSStream, e);
                                    var r = lt.nextfd(t, n);
                                    return e.fd = r, lt.streams[r] = e, e
                                },
                                closeStream: function(e) {
                                    lt.streams[e] = null
                                },
                                chrdev_stream_ops: {
                                    open: function(e) {
                                        var t = lt.getDevice(e.node.rdev);
                                        e.stream_ops = t.stream_ops, e.stream_ops.open && e.stream_ops.open(e)
                                    },
                                    llseek: function() {
                                        throw new lt.ErrnoError(70)
                                    }
                                },
                                major: function(e) {
                                    return e >> 8
                                },
                                minor: function(e) {
                                    return 255 & e
                                },
                                makedev: function(e, t) {
                                    return e << 8 | t
                                },
                                registerDevice: function(e, t) {
                                    lt.devices[e] = {
                                        stream_ops: t
                                    }
                                },
                                getDevice: function(e) {
                                    return lt.devices[e]
                                },
                                getMounts: function(e) {
                                    for (var t = [], n = [e]; n.length;) {
                                        var r = n.pop();
                                        t.push(r), n.push.apply(n, r.mounts)
                                    }
                                    return t
                                },
                                syncfs: function(e, t) {
                                    "function" == typeof e && (t = e, e = !1), lt.syncFSRequests++, lt.syncFSRequests > 1 && P("warning: " + lt.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
                                    var n = lt.getMounts(lt.root.mount),
                                        r = 0;

                                    function o(e) {
                                        return lt.syncFSRequests--, t(e)
                                    }

                                    function a(e) {
                                        if (e) return a.errored ? void 0 : (a.errored = !0, o(e));
                                        ++r >= n.length && o(null)
                                    }
                                    n.forEach((function(t) {
                                        if (!t.type.syncfs) return a(null);
                                        t.type.syncfs(t, e, a)
                                    }))
                                },
                                mount: function(e, t, n) {
                                    var r, o = "/" === n,
                                        a = !n;
                                    if (o && lt.root) throw new lt.ErrnoError(10);
                                    if (!o && !a) {
                                        var i = lt.lookupPath(n, {
                                            follow_mount: !1
                                        });
                                        if (n = i.path, r = i.node, lt.isMountpoint(r)) throw new lt.ErrnoError(10);
                                        if (!lt.isDir(r.mode)) throw new lt.ErrnoError(54)
                                    }
                                    var u = {
                                            type: e,
                                            opts: t,
                                            mountpoint: n,
                                            mounts: []
                                        },
                                        l = e.mount(u);
                                    return l.mount = u, u.root = l, o ? lt.root = l : r && (r.mounted = u, r.mount && r.mount.mounts.push(u)), l
                                },
                                unmount: function(e) {
                                    var t = lt.lookupPath(e, {
                                        follow_mount: !1
                                    });
                                    if (!lt.isMountpoint(t.node)) throw new lt.ErrnoError(28);
                                    var n = t.node,
                                        r = n.mounted,
                                        o = lt.getMounts(r);
                                    Object.keys(lt.nameTable).forEach((function(e) {
                                        for (var t = lt.nameTable[e]; t;) {
                                            var n = t.name_next;
                                            o.includes(t.mount) && lt.destroyNode(t), t = n
                                        }
                                    })), n.mounted = null;
                                    var a = n.mount.mounts.indexOf(r);
                                    n.mount.mounts.splice(a, 1)
                                },
                                lookup: function(e, t) {
                                    return e.node_ops.lookup(e, t)
                                },
                                mknod: function(e, t, n) {
                                    var r = lt.lookupPath(e, {
                                            parent: !0
                                        }).node,
                                        o = rt.basename(e);
                                    if (!o || "." === o || ".." === o) throw new lt.ErrnoError(28);
                                    var a = lt.mayCreate(r, o);
                                    if (a) throw new lt.ErrnoError(a);
                                    if (!r.node_ops.mknod) throw new lt.ErrnoError(63);
                                    return r.node_ops.mknod(r, o, t, n)
                                },
                                create: function(e, t) {
                                    return t = void 0 !== t ? t : 438, t &= 4095, t |= 32768, lt.mknod(e, t, 0)
                                },
                                mkdir: function(e, t) {
                                    return t = void 0 !== t ? t : 511, t &= 1023, t |= 16384, lt.mknod(e, t, 0)
                                },
                                mkdirTree: function(e, t) {
                                    for (var n = e.split("/"), r = "", o = 0; o < n.length; ++o)
                                        if (n[o]) {
                                            r += "/" + n[o];
                                            try {
                                                lt.mkdir(r, t)
                                            } catch (a) {
                                                if (20 != a.errno) throw a
                                            }
                                        }
                                },
                                mkdev: function(e, t, n) {
                                    return "undefined" == typeof n && (n = t, t = 438), t |= 8192, lt.mknod(e, t, n)
                                },
                                symlink: function(e, t) {
                                    if (!ot.resolve(e)) throw new lt.ErrnoError(44);
                                    var n = lt.lookupPath(t, {
                                        parent: !0
                                    }).node;
                                    if (!n) throw new lt.ErrnoError(44);
                                    var r = rt.basename(t),
                                        o = lt.mayCreate(n, r);
                                    if (o) throw new lt.ErrnoError(o);
                                    if (!n.node_ops.symlink) throw new lt.ErrnoError(63);
                                    return n.node_ops.symlink(n, r, e)
                                },
                                rename: function(e, t) {
                                    var n, r, o = rt.dirname(e),
                                        a = rt.dirname(t),
                                        i = rt.basename(e),
                                        u = rt.basename(t);
                                    if (n = lt.lookupPath(e, {
                                            parent: !0
                                        }).node, r = lt.lookupPath(t, {
                                            parent: !0
                                        }).node, !n || !r) throw new lt.ErrnoError(44);
                                    if (n.mount !== r.mount) throw new lt.ErrnoError(75);
                                    var l, c = lt.lookupNode(n, i),
                                        s = ot.relative(e, a);
                                    if ("." !== s.charAt(0)) throw new lt.ErrnoError(28);
                                    if ("." !== (s = ot.relative(t, o)).charAt(0)) throw new lt.ErrnoError(55);
                                    try {
                                        l = lt.lookupNode(r, u)
                                    } catch (p) {}
                                    if (c !== l) {
                                        var f = lt.isDir(c.mode),
                                            d = lt.mayDelete(n, i, f);
                                        if (d) throw new lt.ErrnoError(d);
                                        if (d = l ? lt.mayDelete(r, u, f) : lt.mayCreate(r, u)) throw new lt.ErrnoError(d);
                                        if (!n.node_ops.rename) throw new lt.ErrnoError(63);
                                        if (lt.isMountpoint(c) || l && lt.isMountpoint(l)) throw new lt.ErrnoError(10);
                                        if (r !== n && (d = lt.nodePermissions(n, "w"))) throw new lt.ErrnoError(d);
                                        lt.hashRemoveNode(c);
                                        try {
                                            n.node_ops.rename(c, r, u)
                                        } catch (p) {
                                            throw p
                                        } finally {
                                            lt.hashAddNode(c)
                                        }
                                    }
                                },
                                rmdir: function(e) {
                                    var t = lt.lookupPath(e, {
                                            parent: !0
                                        }).node,
                                        n = rt.basename(e),
                                        r = lt.lookupNode(t, n),
                                        o = lt.mayDelete(t, n, !0);
                                    if (o) throw new lt.ErrnoError(o);
                                    if (!t.node_ops.rmdir) throw new lt.ErrnoError(63);
                                    if (lt.isMountpoint(r)) throw new lt.ErrnoError(10);
                                    t.node_ops.rmdir(t, n), lt.destroyNode(r)
                                },
                                readdir: function(e) {
                                    var t = lt.lookupPath(e, {
                                        follow: !0
                                    }).node;
                                    if (!t.node_ops.readdir) throw new lt.ErrnoError(54);
                                    return t.node_ops.readdir(t)
                                },
                                unlink: function(e) {
                                    var t = lt.lookupPath(e, {
                                        parent: !0
                                    }).node;
                                    if (!t) throw new lt.ErrnoError(44);
                                    var n = rt.basename(e),
                                        r = lt.lookupNode(t, n),
                                        o = lt.mayDelete(t, n, !1);
                                    if (o) throw new lt.ErrnoError(o);
                                    if (!t.node_ops.unlink) throw new lt.ErrnoError(63);
                                    if (lt.isMountpoint(r)) throw new lt.ErrnoError(10);
                                    t.node_ops.unlink(t, n), lt.destroyNode(r)
                                },
                                readlink: function(e) {
                                    var t = lt.lookupPath(e).node;
                                    if (!t) throw new lt.ErrnoError(44);
                                    if (!t.node_ops.readlink) throw new lt.ErrnoError(28);
                                    return ot.resolve(lt.getPath(t.parent), t.node_ops.readlink(t))
                                },
                                stat: function(e, t) {
                                    var n = lt.lookupPath(e, {
                                        follow: !t
                                    }).node;
                                    if (!n) throw new lt.ErrnoError(44);
                                    if (!n.node_ops.getattr) throw new lt.ErrnoError(63);
                                    return n.node_ops.getattr(n)
                                },
                                lstat: function(e) {
                                    return lt.stat(e, !0)
                                },
                                chmod: function(e, t, n) {
                                    var r;
                                    "string" == typeof e ? r = lt.lookupPath(e, {
                                        follow: !n
                                    }).node : r = e;
                                    if (!r.node_ops.setattr) throw new lt.ErrnoError(63);
                                    r.node_ops.setattr(r, {
                                        mode: 4095 & t | -4096 & r.mode,
                                        timestamp: Date.now()
                                    })
                                },
                                lchmod: function(e, t) {
                                    lt.chmod(e, t, !0)
                                },
                                fchmod: function(e, t) {
                                    var n = lt.getStream(e);
                                    if (!n) throw new lt.ErrnoError(8);
                                    lt.chmod(n.node, t)
                                },
                                chown: function(e, t, n, r) {
                                    var o;
                                    "string" == typeof e ? o = lt.lookupPath(e, {
                                        follow: !r
                                    }).node : o = e;
                                    if (!o.node_ops.setattr) throw new lt.ErrnoError(63);
                                    o.node_ops.setattr(o, {
                                        timestamp: Date.now()
                                    })
                                },
                                lchown: function(e, t, n) {
                                    lt.chown(e, t, n, !0)
                                },
                                fchown: function(e, t, n) {
                                    var r = lt.getStream(e);
                                    if (!r) throw new lt.ErrnoError(8);
                                    lt.chown(r.node, t, n)
                                },
                                truncate: function(e, t) {
                                    if (t < 0) throw new lt.ErrnoError(28);
                                    var n;
                                    "string" == typeof e ? n = lt.lookupPath(e, {
                                        follow: !0
                                    }).node : n = e;
                                    if (!n.node_ops.setattr) throw new lt.ErrnoError(63);
                                    if (lt.isDir(n.mode)) throw new lt.ErrnoError(31);
                                    if (!lt.isFile(n.mode)) throw new lt.ErrnoError(28);
                                    var r = lt.nodePermissions(n, "w");
                                    if (r) throw new lt.ErrnoError(r);
                                    n.node_ops.setattr(n, {
                                        size: t,
                                        timestamp: Date.now()
                                    })
                                },
                                ftruncate: function(e, t) {
                                    var n = lt.getStream(e);
                                    if (!n) throw new lt.ErrnoError(8);
                                    if (0 === (2097155 & n.flags)) throw new lt.ErrnoError(28);
                                    lt.truncate(n.node, t)
                                },
                                utime: function(e, t, n) {
                                    var r = lt.lookupPath(e, {
                                        follow: !0
                                    }).node;
                                    r.node_ops.setattr(r, {
                                        timestamp: Math.max(t, n)
                                    })
                                },
                                open: function(e, t, n, r, o) {
                                    if ("" === e) throw new lt.ErrnoError(44);
                                    var a;
                                    if (n = "undefined" == typeof n ? 438 : n, n = 64 & (t = "string" == typeof t ? lt.modeStringToFlags(t) : t) ? 4095 & n | 32768 : 0, "object" == typeof e) a = e;
                                    else {
                                        e = rt.normalize(e);
                                        try {
                                            a = lt.lookupPath(e, {
                                                follow: !(131072 & t)
                                            }).node
                                        } catch (c) {}
                                    }
                                    var i = !1;
                                    if (64 & t)
                                        if (a) {
                                            if (128 & t) throw new lt.ErrnoError(20)
                                        } else a = lt.mknod(e, n, 0), i = !0;
                                    if (!a) throw new lt.ErrnoError(44);
                                    if (lt.isChrdev(a.mode) && (t &= -513), 65536 & t && !lt.isDir(a.mode)) throw new lt.ErrnoError(54);
                                    if (!i) {
                                        var u = lt.mayOpen(a, t);
                                        if (u) throw new lt.ErrnoError(u)
                                    }
                                    512 & t && lt.truncate(a, 0), t &= -131713;
                                    var l = lt.createStream({
                                        node: a,
                                        path: lt.getPath(a),
                                        flags: t,
                                        seekable: !0,
                                        position: 0,
                                        stream_ops: a.stream_ops,
                                        ungotten: [],
                                        error: !1
                                    }, r, o);
                                    return l.stream_ops.open && l.stream_ops.open(l), !d.logReadFiles || 1 & t || (lt.readFiles || (lt.readFiles = {}), e in lt.readFiles || (lt.readFiles[e] = 1)), l
                                },
                                close: function(e) {
                                    if (lt.isClosed(e)) throw new lt.ErrnoError(8);
                                    e.getdents && (e.getdents = null);
                                    try {
                                        e.stream_ops.close && e.stream_ops.close(e)
                                    } catch (t) {
                                        throw t
                                    } finally {
                                        lt.closeStream(e.fd)
                                    }
                                    e.fd = null
                                },
                                isClosed: function(e) {
                                    return null === e.fd
                                },
                                llseek: function(e, t, n) {
                                    if (lt.isClosed(e)) throw new lt.ErrnoError(8);
                                    if (!e.seekable || !e.stream_ops.llseek) throw new lt.ErrnoError(70);
                                    if (0 != n && 1 != n && 2 != n) throw new lt.ErrnoError(28);
                                    return e.position = e.stream_ops.llseek(e, t, n), e.ungotten = [], e.position
                                },
                                read: function(e, t, n, r, o) {
                                    if (r < 0 || o < 0) throw new lt.ErrnoError(28);
                                    if (lt.isClosed(e)) throw new lt.ErrnoError(8);
                                    if (1 === (2097155 & e.flags)) throw new lt.ErrnoError(8);
                                    if (lt.isDir(e.node.mode)) throw new lt.ErrnoError(31);
                                    if (!e.stream_ops.read) throw new lt.ErrnoError(28);
                                    var a = "undefined" != typeof o;
                                    if (a) {
                                        if (!e.seekable) throw new lt.ErrnoError(70)
                                    } else o = e.position;
                                    var i = e.stream_ops.read(e, t, n, r, o);
                                    return a || (e.position += i), i
                                },
                                write: function(e, t, n, r, o, a) {
                                    if (r < 0 || o < 0) throw new lt.ErrnoError(28);
                                    if (lt.isClosed(e)) throw new lt.ErrnoError(8);
                                    if (0 === (2097155 & e.flags)) throw new lt.ErrnoError(8);
                                    if (lt.isDir(e.node.mode)) throw new lt.ErrnoError(31);
                                    if (!e.stream_ops.write) throw new lt.ErrnoError(28);
                                    e.seekable && 1024 & e.flags && lt.llseek(e, 0, 2);
                                    var i = "undefined" != typeof o;
                                    if (i) {
                                        if (!e.seekable) throw new lt.ErrnoError(70)
                                    } else o = e.position;
                                    var u = e.stream_ops.write(e, t, n, r, o, a);
                                    return i || (e.position += u), u
                                },
                                allocate: function(e, t, n) {
                                    if (lt.isClosed(e)) throw new lt.ErrnoError(8);
                                    if (t < 0 || n <= 0) throw new lt.ErrnoError(28);
                                    if (0 === (2097155 & e.flags)) throw new lt.ErrnoError(8);
                                    if (!lt.isFile(e.node.mode) && !lt.isDir(e.node.mode)) throw new lt.ErrnoError(43);
                                    if (!e.stream_ops.allocate) throw new lt.ErrnoError(138);
                                    e.stream_ops.allocate(e, t, n)
                                },
                                mmap: function(e, t, n, r, o, a) {
                                    if (0 !== (2 & o) && 0 === (2 & a) && 2 !== (2097155 & e.flags)) throw new lt.ErrnoError(2);
                                    if (1 === (2097155 & e.flags)) throw new lt.ErrnoError(2);
                                    if (!e.stream_ops.mmap) throw new lt.ErrnoError(43);
                                    return e.stream_ops.mmap(e, t, n, r, o, a)
                                },
                                msync: function(e, t, n, r, o) {
                                    return e && e.stream_ops.msync ? e.stream_ops.msync(e, t, n, r, o) : 0
                                },
                                munmap: function(e) {
                                    return 0
                                },
                                ioctl: function(e, t, n) {
                                    if (!e.stream_ops.ioctl) throw new lt.ErrnoError(59);
                                    return e.stream_ops.ioctl(e, t, n)
                                },
                                readFile: function(e) {
                                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                    if (n.flags = n.flags || 0, n.encoding = n.encoding || "binary", "utf8" !== n.encoding && "binary" !== n.encoding) throw new Error('Invalid encoding type "' + n.encoding + '"');
                                    var r = lt.open(e, n.flags),
                                        o = lt.stat(e),
                                        a = o.size,
                                        i = new Uint8Array(a);
                                    return lt.read(r, i, 0, a, 0), "utf8" === n.encoding ? t = Q(i, 0) : "binary" === n.encoding && (t = i), lt.close(r), t
                                },
                                writeFile: function(e, t) {
                                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                                    n.flags = n.flags || 577;
                                    var r = lt.open(e, n.flags, n.mode);
                                    if ("string" == typeof t) {
                                        var o = new Uint8Array($(t) + 1),
                                            a = q(t, o, 0, o.length);
                                        lt.write(r, o, 0, a, void 0, n.canOwn)
                                    } else {
                                        if (!ArrayBuffer.isView(t)) throw new Error("Unsupported data type");
                                        lt.write(r, t, 0, t.byteLength, void 0, n.canOwn)
                                    }
                                    lt.close(r)
                                },
                                cwd: function() {
                                    return lt.currentPath
                                },
                                chdir: function(e) {
                                    var t = lt.lookupPath(e, {
                                        follow: !0
                                    });
                                    if (null === t.node) throw new lt.ErrnoError(44);
                                    if (!lt.isDir(t.node.mode)) throw new lt.ErrnoError(54);
                                    var n = lt.nodePermissions(t.node, "x");
                                    if (n) throw new lt.ErrnoError(n);
                                    lt.currentPath = t.path
                                },
                                createDefaultDirectories: function() {
                                    lt.mkdir("/tmp"), lt.mkdir("/home"), lt.mkdir("/home/web_user")
                                },
                                createDefaultDevices: function() {
                                    lt.mkdir("/dev"), lt.registerDevice(lt.makedev(1, 3), {
                                        read: function() {
                                            return 0
                                        },
                                        write: function(e, t, n, r, o) {
                                            return r
                                        }
                                    }), lt.mkdev("/dev/null", lt.makedev(1, 3)), at.register(lt.makedev(5, 0), at.default_tty_ops), at.register(lt.makedev(6, 0), at.default_tty1_ops), lt.mkdev("/dev/tty", lt.makedev(5, 0)), lt.mkdev("/dev/tty1", lt.makedev(6, 0));
                                    var e = function() {
                                        if ("object" == typeof crypto && "function" == typeof crypto.getRandomValues) {
                                            var e = new Uint8Array(1);
                                            return function() {
                                                return crypto.getRandomValues(e), e[0]
                                            }
                                        }
                                        return function() {
                                            De("randomDevice")
                                        }
                                    }();
                                    lt.createDevice("/dev", "random", e), lt.createDevice("/dev", "urandom", e), lt.mkdir("/dev/shm"), lt.mkdir("/dev/shm/tmp")
                                },
                                createSpecialDirectories: function() {
                                    lt.mkdir("/proc");
                                    var e = lt.mkdir("/proc/self");
                                    lt.mkdir("/proc/self/fd"), lt.mount({
                                        mount: function() {
                                            var t = lt.createNode(e, "fd", 16895, 73);
                                            return t.node_ops = {
                                                lookup: function(e, t) {
                                                    var n = +t,
                                                        r = lt.getStream(n);
                                                    if (!r) throw new lt.ErrnoError(8);
                                                    var o = {
                                                        parent: null,
                                                        mount: {
                                                            mountpoint: "fake"
                                                        },
                                                        node_ops: {
                                                            readlink: function() {
                                                                return r.path
                                                            }
                                                        }
                                                    };
                                                    return o.parent = o, o
                                                }
                                            }, t
                                        }
                                    }, {}, "/proc/self/fd")
                                },
                                createStandardStreams: function() {
                                    d.stdin ? lt.createDevice("/dev", "stdin", d.stdin) : lt.symlink("/dev/tty", "/dev/stdin"), d.stdout ? lt.createDevice("/dev", "stdout", null, d.stdout) : lt.symlink("/dev/tty", "/dev/stdout"), d.stderr ? lt.createDevice("/dev", "stderr", null, d.stderr) : lt.symlink("/dev/tty1", "/dev/stderr");
                                    lt.open("/dev/stdin", 0), lt.open("/dev/stdout", 1), lt.open("/dev/stderr", 1)
                                },
                                ensureErrnoError: function() {
                                    lt.ErrnoError || (lt.ErrnoError = function(e, t) {
                                        this.node = t, this.setErrno = function(e) {
                                            this.errno = e
                                        }, this.setErrno(e), this.message = "FS error"
                                    }, lt.ErrnoError.prototype = new Error, lt.ErrnoError.prototype.constructor = lt.ErrnoError, [44].forEach((function(e) {
                                        lt.genericErrors[e] = new lt.ErrnoError(e), lt.genericErrors[e].stack = "<generic error, no stack>"
                                    })))
                                },
                                staticInit: function() {
                                    lt.ensureErrnoError(), lt.nameTable = new Array(4096), lt.mount(ut, {}, "/"), lt.createDefaultDirectories(), lt.createDefaultDevices(), lt.createSpecialDirectories(), lt.filesystems = {
                                        MEMFS: ut
                                    }
                                },
                                init: function(e, t, n) {
                                    lt.init.initialized = !0, lt.ensureErrnoError(), d.stdin = e || d.stdin, d.stdout = t || d.stdout, d.stderr = n || d.stderr, lt.createStandardStreams()
                                },
                                quit: function() {
                                    lt.init.initialized = !1;
                                    for (var e = 0; e < lt.streams.length; e++) {
                                        var t = lt.streams[e];
                                        t && lt.close(t)
                                    }
                                },
                                getMode: function(e, t) {
                                    var n = 0;
                                    return e && (n |= 365), t && (n |= 146), n
                                },
                                findObject: function(e, t) {
                                    var n = lt.analyzePath(e, t);
                                    return n.exists ? n.object : null
                                },
                                analyzePath: function(e, t) {
                                    try {
                                        e = (r = lt.lookupPath(e, {
                                            follow: !t
                                        })).path
                                    } catch (o) {}
                                    var n = {
                                        isRoot: !1,
                                        exists: !1,
                                        error: 0,
                                        name: null,
                                        path: null,
                                        object: null,
                                        parentExists: !1,
                                        parentPath: null,
                                        parentObject: null
                                    };
                                    try {
                                        var r = lt.lookupPath(e, {
                                            parent: !0
                                        });
                                        n.parentExists = !0, n.parentPath = r.path, n.parentObject = r.node, n.name = rt.basename(e), r = lt.lookupPath(e, {
                                            follow: !t
                                        }), n.exists = !0, n.path = r.path, n.object = r.node, n.name = r.node.name, n.isRoot = "/" === r.path
                                    } catch (o) {
                                        n.error = o.errno
                                    }
                                    return n
                                },
                                createPath: function(e, t, n, r) {
                                    e = "string" == typeof e ? e : lt.getPath(e);
                                    for (var o = t.split("/").reverse(); o.length;) {
                                        var a = o.pop();
                                        if (a) {
                                            var i = rt.join2(e, a);
                                            try {
                                                lt.mkdir(i)
                                            } catch (u) {}
                                            e = i
                                        }
                                    }
                                    return i
                                },
                                createFile: function(e, t, n, r, o) {
                                    var a = rt.join2("string" == typeof e ? e : lt.getPath(e), t),
                                        i = lt.getMode(r, o);
                                    return lt.create(a, i)
                                },
                                createDataFile: function(e, t, n, r, o, a) {
                                    var i = t;
                                    e && (e = "string" == typeof e ? e : lt.getPath(e), i = t ? rt.join2(e, t) : e);
                                    var u = lt.getMode(r, o),
                                        l = lt.create(i, u);
                                    if (n) {
                                        if ("string" == typeof n) {
                                            for (var c = new Array(n.length), s = 0, f = n.length; s < f; ++s) c[s] = n.charCodeAt(s);
                                            n = c
                                        }
                                        lt.chmod(l, 146 | u);
                                        var d = lt.open(l, 577);
                                        lt.write(d, n, 0, n.length, 0, a), lt.close(d), lt.chmod(l, u)
                                    }
                                    return l
                                },
                                createDevice: function(e, t, n, r) {
                                    var o = rt.join2("string" == typeof e ? e : lt.getPath(e), t),
                                        a = lt.getMode(!!n, !!r);
                                    lt.createDevice.major || (lt.createDevice.major = 64);
                                    var i = lt.makedev(lt.createDevice.major++, 0);
                                    return lt.registerDevice(i, {
                                        open: function(e) {
                                            e.seekable = !1
                                        },
                                        close: function(e) {
                                            r && r.buffer && r.buffer.length && r(10)
                                        },
                                        read: function(e, t, r, o, a) {
                                            for (var i = 0, u = 0; u < o; u++) {
                                                var l;
                                                try {
                                                    l = n()
                                                } catch (c) {
                                                    throw new lt.ErrnoError(29)
                                                }
                                                if (void 0 === l && 0 === i) throw new lt.ErrnoError(6);
                                                if (null === l || void 0 === l) break;
                                                i++, t[r + u] = l
                                            }
                                            return i && (e.node.timestamp = Date.now()), i
                                        },
                                        write: function(e, t, n, o, a) {
                                            for (var i = 0; i < o; i++) try {
                                                r(t[n + i])
                                            } catch (u) {
                                                throw new lt.ErrnoError(29)
                                            }
                                            return o && (e.node.timestamp = Date.now()), i
                                        }
                                    }), lt.mkdev(o, a, i)
                                },
                                forceLoadFile: function(e) {
                                    if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                                    if ("undefined" != typeof XMLHttpRequest) throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
                                    if (!p) throw new Error("Cannot load without read() or XMLHttpRequest.");
                                    try {
                                        e.contents = yr(p(e.url), !0), e.usedBytes = e.contents.length
                                    } catch (t) {
                                        throw new lt.ErrnoError(29)
                                    }
                                },
                                createLazyFile: function(e, t, n, r, o) {
                                    function a() {
                                        this.lengthKnown = !1, this.chunks = []
                                    }
                                    if (a.prototype.get = function(e) {
                                            if (!(e > this.length - 1 || e < 0)) {
                                                var t = e % this.chunkSize,
                                                    n = e / this.chunkSize | 0;
                                                return this.getter(n)[t]
                                            }
                                        }, a.prototype.setDataGetter = function(e) {
                                            this.getter = e
                                        }, a.prototype.cacheLength = function() {
                                            var e = new XMLHttpRequest;
                                            if (e.open("HEAD", n, !1), e.send(null), !(e.status >= 200 && e.status < 300 || 304 === e.status)) throw new Error("Couldn't load " + n + ". Status: " + e.status);
                                            var t, r = Number(e.getResponseHeader("Content-length")),
                                                o = (t = e.getResponseHeader("Accept-Ranges")) && "bytes" === t,
                                                a = (t = e.getResponseHeader("Content-Encoding")) && "gzip" === t,
                                                i = 1048576;
                                            o || (i = r);
                                            var u = this;
                                            u.setDataGetter((function(e) {
                                                var t = e * i,
                                                    o = (e + 1) * i - 1;
                                                if (o = Math.min(o, r - 1), "undefined" == typeof u.chunks[e] && (u.chunks[e] = function(e, t) {
                                                        if (e > t) throw new Error("invalid range (" + e + ", " + t + ") or no bytes requested!");
                                                        if (t > r - 1) throw new Error("only " + r + " bytes available! programmer error!");
                                                        var o = new XMLHttpRequest;
                                                        if (o.open("GET", n, !1), r !== i && o.setRequestHeader("Range", "bytes=" + e + "-" + t), o.responseType = "arraybuffer", o.overrideMimeType && o.overrideMimeType("text/plain; charset=x-user-defined"), o.send(null), !(o.status >= 200 && o.status < 300 || 304 === o.status)) throw new Error("Couldn't load " + n + ". Status: " + o.status);
                                                        return void 0 !== o.response ? new Uint8Array(o.response || []) : yr(o.responseText || "", !0)
                                                    }(t, o)), "undefined" == typeof u.chunks[e]) throw new Error("doXHR failed!");
                                                return u.chunks[e]
                                            })), !a && r || (i = r = 1, r = this.getter(0).length, i = r, C("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = r, this._chunkSize = i, this.lengthKnown = !0
                                        }, "undefined" != typeof XMLHttpRequest) {
                                        if (!_) throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
                                        var i = new a;
                                        Object.defineProperties(i, {
                                            length: {
                                                get: function() {
                                                    return this.lengthKnown || this.cacheLength(), this._length
                                                }
                                            },
                                            chunkSize: {
                                                get: function() {
                                                    return this.lengthKnown || this.cacheLength(), this._chunkSize
                                                }
                                            }
                                        });
                                        var u = {
                                            isDevice: !1,
                                            contents: i
                                        }
                                    } else u = {
                                        isDevice: !1,
                                        url: n
                                    };
                                    var l = lt.createFile(e, t, u, r, o);
                                    u.contents ? l.contents = u.contents : u.url && (l.contents = null, l.url = u.url), Object.defineProperties(l, {
                                        usedBytes: {
                                            get: function() {
                                                return this.contents.length
                                            }
                                        }
                                    });
                                    var c = {};
                                    return Object.keys(l.stream_ops).forEach((function(e) {
                                        var t = l.stream_ops[e];
                                        c[e] = function() {
                                            return lt.forceLoadFile(l), t.apply(null, arguments)
                                        }
                                    })), c.read = function(e, t, n, r, o) {
                                        lt.forceLoadFile(l);
                                        var a = e.node.contents;
                                        if (o >= a.length) return 0;
                                        var i = Math.min(a.length - o, r);
                                        if (a.slice)
                                            for (var u = 0; u < i; u++) t[n + u] = a[o + u];
                                        else
                                            for (u = 0; u < i; u++) t[n + u] = a.get(o + u);
                                        return i
                                    }, l.stream_ops = c, l
                                },
                                createPreloadedFile: function(e, t, n, r, o, a, i, u, l, c) {
                                    var s = t ? ot.resolve(rt.join2(e, t)) : e;

                                    function f(n) {
                                        function f(n) {
                                            c && c(), u || lt.createDataFile(e, t, n, r, o, l), a && a(), Ae()
                                        }
                                        an.handledByPreloadPlugin(n, s, f, (function() {
                                            i && i(), Ae()
                                        })) || f(n)
                                    }
                                    Oe(), "string" == typeof n ? function(e, t, n, r) {
                                        var o = r ? "" : "al " + e;
                                        h(e, (function(n) {
                                            U(n, 'Loading data file "' + e + '" failed (no arrayBuffer).'), t(new Uint8Array(n)), o && Ae()
                                        }), (function(t) {
                                            if (!n) throw 'Loading data file "' + e + '" failed.';
                                            n()
                                        })), o && Oe()
                                    }(n, (function(e) {
                                        return f(e)
                                    }), i) : f(n)
                                },
                                indexedDB: function() {
                                    return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
                                },
                                DB_NAME: function() {
                                    return "EM_FS_" + window.location.pathname
                                },
                                DB_VERSION: 20,
                                DB_STORE_NAME: "FILE_DATA",
                                saveFilesToDB: function(e, t, n) {
                                    t = t || function() {}, n = n || function() {};
                                    var r = lt.indexedDB();
                                    try {
                                        var o = r.open(lt.DB_NAME(), lt.DB_VERSION)
                                    } catch (a) {
                                        return n(a)
                                    }
                                    o.onupgradeneeded = function() {
                                        C("creating db"), o.result.createObjectStore(lt.DB_STORE_NAME)
                                    }, o.onsuccess = function() {
                                        var r = o.result.transaction([lt.DB_STORE_NAME], "readwrite"),
                                            a = r.objectStore(lt.DB_STORE_NAME),
                                            i = 0,
                                            u = 0,
                                            l = e.length;

                                        function c() {
                                            0 == u ? t() : n()
                                        }
                                        e.forEach((function(e) {
                                            var t = a.put(lt.analyzePath(e).object.contents, e);
                                            t.onsuccess = function() {
                                                ++i + u == l && c()
                                            }, t.onerror = function() {
                                                u++, i + u == l && c()
                                            }
                                        })), r.onerror = n
                                    }, o.onerror = n
                                },
                                loadFilesFromDB: function(e, t, n) {
                                    t = t || function() {}, n = n || function() {};
                                    var r = lt.indexedDB();
                                    try {
                                        var o = r.open(lt.DB_NAME(), lt.DB_VERSION)
                                    } catch (a) {
                                        return n(a)
                                    }
                                    o.onupgradeneeded = n, o.onsuccess = function() {
                                        var r = o.result;
                                        try {
                                            var i = r.transaction([lt.DB_STORE_NAME], "readonly")
                                        } catch (a) {
                                            return void n(a)
                                        }
                                        var u = i.objectStore(lt.DB_STORE_NAME),
                                            l = 0,
                                            c = 0,
                                            s = e.length;

                                        function f() {
                                            0 == c ? t() : n()
                                        }
                                        e.forEach((function(e) {
                                            var t = u.get(e);
                                            t.onsuccess = function() {
                                                lt.analyzePath(e).exists && lt.unlink(e), lt.createDataFile(rt.dirname(e), rt.basename(e), t.result, !0, !0, !0), ++l + c == s && f()
                                            }, t.onerror = function() {
                                                c++, l + c == s && f()
                                            }
                                        })), i.onerror = n
                                    }, o.onerror = n
                                }
                            },
                            ct = {
                                DEFAULT_POLLMASK: 5,
                                calculateAt: function(e, t, n) {
                                    if ("/" === t[0]) return t;
                                    var r;
                                    if (-100 === e) r = lt.cwd();
                                    else {
                                        var o = lt.getStream(e);
                                        if (!o) throw new lt.ErrnoError(8);
                                        r = o.path
                                    }
                                    if (0 == t.length) {
                                        if (!n) throw new lt.ErrnoError(44);
                                        return r
                                    }
                                    return rt.join2(r, t)
                                },
                                doStat: function(e, t, n) {
                                    try {
                                        var r = e(t)
                                    } catch (o) {
                                        if (o && o.node && rt.normalize(t) !== rt.normalize(lt.getPath(o.node))) return -54;
                                        throw o
                                    }
                                    return i()[n >> 2] = r.dev, i()[n + 4 >> 2] = 0, i()[n + 8 >> 2] = r.ino, i()[n + 12 >> 2] = r.mode, i()[n + 16 >> 2] = r.nlink, i()[n + 20 >> 2] = r.uid, i()[n + 24 >> 2] = r.gid, i()[n + 28 >> 2] = r.rdev, i()[n + 32 >> 2] = 0, re[n + 40 >> 3] = BigInt(r.size), i()[n + 48 >> 2] = 4096, i()[n + 52 >> 2] = r.blocks, i()[n + 56 >> 2] = r.atime.getTime() / 1e3 | 0, i()[n + 60 >> 2] = 0, i()[n + 64 >> 2] = r.mtime.getTime() / 1e3 | 0, i()[n + 68 >> 2] = 0, i()[n + 72 >> 2] = r.ctime.getTime() / 1e3 | 0, i()[n + 76 >> 2] = 0, re[n + 80 >> 3] = BigInt(r.ino), 0
                                },
                                doMsync: function(e, t, n, o, a) {
                                    var i = r().slice(e, e + n);
                                    lt.msync(t, i, a, n, o)
                                },
                                doMkdir: function(e, t) {
                                    return "/" === (e = rt.normalize(e))[e.length - 1] && (e = e.substr(0, e.length - 1)), lt.mkdir(e, t, 0), 0
                                },
                                doMknod: function(e, t, n) {
                                    switch (61440 & t) {
                                        case 32768:
                                        case 8192:
                                        case 24576:
                                        case 4096:
                                        case 49152:
                                            break;
                                        default:
                                            return -28
                                    }
                                    return lt.mknod(e, t, n), 0
                                },
                                doReadlink: function(e, t, r) {
                                    if (r <= 0) return -28;
                                    var o = lt.readlink(e),
                                        a = Math.min(r, $(o)),
                                        i = n()[t + a];
                                    return G(o, t, r + 1), n()[t + a] = i, a
                                },
                                doAccess: function(e, t) {
                                    if (-8 & t) return -28;
                                    var n = lt.lookupPath(e, {
                                        follow: !0
                                    }).node;
                                    if (!n) return -44;
                                    var r = "";
                                    return 4 & t && (r += "r"), 2 & t && (r += "w"), 1 & t && (r += "x"), r && lt.nodePermissions(n, r) ? -2 : 0
                                },
                                doDup: function(e, t, n) {
                                    var r = lt.getStream(n);
                                    return r && lt.close(r), lt.open(e, t, 0, n, n).fd
                                },
                                doReadv: function(e, t, r, o) {
                                    for (var a = 0, u = 0; u < r; u++) {
                                        var l = i()[t + 8 * u >> 2],
                                            c = i()[t + (8 * u + 4) >> 2],
                                            s = lt.read(e, n(), l, c, o);
                                        if (s < 0) return -1;
                                        if (a += s, s < c) break
                                    }
                                    return a
                                },
                                doWritev: function(e, t, r, o) {
                                    for (var a = 0, u = 0; u < r; u++) {
                                        var l = i()[t + 8 * u >> 2],
                                            c = i()[t + (8 * u + 4) >> 2],
                                            s = lt.write(e, n(), l, c, o);
                                        if (s < 0) return -1;
                                        a += s
                                    }
                                    return a
                                },
                                varargs: void 0,
                                get: function() {
                                    return ct.varargs += 4, i()[ct.varargs - 4 >> 2]
                                },
                                getStr: function(e) {
                                    return H(e)
                                },
                                getStreamFromFD: function(e) {
                                    var t = lt.getStream(e);
                                    if (!t) throw new lt.ErrnoError(8);
                                    return t
                                },
                                get64: function(e, t) {
                                    return e
                                }
                            };

                        function st(e, t, n) {
                            if (E) return jn(2, 1, e, t, n);
                            ct.varargs = n;
                            try {
                                var r = ct.getStreamFromFD(e);
                                switch (t) {
                                    case 0:
                                        return (a = ct.get()) < 0 ? -28 : lt.open(r.path, r.flags, 0, a).fd;
                                    case 1:
                                    case 2:
                                    case 6:
                                    case 7:
                                        return 0;
                                    case 3:
                                        return r.flags;
                                    case 4:
                                        var a = ct.get();
                                        return r.flags |= a, 0;
                                    case 5:
                                        a = ct.get();
                                        return o()[a + 0 >> 1] = 2, 0;
                                    case 16:
                                    case 8:
                                    default:
                                        return -28;
                                    case 9:
                                        return Ye(28), -1
                                }
                            } catch (i) {
                                if ("undefined" == typeof lt || !(i instanceof lt.ErrnoError)) throw i;
                                return -i.errno
                            }
                        }

                        function ft(e, t, n) {
                            if (E) return jn(6, 1, e, t, n);
                            try {
                                return e = ct.getStr(e), i()[n + 4 >> 2] = 4096, i()[n + 40 >> 2] = 4096, i()[n + 8 >> 2] = 1e6, i()[n + 12 >> 2] = 5e5, i()[n + 16 >> 2] = 5e5, i()[n + 20 >> 2] = lt.nextInode, i()[n + 24 >> 2] = 1e6, i()[n + 28 >> 2] = 42, i()[n + 44 >> 2] = 2, i()[n + 36 >> 2] = 255, 0
                            } catch (r) {
                                if ("undefined" == typeof lt || !(r instanceof lt.ErrnoError)) throw r;
                                return -r.errno
                            }
                        }

                        function dt(e, t, n) {
                            if (E) return jn(5, 1, e, t, n);
                            try {
                                ct.getStreamFromFD(e);
                                return ft(0, t, n)
                            } catch (r) {
                                if ("undefined" == typeof lt || !(r instanceof lt.ErrnoError)) throw r;
                                return -r.errno
                            }
                        }

                        function pt(e, t) {
                            if (E) return jn(7, 1, e, t);
                            try {
                                if (0 === t) return -28;
                                var n = lt.cwd();
                                return t < $(n) + 1 ? -68 : (G(n, e, t), e)
                            } catch (r) {
                                if ("undefined" == typeof lt || !(r instanceof lt.ErrnoError)) throw r;
                                return -r.errno
                            }
                        }

                        function ht(e, t, r) {
                            if (E) return jn(8, 1, e, t, r);
                            try {
                                var a = ct.getStreamFromFD(e);
                                a.getdents || (a.getdents = lt.readdir(a.path));
                                for (var i = 280, u = 0, l = lt.llseek(a, 0, 1), c = Math.floor(l / i); c < a.getdents.length && u + i <= r;) {
                                    var s, f, d = a.getdents[c];
                                    if ("." === d) s = a.node.id, f = 4;
                                    else if (".." === d) {
                                        s = lt.lookupPath(a.path, {
                                            parent: !0
                                        }).node.id, f = 4
                                    } else {
                                        var p = lt.lookupNode(a.node, d);
                                        s = p.id, f = lt.isChrdev(p.mode) ? 2 : lt.isDir(p.mode) ? 4 : lt.isLink(p.mode) ? 10 : 8
                                    }
                                    re[t + u >> 3] = BigInt(s), re[t + u + 8 >> 3] = BigInt((c + 1) * i), o()[t + u + 16 >> 1] = 280, n()[t + u + 18 >> 0] = f, G(d, t + u + 19, 256), u += i, c += 1
                                }
                                return lt.llseek(a, c * i, 0), u
                            } catch (h) {
                                if ("undefined" == typeof lt || !(h instanceof lt.ErrnoError)) throw h;
                                return -h.errno
                            }
                        }

                        function mt(e, t, n) {
                            if (E) return jn(9, 1, e, t, n);
                            ct.varargs = n;
                            try {
                                var r = ct.getStreamFromFD(e);
                                switch (t) {
                                    case 21509:
                                    case 21505:
                                    case 21510:
                                    case 21511:
                                    case 21512:
                                    case 21506:
                                    case 21507:
                                    case 21508:
                                    case 21523:
                                    case 21524:
                                        return r.tty ? 0 : -59;
                                    case 21519:
                                        if (!r.tty) return -59;
                                        var o = ct.get();
                                        return i()[o >> 2] = 0, 0;
                                    case 21520:
                                        return r.tty ? -28 : -59;
                                    case 21531:
                                        o = ct.get();
                                        return lt.ioctl(r, t, o);
                                    default:
                                        De("bad ioctl syscall " + t)
                                }
                            } catch (a) {
                                if ("undefined" == typeof lt || !(a instanceof lt.ErrnoError)) throw a;
                                return -a.errno
                            }
                        }

                        function vt(e, t) {
                            if (E) return jn(11, 1, e, t);
                            try {
                                return e = ct.getStr(e), ct.doMkdir(e, t)
                            } catch (n) {
                                if ("undefined" == typeof lt || !(n instanceof lt.ErrnoError)) throw n;
                                return -n.errno
                            }
                        }

                        function gt(e, t, n) {
                            if (E) return jn(12, 1, e, t, n);
                            ct.varargs = n;
                            try {
                                var r = ct.getStr(e),
                                    o = n ? ct.get() : 0;
                                return lt.open(r, t, o).fd
                            } catch (a) {
                                if ("undefined" == typeof lt || !(a instanceof lt.ErrnoError)) throw a;
                                return -a.errno
                            }
                        }

                        function yt(e, t, n) {
                            if (E) return jn(13, 1, e, t, n);
                            try {
                                return e = ct.getStr(e), ct.doReadlink(e, t, n)
                            } catch (r) {
                                if ("undefined" == typeof lt || !(r instanceof lt.ErrnoError)) throw r;
                                return -r.errno
                            }
                        }

                        function bt(e, t) {
                            if (E) return jn(14, 1, e, t);
                            try {
                                return e = ct.getStr(e), t = ct.getStr(t), lt.rename(e, t), 0
                            } catch (n) {
                                if ("undefined" == typeof lt || !(n instanceof lt.ErrnoError)) throw n;
                                return -n.errno
                            }
                        }

                        function wt(e) {
                            if (E) return jn(15, 1, e);
                            try {
                                return e = ct.getStr(e), lt.rmdir(e), 0
                            } catch (t) {
                                if ("undefined" == typeof lt || !(t instanceof lt.ErrnoError)) throw t;
                                return -t.errno
                            }
                        }

                        function _t(e, t) {
                            if (E) return jn(16, 1, e, t);
                            try {
                                return e = ct.getStr(e), ct.doStat(lt.stat, e, t)
                            } catch (n) {
                                if ("undefined" == typeof lt || !(n instanceof lt.ErrnoError)) throw n;
                                return -n.errno
                            }
                        }

                        function kt(e) {
                            if (E) return jn(17, 1, e);
                            try {
                                return e = ct.getStr(e), lt.unlink(e), 0
                            } catch (t) {
                                if ("undefined" == typeof lt || !(t instanceof lt.ErrnoError)) throw t;
                                return -t.errno
                            }
                        }

                        function Et(e) {
                            if (null === e) return "null";
                            var t = typeof e;
                            return "object" === t || "array" === t || "function" === t ? e.toString() : "" + e
                        }
                        var xt = void 0;

                        function St(e) {
                            for (var t = "", n = e; r()[n];) t += xt[r()[n++]];
                            return t
                        }
                        var Ct = {},
                            Pt = {},
                            Lt = {};

                        function Tt(e) {
                            if (void 0 === e) return "_unknown";
                            var t = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
                            return t >= 48 && t <= 57 ? "_" + e : e
                        }

                        function Ft(e, t) {
                            return e = Tt(e), new Function("body", "return function " + e + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(t)
                        }

                        function Ot(e, t) {
                            var n = Ft(t, (function(e) {
                                this.name = t, this.message = e;
                                var n = new Error(e).stack;
                                void 0 !== n && (this.stack = this.toString() + "\n" + n.replace(/^Error(:[^\n]*)?\n/, ""))
                            }));
                            return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
                                return void 0 === this.message ? this.name : this.name + ": " + this.message
                            }, n
                        }
                        var At = void 0;

                        function Dt(e) {
                            throw new At(e)
                        }
                        var Nt = void 0;

                        function Mt(e) {
                            throw new Nt(e)
                        }

                        function It(e, t) {
                            var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            if (!("argPackAdvance" in t)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
                            var r = t.name;
                            if (e || Dt('type "' + r + '" must have a positive integer typeid pointer'), Pt.hasOwnProperty(e)) {
                                if (n.ignoreDuplicateRegistrations) return;
                                Dt("Cannot register type '" + r + "' twice")
                            }
                            if (Pt[e] = t, delete Lt[e], Ct.hasOwnProperty(e)) {
                                var o = Ct[e];
                                delete Ct[e], o.forEach((function(e) {
                                    e()
                                }))
                            }
                        }

                        function Rt(e, t, l) {
                            switch (t) {
                                case 0:
                                    return l ? function(e) {
                                        return n()[e]
                                    } : function(e) {
                                        return r()[e]
                                    };
                                case 1:
                                    return l ? function(e) {
                                        return o()[e >> 1]
                                    } : function(e) {
                                        return a()[e >> 1]
                                    };
                                case 2:
                                    return l ? function(e) {
                                        return i()[e >> 2]
                                    } : function(e) {
                                        return u()[e >> 2]
                                    };
                                case 3:
                                    return l ? function(e) {
                                        return re[e >> 3]
                                    } : function(e) {
                                        return oe[e >> 3]
                                    };
                                default:
                                    throw new TypeError("Unknown integer type: " + e)
                            }
                        }

                        function jt(e) {
                            switch (e) {
                                case 1:
                                    return 0;
                                case 2:
                                    return 1;
                                case 4:
                                    return 2;
                                case 8:
                                    return 3;
                                default:
                                    throw new TypeError("Unknown type size: " + e)
                            }
                        }
                        var Bt = [],
                            zt = [{}, {
                                value: void 0
                            }, {
                                value: null
                            }, {
                                value: !0
                            }, {
                                value: !1
                            }];

                        function Ut() {
                            for (var e = 0, t = 5; t < zt.length; ++t) void 0 !== zt[t] && ++e;
                            return e
                        }

                        function Wt() {
                            for (var e = 5; e < zt.length; ++e)
                                if (void 0 !== zt[e]) return zt[e];
                            return null
                        }
                        var Vt = function(e) {
                                return e || Dt("Cannot use deleted val. handle = " + e), zt[e].value
                            },
                            Qt = function(e) {
                                switch (e) {
                                    case void 0:
                                        return 1;
                                    case null:
                                        return 2;
                                    case !0:
                                        return 3;
                                    case !1:
                                        return 4;
                                    default:
                                        var t = Bt.length ? Bt.pop() : zt.length;
                                        return zt[t] = {
                                            refcount: 1,
                                            value: e
                                        }, t
                                }
                            };

                        function Ht(e) {
                            return this.fromWireType(u()[e >> 2])
                        }

                        function qt(e, t) {
                            switch (t) {
                                case 2:
                                    return function(e) {
                                        return this.fromWireType(l()[e >> 2])
                                    };
                                case 3:
                                    return function(e) {
                                        return this.fromWireType(c()[e >> 3])
                                    };
                                default:
                                    throw new TypeError("Unknown float type: " + e)
                            }
                        }

                        function Gt(e) {
                            for (; e.length;) {
                                var t = e.pop();
                                e.pop()(t)
                            }
                        }

                        function $t(e, t, n, r, o) {
                            var a = t.length;
                            a < 2 && Dt("argTypes array size mismatch! Must at least get return value and 'this' types!");
                            for (var i = null !== t[1] && null !== n, u = !1, l = 1; l < t.length; ++l)
                                if (null !== t[l] && void 0 === t[l].destructorFunction) {
                                    u = !0;
                                    break
                                } var c = "void" !== t[0].name,
                                s = "",
                                f = "";
                            for (l = 0; l < a - 2; ++l) s += (0 !== l ? ", " : "") + "arg" + l, f += (0 !== l ? ", " : "") + "arg" + l + "Wired";
                            var d = "return function " + Tt(e) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + e + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
                            u && (d += "var destructors = [];\n");
                            var p = u ? "destructors" : "null",
                                h = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"],
                                m = [Dt, r, o, Gt, t[0], t[1]];
                            i && (d += "var thisWired = classParam.toWireType(" + p + ", this);\n");
                            for (l = 0; l < a - 2; ++l) d += "var arg" + l + "Wired = argType" + l + ".toWireType(" + p + ", arg" + l + "); // " + t[l + 2].name + "\n", h.push("argType" + l), m.push(t[l + 2]);
                            if (i && (f = "thisWired" + (f.length > 0 ? ", " : "") + f), d += (c ? "var rv = " : "") + "invoker(fn" + (f.length > 0 ? ", " : "") + f + ");\n", u) d += "runDestructors(destructors);\n";
                            else
                                for (l = i ? 1 : 2; l < t.length; ++l) {
                                    var v = 1 === l ? "thisWired" : "arg" + (l - 2) + "Wired";
                                    null !== t[l].destructorFunction && (d += v + "_dtor(" + v + "); // " + t[l].name + "\n", h.push(v + "_dtor"), m.push(t[l].destructorFunction))
                                }
                            return c && (d += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), d += "}\n", h.push(d),
                                function(e, t) {
                                    if (!(e instanceof Function)) throw new TypeError("new_ called with constructor type " + typeof e + " which is not a function");
                                    var n = Ft(e.name || "unknownFunctionName", (function() {}));
                                    n.prototype = e.prototype;
                                    var r = new n,
                                        o = e.apply(r, t);
                                    return o instanceof Object ? o : r
                                }(Function, h).apply(null, m)
                        }

                        function Yt(e, t, n) {
                            d.hasOwnProperty(e) ? ((void 0 === n || void 0 !== d[e].overloadTable && void 0 !== d[e].overloadTable[n]) && Dt("Cannot register public name '" + e + "' twice"), function(e, t, n) {
                                if (void 0 === e[t].overloadTable) {
                                    var r = e[t];
                                    e[t] = function() {
                                        return e[t].overloadTable.hasOwnProperty(arguments.length) || Dt("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[t].overloadTable + ")!"), e[t].overloadTable[arguments.length].apply(this, arguments)
                                    }, e[t].overloadTable = [], e[t].overloadTable[r.argCount] = r
                                }
                            }(d, e, e), d.hasOwnProperty(n) && Dt("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), d[e].overloadTable[n] = t) : (d[e] = t, void 0 !== n && (d[e].numArguments = n))
                        }
                        var Xt = void 0;

                        function Kt(e) {
                            var t = xr(e),
                                n = St(t);
                            return _r(t), n
                        }

                        function Zt(e, t, n) {
                            if (E) return jn(18, 1, e, t, n);
                            var r = (new Date).getFullYear(),
                                o = new Date(r, 0, 1),
                                a = new Date(r, 6, 1),
                                u = o.getTimezoneOffset(),
                                l = a.getTimezoneOffset(),
                                c = Math.max(u, l);

                            function s(e) {
                                var t = e.toTimeString().match(/\(([A-Za-z ]+)\)$/);
                                return t ? t[1] : "GMT"
                            }
                            i()[e >> 2] = 60 * c, i()[t >> 2] = Number(u != l);
                            var f = s(o),
                                d = s(a),
                                p = pe(f),
                                h = pe(d);
                            l < u ? (i()[n >> 2] = p, i()[n + 4 >> 2] = h) : (i()[n >> 2] = h, i()[n + 4 >> 2] = p)
                        }

                        function Jt(e, t) {
                            if (an.mainLoop.timingMode = e, an.mainLoop.timingValue = t, !an.mainLoop.func) return 1;
                            if (an.mainLoop.running || (en(), an.mainLoop.running = !0), 0 == e) an.mainLoop.scheduler = function() {
                                var e = 0 | Math.max(0, an.mainLoop.tickStartTime + t - He());
                                setTimeout(an.mainLoop.runner, e)
                            }, an.mainLoop.method = "timeout";
                            else if (1 == e) an.mainLoop.scheduler = function() {
                                an.requestAnimationFrame(an.mainLoop.runner)
                            }, an.mainLoop.method = "rAF";
                            else if (2 == e) {
                                if ("undefined" == typeof setImmediate) {
                                    var n = [],
                                        r = "setimmediate";
                                    addEventListener("message", (function(e) {
                                        e.data !== r && e.data.target !== r || (e.stopPropagation(), n.shift()())
                                    }), !0), setImmediate = function(e) {
                                        n.push(e), _ ? (void 0 === d.setImmediates && (d.setImmediates = []), d.setImmediates.push(e), postMessage({
                                            target: r
                                        })) : postMessage(r, "*")
                                    }
                                }
                                an.mainLoop.scheduler = function() {
                                    setImmediate(an.mainLoop.runner)
                                }, an.mainLoop.method = "immediate"
                            }
                            return 0
                        }

                        function en() {
                            Se += 1
                        }

                        function tn() {
                            if (!Ce()) try {
                                E ? Nr(B) : Ue(B)
                            } catch (e) {
                                We(e)
                            }
                        }

                        function nn(e, t) {
                            if (!xe && !z)
                                if (t) e();
                                else try {
                                    e(), E && tn()
                                } catch (n) {
                                    We(n)
                                }
                        }

                        function rn() {
                            Se -= 1
                        }

                        function on(e, t) {
                            return en(), setTimeout((function() {
                                rn(), nn(e)
                            }), t)
                        }
                        var an = {
                                mainLoop: {
                                    running: !1,
                                    scheduler: null,
                                    method: "",
                                    currentlyRunningMainloop: 0,
                                    func: null,
                                    arg: 0,
                                    timingMode: 0,
                                    timingValue: 0,
                                    currentFrameNumber: 0,
                                    queue: [],
                                    pause: function() {
                                        an.mainLoop.scheduler = null, an.mainLoop.currentlyRunningMainloop++
                                    },
                                    resume: function() {
                                        an.mainLoop.currentlyRunningMainloop++;
                                        var e = an.mainLoop.timingMode,
                                            t = an.mainLoop.timingValue,
                                            n = an.mainLoop.func;
                                        an.mainLoop.func = null,
                                            function(e, t, n, r, o) {
                                                U(!an.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), an.mainLoop.func = e, an.mainLoop.arg = r;
                                                var a = an.mainLoop.currentlyRunningMainloop;

                                                function i() {
                                                    return !(a < an.mainLoop.currentlyRunningMainloop) || (rn(), tn(), !1)
                                                }
                                                if (an.mainLoop.running = !1, an.mainLoop.runner = function() {
                                                        if (!z)
                                                            if (an.mainLoop.queue.length > 0) {
                                                                var t = Date.now(),
                                                                    n = an.mainLoop.queue.shift();
                                                                if (n.func(n.arg), an.mainLoop.remainingBlockers) {
                                                                    var r = an.mainLoop.remainingBlockers,
                                                                        o = r % 1 == 0 ? r - 1 : Math.floor(r);
                                                                    n.counted ? an.mainLoop.remainingBlockers = o : (o += .5, an.mainLoop.remainingBlockers = (8 * r + o) / 9)
                                                                }
                                                                if (C('main loop blocker "' + n.name + '" took ' + (Date.now() - t) + " ms"), an.mainLoop.updateStatus(), !i()) return;
                                                                setTimeout(an.mainLoop.runner, 0)
                                                            } else i() && (an.mainLoop.currentFrameNumber = an.mainLoop.currentFrameNumber + 1 | 0, 1 == an.mainLoop.timingMode && an.mainLoop.timingValue > 1 && an.mainLoop.currentFrameNumber % an.mainLoop.timingValue != 0 ? an.mainLoop.scheduler() : (0 == an.mainLoop.timingMode && (an.mainLoop.tickStartTime = He()), an.mainLoop.runIter(e), i() && ("object" == typeof SDL && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), an.mainLoop.scheduler())))
                                                    }, o || (t && t > 0 ? Jt(0, 1e3 / t) : Jt(1, 1), an.mainLoop.scheduler()), n) throw "unwind"
                                            }(n, 0, !1, an.mainLoop.arg, !0), Jt(e, t), an.mainLoop.scheduler()
                                    },
                                    updateStatus: function() {
                                        if (d.setStatus) {
                                            var e = d.statusMessage || "Please wait...",
                                                t = an.mainLoop.remainingBlockers,
                                                n = an.mainLoop.expectedBlockers;
                                            t ? t < n ? d.setStatus(e + " (" + (n - t) + "/" + n + ")") : d.setStatus(e) : d.setStatus("")
                                        }
                                    },
                                    runIter: function(e) {
                                        if (!z) {
                                            if (d.preMainLoop)
                                                if (!1 === d.preMainLoop()) return;
                                            nn(e), d.postMainLoop && d.postMainLoop()
                                        }
                                    }
                                },
                                isFullscreen: !1,
                                pointerLock: !1,
                                moduleContextCreatedCallbacks: [],
                                workers: [],
                                init: function() {
                                    if (d.preloadPlugins || (d.preloadPlugins = []), !an.initted) {
                                        an.initted = !0;
                                        try {
                                            new Blob, an.hasBlobConstructor = !0
                                        } catch (o) {
                                            an.hasBlobConstructor = !1, C("warning: no blob constructor, cannot create blobs with mimetypes")
                                        }
                                        an.BlobBuilder = "undefined" != typeof MozBlobBuilder ? MozBlobBuilder : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : an.hasBlobConstructor ? null : C("warning: no BlobBuilder"), an.URLObject = "undefined" != typeof window ? window.URL ? window.URL : window.webkitURL : void 0, d.noImageDecoding || "undefined" != typeof an.URLObject || (C("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), d.noImageDecoding = !0);
                                        var e = {
                                            canHandle: function(e) {
                                                return !d.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(e)
                                            },
                                            handle: function(e, t, n, r) {
                                                var a = null;
                                                if (an.hasBlobConstructor) try {
                                                    (a = new Blob([e], {
                                                        type: an.getMimetype(t)
                                                    })).size !== e.length && (a = new Blob([new Uint8Array(e).buffer], {
                                                        type: an.getMimetype(t)
                                                    }))
                                                } catch (o) {
                                                    L("Blob constructor present but fails: " + o + "; falling back to blob builder")
                                                }
                                                if (!a) {
                                                    var i = new an.BlobBuilder;
                                                    i.append(new Uint8Array(e).buffer), a = i.getBlob()
                                                }
                                                var u = an.URLObject.createObjectURL(a),
                                                    l = new Image;
                                                l.onload = function() {
                                                    U(l.complete, "Image " + t + " could not be decoded");
                                                    var r = document.createElement("canvas");
                                                    r.width = l.width, r.height = l.height, r.getContext("2d").drawImage(l, 0, 0), d.preloadedImages[t] = r, an.URLObject.revokeObjectURL(u), n && n(e)
                                                }, l.onerror = function(e) {
                                                    C("Image " + u + " could not be decoded"), r && r()
                                                }, l.src = u
                                            }
                                        };
                                        d.preloadPlugins.push(e);
                                        var t = {
                                            canHandle: function(e) {
                                                return !d.noAudioDecoding && e.substr(-4) in {
                                                    ".ogg": 1,
                                                    ".wav": 1,
                                                    ".mp3": 1
                                                }
                                            },
                                            handle: function(e, t, n, r) {
                                                var a = !1;

                                                function i(r) {
                                                    a || (a = !0, d.preloadedAudios[t] = r, n && n(e))
                                                }

                                                function u() {
                                                    a || (a = !0, d.preloadedAudios[t] = new Audio, r && r())
                                                }
                                                if (!an.hasBlobConstructor) return u();
                                                try {
                                                    var l = new Blob([e], {
                                                        type: an.getMimetype(t)
                                                    })
                                                } catch (o) {
                                                    return u()
                                                }
                                                var c = an.URLObject.createObjectURL(l),
                                                    s = new Audio;
                                                s.addEventListener("canplaythrough", (function() {
                                                    i(s)
                                                }), !1), s.onerror = function(n) {
                                                    a || (C("warning: browser could not fully decode audio " + t + ", trying slower base64 approach"), s.src = "data:audio/x-" + t.substr(-3) + ";base64," + function(e) {
                                                        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = "", r = 0, o = 0, a = 0; a < e.length; a++)
                                                            for (r = r << 8 | e[a], o += 8; o >= 6;) {
                                                                var i = r >> o - 6 & 63;
                                                                o -= 6, n += t[i]
                                                            }
                                                        return 2 == o ? (n += t[(3 & r) << 4], n += "==") : 4 == o && (n += t[(15 & r) << 2], n += "="), n
                                                    }(e), i(s))
                                                }, s.src = c, on((function() {
                                                    i(s)
                                                }), 1e4)
                                            }
                                        };
                                        d.preloadPlugins.push(t);
                                        var n = d.canvas;
                                        n && (n.requestPointerLock = n.requestPointerLock || n.mozRequestPointerLock || n.webkitRequestPointerLock || n.msRequestPointerLock || function() {}, n.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {}, n.exitPointerLock = n.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", r, !1), document.addEventListener("mozpointerlockchange", r, !1), document.addEventListener("webkitpointerlockchange", r, !1), document.addEventListener("mspointerlockchange", r, !1), d.elementPointerLock && n.addEventListener("click", (function(e) {
                                            !an.pointerLock && d.canvas.requestPointerLock && (d.canvas.requestPointerLock(), e.preventDefault())
                                        }), !1))
                                    }

                                    function r() {
                                        an.pointerLock = document.pointerLockElement === d.canvas || document.mozPointerLockElement === d.canvas || document.webkitPointerLockElement === d.canvas || document.msPointerLockElement === d.canvas
                                    }
                                },
                                handledByPreloadPlugin: function(e, t, n, r) {
                                    an.init();
                                    var o = !1;
                                    return d.preloadPlugins.forEach((function(a) {
                                        o || a.canHandle(t) && (a.handle(e, t, n, r), o = !0)
                                    })), o
                                },
                                createContext: function(e, t, n, r) {
                                    if (t && d.ctx && e == d.canvas) return d.ctx;
                                    var o, a;
                                    if (t) {
                                        var i = {
                                            antialias: !1,
                                            alpha: !1,
                                            majorVersion: "undefined" != typeof WebGL2RenderingContext ? 2 : 1
                                        };
                                        if (r)
                                            for (var u in r) i[u] = r[u];
                                        "undefined" != typeof Ln && (a = Ln.createContext(e, i)) && (o = Ln.getContext(a).GLctx)
                                    } else o = e.getContext("2d");
                                    return o ? (n && (t || U("undefined" == typeof dr, "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), d.ctx = o, t && Ln.makeContextCurrent(a), d.useWebGL = t, an.moduleContextCreatedCallbacks.forEach((function(e) {
                                        e()
                                    })), an.init()), o) : null
                                },
                                destroyContext: function(e, t, n) {},
                                fullscreenHandlersInstalled: !1,
                                lockPointer: void 0,
                                resizeCanvas: void 0,
                                requestFullscreen: function(e, t) {
                                    an.lockPointer = e, an.resizeCanvas = t, "undefined" == typeof an.lockPointer && (an.lockPointer = !0), "undefined" == typeof an.resizeCanvas && (an.resizeCanvas = !1);
                                    var n = d.canvas;

                                    function r() {
                                        an.isFullscreen = !1;
                                        var e = n.parentNode;
                                        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e ? (n.exitFullscreen = an.exitFullscreen, an.lockPointer && n.requestPointerLock(), an.isFullscreen = !0, an.resizeCanvas ? an.setFullscreenCanvasSize() : an.updateCanvasDimensions(n)) : (e.parentNode.insertBefore(n, e), e.parentNode.removeChild(e), an.resizeCanvas ? an.setWindowedCanvasSize() : an.updateCanvasDimensions(n)), d.onFullScreen && d.onFullScreen(an.isFullscreen), d.onFullscreen && d.onFullscreen(an.isFullscreen)
                                    }
                                    an.fullscreenHandlersInstalled || (an.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", r, !1), document.addEventListener("mozfullscreenchange", r, !1), document.addEventListener("webkitfullscreenchange", r, !1), document.addEventListener("MSFullscreenChange", r, !1));
                                    var o = document.createElement("div");
                                    n.parentNode.insertBefore(o, n), o.appendChild(n), o.requestFullscreen = o.requestFullscreen || o.mozRequestFullScreen || o.msRequestFullscreen || (o.webkitRequestFullscreen ? function() {
                                        o.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
                                    } : null) || (o.webkitRequestFullScreen ? function() {
                                        o.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT)
                                    } : null), o.requestFullscreen()
                                },
                                exitFullscreen: function() {
                                    return !!an.isFullscreen && ((document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {}).apply(document, []), !0)
                                },
                                nextRAF: 0,
                                fakeRequestAnimationFrame: function(e) {
                                    var t = Date.now();
                                    if (0 === an.nextRAF) an.nextRAF = t + 1e3 / 60;
                                    else
                                        for (; t + 2 >= an.nextRAF;) an.nextRAF += 1e3 / 60;
                                    var n = Math.max(an.nextRAF - t, 0);
                                    setTimeout(e, n)
                                },
                                requestAnimationFrame: function(e) {
                                    function t(t) {
                                        return e.apply(this, arguments)
                                    }
                                    return t.toString = function() {
                                        return e.toString()
                                    }, t
                                }((function(e) {
                                    "function" != typeof requestAnimationFrame ? (0, an.fakeRequestAnimationFrame)(e) : requestAnimationFrame(e)
                                })),
                                safeSetTimeout: function(e) {
                                    return on(e)
                                },
                                safeRequestAnimationFrame: function(e) {
                                    return en(), an.requestAnimationFrame((function() {
                                        rn(), nn(e)
                                    }))
                                },
                                getMimetype: function(e) {
                                    return {
                                        jpg: "image/jpeg",
                                        jpeg: "image/jpeg",
                                        png: "image/png",
                                        bmp: "image/bmp",
                                        ogg: "audio/ogg",
                                        wav: "audio/wav",
                                        mp3: "audio/mpeg"
                                    } [e.substr(e.lastIndexOf(".") + 1)]
                                },
                                getUserMedia: function(e) {
                                    window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(e)
                                },
                                getMovementX: function(e) {
                                    return e.movementX || e.mozMovementX || e.webkitMovementX || 0
                                },
                                getMovementY: function(e) {
                                    return e.movementY || e.mozMovementY || e.webkitMovementY || 0
                                },
                                getMouseWheelDelta: function(e) {
                                    var t = 0;
                                    switch (e.type) {
                                        case "DOMMouseScroll":
                                            t = e.detail / 3;
                                            break;
                                        case "mousewheel":
                                            t = e.wheelDelta / 120;
                                            break;
                                        case "wheel":
                                            switch (t = e.deltaY, e.deltaMode) {
                                                case 0:
                                                    t /= 100;
                                                    break;
                                                case 1:
                                                    t /= 3;
                                                    break;
                                                case 2:
                                                    t *= 80;
                                                    break;
                                                default:
                                                    throw "unrecognized mouse wheel delta mode: " + e.deltaMode
                                            }
                                            break;
                                        default:
                                            throw "unrecognized mouse wheel event: " + e.type
                                    }
                                    return t
                                },
                                mouseX: 0,
                                mouseY: 0,
                                mouseMovementX: 0,
                                mouseMovementY: 0,
                                touches: {},
                                lastTouches: {},
                                calculateMouseEvent: function(e) {
                                    if (an.pointerLock) "mousemove" != e.type && "mozMovementX" in e ? an.mouseMovementX = an.mouseMovementY = 0 : (an.mouseMovementX = an.getMovementX(e), an.mouseMovementY = an.getMovementY(e)), "undefined" != typeof SDL ? (an.mouseX = SDL.mouseX + an.mouseMovementX, an.mouseY = SDL.mouseY + an.mouseMovementY) : (an.mouseX += an.mouseMovementX, an.mouseY += an.mouseMovementY);
                                    else {
                                        var t = d.canvas.getBoundingClientRect(),
                                            n = d.canvas.width,
                                            r = d.canvas.height,
                                            o = "undefined" != typeof window.scrollX ? window.scrollX : window.pageXOffset,
                                            a = "undefined" != typeof window.scrollY ? window.scrollY : window.pageYOffset;
                                        if ("touchstart" === e.type || "touchend" === e.type || "touchmove" === e.type) {
                                            var i = e.touch;
                                            if (void 0 === i) return;
                                            var u = i.pageX - (o + t.left),
                                                l = i.pageY - (a + t.top),
                                                c = {
                                                    x: u *= n / t.width,
                                                    y: l *= r / t.height
                                                };
                                            if ("touchstart" === e.type) an.lastTouches[i.identifier] = c, an.touches[i.identifier] = c;
                                            else if ("touchend" === e.type || "touchmove" === e.type) {
                                                var s = an.touches[i.identifier];
                                                s || (s = c), an.lastTouches[i.identifier] = s, an.touches[i.identifier] = c
                                            }
                                            return
                                        }
                                        var f = e.pageX - (o + t.left),
                                            p = e.pageY - (a + t.top);
                                        f *= n / t.width, p *= r / t.height, an.mouseMovementX = f - an.mouseX, an.mouseMovementY = p - an.mouseY, an.mouseX = f, an.mouseY = p
                                    }
                                },
                                resizeListeners: [],
                                updateResizeListeners: function() {
                                    var e = d.canvas;
                                    an.resizeListeners.forEach((function(t) {
                                        t(e.width, e.height)
                                    }))
                                },
                                setCanvasSize: function(e, t, n) {
                                    var r = d.canvas;
                                    an.updateCanvasDimensions(r, e, t), n || an.updateResizeListeners()
                                },
                                windowedWidth: 0,
                                windowedHeight: 0,
                                setFullscreenCanvasSize: function() {
                                    if ("undefined" != typeof SDL) {
                                        var e = u()[SDL.screen >> 2];
                                        e |= 8388608, i()[SDL.screen >> 2] = e
                                    }
                                    an.updateCanvasDimensions(d.canvas), an.updateResizeListeners()
                                },
                                setWindowedCanvasSize: function() {
                                    if ("undefined" != typeof SDL) {
                                        var e = u()[SDL.screen >> 2];
                                        e &= -8388609, i()[SDL.screen >> 2] = e
                                    }
                                    an.updateCanvasDimensions(d.canvas), an.updateResizeListeners()
                                },
                                updateCanvasDimensions: function(e, t, n) {
                                    t && n ? (e.widthNative = t, e.heightNative = n) : (t = e.widthNative, n = e.heightNative);
                                    var r = t,
                                        o = n;
                                    if (d.forcedAspectRatio && d.forcedAspectRatio > 0 && (r / o < d.forcedAspectRatio ? r = Math.round(o * d.forcedAspectRatio) : o = Math.round(r / d.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === e.parentNode && "undefined" != typeof screen) {
                                        var a = Math.min(screen.width / r, screen.height / o);
                                        r = Math.round(r * a), o = Math.round(o * a)
                                    }
                                    an.resizeCanvas ? (e.width != r && (e.width = r), e.height != o && (e.height = o), "undefined" != typeof e.style && (e.style.removeProperty("width"), e.style.removeProperty("height"))) : (e.width != t && (e.width = t), e.height != n && (e.height = n), "undefined" != typeof e.style && (r != t || o != n ? (e.style.setProperty("width", r + "px", "important"), e.style.setProperty("height", o + "px", "important")) : (e.style.removeProperty("width"), e.style.removeProperty("height"))))
                                }
                            },
                            un = {
                                QUEUE_INTERVAL: 25,
                                QUEUE_LOOKAHEAD: .1,
                                DEVICE_NAME: "Emscripten OpenAL",
                                CAPTURE_DEVICE_NAME: "Emscripten OpenAL capture",
                                ALC_EXTENSIONS: {
                                    ALC_SOFT_pause_device: !0,
                                    ALC_SOFT_HRTF: !0
                                },
                                AL_EXTENSIONS: {
                                    AL_EXT_float32: !0,
                                    AL_SOFT_loop_points: !0,
                                    AL_SOFT_source_length: !0,
                                    AL_EXT_source_distance_model: !0,
                                    AL_SOFT_source_spatialize: !0
                                },
                                _alcErr: 0,
                                alcErr: 0,
                                deviceRefCounts: {},
                                alcStringCache: {},
                                paused: !1,
                                stringCache: {},
                                contexts: {},
                                currentCtx: null,
                                buffers: {
                                    0: {
                                        id: 0,
                                        refCount: 0,
                                        audioBuf: null,
                                        frequency: 0,
                                        bytesPerSample: 2,
                                        channels: 1,
                                        length: 0
                                    }
                                },
                                paramArray: [],
                                _nextId: 1,
                                newId: function() {
                                    return un.freeIds.length > 0 ? un.freeIds.pop() : un._nextId++
                                },
                                freeIds: [],
                                scheduleContextAudio: function(e) {
                                    if (1 !== an.mainLoop.timingMode || "visible" == document.visibilityState)
                                        for (var t in e.sources) un.scheduleSourceAudio(e.sources[t])
                                },
                                scheduleSourceAudio: function(e, t) {
                                    if ((1 !== an.mainLoop.timingMode || "visible" == document.visibilityState) && 4114 === e.state) {
                                        for (var n = un.updateSourceTime(e), r = e.bufStartTime, o = e.bufOffset, a = e.bufsProcessed, i = 0; i < e.audioQueue.length; i++) {
                                            r = (s = e.audioQueue[i])._startTime + s._duration, o = 0, a += s._skipCount + 1
                                        }
                                        t || (t = un.QUEUE_LOOKAHEAD);
                                        for (var u = n + t, l = 0; r < u;) {
                                            if (a >= e.bufQueue.length) {
                                                if (!e.looping) break;
                                                a %= e.bufQueue.length
                                            }
                                            var c = e.bufQueue[a % e.bufQueue.length];
                                            if (0 === c.length) {
                                                if (++l === e.bufQueue.length) break
                                            } else {
                                                var s;
                                                (s = e.context.audioCtx.createBufferSource()).buffer = c.audioBuf, s.playbackRate.value = e.playbackRate, (c.audioBuf._loopStart || c.audioBuf._loopEnd) && (s.loopStart = c.audioBuf._loopStart, s.loopEnd = c.audioBuf._loopEnd);
                                                var f = 0;
                                                4136 === e.type && e.looping ? (f = Number.POSITIVE_INFINITY, s.loop = !0, c.audioBuf._loopStart && (s.loopStart = c.audioBuf._loopStart), c.audioBuf._loopEnd && (s.loopEnd = c.audioBuf._loopEnd)) : f = (c.audioBuf.duration - o) / e.playbackRate, s._startOffset = o, s._duration = f, s._skipCount = l, l = 0, s.connect(e.gain), "undefined" != typeof s.start ? (r = Math.max(r, e.context.audioCtx.currentTime), s.start(r, o)) : "undefined" != typeof s.noteOn && (r = Math.max(r, e.context.audioCtx.currentTime), s.noteOn(r)), s._startTime = r, e.audioQueue.push(s), r += f
                                            }
                                            o = 0, a++
                                        }
                                    }
                                },
                                updateSourceTime: function(e) {
                                    var t = e.context.audioCtx.currentTime;
                                    if (4114 !== e.state) return t;
                                    isFinite(e.bufStartTime) || (e.bufStartTime = t - e.bufOffset / e.playbackRate, e.bufOffset = 0);
                                    for (var n = 0; e.audioQueue.length;) {
                                        var r = e.audioQueue[0];
                                        if (e.bufsProcessed += r._skipCount, t < (n = r._startTime + r._duration)) break;
                                        e.audioQueue.shift(), e.bufStartTime = n, e.bufOffset = 0, e.bufsProcessed++
                                    }
                                    if (e.bufsProcessed >= e.bufQueue.length && !e.looping) un.setSourceState(e, 4116);
                                    else if (4136 === e.type && e.looping) {
                                        if (0 === (c = e.bufQueue[0]).length) e.bufOffset = 0;
                                        else {
                                            var o = (t - e.bufStartTime) * e.playbackRate,
                                                a = c.audioBuf._loopStart || 0,
                                                i = c.audioBuf._loopEnd || c.audioBuf.duration;
                                            i <= a && (i = c.audioBuf.duration), e.bufOffset = o < i ? o : a + (o - a) % (i - a)
                                        }
                                    } else if (e.audioQueue[0]) e.bufOffset = (t - e.audioQueue[0]._startTime) * e.playbackRate;
                                    else {
                                        if (4136 !== e.type && e.looping) {
                                            var u = un.sourceDuration(e) / e.playbackRate;
                                            u > 0 && (e.bufStartTime += Math.floor((t - e.bufStartTime) / u) * u)
                                        }
                                        for (var l = 0; l < e.bufQueue.length; l++) {
                                            if (e.bufsProcessed >= e.bufQueue.length) {
                                                if (!e.looping) {
                                                    un.setSourceState(e, 4116);
                                                    break
                                                }
                                                e.bufsProcessed %= e.bufQueue.length
                                            }
                                            var c;
                                            if ((c = e.bufQueue[e.bufsProcessed]).length > 0) {
                                                if (t < (n = e.bufStartTime + c.audioBuf.duration / e.playbackRate)) {
                                                    e.bufOffset = (t - e.bufStartTime) * e.playbackRate;
                                                    break
                                                }
                                                e.bufStartTime = n
                                            }
                                            e.bufOffset = 0, e.bufsProcessed++
                                        }
                                    }
                                    return t
                                },
                                cancelPendingSourceAudio: function(e) {
                                    un.updateSourceTime(e);
                                    for (var t = 1; t < e.audioQueue.length; t++) {
                                        e.audioQueue[t].stop()
                                    }
                                    e.audioQueue.length > 1 && (e.audioQueue.length = 1)
                                },
                                stopSourceAudio: function(e) {
                                    for (var t = 0; t < e.audioQueue.length; t++) e.audioQueue[t].stop();
                                    e.audioQueue.length = 0
                                },
                                setSourceState: function(e, t) {
                                    4114 === t ? (4114 !== e.state && 4116 != e.state || (e.bufsProcessed = 0, e.bufOffset = 0), un.stopSourceAudio(e), e.state = 4114, e.bufStartTime = Number.NEGATIVE_INFINITY, un.scheduleSourceAudio(e)) : 4115 === t ? 4114 === e.state && (un.updateSourceTime(e), un.stopSourceAudio(e), e.state = 4115) : 4116 === t ? 4113 !== e.state && (e.state = 4116, e.bufsProcessed = e.bufQueue.length, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, un.stopSourceAudio(e)) : 4113 === t && 4113 !== e.state && (e.state = 4113, e.bufsProcessed = 0, e.bufStartTime = Number.NEGATIVE_INFINITY, e.bufOffset = 0, un.stopSourceAudio(e))
                                },
                                initSourcePanner: function(e) {
                                    if (4144 !== e.type) {
                                        for (var t = un.buffers[0], n = 0; n < e.bufQueue.length; n++)
                                            if (0 !== e.bufQueue[n].id) {
                                                t = e.bufQueue[n];
                                                break
                                            } if (1 === e.spatialize || 2 === e.spatialize && 1 === t.channels) {
                                            if (e.panner) return;
                                            e.panner = e.context.audioCtx.createPanner(), un.updateSourceGlobal(e), un.updateSourceSpace(e), e.panner.connect(e.context.gain), e.gain.disconnect(), e.gain.connect(e.panner)
                                        } else {
                                            if (!e.panner) return;
                                            e.panner.disconnect(), e.gain.disconnect(), e.gain.connect(e.context.gain), e.panner = null
                                        }
                                    }
                                },
                                updateContextGlobal: function(e) {
                                    for (var t in e.sources) un.updateSourceGlobal(e.sources[t])
                                },
                                updateSourceGlobal: function(e) {
                                    var t = e.panner;
                                    if (t) switch (t.refDistance = e.refDistance, t.maxDistance = e.maxDistance, t.rolloffFactor = e.rolloffFactor, t.panningModel = e.context.hrtf ? "HRTF" : "equalpower", e.context.sourceDistanceModel ? e.distanceModel : e.context.distanceModel) {
                                        case 0:
                                            t.distanceModel = "inverse", t.refDistance = 340282e33;
                                            break;
                                        case 53249:
                                        case 53250:
                                            t.distanceModel = "inverse";
                                            break;
                                        case 53251:
                                        case 53252:
                                            t.distanceModel = "linear";
                                            break;
                                        case 53253:
                                        case 53254:
                                            t.distanceModel = "exponential"
                                    }
                                },
                                updateListenerSpace: function(e) {
                                    var t = e.audioCtx.listener;
                                    for (var n in t.positionX ? (t.positionX.value = e.listener.position[0], t.positionY.value = e.listener.position[1], t.positionZ.value = e.listener.position[2]) : t.setPosition(e.listener.position[0], e.listener.position[1], e.listener.position[2]), t.forwardX ? (t.forwardX.value = e.listener.direction[0], t.forwardY.value = e.listener.direction[1], t.forwardZ.value = e.listener.direction[2], t.upX.value = e.listener.up[0], t.upY.value = e.listener.up[1], t.upZ.value = e.listener.up[2]) : t.setOrientation(e.listener.direction[0], e.listener.direction[1], e.listener.direction[2], e.listener.up[0], e.listener.up[1], e.listener.up[2]), e.sources) un.updateSourceSpace(e.sources[n])
                                },
                                updateSourceSpace: function(e) {
                                    if (e.panner) {
                                        var t = e.panner,
                                            n = e.position[0],
                                            r = e.position[1],
                                            o = e.position[2],
                                            a = e.direction[0],
                                            i = e.direction[1],
                                            u = e.direction[2],
                                            l = e.context.listener,
                                            c = l.position[0],
                                            s = l.position[1],
                                            f = l.position[2];
                                        if (e.relative) {
                                            var d = -l.direction[0],
                                                p = -l.direction[1],
                                                h = -l.direction[2],
                                                m = l.up[0],
                                                v = l.up[1],
                                                g = l.up[2],
                                                y = function(e, t, n) {
                                                    var r = Math.sqrt(e * e + t * t + n * n);
                                                    return r < Number.EPSILON ? 0 : 1 / r
                                                },
                                                b = y(d, p, h);
                                            d *= b, p *= b, h *= b;
                                            var w = (v *= b = y(m, v, g)) * h - (g *= b) * p,
                                                _ = g * d - (m *= b) * h,
                                                k = m * p - v * d,
                                                E = a,
                                                x = i,
                                                S = u;
                                            a = E * (w *= b = y(w, _, k)) + x * (m = p * (k *= b) - h * (_ *= b)) + S * d, i = E * _ + x * (v = h * w - d * k) + S * p, u = E * k + x * (g = d * _ - p * w) + S * h, n = (E = n) * w + (x = r) * m + (S = o) * d, r = E * _ + x * v + S * p, o = E * k + x * g + S * h, n += c, r += s, o += f
                                        }
                                        t.positionX ? (n != t.positionX.value && (t.positionX.value = n), r != t.positionY.value && (t.positionY.value = r), o != t.positionZ.value && (t.positionZ.value = o)) : t.setPosition(n, r, o), t.orientationX ? (a != t.orientationX.value && (t.orientationX.value = a), i != t.orientationY.value && (t.orientationY.value = i), u != t.orientationZ.value && (t.orientationZ.value = u)) : t.setOrientation(a, i, u);
                                        var C = e.dopplerShift,
                                            P = e.velocity[0],
                                            L = e.velocity[1],
                                            T = e.velocity[2],
                                            F = l.velocity[0],
                                            O = l.velocity[1],
                                            A = l.velocity[2];
                                        if (n === c && r === s && o === f || P === F && L === O && T === A) e.dopplerShift = 1;
                                        else {
                                            var D = e.context.speedOfSound,
                                                N = e.context.dopplerFactor,
                                                M = c - n,
                                                I = s - r,
                                                R = f - o,
                                                j = Math.sqrt(M * M + I * I + R * R),
                                                B = (M * F + I * O + R * A) / j,
                                                z = (M * P + I * L + R * T) / j;
                                            B = Math.min(B, D / N), z = Math.min(z, D / N), e.dopplerShift = (D - N * B) / (D - N * z)
                                        }
                                        e.dopplerShift !== C && un.updateSourceRate(e)
                                    }
                                },
                                updateSourceRate: function(e) {
                                    if (4114 === e.state) {
                                        un.cancelPendingSourceAudio(e);
                                        var t, n = e.audioQueue[0];
                                        if (!n) return;
                                        t = 4136 === e.type && e.looping ? Number.POSITIVE_INFINITY : (n.buffer.duration - n._startOffset) / e.playbackRate, n._duration = t, n.playbackRate.value = e.playbackRate, un.scheduleSourceAudio(e)
                                    }
                                },
                                sourceDuration: function(e) {
                                    for (var t = 0, n = 0; n < e.bufQueue.length; n++) {
                                        var r = e.bufQueue[n].audioBuf;
                                        t += r ? r.duration : 0
                                    }
                                    return t
                                },
                                sourceTell: function(e) {
                                    un.updateSourceTime(e);
                                    for (var t = 0, n = 0; n < e.bufsProcessed; n++) e.bufQueue[n].audioBuf && (t += e.bufQueue[n].audioBuf.duration);
                                    return t += e.bufOffset
                                },
                                sourceSeek: function(e, t) {
                                    var n = 4114 == e.state;
                                    if (n && un.setSourceState(e, 4113), null !== e.bufQueue[e.bufsProcessed].audioBuf) {
                                        for (e.bufsProcessed = 0; t > e.bufQueue[e.bufsProcessed].audioBuf.duration;) t -= e.bufQueue[e.bufsProcessed].audiobuf.duration, e.bufsProcessed++;
                                        e.bufOffset = t
                                    }
                                    n && un.setSourceState(e, 4114)
                                },
                                getGlobalParam: function(e, t) {
                                    if (!un.currentCtx) return null;
                                    switch (t) {
                                        case 49152:
                                            return un.currentCtx.dopplerFactor;
                                        case 49155:
                                            return un.currentCtx.speedOfSound;
                                        case 53248:
                                            return un.currentCtx.distanceModel;
                                        default:
                                            return un.currentCtx.err = 40962, null
                                    }
                                },
                                setGlobalParam: function(e, t, n) {
                                    if (un.currentCtx) switch (t) {
                                        case 49152:
                                            if (!Number.isFinite(n) || n < 0) return void(un.currentCtx.err = 40963);
                                            un.currentCtx.dopplerFactor = n, un.updateListenerSpace(un.currentCtx);
                                            break;
                                        case 49155:
                                            if (!Number.isFinite(n) || n <= 0) return void(un.currentCtx.err = 40963);
                                            un.currentCtx.speedOfSound = n, un.updateListenerSpace(un.currentCtx);
                                            break;
                                        case 53248:
                                            switch (n) {
                                                case 0:
                                                case 53249:
                                                case 53250:
                                                case 53251:
                                                case 53252:
                                                case 53253:
                                                case 53254:
                                                    un.currentCtx.distanceModel = n, un.updateContextGlobal(un.currentCtx);
                                                    break;
                                                default:
                                                    return void(un.currentCtx.err = 40963)
                                            }
                                            break;
                                        default:
                                            return void(un.currentCtx.err = 40962)
                                    }
                                },
                                getListenerParam: function(e, t) {
                                    if (!un.currentCtx) return null;
                                    switch (t) {
                                        case 4100:
                                            return un.currentCtx.listener.position;
                                        case 4102:
                                            return un.currentCtx.listener.velocity;
                                        case 4111:
                                            return un.currentCtx.listener.direction.concat(un.currentCtx.listener.up);
                                        case 4106:
                                            return un.currentCtx.gain.gain.value;
                                        default:
                                            return un.currentCtx.err = 40962, null
                                    }
                                },
                                setListenerParam: function(e, t, n) {
                                    if (un.currentCtx)
                                        if (null !== n) {
                                            var r = un.currentCtx.listener;
                                            switch (t) {
                                                case 4100:
                                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(un.currentCtx.err = 40963);
                                                    r.position[0] = n[0], r.position[1] = n[1], r.position[2] = n[2], un.updateListenerSpace(un.currentCtx);
                                                    break;
                                                case 4102:
                                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2])) return void(un.currentCtx.err = 40963);
                                                    r.velocity[0] = n[0], r.velocity[1] = n[1], r.velocity[2] = n[2], un.updateListenerSpace(un.currentCtx);
                                                    break;
                                                case 4106:
                                                    if (!Number.isFinite(n) || n < 0) return void(un.currentCtx.err = 40963);
                                                    un.currentCtx.gain.gain.value = n;
                                                    break;
                                                case 4111:
                                                    if (!Number.isFinite(n[0]) || !Number.isFinite(n[1]) || !Number.isFinite(n[2]) || !Number.isFinite(n[3]) || !Number.isFinite(n[4]) || !Number.isFinite(n[5])) return void(un.currentCtx.err = 40963);
                                                    r.direction[0] = n[0], r.direction[1] = n[1], r.direction[2] = n[2], r.up[0] = n[3], r.up[1] = n[4], r.up[2] = n[5], un.updateListenerSpace(un.currentCtx);
                                                    break;
                                                default:
                                                    return void(un.currentCtx.err = 40962)
                                            }
                                        } else un.currentCtx.err = 40962
                                },
                                getBufferParam: function(e, t, n) {
                                    if (un.currentCtx) {
                                        var r = un.buffers[t];
                                        if (r && 0 !== t) switch (n) {
                                            case 8193:
                                                return r.frequency;
                                            case 8194:
                                                return 8 * r.bytesPerSample;
                                            case 8195:
                                                return r.channels;
                                            case 8196:
                                                return r.length * r.bytesPerSample * r.channels;
                                            case 8213:
                                                return 0 === r.length ? [0, 0] : [(r.audioBuf._loopStart || 0) * r.frequency, (r.audioBuf._loopEnd || r.length) * r.frequency];
                                            default:
                                                return un.currentCtx.err = 40962, null
                                        } else un.currentCtx.err = 40961
                                    }
                                },
                                setBufferParam: function(e, t, n, r) {
                                    if (un.currentCtx) {
                                        var o = un.buffers[t];
                                        if (o && 0 !== t)
                                            if (null !== r) switch (n) {
                                                case 8196:
                                                    if (0 !== r) return void(un.currentCtx.err = 40963);
                                                    break;
                                                case 8213:
                                                    if (r[0] < 0 || r[0] > o.length || r[1] < 0 || r[1] > o.Length || r[0] >= r[1]) return void(un.currentCtx.err = 40963);
                                                    if (o.refCount > 0) return void(un.currentCtx.err = 40964);
                                                    o.audioBuf && (o.audioBuf._loopStart = r[0] / o.frequency, o.audioBuf._loopEnd = r[1] / o.frequency);
                                                    break;
                                                default:
                                                    return void(un.currentCtx.err = 40962)
                                            } else un.currentCtx.err = 40962;
                                            else un.currentCtx.err = 40961
                                    }
                                },
                                getSourceParam: function(e, t, n) {
                                    if (!un.currentCtx) return null;
                                    var r = un.currentCtx.sources[t];
                                    if (!r) return un.currentCtx.err = 40961, null;
                                    switch (n) {
                                        case 514:
                                            return r.relative;
                                        case 4097:
                                            return r.coneInnerAngle;
                                        case 4098:
                                            return r.coneOuterAngle;
                                        case 4099:
                                            return r.pitch;
                                        case 4100:
                                            return r.position;
                                        case 4101:
                                            return r.direction;
                                        case 4102:
                                            return r.velocity;
                                        case 4103:
                                            return r.looping;
                                        case 4105:
                                            return 4136 === r.type ? r.bufQueue[0].id : 0;
                                        case 4106:
                                            return r.gain.gain.value;
                                        case 4109:
                                            return r.minGain;
                                        case 4110:
                                            return r.maxGain;
                                        case 4112:
                                            return r.state;
                                        case 4117:
                                            return 1 === r.bufQueue.length && 0 === r.bufQueue[0].id ? 0 : r.bufQueue.length;
                                        case 4118:
                                            return 1 === r.bufQueue.length && 0 === r.bufQueue[0].id || r.looping ? 0 : r.bufsProcessed;
                                        case 4128:
                                            return r.refDistance;
                                        case 4129:
                                            return r.rolloffFactor;
                                        case 4130:
                                            return r.coneOuterGain;
                                        case 4131:
                                            return r.maxDistance;
                                        case 4132:
                                            return un.sourceTell(r);
                                        case 4133:
                                            return (o = un.sourceTell(r)) > 0 && (o *= r.bufQueue[0].frequency), o;
                                        case 4134:
                                            var o;
                                            return (o = un.sourceTell(r)) > 0 && (o *= r.bufQueue[0].frequency * r.bufQueue[0].bytesPerSample), o;
                                        case 4135:
                                            return r.type;
                                        case 4628:
                                            return r.spatialize;
                                        case 8201:
                                            for (var a = 0, i = 0, u = 0; u < r.bufQueue.length; u++) a += r.bufQueue[u].length, 0 !== r.bufQueue[u].id && (i = r.bufQueue[u].bytesPerSample * r.bufQueue[u].channels);
                                            return a * i;
                                        case 8202:
                                            for (a = 0, u = 0; u < r.bufQueue.length; u++) a += r.bufQueue[u].length;
                                            return a;
                                        case 8203:
                                            return un.sourceDuration(r);
                                        case 53248:
                                            return r.distanceModel;
                                        default:
                                            return un.currentCtx.err = 40962, null
                                    }
                                },
                                setSourceParam: function(e, t, n, r) {
                                    if (un.currentCtx) {
                                        var o = un.currentCtx.sources[t];
                                        if (o)
                                            if (null !== r) switch (n) {
                                                case 514:
                                                    if (1 === r) o.relative = !0, un.updateSourceSpace(o);
                                                    else {
                                                        if (0 !== r) return void(un.currentCtx.err = 40963);
                                                        o.relative = !1, un.updateSourceSpace(o)
                                                    }
                                                    break;
                                                case 4097:
                                                    if (!Number.isFinite(r)) return void(un.currentCtx.err = 40963);
                                                    o.coneInnerAngle = r, o.panner && (o.panner.coneInnerAngle = r % 360);
                                                    break;
                                                case 4098:
                                                    if (!Number.isFinite(r)) return void(un.currentCtx.err = 40963);
                                                    o.coneOuterAngle = r, o.panner && (o.panner.coneOuterAngle = r % 360);
                                                    break;
                                                case 4099:
                                                    if (!Number.isFinite(r) || r <= 0) return void(un.currentCtx.err = 40963);
                                                    if (o.pitch === r) break;
                                                    o.pitch = r, un.updateSourceRate(o);
                                                    break;
                                                case 4100:
                                                    if (!Number.isFinite(r[0]) || !Number.isFinite(r[1]) || !Number.isFinite(r[2])) return void(un.currentCtx.err = 40963);
                                                    o.position[0] = r[0], o.position[1] = r[1], o.position[2] = r[2], un.updateSourceSpace(o);
                                                    break;
                                                case 4101:
                                                    if (!Number.isFinite(r[0]) || !Number.isFinite(r[1]) || !Number.isFinite(r[2])) return void(un.currentCtx.err = 40963);
                                                    o.direction[0] = r[0], o.direction[1] = r[1], o.direction[2] = r[2], un.updateSourceSpace(o);
                                                    break;
                                                case 4102:
                                                    if (!Number.isFinite(r[0]) || !Number.isFinite(r[1]) || !Number.isFinite(r[2])) return void(un.currentCtx.err = 40963);
                                                    o.velocity[0] = r[0], o.velocity[1] = r[1], o.velocity[2] = r[2], un.updateSourceSpace(o);
                                                    break;
                                                case 4103:
                                                    if (1 === r) {
                                                        if (o.looping = !0, un.updateSourceTime(o), 4136 === o.type && o.audioQueue.length > 0)(a = o.audioQueue[0]).loop = !0, a._duration = Number.POSITIVE_INFINITY
                                                    } else {
                                                        if (0 !== r) return void(un.currentCtx.err = 40963);
                                                        o.looping = !1;
                                                        var a, i = un.updateSourceTime(o);
                                                        4136 === o.type && o.audioQueue.length > 0 && ((a = o.audioQueue[0]).loop = !1, a._duration = o.bufQueue[0].audioBuf.duration / o.playbackRate, a._startTime = i - o.bufOffset / o.playbackRate)
                                                    }
                                                    break;
                                                case 4105:
                                                    if (4114 === o.state || 4115 === o.state) return void(un.currentCtx.err = 40964);
                                                    if (0 === r) {
                                                        for (var u in o.bufQueue) o.bufQueue[u].refCount--;
                                                        o.bufQueue.length = 1, o.bufQueue[0] = un.buffers[0], o.bufsProcessed = 0, o.type = 4144
                                                    } else {
                                                        if (!(d = un.buffers[r])) return void(un.currentCtx.err = 40963);
                                                        for (var u in o.bufQueue) o.bufQueue[u].refCount--;
                                                        o.bufQueue.length = 0, d.refCount++, o.bufQueue = [d], o.bufsProcessed = 0, o.type = 4136
                                                    }
                                                    un.initSourcePanner(o), un.scheduleSourceAudio(o);
                                                    break;
                                                case 4106:
                                                    if (!Number.isFinite(r) || r < 0) return void(un.currentCtx.err = 40963);
                                                    o.gain.gain.value = r;
                                                    break;
                                                case 4109:
                                                    if (!Number.isFinite(r) || r < 0 || r > Math.min(o.maxGain, 1)) return void(un.currentCtx.err = 40963);
                                                    o.minGain = r;
                                                    break;
                                                case 4110:
                                                    if (!Number.isFinite(r) || r < Math.max(0, o.minGain) || r > 1) return void(un.currentCtx.err = 40963);
                                                    o.maxGain = r;
                                                    break;
                                                case 4128:
                                                    if (!Number.isFinite(r) || r < 0) return void(un.currentCtx.err = 40963);
                                                    o.refDistance = r, o.panner && (o.panner.refDistance = r);
                                                    break;
                                                case 4129:
                                                    if (!Number.isFinite(r) || r < 0) return void(un.currentCtx.err = 40963);
                                                    o.rolloffFactor = r, o.panner && (o.panner.rolloffFactor = r);
                                                    break;
                                                case 4130:
                                                    if (!Number.isFinite(r) || r < 0 || r > 1) return void(un.currentCtx.err = 40963);
                                                    o.coneOuterGain = r, o.panner && (o.panner.coneOuterGain = r);
                                                    break;
                                                case 4131:
                                                    if (!Number.isFinite(r) || r < 0) return void(un.currentCtx.err = 40963);
                                                    o.maxDistance = r, o.panner && (o.panner.maxDistance = r);
                                                    break;
                                                case 4132:
                                                    if (r < 0 || r > un.sourceDuration(o)) return void(un.currentCtx.err = 40963);
                                                    un.sourceSeek(o, r);
                                                    break;
                                                case 4133:
                                                    if ((s = un.sourceDuration(o)) > 0) {
                                                        var l;
                                                        for (var c in o.bufQueue)
                                                            if (c) {
                                                                l = o.bufQueue[c].frequency;
                                                                break
                                                            } r /= l
                                                    }
                                                    if (r < 0 || r > s) return void(un.currentCtx.err = 40963);
                                                    un.sourceSeek(o, r);
                                                    break;
                                                case 4134:
                                                    var s;
                                                    if ((s = un.sourceDuration(o)) > 0) {
                                                        var f;
                                                        for (var c in o.bufQueue)
                                                            if (c) {
                                                                var d;
                                                                f = (d = o.bufQueue[c]).frequency * d.bytesPerSample * d.channels;
                                                                break
                                                            } r /= f
                                                    }
                                                    if (r < 0 || r > s) return void(un.currentCtx.err = 40963);
                                                    un.sourceSeek(o, r);
                                                    break;
                                                case 4628:
                                                    if (0 !== r && 1 !== r && 2 !== r) return void(un.currentCtx.err = 40963);
                                                    o.spatialize = r, un.initSourcePanner(o);
                                                    break;
                                                case 8201:
                                                case 8202:
                                                case 8203:
                                                    un.currentCtx.err = 40964;
                                                    break;
                                                case 53248:
                                                    switch (r) {
                                                        case 0:
                                                        case 53249:
                                                        case 53250:
                                                        case 53251:
                                                        case 53252:
                                                        case 53253:
                                                        case 53254:
                                                            o.distanceModel = r, un.currentCtx.sourceDistanceModel && un.updateContextGlobal(un.currentCtx);
                                                            break;
                                                        default:
                                                            return void(un.currentCtx.err = 40963)
                                                    }
                                                    break;
                                                default:
                                                    return void(un.currentCtx.err = 40962)
                                            } else un.currentCtx.err = 40962;
                                            else un.currentCtx.err = 40961
                                    }
                                },
                                captures: {},
                                sharedCaptureAudioCtx: null,
                                requireValidCaptureDevice: function(e, t) {
                                    if (0 === e) return un.alcErr = 40961, null;
                                    var n = un.captures[e];
                                    return n ? n.mediaStreamError ? (un.alcErr = 40961, null) : n : (un.alcErr = 40961, null)
                                }
                            };

                        function ln(e, t, n, a, i) {
                            if (E) return jn(19, 1, e, t, n, a, i);
                            if (un.currentCtx) {
                                var u = un.buffers[e];
                                if (u)
                                    if (i <= 0) un.currentCtx.err = 40963;
                                    else {
                                        var c = null;
                                        try {
                                            switch (t) {
                                                case 4352:
                                                    if (a > 0)
                                                        for (var s = (c = un.currentCtx.audioCtx.createBuffer(1, a, i)).getChannelData(0), f = 0; f < a; ++f) s[f] = .0078125 * r()[n++] - 1;
                                                    u.bytesPerSample = 1, u.channels = 1, u.length = a;
                                                    break;
                                                case 4353:
                                                    if (a > 0) {
                                                        s = (c = un.currentCtx.audioCtx.createBuffer(1, a >> 1, i)).getChannelData(0);
                                                        n >>= 1;
                                                        for (f = 0; f < a >> 1; ++f) s[f] = 30517578125e-15 * o()[n++]
                                                    }
                                                    u.bytesPerSample = 2, u.channels = 1, u.length = a >> 1;
                                                    break;
                                                case 4354:
                                                    if (a > 0) {
                                                        s = (c = un.currentCtx.audioCtx.createBuffer(2, a >> 1, i)).getChannelData(0);
                                                        var d = c.getChannelData(1);
                                                        for (f = 0; f < a >> 1; ++f) s[f] = .0078125 * r()[n++] - 1, d[f] = .0078125 * r()[n++] - 1
                                                    }
                                                    u.bytesPerSample = 1, u.channels = 2, u.length = a >> 1;
                                                    break;
                                                case 4355:
                                                    if (a > 0) {
                                                        s = (c = un.currentCtx.audioCtx.createBuffer(2, a >> 2, i)).getChannelData(0), d = c.getChannelData(1);
                                                        n >>= 1;
                                                        for (f = 0; f < a >> 2; ++f) s[f] = 30517578125e-15 * o()[n++], d[f] = 30517578125e-15 * o()[n++]
                                                    }
                                                    u.bytesPerSample = 2, u.channels = 2, u.length = a >> 2;
                                                    break;
                                                case 65552:
                                                    if (a > 0) {
                                                        s = (c = un.currentCtx.audioCtx.createBuffer(1, a >> 2, i)).getChannelData(0);
                                                        n >>= 2;
                                                        for (f = 0; f < a >> 2; ++f) s[f] = l()[n++]
                                                    }
                                                    u.bytesPerSample = 4, u.channels = 1, u.length = a >> 2;
                                                    break;
                                                case 65553:
                                                    if (a > 0) {
                                                        s = (c = un.currentCtx.audioCtx.createBuffer(2, a >> 3, i)).getChannelData(0), d = c.getChannelData(1);
                                                        n >>= 2;
                                                        for (f = 0; f < a >> 3; ++f) s[f] = l()[n++], d[f] = l()[n++]
                                                    }
                                                    u.bytesPerSample = 4, u.channels = 2, u.length = a >> 3;
                                                    break;
                                                default:
                                                    return void(un.currentCtx.err = 40963)
                                            }
                                            u.frequency = i, u.audioBuf = c
                                        } catch (p) {
                                            return void(un.currentCtx.err = 40963)
                                        }
                                    }
                                else un.currentCtx.err = 40963
                            }
                        }

                        function cn(e, t) {
                            if (E) return jn(20, 1, e, t);
                            if (un.currentCtx) {
                                for (var n = 0; n < e; ++n) {
                                    if (0 !== (r = i()[t + 4 * n >> 2])) {
                                        if (!un.buffers[r]) return void(un.currentCtx.err = 40961);
                                        if (un.buffers[r].refCount) return void(un.currentCtx.err = 40964)
                                    }
                                }
                                for (n = 0; n < e; ++n) {
                                    var r;
                                    0 !== (r = i()[t + 4 * n >> 2]) && (un.deviceRefCounts[un.buffers[r].deviceId]--, delete un.buffers[r], un.freeIds.push(r))
                                }
                            }
                        }

                        function sn(e, t, n) {
                            if (E) return jn(22, 1, e, t, n);
                            switch (t) {
                                case 514:
                                case 4097:
                                case 4098:
                                case 4103:
                                case 4105:
                                case 4128:
                                case 4129:
                                case 4131:
                                case 4132:
                                case 4133:
                                case 4134:
                                case 4628:
                                case 8201:
                                case 8202:
                                case 53248:
                                    un.setSourceParam("alSourcei", e, t, n);
                                    break;
                                default:
                                    un.setSourceParam("alSourcei", e, t, null)
                            }
                        }

                        function fn(e, t) {
                            if (E) return jn(21, 1, e, t);
                            if (un.currentCtx) {
                                for (var n = 0; n < e; ++n) {
                                    var r = i()[t + 4 * n >> 2];
                                    if (!un.currentCtx.sources[r]) return void(un.currentCtx.err = 40961)
                                }
                                for (n = 0; n < e; ++n) {
                                    r = i()[t + 4 * n >> 2];
                                    un.setSourceState(un.currentCtx.sources[r], 4116), sn(r, 4105, 0), delete un.currentCtx.sources[r], un.freeIds.push(r)
                                }
                            }
                        }

                        function dn(e, t) {
                            if (E) return jn(23, 1, e, t);
                            if (un.currentCtx)
                                for (var n = 0; n < e; ++n) {
                                    var r = {
                                        deviceId: un.currentCtx.deviceId,
                                        id: un.newId(),
                                        refCount: 0,
                                        audioBuf: null,
                                        frequency: 0,
                                        bytesPerSample: 2,
                                        channels: 1,
                                        length: 0
                                    };
                                    un.deviceRefCounts[r.deviceId]++, un.buffers[r.id] = r, i()[t + 4 * n >> 2] = r.id
                                }
                        }

                        function pn(e, t) {
                            if (E) return jn(24, 1, e, t);
                            if (un.currentCtx)
                                for (var n = 0; n < e; ++n) {
                                    var r = un.currentCtx.audioCtx.createGain();
                                    r.connect(un.currentCtx.gain);
                                    var o = {
                                        context: un.currentCtx,
                                        id: un.newId(),
                                        type: 4144,
                                        state: 4113,
                                        bufQueue: [un.buffers[0]],
                                        audioQueue: [],
                                        looping: !1,
                                        pitch: 1,
                                        dopplerShift: 1,
                                        gain: r,
                                        minGain: 0,
                                        maxGain: 1,
                                        panner: null,
                                        bufsProcessed: 0,
                                        bufStartTime: Number.NEGATIVE_INFINITY,
                                        bufOffset: 0,
                                        relative: !1,
                                        refDistance: 1,
                                        maxDistance: 340282e33,
                                        rolloffFactor: 1,
                                        position: [0, 0, 0],
                                        velocity: [0, 0, 0],
                                        direction: [0, 0, 0],
                                        coneOuterGain: 0,
                                        coneInnerAngle: 360,
                                        coneOuterAngle: 360,
                                        distanceModel: 53250,
                                        spatialize: 2,
                                        get playbackRate() {
                                            return this.pitch * this.dopplerShift
                                        }
                                    };
                                    un.currentCtx.sources[o.id] = o, i()[t + 4 * n >> 2] = o.id
                                }
                        }

                        function hn() {
                            if (E) return jn(25, 1);
                            if (un.currentCtx) {
                                var e = un.currentCtx.err;
                                return un.currentCtx.err = 0, e
                            }
                            return 40964
                        }

                        function mn(e, t, n) {
                            if (E) return jn(26, 1, e, t, n);
                            var r = un.getSourceParam("alGetSourcei", e, t);
                            if (null !== r)
                                if (n) switch (t) {
                                    case 514:
                                    case 4097:
                                    case 4098:
                                    case 4103:
                                    case 4105:
                                    case 4112:
                                    case 4117:
                                    case 4118:
                                    case 4128:
                                    case 4129:
                                    case 4131:
                                    case 4132:
                                    case 4133:
                                    case 4134:
                                    case 4135:
                                    case 4628:
                                    case 8201:
                                    case 8202:
                                    case 53248:
                                        i()[n >> 2] = r;
                                        break;
                                    default:
                                        return void(un.currentCtx.err = 40962)
                                } else un.currentCtx.err = 40963
                        }

                        function vn(e) {
                            if (E) return jn(27, 1, e);
                            if (un.currentCtx) {
                                var t = un.currentCtx.sources[e];
                                t ? un.setSourceState(t, 4114) : un.currentCtx.err = 40961
                            }
                        }

                        function gn(e, t, n) {
                            if (E) return jn(28, 1, e, t, n);
                            if (un.currentCtx) {
                                var r = un.currentCtx.sources[e];
                                if (r)
                                    if (4136 !== r.type) {
                                        if (0 !== t) {
                                            for (var o = un.buffers[0], a = 0; a < r.bufQueue.length; a++)
                                                if (0 !== r.bufQueue[a].id) {
                                                    o = r.bufQueue[a];
                                                    break
                                                } for (a = 0; a < t; ++a) {
                                                var u = i()[n + 4 * a >> 2];
                                                if (!(l = un.buffers[u])) return void(un.currentCtx.err = 40961);
                                                0 === o.id || l.frequency === o.frequency && l.bytesPerSample === o.bytesPerSample && l.channels === o.channels || (un.currentCtx.err = 40964)
                                            }
                                            1 === r.bufQueue.length && 0 === r.bufQueue[0].id && (r.bufQueue.length = 0), r.type = 4137;
                                            for (a = 0; a < t; ++a) {
                                                var l;
                                                u = i()[n + 4 * a >> 2];
                                                (l = un.buffers[u]).refCount++, r.bufQueue.push(l)
                                            }
                                            r.looping && un.cancelPendingSourceAudio(r), un.initSourcePanner(r), un.scheduleSourceAudio(r)
                                        }
                                    } else un.currentCtx.err = 40964;
                                else un.currentCtx.err = 40961
                            }
                        }

                        function yn(e) {
                            if (E) return jn(29, 1, e);
                            if (un.currentCtx) {
                                var t = un.currentCtx.sources[e];
                                t ? un.setSourceState(t, 4116) : un.currentCtx.err = 40961
                            }
                        }

                        function bn(e, t, n) {
                            if (E) return jn(30, 1, e, t, n);
                            if (un.currentCtx) {
                                var r = un.currentCtx.sources[e];
                                if (r) {
                                    if (t > (1 === r.bufQueue.length && 0 === r.bufQueue[0].id ? 0 : r.bufsProcessed)) un.currentCtx.err = 40963;
                                    else if (0 !== t) {
                                        for (var o = 0; o < t; o++) {
                                            var a = r.bufQueue.shift();
                                            a.refCount--, i()[n + 4 * o >> 2] = a.id, r.bufsProcessed--
                                        }
                                        0 === r.bufQueue.length && r.bufQueue.push(un.buffers[0]), un.initSourcePanner(r), un.scheduleSourceAudio(r)
                                    }
                                } else un.currentCtx.err = 40961
                            }
                        }

                        function wn(e) {
                            return E ? jn(31, 1, e) : !(e in un.deviceRefCounts) || un.deviceRefCounts[e] > 0 ? 0 : (delete un.deviceRefCounts[e], un.freeIds.push(e), 1)
                        }

                        function _n(e, t) {
                            if (E) return jn(32, 1, e, t);
                            if (!(e in un.deviceRefCounts)) return un.alcErr = 40961, 0;
                            var n = null,
                                r = [],
                                o = null;
                            if (t >>= 2)
                                for (var a = 0, u = 0; a = i()[t++], r.push(a), 0 !== a;) switch (u = i()[t++], r.push(u), a) {
                                    case 4103:
                                        n || (n = {}), n.sampleRate = u;
                                        break;
                                    case 4112:
                                    case 4113:
                                        break;
                                    case 6546:
                                        switch (u) {
                                            case 0:
                                                o = !1;
                                                break;
                                            case 1:
                                                o = !0;
                                                break;
                                            case 2:
                                                break;
                                            default:
                                                return un.alcErr = 40964, 0
                                        }
                                        break;
                                    case 6550:
                                        if (0 !== u) return un.alcErr = 40964, 0;
                                        break;
                                    default:
                                        return un.alcErr = 40964, 0
                                }
                            var l = window.AudioContext || window.webkitAudioContext,
                                c = null;
                            try {
                                c = n ? new l(n) : new l
                            } catch (h) {
                                return "NotSupportedError" === h.name ? un.alcErr = 40964 : un.alcErr = 40961, 0
                            }! function(e, t) {
                                t || (t = [document, document.getElementById("canvas")]), ["keydown", "mousedown", "touchstart"].forEach((function(n) {
                                    t.forEach((function(t) {
                                        t && function(e, t, n) {
                                            e.addEventListener(t, n, {
                                                once: !0
                                            })
                                        }(t, n, (function() {
                                            "suspended" === e.state && e.resume()
                                        }))
                                    }))
                                }))
                            }(c), "undefined" == typeof c.createGain && (c.createGain = c.createGainNode);
                            var s = c.createGain();
                            s.connect(c.destination);
                            var f = {
                                deviceId: e,
                                id: un.newId(),
                                attrs: r,
                                audioCtx: c,
                                listener: {
                                    position: [0, 0, 0],
                                    velocity: [0, 0, 0],
                                    direction: [0, 0, 0],
                                    up: [0, 0, 0]
                                },
                                sources: [],
                                interval: setInterval((function() {
                                    un.scheduleContextAudio(f)
                                }), un.QUEUE_INTERVAL),
                                gain: s,
                                distanceModel: 53250,
                                speedOfSound: 343.3,
                                dopplerFactor: 1,
                                sourceDistanceModel: !1,
                                hrtf: o || !1,
                                _err: 0,
                                get err() {
                                    return this._err
                                },
                                set err(e) {
                                    0 !== this._err && 0 !== e || (this._err = e)
                                }
                            };
                            if (un.deviceRefCounts[e]++, un.contexts[f.id] = f, null !== o)
                                for (var d in un.contexts) {
                                    var p = un.contexts[d];
                                    p.deviceId === e && (p.hrtf = o, un.updateContextGlobal(p))
                                }
                            return f.id
                        }

                        function kn(e) {
                            if (E) return jn(33, 1, e);
                            var t = un.contexts[e];
                            un.currentCtx !== t ? (un.contexts[e].interval && clearInterval(un.contexts[e].interval), un.deviceRefCounts[t.deviceId]--, delete un.contexts[e], un.freeIds.push(e)) : un.alcErr = 40962
                        }

                        function En(e) {
                            return E ? jn(34, 1, e) : 0 === e ? (un.currentCtx = null, 0) : (un.currentCtx = un.contexts[e], 1)
                        }

                        function xn(e) {
                            if (E) return jn(35, 1, e);
                            if (e && H(e) !== un.DEVICE_NAME) return 0;
                            if ("undefined" != typeof AudioContext || "undefined" != typeof webkitAudioContext) {
                                var t = un.newId();
                                return un.deviceRefCounts[t] = 0, t
                            }
                            return 0
                        }
                        var Sn = [];

                        function Cn(e, t, n, o) {
                            var a = function(e, t) {
                                var n;
                                for (Sn.length = 0, t >>= 2; n = r()[e++];) {
                                    var o = n < 105;
                                    o && 1 & t && t++, Sn.push(o ? c()[t++ >> 1] : i()[t]), ++t
                                }
                                return Sn
                            }(t, n);
                            return E ? jn.apply(null, [-1 - e, o].concat(a)) : Re[e].apply(null, a)
                        }

                        function Pn() {
                            return 2147483648
                        }
                        var Ln = {
                            counter: 1,
                            buffers: [],
                            programs: [],
                            framebuffers: [],
                            renderbuffers: [],
                            textures: [],
                            shaders: [],
                            vaos: [],
                            contexts: {},
                            offscreenCanvases: {},
                            queries: [],
                            samplers: [],
                            transformFeedbacks: [],
                            syncs: [],
                            stringCache: {},
                            stringiCache: {},
                            unpackAlignment: 4,
                            recordError: function(e) {
                                Ln.lastError || (Ln.lastError = e)
                            },
                            getNewId: function(e) {
                                for (var t = Ln.counter++, n = e.length; n < t; n++) e[n] = null;
                                return t
                            },
                            getSource: function(e, t, n, r) {
                                for (var o = "", a = 0; a < t; ++a) {
                                    var u = r ? i()[r + 4 * a >> 2] : -1;
                                    o += H(i()[n + 4 * a >> 2], u < 0 ? void 0 : u)
                                }
                                return o
                            },
                            createContext: function(e, t) {
                                if (t.renderViaOffscreenBackBuffer && (t.preserveDrawingBuffer = !0), !e.getContextSafariWebGL2Fixed) {
                                    e.getContextSafariWebGL2Fixed = e.getContext, e.getContext = function(t, n) {
                                        var r = e.getContextSafariWebGL2Fixed(t, n);
                                        return "webgl" == t == r instanceof WebGLRenderingContext ? r : null
                                    }
                                }
                                var n = t.majorVersion > 1 ? e.getContext("webgl2", t) : e.getContext("webgl", t);
                                return n ? Ln.registerContext(n, t) : 0
                            },
                            enableOffscreenFramebufferAttributes: function(e) {
                                e.renderViaOffscreenBackBuffer = !0, e.preserveDrawingBuffer = !0
                            },
                            createOffscreenFramebuffer: function(e) {
                                var t = e.GLctx,
                                    n = t.createFramebuffer();
                                if (t.bindFramebuffer(36160, n), e.defaultFbo = n, e.defaultFboForbidBlitFramebuffer = !1, t.getContextAttributes().antialias) e.defaultFboForbidBlitFramebuffer = !0;
                                else {
                                    var r = navigator.userAgent.toLowerCase().match(/firefox\/(\d\d)/);
                                    if (null != r) {
                                        var o = r[1];
                                        e.defaultFboForbidBlitFramebuffer = o < 67
                                    }
                                }
                                e.defaultColorTarget = t.createTexture(), e.defaultDepthTarget = t.createRenderbuffer(), Ln.resizeOffscreenFramebuffer(e), t.bindTexture(3553, e.defaultColorTarget), t.texParameteri(3553, 10241, 9728), t.texParameteri(3553, 10240, 9728), t.texParameteri(3553, 10242, 33071), t.texParameteri(3553, 10243, 33071), t.texImage2D(3553, 0, 6408, t.canvas.width, t.canvas.height, 0, 6408, 5121, null), t.framebufferTexture2D(36160, 36064, 3553, e.defaultColorTarget, 0), t.bindTexture(3553, null);
                                t.createRenderbuffer();
                                t.bindRenderbuffer(36161, e.defaultDepthTarget), t.renderbufferStorage(36161, 33189, t.canvas.width, t.canvas.height), t.framebufferRenderbuffer(36160, 36096, 36161, e.defaultDepthTarget), t.bindRenderbuffer(36161, null);
                                var a = t.createBuffer();
                                t.bindBuffer(34962, a), t.bufferData(34962, new Float32Array([-1, -1, -1, 1, 1, -1, 1, 1]), 35044), t.bindBuffer(34962, null), e.blitVB = a;
                                var i = t.createShader(35633);
                                t.shaderSource(i, "attribute vec2 pos;varying lowp vec2 tex;void main() { tex = pos * 0.5 + vec2(0.5,0.5); gl_Position = vec4(pos, 0.0, 1.0); }"), t.compileShader(i);
                                var u = t.createShader(35632);
                                t.shaderSource(u, "varying lowp vec2 tex;uniform sampler2D sampler;void main() { gl_FragColor = texture2D(sampler, tex); }"), t.compileShader(u);
                                var l = t.createProgram();
                                t.attachShader(l, i), t.attachShader(l, u), t.linkProgram(l), e.blitProgram = l, e.blitPosLoc = t.getAttribLocation(l, "pos"), t.useProgram(l), t.uniform1i(t.getUniformLocation(l, "sampler"), 0), t.useProgram(null), e.defaultVao = void 0, t.createVertexArray && (e.defaultVao = t.createVertexArray(), t.bindVertexArray(e.defaultVao), t.enableVertexAttribArray(e.blitPosLoc), t.bindVertexArray(null))
                            },
                            resizeOffscreenFramebuffer: function(e) {
                                var t = e.GLctx;
                                if (e.defaultColorTarget) {
                                    var n = t.getParameter(32873);
                                    t.bindTexture(3553, e.defaultColorTarget), t.texImage2D(3553, 0, 6408, t.drawingBufferWidth, t.drawingBufferHeight, 0, 6408, 5121, null), t.bindTexture(3553, n)
                                }
                                if (e.defaultDepthTarget) {
                                    var r = t.getParameter(36007);
                                    t.bindRenderbuffer(36161, e.defaultDepthTarget), t.renderbufferStorage(36161, 33189, t.drawingBufferWidth, t.drawingBufferHeight), t.bindRenderbuffer(36161, r)
                                }
                            },
                            blitOffscreenFramebuffer: function(e) {
                                var t = e.GLctx,
                                    n = t.getParameter(3089);
                                n && t.disable(3089);
                                var r = t.getParameter(36006);
                                if (t.blitFramebuffer && !e.defaultFboForbidBlitFramebuffer) t.bindFramebuffer(36008, e.defaultFbo), t.bindFramebuffer(36009, null), t.blitFramebuffer(0, 0, t.canvas.width, t.canvas.height, 0, 0, t.canvas.width, t.canvas.height, 16384, 9728);
                                else {
                                    var o = function() {
                                        t.vertexAttribPointer(e.blitPosLoc, 2, 5126, !1, 0, 0), t.drawArrays(5, 0, 4)
                                    };
                                    t.bindFramebuffer(36160, null);
                                    var a = t.getParameter(35725);
                                    t.useProgram(e.blitProgram);
                                    var i = t.getParameter(34964);
                                    t.bindBuffer(34962, e.blitVB);
                                    var u = t.getParameter(34016);
                                    t.activeTexture(33984);
                                    var l = t.getParameter(32873);
                                    t.bindTexture(3553, e.defaultColorTarget);
                                    var c = t.getParameter(3042);
                                    c && t.disable(3042);
                                    var s = t.getParameter(2884);
                                    s && t.disable(2884);
                                    var f = t.getParameter(2929);
                                    f && t.disable(2929);
                                    var d = t.getParameter(2960);
                                    if (d && t.disable(2960), e.defaultVao) {
                                        var p = t.getParameter(34229);
                                        t.bindVertexArray(e.defaultVao), o(), t.bindVertexArray(p)
                                    } else {
                                        for (var h = {
                                                buffer: t.getVertexAttrib(e.blitPosLoc, 34975),
                                                size: t.getVertexAttrib(e.blitPosLoc, 34339),
                                                stride: t.getVertexAttrib(e.blitPosLoc, 34340),
                                                type: t.getVertexAttrib(e.blitPosLoc, 34341),
                                                normalized: t.getVertexAttrib(e.blitPosLoc, 34922),
                                                pointer: t.getVertexAttribOffset(e.blitPosLoc, 34373)
                                            }, m = t.getParameter(34921), v = [], g = 0; g < m; ++g) {
                                            var y = t.getVertexAttrib(g, 34338),
                                                b = g == e.blitPosLoc;
                                            y && !b && t.disableVertexAttribArray(g), !y && b && t.enableVertexAttribArray(g), v[g] = y
                                        }
                                        o();
                                        for (g = 0; g < m; ++g) {
                                            y = v[g];
                                            var w = g == e.blitPosLoc;
                                            y && !w && t.enableVertexAttribArray(g), !y && w && t.disableVertexAttribArray(g)
                                        }
                                        t.bindBuffer(34962, h.buffer), t.vertexAttribPointer(e.blitPosLoc, h.size, h.type, h.normalized, h.stride, h.offset)
                                    }
                                    d && t.enable(2960), f && t.enable(2929), s && t.enable(2884), c && t.enable(3042), t.bindTexture(3553, l), t.activeTexture(u), t.bindBuffer(34962, i), t.useProgram(a)
                                }
                                t.bindFramebuffer(36160, r), n && t.enable(3089)
                            },
                            registerContext: function(e, t) {
                                var n = kr(8);
                                i()[n + 4 >> 2] = Sr();
                                var r = {
                                    handle: n,
                                    attributes: t,
                                    version: t.majorVersion,
                                    GLctx: e
                                };
                                return e.canvas && (e.canvas.GLctxObject = r), Ln.contexts[n] = r, ("undefined" == typeof t.enableExtensionsByDefault || t.enableExtensionsByDefault) && Ln.initExtensions(r), t.renderViaOffscreenBackBuffer && Ln.createOffscreenFramebuffer(r), n
                            },
                            makeContextCurrent: function(e) {
                                return Ln.currentContext = Ln.contexts[e], d.ctx = dr = Ln.currentContext && Ln.currentContext.GLctx, !(e && !dr)
                            },
                            getContext: function(e) {
                                return Ln.contexts[e]
                            },
                            deleteContext: function(e) {
                                Ln.currentContext === Ln.contexts[e] && (Ln.currentContext = null), "object" == typeof Un && Un.removeAllHandlersOnTarget(Ln.contexts[e].GLctx.canvas), Ln.contexts[e] && Ln.contexts[e].GLctx.canvas && (Ln.contexts[e].GLctx.canvas.GLctxObject = void 0), _r(Ln.contexts[e].handle), Ln.contexts[e] = null
                            },
                            initExtensions: function(e) {
                                if (e || (e = Ln.currentContext), !e.initExtensionsDone) {
                                    e.initExtensionsDone = !0;
                                    var t, n = e.GLctx;
                                    ! function(e) {
                                        var t = e.getExtension("ANGLE_instanced_arrays");
                                        if (t) e.vertexAttribDivisor = function(e, n) {
                                            t.vertexAttribDivisorANGLE(e, n)
                                        }, e.drawArraysInstanced = function(e, n, r, o) {
                                            t.drawArraysInstancedANGLE(e, n, r, o)
                                        }, e.drawElementsInstanced = function(e, n, r, o, a) {
                                            t.drawElementsInstancedANGLE(e, n, r, o, a)
                                        }
                                    }(n),
                                    function(e) {
                                        var t = e.getExtension("OES_vertex_array_object");
                                        if (t) e.createVertexArray = function() {
                                            return t.createVertexArrayOES()
                                        }, e.deleteVertexArray = function(e) {
                                            t.deleteVertexArrayOES(e)
                                        }, e.bindVertexArray = function(e) {
                                            t.bindVertexArrayOES(e)
                                        }, e.isVertexArray = function(e) {
                                            return t.isVertexArrayOES(e)
                                        }
                                    }(n),
                                    function(e) {
                                        var t = e.getExtension("WEBGL_draw_buffers");
                                        if (t) e.drawBuffers = function(e, n) {
                                            t.drawBuffersWEBGL(e, n)
                                        }
                                    }(n), (t = n).dibvbi = t.getExtension("WEBGL_draw_instanced_base_vertex_base_instance"),
                                        function(e) {
                                            e.mdibvbi = e.getExtension("WEBGL_multi_draw_instanced_base_vertex_base_instance")
                                        }(n), e.version >= 2 && (n.disjointTimerQueryExt = n.getExtension("EXT_disjoint_timer_query_webgl2")), (e.version < 2 || !n.disjointTimerQueryExt) && (n.disjointTimerQueryExt = n.getExtension("EXT_disjoint_timer_query")),
                                        function(e) {
                                            e.multiDrawWebgl = e.getExtension("WEBGL_multi_draw")
                                        }(n), (n.getSupportedExtensions() || []).forEach((function(e) {
                                            e.includes("lose_context") || e.includes("debug") || n.getExtension(e)
                                        }))
                                }
                            }
                        };
                        var Tn = [];

                        function Fn(e, t, n, r) {
                            for (var o = 0; o < e; o++) {
                                var a = dr[n](),
                                    u = a && Ln.getNewId(r);
                                a ? (a.name = u, r[u] = a) : Ln.recordError(1282), i()[t + 4 * o >> 2] = u
                            }
                        }

                        function On(e, t, r) {
                            if (t) {
                                var o, a, c = void 0;
                                switch (e) {
                                    case 36346:
                                        c = 1;
                                        break;
                                    case 36344:
                                        return void(0 != r && 1 != r && Ln.recordError(1280));
                                    case 34814:
                                    case 36345:
                                        c = 0;
                                        break;
                                    case 34466:
                                        var s = dr.getParameter(34467);
                                        c = s ? s.length : 0;
                                        break;
                                    case 33309:
                                        if (Ln.currentContext.version < 2) return void Ln.recordError(1282);
                                        c = 2 * (dr.getSupportedExtensions() || []).length;
                                        break;
                                    case 33307:
                                    case 33308:
                                        if (Ln.currentContext.version < 2) return void Ln.recordError(1280);
                                        c = 33307 == e ? 3 : 0
                                }
                                if (void 0 === c) {
                                    var f = dr.getParameter(e);
                                    switch (typeof f) {
                                        case "number":
                                            c = f;
                                            break;
                                        case "boolean":
                                            c = f ? 1 : 0;
                                            break;
                                        case "string":
                                            return void Ln.recordError(1280);
                                        case "object":
                                            if (null === f) switch (e) {
                                                case 34964:
                                                case 35725:
                                                case 34965:
                                                case 36006:
                                                case 36007:
                                                case 32873:
                                                case 34229:
                                                case 36662:
                                                case 36663:
                                                case 35053:
                                                case 35055:
                                                case 36010:
                                                case 35097:
                                                case 35869:
                                                case 32874:
                                                case 36389:
                                                case 35983:
                                                case 35368:
                                                case 34068:
                                                    c = 0;
                                                    break;
                                                default:
                                                    return void Ln.recordError(1280)
                                            } else {
                                                if (f instanceof Float32Array || f instanceof Uint32Array || f instanceof Int32Array || f instanceof Array) {
                                                    for (var d = 0; d < f.length; ++d) switch (r) {
                                                        case 0:
                                                            i()[t + 4 * d >> 2] = f[d];
                                                            break;
                                                        case 2:
                                                            l()[t + 4 * d >> 2] = f[d];
                                                            break;
                                                        case 4:
                                                            n()[t + d >> 0] = f[d] ? 1 : 0
                                                    }
                                                    return
                                                }
                                                try {
                                                    c = 0 | f.name
                                                } catch (p) {
                                                    return Ln.recordError(1280), void P("GL_INVALID_ENUM in glGet" + r + "v: Unknown object returned from WebGL getParameter(" + e + ")! (error: " + p + ")")
                                                }
                                            }
                                            break;
                                        default:
                                            return Ln.recordError(1280), void P("GL_INVALID_ENUM in glGet" + r + "v: Native code calling glGet" + r + "v(" + e + ") and it returns " + f + " of type " + typeof f + "!")
                                    }
                                }
                                switch (r) {
                                    case 1:
                                        o = t, a = c, u()[o >> 2] = a, u()[o + 4 >> 2] = (a - u()[o >> 2]) / 4294967296;
                                        break;
                                    case 0:
                                        i()[t >> 2] = c;
                                        break;
                                    case 2:
                                        l()[t >> 2] = c;
                                        break;
                                    case 4:
                                        n()[t >> 0] = c ? 1 : 0
                                }
                            } else Ln.recordError(1281)
                        }

                        function An(e) {
                            var t = $(e) + 1,
                                n = kr(t);
                            return G(e, n, t), n
                        }

                        function Dn(e) {
                            return "]" == e.slice(-1) && e.lastIndexOf("[")
                        }

                        function Nn(e) {
                            return 0 == (e -= 5120) ? n() : 1 == e ? r() : 2 == e ? o() : 4 == e ? i() : 6 == e ? l() : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e ? u() : a()
                        }

                        function Mn(e) {
                            return 31 - Math.clz32(e.BYTES_PER_ELEMENT)
                        }

                        function In(e, t, n, r, o, a) {
                            var i = Nn(e),
                                u = Mn(i),
                                l = 1 << u,
                                c = function(e) {
                                    return {
                                        5: 3,
                                        6: 4,
                                        8: 2,
                                        29502: 3,
                                        29504: 4,
                                        26917: 2,
                                        26918: 2,
                                        29846: 3,
                                        29847: 4
                                    } [e - 6402] || 1
                                }(t) * l,
                                s = function(e, t, n, r) {
                                    var o;
                                    return t * (e * n + (o = r) - 1 & -o)
                                }(n, r, c, Ln.unpackAlignment);
                            return i.subarray(o >> u, o + s >> u)
                        }

                        function Rn(e) {
                            var t = dr.currentProgram;
                            if (t) {
                                var n = t.uniformLocsById[e];
                                return "number" == typeof n && (t.uniformLocsById[e] = n = dr.getUniformLocation(t, t.uniformArrayNamesById[e] + (n > 0 ? "[" + n + "]" : ""))), n
                            }
                            Ln.recordError(1282)
                        }

                        function jn(e, t) {
                            var n = arguments.length - 2,
                                r = arguments;
                            return Be((function() {
                                for (var o = 2 * n, a = Br(8 * o), i = a >> 3, u = 0; u < n; u++) {
                                    var l = r[2 + u];
                                    "bigint" == typeof l ? (re[i + 2 * u] = BigInt(1), re[i + 2 * u + 1] = l) : (re[i + 2 * u] = BigInt(0), c()[i + 2 * u + 1] = l)
                                }
                                return Ar(e, o, a, t)
                            }))
                        }
                        var Bn = [];

                        function zn(e) {
                            try {
                                return I.grow(e - Y.byteLength + 65535 >>> 16), ve(I.buffer), 1
                            } catch (t) {}
                        }
                        var Un = {
                            inEventHandler: 0,
                            removeAllEventListeners: function() {
                                for (var e = Un.eventHandlers.length - 1; e >= 0; --e) Un._removeHandler(e);
                                Un.eventHandlers = [], Un.deferredCalls = []
                            },
                            registerRemoveEventListeners: function() {
                                Un.removeEventListenersRegistered || (ke.push(Un.removeAllEventListeners), Un.removeEventListenersRegistered = !0)
                            },
                            deferredCalls: [],
                            deferCall: function(e, t, n) {
                                function r(e, t) {
                                    if (e.length != t.length) return !1;
                                    for (var n in e)
                                        if (e[n] != t[n]) return !1;
                                    return !0
                                }
                                for (var o in Un.deferredCalls) {
                                    var a = Un.deferredCalls[o];
                                    if (a.targetFunction == e && r(a.argsList, n)) return
                                }
                                Un.deferredCalls.push({
                                    targetFunction: e,
                                    precedence: t,
                                    argsList: n
                                }), Un.deferredCalls.sort((function(e, t) {
                                    return e.precedence < t.precedence
                                }))
                            },
                            removeDeferredCalls: function(e) {
                                for (var t = 0; t < Un.deferredCalls.length; ++t) Un.deferredCalls[t].targetFunction == e && (Un.deferredCalls.splice(t, 1), --t)
                            },
                            canPerformEventHandlerRequests: function() {
                                return Un.inEventHandler && Un.currentEventHandler.allowsDeferredCalls
                            },
                            runDeferredCalls: function() {
                                if (Un.canPerformEventHandlerRequests())
                                    for (var e = 0; e < Un.deferredCalls.length; ++e) {
                                        var t = Un.deferredCalls[e];
                                        Un.deferredCalls.splice(e, 1), --e, t.targetFunction.apply(null, t.argsList)
                                    }
                            },
                            eventHandlers: [],
                            removeAllHandlersOnTarget: function(e, t) {
                                for (var n = 0; n < Un.eventHandlers.length; ++n) Un.eventHandlers[n].target != e || t && t != Un.eventHandlers[n].eventTypeString || Un._removeHandler(n--)
                            },
                            _removeHandler: function(e) {
                                var t = Un.eventHandlers[e];
                                t.target.removeEventListener(t.eventTypeString, t.eventListenerFunc, t.useCapture), Un.eventHandlers.splice(e, 1)
                            },
                            registerOrRemoveHandler: function(e) {
                                var t = function(t) {
                                    ++Un.inEventHandler, Un.currentEventHandler = e, Un.runDeferredCalls(), e.handlerFunc(t), Un.runDeferredCalls(), --Un.inEventHandler
                                };
                                if (e.callbackfunc) e.eventListenerFunc = t, e.target.addEventListener(e.eventTypeString, t, e.useCapture), Un.eventHandlers.push(e), Un.registerRemoveEventListeners();
                                else
                                    for (var n = 0; n < Un.eventHandlers.length; ++n) Un.eventHandlers[n].target == e.target && Un.eventHandlers[n].eventTypeString == e.eventTypeString && Un._removeHandler(n--)
                            },
                            queueEventHandlerOnThread_iiii: function(e, t, n, r, o) {
                                Be((function() {
                                    var a = Br(12);
                                    i()[a >> 2] = n, i()[a + 4 >> 2] = r, i()[a + 8 >> 2] = o, Cr(e, 637534208, t, r, a)
                                }))
                            },
                            getTargetThreadForEventCallback: function(e) {
                                switch (e) {
                                    case 1:
                                        return 0;
                                    case 2:
                                        return Ve.currentProxiedOperationCallerThread;
                                    default:
                                        return e
                                }
                            },
                            getNodeNameForTarget: function(e) {
                                return e ? e == window ? "#window" : e == screen ? "#screen" : e && e.nodeName ? e.nodeName : "" : ""
                            },
                            fullscreenEnabled: function() {
                                return document.fullscreenEnabled || document.webkitFullscreenEnabled
                            }
                        };

                        function Wn(e, t, n, r) {
                            ! function(e, t, n, r) {
                                Be((function() {
                                    var o = Br(12),
                                        a = 0;
                                    t && (a = An(t)), i()[o >> 2] = a, i()[o + 4 >> 2] = n, i()[o + 8 >> 2] = r, Cr(e, 657457152, 0, a, o)
                                }))
                            }(e, t = t ? H(t) : "", n, r)
                        }
                        var Vn = [0, "undefined" != typeof document ? document : 0, "undefined" != typeof window ? window : 0];

                        function Qn(e) {
                            var t;
                            return e = (t = e) > 2 ? H(t) : t, Vn[e] || ("undefined" != typeof document ? document.querySelector(e) : void 0)
                        }

                        function Hn(e) {
                            return Qn(e)
                        }

                        function qn(e, t, n) {
                            var r = Hn(e);
                            if (!r) return -4;
                            if (r.canvasSharedPtr && (i()[r.canvasSharedPtr >> 2] = t, i()[r.canvasSharedPtr + 4 >> 2] = n), !r.offscreenCanvas && r.controlTransferredOffscreen) return r.canvasSharedPtr ? (Wn(i()[r.canvasSharedPtr + 8 >> 2], e, t, n), 1) : -4;
                            r.offscreenCanvas && (r = r.offscreenCanvas);
                            var o = !1;
                            if (r.GLctxObject && r.GLctxObject.GLctx) {
                                var a = r.GLctxObject.GLctx.getParameter(2978);
                                o = 0 === a[0] && 0 === a[1] && a[2] === r.width && a[3] === r.height
                            }
                            return r.width = t, r.height = n, o && r.GLctxObject.GLctx.viewport(0, 0, t, n), r.GLctxObject && Ln.resizeOffscreenFramebuffer(r.GLctxObject), 0
                        }

                        function Gn(e, t, n) {
                            return E ? jn(36, 1, e, t, n) : qn(e, t, n)
                        }

                        function $n(e, t, n, r, o, a, u) {
                            u = Un.getTargetThreadForEventCallback(u), Un.keyEvent || (Un.keyEvent = kr(176));
                            var l = {
                                target: Qn(e),
                                allowsDeferredCalls: !0,
                                eventTypeString: a,
                                callbackfunc: r,
                                handlerFunc: function(e) {
                                    var n = u ? kr(176) : Un.keyEvent;
                                    c()[n >> 3] = e.timeStamp;
                                    var a = n >> 2;
                                    i()[a + 2] = e.location, i()[a + 3] = e.ctrlKey, i()[a + 4] = e.shiftKey, i()[a + 5] = e.altKey, i()[a + 6] = e.metaKey, i()[a + 7] = e.repeat, i()[a + 8] = e.charCode, i()[a + 9] = e.keyCode, i()[a + 10] = e.which, G(e.key || "", n + 44, 32), G(e.code || "", n + 76, 32), G(e.char || "", n + 108, 32), G(e.locale || "", n + 140, 32), u ? Un.queueEventHandlerOnThread_iiii(u, r, o, n, t) : Ge(r)(o, n, t) && e.preventDefault()
                                },
                                useCapture: n
                            };
                            Un.registerOrRemoveHandler(l)
                        }

                        function Yn(e, t, n, r, o) {
                            return E ? jn(37, 1, e, t, n, r, o) : ($n(e, t, n, r, 2, "keydown", o), 0)
                        }

                        function Xn(e, t, n, r, o) {
                            return E ? jn(38, 1, e, t, n, r, o) : ($n(e, t, n, r, 3, "keyup", o), 0)
                        }
                        var Kn = ["default", "low-power", "high-performance"];
                        var Zn = {};

                        function Jn() {
                            if (!Jn.strings) {
                                var e = {
                                    USER: "web_user",
                                    LOGNAME: "web_user",
                                    PATH: "/",
                                    PWD: "/",
                                    HOME: "/home/web_user",
                                    LANG: ("object" == typeof navigator && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8",
                                    _: y || "./this.program"
                                };
                                for (var t in Zn) void 0 === Zn[t] ? delete e[t] : e[t] = Zn[t];
                                var n = [];
                                for (var t in e) n.push(t + "=" + e[t]);
                                Jn.strings = n
                            }
                            return Jn.strings
                        }

                        function er(e, t) {
                            if (E) return jn(39, 1, e, t);
                            var r = 0;
                            return Jn().forEach((function(o, a) {
                                var u = t + r;
                                i()[e + 4 * a >> 2] = u,
                                    function(e, t, r) {
                                        for (var o = 0; o < e.length; ++o) n()[t++ >> 0] = e.charCodeAt(o);
                                        r || (n()[t >> 0] = 0)
                                    }(o, u), r += o.length + 1
                            })), 0
                        }

                        function tr(e, t) {
                            if (E) return jn(40, 1, e, t);
                            var n = Jn();
                            i()[e >> 2] = n.length;
                            var r = 0;
                            return n.forEach((function(e) {
                                r += e.length + 1
                            })), i()[t >> 2] = r, 0
                        }

                        function nr(e) {
                            if (E) return jn(41, 1, e);
                            try {
                                var t = ct.getStreamFromFD(e);
                                return lt.close(t), 0
                            } catch (n) {
                                if ("undefined" == typeof lt || !(n instanceof lt.ErrnoError)) throw n;
                                return n.errno
                            }
                        }

                        function rr(e, t, n, r) {
                            if (E) return jn(42, 1, e, t, n, r);
                            try {
                                var o = ct.getStreamFromFD(e),
                                    a = ct.doReadv(o, t, n);
                                return i()[r >> 2] = a, 0
                            } catch (u) {
                                if ("undefined" == typeof lt || !(u instanceof lt.ErrnoError)) throw u;
                                return u.errno
                            }
                        }

                        function or(e, t, n, r) {
                            if (E) return jn(43, 1, e, t, n, r);
                            try {
                                var o = 0 | Number(t & BigInt(4294967295)),
                                    a = 0 | Number(t >> BigInt(32)),
                                    i = ct.getStreamFromFD(e),
                                    u = 4294967296 * a + (o >>> 0),
                                    l = 9007199254740992;
                                return u <= -l || u >= l ? -61 : (lt.llseek(i, u, n), re[r >> 3] = BigInt(i.position), i.getdents && 0 === u && 0 === n && (i.getdents = null), 0)
                            } catch (c) {
                                if ("undefined" == typeof lt || !(c instanceof lt.ErrnoError)) throw c;
                                return c.errno
                            }
                        }

                        function ar(e, t, n, r) {
                            if (E) return jn(44, 1, e, t, n, r);
                            try {
                                var o = ct.getStreamFromFD(e),
                                    a = ct.doWritev(o, t, n);
                                return i()[r >> 2] = a, 0
                            } catch (u) {
                                if ("undefined" == typeof lt || !(u instanceof lt.ErrnoError)) throw u;
                                return u.errno
                            }
                        }

                        function ir(e) {
                            return e % 4 === 0 && (e % 100 !== 0 || e % 400 === 0)
                        }

                        function ur(e, t) {
                            for (var n = 0, r = 0; r <= t; n += e[r++]);
                            return n
                        }
                        var lr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
                            cr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

                        function sr(e, t) {
                            for (var n = new Date(e.getTime()); t > 0;) {
                                var r = ir(n.getFullYear()),
                                    o = n.getMonth(),
                                    a = (r ? lr : cr)[o];
                                if (!(t > a - n.getDate())) return n.setDate(n.getDate() + t), n;
                                t -= a - n.getDate() + 1, n.setDate(1), o < 11 ? n.setMonth(o + 1) : (n.setMonth(0), n.setFullYear(n.getFullYear() + 1))
                            }
                            return n
                        }

                        function fr(e, t, n, r) {
                            var o = i()[r + 40 >> 2],
                                a = {
                                    tm_sec: i()[r >> 2],
                                    tm_min: i()[r + 4 >> 2],
                                    tm_hour: i()[r + 8 >> 2],
                                    tm_mday: i()[r + 12 >> 2],
                                    tm_mon: i()[r + 16 >> 2],
                                    tm_year: i()[r + 20 >> 2],
                                    tm_wday: i()[r + 24 >> 2],
                                    tm_yday: i()[r + 28 >> 2],
                                    tm_isdst: i()[r + 32 >> 2],
                                    tm_gmtoff: i()[r + 36 >> 2],
                                    tm_zone: o ? H(o) : ""
                                },
                                u = H(n),
                                l = {
                                    "%c": "%a %b %d %H:%M:%S %Y",
                                    "%D": "%m/%d/%y",
                                    "%F": "%Y-%m-%d",
                                    "%h": "%b",
                                    "%r": "%I:%M:%S %p",
                                    "%R": "%H:%M",
                                    "%T": "%H:%M:%S",
                                    "%x": "%m/%d/%y",
                                    "%X": "%H:%M:%S",
                                    "%Ec": "%c",
                                    "%EC": "%C",
                                    "%Ex": "%m/%d/%y",
                                    "%EX": "%H:%M:%S",
                                    "%Ey": "%y",
                                    "%EY": "%Y",
                                    "%Od": "%d",
                                    "%Oe": "%e",
                                    "%OH": "%H",
                                    "%OI": "%I",
                                    "%Om": "%m",
                                    "%OM": "%M",
                                    "%OS": "%S",
                                    "%Ou": "%u",
                                    "%OU": "%U",
                                    "%OV": "%V",
                                    "%Ow": "%w",
                                    "%OW": "%W",
                                    "%Oy": "%y"
                                };
                            for (var c in l) u = u.replace(new RegExp(c, "g"), l[c]);
                            var s = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                                f = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

                            function d(e, t, n) {
                                for (var r = "number" == typeof e ? e.toString() : e || ""; r.length < t;) r = n[0] + r;
                                return r
                            }

                            function p(e, t) {
                                return d(e, t, "0")
                            }

                            function h(e, t) {
                                function n(e) {
                                    return e < 0 ? -1 : e > 0 ? 1 : 0
                                }
                                var r;
                                return 0 === (r = n(e.getFullYear() - t.getFullYear())) && 0 === (r = n(e.getMonth() - t.getMonth())) && (r = n(e.getDate() - t.getDate())), r
                            }

                            function m(e) {
                                switch (e.getDay()) {
                                    case 0:
                                        return new Date(e.getFullYear() - 1, 11, 29);
                                    case 1:
                                        return e;
                                    case 2:
                                        return new Date(e.getFullYear(), 0, 3);
                                    case 3:
                                        return new Date(e.getFullYear(), 0, 2);
                                    case 4:
                                        return new Date(e.getFullYear(), 0, 1);
                                    case 5:
                                        return new Date(e.getFullYear() - 1, 11, 31);
                                    case 6:
                                        return new Date(e.getFullYear() - 1, 11, 30)
                                }
                            }

                            function v(e) {
                                var t = sr(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                                    n = new Date(t.getFullYear(), 0, 4),
                                    r = new Date(t.getFullYear() + 1, 0, 4),
                                    o = m(n),
                                    a = m(r);
                                return h(o, t) <= 0 ? h(a, t) <= 0 ? t.getFullYear() + 1 : t.getFullYear() : t.getFullYear() - 1
                            }
                            var g = {
                                "%a": function(e) {
                                    return s[e.tm_wday].substring(0, 3)
                                },
                                "%A": function(e) {
                                    return s[e.tm_wday]
                                },
                                "%b": function(e) {
                                    return f[e.tm_mon].substring(0, 3)
                                },
                                "%B": function(e) {
                                    return f[e.tm_mon]
                                },
                                "%C": function(e) {
                                    return p((e.tm_year + 1900) / 100 | 0, 2)
                                },
                                "%d": function(e) {
                                    return p(e.tm_mday, 2)
                                },
                                "%e": function(e) {
                                    return d(e.tm_mday, 2, " ")
                                },
                                "%g": function(e) {
                                    return v(e).toString().substring(2)
                                },
                                "%G": function(e) {
                                    return v(e)
                                },
                                "%H": function(e) {
                                    return p(e.tm_hour, 2)
                                },
                                "%I": function(e) {
                                    var t = e.tm_hour;
                                    return 0 == t ? t = 12 : t > 12 && (t -= 12), p(t, 2)
                                },
                                "%j": function(e) {
                                    return p(e.tm_mday + ur(ir(e.tm_year + 1900) ? lr : cr, e.tm_mon - 1), 3)
                                },
                                "%m": function(e) {
                                    return p(e.tm_mon + 1, 2)
                                },
                                "%M": function(e) {
                                    return p(e.tm_min, 2)
                                },
                                "%n": function() {
                                    return "\n"
                                },
                                "%p": function(e) {
                                    return e.tm_hour >= 0 && e.tm_hour < 12 ? "AM" : "PM"
                                },
                                "%S": function(e) {
                                    return p(e.tm_sec, 2)
                                },
                                "%t": function() {
                                    return "\t"
                                },
                                "%u": function(e) {
                                    return e.tm_wday || 7
                                },
                                "%U": function(e) {
                                    var t = new Date(e.tm_year + 1900, 0, 1),
                                        n = 0 === t.getDay() ? t : sr(t, 7 - t.getDay()),
                                        r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (h(n, r) < 0) {
                                        var o = ur(ir(r.getFullYear()) ? lr : cr, r.getMonth() - 1) - 31,
                                            a = 31 - n.getDate() + o + r.getDate();
                                        return p(Math.ceil(a / 7), 2)
                                    }
                                    return 0 === h(n, t) ? "01" : "00"
                                },
                                "%V": function(e) {
                                    var t, n = new Date(e.tm_year + 1900, 0, 4),
                                        r = new Date(e.tm_year + 1901, 0, 4),
                                        o = m(n),
                                        a = m(r),
                                        i = sr(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                                    return h(i, o) < 0 ? "53" : h(a, i) <= 0 ? "01" : (t = o.getFullYear() < e.tm_year + 1900 ? e.tm_yday + 32 - o.getDate() : e.tm_yday + 1 - o.getDate(), p(Math.ceil(t / 7), 2))
                                },
                                "%w": function(e) {
                                    return e.tm_wday
                                },
                                "%W": function(e) {
                                    var t = new Date(e.tm_year, 0, 1),
                                        n = 1 === t.getDay() ? t : sr(t, 0 === t.getDay() ? 1 : 7 - t.getDay() + 1),
                                        r = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                                    if (h(n, r) < 0) {
                                        var o = ur(ir(r.getFullYear()) ? lr : cr, r.getMonth() - 1) - 31,
                                            a = 31 - n.getDate() + o + r.getDate();
                                        return p(Math.ceil(a / 7), 2)
                                    }
                                    return 0 === h(n, t) ? "01" : "00"
                                },
                                "%y": function(e) {
                                    return (e.tm_year + 1900).toString().substring(2)
                                },
                                "%Y": function(e) {
                                    return e.tm_year + 1900
                                },
                                "%z": function(e) {
                                    var t = e.tm_gmtoff,
                                        n = t >= 0;
                                    return t = (t = Math.abs(t) / 60) / 60 * 100 + t % 60, (n ? "+" : "-") + String("0000" + t).slice(-4)
                                },
                                "%Z": function(e) {
                                    return e.tm_zone
                                },
                                "%%": function() {
                                    return "%"
                                }
                            };
                            for (var c in u = u.replace(/%%/g, "\0\0"), g) u.includes(c) && (u = u.replace(new RegExp(c, "g"), g[c](a)));
                            var y = yr(u = u.replace(/\0\0/g, "%"), !1);
                            return y.length > t ? 0 : (me(y, e), y.length - 1)
                        }
                        Ve.init();
                        var dr, pr = function(e, t, n, r) {
                                e || (e = this), this.parent = e, this.mount = e.mount, this.mounted = null, this.id = lt.nextInode++, this.name = t, this.mode = n, this.node_ops = {}, this.stream_ops = {}, this.rdev = r
                            },
                            hr = 365,
                            mr = 146;
                        Object.defineProperties(pr.prototype, {
                                read: {
                                    get: function() {
                                        return (this.mode & hr) === hr
                                    },
                                    set: function(e) {
                                        e ? this.mode |= hr : this.mode &= -366
                                    }
                                },
                                write: {
                                    get: function() {
                                        return (this.mode & mr) === mr
                                    },
                                    set: function(e) {
                                        e ? this.mode |= mr : this.mode &= -147
                                    }
                                },
                                isFolder: {
                                    get: function() {
                                        return lt.isDir(this.mode)
                                    }
                                },
                                isDevice: {
                                    get: function() {
                                        return lt.isChrdev(this.mode)
                                    }
                                }
                            }), lt.FSNode = pr, lt.staticInit(), d.FS_createPath = lt.createPath, d.FS_createDataFile = lt.createDataFile, d.FS_createPreloadedFile = lt.createPreloadedFile, d.FS_createLazyFile = lt.createLazyFile, d.FS_createDevice = lt.createDevice, d.FS_unlink = lt.unlink,
                            function() {
                                for (var e = new Array(256), t = 0; t < 256; ++t) e[t] = String.fromCharCode(t);
                                xt = e
                            }(), At = d.BindingError = Ot(Error, "BindingError"), Nt = d.InternalError = Ot(Error, "InternalError"), d.count_emval_handles = Ut, d.get_first_emval = Wt, Xt = d.UnboundTypeError = Ot(Error, "UnboundTypeError"), d.requestFullscreen = function(e, t) {
                                an.requestFullscreen(e, t)
                            }, d.requestAnimationFrame = function(e) {
                                an.requestAnimationFrame(e)
                            }, d.setCanvasSize = function(e, t, n) {
                                an.setCanvasSize(e, t, n)
                            }, d.pauseMainLoop = function() {
                                an.mainLoop.pause()
                            }, d.resumeMainLoop = function() {
                                an.mainLoop.resume()
                            }, d.getUserMedia = function() {
                                an.getUserMedia()
                            }, d.createContext = function(e, t, n, r) {
                                return an.createContext(e, t, n, r)
                            };
                        for (var vr = 0; vr < 32; ++vr) Tn.push(new Array(vr));
                        var gr = [null, Qe, st, function(e, t) {
                            if (E) return jn(3, 1, e, t);
                            try {
                                var n = ct.getStreamFromFD(e);
                                return ct.doStat(lt.stat, n.path, t)
                            } catch (r) {
                                if ("undefined" == typeof lt || !(r instanceof lt.ErrnoError)) throw r;
                                return -r.errno
                            }
                        }, function(e, t, n, r) {
                            if (E) return jn(4, 1, e, t, n, r);
                            try {
                                t = ct.getStr(t);
                                var o = 256 & r,
                                    a = 4096 & r;
                                return r &= -4353, t = ct.calculateAt(e, t, a), ct.doStat(o ? lt.lstat : lt.stat, t, n)
                            } catch (i) {
                                if ("undefined" == typeof lt || !(i instanceof lt.ErrnoError)) throw i;
                                return -i.errno
                            }
                        }, dt, ft, pt, ht, mt, function(e, t) {
                            if (E) return jn(10, 1, e, t);
                            try {
                                return e = ct.getStr(e), ct.doStat(lt.lstat, e, t)
                            } catch (n) {
                                if ("undefined" == typeof lt || !(n instanceof lt.ErrnoError)) throw n;
                                return -n.errno
                            }
                        }, vt, gt, yt, bt, wt, _t, kt, Zt, ln, cn, fn, sn, dn, pn, hn, mn, vn, gn, yn, bn, wn, _n, kn, En, xn, Gn, Yn, Xn, er, tr, nr, rr, or, ar];

                        function yr(e, t, n) {
                            var r = n > 0 ? n : $(e) + 1,
                                o = new Array(r),
                                a = q(e, o, 0, o.length);
                            return t && (o.length = a), o
                        }
                        var br, wr = {
                                Ub: function(e, t) {
                                    var n = H(e),
                                        r = H(t),
                                        o = d[n];
                                    void 0 === o && C("Warning: Could not find function '".concat(n, "' (missing export?).")), void 0 === this.codeGenImportTable && (C("Creating import table..."), this.codeGenImportTable = new WebAssembly.Table({
                                        element: "anyfunc",
                                        initial: 32
                                    }), this.codeGenImportTableNextIndex = 0);
                                    var a = T(o, r),
                                        i = this.codeGenImportTableNextIndex++;
                                    return this.codeGenImportTable.set(i, a), C("Registered function '".concat(n, "(").concat(r, ")' = > id = ").concat(i, ".")), i
                                },
                                Tb: function(e, t) {
                                    var r = n().subarray(e, e + t),
                                        o = new WebAssembly.Module(r);
                                    return A(new WebAssembly.Instance(o, {
                                        env: {
                                            memory: I,
                                            fctTable: this.codeGenImportTable
                                        }
                                    }).exports.codeGenFunc, "vi")
                                },
                                ra: function(e) {
                                    var t;
                                    t = e, F.delete(Ge(t)), O.push(t)
                                },
                                j: function(e) {
                                    return kr(e + 16) + 16
                                },
                                s: function(e) {
                                    var t = new Ke(e),
                                        n = t.get_exception_info();
                                    return n.get_caught() || (n.set_caught(!0), Je--), n.set_rethrown(!1), Ze.push(t),
                                        function(e) {
                                            e.add_ref()
                                        }(n), t.get_exception_ptr()
                                },
                                v: function() {
                                    Mr(0);
                                    var e = Ze.pop();
                                    ! function(e) {
                                        if (e.release_ref() && !e.get_rethrown()) {
                                            var t = e.get_destructor();
                                            t && Ge(t)(e.excPtr), tt(e.excPtr)
                                        }
                                    }(e.get_exception_info()), e.free(), et = 0
                                },
                                c: function() {
                                    var e = et;
                                    if (!e) return M(0), 0;
                                    var t = new Xe(e),
                                        n = t.get_type(),
                                        r = new Ke;
                                    if (r.set_base_ptr(e), r.set_adjusted_ptr(e), !n) return M(0), 0 | r.ptr;
                                    for (var o = Array.prototype.slice.call(arguments), a = 0; a < o.length; a++) {
                                        var i = o[a];
                                        if (0 === i || i === n) break;
                                        if (zr(i, n, r.get_adjusted_ptr_addr())) return M(i), 0 | r.ptr
                                    }
                                    return M(n), 0 | r.ptr
                                },
                                l: function() {
                                    var e = et;
                                    if (!e) return M(0), 0;
                                    var t = new Xe(e),
                                        n = t.get_type(),
                                        r = new Ke;
                                    if (r.set_base_ptr(e), r.set_adjusted_ptr(e), !n) return M(0), 0 | r.ptr;
                                    for (var o = Array.prototype.slice.call(arguments), a = 0; a < o.length; a++) {
                                        var i = o[a];
                                        if (0 === i || i === n) break;
                                        if (zr(i, n, r.get_adjusted_ptr_addr())) return M(i), 0 | r.ptr
                                    }
                                    return M(n), 0 | r.ptr
                                },
                                G: function() {
                                    var e = et;
                                    if (!e) return M(0), 0;
                                    var t = new Xe(e),
                                        n = t.get_type(),
                                        r = new Ke;
                                    if (r.set_base_ptr(e), r.set_adjusted_ptr(e), !n) return M(0), 0 | r.ptr;
                                    for (var o = Array.prototype.slice.call(arguments), a = 0; a < o.length; a++) {
                                        var i = o[a];
                                        if (0 === i || i === n) break;
                                        if (zr(i, n, r.get_adjusted_ptr_addr())) return M(i), 0 | r.ptr
                                    }
                                    return M(n), 0 | r.ptr
                                },
                                cc: function() {
                                    var e = et;
                                    if (!e) return M(0), 0;
                                    var t = new Xe(e),
                                        n = t.get_type(),
                                        r = new Ke;
                                    if (r.set_base_ptr(e), r.set_adjusted_ptr(e), !n) return M(0), 0 | r.ptr;
                                    for (var o = Array.prototype.slice.call(arguments), a = 0; a < o.length; a++) {
                                        var i = o[a];
                                        if (0 === i || i === n) break;
                                        if (zr(i, n, r.get_adjusted_ptr_addr())) return M(i), 0 | r.ptr
                                    }
                                    return M(n), 0 | r.ptr
                                },
                                p: tt,
                                sa: function() {
                                    var e = Ze.pop();
                                    e || De("no exception to throw");
                                    var t = e.get_exception_info(),
                                        n = e.get_base_ptr();
                                    throw t.get_rethrown() ? e.free() : (Ze.push(e), t.set_rethrown(!0), t.set_caught(!1), Je++), et = n, n
                                },
                                k: function(e, t, n) {
                                    throw new Xe(e).init(t, n), et = e, Je++, e
                                },
                                nc: function() {
                                    return Je
                                },
                                vc: function(e) {
                                    Lr(e, !_, 1, !w), Ve.threadInit()
                                },
                                ya: function(e) {
                                    E ? postMessage({
                                        cmd: "cleanupThread",
                                        thread: e
                                    }) : ze(e)
                                },
                                za: function(e, t, n, r) {
                                    if ("undefined" == typeof SharedArrayBuffer) return P("Current environment does not support SharedArrayBuffer, pthreads are not available!"), 6;
                                    var o = [];
                                    if (E && 0 === o.length) return Or(687865856, e, t, n, r);
                                    var a = {
                                        startRoutine: n,
                                        pthread_ptr: e,
                                        arg: r,
                                        transferList: o
                                    };
                                    return E ? (a.cmd = "spawnThread", postMessage(a, o), 0) : nt(a)
                                },
                                e: function(e) {
                                    var t = new Ke(e),
                                        n = t.get_base_ptr();
                                    throw et || (et = n), t.free(), n
                                },
                                Da: st,
                                sc: dt,
                                lc: pt,
                                oc: ht,
                                Gc: mt,
                                ic: vt,
                                Aa: gt,
                                kc: yt,
                                fc: bt,
                                gc: wt,
                                jc: _t,
                                hc: kt,
                                na: function(e, t, n, r, o) {
                                    t = St(t);
                                    var a = jt(n),
                                        i = -1 != t.indexOf("u");
                                    i && (o = (BigInt(1) << BigInt(64)) - BigInt(1)), It(e, {
                                        name: t,
                                        fromWireType: function(e) {
                                            return e
                                        },
                                        toWireType: function(e, n) {
                                            if ("bigint" != typeof n) throw new TypeError('Cannot convert "' + Et(n) + '" to ' + this.name);
                                            if (n < r || n > o) throw new TypeError('Passing a number "' + Et(n) + '" from JS side to C/C++ side to an argument of type "' + t + '", which is outside the valid range [' + r + ", " + o + "]!");
                                            return n
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Rt(t, a, !i),
                                        destructorFunction: null
                                    })
                                },
                                Gb: function(e, t, r, a, u) {
                                    var l = jt(r);
                                    It(e, {
                                        name: t = St(t),
                                        fromWireType: function(e) {
                                            return !!e
                                        },
                                        toWireType: function(e, t) {
                                            return t ? a : u
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: function(e) {
                                            var a;
                                            if (1 === r) a = n();
                                            else if (2 === r) a = o();
                                            else {
                                                if (4 !== r) throw new TypeError("Unknown boolean type size: " + t);
                                                a = i()
                                            }
                                            return this.fromWireType(a[e >> l])
                                        },
                                        destructorFunction: null
                                    })
                                },
                                Fb: function(e, t) {
                                    It(e, {
                                        name: t = St(t),
                                        fromWireType: function(e) {
                                            var t = Vt(e);
                                            return function(e) {
                                                e > 4 && 0 === --zt[e].refcount && (zt[e] = void 0, Bt.push(e))
                                            }(e), t
                                        },
                                        toWireType: function(e, t) {
                                            return Qt(t)
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Ht,
                                        destructorFunction: null
                                    })
                                },
                                ma: function(e, t, n) {
                                    var r = jt(n);
                                    It(e, {
                                        name: t = St(t),
                                        fromWireType: function(e) {
                                            return e
                                        },
                                        toWireType: function(e, t) {
                                            return t
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: qt(t, r),
                                        destructorFunction: null
                                    })
                                },
                                qb: function(e, t, n, r, o, a) {
                                    var u = function(e, t) {
                                        for (var n = [], r = 0; r < e; r++) n.push(i()[(t >> 2) + r]);
                                        return n
                                    }(t, n);
                                    e = St(e), o = function(e, t) {
                                            e = St(e);
                                            var n = Ge(t);
                                            return "function" != typeof n && Dt("unknown function pointer with signature " + e + ": " + t), n
                                        }(r, o), Yt(e, (function() {
                                            ! function(e, t) {
                                                var n = [],
                                                    r = {};
                                                throw t.forEach((function e(t) {
                                                    r[t] || Pt[t] || (Lt[t] ? Lt[t].forEach(e) : (n.push(t), r[t] = !0))
                                                })), new Xt(e + ": " + n.map(Kt).join([", "]))
                                            }("Cannot call " + e + " due to unbound types", u)
                                        }), t - 1),
                                        function(e, t, n) {
                                            function r(t) {
                                                var r = n(t);
                                                r.length !== e.length && Mt("Mismatched type converter count");
                                                for (var o = 0; o < e.length; ++o) It(e[o], r[o])
                                            }
                                            e.forEach((function(e) {
                                                Lt[e] = t
                                            }));
                                            var o = new Array(t.length),
                                                a = [],
                                                i = 0;
                                            t.forEach((function(e, t) {
                                                Pt.hasOwnProperty(e) ? o[t] = Pt[e] : (a.push(e), Ct.hasOwnProperty(e) || (Ct[e] = []), Ct[e].push((function() {
                                                    o[t] = Pt[e], ++i === a.length && r(o)
                                                })))
                                            })), 0 === a.length && r(o)
                                        }([], u, (function(n) {
                                            var r = [n[0], null].concat(n.slice(1));
                                            return function(e, t, n) {
                                                d.hasOwnProperty(e) || Mt("Replacing nonexistant public symbol"), void 0 !== d[e].overloadTable && void 0 !== n ? d[e].overloadTable[n] = t : (d[e] = t, d[e].argCount = n)
                                            }(e, $t(e, r, null, o, a), t - 1), []
                                        }))
                                },
                                F: function(e, t, n, r, o) {
                                    t = St(t), -1 === o && (o = 4294967295);
                                    var a = jt(n),
                                        i = function(e) {
                                            return e
                                        };
                                    if (0 === r) {
                                        var u = 32 - 8 * n;
                                        i = function(e) {
                                            return e << u >>> u
                                        }
                                    }
                                    var l = t.includes("unsigned");
                                    It(e, {
                                        name: t,
                                        fromWireType: i,
                                        toWireType: l ? function(e, t) {
                                            return this.name, t >>> 0
                                        } : function(e, t) {
                                            return this.name, t
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Rt(t, a, 0 !== r),
                                        destructorFunction: null
                                    })
                                },
                                A: function(e, t, n) {
                                    var r = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][t];

                                    function o(e) {
                                        e >>= 2;
                                        var t = u(),
                                            n = t[e],
                                            o = t[e + 1];
                                        return new r(Y, o, n)
                                    }
                                    It(e, {
                                        name: n = St(n),
                                        fromWireType: o,
                                        argPackAdvance: 8,
                                        readValueFromPointer: o
                                    }, {
                                        ignoreDuplicateRegistrations: !0
                                    })
                                },
                                la: function(e, t) {
                                    var n = "std::string" === (t = St(t));
                                    It(e, {
                                        name: t,
                                        fromWireType: function(e) {
                                            var t, o = u()[e >> 2];
                                            if (n)
                                                for (var a = e + 4, i = 0; i <= o; ++i) {
                                                    var l = e + 4 + i;
                                                    if (i == o || 0 == r()[l]) {
                                                        var c = H(a, l - a);
                                                        void 0 === t ? t = c : (t += String.fromCharCode(0), t += c), a = l + 1
                                                    }
                                                } else {
                                                    var s = new Array(o);
                                                    for (i = 0; i < o; ++i) s[i] = String.fromCharCode(r()[e + 4 + i]);
                                                    t = s.join("")
                                                }
                                            return _r(e), t
                                        },
                                        toWireType: function(e, t) {
                                            t instanceof ArrayBuffer && (t = new Uint8Array(t));
                                            var o = "string" == typeof t;
                                            o || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int8Array || Dt("Cannot pass non-string to std::string");
                                            var a = (n && o ? function() {
                                                    return $(t)
                                                } : function() {
                                                    return t.length
                                                })(),
                                                i = kr(4 + a + 1);
                                            if (u()[i >> 2] = a, n && o) G(t, i + 4, a + 1);
                                            else if (o)
                                                for (var l = 0; l < a; ++l) {
                                                    var c = t.charCodeAt(l);
                                                    c > 255 && (_r(i), Dt("String has UTF-16 code units that do not fit in 8 bits")), r()[i + 4 + l] = c
                                                } else
                                                    for (l = 0; l < a; ++l) r()[i + 4 + l] = t[l];
                                            return null !== e && e.push(_r, i), i
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Ht,
                                        destructorFunction: function(e) {
                                            _r(e)
                                        }
                                    })
                                },
                                P: function(e, t, n) {
                                    var r, o, i, l, c;
                                    n = St(n), 2 === t ? (r = ue, o = le, l = ce, i = function() {
                                        return a()
                                    }, c = 1) : 4 === t && (r = se, o = fe, l = de, i = function() {
                                        return u()
                                    }, c = 2), It(e, {
                                        name: n,
                                        fromWireType: function(e) {
                                            for (var n, o = u()[e >> 2], a = i(), l = e + 4, s = 0; s <= o; ++s) {
                                                var f = e + 4 + s * t;
                                                if (s == o || 0 == a[f >> c]) {
                                                    var d = r(l, f - l);
                                                    void 0 === n ? n = d : (n += String.fromCharCode(0), n += d), l = f + t
                                                }
                                            }
                                            return _r(e), n
                                        },
                                        toWireType: function(e, r) {
                                            "string" != typeof r && Dt("Cannot pass non-string to C++ string type " + n);
                                            var a = l(r),
                                                i = kr(4 + a + t);
                                            return u()[i >> 2] = a >> c, o(r, i + 4, a + t), null !== e && e.push(_r, i), i
                                        },
                                        argPackAdvance: 8,
                                        readValueFromPointer: Ht,
                                        destructorFunction: function(e) {
                                            _r(e)
                                        }
                                    })
                                },
                                Hb: function(e, t) {
                                    It(e, {
                                        isVoid: !0,
                                        name: t = St(t),
                                        argPackAdvance: 0,
                                        fromWireType: function() {},
                                        toWireType: function(e, t) {}
                                    })
                                },
                                tc: function() {
                                    return 2097152
                                },
                                yc: function(e, t) {
                                    if (e == t) postMessage({
                                        cmd: "processQueuedMainThreadWork"
                                    });
                                    else if (E) postMessage({
                                        targetThread: e,
                                        cmd: "processThreadQueue"
                                    });
                                    else {
                                        var n = Ve.pthreads[e],
                                            r = n && n.worker;
                                        if (!r) return;
                                        r.postMessage({
                                            cmd: "processThreadQueue"
                                        })
                                    }
                                    return 1
                                },
                                Cb: function(e) {
                                    dr = d.ctx = Ln.currentContext = e, Ln.currentContextIsProxied = !0
                                },
                                zc: function(e, t) {
                                    var n = new Date(1e3 * i()[e >> 2]);
                                    i()[t >> 2] = n.getUTCSeconds(), i()[t + 4 >> 2] = n.getUTCMinutes(), i()[t + 8 >> 2] = n.getUTCHours(), i()[t + 12 >> 2] = n.getUTCDate(), i()[t + 16 >> 2] = n.getUTCMonth(), i()[t + 20 >> 2] = n.getUTCFullYear() - 1900, i()[t + 24 >> 2] = n.getUTCDay();
                                    var r = Date.UTC(n.getUTCFullYear(), 0, 1, 0, 0, 0, 0),
                                        o = (n.getTime() - r) / 864e5 | 0;
                                    i()[t + 28 >> 2] = o
                                },
                                Ac: function(e, t) {
                                    var n = new Date(1e3 * i()[e >> 2]);
                                    i()[t >> 2] = n.getSeconds(), i()[t + 4 >> 2] = n.getMinutes(), i()[t + 8 >> 2] = n.getHours(), i()[t + 12 >> 2] = n.getDate(), i()[t + 16 >> 2] = n.getMonth(), i()[t + 20 >> 2] = n.getFullYear() - 1900, i()[t + 24 >> 2] = n.getDay();
                                    var r = new Date(n.getFullYear(), 0, 1),
                                        o = (n.getTime() - r.getTime()) / 864e5 | 0;
                                    i()[t + 28 >> 2] = o, i()[t + 36 >> 2] = -60 * n.getTimezoneOffset();
                                    var a = new Date(n.getFullYear(), 6, 1).getTimezoneOffset(),
                                        u = r.getTimezoneOffset(),
                                        l = 0 | (a != u && n.getTimezoneOffset() == Math.min(u, a));
                                    i()[t + 32 >> 2] = l
                                },
                                Bc: function e(t, n, r) {
                                    e.called || (e.called = !0, Zt(t, n, r))
                                },
                                S: function() {
                                    De("")
                                },
                                Wb: ln,
                                Zb: cn,
                                Kb: fn,
                                _b: dn,
                                Mb: pn,
                                Lb: hn,
                                oa: mn,
                                Jb: vn,
                                Vb: gn,
                                Ib: yn,
                                Xb: bn,
                                Yb: sn,
                                Nb: wn,
                                Rb: _n,
                                Qb: kn,
                                pa: En,
                                Ob: xn,
                                R: function(e, t) {
                                    var n;
                                    if (0 === e) n = Date.now();
                                    else {
                                        if (1 !== e && 4 !== e) return Ye(28), -1;
                                        n = He()
                                    }
                                    return i()[t >> 2] = n / 1e3 | 0, i()[t + 4 >> 2] = n % 1e3 * 1e3 * 1e3 | 0, 0
                                },
                                K: function(e, t, n) {
                                    return Cn(e, t, n, 1)
                                },
                                wa: function() {
                                    _ || L("Blocking on the main thread is very dangerous, see https://emscripten.org/docs/porting/pthreads.html#blocking-on-the-main-browser-thread")
                                },
                                Eb: function(e) {
                                    console.error(H(e))
                                },
                                qc: Pn,
                                E: He,
                                ha: function(e) {
                                    dr.activeTexture(e)
                                },
                                ga: function(e, t) {
                                    dr.attachShader(Ln.programs[e], Ln.shaders[t])
                                },
                                fa: function(e, t, n) {
                                    dr.bindAttribLocation(Ln.programs[e], t, H(n))
                                },
                                ea: function(e, t) {
                                    35051 == e ? dr.currentPixelPackBufferBinding = t : 35052 == e && (dr.currentPixelUnpackBufferBinding = t), dr.bindBuffer(e, Ln.buffers[t])
                                },
                                Ja: function(e, t, n) {
                                    dr.bindBufferBase(e, t, Ln.buffers[n])
                                },
                                da: function(e, t) {
                                    dr.bindFramebuffer(e, t ? Ln.framebuffers[t] : Ln.currentContext.defaultFbo)
                                },
                                ca: function(e, t) {
                                    dr.bindRenderbuffer(e, Ln.renderbuffers[t])
                                },
                                ba: function(e, t) {
                                    dr.bindTexture(e, Ln.textures[t])
                                },
                                Ma: function(e) {
                                    dr.bindVertexArray(Ln.vaos[e])
                                },
                                aa: function(e, t, n, r) {
                                    dr.blendColor(e, t, n, r)
                                },
                                $: function(e, t) {
                                    dr.blendEquationSeparate(e, t)
                                },
                                _: function(e, t, n, r) {
                                    dr.blendFuncSeparate(e, t, n, r)
                                },
                                Oa: function(e, t, n, r, o, a, i, u, l, c) {
                                    dr.blitFramebuffer(e, t, n, r, o, a, i, u, l, c)
                                },
                                Z: function(e, t, n, o) {
                                    Ln.currentContext.version >= 2 ? n ? dr.bufferData(e, r(), o, n, t) : dr.bufferData(e, t, o) : dr.bufferData(e, n ? r().subarray(n, n + t) : t, o)
                                },
                                Y: function(e) {
                                    dr.clear(e)
                                },
                                X: function(e, t, n, r) {
                                    dr.clearColor(e, t, n, r)
                                },
                                W: function(e) {
                                    dr.clearDepth(e)
                                },
                                V: function(e, t, n, r) {
                                    dr.colorMask(!!e, !!t, !!n, !!r)
                                },
                                U: function(e) {
                                    dr.compileShader(Ln.shaders[e])
                                },
                                T: function() {
                                    var e = Ln.getNewId(Ln.programs),
                                        t = dr.createProgram();
                                    return t.name = e, t.maxUniformLength = t.maxAttributeLength = t.maxUniformBlockNameLength = 0, t.uniformIdCounter = 1, Ln.programs[e] = t, e
                                },
                                Ab: function(e) {
                                    var t = Ln.getNewId(Ln.shaders);
                                    return Ln.shaders[t] = dr.createShader(e), t
                                },
                                zb: function(e, t) {
                                    for (var n = 0; n < e; n++) {
                                        var r = i()[t + 4 * n >> 2],
                                            o = Ln.buffers[r];
                                        o && (dr.deleteBuffer(o), o.name = 0, Ln.buffers[r] = null, r == dr.currentPixelPackBufferBinding && (dr.currentPixelPackBufferBinding = 0), r == dr.currentPixelUnpackBufferBinding && (dr.currentPixelUnpackBufferBinding = 0))
                                    }
                                },
                                yb: function(e, t) {
                                    for (var n = 0; n < e; ++n) {
                                        var r = i()[t + 4 * n >> 2],
                                            o = Ln.framebuffers[r];
                                        o && (dr.deleteFramebuffer(o), o.name = 0, Ln.framebuffers[r] = null)
                                    }
                                },
                                xb: function(e) {
                                    if (e) {
                                        var t = Ln.programs[e];
                                        t ? (dr.deleteProgram(t), t.name = 0, Ln.programs[e] = null) : Ln.recordError(1281)
                                    }
                                },
                                wb: function(e, t) {
                                    for (var n = 0; n < e; n++) {
                                        var r = i()[t + 4 * n >> 2],
                                            o = Ln.renderbuffers[r];
                                        o && (dr.deleteRenderbuffer(o), o.name = 0, Ln.renderbuffers[r] = null)
                                    }
                                },
                                vb: function(e) {
                                    if (e) {
                                        var t = Ln.shaders[e];
                                        t ? (dr.deleteShader(t), Ln.shaders[e] = null) : Ln.recordError(1281)
                                    }
                                },
                                ub: function(e, t) {
                                    for (var n = 0; n < e; n++) {
                                        var r = i()[t + 4 * n >> 2],
                                            o = Ln.textures[r];
                                        o && (dr.deleteTexture(o), o.name = 0, Ln.textures[r] = null)
                                    }
                                },
                                La: function(e, t) {
                                    for (var n = 0; n < e; n++) {
                                        var r = i()[t + 4 * n >> 2];
                                        dr.deleteVertexArray(Ln.vaos[r]), Ln.vaos[r] = null
                                    }
                                },
                                tb: function(e) {
                                    dr.depthFunc(e)
                                },
                                sb: function(e) {
                                    dr.depthMask(!!e)
                                },
                                rb: function(e) {
                                    dr.disable(e)
                                },
                                pb: function(e, t, n) {
                                    dr.drawArrays(e, t, n)
                                },
                                Pa: function(e, t) {
                                    for (var n = Tn[e], r = 0; r < e; r++) n[r] = i()[t + 4 * r >> 2];
                                    dr.drawBuffers(n)
                                },
                                ob: function(e) {
                                    dr.enable(e)
                                },
                                nb: function(e) {
                                    dr.enableVertexAttribArray(e)
                                },
                                mb: function(e, t, n, r) {
                                    dr.framebufferRenderbuffer(e, t, n, Ln.renderbuffers[r])
                                },
                                lb: function(e, t, n, r, o) {
                                    dr.framebufferTexture2D(e, t, n, Ln.textures[r], o)
                                },
                                kb: function(e, t) {
                                    Fn(e, t, "createBuffer", Ln.buffers)
                                },
                                jb: function(e, t) {
                                    Fn(e, t, "createFramebuffer", Ln.framebuffers)
                                },
                                ib: function(e, t) {
                                    Fn(e, t, "createRenderbuffer", Ln.renderbuffers)
                                },
                                hb: function(e, t) {
                                    Fn(e, t, "createTexture", Ln.textures)
                                },
                                Ka: function(e, t) {
                                    Fn(e, t, "createVertexArray", Ln.vaos)
                                },
                                gb: function(e, t) {
                                    On(e, t, 0)
                                },
                                eb: function(e, t, n, r) {
                                    var o = dr.getProgramInfoLog(Ln.programs[e]);
                                    null === o && (o = "(unknown error)");
                                    var a = t > 0 && r ? G(o, r, t) : 0;
                                    n && (i()[n >> 2] = a)
                                },
                                fb: function(e, t, n) {
                                    if (n)
                                        if (e >= Ln.counter) Ln.recordError(1281);
                                        else if (e = Ln.programs[e], 35716 == t) {
                                        var r = dr.getProgramInfoLog(e);
                                        null === r && (r = "(unknown error)"), i()[n >> 2] = r.length + 1
                                    } else if (35719 == t) {
                                        if (!e.maxUniformLength)
                                            for (var o = 0; o < dr.getProgramParameter(e, 35718); ++o) e.maxUniformLength = Math.max(e.maxUniformLength, dr.getActiveUniform(e, o).name.length + 1);
                                        i()[n >> 2] = e.maxUniformLength
                                    } else if (35722 == t) {
                                        if (!e.maxAttributeLength)
                                            for (o = 0; o < dr.getProgramParameter(e, 35721); ++o) e.maxAttributeLength = Math.max(e.maxAttributeLength, dr.getActiveAttrib(e, o).name.length + 1);
                                        i()[n >> 2] = e.maxAttributeLength
                                    } else if (35381 == t) {
                                        if (!e.maxUniformBlockNameLength)
                                            for (o = 0; o < dr.getProgramParameter(e, 35382); ++o) e.maxUniformBlockNameLength = Math.max(e.maxUniformBlockNameLength, dr.getActiveUniformBlockName(e, o).length + 1);
                                        i()[n >> 2] = e.maxUniformBlockNameLength
                                    } else i()[n >> 2] = dr.getProgramParameter(e, t);
                                    else Ln.recordError(1281)
                                },
                                cb: function(e, t, n, r) {
                                    var o = dr.getShaderInfoLog(Ln.shaders[e]);
                                    null === o && (o = "(unknown error)");
                                    var a = t > 0 && r ? G(o, r, t) : 0;
                                    n && (i()[n >> 2] = a)
                                },
                                db: function(e, t, n) {
                                    if (n)
                                        if (35716 == t) {
                                            var r = dr.getShaderInfoLog(Ln.shaders[e]);
                                            null === r && (r = "(unknown error)");
                                            var o = r ? r.length + 1 : 0;
                                            i()[n >> 2] = o
                                        } else if (35720 == t) {
                                        var a = dr.getShaderSource(Ln.shaders[e]),
                                            u = a ? a.length + 1 : 0;
                                        i()[n >> 2] = u
                                    } else i()[n >> 2] = dr.getShaderParameter(Ln.shaders[e], t);
                                    else Ln.recordError(1281)
                                },
                                Ha: function(e, t) {
                                    if (Ln.currentContext.version < 2) return Ln.recordError(1282), 0;
                                    var n = Ln.stringiCache[e];
                                    if (n) return t < 0 || t >= n.length ? (Ln.recordError(1281), 0) : n[t];
                                    if (7939 === e) {
                                        var r = dr.getSupportedExtensions() || [];
                                        return r = (r = r.concat(r.map((function(e) {
                                            return "GL_" + e
                                        })))).map((function(e) {
                                            return An(e)
                                        })), n = Ln.stringiCache[e] = r, t < 0 || t >= n.length ? (Ln.recordError(1281), 0) : n[t]
                                    }
                                    return Ln.recordError(1280), 0
                                },
                                Ga: function(e, t) {
                                    return dr.getUniformBlockIndex(Ln.programs[e], H(t))
                                },
                                bb: function(e, t) {
                                    if (t = H(t), e = Ln.programs[e]) {
                                        ! function(e) {
                                            var t, n, r = e.uniformLocsById,
                                                o = e.uniformSizeAndIdsByName;
                                            if (!r)
                                                for (e.uniformLocsById = r = {}, e.uniformArrayNamesById = {}, t = 0; t < dr.getProgramParameter(e, 35718); ++t) {
                                                    var a = dr.getActiveUniform(e, t),
                                                        i = a.name,
                                                        u = a.size,
                                                        l = Dn(i),
                                                        c = l > 0 ? i.slice(0, l) : i,
                                                        s = e.uniformIdCounter;
                                                    for (e.uniformIdCounter += u, o[c] = [u, s], n = 0; n < u; ++n) r[s] = n, e.uniformArrayNamesById[s++] = c
                                                }
                                        }(e);
                                        var n = e.uniformLocsById,
                                            r = 0,
                                            o = t,
                                            a = Dn(t);
                                        a > 0 && (u = t.slice(a + 1), r = parseInt(u) >>> 0, o = t.slice(0, a));
                                        var i = e.uniformSizeAndIdsByName[o];
                                        if (i && r < i[0] && (n[r += i[1]] = n[r] || dr.getUniformLocation(e, t))) return r
                                    } else Ln.recordError(1281);
                                    var u;
                                    return -1
                                },
                                ab: function(e) {
                                    e = Ln.programs[e], dr.linkProgram(e), e.uniformLocsById = 0, e.uniformSizeAndIdsByName = {}
                                },
                                $a: function(e, t, n, r, o, a, i) {
                                    if (Ln.currentContext.version >= 2)
                                        if (dr.currentPixelPackBufferBinding) dr.readPixels(e, t, n, r, o, a, i);
                                        else {
                                            var u = Nn(a);
                                            dr.readPixels(e, t, n, r, o, a, u, i >> Mn(u))
                                        }
                                    else {
                                        var l = In(a, o, n, r, i);
                                        l ? dr.readPixels(e, t, n, r, o, a, l) : Ln.recordError(1280)
                                    }
                                },
                                _a: function(e, t, n, r) {
                                    dr.renderbufferStorage(e, t, n, r)
                                },
                                Na: function(e, t, n, r, o) {
                                    dr.renderbufferStorageMultisample(e, t, n, r, o)
                                },
                                Za: function(e, t, n, r) {
                                    dr.scissor(e, t, n, r)
                                },
                                Ya: function(e, t, n, r) {
                                    var o = Ln.getSource(e, t, n, r);
                                    dr.shaderSource(Ln.shaders[e], o)
                                },
                                Xa: function(e, t, n, r, o, a, i, u, l) {
                                    if (Ln.currentContext.version >= 2)
                                        if (dr.currentPixelUnpackBufferBinding) dr.texImage2D(e, t, n, r, o, a, i, u, l);
                                        else if (l) {
                                        var c = Nn(u);
                                        dr.texImage2D(e, t, n, r, o, a, i, u, c, l >> Mn(c))
                                    } else dr.texImage2D(e, t, n, r, o, a, i, u, null);
                                    else dr.texImage2D(e, t, n, r, o, a, i, u, l ? In(u, i, r, o, l) : null)
                                },
                                Wa: function(e, t, n) {
                                    dr.texParameteri(e, t, n)
                                },
                                Ea: function(e, t, n, r, o) {
                                    dr.texStorage2D(e, t, n, r, o)
                                },
                                Va: function(e, t, n, r, o, a, i, u, l) {
                                    if (Ln.currentContext.version >= 2)
                                        if (dr.currentPixelUnpackBufferBinding) dr.texSubImage2D(e, t, n, r, o, a, i, u, l);
                                        else if (l) {
                                        var c = Nn(u);
                                        dr.texSubImage2D(e, t, n, r, o, a, i, u, c, l >> Mn(c))
                                    } else dr.texSubImage2D(e, t, n, r, o, a, i, u, null);
                                    else {
                                        var s = null;
                                        l && (s = In(u, i, o, a, l)), dr.texSubImage2D(e, t, n, r, o, a, i, u, s)
                                    }
                                },
                                Ua: function(e, t) {
                                    dr.uniform1i(Rn(e), t)
                                },
                                Ta: function(e, t, n) {
                                    dr.uniform2f(Rn(e), t, n)
                                },
                                Fa: function(e, t, n) {
                                    e = Ln.programs[e], dr.uniformBlockBinding(e, t, n)
                                },
                                Sa: function(e) {
                                    e = Ln.programs[e], dr.useProgram(e), dr.currentProgram = e
                                },
                                Ia: function(e, t, n, r, o) {
                                    dr.vertexAttribIPointer(e, t, n, r, o)
                                },
                                Ra: function(e, t, n, r, o, a) {
                                    dr.vertexAttribPointer(e, t, n, !!r, o, a)
                                },
                                Qa: function(e, t, n, r) {
                                    dr.viewport(e, t, n, r)
                                },
                                Fc: function(e, t, n) {
                                    r().copyWithin(e, t, t + n)
                                },
                                rc: function() {
                                    return navigator.hardwareConcurrency
                                },
                                wc: function(e, t, n) {
                                    t /= 2, Bn.length = t;
                                    for (var r = n >> 3, o = 0; o < t; o++) re[r + 2 * o] ? Bn[o] = re[r + 2 * o + 1] : Bn[o] = c()[r + 2 * o + 1];
                                    return (e < 0 ? Re[-e - 1] : gr[e]).apply(null, Bn)
                                },
                                pc: function(e) {
                                    var t = r().length;
                                    if ((e >>>= 0) <= t) return !1;
                                    var n, o, a = 2147483648;
                                    if (e > a) return !1;
                                    for (var i = 1; i <= 4; i *= 2) {
                                        var u = t * (1 + .2 / i);
                                        if (u = Math.min(u, e + 100663296), zn(Math.min(a, ((n = Math.max(e, u)) % (o = 65536) > 0 && (n += o - n % o), n)))) return !0
                                    }
                                    return !1
                                },
                                xc: function(e, t, n) {
                                    return Hn(e) ? qn(e, t, n) : Gn(e, t, n)
                                },
                                Bb: Yn,
                                Hc: Xn,
                                Db: function() {
                                    return 0
                                },
                                Ec: function() {
                                    throw "unwind"
                                },
                                ia: function() {
                                    return Ln.currentContext && Ln.currentContext.GLctx ? Ln.currentContext.defaultFbo ? (Ln.blitOffscreenFramebuffer(Ln.currentContext), 0) : Ln.currentContext.attributes.explicitSwapControl ? 0 : -3 : -3
                                },
                                ka: function(e, t) {
                                    var n = t >> 2,
                                        r = i()[n + 6],
                                        o = {
                                            alpha: !!i()[n + 0],
                                            depth: !!i()[n + 1],
                                            stencil: !!i()[n + 2],
                                            antialias: !!i()[n + 3],
                                            premultipliedAlpha: !!i()[n + 4],
                                            preserveDrawingBuffer: !!i()[n + 5],
                                            powerPreference: Kn[r],
                                            failIfMajorPerformanceCaveat: !!i()[n + 7],
                                            majorVersion: i()[n + 8],
                                            minorVersion: i()[n + 9],
                                            enableExtensionsByDefault: i()[n + 10],
                                            explicitSwapControl: i()[n + 11],
                                            proxyContextToMainThread: i()[n + 12],
                                            renderViaOffscreenBackBuffer: i()[n + 13]
                                        },
                                        a = Hn(e);
                                    return E && (2 === o.proxyContextToMainThread || !a && 1 === o.proxyContextToMainThread) ? ("undefined" == typeof OffscreenCanvas && (i()[t + 52 >> 2] = 1, i()[t + 20 >> 2] = 1), Fr(622854144, e, t)) : a ? (o.explicitSwapControl && !o.renderViaOffscreenBackBuffer && (o.renderViaOffscreenBackBuffer = !0), Ln.createContext(a, o)) : 0
                                },
                                Pb: function(e) {
                                    for (var t = e >> 2, n = 0; n < 14; ++n) i()[t + n] = 0;
                                    i()[t + 0] = i()[t + 1] = i()[t + 3] = i()[t + 4] = i()[t + 8] = i()[t + 10] = 1, _ && (i()[e + 48 >> 2] = 1)
                                },
                                ja: function(e) {
                                    var t = Ln.makeContextCurrent(e);
                                    return t && (Ln.currentContextIsProxied = !1), t ? 0 : -5
                                },
                                Cc: er,
                                Dc: tr,
                                qa: Ue,
                                O: nr,
                                Ca: rr,
                                uc: or,
                                Ba: ar,
                                b: function() {
                                    return N
                                },
                                ua: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        return Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                va: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        return Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                t: function(e) {
                                    var t = Rr();
                                    try {
                                        return Ge(e)()
                                    } catch (n) {
                                        if (jr(t), n !== n + 0 && "longjmp" !== n) throw n;
                                        Mr(1, 0)
                                    }
                                },
                                g: function(e, t) {
                                    var n = Rr();
                                    try {
                                        return Ge(e)(t)
                                    } catch (r) {
                                        if (jr(n), r !== r + 0 && "longjmp" !== r) throw r;
                                        Mr(1, 0)
                                    }
                                },
                                d: function(e, t, n) {
                                    var r = Rr();
                                    try {
                                        return Ge(e)(t, n)
                                    } catch (o) {
                                        if (jr(r), o !== o + 0 && "longjmp" !== o) throw o;
                                        Mr(1, 0)
                                    }
                                },
                                i: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        return Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                r: function(e, t, n, r, o) {
                                    var a = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o)
                                    } catch (i) {
                                        if (jr(a), i !== i + 0 && "longjmp" !== i) throw i;
                                        Mr(1, 0)
                                    }
                                },
                                x: function(e, t, n, r, o, a) {
                                    var i = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o, a)
                                    } catch (u) {
                                        if (jr(i), u !== u + 0 && "longjmp" !== u) throw u;
                                        Mr(1, 0)
                                    }
                                },
                                z: function(e, t, n, r, o, a, i) {
                                    var u = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o, a, i)
                                    } catch (l) {
                                        if (jr(u), l !== l + 0 && "longjmp" !== l) throw l;
                                        Mr(1, 0)
                                    }
                                },
                                D: function(e, t, n, r, o, a, i, u) {
                                    var l = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o, a, i, u)
                                    } catch (c) {
                                        if (jr(l), c !== c + 0 && "longjmp" !== c) throw c;
                                        Mr(1, 0)
                                    }
                                },
                                ta: function(e, t, n, r, o, a, i, u, l) {
                                    var c = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o, a, i, u, l)
                                    } catch (s) {
                                        if (jr(c), s !== s + 0 && "longjmp" !== s) throw s;
                                        Mr(1, 0)
                                    }
                                },
                                M: function(e, t, n, r, o, a, i, u, l, c, s, f) {
                                    var d = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o, a, i, u, l, c, s, f)
                                    } catch (p) {
                                        if (jr(d), p !== p + 0 && "longjmp" !== p) throw p;
                                        Mr(1, 0)
                                    }
                                },
                                dc: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        return Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                ec: function(e, t, n, r, o) {
                                    var a = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o)
                                    } catch (i) {
                                        if (jr(a), i !== i + 0 && "longjmp" !== i) throw i;
                                        Mr(1, 0)
                                    }
                                },
                                xa: function(e) {
                                    var t = Rr();
                                    try {
                                        return Ge(e)()
                                    } catch (n) {
                                        if (jr(t), n !== n + 0 && "longjmp" !== n) throw n;
                                        return Mr(1, 0), BigInt(0)
                                    }
                                },
                                J: function(e, t) {
                                    var n = Rr();
                                    try {
                                        return Ge(e)(t)
                                    } catch (r) {
                                        if (jr(n), r !== r + 0 && "longjmp" !== r) throw r;
                                        return Mr(1, 0), BigInt(0)
                                    }
                                },
                                C: function(e, t, n) {
                                    var r = Rr();
                                    try {
                                        return Ge(e)(t, n)
                                    } catch (o) {
                                        if (jr(r), o !== o + 0 && "longjmp" !== o) throw o;
                                        return Mr(1, 0), BigInt(0)
                                    }
                                },
                                N: function(e, t, n, r, o) {
                                    var a = Rr();
                                    try {
                                        return Ge(e)(t, n, r, o)
                                    } catch (i) {
                                        if (jr(a), i !== i + 0 && "longjmp" !== i) throw i;
                                        return Mr(1, 0), BigInt(0)
                                    }
                                },
                                y: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        return Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        return Mr(1, 0), BigInt(0)
                                    }
                                },
                                o: function(e) {
                                    var t = Rr();
                                    try {
                                        Ge(e)()
                                    } catch (n) {
                                        if (jr(t), n !== n + 0 && "longjmp" !== n) throw n;
                                        Mr(1, 0)
                                    }
                                },
                                $b: function(e, t) {
                                    var n = Rr();
                                    try {
                                        Ge(e)(t)
                                    } catch (r) {
                                        if (jr(n), r !== r + 0 && "longjmp" !== r) throw r;
                                        Mr(1, 0)
                                    }
                                },
                                bc: function(e, t, n, r, o) {
                                    var a = Rr();
                                    try {
                                        Ge(e)(t, n, r, o)
                                    } catch (i) {
                                        if (jr(a), i !== i + 0 && "longjmp" !== i) throw i;
                                        Mr(1, 0)
                                    }
                                },
                                m: function(e, t) {
                                    var n = Rr();
                                    try {
                                        Ge(e)(t)
                                    } catch (r) {
                                        if (jr(n), r !== r + 0 && "longjmp" !== r) throw r;
                                        Mr(1, 0)
                                    }
                                },
                                ac: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                f: function(e, t, n) {
                                    var r = Rr();
                                    try {
                                        Ge(e)(t, n)
                                    } catch (o) {
                                        if (jr(r), o !== o + 0 && "longjmp" !== o) throw o;
                                        Mr(1, 0)
                                    }
                                },
                                h: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                n: function(e, t, n, r, o) {
                                    var a = Rr();
                                    try {
                                        Ge(e)(t, n, r, o)
                                    } catch (i) {
                                        if (jr(a), i !== i + 0 && "longjmp" !== i) throw i;
                                        Mr(1, 0)
                                    }
                                },
                                q: function(e, t, n, r, o, a) {
                                    var i = Rr();
                                    try {
                                        Ge(e)(t, n, r, o, a)
                                    } catch (u) {
                                        if (jr(i), u !== u + 0 && "longjmp" !== u) throw u;
                                        Mr(1, 0)
                                    }
                                },
                                u: function(e, t, n, r, o, a, i) {
                                    var u = Rr();
                                    try {
                                        Ge(e)(t, n, r, o, a, i)
                                    } catch (l) {
                                        if (jr(u), l !== l + 0 && "longjmp" !== l) throw l;
                                        Mr(1, 0)
                                    }
                                },
                                B: function(e, t, n, r, o, a, i, u) {
                                    var l = Rr();
                                    try {
                                        Ge(e)(t, n, r, o, a, i, u)
                                    } catch (c) {
                                        if (jr(l), c !== c + 0 && "longjmp" !== c) throw c;
                                        Mr(1, 0)
                                    }
                                },
                                H: function(e, t, n, r, o, a, i, u, l, c, s) {
                                    var f = Rr();
                                    try {
                                        Ge(e)(t, n, r, o, a, i, u, l, c, s)
                                    } catch (d) {
                                        if (jr(f), d !== d + 0 && "longjmp" !== d) throw d;
                                        Mr(1, 0)
                                    }
                                },
                                L: function(e, t, n, r, o, a, i, u, l, c, s, f, d, p, h, m) {
                                    var v = Rr();
                                    try {
                                        Ge(e)(t, n, r, o, a, i, u, l, c, s, f, d, p, h, m)
                                    } catch (g) {
                                        if (jr(v), g !== g + 0 && "longjmp" !== g) throw g;
                                        Mr(1, 0)
                                    }
                                },
                                I: function(e, t, n, r) {
                                    var o = Rr();
                                    try {
                                        Ge(e)(t, n, r)
                                    } catch (a) {
                                        if (jr(o), a !== a + 0 && "longjmp" !== a) throw a;
                                        Mr(1, 0)
                                    }
                                },
                                w: function(e) {
                                    return e
                                },
                                a: I || d.wasmMemory,
                                Sb: fr,
                                mc: function(e, t, n, r) {
                                    return fr(e, t, n, r)
                                },
                                Q: function(e) {
                                    var t = Date.now() / 1e3 | 0;
                                    return e && (i()[e >> 2] = t), t
                                }
                            },
                            _r = (function() {
                                var e = {
                                    a: wr
                                };

                                function t(e, t) {
                                    var n, r, o = e.exports;
                                    if (d.asm = o, n = d.asm.dd, Ve.tlsInitFunctions.push(n), ge = d.asm.Jc, r = d.asm.Ic, we.unshift(r), R = t, !E) {
                                        var a = Ve.unusedWorkers.length;
                                        Ve.unusedWorkers.forEach((function(e) {
                                            Ve.loadWasmModuleToWorker(e, (function() {
                                                --a || Ae()
                                            }))
                                        }))
                                    }
                                }

                                function n(e) {
                                    t(e.instance, e.module)
                                }

                                function r(t) {
                                    return (D || !w && !_ || "function" != typeof fetch ? Promise.resolve().then((function() {
                                        return Ie(Ne)
                                    })) : fetch(Ne, {
                                        credentials: "same-origin"
                                    }).then((function(e) {
                                        if (!e.ok) throw "failed to load wasm binary file at '" + Ne + "'";
                                        return e.arrayBuffer()
                                    })).catch((function() {
                                        return Ie(Ne)
                                    }))).then((function(t) {
                                        return WebAssembly.instantiate(t, e)
                                    })).then((function(e) {
                                        return e
                                    })).then(t, (function(e) {
                                        P("failed to asynchronously prepare wasm: " + e), De(e)
                                    }))
                                }
                                if (E || Oe(), d.instantiateWasm) try {
                                    return d.instantiateWasm(e, t)
                                } catch (o) {
                                    return P("Module.instantiateWasm callback failed with error: " + o), !1
                                }(D || "function" != typeof WebAssembly.instantiateStreaming || Me(Ne) || "function" != typeof fetch ? r(n) : fetch(Ne, {
                                    credentials: "same-origin"
                                }).then((function(t) {
                                    return WebAssembly.instantiateStreaming(t, e).then(n, (function(e) {
                                        return P("wasm streaming compile failed: " + e), P("falling back to ArrayBuffer instantiation"), r(n)
                                    }))
                                }))).catch(f)
                            }(), d.___wasm_call_ctors = function() {
                                return (d.___wasm_call_ctors = d.asm.Ic).apply(null, arguments)
                            }, d._main = function() {
                                return (d._main = d.asm.Kc).apply(null, arguments)
                            }, d._initVm = function() {
                                return (d._initVm = d.asm.Lc).apply(null, arguments)
                            }, d._EmptyBlockHandler = function() {
                                return (d._EmptyBlockHandler = d.asm.Mc).apply(null, arguments)
                            }, d._MemoryUtils_GetByteProxy = function() {
                                return (d._MemoryUtils_GetByteProxy = d.asm.Nc).apply(null, arguments)
                            }, d._MemoryUtils_GetHalfProxy = function() {
                                return (d._MemoryUtils_GetHalfProxy = d.asm.Oc).apply(null, arguments)
                            }, d._MemoryUtils_GetWordProxy = function() {
                                return (d._MemoryUtils_GetWordProxy = d.asm.Pc).apply(null, arguments)
                            }, d._MemoryUtils_GetDoubleProxy = function() {
                                return (d._MemoryUtils_GetDoubleProxy = d.asm.Qc).apply(null, arguments)
                            }, d._MemoryUtils_SetByteProxy = function() {
                                return (d._MemoryUtils_SetByteProxy = d.asm.Rc).apply(null, arguments)
                            }, d._MemoryUtils_SetHalfProxy = function() {
                                return (d._MemoryUtils_SetHalfProxy = d.asm.Sc).apply(null, arguments)
                            }, d._MemoryUtils_SetWordProxy = function() {
                                return (d._MemoryUtils_SetWordProxy = d.asm.Tc).apply(null, arguments)
                            }, d._MemoryUtils_SetDoubleProxy = function() {
                                return (d._MemoryUtils_SetDoubleProxy = d.asm.Uc).apply(null, arguments)
                            }, d._LWL_Proxy = function() {
                                return (d._LWL_Proxy = d.asm.Vc).apply(null, arguments)
                            }, d._LWR_Proxy = function() {
                                return (d._LWR_Proxy = d.asm.Wc).apply(null, arguments)
                            }, d._LDL_Proxy = function() {
                                return (d._LDL_Proxy = d.asm.Xc).apply(null, arguments)
                            }, d._LDR_Proxy = function() {
                                return (d._LDR_Proxy = d.asm.Yc).apply(null, arguments)
                            }, d._SWL_Proxy = function() {
                                return (d._SWL_Proxy = d.asm.Zc).apply(null, arguments)
                            }, d._SWR_Proxy = function() {
                                return (d._SWR_Proxy = d.asm._c).apply(null, arguments)
                            }, d._SDL_Proxy = function() {
                                return (d._SDL_Proxy = d.asm.$c).apply(null, arguments)
                            }, d._SDR_Proxy = function() {
                                return (d._SDR_Proxy = d.asm.ad).apply(null, arguments)
                            }, d._free = function() {
                                return (_r = d._free = d.asm.bd).apply(null, arguments)
                            }),
                            kr = d._malloc = function() {
                                return (kr = d._malloc = d.asm.cd).apply(null, arguments)
                            },
                            Er = (d._emscripten_tls_init = function() {
                                return (d._emscripten_tls_init = d.asm.dd).apply(null, arguments)
                            }, d._emscripten_builtin_memalign = function() {
                                return (Er = d._emscripten_builtin_memalign = d.asm.ed).apply(null, arguments)
                            }),
                            xr = d.___getTypeName = function() {
                                return (xr = d.___getTypeName = d.asm.fd).apply(null, arguments)
                            },
                            Sr = (d.___embind_register_native_and_builtin_types = function() {
                                return (d.___embind_register_native_and_builtin_types = d.asm.gd).apply(null, arguments)
                            }, d._pthread_self = function() {
                                return (Sr = d._pthread_self = d.asm.hd).apply(null, arguments)
                            }),
                            Cr = (d._emscripten_webgl_commit_frame = function() {
                                return (d._emscripten_webgl_commit_frame = d.asm.id).apply(null, arguments)
                            }, d._emscripten_dispatch_to_thread_ = function() {
                                return (Cr = d._emscripten_dispatch_to_thread_ = d.asm.jd).apply(null, arguments)
                            }),
                            Pr = d.___errno_location = function() {
                                return (Pr = d.___errno_location = d.asm.kd).apply(null, arguments)
                            },
                            Lr = (d.__emscripten_thread_crashed = function() {
                                return (d.__emscripten_thread_crashed = d.asm.ld).apply(null, arguments)
                            }, d.__emscripten_thread_init = function() {
                                return (Lr = d.__emscripten_thread_init = d.asm.md).apply(null, arguments)
                            }),
                            Tr = d._emscripten_main_thread_process_queued_calls = function() {
                                return (Tr = d._emscripten_main_thread_process_queued_calls = d.asm.nd).apply(null, arguments)
                            },
                            Fr = (d._emscripten_current_thread_process_queued_calls = function() {
                                return (d._emscripten_current_thread_process_queued_calls = d.asm.od).apply(null, arguments)
                            }, d._emscripten_sync_run_in_main_thread_2 = function() {
                                return (Fr = d._emscripten_sync_run_in_main_thread_2 = d.asm.pd).apply(null, arguments)
                            }),
                            Or = d._emscripten_sync_run_in_main_thread_4 = function() {
                                return (Or = d._emscripten_sync_run_in_main_thread_4 = d.asm.qd).apply(null, arguments)
                            },
                            Ar = d._emscripten_run_in_main_runtime_thread_js = function() {
                                return (Ar = d._emscripten_run_in_main_runtime_thread_js = d.asm.rd).apply(null, arguments)
                            },
                            Dr = d.__emscripten_thread_free_data = function() {
                                return (Dr = d.__emscripten_thread_free_data = d.asm.sd).apply(null, arguments)
                            },
                            Nr = d.__emscripten_thread_exit = function() {
                                return (Nr = d.__emscripten_thread_exit = d.asm.td).apply(null, arguments)
                            },
                            Mr = d._setThrew = function() {
                                return (Mr = d._setThrew = d.asm.ud).apply(null, arguments)
                            },
                            Ir = d._emscripten_stack_set_limits = function() {
                                return (Ir = d._emscripten_stack_set_limits = d.asm.vd).apply(null, arguments)
                            },
                            Rr = d.stackSave = function() {
                                return (Rr = d.stackSave = d.asm.wd).apply(null, arguments)
                            },
                            jr = d.stackRestore = function() {
                                return (jr = d.stackRestore = d.asm.xd).apply(null, arguments)
                            },
                            Br = d.stackAlloc = function() {
                                return (Br = d.stackAlloc = d.asm.yd).apply(null, arguments)
                            },
                            zr = d.___cxa_can_catch = function() {
                                return (zr = d.___cxa_can_catch = d.asm.zd).apply(null, arguments)
                            },
                            Ur = d.___cxa_is_pointer_type = function() {
                                return (Ur = d.___cxa_is_pointer_type = d.asm.Ad).apply(null, arguments)
                            },
                            Wr = d.__emscripten_allow_main_runtime_queued_calls = 219776;

                        function Vr(e) {
                            this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e
                        }
                        d.ccall = function(e, t, n, r, o) {
                            var a = {
                                    string: function(e) {
                                        var t = 0;
                                        if (null !== e && void 0 !== e && 0 !== e) {
                                            var n = 1 + (e.length << 2);
                                            G(e, t = Br(n), n)
                                        }
                                        return t
                                    },
                                    array: function(e) {
                                        var t = Br(e.length);
                                        return me(e, t), t
                                    }
                                },
                                i = function(e) {
                                    return d["_" + e]
                                }(e),
                                u = [],
                                l = 0;
                            if (r)
                                for (var c = 0; c < r.length; c++) {
                                    var s = a[n[c]];
                                    s ? (0 === l && (l = Rr()), u[c] = s(r[c])) : u[c] = r[c]
                                }
                            var f = i.apply(null, u);
                            return f = function(e) {
                                return 0 !== l && jr(l),
                                    function(e) {
                                        return "string" === t ? H(e) : "boolean" === t ? Boolean(e) : e
                                    }(e)
                            }(f)
                        }, d.addRunDependency = Oe, d.removeRunDependency = Ae, d.FS_createPath = lt.createPath, d.FS_createDataFile = lt.createDataFile, d.FS_createPreloadedFile = lt.createPreloadedFile, d.FS_createLazyFile = lt.createLazyFile, d.FS_createDevice = lt.createDevice, d.FS_unlink = lt.unlink, d.keepRuntimeAlive = Ce, d.FS = lt, d.PThread = Ve, d.PThread = Ve, d.wasmMemory = I, d.ExitStatus = Vr;

                        function Qr(e) {
                            if (e = e || g, !(Le > 0)) {
                                if (E) return s(d), Pe(), void postMessage({
                                    cmd: "loaded"
                                });
                                ! function() {
                                    if (d.preRun)
                                        for ("function" == typeof d.preRun && (d.preRun = [d.preRun]); d.preRun.length;) e = d.preRun.shift(), be.unshift(e);
                                    var e;
                                    je(be)
                                }(), Le > 0 || (d.setStatus ? (d.setStatus("Running..."), setTimeout((function() {
                                    setTimeout((function() {
                                        d.setStatus("")
                                    }), 1), t()
                                }), 1)) : t())
                            }

                            function t() {
                                br || (br = !0, d.calledRun = !0, z || (Pe(), E || je(_e), s(d), d.onRuntimeInitialized && d.onRuntimeInitialized(), qr && function(e) {
                                    var t = d._main,
                                        n = (e = e || []).length + 1,
                                        r = Br(4 * (n + 1));
                                    i()[r >> 2] = he(y);
                                    for (var o = 1; o < n; o++) i()[(r >> 2) + o] = he(e[o - 1]);
                                    i()[(r >> 2) + n] = 0;
                                    try {
                                        var a = t(n, r);
                                        Hr(a, !0)
                                    } catch (u) {
                                        return We(u)
                                    } finally {
                                        !0
                                    }
                                }(e), function() {
                                    if (!E) {
                                        if (d.postRun)
                                            for ("function" == typeof d.postRun && (d.postRun = [d.postRun]); d.postRun.length;) e = d.postRun.shift(), Ee.unshift(e);
                                        var e;
                                        je(Ee)
                                    }
                                }()))
                            }
                        }

                        function Hr(e, t) {
                            if (B = e, !t && E) throw Qe(e), "unwind";
                            Ce() || E || (Ve.terminateAllThreads(), xe = !0),
                                function(e) {
                                    B = e, Ce() || (Ve.terminateAllThreads(), d.onExit && d.onExit(e), z = !0);
                                    b(e, new Vr(e))
                                }(e)
                        }
                        if (Fe = function e() {
                                br || Qr(), br || (Fe = e)
                            }, d.run = Qr, d.preInit)
                            for ("function" == typeof d.preInit && (d.preInit = [d.preInit]); d.preInit.length > 0;) d.preInit.pop()();
                        var qr = !0;
                        return d.noInitialRun && (qr = !1), Qr(), t.ready
                    }
                }();
                e.exports = t
            },
            110: function(e, t, n) {
                "use strict";
                var r = n(441),
                    o = {
                        childContextTypes: !0,
                        contextType: !0,
                        contextTypes: !0,
                        defaultProps: !0,
                        displayName: !0,
                        getDefaultProps: !0,
                        getDerivedStateFromError: !0,
                        getDerivedStateFromProps: !0,
                        mixins: !0,
                        propTypes: !0,
                        type: !0
                    },
                    a = {
                        name: !0,
                        length: !0,
                        prototype: !0,
                        caller: !0,
                        callee: !0,
                        arguments: !0,
                        arity: !0
                    },
                    i = {
                        $$typeof: !0,
                        compare: !0,
                        defaultProps: !0,
                        displayName: !0,
                        propTypes: !0,
                        type: !0
                    },
                    u = {};

                function l(e) {
                    return r.isMemo(e) ? i : u[e.$$typeof] || o
                }
                u[r.ForwardRef] = {
                    $$typeof: !0,
                    render: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0
                }, u[r.Memo] = i;
                var c = Object.defineProperty,
                    s = Object.getOwnPropertyNames,
                    f = Object.getOwnPropertySymbols,
                    d = Object.getOwnPropertyDescriptor,
                    p = Object.getPrototypeOf,
                    h = Object.prototype;
                e.exports = function e(t, n, r) {
                    if ("string" !== typeof n) {
                        if (h) {
                            var o = p(n);
                            o && o !== h && e(t, o, r)
                        }
                        var i = s(n);
                        f && (i = i.concat(f(n)));
                        for (var u = l(t), m = l(n), v = 0; v < i.length; ++v) {
                            var g = i[v];
                            if (!a[g] && (!r || !r[g]) && (!m || !m[g]) && (!u || !u[g])) {
                                var y = d(n, g);
                                try {
                                    c(t, g, y)
                                } catch (b) {}
                            }
                        }
                    }
                    return t
                }
            },
            725: function(e) {
                "use strict";
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;

                function o(e) {
                    if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                    return Object(e)
                }
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var r = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            r[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                    } catch (o) {
                        return !1
                    }
                }() ? Object.assign : function(e, a) {
                    for (var i, u, l = o(e), c = 1; c < arguments.length; c++) {
                        for (var s in i = Object(arguments[c])) n.call(i, s) && (l[s] = i[s]);
                        if (t) {
                            u = t(i);
                            for (var f = 0; f < u.length; f++) r.call(i, u[f]) && (l[u[f]] = i[u[f]])
                        }
                    }
                    return l
                }
            },
            463: function(e, t, n) {
                "use strict";
                var r = n(791),
                    o = n(725),
                    a = n(296);

                function i(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                if (!r) throw Error(i(227));
                var u = new Set,
                    l = {};

                function c(e, t) {
                    s(e, t), s(e + "Capture", t)
                }

                function s(e, t) {
                    for (l[e] = t, e = 0; e < t.length; e++) u.add(t[e])
                }
                var f = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement),
                    d = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    p = Object.prototype.hasOwnProperty,
                    h = {},
                    m = {};

                function v(e, t, n, r, o, a, i) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = i
                }
                var g = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    g[e] = new v(e, 0, !1, e, null, !1, !1)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    g[t] = new v(t, 1, !1, e[1], null, !1, !1)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    g[e] = new v(e, 2, !1, e.toLowerCase(), null, !1, !1)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    g[e] = new v(e, 2, !1, e, null, !1, !1)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    g[e] = new v(e, 3, !1, e.toLowerCase(), null, !1, !1)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    g[e] = new v(e, 3, !0, e, null, !1, !1)
                })), ["capture", "download"].forEach((function(e) {
                    g[e] = new v(e, 4, !1, e, null, !1, !1)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    g[e] = new v(e, 6, !1, e, null, !1, !1)
                })), ["rowSpan", "start"].forEach((function(e) {
                    g[e] = new v(e, 5, !1, e.toLowerCase(), null, !1, !1)
                }));
                var y = /[\-:]([a-z])/g;

                function b(e) {
                    return e[1].toUpperCase()
                }

                function w(e, t, n, r) {
                    var o = g.hasOwnProperty(t) ? g[t] : null;
                    (null !== o ? 0 === o.type : !r && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, r) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, r) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, r)) return !0;
                        if (r) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, o, r) && (n = null), r || null === o ? function(e) {
                        return !!p.call(m, e) || !p.call(h, e) && (d.test(e) ? m[e] = !0 : (h[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = null === n ? 3 !== o.type && "" : n : (t = o.attributeName, r = o.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (o = o.type) || 4 === o && !0 === n ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(y, b);
                    g[t] = new v(t, 1, !1, e, null, !1, !1)
                })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(y, b);
                    g[t] = new v(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(y, b);
                    g[t] = new v(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    g[e] = new v(e, 1, !1, e.toLowerCase(), null, !1, !1)
                })), g.xlinkHref = new v("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach((function(e) {
                    g[e] = new v(e, 1, !1, e.toLowerCase(), null, !0, !0)
                }));
                var _ = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
                    k = 60103,
                    E = 60106,
                    x = 60107,
                    S = 60108,
                    C = 60114,
                    P = 60109,
                    L = 60110,
                    T = 60112,
                    F = 60113,
                    O = 60120,
                    A = 60115,
                    D = 60116,
                    N = 60121,
                    M = 60128,
                    I = 60129,
                    R = 60130,
                    j = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var B = Symbol.for;
                    k = B("react.element"), E = B("react.portal"), x = B("react.fragment"), S = B("react.strict_mode"), C = B("react.profiler"), P = B("react.provider"), L = B("react.context"), T = B("react.forward_ref"), F = B("react.suspense"), O = B("react.suspense_list"), A = B("react.memo"), D = B("react.lazy"), N = B("react.block"), B("react.scope"), M = B("react.opaque.id"), I = B("react.debug_trace_mode"), R = B("react.offscreen"), j = B("react.legacy_hidden")
                }
                var z, U = "function" === typeof Symbol && Symbol.iterator;

                function W(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = U && e[U] || e["@@iterator"]) ? e : null
                }

                function V(e) {
                    if (void 0 === z) try {
                        throw Error()
                    } catch (n) {
                        var t = n.stack.trim().match(/\n( *(at )?)/);
                        z = t && t[1] || ""
                    }
                    return "\n" + z + e
                }
                var Q = !1;

                function H(e, t) {
                    if (!e || Q) return "";
                    Q = !0;
                    var n = Error.prepareStackTrace;
                    Error.prepareStackTrace = void 0;
                    try {
                        if (t)
                            if (t = function() {
                                    throw Error()
                                }, Object.defineProperty(t.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }), "object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(t, [])
                                } catch (l) {
                                    var r = l
                                }
                                Reflect.construct(e, [], t)
                            } else {
                                try {
                                    t.call()
                                } catch (l) {
                                    r = l
                                }
                                e.call(t.prototype)
                            }
                        else {
                            try {
                                throw Error()
                            } catch (l) {
                                r = l
                            }
                            e()
                        }
                    } catch (l) {
                        if (l && r && "string" === typeof l.stack) {
                            for (var o = l.stack.split("\n"), a = r.stack.split("\n"), i = o.length - 1, u = a.length - 1; 1 <= i && 0 <= u && o[i] !== a[u];) u--;
                            for (; 1 <= i && 0 <= u; i--, u--)
                                if (o[i] !== a[u]) {
                                    if (1 !== i || 1 !== u)
                                        do {
                                            if (i--, 0 > --u || o[i] !== a[u]) return "\n" + o[i].replace(" at new ", " at ")
                                        } while (1 <= i && 0 <= u);
                                    break
                                }
                        }
                    } finally {
                        Q = !1, Error.prepareStackTrace = n
                    }
                    return (e = e ? e.displayName || e.name : "") ? V(e) : ""
                }

                function q(e) {
                    switch (e.tag) {
                        case 5:
                            return V(e.type);
                        case 16:
                            return V("Lazy");
                        case 13:
                            return V("Suspense");
                        case 19:
                            return V("SuspenseList");
                        case 0:
                        case 2:
                        case 15:
                            return e = H(e.type, !1);
                        case 11:
                            return e = H(e.type.render, !1);
                        case 22:
                            return e = H(e.type._render, !1);
                        case 1:
                            return e = H(e.type, !0);
                        default:
                            return ""
                    }
                }

                function G(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case x:
                            return "Fragment";
                        case E:
                            return "Portal";
                        case C:
                            return "Profiler";
                        case S:
                            return "StrictMode";
                        case F:
                            return "Suspense";
                        case O:
                            return "SuspenseList"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case L:
                            return (e.displayName || "Context") + ".Consumer";
                        case P:
                            return (e._context.displayName || "Context") + ".Provider";
                        case T:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case A:
                            return G(e.type);
                        case N:
                            return G(e._render);
                        case D:
                            t = e._payload, e = e._init;
                            try {
                                return G(e(t))
                            } catch (n) {}
                    }
                    return null
                }

                function $(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function Y(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function X(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = Y(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            r = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var o = n.get,
                                a = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return o.call(this)
                                },
                                set: function(e) {
                                    r = "" + e, a.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return r
                                },
                                setValue: function(e) {
                                    r = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function K(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        r = "";
                    return e && (r = Y(e) ? e.checked ? "true" : "false" : e.value), (e = r) !== n && (t.setValue(e), !0)
                }

                function Z(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function J(e, t) {
                    var n = t.checked;
                    return o({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function ee(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        r = null != t.checked ? t.checked : t.defaultChecked;
                    n = $(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: r,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function te(e, t) {
                    null != (t = t.checked) && w(e, "checked", t, !1)
                }

                function ne(e, t) {
                    te(e, t);
                    var n = $(t.value),
                        r = t.type;
                    if (null != n) "number" === r ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === r || "reset" === r) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? oe(e, t.type, n) : t.hasOwnProperty("defaultValue") && oe(e, t.type, $(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function re(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var r = t.type;
                        if (!("submit" !== r && "reset" !== r || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function oe(e, t, n) {
                    "number" === t && Z(e.ownerDocument) === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }

                function ae(e, t) {
                    return e = o({
                        children: void 0
                    }, t), (t = function(e) {
                        var t = "";
                        return r.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function ie(e, t, n, r) {
                    if (e = e.options, t) {
                        t = {};
                        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
                        for (n = 0; n < e.length; n++) o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && r && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + $(n), t = null, o = 0; o < e.length; o++) {
                            if (e[o].value === n) return e[o].selected = !0, void(r && (e[o].defaultSelected = !0));
                            null !== t || e[o].disabled || (t = e[o])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function ue(e, t) {
                    if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
                    return o({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function le(e, t) {
                    var n = t.value;
                    if (null == n) {
                        if (n = t.children, t = t.defaultValue, null != n) {
                            if (null != t) throw Error(i(92));
                            if (Array.isArray(n)) {
                                if (!(1 >= n.length)) throw Error(i(93));
                                n = n[0]
                            }
                            t = n
                        }
                        null == t && (t = ""), n = t
                    }
                    e._wrapperState = {
                        initialValue: $(n)
                    }
                }

                function ce(e, t) {
                    var n = $(t.value),
                        r = $(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != r && (e.defaultValue = "" + r)
                }

                function se(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && "" !== t && null !== t && (e.value = t)
                }
                var fe = "http://www.w3.org/1999/xhtml",
                    de = "http://www.w3.org/2000/svg";

                function pe(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function he(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? pe(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var me, ve, ge = (ve = function(e, t) {
                    if (e.namespaceURI !== de || "innerHTML" in e) e.innerHTML = t;
                    else {
                        for ((me = me || document.createElement("div")).innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = me.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                        for (; t.firstChild;) e.appendChild(t.firstChild)
                    }
                }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, r) {
                    MSApp.execUnsafeLocalFunction((function() {
                        return ve(e, t)
                    }))
                } : ve);

                function ye(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var be = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    we = ["Webkit", "ms", "Moz", "O"];

                function _e(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || be.hasOwnProperty(e) && be[e] ? ("" + t).trim() : t + "px"
                }

                function ke(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var r = 0 === n.indexOf("--"),
                                o = _e(n, t[n], r);
                            "float" === n && (n = "cssFloat"), r ? e.setProperty(n, o) : e[n] = o
                        }
                }
                Object.keys(be).forEach((function(e) {
                    we.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), be[t] = be[e]
                    }))
                }));
                var Ee = o({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function xe(e, t) {
                    if (t) {
                        if (Ee[e] && (null != t.children || null != t.dangerouslySetInnerHTML)) throw Error(i(137, e));
                        if (null != t.dangerouslySetInnerHTML) {
                            if (null != t.children) throw Error(i(60));
                            if ("object" !== typeof t.dangerouslySetInnerHTML || !("__html" in t.dangerouslySetInnerHTML)) throw Error(i(61))
                        }
                        if (null != t.style && "object" !== typeof t.style) throw Error(i(62))
                    }
                }

                function Se(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function Ce(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }
                var Pe = null,
                    Le = null,
                    Te = null;

                function Fe(e) {
                    if (e = ro(e)) {
                        if ("function" !== typeof Pe) throw Error(i(280));
                        var t = e.stateNode;
                        t && (t = ao(t), Pe(e.stateNode, e.type, t))
                    }
                }

                function Oe(e) {
                    Le ? Te ? Te.push(e) : Te = [e] : Le = e
                }

                function Ae() {
                    if (Le) {
                        var e = Le,
                            t = Te;
                        if (Te = Le = null, Fe(e), t)
                            for (e = 0; e < t.length; e++) Fe(t[e])
                    }
                }

                function De(e, t) {
                    return e(t)
                }

                function Ne(e, t, n, r, o) {
                    return e(t, n, r, o)
                }

                function Me() {}
                var Ie = De,
                    Re = !1,
                    je = !1;

                function Be() {
                    null === Le && null === Te || (Me(), Ae())
                }

                function ze(e, t) {
                    var n = e.stateNode;
                    if (null === n) return null;
                    var r = ao(n);
                    if (null === r) return null;
                    n = r[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                        case "onMouseEnter":
                            (r = !r.disabled) || (r = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !r;
                            break e;
                        default:
                            e = !1
                    }
                    if (e) return null;
                    if (n && "function" !== typeof n) throw Error(i(231, t, typeof n));
                    return n
                }
                var Ue = !1;
                if (f) try {
                    var We = {};
                    Object.defineProperty(We, "passive", {
                        get: function() {
                            Ue = !0
                        }
                    }), window.addEventListener("test", We, We), window.removeEventListener("test", We, We)
                } catch (ve) {
                    Ue = !1
                }

                function Ve(e, t, n, r, o, a, i, u, l) {
                    var c = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, c)
                    } catch (s) {
                        this.onError(s)
                    }
                }
                var Qe = !1,
                    He = null,
                    qe = !1,
                    Ge = null,
                    $e = {
                        onError: function(e) {
                            Qe = !0, He = e
                        }
                    };

                function Ye(e, t, n, r, o, a, i, u, l) {
                    Qe = !1, He = null, Ve.apply($e, arguments)
                }

                function Xe(e) {
                    var t = e,
                        n = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        e = t;
                        do {
                            0 !== (1026 & (t = e).flags) && (n = t.return), e = t.return
                        } while (e)
                    }
                    return 3 === t.tag ? n : null
                }

                function Ke(e) {
                    if (13 === e.tag) {
                        var t = e.memoizedState;
                        if (null === t && (null !== (e = e.alternate) && (t = e.memoizedState)), null !== t) return t.dehydrated
                    }
                    return null
                }

                function Ze(e) {
                    if (Xe(e) !== e) throw Error(i(188))
                }

                function Je(e) {
                    if (e = function(e) {
                            var t = e.alternate;
                            if (!t) {
                                if (null === (t = Xe(e))) throw Error(i(188));
                                return t !== e ? null : e
                            }
                            for (var n = e, r = t;;) {
                                var o = n.return;
                                if (null === o) break;
                                var a = o.alternate;
                                if (null === a) {
                                    if (null !== (r = o.return)) {
                                        n = r;
                                        continue
                                    }
                                    break
                                }
                                if (o.child === a.child) {
                                    for (a = o.child; a;) {
                                        if (a === n) return Ze(o), e;
                                        if (a === r) return Ze(o), t;
                                        a = a.sibling
                                    }
                                    throw Error(i(188))
                                }
                                if (n.return !== r.return) n = o, r = a;
                                else {
                                    for (var u = !1, l = o.child; l;) {
                                        if (l === n) {
                                            u = !0, n = o, r = a;
                                            break
                                        }
                                        if (l === r) {
                                            u = !0, r = o, n = a;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!u) {
                                        for (l = a.child; l;) {
                                            if (l === n) {
                                                u = !0, n = a, r = o;
                                                break
                                            }
                                            if (l === r) {
                                                u = !0, r = a, n = o;
                                                break
                                            }
                                            l = l.sibling
                                        }
                                        if (!u) throw Error(i(189))
                                    }
                                }
                                if (n.alternate !== r) throw Error(i(190))
                            }
                            if (3 !== n.tag) throw Error(i(188));
                            return n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }

                function et(e, t) {
                    for (var n = e.alternate; null !== t;) {
                        if (t === e || t === n) return !0;
                        t = t.return
                    }
                    return !1
                }
                var tt, nt, rt, ot, at = !1,
                    it = [],
                    ut = null,
                    lt = null,
                    ct = null,
                    st = new Map,
                    ft = new Map,
                    dt = [],
                    pt = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

                function ht(e, t, n, r, o) {
                    return {
                        blockedOn: e,
                        domEventName: t,
                        eventSystemFlags: 16 | n,
                        nativeEvent: o,
                        targetContainers: [r]
                    }
                }

                function mt(e, t) {
                    switch (e) {
                        case "focusin":
                        case "focusout":
                            ut = null;
                            break;
                        case "dragenter":
                        case "dragleave":
                            lt = null;
                            break;
                        case "mouseover":
                        case "mouseout":
                            ct = null;
                            break;
                        case "pointerover":
                        case "pointerout":
                            st.delete(t.pointerId);
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                            ft.delete(t.pointerId)
                    }
                }

                function vt(e, t, n, r, o, a) {
                    return null === e || e.nativeEvent !== a ? (e = ht(t, n, r, o, a), null !== t && (null !== (t = ro(t)) && nt(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, null !== o && -1 === t.indexOf(o) && t.push(o), e)
                }

                function gt(e) {
                    var t = no(e.target);
                    if (null !== t) {
                        var n = Xe(t);
                        if (null !== n)
                            if (13 === (t = n.tag)) {
                                if (null !== (t = Ke(n))) return e.blockedOn = t, void ot(e.lanePriority, (function() {
                                    a.unstable_runWithPriority(e.priority, (function() {
                                        rt(n)
                                    }))
                                }))
                            } else if (3 === t && n.stateNode.hydrate) return void(e.blockedOn = 3 === n.tag ? n.stateNode.containerInfo : null)
                    }
                    e.blockedOn = null
                }

                function yt(e) {
                    if (null !== e.blockedOn) return !1;
                    for (var t = e.targetContainers; 0 < t.length;) {
                        var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                        if (null !== n) return null !== (t = ro(n)) && nt(t), e.blockedOn = n, !1;
                        t.shift()
                    }
                    return !0
                }

                function bt(e, t, n) {
                    yt(e) && n.delete(t)
                }

                function wt() {
                    for (at = !1; 0 < it.length;) {
                        var e = it[0];
                        if (null !== e.blockedOn) {
                            null !== (e = ro(e.blockedOn)) && tt(e);
                            break
                        }
                        for (var t = e.targetContainers; 0 < t.length;) {
                            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
                            if (null !== n) {
                                e.blockedOn = n;
                                break
                            }
                            t.shift()
                        }
                        null === e.blockedOn && it.shift()
                    }
                    null !== ut && yt(ut) && (ut = null), null !== lt && yt(lt) && (lt = null), null !== ct && yt(ct) && (ct = null), st.forEach(bt), ft.forEach(bt)
                }

                function _t(e, t) {
                    e.blockedOn === t && (e.blockedOn = null, at || (at = !0, a.unstable_scheduleCallback(a.unstable_NormalPriority, wt)))
                }

                function kt(e) {
                    function t(t) {
                        return _t(t, e)
                    }
                    if (0 < it.length) {
                        _t(it[0], e);
                        for (var n = 1; n < it.length; n++) {
                            var r = it[n];
                            r.blockedOn === e && (r.blockedOn = null)
                        }
                    }
                    for (null !== ut && _t(ut, e), null !== lt && _t(lt, e), null !== ct && _t(ct, e), st.forEach(t), ft.forEach(t), n = 0; n < dt.length; n++)(r = dt[n]).blockedOn === e && (r.blockedOn = null);
                    for (; 0 < dt.length && null === (n = dt[0]).blockedOn;) gt(n), null === n.blockedOn && dt.shift()
                }

                function Et(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var xt = {
                        animationend: Et("Animation", "AnimationEnd"),
                        animationiteration: Et("Animation", "AnimationIteration"),
                        animationstart: Et("Animation", "AnimationStart"),
                        transitionend: Et("Transition", "TransitionEnd")
                    },
                    St = {},
                    Ct = {};

                function Pt(e) {
                    if (St[e]) return St[e];
                    if (!xt[e]) return e;
                    var t, n = xt[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Ct) return St[e] = n[t];
                    return e
                }
                f && (Ct = document.createElement("div").style, "AnimationEvent" in window || (delete xt.animationend.animation, delete xt.animationiteration.animation, delete xt.animationstart.animation), "TransitionEvent" in window || delete xt.transitionend.transition);
                var Lt = Pt("animationend"),
                    Tt = Pt("animationiteration"),
                    Ft = Pt("animationstart"),
                    Ot = Pt("transitionend"),
                    At = new Map,
                    Dt = new Map,
                    Nt = ["abort", "abort", Lt, "animationEnd", Tt, "animationIteration", Ft, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Ot, "transitionEnd", "waiting", "waiting"];

                function Mt(e, t) {
                    for (var n = 0; n < e.length; n += 2) {
                        var r = e[n],
                            o = e[n + 1];
                        o = "on" + (o[0].toUpperCase() + o.slice(1)), Dt.set(r, t), At.set(r, o), c(o, [r])
                    }
                }(0, a.unstable_now)();
                var It = 8;

                function Rt(e) {
                    if (0 !== (1 & e)) return It = 15, 1;
                    if (0 !== (2 & e)) return It = 14, 2;
                    if (0 !== (4 & e)) return It = 13, 4;
                    var t = 24 & e;
                    return 0 !== t ? (It = 12, t) : 0 !== (32 & e) ? (It = 11, 32) : 0 !== (t = 192 & e) ? (It = 10, t) : 0 !== (256 & e) ? (It = 9, 256) : 0 !== (t = 3584 & e) ? (It = 8, t) : 0 !== (4096 & e) ? (It = 7, 4096) : 0 !== (t = 4186112 & e) ? (It = 6, t) : 0 !== (t = 62914560 & e) ? (It = 5, t) : 67108864 & e ? (It = 4, 67108864) : 0 !== (134217728 & e) ? (It = 3, 134217728) : 0 !== (t = 805306368 & e) ? (It = 2, t) : 0 !== (1073741824 & e) ? (It = 1, 1073741824) : (It = 8, e)
                }

                function jt(e, t) {
                    var n = e.pendingLanes;
                    if (0 === n) return It = 0;
                    var r = 0,
                        o = 0,
                        a = e.expiredLanes,
                        i = e.suspendedLanes,
                        u = e.pingedLanes;
                    if (0 !== a) r = a, o = It = 15;
                    else if (0 !== (a = 134217727 & n)) {
                        var l = a & ~i;
                        0 !== l ? (r = Rt(l), o = It) : 0 !== (u &= a) && (r = Rt(u), o = It)
                    } else 0 !== (a = n & ~i) ? (r = Rt(a), o = It) : 0 !== u && (r = Rt(u), o = It);
                    if (0 === r) return 0;
                    if (r = n & ((0 > (r = 31 - Qt(r)) ? 0 : 1 << r) << 1) - 1, 0 !== t && t !== r && 0 === (t & i)) {
                        if (Rt(t), o <= It) return t;
                        It = o
                    }
                    if (0 !== (t = e.entangledLanes))
                        for (e = e.entanglements, t &= r; 0 < t;) o = 1 << (n = 31 - Qt(t)), r |= e[n], t &= ~o;
                    return r
                }

                function Bt(e) {
                    return 0 !== (e = -1073741825 & e.pendingLanes) ? e : 1073741824 & e ? 1073741824 : 0
                }

                function zt(e, t) {
                    switch (e) {
                        case 15:
                            return 1;
                        case 14:
                            return 2;
                        case 12:
                            return 0 === (e = Ut(24 & ~t)) ? zt(10, t) : e;
                        case 10:
                            return 0 === (e = Ut(192 & ~t)) ? zt(8, t) : e;
                        case 8:
                            return 0 === (e = Ut(3584 & ~t)) && (0 === (e = Ut(4186112 & ~t)) && (e = 512)), e;
                        case 2:
                            return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t
                    }
                    throw Error(i(358, e))
                }

                function Ut(e) {
                    return e & -e
                }

                function Wt(e) {
                    for (var t = [], n = 0; 31 > n; n++) t.push(e);
                    return t
                }

                function Vt(e, t, n) {
                    e.pendingLanes |= t;
                    var r = t - 1;
                    e.suspendedLanes &= r, e.pingedLanes &= r, (e = e.eventTimes)[t = 31 - Qt(t)] = n
                }
                var Qt = Math.clz32 ? Math.clz32 : function(e) {
                        return 0 === e ? 32 : 31 - (Ht(e) / qt | 0) | 0
                    },
                    Ht = Math.log,
                    qt = Math.LN2;
                var Gt = a.unstable_UserBlockingPriority,
                    $t = a.unstable_runWithPriority,
                    Yt = !0;

                function Xt(e, t, n, r) {
                    Re || Me();
                    var o = Zt,
                        a = Re;
                    Re = !0;
                    try {
                        Ne(o, e, t, n, r)
                    } finally {
                        (Re = a) || Be()
                    }
                }

                function Kt(e, t, n, r) {
                    $t(Gt, Zt.bind(null, e, t, n, r))
                }

                function Zt(e, t, n, r) {
                    var o;
                    if (Yt)
                        if ((o = 0 === (4 & t)) && 0 < it.length && -1 < pt.indexOf(e)) e = ht(null, e, t, n, r), it.push(e);
                        else {
                            var a = Jt(e, t, n, r);
                            if (null === a) o && mt(e, r);
                            else {
                                if (o) {
                                    if (-1 < pt.indexOf(e)) return e = ht(a, e, t, n, r), void it.push(e);
                                    if (function(e, t, n, r, o) {
                                            switch (t) {
                                                case "focusin":
                                                    return ut = vt(ut, e, t, n, r, o), !0;
                                                case "dragenter":
                                                    return lt = vt(lt, e, t, n, r, o), !0;
                                                case "mouseover":
                                                    return ct = vt(ct, e, t, n, r, o), !0;
                                                case "pointerover":
                                                    var a = o.pointerId;
                                                    return st.set(a, vt(st.get(a) || null, e, t, n, r, o)), !0;
                                                case "gotpointercapture":
                                                    return a = o.pointerId, ft.set(a, vt(ft.get(a) || null, e, t, n, r, o)), !0
                                            }
                                            return !1
                                        }(a, e, t, n, r)) return;
                                    mt(e, r)
                                }
                                Mr(e, t, r, null, n)
                            }
                        }
                }

                function Jt(e, t, n, r) {
                    var o = Ce(r);
                    if (null !== (o = no(o))) {
                        var a = Xe(o);
                        if (null === a) o = null;
                        else {
                            var i = a.tag;
                            if (13 === i) {
                                if (null !== (o = Ke(a))) return o;
                                o = null
                            } else if (3 === i) {
                                if (a.stateNode.hydrate) return 3 === a.tag ? a.stateNode.containerInfo : null;
                                o = null
                            } else a !== o && (o = null)
                        }
                    }
                    return Mr(e, t, r, o, n), null
                }
                var en = null,
                    tn = null,
                    nn = null;

                function rn() {
                    if (nn) return nn;
                    var e, t, n = tn,
                        r = n.length,
                        o = "value" in en ? en.value : en.textContent,
                        a = o.length;
                    for (e = 0; e < r && n[e] === o[e]; e++);
                    var i = r - e;
                    for (t = 1; t <= i && n[r - t] === o[a - t]; t++);
                    return nn = o.slice(e, 1 < t ? 1 - t : void 0)
                }

                function on(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }

                function an() {
                    return !0
                }

                function un() {
                    return !1
                }

                function ln(e) {
                    function t(t, n, r, o, a) {
                        for (var i in this._reactName = t, this._targetInst = r, this.type = n, this.nativeEvent = o, this.target = a, this.currentTarget = null, e) e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
                        return this.isDefaultPrevented = (null != o.defaultPrevented ? o.defaultPrevented : !1 === o.returnValue) ? an : un, this.isPropagationStopped = un, this
                    }
                    return o(t.prototype, {
                        preventDefault: function() {
                            this.defaultPrevented = !0;
                            var e = this.nativeEvent;
                            e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = an)
                        },
                        stopPropagation: function() {
                            var e = this.nativeEvent;
                            e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = an)
                        },
                        persist: function() {},
                        isPersistent: an
                    }), t
                }
                var cn, sn, fn, dn = {
                        eventPhase: 0,
                        bubbles: 0,
                        cancelable: 0,
                        timeStamp: function(e) {
                            return e.timeStamp || Date.now()
                        },
                        defaultPrevented: 0,
                        isTrusted: 0
                    },
                    pn = ln(dn),
                    hn = o({}, dn, {
                        view: 0,
                        detail: 0
                    }),
                    mn = ln(hn),
                    vn = o({}, hn, {
                        screenX: 0,
                        screenY: 0,
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        getModifierState: Ln,
                        button: 0,
                        buttons: 0,
                        relatedTarget: function(e) {
                            return void 0 === e.relatedTarget ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
                        },
                        movementX: function(e) {
                            return "movementX" in e ? e.movementX : (e !== fn && (fn && "mousemove" === e.type ? (cn = e.screenX - fn.screenX, sn = e.screenY - fn.screenY) : sn = cn = 0, fn = e), cn)
                        },
                        movementY: function(e) {
                            return "movementY" in e ? e.movementY : sn
                        }
                    }),
                    gn = ln(vn),
                    yn = ln(o({}, vn, {
                        dataTransfer: 0
                    })),
                    bn = ln(o({}, hn, {
                        relatedTarget: 0
                    })),
                    wn = ln(o({}, dn, {
                        animationName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    _n = o({}, dn, {
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    kn = ln(_n),
                    En = ln(o({}, dn, {
                        data: 0
                    })),
                    xn = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    Sn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    Cn = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Pn(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = Cn[e]) && !!t[e]
                }

                function Ln() {
                    return Pn
                }
                var Tn = o({}, hn, {
                        key: function(e) {
                            if (e.key) {
                                var t = xn[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = on(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? Sn[e.keyCode] || "Unidentified" : ""
                        },
                        code: 0,
                        location: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        altKey: 0,
                        metaKey: 0,
                        repeat: 0,
                        locale: 0,
                        getModifierState: Ln,
                        charCode: function(e) {
                            return "keypress" === e.type ? on(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? on(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    Fn = ln(Tn),
                    On = ln(o({}, vn, {
                        pointerId: 0,
                        width: 0,
                        height: 0,
                        pressure: 0,
                        tangentialPressure: 0,
                        tiltX: 0,
                        tiltY: 0,
                        twist: 0,
                        pointerType: 0,
                        isPrimary: 0
                    })),
                    An = ln(o({}, hn, {
                        touches: 0,
                        targetTouches: 0,
                        changedTouches: 0,
                        altKey: 0,
                        metaKey: 0,
                        ctrlKey: 0,
                        shiftKey: 0,
                        getModifierState: Ln
                    })),
                    Dn = ln(o({}, dn, {
                        propertyName: 0,
                        elapsedTime: 0,
                        pseudoElement: 0
                    })),
                    Nn = o({}, vn, {
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: 0,
                        deltaMode: 0
                    }),
                    Mn = ln(Nn),
                    In = [9, 13, 27, 32],
                    Rn = f && "CompositionEvent" in window,
                    jn = null;
                f && "documentMode" in document && (jn = document.documentMode);
                var Bn = f && "TextEvent" in window && !jn,
                    zn = f && (!Rn || jn && 8 < jn && 11 >= jn),
                    Un = String.fromCharCode(32),
                    Wn = !1;

                function Vn(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== In.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "focusout":
                            return !0;
                        default:
                            return !1
                    }
                }

                function Qn(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Hn = !1;
                var qn = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Gn(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!qn[e.type] : "textarea" === t
                }

                function $n(e, t, n, r) {
                    Oe(r), 0 < (t = Rr(t, "onChange")).length && (n = new pn("onChange", "change", null, n, r), e.push({
                        event: n,
                        listeners: t
                    }))
                }
                var Yn = null,
                    Xn = null;

                function Kn(e) {
                    Tr(e, 0)
                }

                function Zn(e) {
                    if (K(oo(e))) return e
                }

                function Jn(e, t) {
                    if ("change" === e) return t
                }
                var er = !1;
                if (f) {
                    var tr;
                    if (f) {
                        var nr = "oninput" in document;
                        if (!nr) {
                            var rr = document.createElement("div");
                            rr.setAttribute("oninput", "return;"), nr = "function" === typeof rr.oninput
                        }
                        tr = nr
                    } else tr = !1;
                    er = tr && (!document.documentMode || 9 < document.documentMode)
                }

                function or() {
                    Yn && (Yn.detachEvent("onpropertychange", ar), Xn = Yn = null)
                }

                function ar(e) {
                    if ("value" === e.propertyName && Zn(Xn)) {
                        var t = [];
                        if ($n(t, Xn, e, Ce(e)), e = Kn, Re) e(t);
                        else {
                            Re = !0;
                            try {
                                De(e, t)
                            } finally {
                                Re = !1, Be()
                            }
                        }
                    }
                }

                function ir(e, t, n) {
                    "focusin" === e ? (or(), Xn = n, (Yn = t).attachEvent("onpropertychange", ar)) : "focusout" === e && or()
                }

                function ur(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return Zn(Xn)
                }

                function lr(e, t) {
                    if ("click" === e) return Zn(t)
                }

                function cr(e, t) {
                    if ("input" === e || "change" === e) return Zn(t)
                }
                var sr = "function" === typeof Object.is ? Object.is : function(e, t) {
                        return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                    },
                    fr = Object.prototype.hasOwnProperty;

                function dr(e, t) {
                    if (sr(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        r = Object.keys(t);
                    if (n.length !== r.length) return !1;
                    for (r = 0; r < n.length; r++)
                        if (!fr.call(t, n[r]) || !sr(e[n[r]], t[n[r]])) return !1;
                    return !0
                }

                function pr(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function hr(e, t) {
                    var n, r = pr(e);
                    for (e = 0; r;) {
                        if (3 === r.nodeType) {
                            if (n = e + r.textContent.length, e <= t && n >= t) return {
                                node: r,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; r;) {
                                if (r.nextSibling) {
                                    r = r.nextSibling;
                                    break e
                                }
                                r = r.parentNode
                            }
                            r = void 0
                        }
                        r = pr(r)
                    }
                }

                function mr(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? mr(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function vr() {
                    for (var e = window, t = Z(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (r) {
                            n = !1
                        }
                        if (!n) break;
                        t = Z((e = t.contentWindow).document)
                    }
                    return t
                }

                function gr(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }
                var yr = f && "documentMode" in document && 11 >= document.documentMode,
                    br = null,
                    wr = null,
                    _r = null,
                    kr = !1;

                function Er(e, t, n) {
                    var r = n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
                    kr || null == br || br !== Z(r) || ("selectionStart" in (r = br) && gr(r) ? r = {
                        start: r.selectionStart,
                        end: r.selectionEnd
                    } : r = {
                        anchorNode: (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: r.anchorOffset,
                        focusNode: r.focusNode,
                        focusOffset: r.focusOffset
                    }, _r && dr(_r, r) || (_r = r, 0 < (r = Rr(wr, "onSelect")).length && (t = new pn("onSelect", "select", null, t, n), e.push({
                        event: t,
                        listeners: r
                    }), t.target = br)))
                }
                Mt("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0), Mt("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1), Mt(Nt, 2);
                for (var xr = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Sr = 0; Sr < xr.length; Sr++) Dt.set(xr[Sr], 0);
                s("onMouseEnter", ["mouseout", "mouseover"]), s("onMouseLeave", ["mouseout", "mouseover"]), s("onPointerEnter", ["pointerout", "pointerover"]), s("onPointerLeave", ["pointerout", "pointerover"]), c("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), c("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), c("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), c("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), c("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
                var Cr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    Pr = new Set("cancel close invalid load scroll toggle".split(" ").concat(Cr));

                function Lr(e, t, n) {
                    var r = e.type || "unknown-event";
                    e.currentTarget = n,
                        function(e, t, n, r, o, a, u, l, c) {
                            if (Ye.apply(this, arguments), Qe) {
                                if (!Qe) throw Error(i(198));
                                var s = He;
                                Qe = !1, He = null, qe || (qe = !0, Ge = s)
                            }
                        }(r, t, void 0, e), e.currentTarget = null
                }

                function Tr(e, t) {
                    t = 0 !== (4 & t);
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n],
                            o = r.event;
                        r = r.listeners;
                        e: {
                            var a = void 0;
                            if (t)
                                for (var i = r.length - 1; 0 <= i; i--) {
                                    var u = r[i],
                                        l = u.instance,
                                        c = u.currentTarget;
                                    if (u = u.listener, l !== a && o.isPropagationStopped()) break e;
                                    Lr(o, u, c), a = l
                                } else
                                    for (i = 0; i < r.length; i++) {
                                        if (l = (u = r[i]).instance, c = u.currentTarget, u = u.listener, l !== a && o.isPropagationStopped()) break e;
                                        Lr(o, u, c), a = l
                                    }
                        }
                    }
                    if (qe) throw e = Ge, qe = !1, Ge = null, e
                }

                function Fr(e, t) {
                    var n = io(t),
                        r = e + "__bubble";
                    n.has(r) || (Nr(t, e, 2, !1), n.add(r))
                }
                var Or = "_reactListening" + Math.random().toString(36).slice(2);

                function Ar(e) {
                    e[Or] || (e[Or] = !0, u.forEach((function(t) {
                        Pr.has(t) || Dr(t, !1, e, null), Dr(t, !0, e, null)
                    })))
                }

                function Dr(e, t, n, r) {
                    var o = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
                        a = n;
                    if ("selectionchange" === e && 9 !== n.nodeType && (a = n.ownerDocument), null !== r && !t && Pr.has(e)) {
                        if ("scroll" !== e) return;
                        o |= 2, a = r
                    }
                    var i = io(a),
                        u = e + "__" + (t ? "capture" : "bubble");
                    i.has(u) || (t && (o |= 4), Nr(a, e, o, t), i.add(u))
                }

                function Nr(e, t, n, r) {
                    var o = Dt.get(t);
                    switch (void 0 === o ? 2 : o) {
                        case 0:
                            o = Xt;
                            break;
                        case 1:
                            o = Kt;
                            break;
                        default:
                            o = Zt
                    }
                    n = o.bind(null, t, n, e), o = void 0, !Ue || "touchstart" !== t && "touchmove" !== t && "wheel" !== t || (o = !0), r ? void 0 !== o ? e.addEventListener(t, n, {
                        capture: !0,
                        passive: o
                    }) : e.addEventListener(t, n, !0) : void 0 !== o ? e.addEventListener(t, n, {
                        passive: o
                    }) : e.addEventListener(t, n, !1)
                }

                function Mr(e, t, n, r, o) {
                    var a = r;
                    if (0 === (1 & t) && 0 === (2 & t) && null !== r) e: for (;;) {
                        if (null === r) return;
                        var i = r.tag;
                        if (3 === i || 4 === i) {
                            var u = r.stateNode.containerInfo;
                            if (u === o || 8 === u.nodeType && u.parentNode === o) break;
                            if (4 === i)
                                for (i = r.return; null !== i;) {
                                    var l = i.tag;
                                    if ((3 === l || 4 === l) && ((l = i.stateNode.containerInfo) === o || 8 === l.nodeType && l.parentNode === o)) return;
                                    i = i.return
                                }
                            for (; null !== u;) {
                                if (null === (i = no(u))) return;
                                if (5 === (l = i.tag) || 6 === l) {
                                    r = a = i;
                                    continue e
                                }
                                u = u.parentNode
                            }
                        }
                        r = r.return
                    }! function(e, t, n) {
                        if (je) return e(t, n);
                        je = !0;
                        try {
                            Ie(e, t, n)
                        } finally {
                            je = !1, Be()
                        }
                    }((function() {
                        var r = a,
                            o = Ce(n),
                            i = [];
                        e: {
                            var u = At.get(e);
                            if (void 0 !== u) {
                                var l = pn,
                                    c = e;
                                switch (e) {
                                    case "keypress":
                                        if (0 === on(n)) break e;
                                    case "keydown":
                                    case "keyup":
                                        l = Fn;
                                        break;
                                    case "focusin":
                                        c = "focus", l = bn;
                                        break;
                                    case "focusout":
                                        c = "blur", l = bn;
                                        break;
                                    case "beforeblur":
                                    case "afterblur":
                                        l = bn;
                                        break;
                                    case "click":
                                        if (2 === n.button) break e;
                                    case "auxclick":
                                    case "dblclick":
                                    case "mousedown":
                                    case "mousemove":
                                    case "mouseup":
                                    case "mouseout":
                                    case "mouseover":
                                    case "contextmenu":
                                        l = gn;
                                        break;
                                    case "drag":
                                    case "dragend":
                                    case "dragenter":
                                    case "dragexit":
                                    case "dragleave":
                                    case "dragover":
                                    case "dragstart":
                                    case "drop":
                                        l = yn;
                                        break;
                                    case "touchcancel":
                                    case "touchend":
                                    case "touchmove":
                                    case "touchstart":
                                        l = An;
                                        break;
                                    case Lt:
                                    case Tt:
                                    case Ft:
                                        l = wn;
                                        break;
                                    case Ot:
                                        l = Dn;
                                        break;
                                    case "scroll":
                                        l = mn;
                                        break;
                                    case "wheel":
                                        l = Mn;
                                        break;
                                    case "copy":
                                    case "cut":
                                    case "paste":
                                        l = kn;
                                        break;
                                    case "gotpointercapture":
                                    case "lostpointercapture":
                                    case "pointercancel":
                                    case "pointerdown":
                                    case "pointermove":
                                    case "pointerout":
                                    case "pointerover":
                                    case "pointerup":
                                        l = On
                                }
                                var s = 0 !== (4 & t),
                                    f = !s && "scroll" === e,
                                    d = s ? null !== u ? u + "Capture" : null : u;
                                s = [];
                                for (var p, h = r; null !== h;) {
                                    var m = (p = h).stateNode;
                                    if (5 === p.tag && null !== m && (p = m, null !== d && (null != (m = ze(h, d)) && s.push(Ir(h, m, p)))), f) break;
                                    h = h.return
                                }
                                0 < s.length && (u = new l(u, c, null, n, o), i.push({
                                    event: u,
                                    listeners: s
                                }))
                            }
                        }
                        if (0 === (7 & t)) {
                            if (l = "mouseout" === e || "pointerout" === e, (!(u = "mouseover" === e || "pointerover" === e) || 0 !== (16 & t) || !(c = n.relatedTarget || n.fromElement) || !no(c) && !c[eo]) && (l || u) && (u = o.window === o ? o : (u = o.ownerDocument) ? u.defaultView || u.parentWindow : window, l ? (l = r, null !== (c = (c = n.relatedTarget || n.toElement) ? no(c) : null) && (c !== (f = Xe(c)) || 5 !== c.tag && 6 !== c.tag) && (c = null)) : (l = null, c = r), l !== c)) {
                                if (s = gn, m = "onMouseLeave", d = "onMouseEnter", h = "mouse", "pointerout" !== e && "pointerover" !== e || (s = On, m = "onPointerLeave", d = "onPointerEnter", h = "pointer"), f = null == l ? u : oo(l), p = null == c ? u : oo(c), (u = new s(m, h + "leave", l, n, o)).target = f, u.relatedTarget = p, m = null, no(o) === r && ((s = new s(d, h + "enter", c, n, o)).target = p, s.relatedTarget = f, m = s), f = m, l && c) e: {
                                    for (d = c, h = 0, p = s = l; p; p = jr(p)) h++;
                                    for (p = 0, m = d; m; m = jr(m)) p++;
                                    for (; 0 < h - p;) s = jr(s),
                                    h--;
                                    for (; 0 < p - h;) d = jr(d),
                                    p--;
                                    for (; h--;) {
                                        if (s === d || null !== d && s === d.alternate) break e;
                                        s = jr(s), d = jr(d)
                                    }
                                    s = null
                                }
                                else s = null;
                                null !== l && Br(i, u, l, s, !1), null !== c && null !== f && Br(i, f, c, s, !0)
                            }
                            if ("select" === (l = (u = r ? oo(r) : window).nodeName && u.nodeName.toLowerCase()) || "input" === l && "file" === u.type) var v = Jn;
                            else if (Gn(u))
                                if (er) v = cr;
                                else {
                                    v = ur;
                                    var g = ir
                                }
                            else(l = u.nodeName) && "input" === l.toLowerCase() && ("checkbox" === u.type || "radio" === u.type) && (v = lr);
                            switch (v && (v = v(e, r)) ? $n(i, v, n, o) : (g && g(e, u, r), "focusout" === e && (g = u._wrapperState) && g.controlled && "number" === u.type && oe(u, "number", u.value)), g = r ? oo(r) : window, e) {
                                case "focusin":
                                    (Gn(g) || "true" === g.contentEditable) && (br = g, wr = r, _r = null);
                                    break;
                                case "focusout":
                                    _r = wr = br = null;
                                    break;
                                case "mousedown":
                                    kr = !0;
                                    break;
                                case "contextmenu":
                                case "mouseup":
                                case "dragend":
                                    kr = !1, Er(i, n, o);
                                    break;
                                case "selectionchange":
                                    if (yr) break;
                                case "keydown":
                                case "keyup":
                                    Er(i, n, o)
                            }
                            var y;
                            if (Rn) e: {
                                switch (e) {
                                    case "compositionstart":
                                        var b = "onCompositionStart";
                                        break e;
                                    case "compositionend":
                                        b = "onCompositionEnd";
                                        break e;
                                    case "compositionupdate":
                                        b = "onCompositionUpdate";
                                        break e
                                }
                                b = void 0
                            }
                            else Hn ? Vn(e, n) && (b = "onCompositionEnd") : "keydown" === e && 229 === n.keyCode && (b = "onCompositionStart");
                            b && (zn && "ko" !== n.locale && (Hn || "onCompositionStart" !== b ? "onCompositionEnd" === b && Hn && (y = rn()) : (tn = "value" in (en = o) ? en.value : en.textContent, Hn = !0)), 0 < (g = Rr(r, b)).length && (b = new En(b, e, null, n, o), i.push({
                                event: b,
                                listeners: g
                            }), y ? b.data = y : null !== (y = Qn(n)) && (b.data = y))), (y = Bn ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return Qn(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Wn = !0, Un);
                                    case "textInput":
                                        return (e = t.data) === Un && Wn ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Hn) return "compositionend" === e || !Rn && Vn(e, t) ? (e = rn(), nn = tn = en = null, Hn = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return zn && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) && (0 < (r = Rr(r, "onBeforeInput")).length && (o = new En("onBeforeInput", "beforeinput", null, n, o), i.push({
                                event: o,
                                listeners: r
                            }), o.data = y))
                        }
                        Tr(i, t)
                    }))
                }

                function Ir(e, t, n) {
                    return {
                        instance: e,
                        listener: t,
                        currentTarget: n
                    }
                }

                function Rr(e, t) {
                    for (var n = t + "Capture", r = []; null !== e;) {
                        var o = e,
                            a = o.stateNode;
                        5 === o.tag && null !== a && (o = a, null != (a = ze(e, n)) && r.unshift(Ir(e, a, o)), null != (a = ze(e, t)) && r.push(Ir(e, a, o))), e = e.return
                    }
                    return r
                }

                function jr(e) {
                    if (null === e) return null;
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function Br(e, t, n, r, o) {
                    for (var a = t._reactName, i = []; null !== n && n !== r;) {
                        var u = n,
                            l = u.alternate,
                            c = u.stateNode;
                        if (null !== l && l === r) break;
                        5 === u.tag && null !== c && (u = c, o ? null != (l = ze(n, a)) && i.unshift(Ir(n, l, u)) : o || null != (l = ze(n, a)) && i.push(Ir(n, l, u))), n = n.return
                    }
                    0 !== i.length && e.push({
                        event: t,
                        listeners: i
                    })
                }

                function zr() {}
                var Ur = null,
                    Wr = null;

                function Vr(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function Qr(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var Hr = "function" === typeof setTimeout ? setTimeout : void 0,
                    qr = "function" === typeof clearTimeout ? clearTimeout : void 0;

                function Gr(e) {
                    1 === e.nodeType ? e.textContent = "" : 9 === e.nodeType && (null != (e = e.body) && (e.textContent = ""))
                }

                function $r(e) {
                    for (; null != e; e = e.nextSibling) {
                        var t = e.nodeType;
                        if (1 === t || 3 === t) break
                    }
                    return e
                }

                function Yr(e) {
                    e = e.previousSibling;
                    for (var t = 0; e;) {
                        if (8 === e.nodeType) {
                            var n = e.data;
                            if ("$" === n || "$!" === n || "$?" === n) {
                                if (0 === t) return e;
                                t--
                            } else "/$" === n && t++
                        }
                        e = e.previousSibling
                    }
                    return null
                }
                var Xr = 0;
                var Kr = Math.random().toString(36).slice(2),
                    Zr = "__reactFiber$" + Kr,
                    Jr = "__reactProps$" + Kr,
                    eo = "__reactContainer$" + Kr,
                    to = "__reactEvents$" + Kr;

                function no(e) {
                    var t = e[Zr];
                    if (t) return t;
                    for (var n = e.parentNode; n;) {
                        if (t = n[eo] || n[Zr]) {
                            if (n = t.alternate, null !== t.child || null !== n && null !== n.child)
                                for (e = Yr(e); null !== e;) {
                                    if (n = e[Zr]) return n;
                                    e = Yr(e)
                                }
                            return t
                        }
                        n = (e = n).parentNode
                    }
                    return null
                }

                function ro(e) {
                    return !(e = e[Zr] || e[eo]) || 5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag ? null : e
                }

                function oo(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    throw Error(i(33))
                }

                function ao(e) {
                    return e[Jr] || null
                }

                function io(e) {
                    var t = e[to];
                    return void 0 === t && (t = e[to] = new Set), t
                }
                var uo = [],
                    lo = -1;

                function co(e) {
                    return {
                        current: e
                    }
                }

                function so(e) {
                    0 > lo || (e.current = uo[lo], uo[lo] = null, lo--)
                }

                function fo(e, t) {
                    lo++, uo[lo] = e.current, e.current = t
                }
                var po = {},
                    ho = co(po),
                    mo = co(!1),
                    vo = po;

                function go(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return po;
                    var r = e.stateNode;
                    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
                    var o, a = {};
                    for (o in n) a[o] = t[o];
                    return r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = a), a
                }

                function yo(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function bo() {
                    so(mo), so(ho)
                }

                function wo(e, t, n) {
                    if (ho.current !== po) throw Error(i(168));
                    fo(ho, t), fo(mo, n)
                }

                function _o(e, t, n) {
                    var r = e.stateNode;
                    if (e = t.childContextTypes, "function" !== typeof r.getChildContext) return n;
                    for (var a in r = r.getChildContext())
                        if (!(a in e)) throw Error(i(108, G(t) || "Unknown", a));
                    return o({}, n, r)
                }

                function ko(e) {
                    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || po, vo = ho.current, fo(ho, e), fo(mo, mo.current), !0
                }

                function Eo(e, t, n) {
                    var r = e.stateNode;
                    if (!r) throw Error(i(169));
                    n ? (e = _o(e, t, vo), r.__reactInternalMemoizedMergedChildContext = e, so(mo), so(ho), fo(ho, e)) : so(mo), fo(mo, n)
                }
                var xo = null,
                    So = null,
                    Co = a.unstable_runWithPriority,
                    Po = a.unstable_scheduleCallback,
                    Lo = a.unstable_cancelCallback,
                    To = a.unstable_shouldYield,
                    Fo = a.unstable_requestPaint,
                    Oo = a.unstable_now,
                    Ao = a.unstable_getCurrentPriorityLevel,
                    Do = a.unstable_ImmediatePriority,
                    No = a.unstable_UserBlockingPriority,
                    Mo = a.unstable_NormalPriority,
                    Io = a.unstable_LowPriority,
                    Ro = a.unstable_IdlePriority,
                    jo = {},
                    Bo = void 0 !== Fo ? Fo : function() {},
                    zo = null,
                    Uo = null,
                    Wo = !1,
                    Vo = Oo(),
                    Qo = 1e4 > Vo ? Oo : function() {
                        return Oo() - Vo
                    };

                function Ho() {
                    switch (Ao()) {
                        case Do:
                            return 99;
                        case No:
                            return 98;
                        case Mo:
                            return 97;
                        case Io:
                            return 96;
                        case Ro:
                            return 95;
                        default:
                            throw Error(i(332))
                    }
                }

                function qo(e) {
                    switch (e) {
                        case 99:
                            return Do;
                        case 98:
                            return No;
                        case 97:
                            return Mo;
                        case 96:
                            return Io;
                        case 95:
                            return Ro;
                        default:
                            throw Error(i(332))
                    }
                }

                function Go(e, t) {
                    return e = qo(e), Co(e, t)
                }

                function $o(e, t, n) {
                    return e = qo(e), Po(e, t, n)
                }

                function Yo() {
                    if (null !== Uo) {
                        var e = Uo;
                        Uo = null, Lo(e)
                    }
                    Xo()
                }

                function Xo() {
                    if (!Wo && null !== zo) {
                        Wo = !0;
                        var e = 0;
                        try {
                            var t = zo;
                            Go(99, (function() {
                                for (; e < t.length; e++) {
                                    var n = t[e];
                                    do {
                                        n = n(!0)
                                    } while (null !== n)
                                }
                            })), zo = null
                        } catch (n) {
                            throw null !== zo && (zo = zo.slice(e + 1)), Po(Do, Yo), n
                        } finally {
                            Wo = !1
                        }
                    }
                }
                var Ko = _.ReactCurrentBatchConfig;

                function Zo(e, t) {
                    if (e && e.defaultProps) {
                        for (var n in t = o({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                        return t
                    }
                    return t
                }
                var Jo = co(null),
                    ea = null,
                    ta = null,
                    na = null;

                function ra() {
                    na = ta = ea = null
                }

                function oa(e) {
                    var t = Jo.current;
                    so(Jo), e.type._context._currentValue = t
                }

                function aa(e, t) {
                    for (; null !== e;) {
                        var n = e.alternate;
                        if ((e.childLanes & t) === t) {
                            if (null === n || (n.childLanes & t) === t) break;
                            n.childLanes |= t
                        } else e.childLanes |= t, null !== n && (n.childLanes |= t);
                        e = e.return
                    }
                }

                function ia(e, t) {
                    ea = e, na = ta = null, null !== (e = e.dependencies) && null !== e.firstContext && (0 !== (e.lanes & t) && (Ri = !0), e.firstContext = null)
                }

                function ua(e, t) {
                    if (na !== e && !1 !== t && 0 !== t)
                        if ("number" === typeof t && 1073741823 !== t || (na = e, t = 1073741823), t = {
                                context: e,
                                observedBits: t,
                                next: null
                            }, null === ta) {
                            if (null === ea) throw Error(i(308));
                            ta = t, ea.dependencies = {
                                lanes: 0,
                                firstContext: t,
                                responders: null
                            }
                        } else ta = ta.next = t;
                    return e._currentValue
                }
                var la = !1;

                function ca(e) {
                    e.updateQueue = {
                        baseState: e.memoizedState,
                        firstBaseUpdate: null,
                        lastBaseUpdate: null,
                        shared: {
                            pending: null
                        },
                        effects: null
                    }
                }

                function sa(e, t) {
                    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                        baseState: e.baseState,
                        firstBaseUpdate: e.firstBaseUpdate,
                        lastBaseUpdate: e.lastBaseUpdate,
                        shared: e.shared,
                        effects: e.effects
                    })
                }

                function fa(e, t) {
                    return {
                        eventTime: e,
                        lane: t,
                        tag: 0,
                        payload: null,
                        callback: null,
                        next: null
                    }
                }

                function da(e, t) {
                    if (null !== (e = e.updateQueue)) {
                        var n = (e = e.shared).pending;
                        null === n ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
                    }
                }

                function pa(e, t) {
                    var n = e.updateQueue,
                        r = e.alternate;
                    if (null !== r && n === (r = r.updateQueue)) {
                        var o = null,
                            a = null;
                        if (null !== (n = n.firstBaseUpdate)) {
                            do {
                                var i = {
                                    eventTime: n.eventTime,
                                    lane: n.lane,
                                    tag: n.tag,
                                    payload: n.payload,
                                    callback: n.callback,
                                    next: null
                                };
                                null === a ? o = a = i : a = a.next = i, n = n.next
                            } while (null !== n);
                            null === a ? o = a = t : a = a.next = t
                        } else o = a = t;
                        return n = {
                            baseState: r.baseState,
                            firstBaseUpdate: o,
                            lastBaseUpdate: a,
                            shared: r.shared,
                            effects: r.effects
                        }, void(e.updateQueue = n)
                    }
                    null === (e = n.lastBaseUpdate) ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
                }

                function ha(e, t, n, r) {
                    var a = e.updateQueue;
                    la = !1;
                    var i = a.firstBaseUpdate,
                        u = a.lastBaseUpdate,
                        l = a.shared.pending;
                    if (null !== l) {
                        a.shared.pending = null;
                        var c = l,
                            s = c.next;
                        c.next = null, null === u ? i = s : u.next = s, u = c;
                        var f = e.alternate;
                        if (null !== f) {
                            var d = (f = f.updateQueue).lastBaseUpdate;
                            d !== u && (null === d ? f.firstBaseUpdate = s : d.next = s, f.lastBaseUpdate = c)
                        }
                    }
                    if (null !== i) {
                        for (d = a.baseState, u = 0, f = s = c = null;;) {
                            l = i.lane;
                            var p = i.eventTime;
                            if ((r & l) === l) {
                                null !== f && (f = f.next = {
                                    eventTime: p,
                                    lane: 0,
                                    tag: i.tag,
                                    payload: i.payload,
                                    callback: i.callback,
                                    next: null
                                });
                                e: {
                                    var h = e,
                                        m = i;
                                    switch (l = t, p = n, m.tag) {
                                        case 1:
                                            if ("function" === typeof(h = m.payload)) {
                                                d = h.call(p, d, l);
                                                break e
                                            }
                                            d = h;
                                            break e;
                                        case 3:
                                            h.flags = -4097 & h.flags | 64;
                                        case 0:
                                            if (null === (l = "function" === typeof(h = m.payload) ? h.call(p, d, l) : h) || void 0 === l) break e;
                                            d = o({}, d, l);
                                            break e;
                                        case 2:
                                            la = !0
                                    }
                                }
                                null !== i.callback && (e.flags |= 32, null === (l = a.effects) ? a.effects = [i] : l.push(i))
                            } else p = {
                                eventTime: p,
                                lane: l,
                                tag: i.tag,
                                payload: i.payload,
                                callback: i.callback,
                                next: null
                            }, null === f ? (s = f = p, c = d) : f = f.next = p, u |= l;
                            if (null === (i = i.next)) {
                                if (null === (l = a.shared.pending)) break;
                                i = l.next, l.next = null, a.lastBaseUpdate = l, a.shared.pending = null
                            }
                        }
                        null === f && (c = d), a.baseState = c, a.firstBaseUpdate = s, a.lastBaseUpdate = f, Uu |= u, e.lanes = u, e.memoizedState = d
                    }
                }

                function ma(e, t, n) {
                    if (e = t.effects, t.effects = null, null !== e)
                        for (t = 0; t < e.length; t++) {
                            var r = e[t],
                                o = r.callback;
                            if (null !== o) {
                                if (r.callback = null, r = n, "function" !== typeof o) throw Error(i(191, o));
                                o.call(r)
                            }
                        }
                }
                var va = (new r.Component).refs;

                function ga(e, t, n, r) {
                    n = null === (n = n(r, t = e.memoizedState)) || void 0 === n ? t : o({}, t, n), e.memoizedState = n, 0 === e.lanes && (e.updateQueue.baseState = n)
                }
                var ya = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternals) && Xe(e) === e
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = dl(),
                            o = pl(e),
                            a = fa(r, o);
                        a.payload = t, void 0 !== n && null !== n && (a.callback = n), da(e, a), hl(e, o, r)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternals;
                        var r = dl(),
                            o = pl(e),
                            a = fa(r, o);
                        a.tag = 1, a.payload = t, void 0 !== n && null !== n && (a.callback = n), da(e, a), hl(e, o, r)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternals;
                        var n = dl(),
                            r = pl(e),
                            o = fa(n, r);
                        o.tag = 2, void 0 !== t && null !== t && (o.callback = t), da(e, o), hl(e, r, n)
                    }
                };

                function ba(e, t, n, r, o, a, i) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(r, a, i) : !t.prototype || !t.prototype.isPureReactComponent || (!dr(n, r) || !dr(o, a))
                }

                function wa(e, t, n) {
                    var r = !1,
                        o = po,
                        a = t.contextType;
                    return "object" === typeof a && null !== a ? a = ua(a) : (o = yo(t) ? vo : ho.current, a = (r = null !== (r = t.contextTypes) && void 0 !== r) ? go(e, o) : po), t = new t(n, a), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = ya, e.stateNode = t, t._reactInternals = e, r && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o, e.__reactInternalMemoizedMaskedChildContext = a), t
                }

                function _a(e, t, n, r) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, r), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && ya.enqueueReplaceState(t, t.state, null)
                }

                function ka(e, t, n, r) {
                    var o = e.stateNode;
                    o.props = n, o.state = e.memoizedState, o.refs = va, ca(e);
                    var a = t.contextType;
                    "object" === typeof a && null !== a ? o.context = ua(a) : (a = yo(t) ? vo : ho.current, o.context = go(e, a)), ha(e, n, o, r), o.state = e.memoizedState, "function" === typeof(a = t.getDerivedStateFromProps) && (ga(e, t, a, n), o.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof o.getSnapshotBeforeUpdate || "function" !== typeof o.UNSAFE_componentWillMount && "function" !== typeof o.componentWillMount || (t = o.state, "function" === typeof o.componentWillMount && o.componentWillMount(), "function" === typeof o.UNSAFE_componentWillMount && o.UNSAFE_componentWillMount(), t !== o.state && ya.enqueueReplaceState(o, o.state, null), ha(e, n, o, r), o.state = e.memoizedState), "function" === typeof o.componentDidMount && (e.flags |= 4)
                }
                var Ea = Array.isArray;

                function xa(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            if (n = n._owner) {
                                if (1 !== n.tag) throw Error(i(309));
                                var r = n.stateNode
                            }
                            if (!r) throw Error(i(147, e));
                            var o = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === o ? t.ref : (t = function(e) {
                                var t = r.refs;
                                t === va && (t = r.refs = {}), null === e ? delete t[o] : t[o] = e
                            }, t._stringRef = o, t)
                        }
                        if ("string" !== typeof e) throw Error(i(284));
                        if (!n._owner) throw Error(i(290, e))
                    }
                    return e
                }

                function Sa(e, t) {
                    if ("textarea" !== e.type) throw Error(i(31, "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t))
                }

                function Ca(e) {
                    function t(t, n) {
                        if (e) {
                            var r = t.lastEffect;
                            null !== r ? (r.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.flags = 8
                        }
                    }

                    function n(n, r) {
                        if (!e) return null;
                        for (; null !== r;) t(n, r), r = r.sibling;
                        return null
                    }

                    function r(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function o(e, t) {
                        return (e = ql(e, t)).index = 0, e.sibling = null, e
                    }

                    function a(t, n, r) {
                        return t.index = r, e ? null !== (r = t.alternate) ? (r = r.index) < n ? (t.flags = 2, n) : r : (t.flags = 2, n) : n
                    }

                    function u(t) {
                        return e && null === t.alternate && (t.flags = 2), t
                    }

                    function l(e, t, n, r) {
                        return null === t || 6 !== t.tag ? ((t = Xl(n, e.mode, r)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function c(e, t, n, r) {
                        return null !== t && t.elementType === n.type ? ((r = o(t, n.props)).ref = xa(e, t, n), r.return = e, r) : ((r = Gl(n.type, n.key, n.props, null, e.mode, r)).ref = xa(e, t, n), r.return = e, r)
                    }

                    function s(e, t, n, r) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = Kl(n, e.mode, r)).return = e, t) : ((t = o(t, n.children || [])).return = e, t)
                    }

                    function f(e, t, n, r, a) {
                        return null === t || 7 !== t.tag ? ((t = $l(n, e.mode, r, a)).return = e, t) : ((t = o(t, n)).return = e, t)
                    }

                    function d(e, t, n) {
                        if ("string" === typeof t || "number" === typeof t) return (t = Xl("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case k:
                                    return (n = Gl(t.type, t.key, t.props, null, e.mode, n)).ref = xa(e, null, t), n.return = e, n;
                                case E:
                                    return (t = Kl(t, e.mode, n)).return = e, t
                            }
                            if (Ea(t) || W(t)) return (t = $l(t, e.mode, n, null)).return = e, t;
                            Sa(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, r) {
                        var o = null !== t ? t.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== o ? null : l(e, t, "" + n, r);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case k:
                                    return n.key === o ? n.type === x ? f(e, t, n.props.children, r, o) : c(e, t, n, r) : null;
                                case E:
                                    return n.key === o ? s(e, t, n, r) : null
                            }
                            if (Ea(n) || W(n)) return null !== o ? null : f(e, t, n, r, null);
                            Sa(e, n)
                        }
                        return null
                    }

                    function h(e, t, n, r, o) {
                        if ("string" === typeof r || "number" === typeof r) return l(t, e = e.get(n) || null, "" + r, o);
                        if ("object" === typeof r && null !== r) {
                            switch (r.$$typeof) {
                                case k:
                                    return e = e.get(null === r.key ? n : r.key) || null, r.type === x ? f(t, e, r.props.children, o, r.key) : c(t, e, r, o);
                                case E:
                                    return s(t, e = e.get(null === r.key ? n : r.key) || null, r, o)
                            }
                            if (Ea(r) || W(r)) return f(t, e = e.get(n) || null, r, o, null);
                            Sa(t, r)
                        }
                        return null
                    }

                    function m(o, i, u, l) {
                        for (var c = null, s = null, f = i, m = i = 0, v = null; null !== f && m < u.length; m++) {
                            f.index > m ? (v = f, f = null) : v = f.sibling;
                            var g = p(o, f, u[m], l);
                            if (null === g) {
                                null === f && (f = v);
                                break
                            }
                            e && f && null === g.alternate && t(o, f), i = a(g, i, m), null === s ? c = g : s.sibling = g, s = g, f = v
                        }
                        if (m === u.length) return n(o, f), c;
                        if (null === f) {
                            for (; m < u.length; m++) null !== (f = d(o, u[m], l)) && (i = a(f, i, m), null === s ? c = f : s.sibling = f, s = f);
                            return c
                        }
                        for (f = r(o, f); m < u.length; m++) null !== (v = h(f, o, m, u[m], l)) && (e && null !== v.alternate && f.delete(null === v.key ? m : v.key), i = a(v, i, m), null === s ? c = v : s.sibling = v, s = v);
                        return e && f.forEach((function(e) {
                            return t(o, e)
                        })), c
                    }

                    function v(o, u, l, c) {
                        var s = W(l);
                        if ("function" !== typeof s) throw Error(i(150));
                        if (null == (l = s.call(l))) throw Error(i(151));
                        for (var f = s = null, m = u, v = u = 0, g = null, y = l.next(); null !== m && !y.done; v++, y = l.next()) {
                            m.index > v ? (g = m, m = null) : g = m.sibling;
                            var b = p(o, m, y.value, c);
                            if (null === b) {
                                null === m && (m = g);
                                break
                            }
                            e && m && null === b.alternate && t(o, m), u = a(b, u, v), null === f ? s = b : f.sibling = b, f = b, m = g
                        }
                        if (y.done) return n(o, m), s;
                        if (null === m) {
                            for (; !y.done; v++, y = l.next()) null !== (y = d(o, y.value, c)) && (u = a(y, u, v), null === f ? s = y : f.sibling = y, f = y);
                            return s
                        }
                        for (m = r(o, m); !y.done; v++, y = l.next()) null !== (y = h(m, o, v, y.value, c)) && (e && null !== y.alternate && m.delete(null === y.key ? v : y.key), u = a(y, u, v), null === f ? s = y : f.sibling = y, f = y);
                        return e && m.forEach((function(e) {
                            return t(o, e)
                        })), s
                    }
                    return function(e, r, a, l) {
                        var c = "object" === typeof a && null !== a && a.type === x && null === a.key;
                        c && (a = a.props.children);
                        var s = "object" === typeof a && null !== a;
                        if (s) switch (a.$$typeof) {
                            case k:
                                e: {
                                    for (s = a.key, c = r; null !== c;) {
                                        if (c.key === s) {
                                            if (7 === c.tag) {
                                                if (a.type === x) {
                                                    n(e, c.sibling), (r = o(c, a.props.children)).return = e, e = r;
                                                    break e
                                                }
                                            } else if (c.elementType === a.type) {
                                                n(e, c.sibling), (r = o(c, a.props)).ref = xa(e, c, a), r.return = e, e = r;
                                                break e
                                            }
                                            n(e, c);
                                            break
                                        }
                                        t(e, c), c = c.sibling
                                    }
                                    a.type === x ? ((r = $l(a.props.children, e.mode, l, a.key)).return = e, e = r) : ((l = Gl(a.type, a.key, a.props, null, e.mode, l)).ref = xa(e, r, a), l.return = e, e = l)
                                }
                                return u(e);
                            case E:
                                e: {
                                    for (c = a.key; null !== r;) {
                                        if (r.key === c) {
                                            if (4 === r.tag && r.stateNode.containerInfo === a.containerInfo && r.stateNode.implementation === a.implementation) {
                                                n(e, r.sibling), (r = o(r, a.children || [])).return = e, e = r;
                                                break e
                                            }
                                            n(e, r);
                                            break
                                        }
                                        t(e, r), r = r.sibling
                                    }(r = Kl(a, e.mode, l)).return = e,
                                    e = r
                                }
                                return u(e)
                        }
                        if ("string" === typeof a || "number" === typeof a) return a = "" + a, null !== r && 6 === r.tag ? (n(e, r.sibling), (r = o(r, a)).return = e, e = r) : (n(e, r), (r = Xl(a, e.mode, l)).return = e, e = r), u(e);
                        if (Ea(a)) return m(e, r, a, l);
                        if (W(a)) return v(e, r, a, l);
                        if (s && Sa(e, a), "undefined" === typeof a && !c) switch (e.tag) {
                            case 1:
                            case 22:
                            case 0:
                            case 11:
                            case 15:
                                throw Error(i(152, G(e.type) || "Component"))
                        }
                        return n(e, r)
                    }
                }
                var Pa = Ca(!0),
                    La = Ca(!1),
                    Ta = {},
                    Fa = co(Ta),
                    Oa = co(Ta),
                    Aa = co(Ta);

                function Da(e) {
                    if (e === Ta) throw Error(i(174));
                    return e
                }

                function Na(e, t) {
                    switch (fo(Aa, t), fo(Oa, e), fo(Fa, Ta), e = t.nodeType) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : he(null, "");
                            break;
                        default:
                            t = he(t = (e = 8 === e ? t.parentNode : t).namespaceURI || null, e = e.tagName)
                    }
                    so(Fa), fo(Fa, t)
                }

                function Ma() {
                    so(Fa), so(Oa), so(Aa)
                }

                function Ia(e) {
                    Da(Aa.current);
                    var t = Da(Fa.current),
                        n = he(t, e.type);
                    t !== n && (fo(Oa, e), fo(Fa, n))
                }

                function Ra(e) {
                    Oa.current === e && (so(Fa), so(Oa))
                }
                var ja = co(0);

                function Ba(e) {
                    for (var t = e; null !== t;) {
                        if (13 === t.tag) {
                            var n = t.memoizedState;
                            if (null !== n && (null === (n = n.dehydrated) || "$?" === n.data || "$!" === n.data)) return t
                        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
                            if (0 !== (64 & t.flags)) return t
                        } else if (null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return null;
                            t = t.return
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                    return null
                }
                var za = null,
                    Ua = null,
                    Wa = !1;

                function Va(e, t) {
                    var n = Ql(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.flags = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function Qa(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function Ha(e) {
                    if (Wa) {
                        var t = Ua;
                        if (t) {
                            var n = t;
                            if (!Qa(e, t)) {
                                if (!(t = $r(n.nextSibling)) || !Qa(e, t)) return e.flags = -1025 & e.flags | 2, Wa = !1, void(za = e);
                                Va(za, n)
                            }
                            za = e, Ua = $r(t.firstChild)
                        } else e.flags = -1025 & e.flags | 2, Wa = !1, za = e
                    }
                }

                function qa(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;) e = e.return;
                    za = e
                }

                function Ga(e) {
                    if (e !== za) return !1;
                    if (!Wa) return qa(e), Wa = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !Qr(t, e.memoizedProps))
                        for (t = Ua; t;) Va(e, t), t = $r(t.nextSibling);
                    if (qa(e), 13 === e.tag) {
                        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null)) throw Error(i(317));
                        e: {
                            for (e = e.nextSibling, t = 0; e;) {
                                if (8 === e.nodeType) {
                                    var n = e.data;
                                    if ("/$" === n) {
                                        if (0 === t) {
                                            Ua = $r(e.nextSibling);
                                            break e
                                        }
                                        t--
                                    } else "$" !== n && "$!" !== n && "$?" !== n || t++
                                }
                                e = e.nextSibling
                            }
                            Ua = null
                        }
                    } else Ua = za ? $r(e.stateNode.nextSibling) : null;
                    return !0
                }

                function $a() {
                    Ua = za = null, Wa = !1
                }
                var Ya = [];

                function Xa() {
                    for (var e = 0; e < Ya.length; e++) Ya[e]._workInProgressVersionPrimary = null;
                    Ya.length = 0
                }
                var Ka = _.ReactCurrentDispatcher,
                    Za = _.ReactCurrentBatchConfig,
                    Ja = 0,
                    ei = null,
                    ti = null,
                    ni = null,
                    ri = !1,
                    oi = !1;

                function ai() {
                    throw Error(i(321))
                }

                function ii(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!sr(e[n], t[n])) return !1;
                    return !0
                }

                function ui(e, t, n, r, o, a) {
                    if (Ja = a, ei = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ka.current = null === e || null === e.memoizedState ? Di : Ni, e = n(r, o), oi) {
                        a = 0;
                        do {
                            if (oi = !1, !(25 > a)) throw Error(i(301));
                            a += 1, ni = ti = null, t.updateQueue = null, Ka.current = Mi, e = n(r, o)
                        } while (oi)
                    }
                    if (Ka.current = Ai, t = null !== ti && null !== ti.next, Ja = 0, ni = ti = ei = null, ri = !1, t) throw Error(i(300));
                    return e
                }

                function li() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        baseQueue: null,
                        queue: null,
                        next: null
                    };
                    return null === ni ? ei.memoizedState = ni = e : ni = ni.next = e, ni
                }

                function ci() {
                    if (null === ti) {
                        var e = ei.alternate;
                        e = null !== e ? e.memoizedState : null
                    } else e = ti.next;
                    var t = null === ni ? ei.memoizedState : ni.next;
                    if (null !== t) ni = t, ti = e;
                    else {
                        if (null === e) throw Error(i(310));
                        e = {
                            memoizedState: (ti = e).memoizedState,
                            baseState: ti.baseState,
                            baseQueue: ti.baseQueue,
                            queue: ti.queue,
                            next: null
                        }, null === ni ? ei.memoizedState = ni = e : ni = ni.next = e
                    }
                    return ni
                }

                function si(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function fi(e) {
                    var t = ci(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = ti,
                        o = r.baseQueue,
                        a = n.pending;
                    if (null !== a) {
                        if (null !== o) {
                            var u = o.next;
                            o.next = a.next, a.next = u
                        }
                        r.baseQueue = o = a, n.pending = null
                    }
                    if (null !== o) {
                        o = o.next, r = r.baseState;
                        var l = u = a = null,
                            c = o;
                        do {
                            var s = c.lane;
                            if ((Ja & s) === s) null !== l && (l = l.next = {
                                lane: 0,
                                action: c.action,
                                eagerReducer: c.eagerReducer,
                                eagerState: c.eagerState,
                                next: null
                            }), r = c.eagerReducer === e ? c.eagerState : e(r, c.action);
                            else {
                                var f = {
                                    lane: s,
                                    action: c.action,
                                    eagerReducer: c.eagerReducer,
                                    eagerState: c.eagerState,
                                    next: null
                                };
                                null === l ? (u = l = f, a = r) : l = l.next = f, ei.lanes |= s, Uu |= s
                            }
                            c = c.next
                        } while (null !== c && c !== o);
                        null === l ? a = r : l.next = u, sr(r, t.memoizedState) || (Ri = !0), t.memoizedState = r, t.baseState = a, t.baseQueue = l, n.lastRenderedState = r
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function di(e) {
                    var t = ci(),
                        n = t.queue;
                    if (null === n) throw Error(i(311));
                    n.lastRenderedReducer = e;
                    var r = n.dispatch,
                        o = n.pending,
                        a = t.memoizedState;
                    if (null !== o) {
                        n.pending = null;
                        var u = o = o.next;
                        do {
                            a = e(a, u.action), u = u.next
                        } while (u !== o);
                        sr(a, t.memoizedState) || (Ri = !0), t.memoizedState = a, null === t.baseQueue && (t.baseState = a), n.lastRenderedState = a
                    }
                    return [a, r]
                }

                function pi(e, t, n) {
                    var r = t._getVersion;
                    r = r(t._source);
                    var o = t._workInProgressVersionPrimary;
                    if (null !== o ? e = o === r : (e = e.mutableReadLanes, (e = (Ja & e) === e) && (t._workInProgressVersionPrimary = r, Ya.push(t))), e) return n(t._source);
                    throw Ya.push(t), Error(i(350))
                }

                function hi(e, t, n, r) {
                    var o = Du;
                    if (null === o) throw Error(i(349));
                    var a = t._getVersion,
                        u = a(t._source),
                        l = Ka.current,
                        c = l.useState((function() {
                            return pi(o, t, n)
                        })),
                        s = c[1],
                        f = c[0];
                    c = ni;
                    var d = e.memoizedState,
                        p = d.refs,
                        h = p.getSnapshot,
                        m = d.source;
                    d = d.subscribe;
                    var v = ei;
                    return e.memoizedState = {
                        refs: p,
                        source: t,
                        subscribe: r
                    }, l.useEffect((function() {
                        p.getSnapshot = n, p.setSnapshot = s;
                        var e = a(t._source);
                        if (!sr(u, e)) {
                            e = n(t._source), sr(f, e) || (s(e), e = pl(v), o.mutableReadLanes |= e & o.pendingLanes), e = o.mutableReadLanes, o.entangledLanes |= e;
                            for (var r = o.entanglements, i = e; 0 < i;) {
                                var l = 31 - Qt(i),
                                    c = 1 << l;
                                r[l] |= e, i &= ~c
                            }
                        }
                    }), [n, t, r]), l.useEffect((function() {
                        return r(t._source, (function() {
                            var e = p.getSnapshot,
                                n = p.setSnapshot;
                            try {
                                n(e(t._source));
                                var r = pl(v);
                                o.mutableReadLanes |= r & o.pendingLanes
                            } catch (a) {
                                n((function() {
                                    throw a
                                }))
                            }
                        }))
                    }), [t, r]), sr(h, n) && sr(m, t) && sr(d, r) || ((e = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: si,
                        lastRenderedState: f
                    }).dispatch = s = Oi.bind(null, ei, e), c.queue = e, c.baseQueue = null, f = pi(o, t, n), c.memoizedState = c.baseState = f), f
                }

                function mi(e, t, n) {
                    return hi(ci(), e, t, n)
                }

                function vi(e) {
                    var t = li();
                    return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                        pending: null,
                        dispatch: null,
                        lastRenderedReducer: si,
                        lastRenderedState: e
                    }).dispatch = Oi.bind(null, ei, e), [t.memoizedState, e]
                }

                function gi(e, t, n, r) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: r,
                        next: null
                    }, null === (t = ei.updateQueue) ? (t = {
                        lastEffect: null
                    }, ei.updateQueue = t, t.lastEffect = e.next = e) : null === (n = t.lastEffect) ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e), e
                }

                function yi(e) {
                    return e = {
                        current: e
                    }, li().memoizedState = e
                }

                function bi() {
                    return ci().memoizedState
                }

                function wi(e, t, n, r) {
                    var o = li();
                    ei.flags |= e, o.memoizedState = gi(1 | t, n, void 0, void 0 === r ? null : r)
                }

                function _i(e, t, n, r) {
                    var o = ci();
                    r = void 0 === r ? null : r;
                    var a = void 0;
                    if (null !== ti) {
                        var i = ti.memoizedState;
                        if (a = i.destroy, null !== r && ii(r, i.deps)) return void gi(t, n, a, r)
                    }
                    ei.flags |= e, o.memoizedState = gi(1 | t, n, a, r)
                }

                function ki(e, t) {
                    return wi(516, 4, e, t)
                }

                function Ei(e, t) {
                    return _i(516, 4, e, t)
                }

                function xi(e, t) {
                    return _i(4, 2, e, t)
                }

                function Si(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function Ci(e, t, n) {
                    return n = null !== n && void 0 !== n ? n.concat([e]) : null, _i(4, 2, Si.bind(null, t, e), n)
                }

                function Pi() {}

                function Li(e, t) {
                    var n = ci();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ii(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
                }

                function Ti(e, t) {
                    var n = ci();
                    t = void 0 === t ? null : t;
                    var r = n.memoizedState;
                    return null !== r && null !== t && ii(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
                }

                function Fi(e, t) {
                    var n = Ho();
                    Go(98 > n ? 98 : n, (function() {
                        e(!0)
                    })), Go(97 < n ? 97 : n, (function() {
                        var n = Za.transition;
                        Za.transition = 1;
                        try {
                            e(!1), t()
                        } finally {
                            Za.transition = n
                        }
                    }))
                }

                function Oi(e, t, n) {
                    var r = dl(),
                        o = pl(e),
                        a = {
                            lane: o,
                            action: n,
                            eagerReducer: null,
                            eagerState: null,
                            next: null
                        },
                        i = t.pending;
                    if (null === i ? a.next = a : (a.next = i.next, i.next = a), t.pending = a, i = e.alternate, e === ei || null !== i && i === ei) oi = ri = !0;
                    else {
                        if (0 === e.lanes && (null === i || 0 === i.lanes) && null !== (i = t.lastRenderedReducer)) try {
                            var u = t.lastRenderedState,
                                l = i(u, n);
                            if (a.eagerReducer = i, a.eagerState = l, sr(l, u)) return
                        } catch (c) {}
                        hl(e, o, r)
                    }
                }
                var Ai = {
                        readContext: ua,
                        useCallback: ai,
                        useContext: ai,
                        useEffect: ai,
                        useImperativeHandle: ai,
                        useLayoutEffect: ai,
                        useMemo: ai,
                        useReducer: ai,
                        useRef: ai,
                        useState: ai,
                        useDebugValue: ai,
                        useDeferredValue: ai,
                        useTransition: ai,
                        useMutableSource: ai,
                        useOpaqueIdentifier: ai,
                        unstable_isNewReconciler: !1
                    },
                    Di = {
                        readContext: ua,
                        useCallback: function(e, t) {
                            return li().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: ua,
                        useEffect: ki,
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, wi(4, 2, Si.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return wi(4, 2, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = li();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var r = li();
                            return t = void 0 !== n ? n(t) : t, r.memoizedState = r.baseState = t, e = (e = r.queue = {
                                pending: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = Oi.bind(null, ei, e), [r.memoizedState, e]
                        },
                        useRef: yi,
                        useState: vi,
                        useDebugValue: Pi,
                        useDeferredValue: function(e) {
                            var t = vi(e),
                                n = t[0],
                                r = t[1];
                            return ki((function() {
                                var t = Za.transition;
                                Za.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Za.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = vi(!1),
                                t = e[0];
                            return yi(e = Fi.bind(null, e[1])), [e, t]
                        },
                        useMutableSource: function(e, t, n) {
                            var r = li();
                            return r.memoizedState = {
                                refs: {
                                    getSnapshot: t,
                                    setSnapshot: null
                                },
                                source: e,
                                subscribe: n
                            }, hi(r, e, t, n)
                        },
                        useOpaqueIdentifier: function() {
                            if (Wa) {
                                var e = !1,
                                    t = function(e) {
                                        return {
                                            $$typeof: M,
                                            toString: e,
                                            valueOf: e
                                        }
                                    }((function() {
                                        throw e || (e = !0, n("r:" + (Xr++).toString(36))), Error(i(355))
                                    })),
                                    n = vi(t)[1];
                                return 0 === (2 & ei.mode) && (ei.flags |= 516, gi(5, (function() {
                                    n("r:" + (Xr++).toString(36))
                                }), void 0, null)), t
                            }
                            return vi(t = "r:" + (Xr++).toString(36)), t
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ni = {
                        readContext: ua,
                        useCallback: Li,
                        useContext: ua,
                        useEffect: Ei,
                        useImperativeHandle: Ci,
                        useLayoutEffect: xi,
                        useMemo: Ti,
                        useReducer: fi,
                        useRef: bi,
                        useState: function() {
                            return fi(si)
                        },
                        useDebugValue: Pi,
                        useDeferredValue: function(e) {
                            var t = fi(si),
                                n = t[0],
                                r = t[1];
                            return Ei((function() {
                                var t = Za.transition;
                                Za.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Za.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = fi(si)[0];
                            return [bi().current, e]
                        },
                        useMutableSource: mi,
                        useOpaqueIdentifier: function() {
                            return fi(si)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Mi = {
                        readContext: ua,
                        useCallback: Li,
                        useContext: ua,
                        useEffect: Ei,
                        useImperativeHandle: Ci,
                        useLayoutEffect: xi,
                        useMemo: Ti,
                        useReducer: di,
                        useRef: bi,
                        useState: function() {
                            return di(si)
                        },
                        useDebugValue: Pi,
                        useDeferredValue: function(e) {
                            var t = di(si),
                                n = t[0],
                                r = t[1];
                            return Ei((function() {
                                var t = Za.transition;
                                Za.transition = 1;
                                try {
                                    r(e)
                                } finally {
                                    Za.transition = t
                                }
                            }), [e]), n
                        },
                        useTransition: function() {
                            var e = di(si)[0];
                            return [bi().current, e]
                        },
                        useMutableSource: mi,
                        useOpaqueIdentifier: function() {
                            return di(si)[0]
                        },
                        unstable_isNewReconciler: !1
                    },
                    Ii = _.ReactCurrentOwner,
                    Ri = !1;

                function ji(e, t, n, r) {
                    t.child = null === e ? La(t, null, n, r) : Pa(t, e.child, n, r)
                }

                function Bi(e, t, n, r, o) {
                    n = n.render;
                    var a = t.ref;
                    return ia(t, o), r = ui(e, t, n, r, a, o), null === e || Ri ? (t.flags |= 1, ji(e, t, r, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, au(e, t, o))
                }

                function zi(e, t, n, r, o, a) {
                    if (null === e) {
                        var i = n.type;
                        return "function" !== typeof i || Hl(i) || void 0 !== i.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Gl(n.type, null, r, t, t.mode, a)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = i, Ui(e, t, i, r, o, a))
                    }
                    return i = e.child, 0 === (o & a) && (o = i.memoizedProps, (n = null !== (n = n.compare) ? n : dr)(o, r) && e.ref === t.ref) ? au(e, t, a) : (t.flags |= 1, (e = ql(i, r)).ref = t.ref, e.return = t, t.child = e)
                }

                function Ui(e, t, n, r, o, a) {
                    if (null !== e && dr(e.memoizedProps, r) && e.ref === t.ref) {
                        if (Ri = !1, 0 === (a & o)) return t.lanes = e.lanes, au(e, t, a);
                        0 !== (16384 & e.flags) && (Ri = !0)
                    }
                    return Qi(e, t, n, r, a)
                }

                function Wi(e, t, n) {
                    var r = t.pendingProps,
                        o = r.children,
                        a = null !== e ? e.memoizedState : null;
                    if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
                        if (0 === (4 & t.mode)) t.memoizedState = {
                            baseLanes: 0
                        }, kl(t, n);
                        else {
                            if (0 === (1073741824 & n)) return e = null !== a ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                                baseLanes: e
                            }, kl(t, e), null;
                            t.memoizedState = {
                                baseLanes: 0
                            }, kl(t, null !== a ? a.baseLanes : n)
                        }
                    else null !== a ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, kl(t, r);
                    return ji(e, t, o, n), t.child
                }

                function Vi(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.flags |= 128)
                }

                function Qi(e, t, n, r, o) {
                    var a = yo(n) ? vo : ho.current;
                    return a = go(t, a), ia(t, o), n = ui(e, t, n, r, a, o), null === e || Ri ? (t.flags |= 1, ji(e, t, n, o), t.child) : (t.updateQueue = e.updateQueue, t.flags &= -517, e.lanes &= ~o, au(e, t, o))
                }

                function Hi(e, t, n, r, o) {
                    if (yo(n)) {
                        var a = !0;
                        ko(t)
                    } else a = !1;
                    if (ia(t, o), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), wa(t, n, r), ka(t, n, r, o), r = !0;
                    else if (null === e) {
                        var i = t.stateNode,
                            u = t.memoizedProps;
                        i.props = u;
                        var l = i.context,
                            c = n.contextType;
                        "object" === typeof c && null !== c ? c = ua(c) : c = go(t, c = yo(n) ? vo : ho.current);
                        var s = n.getDerivedStateFromProps,
                            f = "function" === typeof s || "function" === typeof i.getSnapshotBeforeUpdate;
                        f || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== r || l !== c) && _a(t, i, r, c), la = !1;
                        var d = t.memoizedState;
                        i.state = d, ha(t, r, i, o), l = t.memoizedState, u !== r || d !== l || mo.current || la ? ("function" === typeof s && (ga(t, n, s, r), l = t.memoizedState), (u = la || ba(t, n, u, r, d, l, c)) ? (f || "function" !== typeof i.UNSAFE_componentWillMount && "function" !== typeof i.componentWillMount || ("function" === typeof i.componentWillMount && i.componentWillMount(), "function" === typeof i.UNSAFE_componentWillMount && i.UNSAFE_componentWillMount()), "function" === typeof i.componentDidMount && (t.flags |= 4)) : ("function" === typeof i.componentDidMount && (t.flags |= 4), t.memoizedProps = r, t.memoizedState = l), i.props = r, i.state = l, i.context = c, r = u) : ("function" === typeof i.componentDidMount && (t.flags |= 4), r = !1)
                    } else {
                        i = t.stateNode, sa(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Zo(t.type, u), i.props = c, f = t.pendingProps, d = i.context, "object" === typeof(l = n.contextType) && null !== l ? l = ua(l) : l = go(t, l = yo(n) ? vo : ho.current);
                        var p = n.getDerivedStateFromProps;
                        (s = "function" === typeof p || "function" === typeof i.getSnapshotBeforeUpdate) || "function" !== typeof i.UNSAFE_componentWillReceiveProps && "function" !== typeof i.componentWillReceiveProps || (u !== f || d !== l) && _a(t, i, r, l), la = !1, d = t.memoizedState, i.state = d, ha(t, r, i, o);
                        var h = t.memoizedState;
                        u !== f || d !== h || mo.current || la ? ("function" === typeof p && (ga(t, n, p, r), h = t.memoizedState), (c = la || ba(t, n, c, r, d, h, l)) ? (s || "function" !== typeof i.UNSAFE_componentWillUpdate && "function" !== typeof i.componentWillUpdate || ("function" === typeof i.componentWillUpdate && i.componentWillUpdate(r, h, l), "function" === typeof i.UNSAFE_componentWillUpdate && i.UNSAFE_componentWillUpdate(r, h, l)), "function" === typeof i.componentDidUpdate && (t.flags |= 4), "function" === typeof i.getSnapshotBeforeUpdate && (t.flags |= 256)) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), t.memoizedProps = r, t.memoizedState = h), i.props = r, i.state = h, i.context = l, r = c) : ("function" !== typeof i.componentDidUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 4), "function" !== typeof i.getSnapshotBeforeUpdate || u === e.memoizedProps && d === e.memoizedState || (t.flags |= 256), r = !1)
                    }
                    return qi(e, t, n, r, a, o)
                }

                function qi(e, t, n, r, o, a) {
                    Vi(e, t);
                    var i = 0 !== (64 & t.flags);
                    if (!r && !i) return o && Eo(t, n, !1), au(e, t, a);
                    r = t.stateNode, Ii.current = t;
                    var u = i && "function" !== typeof n.getDerivedStateFromError ? null : r.render();
                    return t.flags |= 1, null !== e && i ? (t.child = Pa(t, e.child, null, a), t.child = Pa(t, null, u, a)) : ji(e, t, u, a), t.memoizedState = r.state, o && Eo(t, n, !0), t.child
                }

                function Gi(e) {
                    var t = e.stateNode;
                    t.pendingContext ? wo(0, t.pendingContext, t.pendingContext !== t.context) : t.context && wo(0, t.context, !1), Na(e, t.containerInfo)
                }
                var $i, Yi, Xi, Ki = {
                    dehydrated: null,
                    retryLane: 0
                };

                function Zi(e, t, n) {
                    var r, o = t.pendingProps,
                        a = ja.current,
                        i = !1;
                    return (r = 0 !== (64 & t.flags)) || (r = (null === e || null !== e.memoizedState) && 0 !== (2 & a)), r ? (i = !0, t.flags &= -65) : null !== e && null === e.memoizedState || void 0 === o.fallback || !0 === o.unstable_avoidThisFallback || (a |= 1), fo(ja, 1 & a), null === e ? (void 0 !== o.fallback && Ha(t), e = o.children, a = o.fallback, i ? (e = Ji(t, e, a, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Ki, e) : "number" === typeof o.unstable_expectedLoadTime ? (e = Ji(t, e, a, n), t.child.memoizedState = {
                        baseLanes: n
                    }, t.memoizedState = Ki, t.lanes = 33554432, e) : ((n = Yl({
                        mode: "visible",
                        children: e
                    }, t.mode, n, null)).return = t, t.child = n)) : (e.memoizedState, i ? (o = tu(e, t, o.children, o.fallback, n), i = t.child, a = e.child.memoizedState, i.memoizedState = null === a ? {
                        baseLanes: n
                    } : {
                        baseLanes: a.baseLanes | n
                    }, i.childLanes = e.childLanes & ~n, t.memoizedState = Ki, o) : (n = eu(e, t, o.children, n), t.memoizedState = null, n))
                }

                function Ji(e, t, n, r) {
                    var o = e.mode,
                        a = e.child;
                    return t = {
                        mode: "hidden",
                        children: t
                    }, 0 === (2 & o) && null !== a ? (a.childLanes = 0, a.pendingProps = t) : a = Yl(t, o, 0, null), n = $l(n, o, r, null), a.return = e, n.return = e, a.sibling = n, e.child = a, n
                }

                function eu(e, t, n, r) {
                    var o = e.child;
                    return e = o.sibling, n = ql(o, {
                        mode: "visible",
                        children: n
                    }), 0 === (2 & t.mode) && (n.lanes = r), n.return = t, n.sibling = null, null !== e && (e.nextEffect = null, e.flags = 8, t.firstEffect = t.lastEffect = e), t.child = n
                }

                function tu(e, t, n, r, o) {
                    var a = t.mode,
                        i = e.child;
                    e = i.sibling;
                    var u = {
                        mode: "hidden",
                        children: n
                    };
                    return 0 === (2 & a) && t.child !== i ? ((n = t.child).childLanes = 0, n.pendingProps = u, null !== (i = n.lastEffect) ? (t.firstEffect = n.firstEffect, t.lastEffect = i, i.nextEffect = null) : t.firstEffect = t.lastEffect = null) : n = ql(i, u), null !== e ? r = ql(e, r) : (r = $l(r, a, o, null)).flags |= 2, r.return = t, n.return = t, n.sibling = r, t.child = n, r
                }

                function nu(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    null !== n && (n.lanes |= t), aa(e.return, t)
                }

                function ru(e, t, n, r, o, a) {
                    var i = e.memoizedState;
                    null === i ? e.memoizedState = {
                        isBackwards: t,
                        rendering: null,
                        renderingStartTime: 0,
                        last: r,
                        tail: n,
                        tailMode: o,
                        lastEffect: a
                    } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = o, i.lastEffect = a)
                }

                function ou(e, t, n) {
                    var r = t.pendingProps,
                        o = r.revealOrder,
                        a = r.tail;
                    if (ji(e, t, r.children, n), 0 !== (2 & (r = ja.current))) r = 1 & r | 2, t.flags |= 64;
                    else {
                        if (null !== e && 0 !== (64 & e.flags)) e: for (e = t.child; null !== e;) {
                            if (13 === e.tag) null !== e.memoizedState && nu(e, n);
                            else if (19 === e.tag) nu(e, n);
                            else if (null !== e.child) {
                                e.child.return = e, e = e.child;
                                continue
                            }
                            if (e === t) break e;
                            for (; null === e.sibling;) {
                                if (null === e.return || e.return === t) break e;
                                e = e.return
                            }
                            e.sibling.return = e.return, e = e.sibling
                        }
                        r &= 1
                    }
                    if (fo(ja, r), 0 === (2 & t.mode)) t.memoizedState = null;
                    else switch (o) {
                        case "forwards":
                            for (n = t.child, o = null; null !== n;) null !== (e = n.alternate) && null === Ba(e) && (o = n), n = n.sibling;
                            null === (n = o) ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), ru(t, !1, o, n, a, t.lastEffect);
                            break;
                        case "backwards":
                            for (n = null, o = t.child, t.child = null; null !== o;) {
                                if (null !== (e = o.alternate) && null === Ba(e)) {
                                    t.child = o;
                                    break
                                }
                                e = o.sibling, o.sibling = n, n = o, o = e
                            }
                            ru(t, !0, n, null, a, t.lastEffect);
                            break;
                        case "together":
                            ru(t, !1, null, null, void 0, t.lastEffect);
                            break;
                        default:
                            t.memoizedState = null
                    }
                    return t.child
                }

                function au(e, t, n) {
                    if (null !== e && (t.dependencies = e.dependencies), Uu |= t.lanes, 0 !== (n & t.childLanes)) {
                        if (null !== e && t.child !== e.child) throw Error(i(153));
                        if (null !== t.child) {
                            for (n = ql(e = t.child, e.pendingProps), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = ql(e, e.pendingProps)).return = t;
                            n.sibling = null
                        }
                        return t.child
                    }
                    return null
                }

                function iu(e, t) {
                    if (!Wa) switch (e.tailMode) {
                        case "hidden":
                            t = e.tail;
                            for (var n = null; null !== t;) null !== t.alternate && (n = t), t = t.sibling;
                            null === n ? e.tail = null : n.sibling = null;
                            break;
                        case "collapsed":
                            n = e.tail;
                            for (var r = null; null !== n;) null !== n.alternate && (r = n), n = n.sibling;
                            null === r ? t || null === e.tail ? e.tail = null : e.tail.sibling = null : r.sibling = null
                    }
                }

                function uu(e, t, n) {
                    var r = t.pendingProps;
                    switch (t.tag) {
                        case 2:
                        case 16:
                        case 15:
                        case 0:
                        case 11:
                        case 7:
                        case 8:
                        case 12:
                        case 9:
                        case 14:
                            return null;
                        case 1:
                        case 17:
                            return yo(t.type) && bo(), null;
                        case 3:
                            return Ma(), so(mo), so(ho), Xa(), (r = t.stateNode).pendingContext && (r.context = r.pendingContext, r.pendingContext = null), null !== e && null !== e.child || (Ga(t) ? t.flags |= 4 : r.hydrate || (t.flags |= 256)), null;
                        case 5:
                            Ra(t);
                            var a = Da(Aa.current);
                            if (n = t.type, null !== e && null != t.stateNode) Yi(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
                            else {
                                if (!r) {
                                    if (null === t.stateNode) throw Error(i(166));
                                    return null
                                }
                                if (e = Da(Fa.current), Ga(t)) {
                                    r = t.stateNode, n = t.type;
                                    var u = t.memoizedProps;
                                    switch (r[Zr] = t, r[Jr] = u, n) {
                                        case "dialog":
                                            Fr("cancel", r), Fr("close", r);
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Fr("load", r);
                                            break;
                                        case "video":
                                        case "audio":
                                            for (e = 0; e < Cr.length; e++) Fr(Cr[e], r);
                                            break;
                                        case "source":
                                            Fr("error", r);
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Fr("error", r), Fr("load", r);
                                            break;
                                        case "details":
                                            Fr("toggle", r);
                                            break;
                                        case "input":
                                            ee(r, u), Fr("invalid", r);
                                            break;
                                        case "select":
                                            r._wrapperState = {
                                                wasMultiple: !!u.multiple
                                            }, Fr("invalid", r);
                                            break;
                                        case "textarea":
                                            le(r, u), Fr("invalid", r)
                                    }
                                    for (var c in xe(n, u), e = null, u) u.hasOwnProperty(c) && (a = u[c], "children" === c ? "string" === typeof a ? r.textContent !== a && (e = ["children", a]) : "number" === typeof a && r.textContent !== "" + a && (e = ["children", "" + a]) : l.hasOwnProperty(c) && null != a && "onScroll" === c && Fr("scroll", r));
                                    switch (n) {
                                        case "input":
                                            X(r), re(r, u, !0);
                                            break;
                                        case "textarea":
                                            X(r), se(r);
                                            break;
                                        case "select":
                                        case "option":
                                            break;
                                        default:
                                            "function" === typeof u.onClick && (r.onclick = zr)
                                    }
                                    r = e, t.updateQueue = r, null !== r && (t.flags |= 4)
                                } else {
                                    switch (c = 9 === a.nodeType ? a : a.ownerDocument, e === fe && (e = pe(n)), e === fe ? "script" === n ? ((e = c.createElement("div")).innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : "string" === typeof r.is ? e = c.createElement(n, {
                                            is: r.is
                                        }) : (e = c.createElement(n), "select" === n && (c = e, r.multiple ? c.multiple = !0 : r.size && (c.size = r.size))) : e = c.createElementNS(e, n), e[Zr] = t, e[Jr] = r, $i(e, t), t.stateNode = e, c = Se(n, r), n) {
                                        case "dialog":
                                            Fr("cancel", e), Fr("close", e), a = r;
                                            break;
                                        case "iframe":
                                        case "object":
                                        case "embed":
                                            Fr("load", e), a = r;
                                            break;
                                        case "video":
                                        case "audio":
                                            for (a = 0; a < Cr.length; a++) Fr(Cr[a], e);
                                            a = r;
                                            break;
                                        case "source":
                                            Fr("error", e), a = r;
                                            break;
                                        case "img":
                                        case "image":
                                        case "link":
                                            Fr("error", e), Fr("load", e), a = r;
                                            break;
                                        case "details":
                                            Fr("toggle", e), a = r;
                                            break;
                                        case "input":
                                            ee(e, r), a = J(e, r), Fr("invalid", e);
                                            break;
                                        case "option":
                                            a = ae(e, r);
                                            break;
                                        case "select":
                                            e._wrapperState = {
                                                wasMultiple: !!r.multiple
                                            }, a = o({}, r, {
                                                value: void 0
                                            }), Fr("invalid", e);
                                            break;
                                        case "textarea":
                                            le(e, r), a = ue(e, r), Fr("invalid", e);
                                            break;
                                        default:
                                            a = r
                                    }
                                    xe(n, a);
                                    var s = a;
                                    for (u in s)
                                        if (s.hasOwnProperty(u)) {
                                            var f = s[u];
                                            "style" === u ? ke(e, f) : "dangerouslySetInnerHTML" === u ? null != (f = f ? f.__html : void 0) && ge(e, f) : "children" === u ? "string" === typeof f ? ("textarea" !== n || "" !== f) && ye(e, f) : "number" === typeof f && ye(e, "" + f) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (l.hasOwnProperty(u) ? null != f && "onScroll" === u && Fr("scroll", e) : null != f && w(e, u, f, c))
                                        } switch (n) {
                                        case "input":
                                            X(e), re(e, r, !1);
                                            break;
                                        case "textarea":
                                            X(e), se(e);
                                            break;
                                        case "option":
                                            null != r.value && e.setAttribute("value", "" + $(r.value));
                                            break;
                                        case "select":
                                            e.multiple = !!r.multiple, null != (u = r.value) ? ie(e, !!r.multiple, u, !1) : null != r.defaultValue && ie(e, !!r.multiple, r.defaultValue, !0);
                                            break;
                                        default:
                                            "function" === typeof a.onClick && (e.onclick = zr)
                                    }
                                    Vr(n, r) && (t.flags |= 4)
                                }
                                null !== t.ref && (t.flags |= 128)
                            }
                            return null;
                        case 6:
                            if (e && null != t.stateNode) Xi(0, t, e.memoizedProps, r);
                            else {
                                if ("string" !== typeof r && null === t.stateNode) throw Error(i(166));
                                n = Da(Aa.current), Da(Fa.current), Ga(t) ? (r = t.stateNode, n = t.memoizedProps, r[Zr] = t, r.nodeValue !== n && (t.flags |= 4)) : ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[Zr] = t, t.stateNode = r)
                            }
                            return null;
                        case 13:
                            return so(ja), r = t.memoizedState, 0 !== (64 & t.flags) ? (t.lanes = n, t) : (r = null !== r, n = !1, null === e ? void 0 !== t.memoizedProps.fallback && Ga(t) : n = null !== e.memoizedState, r && !n && 0 !== (2 & t.mode) && (null === e && !0 !== t.memoizedProps.unstable_avoidThisFallback || 0 !== (1 & ja.current) ? 0 === ju && (ju = 3) : (0 !== ju && 3 !== ju || (ju = 4), null === Du || 0 === (134217727 & Uu) && 0 === (134217727 & Wu) || yl(Du, Mu))), (r || n) && (t.flags |= 4), null);
                        case 4:
                            return Ma(), null === e && Ar(t.stateNode.containerInfo), null;
                        case 10:
                            return oa(t), null;
                        case 19:
                            if (so(ja), null === (r = t.memoizedState)) return null;
                            if (u = 0 !== (64 & t.flags), null === (c = r.rendering))
                                if (u) iu(r, !1);
                                else {
                                    if (0 !== ju || null !== e && 0 !== (64 & e.flags))
                                        for (e = t.child; null !== e;) {
                                            if (null !== (c = Ba(e))) {
                                                for (t.flags |= 64, iu(r, !1), null !== (u = c.updateQueue) && (t.updateQueue = u, t.flags |= 4), null === r.lastEffect && (t.firstEffect = null), t.lastEffect = r.lastEffect, r = n, n = t.child; null !== n;) e = r, (u = n).flags &= 2, u.nextEffect = null, u.firstEffect = null, u.lastEffect = null, null === (c = u.alternate) ? (u.childLanes = 0, u.lanes = e, u.child = null, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = c.childLanes, u.lanes = c.lanes, u.child = c.child, u.memoizedProps = c.memoizedProps, u.memoizedState = c.memoizedState, u.updateQueue = c.updateQueue, u.type = c.type, e = c.dependencies, u.dependencies = null === e ? null : {
                                                    lanes: e.lanes,
                                                    firstContext: e.firstContext
                                                }), n = n.sibling;
                                                return fo(ja, 1 & ja.current | 2), t.child
                                            }
                                            e = e.sibling
                                        }
                                    null !== r.tail && Qo() > qu && (t.flags |= 64, u = !0, iu(r, !1), t.lanes = 33554432)
                                }
                            else {
                                if (!u)
                                    if (null !== (e = Ba(c))) {
                                        if (t.flags |= 64, u = !0, null !== (n = e.updateQueue) && (t.updateQueue = n, t.flags |= 4), iu(r, !0), null === r.tail && "hidden" === r.tailMode && !c.alternate && !Wa) return null !== (t = t.lastEffect = r.lastEffect) && (t.nextEffect = null), null
                                    } else 2 * Qo() - r.renderingStartTime > qu && 1073741824 !== n && (t.flags |= 64, u = !0, iu(r, !1), t.lanes = 33554432);
                                r.isBackwards ? (c.sibling = t.child, t.child = c) : (null !== (n = r.last) ? n.sibling = c : t.child = c, r.last = c)
                            }
                            return null !== r.tail ? (n = r.tail, r.rendering = n, r.tail = n.sibling, r.lastEffect = t.lastEffect, r.renderingStartTime = Qo(), n.sibling = null, t = ja.current, fo(ja, u ? 1 & t | 2 : 1 & t), n) : null;
                        case 23:
                        case 24:
                            return El(), null !== e && null !== e.memoizedState !== (null !== t.memoizedState) && "unstable-defer-without-hiding" !== r.mode && (t.flags |= 4), null
                    }
                    throw Error(i(156, t.tag))
                }

                function lu(e) {
                    switch (e.tag) {
                        case 1:
                            yo(e.type) && bo();
                            var t = e.flags;
                            return 4096 & t ? (e.flags = -4097 & t | 64, e) : null;
                        case 3:
                            if (Ma(), so(mo), so(ho), Xa(), 0 !== (64 & (t = e.flags))) throw Error(i(285));
                            return e.flags = -4097 & t | 64, e;
                        case 5:
                            return Ra(e), null;
                        case 13:
                            return so(ja), 4096 & (t = e.flags) ? (e.flags = -4097 & t | 64, e) : null;
                        case 19:
                            return so(ja), null;
                        case 4:
                            return Ma(), null;
                        case 10:
                            return oa(e), null;
                        case 23:
                        case 24:
                            return El(), null;
                        default:
                            return null
                    }
                }

                function cu(e, t) {
                    try {
                        var n = "",
                            r = t;
                        do {
                            n += q(r), r = r.return
                        } while (r);
                        var o = n
                    } catch (a) {
                        o = "\nError generating stack: " + a.message + "\n" + a.stack
                    }
                    return {
                        value: e,
                        source: t,
                        stack: o
                    }
                }

                function su(e, t) {
                    try {
                        console.error(t.value)
                    } catch (n) {
                        setTimeout((function() {
                            throw n
                        }))
                    }
                }
                $i = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, Yi = function(e, t, n, r) {
                    var a = e.memoizedProps;
                    if (a !== r) {
                        e = t.stateNode, Da(Fa.current);
                        var i, u = null;
                        switch (n) {
                            case "input":
                                a = J(e, a), r = J(e, r), u = [];
                                break;
                            case "option":
                                a = ae(e, a), r = ae(e, r), u = [];
                                break;
                            case "select":
                                a = o({}, a, {
                                    value: void 0
                                }), r = o({}, r, {
                                    value: void 0
                                }), u = [];
                                break;
                            case "textarea":
                                a = ue(e, a), r = ue(e, r), u = [];
                                break;
                            default:
                                "function" !== typeof a.onClick && "function" === typeof r.onClick && (e.onclick = zr)
                        }
                        for (f in xe(n, r), n = null, a)
                            if (!r.hasOwnProperty(f) && a.hasOwnProperty(f) && null != a[f])
                                if ("style" === f) {
                                    var c = a[f];
                                    for (i in c) c.hasOwnProperty(i) && (n || (n = {}), n[i] = "")
                                } else "dangerouslySetInnerHTML" !== f && "children" !== f && "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && "autoFocus" !== f && (l.hasOwnProperty(f) ? u || (u = []) : (u = u || []).push(f, null));
                        for (f in r) {
                            var s = r[f];
                            if (c = null != a ? a[f] : void 0, r.hasOwnProperty(f) && s !== c && (null != s || null != c))
                                if ("style" === f)
                                    if (c) {
                                        for (i in c) !c.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
                                        for (i in s) s.hasOwnProperty(i) && c[i] !== s[i] && (n || (n = {}), n[i] = s[i])
                                    } else n || (u || (u = []), u.push(f, n)), n = s;
                            else "dangerouslySetInnerHTML" === f ? (s = s ? s.__html : void 0, c = c ? c.__html : void 0, null != s && c !== s && (u = u || []).push(f, s)) : "children" === f ? "string" !== typeof s && "number" !== typeof s || (u = u || []).push(f, "" + s) : "suppressContentEditableWarning" !== f && "suppressHydrationWarning" !== f && (l.hasOwnProperty(f) ? (null != s && "onScroll" === f && Fr("scroll", e), u || c === s || (u = [])) : "object" === typeof s && null !== s && s.$$typeof === M ? s.toString() : (u = u || []).push(f, s))
                        }
                        n && (u = u || []).push("style", n);
                        var f = u;
                        (t.updateQueue = f) && (t.flags |= 4)
                    }
                }, Xi = function(e, t, n, r) {
                    n !== r && (t.flags |= 4)
                };
                var fu = "function" === typeof WeakMap ? WeakMap : Map;

                function du(e, t, n) {
                    (n = fa(-1, n)).tag = 3, n.payload = {
                        element: null
                    };
                    var r = t.value;
                    return n.callback = function() {
                        Xu || (Xu = !0, Ku = r), su(0, t)
                    }, n
                }

                function pu(e, t, n) {
                    (n = fa(-1, n)).tag = 3;
                    var r = e.type.getDerivedStateFromError;
                    if ("function" === typeof r) {
                        var o = t.value;
                        n.payload = function() {
                            return su(0, t), r(o)
                        }
                    }
                    var a = e.stateNode;
                    return null !== a && "function" === typeof a.componentDidCatch && (n.callback = function() {
                        "function" !== typeof r && (null === Zu ? Zu = new Set([this]) : Zu.add(this), su(0, t));
                        var e = t.stack;
                        this.componentDidCatch(t.value, {
                            componentStack: null !== e ? e : ""
                        })
                    }), n
                }
                var hu = "function" === typeof WeakSet ? WeakSet : Set;

                function mu(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (n) {
                            zl(e, n)
                        } else t.current = null
                }

                function vu(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            return;
                        case 1:
                            if (256 & t.flags && null !== e) {
                                var n = e.memoizedProps,
                                    r = e.memoizedState;
                                t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : Zo(t.type, n), r), e.__reactInternalSnapshotBeforeUpdate = t
                            }
                            return;
                        case 3:
                            return void(256 & t.flags && Gr(t.stateNode.containerInfo))
                    }
                    throw Error(i(163))
                }

                function gu(e, t, n) {
                    switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                        case 22:
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    if (3 === (3 & e.tag)) {
                                        var r = e.create;
                                        e.destroy = r()
                                    }
                                    e = e.next
                                } while (e !== t)
                            }
                            if (null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)) {
                                e = t = t.next;
                                do {
                                    var o = e;
                                    r = o.next, 0 !== (4 & (o = o.tag)) && 0 !== (1 & o) && (Rl(n, e), Il(n, e)), e = r
                                } while (e !== t)
                            }
                            return;
                        case 1:
                            return e = n.stateNode, 4 & n.flags && (null === t ? e.componentDidMount() : (r = n.elementType === n.type ? t.memoizedProps : Zo(n.type, t.memoizedProps), e.componentDidUpdate(r, t.memoizedState, e.__reactInternalSnapshotBeforeUpdate))), void(null !== (t = n.updateQueue) && ma(n, t, e));
                        case 3:
                            if (null !== (t = n.updateQueue)) {
                                if (e = null, null !== n.child) switch (n.child.tag) {
                                    case 5:
                                    case 1:
                                        e = n.child.stateNode
                                }
                                ma(n, t, e)
                            }
                            return;
                        case 5:
                            return e = n.stateNode, void(null === t && 4 & n.flags && Vr(n.type, n.memoizedProps) && e.focus());
                        case 6:
                        case 4:
                        case 12:
                        case 19:
                        case 17:
                        case 20:
                        case 21:
                        case 23:
                        case 24:
                            return;
                        case 13:
                            return void(null === n.memoizedState && (n = n.alternate, null !== n && (n = n.memoizedState, null !== n && (n = n.dehydrated, null !== n && kt(n)))))
                    }
                    throw Error(i(163))
                }

                function yu(e, t) {
                    for (var n = e;;) {
                        if (5 === n.tag) {
                            var r = n.stateNode;
                            if (t) "function" === typeof(r = r.style).setProperty ? r.setProperty("display", "none", "important") : r.display = "none";
                            else {
                                r = n.stateNode;
                                var o = n.memoizedProps.style;
                                o = void 0 !== o && null !== o && o.hasOwnProperty("display") ? o.display : null, r.style.display = _e("display", o)
                            }
                        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                        else if ((23 !== n.tag && 24 !== n.tag || null === n.memoizedState || n === e) && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === e) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === e) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }

                function bu(e, t) {
                    if (So && "function" === typeof So.onCommitFiberUnmount) try {
                        So.onCommitFiberUnmount(xo, t)
                    } catch (a) {}
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                                var n = e = e.next;
                                do {
                                    var r = n,
                                        o = r.destroy;
                                    if (r = r.tag, void 0 !== o)
                                        if (0 !== (4 & r)) Rl(t, n);
                                        else {
                                            r = t;
                                            try {
                                                o()
                                            } catch (a) {
                                                zl(r, a)
                                            }
                                        } n = n.next
                                } while (n !== e)
                            }
                            break;
                        case 1:
                            if (mu(t), "function" === typeof(e = t.stateNode).componentWillUnmount) try {
                                e.props = t.memoizedProps, e.state = t.memoizedState, e.componentWillUnmount()
                            } catch (a) {
                                zl(t, a)
                            }
                            break;
                        case 5:
                            mu(t);
                            break;
                        case 4:
                            Su(e, t)
                    }
                }

                function wu(e) {
                    e.alternate = null, e.child = null, e.dependencies = null, e.firstEffect = null, e.lastEffect = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.return = null, e.updateQueue = null
                }

                function _u(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function ku(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (_u(t)) break e;
                            t = t.return
                        }
                        throw Error(i(160))
                    }
                    var n = t;
                    switch (t = n.stateNode, n.tag) {
                        case 5:
                            var r = !1;
                            break;
                        case 3:
                        case 4:
                            t = t.containerInfo, r = !0;
                            break;
                        default:
                            throw Error(i(161))
                    }
                    16 & n.flags && (ye(t, ""), n.flags &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || _u(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.flags) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.flags)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    r ? Eu(e, n, t) : xu(e, n, t)
                }

                function Eu(e, t, n) {
                    var r = e.tag,
                        o = 5 === r || 6 === r;
                    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? 8 === n.nodeType ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (8 === n.nodeType ? (t = n.parentNode).insertBefore(e, n) : (t = n).appendChild(e), null !== (n = n._reactRootContainer) && void 0 !== n || null !== t.onclick || (t.onclick = zr));
                    else if (4 !== r && null !== (e = e.child))
                        for (Eu(e, t, n), e = e.sibling; null !== e;) Eu(e, t, n), e = e.sibling
                }

                function xu(e, t, n) {
                    var r = e.tag,
                        o = 5 === r || 6 === r;
                    if (o) e = o ? e.stateNode : e.stateNode.instance, t ? n.insertBefore(e, t) : n.appendChild(e);
                    else if (4 !== r && null !== (e = e.child))
                        for (xu(e, t, n), e = e.sibling; null !== e;) xu(e, t, n), e = e.sibling
                }

                function Su(e, t) {
                    for (var n, r, o = t, a = !1;;) {
                        if (!a) {
                            a = o.return;
                            e: for (;;) {
                                if (null === a) throw Error(i(160));
                                switch (n = a.stateNode, a.tag) {
                                    case 5:
                                        r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        n = n.containerInfo, r = !0;
                                        break e
                                }
                                a = a.return
                            }
                            a = !0
                        }
                        if (5 === o.tag || 6 === o.tag) {
                            e: for (var u = e, l = o, c = l;;)
                                if (bu(u, c), null !== c.child && 4 !== c.tag) c.child.return = c, c = c.child;
                                else {
                                    if (c === l) break e;
                                    for (; null === c.sibling;) {
                                        if (null === c.return || c.return === l) break e;
                                        c = c.return
                                    }
                                    c.sibling.return = c.return, c = c.sibling
                                }r ? (u = n, l = o.stateNode, 8 === u.nodeType ? u.parentNode.removeChild(l) : u.removeChild(l)) : n.removeChild(o.stateNode)
                        }
                        else if (4 === o.tag) {
                            if (null !== o.child) {
                                n = o.stateNode.containerInfo, r = !0, o.child.return = o, o = o.child;
                                continue
                            }
                        } else if (bu(e, o), null !== o.child) {
                            o.child.return = o, o = o.child;
                            continue
                        }
                        if (o === t) break;
                        for (; null === o.sibling;) {
                            if (null === o.return || o.return === t) return;
                            4 === (o = o.return).tag && (a = !1)
                        }
                        o.sibling.return = o.return, o = o.sibling
                    }
                }

                function Cu(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                        case 22:
                            var n = t.updateQueue;
                            if (null !== (n = null !== n ? n.lastEffect : null)) {
                                var r = n = n.next;
                                do {
                                    3 === (3 & r.tag) && (e = r.destroy, r.destroy = void 0, void 0 !== e && e()), r = r.next
                                } while (r !== n)
                            }
                            return;
                        case 1:
                        case 12:
                        case 17:
                            return;
                        case 5:
                            if (null != (n = t.stateNode)) {
                                r = t.memoizedProps;
                                var o = null !== e ? e.memoizedProps : r;
                                e = t.type;
                                var a = t.updateQueue;
                                if (t.updateQueue = null, null !== a) {
                                    for (n[Jr] = r, "input" === e && "radio" === r.type && null != r.name && te(n, r), Se(e, o), t = Se(e, r), o = 0; o < a.length; o += 2) {
                                        var u = a[o],
                                            l = a[o + 1];
                                        "style" === u ? ke(n, l) : "dangerouslySetInnerHTML" === u ? ge(n, l) : "children" === u ? ye(n, l) : w(n, u, l, t)
                                    }
                                    switch (e) {
                                        case "input":
                                            ne(n, r);
                                            break;
                                        case "textarea":
                                            ce(n, r);
                                            break;
                                        case "select":
                                            e = n._wrapperState.wasMultiple, n._wrapperState.wasMultiple = !!r.multiple, null != (a = r.value) ? ie(n, !!r.multiple, a, !1) : e !== !!r.multiple && (null != r.defaultValue ? ie(n, !!r.multiple, r.defaultValue, !0) : ie(n, !!r.multiple, r.multiple ? [] : "", !1))
                                    }
                                }
                            }
                            return;
                        case 6:
                            if (null === t.stateNode) throw Error(i(162));
                            return void(t.stateNode.nodeValue = t.memoizedProps);
                        case 3:
                            return void((n = t.stateNode).hydrate && (n.hydrate = !1, kt(n.containerInfo)));
                        case 13:
                            return null !== t.memoizedState && (Hu = Qo(), yu(t.child, !0)), void Pu(t);
                        case 19:
                            return void Pu(t);
                        case 23:
                        case 24:
                            return void yu(t, null !== t.memoizedState)
                    }
                    throw Error(i(163))
                }

                function Pu(e) {
                    var t = e.updateQueue;
                    if (null !== t) {
                        e.updateQueue = null;
                        var n = e.stateNode;
                        null === n && (n = e.stateNode = new hu), t.forEach((function(t) {
                            var r = Wl.bind(null, e, t);
                            n.has(t) || (n.add(t), t.then(r, r))
                        }))
                    }
                }

                function Lu(e, t) {
                    return null !== e && (null === (e = e.memoizedState) || null !== e.dehydrated) && (null !== (t = t.memoizedState) && null === t.dehydrated)
                }
                var Tu = Math.ceil,
                    Fu = _.ReactCurrentDispatcher,
                    Ou = _.ReactCurrentOwner,
                    Au = 0,
                    Du = null,
                    Nu = null,
                    Mu = 0,
                    Iu = 0,
                    Ru = co(0),
                    ju = 0,
                    Bu = null,
                    zu = 0,
                    Uu = 0,
                    Wu = 0,
                    Vu = 0,
                    Qu = null,
                    Hu = 0,
                    qu = 1 / 0;

                function Gu() {
                    qu = Qo() + 500
                }
                var $u, Yu = null,
                    Xu = !1,
                    Ku = null,
                    Zu = null,
                    Ju = !1,
                    el = null,
                    tl = 90,
                    nl = [],
                    rl = [],
                    ol = null,
                    al = 0,
                    il = null,
                    ul = -1,
                    ll = 0,
                    cl = 0,
                    sl = null,
                    fl = !1;

                function dl() {
                    return 0 !== (48 & Au) ? Qo() : -1 !== ul ? ul : ul = Qo()
                }

                function pl(e) {
                    if (0 === (2 & (e = e.mode))) return 1;
                    if (0 === (4 & e)) return 99 === Ho() ? 1 : 2;
                    if (0 === ll && (ll = zu), 0 !== Ko.transition) {
                        0 !== cl && (cl = null !== Qu ? Qu.pendingLanes : 0), e = ll;
                        var t = 4186112 & ~cl;
                        return 0 === (t &= -t) && (0 === (t = (e = 4186112 & ~e) & -e) && (t = 8192)), t
                    }
                    return e = Ho(), 0 !== (4 & Au) && 98 === e ? e = zt(12, ll) : e = zt(e = function(e) {
                        switch (e) {
                            case 99:
                                return 15;
                            case 98:
                                return 10;
                            case 97:
                            case 96:
                                return 8;
                            case 95:
                                return 2;
                            default:
                                return 0
                        }
                    }(e), ll), e
                }

                function hl(e, t, n) {
                    if (50 < al) throw al = 0, il = null, Error(i(185));
                    if (null === (e = ml(e, t))) return null;
                    Vt(e, t, n), e === Du && (Wu |= t, 4 === ju && yl(e, Mu));
                    var r = Ho();
                    1 === t ? 0 !== (8 & Au) && 0 === (48 & Au) ? bl(e) : (vl(e, n), 0 === Au && (Gu(), Yo())) : (0 === (4 & Au) || 98 !== r && 99 !== r || (null === ol ? ol = new Set([e]) : ol.add(e)), vl(e, n)), Qu = e
                }

                function ml(e, t) {
                    e.lanes |= t;
                    var n = e.alternate;
                    for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e;) e.childLanes |= t, null !== (n = e.alternate) && (n.childLanes |= t), n = e, e = e.return;
                    return 3 === n.tag ? n.stateNode : null
                }

                function vl(e, t) {
                    for (var n = e.callbackNode, r = e.suspendedLanes, o = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes; 0 < u;) {
                        var l = 31 - Qt(u),
                            c = 1 << l,
                            s = a[l];
                        if (-1 === s) {
                            if (0 === (c & r) || 0 !== (c & o)) {
                                s = t, Rt(c);
                                var f = It;
                                a[l] = 10 <= f ? s + 250 : 6 <= f ? s + 5e3 : -1
                            }
                        } else s <= t && (e.expiredLanes |= c);
                        u &= ~c
                    }
                    if (r = jt(e, e === Du ? Mu : 0), t = It, 0 === r) null !== n && (n !== jo && Lo(n), e.callbackNode = null, e.callbackPriority = 0);
                    else {
                        if (null !== n) {
                            if (e.callbackPriority === t) return;
                            n !== jo && Lo(n)
                        }
                        15 === t ? (n = bl.bind(null, e), null === zo ? (zo = [n], Uo = Po(Do, Xo)) : zo.push(n), n = jo) : 14 === t ? n = $o(99, bl.bind(null, e)) : (n = function(e) {
                            switch (e) {
                                case 15:
                                case 14:
                                    return 99;
                                case 13:
                                case 12:
                                case 11:
                                case 10:
                                    return 98;
                                case 9:
                                case 8:
                                case 7:
                                case 6:
                                case 4:
                                case 5:
                                    return 97;
                                case 3:
                                case 2:
                                case 1:
                                    return 95;
                                case 0:
                                    return 90;
                                default:
                                    throw Error(i(358, e))
                            }
                        }(t), n = $o(n, gl.bind(null, e))), e.callbackPriority = t, e.callbackNode = n
                    }
                }

                function gl(e) {
                    if (ul = -1, cl = ll = 0, 0 !== (48 & Au)) throw Error(i(327));
                    var t = e.callbackNode;
                    if (Ml() && e.callbackNode !== t) return null;
                    var n = jt(e, e === Du ? Mu : 0);
                    if (0 === n) return null;
                    var r = n,
                        o = Au;
                    Au |= 16;
                    var a = Cl();
                    for (Du === e && Mu === r || (Gu(), xl(e, r));;) try {
                        Tl();
                        break
                    } catch (l) {
                        Sl(e, l)
                    }
                    if (ra(), Fu.current = a, Au = o, null !== Nu ? r = 0 : (Du = null, Mu = 0, r = ju), 0 !== (zu & Wu)) xl(e, 0);
                    else if (0 !== r) {
                        if (2 === r && (Au |= 64, e.hydrate && (e.hydrate = !1, Gr(e.containerInfo)), 0 !== (n = Bt(e)) && (r = Pl(e, n))), 1 === r) throw t = Bu, xl(e, 0), yl(e, n), vl(e, Qo()), t;
                        switch (e.finishedWork = e.current.alternate, e.finishedLanes = n, r) {
                            case 0:
                            case 1:
                                throw Error(i(345));
                            case 2:
                            case 5:
                                Al(e);
                                break;
                            case 3:
                                if (yl(e, n), (62914560 & n) === n && 10 < (r = Hu + 500 - Qo())) {
                                    if (0 !== jt(e, 0)) break;
                                    if (((o = e.suspendedLanes) & n) !== n) {
                                        dl(), e.pingedLanes |= e.suspendedLanes & o;
                                        break
                                    }
                                    e.timeoutHandle = Hr(Al.bind(null, e), r);
                                    break
                                }
                                Al(e);
                                break;
                            case 4:
                                if (yl(e, n), (4186112 & n) === n) break;
                                for (r = e.eventTimes, o = -1; 0 < n;) {
                                    var u = 31 - Qt(n);
                                    a = 1 << u, (u = r[u]) > o && (o = u), n &= ~a
                                }
                                if (n = o, 10 < (n = (120 > (n = Qo() - n) ? 120 : 480 > n ? 480 : 1080 > n ? 1080 : 1920 > n ? 1920 : 3e3 > n ? 3e3 : 4320 > n ? 4320 : 1960 * Tu(n / 1960)) - n)) {
                                    e.timeoutHandle = Hr(Al.bind(null, e), n);
                                    break
                                }
                                Al(e);
                                break;
                            default:
                                throw Error(i(329))
                        }
                    }
                    return vl(e, Qo()), e.callbackNode === t ? gl.bind(null, e) : null
                }

                function yl(e, t) {
                    for (t &= ~Vu, t &= ~Wu, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
                        var n = 31 - Qt(t),
                            r = 1 << n;
                        e[n] = -1, t &= ~r
                    }
                }

                function bl(e) {
                    if (0 !== (48 & Au)) throw Error(i(327));
                    if (Ml(), e === Du && 0 !== (e.expiredLanes & Mu)) {
                        var t = Mu,
                            n = Pl(e, t);
                        0 !== (zu & Wu) && (n = Pl(e, t = jt(e, t)))
                    } else n = Pl(e, t = jt(e, 0));
                    if (0 !== e.tag && 2 === n && (Au |= 64, e.hydrate && (e.hydrate = !1, Gr(e.containerInfo)), 0 !== (t = Bt(e)) && (n = Pl(e, t))), 1 === n) throw n = Bu, xl(e, 0), yl(e, t), vl(e, Qo()), n;
                    return e.finishedWork = e.current.alternate, e.finishedLanes = t, Al(e), vl(e, Qo()), null
                }

                function wl(e, t) {
                    var n = Au;
                    Au |= 1;
                    try {
                        return e(t)
                    } finally {
                        0 === (Au = n) && (Gu(), Yo())
                    }
                }

                function _l(e, t) {
                    var n = Au;
                    Au &= -2, Au |= 8;
                    try {
                        return e(t)
                    } finally {
                        0 === (Au = n) && (Gu(), Yo())
                    }
                }

                function kl(e, t) {
                    fo(Ru, Iu), Iu |= t, zu |= t
                }

                function El() {
                    Iu = Ru.current, so(Ru)
                }

                function xl(e, t) {
                    e.finishedWork = null, e.finishedLanes = 0;
                    var n = e.timeoutHandle;
                    if (-1 !== n && (e.timeoutHandle = -1, qr(n)), null !== Nu)
                        for (n = Nu.return; null !== n;) {
                            var r = n;
                            switch (r.tag) {
                                case 1:
                                    null !== (r = r.type.childContextTypes) && void 0 !== r && bo();
                                    break;
                                case 3:
                                    Ma(), so(mo), so(ho), Xa();
                                    break;
                                case 5:
                                    Ra(r);
                                    break;
                                case 4:
                                    Ma();
                                    break;
                                case 13:
                                case 19:
                                    so(ja);
                                    break;
                                case 10:
                                    oa(r);
                                    break;
                                case 23:
                                case 24:
                                    El()
                            }
                            n = n.return
                        }
                    Du = e, Nu = ql(e.current, null), Mu = Iu = zu = t, ju = 0, Bu = null, Vu = Wu = Uu = 0
                }

                function Sl(e, t) {
                    for (;;) {
                        var n = Nu;
                        try {
                            if (ra(), Ka.current = Ai, ri) {
                                for (var r = ei.memoizedState; null !== r;) {
                                    var o = r.queue;
                                    null !== o && (o.pending = null), r = r.next
                                }
                                ri = !1
                            }
                            if (Ja = 0, ni = ti = ei = null, oi = !1, Ou.current = null, null === n || null === n.return) {
                                ju = 1, Bu = t, Nu = null;
                                break
                            }
                            e: {
                                var a = e,
                                    i = n.return,
                                    u = n,
                                    l = t;
                                if (t = Mu, u.flags |= 2048, u.firstEffect = u.lastEffect = null, null !== l && "object" === typeof l && "function" === typeof l.then) {
                                    var c = l;
                                    if (0 === (2 & u.mode)) {
                                        var s = u.alternate;
                                        s ? (u.updateQueue = s.updateQueue, u.memoizedState = s.memoizedState, u.lanes = s.lanes) : (u.updateQueue = null, u.memoizedState = null)
                                    }
                                    var f = 0 !== (1 & ja.current),
                                        d = i;
                                    do {
                                        var p;
                                        if (p = 13 === d.tag) {
                                            var h = d.memoizedState;
                                            if (null !== h) p = null !== h.dehydrated;
                                            else {
                                                var m = d.memoizedProps;
                                                p = void 0 !== m.fallback && (!0 !== m.unstable_avoidThisFallback || !f)
                                            }
                                        }
                                        if (p) {
                                            var v = d.updateQueue;
                                            if (null === v) {
                                                var g = new Set;
                                                g.add(c), d.updateQueue = g
                                            } else v.add(c);
                                            if (0 === (2 & d.mode)) {
                                                if (d.flags |= 64, u.flags |= 16384, u.flags &= -2981, 1 === u.tag)
                                                    if (null === u.alternate) u.tag = 17;
                                                    else {
                                                        var y = fa(-1, 1);
                                                        y.tag = 2, da(u, y)
                                                    } u.lanes |= 1;
                                                break e
                                            }
                                            l = void 0, u = t;
                                            var b = a.pingCache;
                                            if (null === b ? (b = a.pingCache = new fu, l = new Set, b.set(c, l)) : void 0 === (l = b.get(c)) && (l = new Set, b.set(c, l)), !l.has(u)) {
                                                l.add(u);
                                                var w = Ul.bind(null, a, c, u);
                                                c.then(w, w)
                                            }
                                            d.flags |= 4096, d.lanes = t;
                                            break e
                                        }
                                        d = d.return
                                    } while (null !== d);
                                    l = Error((G(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")
                                }
                                5 !== ju && (ju = 2),
                                l = cu(l, u),
                                d = i;do {
                                    switch (d.tag) {
                                        case 3:
                                            a = l, d.flags |= 4096, t &= -t, d.lanes |= t, pa(d, du(0, a, t));
                                            break e;
                                        case 1:
                                            a = l;
                                            var _ = d.type,
                                                k = d.stateNode;
                                            if (0 === (64 & d.flags) && ("function" === typeof _.getDerivedStateFromError || null !== k && "function" === typeof k.componentDidCatch && (null === Zu || !Zu.has(k)))) {
                                                d.flags |= 4096, t &= -t, d.lanes |= t, pa(d, pu(d, a, t));
                                                break e
                                            }
                                    }
                                    d = d.return
                                } while (null !== d)
                            }
                            Ol(n)
                        } catch (E) {
                            t = E, Nu === n && null !== n && (Nu = n = n.return);
                            continue
                        }
                        break
                    }
                }

                function Cl() {
                    var e = Fu.current;
                    return Fu.current = Ai, null === e ? Ai : e
                }

                function Pl(e, t) {
                    var n = Au;
                    Au |= 16;
                    var r = Cl();
                    for (Du === e && Mu === t || xl(e, t);;) try {
                        Ll();
                        break
                    } catch (o) {
                        Sl(e, o)
                    }
                    if (ra(), Au = n, Fu.current = r, null !== Nu) throw Error(i(261));
                    return Du = null, Mu = 0, ju
                }

                function Ll() {
                    for (; null !== Nu;) Fl(Nu)
                }

                function Tl() {
                    for (; null !== Nu && !To();) Fl(Nu)
                }

                function Fl(e) {
                    var t = $u(e.alternate, e, Iu);
                    e.memoizedProps = e.pendingProps, null === t ? Ol(e) : Nu = t, Ou.current = null
                }

                function Ol(e) {
                    var t = e;
                    do {
                        var n = t.alternate;
                        if (e = t.return, 0 === (2048 & t.flags)) {
                            if (null !== (n = uu(n, t, Iu))) return void(Nu = n);
                            if (24 !== (n = t).tag && 23 !== n.tag || null === n.memoizedState || 0 !== (1073741824 & Iu) || 0 === (4 & n.mode)) {
                                for (var r = 0, o = n.child; null !== o;) r |= o.lanes | o.childLanes, o = o.sibling;
                                n.childLanes = r
                            }
                            null !== e && 0 === (2048 & e.flags) && (null === e.firstEffect && (e.firstEffect = t.firstEffect), null !== t.lastEffect && (null !== e.lastEffect && (e.lastEffect.nextEffect = t.firstEffect), e.lastEffect = t.lastEffect), 1 < t.flags && (null !== e.lastEffect ? e.lastEffect.nextEffect = t : e.firstEffect = t, e.lastEffect = t))
                        } else {
                            if (null !== (n = lu(t))) return n.flags &= 2047, void(Nu = n);
                            null !== e && (e.firstEffect = e.lastEffect = null, e.flags |= 2048)
                        }
                        if (null !== (t = t.sibling)) return void(Nu = t);
                        Nu = t = e
                    } while (null !== t);
                    0 === ju && (ju = 5)
                }

                function Al(e) {
                    var t = Ho();
                    return Go(99, Dl.bind(null, e, t)), null
                }

                function Dl(e, t) {
                    do {
                        Ml()
                    } while (null !== el);
                    if (0 !== (48 & Au)) throw Error(i(327));
                    var n = e.finishedWork;
                    if (null === n) return null;
                    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(i(177));
                    e.callbackNode = null;
                    var r = n.lanes | n.childLanes,
                        o = r,
                        a = e.pendingLanes & ~o;
                    e.pendingLanes = o, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= o, e.mutableReadLanes &= o, e.entangledLanes &= o, o = e.entanglements;
                    for (var u = e.eventTimes, l = e.expirationTimes; 0 < a;) {
                        var c = 31 - Qt(a),
                            s = 1 << c;
                        o[c] = 0, u[c] = -1, l[c] = -1, a &= ~s
                    }
                    if (null !== ol && 0 === (24 & r) && ol.has(e) && ol.delete(e), e === Du && (Nu = Du = null, Mu = 0), 1 < n.flags ? null !== n.lastEffect ? (n.lastEffect.nextEffect = n, r = n.firstEffect) : r = n : r = n.firstEffect, null !== r) {
                        if (o = Au, Au |= 32, Ou.current = null, Ur = Yt, gr(u = vr())) {
                            if ("selectionStart" in u) l = {
                                start: u.selectionStart,
                                end: u.selectionEnd
                            };
                            else e: if (l = (l = u.ownerDocument) && l.defaultView || window, (s = l.getSelection && l.getSelection()) && 0 !== s.rangeCount) {
                                l = s.anchorNode, a = s.anchorOffset, c = s.focusNode, s = s.focusOffset;
                                try {
                                    l.nodeType, c.nodeType
                                } catch (C) {
                                    l = null;
                                    break e
                                }
                                var f = 0,
                                    d = -1,
                                    p = -1,
                                    h = 0,
                                    m = 0,
                                    v = u,
                                    g = null;
                                t: for (;;) {
                                    for (var y; v !== l || 0 !== a && 3 !== v.nodeType || (d = f + a), v !== c || 0 !== s && 3 !== v.nodeType || (p = f + s), 3 === v.nodeType && (f += v.nodeValue.length), null !== (y = v.firstChild);) g = v, v = y;
                                    for (;;) {
                                        if (v === u) break t;
                                        if (g === l && ++h === a && (d = f), g === c && ++m === s && (p = f), null !== (y = v.nextSibling)) break;
                                        g = (v = g).parentNode
                                    }
                                    v = y
                                }
                                l = -1 === d || -1 === p ? null : {
                                    start: d,
                                    end: p
                                }
                            } else l = null;
                            l = l || {
                                start: 0,
                                end: 0
                            }
                        } else l = null;
                        Wr = {
                            focusedElem: u,
                            selectionRange: l
                        }, Yt = !1, sl = null, fl = !1, Yu = r;
                        do {
                            try {
                                Nl()
                            } catch (C) {
                                if (null === Yu) throw Error(i(330));
                                zl(Yu, C), Yu = Yu.nextEffect
                            }
                        } while (null !== Yu);
                        sl = null, Yu = r;
                        do {
                            try {
                                for (u = e; null !== Yu;) {
                                    var b = Yu.flags;
                                    if (16 & b && ye(Yu.stateNode, ""), 128 & b) {
                                        var w = Yu.alternate;
                                        if (null !== w) {
                                            var _ = w.ref;
                                            null !== _ && ("function" === typeof _ ? _(null) : _.current = null)
                                        }
                                    }
                                    switch (1038 & b) {
                                        case 2:
                                            ku(Yu), Yu.flags &= -3;
                                            break;
                                        case 6:
                                            ku(Yu), Yu.flags &= -3, Cu(Yu.alternate, Yu);
                                            break;
                                        case 1024:
                                            Yu.flags &= -1025;
                                            break;
                                        case 1028:
                                            Yu.flags &= -1025, Cu(Yu.alternate, Yu);
                                            break;
                                        case 4:
                                            Cu(Yu.alternate, Yu);
                                            break;
                                        case 8:
                                            Su(u, l = Yu);
                                            var k = l.alternate;
                                            wu(l), null !== k && wu(k)
                                    }
                                    Yu = Yu.nextEffect
                                }
                            } catch (C) {
                                if (null === Yu) throw Error(i(330));
                                zl(Yu, C), Yu = Yu.nextEffect
                            }
                        } while (null !== Yu);
                        if (_ = Wr, w = vr(), b = _.focusedElem, u = _.selectionRange, w !== b && b && b.ownerDocument && mr(b.ownerDocument.documentElement, b)) {
                            null !== u && gr(b) && (w = u.start, void 0 === (_ = u.end) && (_ = w), "selectionStart" in b ? (b.selectionStart = w, b.selectionEnd = Math.min(_, b.value.length)) : (_ = (w = b.ownerDocument || document) && w.defaultView || window).getSelection && (_ = _.getSelection(), l = b.textContent.length, k = Math.min(u.start, l), u = void 0 === u.end ? k : Math.min(u.end, l), !_.extend && k > u && (l = u, u = k, k = l), l = hr(b, k), a = hr(b, u), l && a && (1 !== _.rangeCount || _.anchorNode !== l.node || _.anchorOffset !== l.offset || _.focusNode !== a.node || _.focusOffset !== a.offset) && ((w = w.createRange()).setStart(l.node, l.offset), _.removeAllRanges(), k > u ? (_.addRange(w), _.extend(a.node, a.offset)) : (w.setEnd(a.node, a.offset), _.addRange(w))))), w = [];
                            for (_ = b; _ = _.parentNode;) 1 === _.nodeType && w.push({
                                element: _,
                                left: _.scrollLeft,
                                top: _.scrollTop
                            });
                            for ("function" === typeof b.focus && b.focus(), b = 0; b < w.length; b++)(_ = w[b]).element.scrollLeft = _.left, _.element.scrollTop = _.top
                        }
                        Yt = !!Ur, Wr = Ur = null, e.current = n, Yu = r;
                        do {
                            try {
                                for (b = e; null !== Yu;) {
                                    var E = Yu.flags;
                                    if (36 & E && gu(b, Yu.alternate, Yu), 128 & E) {
                                        w = void 0;
                                        var x = Yu.ref;
                                        if (null !== x) {
                                            var S = Yu.stateNode;
                                            Yu.tag, w = S, "function" === typeof x ? x(w) : x.current = w
                                        }
                                    }
                                    Yu = Yu.nextEffect
                                }
                            } catch (C) {
                                if (null === Yu) throw Error(i(330));
                                zl(Yu, C), Yu = Yu.nextEffect
                            }
                        } while (null !== Yu);
                        Yu = null, Bo(), Au = o
                    } else e.current = n;
                    if (Ju) Ju = !1, el = e, tl = t;
                    else
                        for (Yu = r; null !== Yu;) t = Yu.nextEffect, Yu.nextEffect = null, 8 & Yu.flags && ((E = Yu).sibling = null, E.stateNode = null), Yu = t;
                    if (0 === (r = e.pendingLanes) && (Zu = null), 1 === r ? e === il ? al++ : (al = 0, il = e) : al = 0, n = n.stateNode, So && "function" === typeof So.onCommitFiberRoot) try {
                        So.onCommitFiberRoot(xo, n, void 0, 64 === (64 & n.current.flags))
                    } catch (C) {}
                    if (vl(e, Qo()), Xu) throw Xu = !1, e = Ku, Ku = null, e;
                    return 0 !== (8 & Au) || Yo(), null
                }

                function Nl() {
                    for (; null !== Yu;) {
                        var e = Yu.alternate;
                        fl || null === sl || (0 !== (8 & Yu.flags) ? et(Yu, sl) && (fl = !0) : 13 === Yu.tag && Lu(e, Yu) && et(Yu, sl) && (fl = !0));
                        var t = Yu.flags;
                        0 !== (256 & t) && vu(e, Yu), 0 === (512 & t) || Ju || (Ju = !0, $o(97, (function() {
                            return Ml(), null
                        }))), Yu = Yu.nextEffect
                    }
                }

                function Ml() {
                    if (90 !== tl) {
                        var e = 97 < tl ? 97 : tl;
                        return tl = 90, Go(e, jl)
                    }
                    return !1
                }

                function Il(e, t) {
                    nl.push(t, e), Ju || (Ju = !0, $o(97, (function() {
                        return Ml(), null
                    })))
                }

                function Rl(e, t) {
                    rl.push(t, e), Ju || (Ju = !0, $o(97, (function() {
                        return Ml(), null
                    })))
                }

                function jl() {
                    if (null === el) return !1;
                    var e = el;
                    if (el = null, 0 !== (48 & Au)) throw Error(i(331));
                    var t = Au;
                    Au |= 32;
                    var n = rl;
                    rl = [];
                    for (var r = 0; r < n.length; r += 2) {
                        var o = n[r],
                            a = n[r + 1],
                            u = o.destroy;
                        if (o.destroy = void 0, "function" === typeof u) try {
                            u()
                        } catch (c) {
                            if (null === a) throw Error(i(330));
                            zl(a, c)
                        }
                    }
                    for (n = nl, nl = [], r = 0; r < n.length; r += 2) {
                        o = n[r], a = n[r + 1];
                        try {
                            var l = o.create;
                            o.destroy = l()
                        } catch (c) {
                            if (null === a) throw Error(i(330));
                            zl(a, c)
                        }
                    }
                    for (l = e.current.firstEffect; null !== l;) e = l.nextEffect, l.nextEffect = null, 8 & l.flags && (l.sibling = null, l.stateNode = null), l = e;
                    return Au = t, Yo(), !0
                }

                function Bl(e, t, n) {
                    da(e, t = du(0, t = cu(n, t), 1)), t = dl(), null !== (e = ml(e, 1)) && (Vt(e, 1, t), vl(e, t))
                }

                function zl(e, t) {
                    if (3 === e.tag) Bl(e, e, t);
                    else
                        for (var n = e.return; null !== n;) {
                            if (3 === n.tag) {
                                Bl(n, e, t);
                                break
                            }
                            if (1 === n.tag) {
                                var r = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof r.componentDidCatch && (null === Zu || !Zu.has(r))) {
                                    var o = pu(n, e = cu(t, e), 1);
                                    if (da(n, o), o = dl(), null !== (n = ml(n, 1))) Vt(n, 1, o), vl(n, o);
                                    else if ("function" === typeof r.componentDidCatch && (null === Zu || !Zu.has(r))) try {
                                        r.componentDidCatch(t, e)
                                    } catch (a) {}
                                    break
                                }
                            }
                            n = n.return
                        }
                }

                function Ul(e, t, n) {
                    var r = e.pingCache;
                    null !== r && r.delete(t), t = dl(), e.pingedLanes |= e.suspendedLanes & n, Du === e && (Mu & n) === n && (4 === ju || 3 === ju && (62914560 & Mu) === Mu && 500 > Qo() - Hu ? xl(e, 0) : Vu |= n), vl(e, t)
                }

                function Wl(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), 0 === (t = 0) && (0 === (2 & (t = e.mode)) ? t = 1 : 0 === (4 & t) ? t = 99 === Ho() ? 1 : 2 : (0 === ll && (ll = zu), 0 === (t = Ut(62914560 & ~ll)) && (t = 4194304))), n = dl(), null !== (e = ml(e, t)) && (Vt(e, t, n), vl(e, n))
                }

                function Vl(e, t, n, r) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.flags = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childLanes = this.lanes = 0, this.alternate = null
                }

                function Ql(e, t, n, r) {
                    return new Vl(e, t, n, r)
                }

                function Hl(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function ql(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = Ql(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = null === t ? null : {
                        lanes: t.lanes,
                        firstContext: t.firstContext
                    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Gl(e, t, n, r, o, a) {
                    var u = 2;
                    if (r = e, "function" === typeof e) Hl(e) && (u = 1);
                    else if ("string" === typeof e) u = 5;
                    else e: switch (e) {
                        case x:
                            return $l(n.children, o, a, t);
                        case I:
                            u = 8, o |= 16;
                            break;
                        case S:
                            u = 8, o |= 1;
                            break;
                        case C:
                            return (e = Ql(12, n, t, 8 | o)).elementType = C, e.type = C, e.lanes = a, e;
                        case F:
                            return (e = Ql(13, n, t, o)).type = F, e.elementType = F, e.lanes = a, e;
                        case O:
                            return (e = Ql(19, n, t, o)).elementType = O, e.lanes = a, e;
                        case R:
                            return Yl(n, o, a, t);
                        case j:
                            return (e = Ql(24, n, t, o)).elementType = j, e.lanes = a, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case P:
                                    u = 10;
                                    break e;
                                case L:
                                    u = 9;
                                    break e;
                                case T:
                                    u = 11;
                                    break e;
                                case A:
                                    u = 14;
                                    break e;
                                case D:
                                    u = 16, r = null;
                                    break e;
                                case N:
                                    u = 22;
                                    break e
                            }
                            throw Error(i(130, null == e ? e : typeof e, ""))
                    }
                    return (t = Ql(u, n, t, o)).elementType = e, t.type = r, t.lanes = a, t
                }

                function $l(e, t, n, r) {
                    return (e = Ql(7, e, r, t)).lanes = n, e
                }

                function Yl(e, t, n, r) {
                    return (e = Ql(23, e, r, t)).elementType = R, e.lanes = n, e
                }

                function Xl(e, t, n) {
                    return (e = Ql(6, e, null, t)).lanes = n, e
                }

                function Kl(e, t, n) {
                    return (t = Ql(4, null !== e.children ? e.children : [], e.key, t)).lanes = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function Zl(e, t, n) {
                    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.pendingContext = this.context = null, this.hydrate = n, this.callbackNode = null, this.callbackPriority = 0, this.eventTimes = Wt(0), this.expirationTimes = Wt(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wt(0), this.mutableSourceEagerHydrationData = null
                }

                function Jl(e, t, n) {
                    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                    return {
                        $$typeof: E,
                        key: null == r ? null : "" + r,
                        children: e,
                        containerInfo: t,
                        implementation: n
                    }
                }

                function ec(e, t, n, r) {
                    var o = t.current,
                        a = dl(),
                        u = pl(o);
                    e: if (n) {
                        t: {
                            if (Xe(n = n._reactInternals) !== n || 1 !== n.tag) throw Error(i(170));
                            var l = n;do {
                                switch (l.tag) {
                                    case 3:
                                        l = l.stateNode.context;
                                        break t;
                                    case 1:
                                        if (yo(l.type)) {
                                            l = l.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                l = l.return
                            } while (null !== l);
                            throw Error(i(171))
                        }
                        if (1 === n.tag) {
                            var c = n.type;
                            if (yo(c)) {
                                n = _o(n, c, l);
                                break e
                            }
                        }
                        n = l
                    }
                    else n = po;
                    return null === t.context ? t.context = n : t.pendingContext = n, (t = fa(a, u)).payload = {
                        element: e
                    }, null !== (r = void 0 === r ? null : r) && (t.callback = r), da(o, t), hl(o, u, a), u
                }

                function tc(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function nc(e, t) {
                    if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
                        var n = e.retryLane;
                        e.retryLane = 0 !== n && n < t ? n : t
                    }
                }

                function rc(e, t) {
                    nc(e, t), (e = e.alternate) && nc(e, t)
                }

                function oc(e, t, n) {
                    var r = null != n && null != n.hydrationOptions && n.hydrationOptions.mutableSources || null;
                    if (n = new Zl(e, t, null != n && !0 === n.hydrate), t = Ql(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0), n.current = t, t.stateNode = n, ca(t), e[eo] = n.current, Ar(8 === e.nodeType ? e.parentNode : e), r)
                        for (e = 0; e < r.length; e++) {
                            var o = (t = r[e])._getVersion;
                            o = o(t._source), null == n.mutableSourceEagerHydrationData ? n.mutableSourceEagerHydrationData = [t, o] : n.mutableSourceEagerHydrationData.push(t, o)
                        }
                    this._internalRoot = n
                }

                function ac(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function ic(e, t, n, r, o) {
                    var a = n._reactRootContainer;
                    if (a) {
                        var i = a._internalRoot;
                        if ("function" === typeof o) {
                            var u = o;
                            o = function() {
                                var e = tc(i);
                                u.call(e)
                            }
                        }
                        ec(t, i, e, o)
                    } else {
                        if (a = n._reactRootContainer = function(e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new oc(e, 0, t ? {
                                    hydrate: !0
                                } : void 0)
                            }(n, r), i = a._internalRoot, "function" === typeof o) {
                            var l = o;
                            o = function() {
                                var e = tc(i);
                                l.call(e)
                            }
                        }
                        _l((function() {
                            ec(t, i, e, o)
                        }))
                    }
                    return tc(i)
                }

                function uc(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    if (!ac(t)) throw Error(i(200));
                    return Jl(e, t, null, n)
                }
                $u = function(e, t, n) {
                    var r = t.lanes;
                    if (null !== e)
                        if (e.memoizedProps !== t.pendingProps || mo.current) Ri = !0;
                        else {
                            if (0 === (n & r)) {
                                switch (Ri = !1, t.tag) {
                                    case 3:
                                        Gi(t), $a();
                                        break;
                                    case 5:
                                        Ia(t);
                                        break;
                                    case 1:
                                        yo(t.type) && ko(t);
                                        break;
                                    case 4:
                                        Na(t, t.stateNode.containerInfo);
                                        break;
                                    case 10:
                                        r = t.memoizedProps.value;
                                        var o = t.type._context;
                                        fo(Jo, o._currentValue), o._currentValue = r;
                                        break;
                                    case 13:
                                        if (null !== t.memoizedState) return 0 !== (n & t.child.childLanes) ? Zi(e, t, n) : (fo(ja, 1 & ja.current), null !== (t = au(e, t, n)) ? t.sibling : null);
                                        fo(ja, 1 & ja.current);
                                        break;
                                    case 19:
                                        if (r = 0 !== (n & t.childLanes), 0 !== (64 & e.flags)) {
                                            if (r) return ou(e, t, n);
                                            t.flags |= 64
                                        }
                                        if (null !== (o = t.memoizedState) && (o.rendering = null, o.tail = null, o.lastEffect = null), fo(ja, ja.current), r) break;
                                        return null;
                                    case 23:
                                    case 24:
                                        return t.lanes = 0, Wi(e, t, n)
                                }
                                return au(e, t, n)
                            }
                            Ri = 0 !== (16384 & e.flags)
                        }
                    else Ri = !1;
                    switch (t.lanes = 0, t.tag) {
                        case 2:
                            if (r = t.type, null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = go(t, ho.current), ia(t, n), o = ui(null, t, r, e, o, n), t.flags |= 1, "object" === typeof o && null !== o && "function" === typeof o.render && void 0 === o.$$typeof) {
                                if (t.tag = 1, t.memoizedState = null, t.updateQueue = null, yo(r)) {
                                    var a = !0;
                                    ko(t)
                                } else a = !1;
                                t.memoizedState = null !== o.state && void 0 !== o.state ? o.state : null, ca(t);
                                var u = r.getDerivedStateFromProps;
                                "function" === typeof u && ga(t, r, u, e), o.updater = ya, t.stateNode = o, o._reactInternals = t, ka(t, r, e, n), t = qi(null, t, r, !0, a, n)
                            } else t.tag = 0, ji(null, t, o, n), t = t.child;
                            return t;
                        case 16:
                            o = t.elementType;
                            e: {
                                switch (null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), e = t.pendingProps, o = (a = o._init)(o._payload), t.type = o, a = t.tag = function(e) {
                                        if ("function" === typeof e) return Hl(e) ? 1 : 0;
                                        if (void 0 !== e && null !== e) {
                                            if ((e = e.$$typeof) === T) return 11;
                                            if (e === A) return 14
                                        }
                                        return 2
                                    }(o), e = Zo(o, e), a) {
                                    case 0:
                                        t = Qi(null, t, o, e, n);
                                        break e;
                                    case 1:
                                        t = Hi(null, t, o, e, n);
                                        break e;
                                    case 11:
                                        t = Bi(null, t, o, e, n);
                                        break e;
                                    case 14:
                                        t = zi(null, t, o, Zo(o.type, e), r, n);
                                        break e
                                }
                                throw Error(i(306, o, ""))
                            }
                            return t;
                        case 0:
                            return r = t.type, o = t.pendingProps, Qi(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                        case 1:
                            return r = t.type, o = t.pendingProps, Hi(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                        case 3:
                            if (Gi(t), r = t.updateQueue, null === e || null === r) throw Error(i(282));
                            if (r = t.pendingProps, o = null !== (o = t.memoizedState) ? o.element : null, sa(e, t), ha(t, r, null, n), (r = t.memoizedState.element) === o) $a(), t = au(e, t, n);
                            else {
                                if ((a = (o = t.stateNode).hydrate) && (Ua = $r(t.stateNode.containerInfo.firstChild), za = t, a = Wa = !0), a) {
                                    if (null != (e = o.mutableSourceEagerHydrationData))
                                        for (o = 0; o < e.length; o += 2)(a = e[o])._workInProgressVersionPrimary = e[o + 1], Ya.push(a);
                                    for (n = La(t, null, r, n), t.child = n; n;) n.flags = -3 & n.flags | 1024, n = n.sibling
                                } else ji(e, t, r, n), $a();
                                t = t.child
                            }
                            return t;
                        case 5:
                            return Ia(t), null === e && Ha(t), r = t.type, o = t.pendingProps, a = null !== e ? e.memoizedProps : null, u = o.children, Qr(r, o) ? u = null : null !== a && Qr(r, a) && (t.flags |= 16), Vi(e, t), ji(e, t, u, n), t.child;
                        case 6:
                            return null === e && Ha(t), null;
                        case 13:
                            return Zi(e, t, n);
                        case 4:
                            return Na(t, t.stateNode.containerInfo), r = t.pendingProps, null === e ? t.child = Pa(t, null, r, n) : ji(e, t, r, n), t.child;
                        case 11:
                            return r = t.type, o = t.pendingProps, Bi(e, t, r, o = t.elementType === r ? o : Zo(r, o), n);
                        case 7:
                            return ji(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return ji(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                r = t.type._context,
                                o = t.pendingProps,
                                u = t.memoizedProps,
                                a = o.value;
                                var l = t.type._context;
                                if (fo(Jo, l._currentValue), l._currentValue = a, null !== u)
                                    if (l = u.value, 0 === (a = sr(l, a) ? 0 : 0 | ("function" === typeof r._calculateChangedBits ? r._calculateChangedBits(l, a) : 1073741823))) {
                                        if (u.children === o.children && !mo.current) {
                                            t = au(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                            var c = l.dependencies;
                                            if (null !== c) {
                                                u = l.child;
                                                for (var s = c.firstContext; null !== s;) {
                                                    if (s.context === r && 0 !== (s.observedBits & a)) {
                                                        1 === l.tag && ((s = fa(-1, n & -n)).tag = 2, da(l, s)), l.lanes |= n, null !== (s = l.alternate) && (s.lanes |= n), aa(l.return, n), c.lanes |= n;
                                                        break
                                                    }
                                                    s = s.next
                                                }
                                            } else u = 10 === l.tag && l.type === t.type ? null : l.child;
                                            if (null !== u) u.return = l;
                                            else
                                                for (u = l; null !== u;) {
                                                    if (u === t) {
                                                        u = null;
                                                        break
                                                    }
                                                    if (null !== (l = u.sibling)) {
                                                        l.return = u.return, u = l;
                                                        break
                                                    }
                                                    u = u.return
                                                }
                                            l = u
                                        }
                                ji(e, t, o.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return o = t.type, r = (a = t.pendingProps).children, ia(t, n), r = r(o = ua(o, a.unstable_observedBits)), t.flags |= 1, ji(e, t, r, n), t.child;
                        case 14:
                            return a = Zo(o = t.type, t.pendingProps), zi(e, t, o, a = Zo(o.type, a), r, n);
                        case 15:
                            return Ui(e, t, t.type, t.pendingProps, r, n);
                        case 17:
                            return r = t.type, o = t.pendingProps, o = t.elementType === r ? o : Zo(r, o), null !== e && (e.alternate = null, t.alternate = null, t.flags |= 2), t.tag = 1, yo(r) ? (e = !0, ko(t)) : e = !1, ia(t, n), wa(t, r, o), ka(t, r, o, n), qi(null, t, r, !0, e, n);
                        case 19:
                            return ou(e, t, n);
                        case 23:
                        case 24:
                            return Wi(e, t, n)
                    }
                    throw Error(i(156, t.tag))
                }, oc.prototype.render = function(e) {
                    ec(e, this._internalRoot, null, null)
                }, oc.prototype.unmount = function() {
                    var e = this._internalRoot,
                        t = e.containerInfo;
                    ec(null, e, null, (function() {
                        t[eo] = null
                    }))
                }, tt = function(e) {
                    13 === e.tag && (hl(e, 4, dl()), rc(e, 4))
                }, nt = function(e) {
                    13 === e.tag && (hl(e, 67108864, dl()), rc(e, 67108864))
                }, rt = function(e) {
                    if (13 === e.tag) {
                        var t = dl(),
                            n = pl(e);
                        hl(e, n, t), rc(e, n)
                    }
                }, ot = function(e, t) {
                    return t()
                }, Pe = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (ne(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var r = n[t];
                                    if (r !== e && r.form === e.form) {
                                        var o = ao(r);
                                        if (!o) throw Error(i(90));
                                        K(r), ne(r, o)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            ce(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && ie(e, !!n.multiple, t, !1)
                    }
                }, De = wl, Ne = function(e, t, n, r, o) {
                    var a = Au;
                    Au |= 4;
                    try {
                        return Go(98, e.bind(null, t, n, r, o))
                    } finally {
                        0 === (Au = a) && (Gu(), Yo())
                    }
                }, Me = function() {
                    0 === (49 & Au) && (function() {
                        if (null !== ol) {
                            var e = ol;
                            ol = null, e.forEach((function(e) {
                                e.expiredLanes |= 24 & e.pendingLanes, vl(e, Qo())
                            }))
                        }
                        Yo()
                    }(), Ml())
                }, Ie = function(e, t) {
                    var n = Au;
                    Au |= 2;
                    try {
                        return e(t)
                    } finally {
                        0 === (Au = n) && (Gu(), Yo())
                    }
                };
                var lc = {
                        Events: [ro, oo, ao, Oe, Ae, Ml, {
                            current: !1
                        }]
                    },
                    cc = {
                        findFiberByHostInstance: no,
                        bundleType: 0,
                        version: "17.0.2",
                        rendererPackageName: "react-dom"
                    },
                    sc = {
                        bundleType: cc.bundleType,
                        version: cc.version,
                        rendererPackageName: cc.rendererPackageName,
                        rendererConfig: cc.rendererConfig,
                        overrideHookState: null,
                        overrideHookStateDeletePath: null,
                        overrideHookStateRenamePath: null,
                        overrideProps: null,
                        overridePropsDeletePath: null,
                        overridePropsRenamePath: null,
                        setSuspenseHandler: null,
                        scheduleUpdate: null,
                        currentDispatcherRef: _.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = Je(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: cc.findFiberByHostInstance || function() {
                            return null
                        },
                        findHostInstancesForRefresh: null,
                        scheduleRefresh: null,
                        scheduleRoot: null,
                        setRefreshHandler: null,
                        getCurrentFiber: null
                    };
                if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
                    var fc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                    if (!fc.isDisabled && fc.supportsFiber) try {
                        xo = fc.inject(sc), So = fc
                    } catch (ve) {}
                }
                t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lc, t.createPortal = uc, t.findDOMNode = function(e) {
                    if (null == e) return null;
                    if (1 === e.nodeType) return e;
                    var t = e._reactInternals;
                    if (void 0 === t) {
                        if ("function" === typeof e.render) throw Error(i(188));
                        throw Error(i(268, Object.keys(e)))
                    }
                    return e = null === (e = Je(t)) ? null : e.stateNode
                }, t.flushSync = function(e, t) {
                    var n = Au;
                    if (0 !== (48 & n)) return e(t);
                    Au |= 1;
                    try {
                        if (e) return Go(99, e.bind(null, t))
                    } finally {
                        Au = n, Yo()
                    }
                }, t.hydrate = function(e, t, n) {
                    if (!ac(t)) throw Error(i(200));
                    return ic(null, e, t, !0, n)
                }, t.render = function(e, t, n) {
                    if (!ac(t)) throw Error(i(200));
                    return ic(null, e, t, !1, n)
                }, t.unmountComponentAtNode = function(e) {
                    if (!ac(e)) throw Error(i(40));
                    return !!e._reactRootContainer && (_l((function() {
                        ic(null, null, e, !1, (function() {
                            e._reactRootContainer = null, e[eo] = null
                        }))
                    })), !0)
                }, t.unstable_batchedUpdates = wl, t.unstable_createPortal = function(e, t) {
                    return uc(e, t, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null)
                }, t.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
                    if (!ac(n)) throw Error(i(200));
                    if (null == e || void 0 === e._reactInternals) throw Error(i(38));
                    return ic(e, t, n, !1, r)
                }, t.version = "17.0.2"
            },
            164: function(e, t, n) {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(463)
            },
            372: function(e, t) {
                "use strict";
                var n = "function" === typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    o = n ? Symbol.for("react.portal") : 60106,
                    a = n ? Symbol.for("react.fragment") : 60107,
                    i = n ? Symbol.for("react.strict_mode") : 60108,
                    u = n ? Symbol.for("react.profiler") : 60114,
                    l = n ? Symbol.for("react.provider") : 60109,
                    c = n ? Symbol.for("react.context") : 60110,
                    s = n ? Symbol.for("react.async_mode") : 60111,
                    f = n ? Symbol.for("react.concurrent_mode") : 60111,
                    d = n ? Symbol.for("react.forward_ref") : 60112,
                    p = n ? Symbol.for("react.suspense") : 60113,
                    h = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    v = n ? Symbol.for("react.lazy") : 60116,
                    g = n ? Symbol.for("react.block") : 60121,
                    y = n ? Symbol.for("react.fundamental") : 60117,
                    b = n ? Symbol.for("react.responder") : 60118,
                    w = n ? Symbol.for("react.scope") : 60119;

                function _(e) {
                    if ("object" === typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch (e = e.type) {
                                    case s:
                                    case f:
                                    case a:
                                    case u:
                                    case i:
                                    case p:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case c:
                                            case d:
                                            case v:
                                            case m:
                                            case l:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                                case o:
                                    return t
                        }
                    }
                }

                function k(e) {
                    return _(e) === f
                }
                t.AsyncMode = s, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = d, t.Fragment = a, t.Lazy = v, t.Memo = m, t.Portal = o, t.Profiler = u, t.StrictMode = i, t.Suspense = p, t.isAsyncMode = function(e) {
                    return k(e) || _(e) === s
                }, t.isConcurrentMode = k, t.isContextConsumer = function(e) {
                    return _(e) === c
                }, t.isContextProvider = function(e) {
                    return _(e) === l
                }, t.isElement = function(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === r
                }, t.isForwardRef = function(e) {
                    return _(e) === d
                }, t.isFragment = function(e) {
                    return _(e) === a
                }, t.isLazy = function(e) {
                    return _(e) === v
                }, t.isMemo = function(e) {
                    return _(e) === m
                }, t.isPortal = function(e) {
                    return _(e) === o
                }, t.isProfiler = function(e) {
                    return _(e) === u
                }, t.isStrictMode = function(e) {
                    return _(e) === i
                }, t.isSuspense = function(e) {
                    return _(e) === p
                }, t.isValidElementType = function(e) {
                    return "string" === typeof e || "function" === typeof e || e === a || e === f || e === u || e === i || e === p || e === h || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === m || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || e.$$typeof === y || e.$$typeof === b || e.$$typeof === w || e.$$typeof === g)
                }, t.typeOf = _
            },
            441: function(e, t, n) {
                "use strict";
                e.exports = n(372)
            },
            459: function(e, t) {
                "use strict";
                var n = 60103,
                    r = 60106,
                    o = 60107,
                    a = 60108,
                    i = 60114,
                    u = 60109,
                    l = 60110,
                    c = 60112,
                    s = 60113,
                    f = 60120,
                    d = 60115,
                    p = 60116,
                    h = 60121,
                    m = 60122,
                    v = 60117,
                    g = 60129,
                    y = 60131;
                if ("function" === typeof Symbol && Symbol.for) {
                    var b = Symbol.for;
                    n = b("react.element"), r = b("react.portal"), o = b("react.fragment"), a = b("react.strict_mode"), i = b("react.profiler"), u = b("react.provider"), l = b("react.context"), c = b("react.forward_ref"), s = b("react.suspense"), f = b("react.suspense_list"), d = b("react.memo"), p = b("react.lazy"), h = b("react.block"), m = b("react.server.block"), v = b("react.fundamental"), g = b("react.debug_trace_mode"), y = b("react.legacy_hidden")
                }

                function w(e) {
                    if ("object" === typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case n:
                                switch (e = e.type) {
                                    case o:
                                    case i:
                                    case a:
                                    case s:
                                    case f:
                                        return e;
                                    default:
                                        switch (e = e && e.$$typeof) {
                                            case l:
                                            case c:
                                            case p:
                                            case d:
                                            case u:
                                                return e;
                                            default:
                                                return t
                                        }
                                }
                                case r:
                                    return t
                        }
                    }
                }
            },
            900: function(e, t, n) {
                "use strict";
                n(459)
            },
            374: function(e, t, n) {
                "use strict";
                n(725);
                var r = n(791),
                    o = 60103;
                if (60107, "function" === typeof Symbol && Symbol.for) {
                    var a = Symbol.for;
                    o = a("react.element"), a("react.fragment")
                }
                var i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                    u = Object.prototype.hasOwnProperty,
                    l = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function c(e, t, n) {
                    var r, a = {},
                        c = null,
                        s = null;
                    for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (s = t.ref), t) u.call(t, r) && !l.hasOwnProperty(r) && (a[r] = t[r]);
                    if (e && e.defaultProps)
                        for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: c,
                        ref: s,
                        props: a,
                        _owner: i.current
                    }
                }
                t.jsx = c, t.jsxs = c
            },
            117: function(e, t, n) {
                "use strict";
                var r = n(725),
                    o = 60103,
                    a = 60106;
                t.Fragment = 60107, t.StrictMode = 60108, t.Profiler = 60114;
                var i = 60109,
                    u = 60110,
                    l = 60112;
                t.Suspense = 60113;
                var c = 60115,
                    s = 60116;
                if ("function" === typeof Symbol && Symbol.for) {
                    var f = Symbol.for;
                    o = f("react.element"), a = f("react.portal"), t.Fragment = f("react.fragment"), t.StrictMode = f("react.strict_mode"), t.Profiler = f("react.profiler"), i = f("react.provider"), u = f("react.context"), l = f("react.forward_ref"), t.Suspense = f("react.suspense"), c = f("react.memo"), s = f("react.lazy")
                }
                var d = "function" === typeof Symbol && Symbol.iterator;

                function p(e) {
                    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
                    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
                }
                var h = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    m = {};

                function v(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }

                function g() {}

                function y(e, t, n) {
                    this.props = e, this.context = t, this.refs = m, this.updater = n || h
                }
                v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                    if ("object" !== typeof e && "function" !== typeof e && null != e) throw Error(p(85));
                    this.updater.enqueueSetState(this, e, t, "setState")
                }, v.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, g.prototype = v.prototype;
                var b = y.prototype = new g;
                b.constructor = y, r(b, v.prototype), b.isPureReactComponent = !0;
                var w = {
                        current: null
                    },
                    _ = Object.prototype.hasOwnProperty,
                    k = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function E(e, t, n) {
                    var r, a = {},
                        i = null,
                        u = null;
                    if (null != t)
                        for (r in void 0 !== t.ref && (u = t.ref), void 0 !== t.key && (i = "" + t.key), t) _.call(t, r) && !k.hasOwnProperty(r) && (a[r] = t[r]);
                    var l = arguments.length - 2;
                    if (1 === l) a.children = n;
                    else if (1 < l) {
                        for (var c = Array(l), s = 0; s < l; s++) c[s] = arguments[s + 2];
                        a.children = c
                    }
                    if (e && e.defaultProps)
                        for (r in l = e.defaultProps) void 0 === a[r] && (a[r] = l[r]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: i,
                        ref: u,
                        props: a,
                        _owner: w.current
                    }
                }

                function x(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === o
                }
                var S = /\/+/g;

                function C(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + e.replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }("" + e.key) : t.toString(36)
                }

                function P(e, t, n, r, i) {
                    var u = typeof e;
                    "undefined" !== u && "boolean" !== u || (e = null);
                    var l = !1;
                    if (null === e) l = !0;
                    else switch (u) {
                        case "string":
                        case "number":
                            l = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case o:
                                case a:
                                    l = !0
                            }
                    }
                    if (l) return i = i(l = e), e = "" === r ? "." + C(l, 0) : r, Array.isArray(i) ? (n = "", null != e && (n = e.replace(S, "$&/") + "/"), P(i, t, n, "", (function(e) {
                        return e
                    }))) : null != i && (x(i) && (i = function(e, t) {
                        return {
                            $$typeof: o,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(i, n + (!i.key || l && l.key === i.key ? "" : ("" + i.key).replace(S, "$&/") + "/") + e)), t.push(i)), 1;
                    if (l = 0, r = "" === r ? "." : r + ":", Array.isArray(e))
                        for (var c = 0; c < e.length; c++) {
                            var s = r + C(u = e[c], c);
                            l += P(u, t, n, s, i)
                        } else if (s = function(e) {
                                return null === e || "object" !== typeof e ? null : "function" === typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                            }(e), "function" === typeof s)
                            for (e = s.call(e), c = 0; !(u = e.next()).done;) l += P(u = u.value, t, n, s = r + C(u, c++), i);
                        else if ("object" === u) throw t = "" + e, Error(p(31, "[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t));
                    return l
                }

                function L(e, t, n) {
                    if (null == e) return e;
                    var r = [],
                        o = 0;
                    return P(e, r, "", "", (function(e) {
                        return t.call(n, e, o++)
                    })), r
                }

                function T(e) {
                    if (-1 === e._status) {
                        var t = e._result;
                        t = t(), e._status = 0, e._result = t, t.then((function(t) {
                            0 === e._status && (t = t.default, e._status = 1, e._result = t)
                        }), (function(t) {
                            0 === e._status && (e._status = 2, e._result = t)
                        }))
                    }
                    if (1 === e._status) return e._result;
                    throw e._result
                }
                var F = {
                    current: null
                };

                function O() {
                    var e = F.current;
                    if (null === e) throw Error(p(321));
                    return e
                }
                var A = {
                    ReactCurrentDispatcher: F,
                    ReactCurrentBatchConfig: {
                        transition: 0
                    },
                    ReactCurrentOwner: w,
                    IsSomeRendererActing: {
                        current: !1
                    },
                    assign: r
                };
                t.Children = {
                    map: L,
                    forEach: function(e, t, n) {
                        L(e, (function() {
                            t.apply(this, arguments)
                        }), n)
                    },
                    count: function(e) {
                        var t = 0;
                        return L(e, (function() {
                            t++
                        })), t
                    },
                    toArray: function(e) {
                        return L(e, (function(e) {
                            return e
                        })) || []
                    },
                    only: function(e) {
                        if (!x(e)) throw Error(p(143));
                        return e
                    }
                }, t.Component = v, t.PureComponent = y, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A, t.cloneElement = function(e, t, n) {
                    if (null === e || void 0 === e) throw Error(p(267, e));
                    var a = r({}, e.props),
                        i = e.key,
                        u = e.ref,
                        l = e._owner;
                    if (null != t) {
                        if (void 0 !== t.ref && (u = t.ref, l = w.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var c = e.type.defaultProps;
                        for (s in t) _.call(t, s) && !k.hasOwnProperty(s) && (a[s] = void 0 === t[s] && void 0 !== c ? c[s] : t[s])
                    }
                    var s = arguments.length - 2;
                    if (1 === s) a.children = n;
                    else if (1 < s) {
                        c = Array(s);
                        for (var f = 0; f < s; f++) c[f] = arguments[f + 2];
                        a.children = c
                    }
                    return {
                        $$typeof: o,
                        type: e.type,
                        key: i,
                        ref: u,
                        props: a,
                        _owner: l
                    }
                }, t.createContext = function(e, t) {
                    return void 0 === t && (t = null), (e = {
                        $$typeof: u,
                        _calculateChangedBits: t,
                        _currentValue: e,
                        _currentValue2: e,
                        _threadCount: 0,
                        Provider: null,
                        Consumer: null
                    }).Provider = {
                        $$typeof: i,
                        _context: e
                    }, e.Consumer = e
                }, t.createElement = E, t.createFactory = function(e) {
                    var t = E.bind(null, e);
                    return t.type = e, t
                }, t.createRef = function() {
                    return {
                        current: null
                    }
                }, t.forwardRef = function(e) {
                    return {
                        $$typeof: l,
                        render: e
                    }
                }, t.isValidElement = x, t.lazy = function(e) {
                    return {
                        $$typeof: s,
                        _payload: {
                            _status: -1,
                            _result: e
                        },
                        _init: T
                    }
                }, t.memo = function(e, t) {
                    return {
                        $$typeof: c,
                        type: e,
                        compare: void 0 === t ? null : t
                    }
                }, t.useCallback = function(e, t) {
                    return O().useCallback(e, t)
                }, t.useContext = function(e, t) {
                    return O().useContext(e, t)
                }, t.useDebugValue = function() {}, t.useEffect = function(e, t) {
                    return O().useEffect(e, t)
                }, t.useImperativeHandle = function(e, t, n) {
                    return O().useImperativeHandle(e, t, n)
                }, t.useLayoutEffect = function(e, t) {
                    return O().useLayoutEffect(e, t)
                }, t.useMemo = function(e, t) {
                    return O().useMemo(e, t)
                }, t.useReducer = function(e, t, n) {
                    return O().useReducer(e, t, n)
                }, t.useRef = function(e) {
                    return O().useRef(e)
                }, t.useState = function(e) {
                    return O().useState(e)
                }, t.version = "17.0.2"
            },
            791: function(e, t, n) {
                "use strict";
                e.exports = n(117)
            },
            184: function(e, t, n) {
                "use strict";
                e.exports = n(374)
            },
            727: function(e) {
                var t = function(e) {
                    "use strict";
                    var t, n = Object.prototype,
                        r = n.hasOwnProperty,
                        o = "function" === typeof Symbol ? Symbol : {},
                        a = o.iterator || "@@iterator",
                        i = o.asyncIterator || "@@asyncIterator",
                        u = o.toStringTag || "@@toStringTag";

                    function l(e, t, n) {
                        return Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }), e[t]
                    }
                    try {
                        l({}, "")
                    } catch (O) {
                        l = function(e, t, n) {
                            return e[t] = n
                        }
                    }

                    function c(e, t, n, r) {
                        var o = t && t.prototype instanceof v ? t : v,
                            a = Object.create(o.prototype),
                            i = new L(r || []);
                        return a._invoke = function(e, t, n) {
                            var r = f;
                            return function(o, a) {
                                if (r === p) throw new Error("Generator is already running");
                                if (r === h) {
                                    if ("throw" === o) throw a;
                                    return F()
                                }
                                for (n.method = o, n.arg = a;;) {
                                    var i = n.delegate;
                                    if (i) {
                                        var u = S(i, n);
                                        if (u) {
                                            if (u === m) continue;
                                            return u
                                        }
                                    }
                                    if ("next" === n.method) n.sent = n._sent = n.arg;
                                    else if ("throw" === n.method) {
                                        if (r === f) throw r = h, n.arg;
                                        n.dispatchException(n.arg)
                                    } else "return" === n.method && n.abrupt("return", n.arg);
                                    r = p;
                                    var l = s(e, t, n);
                                    if ("normal" === l.type) {
                                        if (r = n.done ? h : d, l.arg === m) continue;
                                        return {
                                            value: l.arg,
                                            done: n.done
                                        }
                                    }
                                    "throw" === l.type && (r = h, n.method = "throw", n.arg = l.arg)
                                }
                            }
                        }(e, n, i), a
                    }

                    function s(e, t, n) {
                        try {
                            return {
                                type: "normal",
                                arg: e.call(t, n)
                            }
                        } catch (O) {
                            return {
                                type: "throw",
                                arg: O
                            }
                        }
                    }
                    e.wrap = c;
                    var f = "suspendedStart",
                        d = "suspendedYield",
                        p = "executing",
                        h = "completed",
                        m = {};

                    function v() {}

                    function g() {}

                    function y() {}
                    var b = {};
                    l(b, a, (function() {
                        return this
                    }));
                    var w = Object.getPrototypeOf,
                        _ = w && w(w(T([])));
                    _ && _ !== n && r.call(_, a) && (b = _);
                    var k = y.prototype = v.prototype = Object.create(b);

                    function E(e) {
                        ["next", "throw", "return"].forEach((function(t) {
                            l(e, t, (function(e) {
                                return this._invoke(t, e)
                            }))
                        }))
                    }

                    function x(e, t) {
                        function n(o, a, i, u) {
                            var l = s(e[o], e, a);
                            if ("throw" !== l.type) {
                                var c = l.arg,
                                    f = c.value;
                                return f && "object" === typeof f && r.call(f, "__await") ? t.resolve(f.__await).then((function(e) {
                                    n("next", e, i, u)
                                }), (function(e) {
                                    n("throw", e, i, u)
                                })) : t.resolve(f).then((function(e) {
                                    c.value = e, i(c)
                                }), (function(e) {
                                    return n("throw", e, i, u)
                                }))
                            }
                            u(l.arg)
                        }
                        var o;
                        this._invoke = function(e, r) {
                            function a() {
                                return new t((function(t, o) {
                                    n(e, r, t, o)
                                }))
                            }
                            return o = o ? o.then(a, a) : a()
                        }
                    }

                    function S(e, n) {
                        var r = e.iterator[n.method];
                        if (r === t) {
                            if (n.delegate = null, "throw" === n.method) {
                                if (e.iterator.return && (n.method = "return", n.arg = t, S(e, n), "throw" === n.method)) return m;
                                n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                            }
                            return m
                        }
                        var o = s(r, e.iterator, n.arg);
                        if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, m;
                        var a = o.arg;
                        return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, m) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                    }

                    function C(e) {
                        var t = {
                            tryLoc: e[0]
                        };
                        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
                    }

                    function P(e) {
                        var t = e.completion || {};
                        t.type = "normal", delete t.arg, e.completion = t
                    }

                    function L(e) {
                        this.tryEntries = [{
                            tryLoc: "root"
                        }], e.forEach(C, this), this.reset(!0)
                    }

                    function T(e) {
                        if (e) {
                            var n = e[a];
                            if (n) return n.call(e);
                            if ("function" === typeof e.next) return e;
                            if (!isNaN(e.length)) {
                                var o = -1,
                                    i = function n() {
                                        for (; ++o < e.length;)
                                            if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                        return n.value = t, n.done = !0, n
                                    };
                                return i.next = i
                            }
                        }
                        return {
                            next: F
                        }
                    }

                    function F() {
                        return {
                            value: t,
                            done: !0
                        }
                    }
                    return g.prototype = y, l(k, "constructor", y), l(y, "constructor", g), g.displayName = l(y, u, "GeneratorFunction"), e.isGeneratorFunction = function(e) {
                        var t = "function" === typeof e && e.constructor;
                        return !!t && (t === g || "GeneratorFunction" === (t.displayName || t.name))
                    }, e.mark = function(e) {
                        return Object.setPrototypeOf ? Object.setPrototypeOf(e, y) : (e.__proto__ = y, l(e, u, "GeneratorFunction")), e.prototype = Object.create(k), e
                    }, e.awrap = function(e) {
                        return {
                            __await: e
                        }
                    }, E(x.prototype), l(x.prototype, i, (function() {
                        return this
                    })), e.AsyncIterator = x, e.async = function(t, n, r, o, a) {
                        void 0 === a && (a = Promise);
                        var i = new x(c(t, n, r, o), a);
                        return e.isGeneratorFunction(n) ? i : i.next().then((function(e) {
                            return e.done ? e.value : i.next()
                        }))
                    }, E(k), l(k, u, "Generator"), l(k, a, (function() {
                        return this
                    })), l(k, "toString", (function() {
                        return "[object Generator]"
                    })), e.keys = function(e) {
                        var t = [];
                        for (var n in e) t.push(n);
                        return t.reverse(),
                            function n() {
                                for (; t.length;) {
                                    var r = t.pop();
                                    if (r in e) return n.value = r, n.done = !1, n
                                }
                                return n.done = !0, n
                            }
                    }, e.values = T, L.prototype = {
                        constructor: L,
                        reset: function(e) {
                            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(P), !e)
                                for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                        },
                        stop: function() {
                            this.done = !0;
                            var e = this.tryEntries[0].completion;
                            if ("throw" === e.type) throw e.arg;
                            return this.rval
                        },
                        dispatchException: function(e) {
                            if (this.done) throw e;
                            var n = this;

                            function o(r, o) {
                                return u.type = "throw", u.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                            }
                            for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                                var i = this.tryEntries[a],
                                    u = i.completion;
                                if ("root" === i.tryLoc) return o("end");
                                if (i.tryLoc <= this.prev) {
                                    var l = r.call(i, "catchLoc"),
                                        c = r.call(i, "finallyLoc");
                                    if (l && c) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    } else if (l) {
                                        if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                    } else {
                                        if (!c) throw new Error("try statement without catch or finally");
                                        if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                    }
                                }
                            }
                        },
                        abrupt: function(e, t) {
                            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                                var o = this.tryEntries[n];
                                if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                    var a = o;
                                    break
                                }
                            }
                            a && ("break" === e || "continue" === e) && a.tryLoc <= t && t <= a.finallyLoc && (a = null);
                            var i = a ? a.completion : {};
                            return i.type = e, i.arg = t, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
                        },
                        complete: function(e, t) {
                            if ("throw" === e.type) throw e.arg;
                            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), m
                        },
                        finish: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), P(n), m
                            }
                        },
                        catch: function(e) {
                            for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                                var n = this.tryEntries[t];
                                if (n.tryLoc === e) {
                                    var r = n.completion;
                                    if ("throw" === r.type) {
                                        var o = r.arg;
                                        P(n)
                                    }
                                    return o
                                }
                            }
                            throw new Error("illegal catch attempt")
                        },
                        delegateYield: function(e, n, r) {
                            return this.delegate = {
                                iterator: T(e),
                                resultName: n,
                                nextLoc: r
                            }, "next" === this.method && (this.arg = t), m
                        }
                    }, e
                }(e.exports);
                try {
                    regeneratorRuntime = t
                } catch (n) {
                    "object" === typeof globalThis ? globalThis.regeneratorRuntime = t : Function("r", "regeneratorRuntime = r")(t)
                }
            },
            813: function(e, t) {
                "use strict";
                var n, r, o, a;
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var i = performance;
                    t.unstable_now = function() {
                        return i.now()
                    }
                } else {
                    var u = Date,
                        l = u.now();
                    t.unstable_now = function() {
                        return u.now() - l
                    }
                }
                if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var c = null,
                        s = null,
                        f = function e() {
                            if (null !== c) try {
                                var n = t.unstable_now();
                                c(!0, n), c = null
                            } catch (r) {
                                throw setTimeout(e, 0), r
                            }
                        };
                    n = function(e) {
                        null !== c ? setTimeout(n, 0, e) : (c = e, setTimeout(f, 0))
                    }, r = function(e, t) {
                        s = setTimeout(e, t)
                    }, o = function() {
                        clearTimeout(s)
                    }, t.unstable_shouldYield = function() {
                        return !1
                    }, a = t.unstable_forceFrameRate = function() {}
                } else {
                    var d = window.setTimeout,
                        p = window.clearTimeout;
                    if ("undefined" !== typeof console) {
                        var h = window.cancelAnimationFrame;
                        "function" !== typeof window.requestAnimationFrame && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), "function" !== typeof h && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")
                    }
                    var m = !1,
                        v = null,
                        g = -1,
                        y = 5,
                        b = 0;
                    t.unstable_shouldYield = function() {
                        return t.unstable_now() >= b
                    }, a = function() {}, t.unstable_forceFrameRate = function(e) {
                        0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : y = 0 < e ? Math.floor(1e3 / e) : 5
                    };
                    var w = new MessageChannel,
                        _ = w.port2;
                    w.port1.onmessage = function() {
                        if (null !== v) {
                            var e = t.unstable_now();
                            b = e + y;
                            try {
                                v(!0, e) ? _.postMessage(null) : (m = !1, v = null)
                            } catch (n) {
                                throw _.postMessage(null), n
                            }
                        } else m = !1
                    }, n = function(e) {
                        v = e, m || (m = !0, _.postMessage(null))
                    }, r = function(e, n) {
                        g = d((function() {
                            e(t.unstable_now())
                        }), n)
                    }, o = function() {
                        p(g), g = -1
                    }
                }

                function k(e, t) {
                    var n = e.length;
                    e.push(t);
                    e: for (;;) {
                        var r = n - 1 >>> 1,
                            o = e[r];
                        if (!(void 0 !== o && 0 < S(o, t))) break e;
                        e[r] = t, e[n] = o, n = r
                    }
                }

                function E(e) {
                    return void 0 === (e = e[0]) ? null : e
                }

                function x(e) {
                    var t = e[0];
                    if (void 0 !== t) {
                        var n = e.pop();
                        if (n !== t) {
                            e[0] = n;
                            e: for (var r = 0, o = e.length; r < o;) {
                                var a = 2 * (r + 1) - 1,
                                    i = e[a],
                                    u = a + 1,
                                    l = e[u];
                                if (void 0 !== i && 0 > S(i, n)) void 0 !== l && 0 > S(l, i) ? (e[r] = l, e[u] = n, r = u) : (e[r] = i, e[a] = n, r = a);
                                else {
                                    if (!(void 0 !== l && 0 > S(l, n))) break e;
                                    e[r] = l, e[u] = n, r = u
                                }
                            }
                        }
                        return t
                    }
                    return null
                }

                function S(e, t) {
                    var n = e.sortIndex - t.sortIndex;
                    return 0 !== n ? n : e.id - t.id
                }
                var C = [],
                    P = [],
                    L = 1,
                    T = null,
                    F = 3,
                    O = !1,
                    A = !1,
                    D = !1;

                function N(e) {
                    for (var t = E(P); null !== t;) {
                        if (null === t.callback) x(P);
                        else {
                            if (!(t.startTime <= e)) break;
                            x(P), t.sortIndex = t.expirationTime, k(C, t)
                        }
                        t = E(P)
                    }
                }

                function M(e) {
                    if (D = !1, N(e), !A)
                        if (null !== E(C)) A = !0, n(I);
                        else {
                            var t = E(P);
                            null !== t && r(M, t.startTime - e)
                        }
                }

                function I(e, n) {
                    A = !1, D && (D = !1, o()), O = !0;
                    var a = F;
                    try {
                        for (N(n), T = E(C); null !== T && (!(T.expirationTime > n) || e && !t.unstable_shouldYield());) {
                            var i = T.callback;
                            if ("function" === typeof i) {
                                T.callback = null, F = T.priorityLevel;
                                var u = i(T.expirationTime <= n);
                                n = t.unstable_now(), "function" === typeof u ? T.callback = u : T === E(C) && x(C), N(n)
                            } else x(C);
                            T = E(C)
                        }
                        if (null !== T) var l = !0;
                        else {
                            var c = E(P);
                            null !== c && r(M, c.startTime - n), l = !1
                        }
                        return l
                    } finally {
                        T = null, F = a, O = !1
                    }
                }
                var R = a;
                t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(e) {
                    e.callback = null
                }, t.unstable_continueExecution = function() {
                    A || O || (A = !0, n(I))
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return F
                }, t.unstable_getFirstCallbackNode = function() {
                    return E(C)
                }, t.unstable_next = function(e) {
                    switch (F) {
                        case 1:
                        case 2:
                        case 3:
                            var t = 3;
                            break;
                        default:
                            t = F
                    }
                    var n = F;
                    F = t;
                    try {
                        return e()
                    } finally {
                        F = n
                    }
                }, t.unstable_pauseExecution = function() {}, t.unstable_requestPaint = R, t.unstable_runWithPriority = function(e, t) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var n = F;
                    F = e;
                    try {
                        return t()
                    } finally {
                        F = n
                    }
                }, t.unstable_scheduleCallback = function(e, a, i) {
                    var u = t.unstable_now();
                    switch ("object" === typeof i && null !== i ? i = "number" === typeof(i = i.delay) && 0 < i ? u + i : u : i = u, e) {
                        case 1:
                            var l = -1;
                            break;
                        case 2:
                            l = 250;
                            break;
                        case 5:
                            l = 1073741823;
                            break;
                        case 4:
                            l = 1e4;
                            break;
                        default:
                            l = 5e3
                    }
                    return e = {
                        id: L++,
                        callback: a,
                        priorityLevel: e,
                        startTime: i,
                        expirationTime: l = i + l,
                        sortIndex: -1
                    }, i > u ? (e.sortIndex = i, k(P, e), null === E(C) && e === E(P) && (D ? o() : D = !0, r(M, i - u))) : (e.sortIndex = l, k(C, e), A || O || (A = !0, n(I))), e
                }, t.unstable_wrapCallback = function(e) {
                    var t = F;
                    return function() {
                        var n = F;
                        F = t;
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            F = n
                        }
                    }
                }
            },
            296: function(e, t, n) {
                "use strict";
                e.exports = n(813)
            }
        },
        t = {};

    function n(r) {
        var o = t[r];
        if (void 0 !== o) return o.exports;
        var a = t[r] = {
            exports: {}
        };
        return e[r](a, a.exports, n), a.exports
    }
    n.m = e, n.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return n.d(t, {
                a: t
            }), t
        }, n.d = function(e, t) {
            for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, n.f = {}, n.e = function(e) {
            return Promise.all(Object.keys(n.f).reduce((function(t, r) {
                return n.f[r](e, t), t
            }), []))
        }, n.u = function(e) {
            return "static/js/" + e + ".5ca91faa.chunk.js"
        }, n.miniCssF = function(e) {}, n.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        },
        function() {
            var e = {},
                t = "play:";
            n.l = function(r, o, a, i) {
                if (e[r]) e[r].push(o);
                else {
                    var u, l;
                    if (void 0 !== a)
                        for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                            var f = c[s];
                            if (f.getAttribute("src") == r || f.getAttribute("data-webpack") == t + a) {
                                u = f;
                                break
                            }
                        }
                    u || (l = !0, (u = document.createElement("script")).charset = "utf-8", u.timeout = 120, n.nc && u.setAttribute("nonce", n.nc), u.setAttribute("data-webpack", t + a), u.src = r), e[r] = [o];
                    var d = function(t, n) {
                            u.onerror = u.onload = null, clearTimeout(p);
                            var o = e[r];
                            if (delete e[r], u.parentNode && u.parentNode.removeChild(u), o && o.forEach((function(e) {
                                    return e(n)
                                })), t) return t(n)
                        },
                        p = setTimeout(d.bind(null, void 0, {
                            type: "timeout",
                            target: u
                        }), 12e4);
                    u.onerror = d.bind(null, u.onerror), u.onload = d.bind(null, u.onload), l && document.head.appendChild(u)
                }
            }
        }(), n.r = function(e) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, n.p = "/",
        function() {
            var e = {
                179: 0
            };
            n.f.j = function(t, r) {
                var o = n.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) r.push(o[2]);
                    else {
                        var a = new Promise((function(n, r) {
                            o = e[t] = [n, r]
                        }));
                        r.push(o[2] = a);
                        var i = n.p + n.u(t),
                            u = new Error;
                        n.l(i, (function(r) {
                            if (n.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                                var a = r && ("load" === r.type ? "missing" : r.type),
                                    i = r && r.target && r.target.src;
                                u.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", u.name = "ChunkLoadError", u.type = a, u.request = i, o[1](u)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, r) {
                    var o, a, i = r[0],
                        u = r[1],
                        l = r[2],
                        c = 0;
                    if (i.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (o in u) n.o(u, o) && (n.m[o] = u[o]);
                        if (l) l(n)
                    }
                    for (t && t(r); c < i.length; c++) a = i[c], n.o(e, a) && e[a] && e[a][0](), e[a] = 0
                },
                r = self.webpackChunkplay = self.webpackChunkplay || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        }(),
        function() {
            "use strict";
            var e = n(791),
                t = n(164);

            function r(e, t, n, r, o, a, i) {
                try {
                    var u = e[a](i),
                        l = u.value
                } catch (c) {
                    return void n(c)
                }
                u.done ? t(l) : Promise.resolve(l).then(r, o)
            }

            function o(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise((function(o, a) {
                        var i = e.apply(t, n);

                        function u(e) {
                            r(i, o, a, u, l, "next", e)
                        }

                        function l(e) {
                            r(i, o, a, u, l, "throw", e)
                        }
                        u(void 0)
                    }))
                }
            }
            var a = n(757),
                i = n.n(a),
                u = n(496),
                l = n.n(u);

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var s = function() {
                    function e(t) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), this.module = void 0, this.doneFlag = void 0, this.file = void 0, this.module = t, this.doneFlag = !1, this.file = null
                    }
                    var t, n, r;
                    return t = e, (n = [{
                        key: "read",
                        value: function(e, t, n) {
                            var r = this;
                            if (!this.file) throw new Error("No file set.");
                            this.doneFlag = !1, this.file.slice(t, t + n).arrayBuffer().then((function(t) {
                                r.module.HEAPU8.set(new Uint8Array(t), e), r.doneFlag = !0
                            }))
                        }
                    }, {
                        key: "getFileSize",
                        value: function() {
                            if (!this.file) throw new Error("No file set.");
                            return this.file.size
                        }
                    }, {
                        key: "isDone",
                        value: function() {
                            return this.doneFlag
                        }
                    }, {
                        key: "setFile",
                        value: function(e) {
                            this.file = e
                        }
                    }]) && c(t.prototype, n), r && c(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e
                }(),
                f = null,
                d = {
                    locateFile: function(e) {
                        return window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf("/")) + "/" + e
                    },
                    mainScriptUrlOrBlob: ""
                },
                p = function() {
                    var e = o(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return d.mainScriptUrlOrBlob = d.locateFile("Play.js"), e.next = 3, l()(d);
                                case 3:
                                    (f = e.sent).FS.mkdir("/work"), f.discImageDevice = new s(f), f.ccall("initVm", "", [], []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();

            function h(e) {
                for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                throw Error("[Immer] minified error nr: " + e + (n.length ? " " + n.map((function(e) {
                    return "'" + e + "'"
                })).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function m(e) {
                return !!e && !!e[oe]
            }

            function v(e) {
                return !!e && (function(e) {
                    if (!e || "object" != typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return n === Object || "function" == typeof n && Function.toString.call(n) === ae
                }(e) || Array.isArray(e) || !!e[re] || !!e.constructor[re] || E(e) || x(e))
            }

            function g(e, t, n) {
                void 0 === n && (n = !1), 0 === y(e) ? (n ? Object.keys : ie)(e).forEach((function(r) {
                    n && "symbol" == typeof r || t(r, e[r], e)
                })) : e.forEach((function(n, r) {
                    return t(r, n, e)
                }))
            }

            function y(e) {
                var t = e[oe];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : E(e) ? 2 : x(e) ? 3 : 0
            }

            function b(e, t) {
                return 2 === y(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }

            function w(e, t) {
                return 2 === y(e) ? e.get(t) : e[t]
            }

            function _(e, t, n) {
                var r = y(e);
                2 === r ? e.set(t, n) : 3 === r ? (e.delete(t), e.add(n)) : e[t] = n
            }

            function k(e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }

            function E(e) {
                return J && e instanceof Map
            }

            function x(e) {
                return ee && e instanceof Set
            }

            function S(e) {
                return e.o || e.t
            }

            function C(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = ue(e);
                delete t[oe];
                for (var n = ie(t), r = 0; r < n.length; r++) {
                    var o = n[r],
                        a = t[o];
                    !1 === a.writable && (a.writable = !0, a.configurable = !0), (a.get || a.set) && (t[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: a.enumerable,
                        value: e[o]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function P(e, t) {
                return void 0 === t && (t = !1), T(e) || m(e) || !v(e) || (y(e) > 1 && (e.set = e.add = e.clear = e.delete = L), Object.freeze(e), t && g(e, (function(e, t) {
                    return P(t, !0)
                }), !0)), e
            }

            function L() {
                h(2)
            }

            function T(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function F(e) {
                var t = le[e];
                return t || h(18, e), t
            }

            function O(e, t) {
                le[e] || (le[e] = t)
            }

            function A() {
                return K
            }

            function D(e, t) {
                t && (F("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function N(e) {
                M(e), e.p.forEach(R), e.p = null
            }

            function M(e) {
                e === K && (K = e.l)
            }

            function I(e) {
                return K = {
                    p: [],
                    l: K,
                    h: e,
                    m: !0,
                    _: 0
                }
            }

            function R(e) {
                var t = e[oe];
                0 === t.i || 1 === t.i ? t.j() : t.O = !0
            }

            function j(e, t) {
                t._ = t.p.length;
                var n = t.p[0],
                    r = void 0 !== e && e !== n;
                return t.h.g || F("ES5").S(t, e, r), r ? (n[oe].P && (N(t), h(4)), v(e) && (e = B(t, e), t.l || U(t, e)), t.u && F("Patches").M(n[oe].t, e, t.u, t.s)) : e = B(t, n, []), N(t), t.u && t.v(t.u, t.s), e !== ne ? e : void 0
            }

            function B(e, t, n) {
                if (T(t)) return t;
                var r = t[oe];
                if (!r) return g(t, (function(o, a) {
                    return z(e, r, t, o, a, n)
                }), !0), t;
                if (r.A !== e) return t;
                if (!r.P) return U(e, r.t, !0), r.t;
                if (!r.I) {
                    r.I = !0, r.A._--;
                    var o = 4 === r.i || 5 === r.i ? r.o = C(r.k) : r.o;
                    g(3 === r.i ? new Set(o) : o, (function(t, a) {
                        return z(e, r, o, t, a, n)
                    })), U(e, o, !1), n && e.u && F("Patches").R(r, n, e.u, e.s)
                }
                return r.o
            }

            function z(e, t, n, r, o, a) {
                if (m(o)) {
                    var i = B(e, o, a && t && 3 !== t.i && !b(t.D, r) ? a.concat(r) : void 0);
                    if (_(n, r, i), !m(i)) return;
                    e.m = !1
                }
                if (v(o) && !T(o)) {
                    if (!e.h.F && e._ < 1) return;
                    B(e, o), t && t.A.l || U(e, o)
                }
            }

            function U(e, t, n) {
                void 0 === n && (n = !1), e.h.F && e.m && P(t, n)
            }

            function W(e, t) {
                var n = e[oe];
                return (n ? S(n) : e)[t]
            }

            function V(e, t) {
                if (t in e)
                    for (var n = Object.getPrototypeOf(e); n;) {
                        var r = Object.getOwnPropertyDescriptor(n, t);
                        if (r) return r;
                        n = Object.getPrototypeOf(n)
                    }
            }

            function Q(e) {
                e.P || (e.P = !0, e.l && Q(e.l))
            }

            function H(e) {
                e.o || (e.o = C(e.t))
            }

            function q(e, t, n) {
                var r = E(t) ? F("MapSet").N(t, n) : x(t) ? F("MapSet").T(t, n) : e.g ? function(e, t) {
                    var n = Array.isArray(e),
                        r = {
                            i: n ? 1 : 0,
                            A: t ? t.A : A(),
                            P: !1,
                            I: !1,
                            D: {},
                            l: t,
                            t: e,
                            k: null,
                            o: null,
                            j: null,
                            C: !1
                        },
                        o = r,
                        a = ce;
                    n && (o = [r], a = se);
                    var i = Proxy.revocable(o, a),
                        u = i.revoke,
                        l = i.proxy;
                    return r.k = l, r.j = u, l
                }(t, n) : F("ES5").J(t, n);
                return (n ? n.A : A()).p.push(r), r
            }

            function G(e) {
                return m(e) || h(22, e),
                    function e(t) {
                        if (!v(t)) return t;
                        var n, r = t[oe],
                            o = y(t);
                        if (r) {
                            if (!r.P && (r.i < 4 || !F("ES5").K(r))) return r.t;
                            r.I = !0, n = $(t, o), r.I = !1
                        } else n = $(t, o);
                        return g(n, (function(t, o) {
                            r && w(r.t, t) === o || _(n, t, e(o))
                        })), 3 === o ? new Set(n) : n
                    }(e)
            }

            function $(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return C(e)
            }

            function Y() {
                function e(e, t) {
                    var n = o[e];
                    return n ? n.enumerable = t : o[e] = n = {
                        configurable: !0,
                        enumerable: t,
                        get: function() {
                            var t = this[oe];
                            return ce.get(t, e)
                        },
                        set: function(t) {
                            var n = this[oe];
                            ce.set(n, e, t)
                        }
                    }, n
                }

                function t(e) {
                    for (var t = e.length - 1; t >= 0; t--) {
                        var o = e[t][oe];
                        if (!o.P) switch (o.i) {
                            case 5:
                                r(o) && Q(o);
                                break;
                            case 4:
                                n(o) && Q(o)
                        }
                    }
                }

                function n(e) {
                    for (var t = e.t, n = e.k, r = ie(n), o = r.length - 1; o >= 0; o--) {
                        var a = r[o];
                        if (a !== oe) {
                            var i = t[a];
                            if (void 0 === i && !b(t, a)) return !0;
                            var u = n[a],
                                l = u && u[oe];
                            if (l ? l.t !== i : !k(u, i)) return !0
                        }
                    }
                    var c = !!t[oe];
                    return r.length !== ie(t).length + (c ? 0 : 1)
                }

                function r(e) {
                    var t = e.k;
                    if (t.length !== e.t.length) return !0;
                    var n = Object.getOwnPropertyDescriptor(t, t.length - 1);
                    if (n && !n.get) return !0;
                    for (var r = 0; r < t.length; r++)
                        if (!t.hasOwnProperty(r)) return !0;
                    return !1
                }
                var o = {};
                O("ES5", {
                    J: function(t, n) {
                        var r = Array.isArray(t),
                            o = function(t, n) {
                                if (t) {
                                    for (var r = Array(n.length), o = 0; o < n.length; o++) Object.defineProperty(r, "" + o, e(o, !0));
                                    return r
                                }
                                var a = ue(n);
                                delete a[oe];
                                for (var i = ie(a), u = 0; u < i.length; u++) {
                                    var l = i[u];
                                    a[l] = e(l, t || !!a[l].enumerable)
                                }
                                return Object.create(Object.getPrototypeOf(n), a)
                            }(r, t),
                            a = {
                                i: r ? 5 : 4,
                                A: n ? n.A : A(),
                                P: !1,
                                I: !1,
                                D: {},
                                l: n,
                                t: t,
                                k: o,
                                o: null,
                                O: !1,
                                C: !1
                            };
                        return Object.defineProperty(o, oe, {
                            value: a,
                            writable: !0
                        }), o
                    },
                    S: function(e, n, o) {
                        o ? m(n) && n[oe].A === e && t(e.p) : (e.u && function e(t) {
                            if (t && "object" == typeof t) {
                                var n = t[oe];
                                if (n) {
                                    var o = n.t,
                                        a = n.k,
                                        i = n.D,
                                        u = n.i;
                                    if (4 === u) g(a, (function(t) {
                                        t !== oe && (void 0 !== o[t] || b(o, t) ? i[t] || e(a[t]) : (i[t] = !0, Q(n)))
                                    })), g(o, (function(e) {
                                        void 0 !== a[e] || b(a, e) || (i[e] = !1, Q(n))
                                    }));
                                    else if (5 === u) {
                                        if (r(n) && (Q(n), i.length = !0), a.length < o.length)
                                            for (var l = a.length; l < o.length; l++) i[l] = !1;
                                        else
                                            for (var c = o.length; c < a.length; c++) i[c] = !0;
                                        for (var s = Math.min(a.length, o.length), f = 0; f < s; f++) a.hasOwnProperty(f) || (i[f] = !0), void 0 === i[f] && e(a[f])
                                    }
                                }
                            }
                        }(e.p[0]), t(e.p))
                    },
                    K: function(e) {
                        return 4 === e.i ? n(e) : r(e)
                    }
                })
            }
            var X, K, Z = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                J = "undefined" != typeof Map,
                ee = "undefined" != typeof Set,
                te = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                ne = Z ? Symbol.for("immer-nothing") : ((X = {})["immer-nothing"] = !0, X),
                re = Z ? Symbol.for("immer-draftable") : "__$immer_draftable",
                oe = Z ? Symbol.for("immer-state") : "__$immer_state",
                ae = ("undefined" != typeof Symbol && Symbol.iterator, "" + Object.prototype.constructor),
                ie = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames,
                ue = Object.getOwnPropertyDescriptors || function(e) {
                    var t = {};
                    return ie(e).forEach((function(n) {
                        t[n] = Object.getOwnPropertyDescriptor(e, n)
                    })), t
                },
                le = {},
                ce = {
                    get: function(e, t) {
                        if (t === oe) return e;
                        var n = S(e);
                        if (!b(n, t)) return function(e, t, n) {
                            var r, o = V(t, n);
                            return o ? "value" in o ? o.value : null === (r = o.get) || void 0 === r ? void 0 : r.call(e.k) : void 0
                        }(e, n, t);
                        var r = n[t];
                        return e.I || !v(r) ? r : r === W(e.t, t) ? (H(e), e.o[t] = q(e.A.h, r, e)) : r
                    },
                    has: function(e, t) {
                        return t in S(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(S(e))
                    },
                    set: function(e, t, n) {
                        var r = V(S(e), t);
                        if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
                        if (!e.P) {
                            var o = W(S(e), t),
                                a = null == o ? void 0 : o[oe];
                            if (a && a.t === n) return e.o[t] = n, e.D[t] = !1, !0;
                            if (k(n, o) && (void 0 !== n || b(e.t, t))) return !0;
                            H(e), Q(e)
                        }
                        return e.o[t] === n && "number" != typeof n && (void 0 !== n || t in e.o) || (e.o[t] = n, e.D[t] = !0, !0)
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== W(e.t, t) || t in e.t ? (e.D[t] = !1, H(e), Q(e)) : delete e.D[t], e.o && delete e.o[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var n = S(e),
                            r = Reflect.getOwnPropertyDescriptor(n, t);
                        return r ? {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: r.enumerable,
                            value: n[t]
                        } : r
                    },
                    defineProperty: function() {
                        h(11)
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function() {
                        h(12)
                    }
                },
                se = {};
            g(ce, (function(e, t) {
                se[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            })), se.deleteProperty = function(e, t) {
                return se.set.call(this, e, t, void 0)
            }, se.set = function(e, t, n) {
                return ce.set.call(this, e[0], t, n, e[0])
            };
            var fe = function() {
                    function e(e) {
                        var t = this;
                        this.g = te, this.F = !0, this.produce = function(e, n, r) {
                            if ("function" == typeof e && "function" != typeof n) {
                                var o = n;
                                n = e;
                                var a = t;
                                return function(e) {
                                    var t = this;
                                    void 0 === e && (e = o);
                                    for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++) i[u - 1] = arguments[u];
                                    return a.produce(e, (function(e) {
                                        var r;
                                        return (r = n).call.apply(r, [t, e].concat(i))
                                    }))
                                }
                            }
                            var i;
                            if ("function" != typeof n && h(6), void 0 !== r && "function" != typeof r && h(7), v(e)) {
                                var u = I(t),
                                    l = q(t, e, void 0),
                                    c = !0;
                                try {
                                    i = n(l), c = !1
                                } finally {
                                    c ? N(u) : M(u)
                                }
                                return "undefined" != typeof Promise && i instanceof Promise ? i.then((function(e) {
                                    return D(u, r), j(e, u)
                                }), (function(e) {
                                    throw N(u), e
                                })) : (D(u, r), j(i, u))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (i = n(e)) && (i = e), i === ne && (i = void 0), t.F && P(i, !0), r) {
                                    var s = [],
                                        f = [];
                                    F("Patches").M(e, i, s, f), r(s, f)
                                }
                                return i
                            }
                            h(21, e)
                        }, this.produceWithPatches = function(e, n) {
                            if ("function" == typeof e) return function(n) {
                                for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                                return t.produceWithPatches(n, (function(t) {
                                    return e.apply(void 0, [t].concat(o))
                                }))
                            };
                            var r, o, a = t.produce(e, n, (function(e, t) {
                                r = e, o = t
                            }));
                            return "undefined" != typeof Promise && a instanceof Promise ? a.then((function(e) {
                                return [e, r, o]
                            })) : [a, r, o]
                        }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                    }
                    var t = e.prototype;
                    return t.createDraft = function(e) {
                        v(e) || h(8), m(e) && (e = G(e));
                        var t = I(this),
                            n = q(this, e, void 0);
                        return n[oe].C = !0, M(t), n
                    }, t.finishDraft = function(e, t) {
                        var n = (e && e[oe]).A;
                        return D(n, t), j(void 0, n)
                    }, t.setAutoFreeze = function(e) {
                        this.F = e
                    }, t.setUseProxies = function(e) {
                        e && !te && h(20), this.g = e
                    }, t.applyPatches = function(e, t) {
                        var n;
                        for (n = t.length - 1; n >= 0; n--) {
                            var r = t[n];
                            if (0 === r.path.length && "replace" === r.op) {
                                e = r.value;
                                break
                            }
                        }
                        n > -1 && (t = t.slice(n + 1));
                        var o = F("Patches").$;
                        return m(e) ? o(e, t) : this.produce(e, (function(e) {
                            return o(e, t)
                        }))
                    }, e
                }(),
                de = new fe,
                pe = de.produce,
                he = (de.produceWithPatches.bind(de), de.setAutoFreeze.bind(de), de.setUseProxies.bind(de), de.applyPatches.bind(de), de.createDraft.bind(de), de.finishDraft.bind(de), pe);

            function me(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function ve(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function ge(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ve(Object(n), !0).forEach((function(t) {
                        me(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ve(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function ye(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var be = "function" === typeof Symbol && Symbol.observable || "@@observable",
                we = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                _e = {
                    INIT: "@@redux/INIT" + we(),
                    REPLACE: "@@redux/REPLACE" + we(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + we()
                    }
                };

            function ke(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var t = e; null !== Object.getPrototypeOf(t);) t = Object.getPrototypeOf(t);
                return Object.getPrototypeOf(e) === t
            }

            function Ee(e, t, n) {
                var r;
                if ("function" === typeof t && "function" === typeof n || "function" === typeof n && "function" === typeof arguments[3]) throw new Error(ye(0));
                if ("function" === typeof t && "undefined" === typeof n && (n = t, t = void 0), "undefined" !== typeof n) {
                    if ("function" !== typeof n) throw new Error(ye(1));
                    return n(Ee)(e, t)
                }
                if ("function" !== typeof e) throw new Error(ye(2));
                var o = e,
                    a = t,
                    i = [],
                    u = i,
                    l = !1;

                function c() {
                    u === i && (u = i.slice())
                }

                function s() {
                    if (l) throw new Error(ye(3));
                    return a
                }

                function f(e) {
                    if ("function" !== typeof e) throw new Error(ye(4));
                    if (l) throw new Error(ye(5));
                    var t = !0;
                    return c(), u.push(e),
                        function() {
                            if (t) {
                                if (l) throw new Error(ye(6));
                                t = !1, c();
                                var n = u.indexOf(e);
                                u.splice(n, 1), i = null
                            }
                        }
                }

                function d(e) {
                    if (!ke(e)) throw new Error(ye(7));
                    if ("undefined" === typeof e.type) throw new Error(ye(8));
                    if (l) throw new Error(ye(9));
                    try {
                        l = !0, a = o(a, e)
                    } finally {
                        l = !1
                    }
                    for (var t = i = u, n = 0; n < t.length; n++) {
                        (0, t[n])()
                    }
                    return e
                }

                function p(e) {
                    if ("function" !== typeof e) throw new Error(ye(10));
                    o = e, d({
                        type: _e.REPLACE
                    })
                }

                function h() {
                    var e, t = f;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new Error(ye(11));

                            function n() {
                                e.next && e.next(s())
                            }
                            return n(), {
                                unsubscribe: t(n)
                            }
                        }
                    })[be] = function() {
                        return this
                    }, e
                }
                return d({
                    type: _e.INIT
                }), (r = {
                    dispatch: d,
                    subscribe: f,
                    getState: s,
                    replaceReducer: p
                })[be] = h, r
            }

            function xe(e) {
                for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) {
                    var o = t[r];
                    0, "function" === typeof e[o] && (n[o] = e[o])
                }
                var a, i = Object.keys(n);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(t) {
                            var n = e[t];
                            if ("undefined" === typeof n(void 0, {
                                    type: _e.INIT
                                })) throw new Error(ye(12));
                            if ("undefined" === typeof n(void 0, {
                                    type: _e.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(ye(13))
                        }))
                    }(n)
                } catch (u) {
                    a = u
                }
                return function(e, t) {
                    if (void 0 === e && (e = {}), a) throw a;
                    for (var r = !1, o = {}, u = 0; u < i.length; u++) {
                        var l = i[u],
                            c = n[l],
                            s = e[l],
                            f = c(s, t);
                        if ("undefined" === typeof f) {
                            t && t.type;
                            throw new Error(ye(14))
                        }
                        o[l] = f, r = r || f !== s
                    }
                    return (r = r || i.length !== Object.keys(e).length) ? o : e
                }
            }

            function Se() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return 0 === t.length ? function(e) {
                    return e
                } : 1 === t.length ? t[0] : t.reduce((function(e, t) {
                    return function() {
                        return e(t.apply(void 0, arguments))
                    }
                }))
            }

            function Ce() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return function(e) {
                    return function() {
                        var n = e.apply(void 0, arguments),
                            r = function() {
                                throw new Error(ye(15))
                            },
                            o = {
                                getState: n.getState,
                                dispatch: function() {
                                    return r.apply(void 0, arguments)
                                }
                            },
                            a = t.map((function(e) {
                                return e(o)
                            }));
                        return r = Se.apply(void 0, a)(n.dispatch), ge(ge({}, n), {}, {
                            dispatch: r
                        })
                    }
                }
            }

            function Pe(e) {
                return function(t) {
                    var n = t.dispatch,
                        r = t.getState;
                    return function(t) {
                        return function(o) {
                            return "function" === typeof o ? o(n, r, e) : t(o)
                        }
                    }
                }
            }
            var Le = Pe();
            Le.withExtraArgument = Pe;
            var Te = Le,
                Fe = function() {
                    var e = function(t, n) {
                        return e = Object.setPrototypeOf || {
                            __proto__: []
                        }
                        instanceof Array && function(e, t) {
                            e.__proto__ = t
                        } || function(e, t) {
                            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
                        }, e(t, n)
                    };
                    return function(t, n) {
                        if ("function" !== typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                        function r() {
                            this.constructor = t
                        }
                        e(t, n), t.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Oe = function(e, t) {
                    var n, r, o, a, i = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                    return a = {
                        next: u(0),
                        throw: u(1),
                        return: u(2)
                    }, "function" === typeof Symbol && (a[Symbol.iterator] = function() {
                        return this
                    }), a;

                    function u(a) {
                        return function(u) {
                            return function(a) {
                                if (n) throw new TypeError("Generator is already executing.");
                                for (; i;) try {
                                    if (n = 1, r && (o = 2 & a[0] ? r.return : a[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, a[1])).done) return o;
                                    switch (r = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                                        case 0:
                                        case 1:
                                            o = a;
                                            break;
                                        case 4:
                                            return i.label++, {
                                                value: a[1],
                                                done: !1
                                            };
                                        case 5:
                                            i.label++, r = a[1], a = [0];
                                            continue;
                                        case 7:
                                            a = i.ops.pop(), i.trys.pop();
                                            continue;
                                        default:
                                            if (!(o = (o = i.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                                i = 0;
                                                continue
                                            }
                                            if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                                i.label = a[1];
                                                break
                                            }
                                            if (6 === a[0] && i.label < o[1]) {
                                                i.label = o[1], o = a;
                                                break
                                            }
                                            if (o && i.label < o[2]) {
                                                i.label = o[2], i.ops.push(a);
                                                break
                                            }
                                            o[2] && i.ops.pop(), i.trys.pop();
                                            continue
                                    }
                                    a = t.call(e, i)
                                } catch (u) {
                                    a = [6, u], r = 0
                                } finally {
                                    n = o = 0
                                }
                                if (5 & a[0]) throw a[1];
                                return {
                                    value: a[0] ? a[1] : void 0,
                                    done: !0
                                }
                            }([a, u])
                        }
                    }
                },
                Ae = function(e, t) {
                    for (var n = 0, r = t.length, o = e.length; n < r; n++, o++) e[o] = t[n];
                    return e
                },
                De = Object.defineProperty,
                Ne = Object.defineProperties,
                Me = Object.getOwnPropertyDescriptors,
                Ie = Object.getOwnPropertySymbols,
                Re = Object.prototype.hasOwnProperty,
                je = Object.prototype.propertyIsEnumerable,
                Be = function(e, t, n) {
                    return t in e ? De(e, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: n
                    }) : e[t] = n
                },
                ze = function(e, t) {
                    for (var n in t || (t = {})) Re.call(t, n) && Be(e, n, t[n]);
                    if (Ie)
                        for (var r = 0, o = Ie(t); r < o.length; r++) {
                            n = o[r];
                            je.call(t, n) && Be(e, n, t[n])
                        }
                    return e
                },
                Ue = function(e, t) {
                    return Ne(e, Me(t))
                },
                We = "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
                    if (0 !== arguments.length) return "object" === typeof arguments[0] ? Se : Se.apply(null, arguments)
                };
            "undefined" !== typeof window && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__;

            function Ve(e) {
                if ("object" !== typeof e || null === e) return !1;
                var t = Object.getPrototypeOf(e);
                if (null === t) return !0;
                for (var n = t; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
                return t === n
            }
            var Qe = function(e) {
                function t() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    var o = e.apply(this, n) || this;
                    return Object.setPrototypeOf(o, t.prototype), o
                }
                return Fe(t, e), Object.defineProperty(t, Symbol.species, {
                    get: function() {
                        return t
                    },
                    enumerable: !1,
                    configurable: !0
                }), t.prototype.concat = function() {
                    for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                    return e.prototype.concat.apply(this, t)
                }, t.prototype.prepend = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return 1 === e.length && Array.isArray(e[0]) ? new(t.bind.apply(t, Ae([void 0], e[0].concat(this)))) : new(t.bind.apply(t, Ae([void 0], e.concat(this))))
                }, t
            }(Array);

            function He() {
                return function(e) {
                    return function(e) {
                        void 0 === e && (e = {});
                        var t = e.thunk,
                            n = void 0 === t || t,
                            r = (e.immutableCheck, e.serializableCheck, new Qe);
                        n && (! function(e) {
                            return "boolean" === typeof e
                        }(n) ? r.push(Te.withExtraArgument(n.extraArgument)) : r.push(Te));
                        0;
                        return r
                    }(e)
                }
            }

            function qe(e, t) {
                function n() {
                    for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                    if (t) {
                        var o = t.apply(void 0, n);
                        if (!o) throw new Error("prepareAction did not return an object");
                        return ze(ze({
                            type: e,
                            payload: o.payload
                        }, "meta" in o && {
                            meta: o.meta
                        }), "error" in o && {
                            error: o.error
                        })
                    }
                    return {
                        type: e,
                        payload: n[0]
                    }
                }
                return n.toString = function() {
                    return "" + e
                }, n.type = e, n.match = function(t) {
                    return t.type === e
                }, n
            }

            function Ge(e) {
                var t, n = {},
                    r = [],
                    o = {
                        addCase: function(e, t) {
                            var r = "string" === typeof e ? e : e.type;
                            if (r in n) throw new Error("addCase cannot be called with two reducers for the same action type");
                            return n[r] = t, o
                        },
                        addMatcher: function(e, t) {
                            return r.push({
                                matcher: e,
                                reducer: t
                            }), o
                        },
                        addDefaultCase: function(e) {
                            return t = e, o
                        }
                    };
                return e(o), [n, r, t]
            }

            function $e(e, t, n, r) {
                void 0 === n && (n = []);
                var o, a = "function" === typeof t ? Ge(t) : [t, n, r],
                    i = a[0],
                    u = a[1],
                    l = a[2];
                if (function(e) {
                        return "function" === typeof e
                    }(e)) o = function() {
                    return he(e(), (function() {}))
                };
                else {
                    var c = he(e, (function() {}));
                    o = function() {
                        return c
                    }
                }

                function s(e, t) {
                    void 0 === e && (e = o());
                    var n = Ae([i[t.type]], u.filter((function(e) {
                        return (0, e.matcher)(t)
                    })).map((function(e) {
                        return e.reducer
                    })));
                    return 0 === n.filter((function(e) {
                        return !!e
                    })).length && (n = [l]), n.reduce((function(e, n) {
                        if (n) {
                            var r;
                            if (m(e)) return "undefined" === typeof(r = n(e, t)) ? e : r;
                            if (v(e)) return he(e, (function(e) {
                                return n(e, t)
                            }));
                            if ("undefined" === typeof(r = n(e, t))) {
                                if (null === e) return e;
                                throw Error("A case reducer on a non-draftable value must not return undefined")
                            }
                            return r
                        }
                        return e
                    }), e)
                }
                return s.getInitialState = o, s
            }
            var Ye = ["name", "message", "stack", "code"],
                Xe = function(e, t) {
                    this.payload = e, this.meta = t
                },
                Ke = function(e, t) {
                    this.payload = e, this.meta = t
                },
                Ze = function(e) {
                    if ("object" === typeof e && null !== e) {
                        for (var t = {}, n = 0, r = Ye; n < r.length; n++) {
                            var o = r[n];
                            "string" === typeof e[o] && (t[o] = e[o])
                        }
                        return t
                    }
                    return {
                        message: String(e)
                    }
                };

            function Je(e, t, n) {
                var r = qe(e + "/fulfilled", (function(e, t, n, r) {
                        return {
                            payload: e,
                            meta: Ue(ze({}, r || {}), {
                                arg: n,
                                requestId: t,
                                requestStatus: "fulfilled"
                            })
                        }
                    })),
                    o = qe(e + "/pending", (function(e, t, n) {
                        return {
                            payload: void 0,
                            meta: Ue(ze({}, n || {}), {
                                arg: t,
                                requestId: e,
                                requestStatus: "pending"
                            })
                        }
                    })),
                    a = qe(e + "/rejected", (function(e, t, r, o, a) {
                        return {
                            payload: o,
                            error: (n && n.serializeError || Ze)(e || "Rejected"),
                            meta: Ue(ze({}, a || {}), {
                                arg: r,
                                requestId: t,
                                rejectedWithValue: !!o,
                                requestStatus: "rejected",
                                aborted: "AbortError" === (null == e ? void 0 : e.name),
                                condition: "ConditionError" === (null == e ? void 0 : e.name)
                            })
                        }
                    })),
                    i = "undefined" !== typeof AbortController ? AbortController : function() {
                        function e() {
                            this.signal = {
                                aborted: !1,
                                addEventListener: function() {},
                                dispatchEvent: function() {
                                    return !1
                                },
                                onabort: function() {},
                                removeEventListener: function() {}
                            }
                        }
                        return e.prototype.abort = function() {
                            0
                        }, e
                    }();
                return Object.assign((function(e) {
                    return function(u, l, c) {
                        var s, f = (null == n ? void 0 : n.idGenerator) ? n.idGenerator(e) : function(e) {
                                void 0 === e && (e = 21);
                                for (var t = "", n = e; n--;) t += "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW" [64 * Math.random() | 0];
                                return t
                            }(),
                            d = new i,
                            p = new Promise((function(e, t) {
                                return d.signal.addEventListener("abort", (function() {
                                    return t({
                                        name: "AbortError",
                                        message: s || "Aborted"
                                    })
                                }))
                            })),
                            h = !1;
                        var m = function() {
                            return i = this, s = null, m = function() {
                                var i, s, m, v, g;
                                return Oe(this, (function(y) {
                                    switch (y.label) {
                                        case 0:
                                            return y.trys.push([0, 4, , 5]), v = null == (i = null == n ? void 0 : n.condition) ? void 0 : i.call(n, e, {
                                                getState: l,
                                                extra: c
                                            }), null === (b = v) || "object" !== typeof b || "function" !== typeof b.then ? [3, 2] : [4, v];
                                        case 1:
                                            v = y.sent(), y.label = 2;
                                        case 2:
                                            if (!1 === v) throw {
                                                name: "ConditionError",
                                                message: "Aborted due to condition callback returning false."
                                            };
                                            return h = !0, u(o(f, e, null == (s = null == n ? void 0 : n.getPendingMeta) ? void 0 : s.call(n, {
                                                requestId: f,
                                                arg: e
                                            }, {
                                                getState: l,
                                                extra: c
                                            }))), [4, Promise.race([p, Promise.resolve(t(e, {
                                                dispatch: u,
                                                getState: l,
                                                extra: c,
                                                requestId: f,
                                                signal: d.signal,
                                                rejectWithValue: function(e, t) {
                                                    return new Xe(e, t)
                                                },
                                                fulfillWithValue: function(e, t) {
                                                    return new Ke(e, t)
                                                }
                                            })).then((function(t) {
                                                if (t instanceof Xe) throw t;
                                                return t instanceof Ke ? r(t.payload, f, e, t.meta) : r(t, f, e)
                                            }))])];
                                        case 3:
                                            return m = y.sent(), [3, 5];
                                        case 4:
                                            return g = y.sent(), m = g instanceof Xe ? a(null, f, e, g.payload, g.meta) : a(g, f, e), [3, 5];
                                        case 5:
                                            return n && !n.dispatchConditionRejection && a.match(m) && m.meta.condition || u(m), [2, m]
                                    }
                                    var b
                                }))
                            }, new Promise((function(e, t) {
                                var n = function(e) {
                                        try {
                                            o(m.next(e))
                                        } catch (n) {
                                            t(n)
                                        }
                                    },
                                    r = function(e) {
                                        try {
                                            o(m.throw(e))
                                        } catch (n) {
                                            t(n)
                                        }
                                    },
                                    o = function(t) {
                                        return t.done ? e(t.value) : Promise.resolve(t.value).then(n, r)
                                    };
                                o((m = m.apply(i, s)).next())
                            }));
                            var i, s, m
                        }();
                        return Object.assign(m, {
                            abort: function(e) {
                                h && (s = e, d.abort())
                            },
                            requestId: f,
                            arg: e,
                            unwrap: function() {
                                return m.then(et)
                            }
                        })
                    }
                }), {
                    pending: o,
                    rejected: a,
                    fulfilled: r,
                    typePrefix: e
                })
            }

            function et(e) {
                if (e.meta && e.meta.rejectedWithValue) throw e.payload;
                if (e.error) throw e.error;
                return e.payload
            }
            Y();
            var tt = e.createContext(null);
            var nt = function(e) {
                    e()
                },
                rt = function() {
                    return nt
                };
            var ot = {
                notify: function() {},
                get: function() {
                    return []
                }
            };

            function at(e, t) {
                var n, r = ot;

                function o() {
                    i.onStateChange && i.onStateChange()
                }

                function a() {
                    n || (n = t ? t.addNestedSub(o) : e.subscribe(o), r = function() {
                        var e = rt(),
                            t = null,
                            n = null;
                        return {
                            clear: function() {
                                t = null, n = null
                            },
                            notify: function() {
                                e((function() {
                                    for (var e = t; e;) e.callback(), e = e.next
                                }))
                            },
                            get: function() {
                                for (var e = [], n = t; n;) e.push(n), n = n.next;
                                return e
                            },
                            subscribe: function(e) {
                                var r = !0,
                                    o = n = {
                                        callback: e,
                                        next: null,
                                        prev: n
                                    };
                                return o.prev ? o.prev.next = o : t = o,
                                    function() {
                                        r && null !== t && (r = !1, o.next ? o.next.prev = o.prev : n = o.prev, o.prev ? o.prev.next = o.next : t = o.next)
                                    }
                            }
                        }
                    }())
                }
                var i = {
                    addNestedSub: function(e) {
                        return a(), r.subscribe(e)
                    },
                    notifyNestedSubs: function() {
                        r.notify()
                    },
                    handleChangeWrapper: o,
                    isSubscribed: function() {
                        return Boolean(n)
                    },
                    trySubscribe: a,
                    tryUnsubscribe: function() {
                        n && (n(), n = void 0, r.clear(), r = ot)
                    },
                    getListeners: function() {
                        return r
                    }
                };
                return i
            }
            var it = "undefined" !== typeof window && "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? e.useLayoutEffect : e.useEffect;
            var ut = function(t) {
                var n = t.store,
                    r = t.context,
                    o = t.children,
                    a = (0, e.useMemo)((function() {
                        var e = at(n);
                        return e.onStateChange = e.notifyNestedSubs, {
                            store: n,
                            subscription: e
                        }
                    }), [n]),
                    i = (0, e.useMemo)((function() {
                        return n.getState()
                    }), [n]);
                it((function() {
                    var e = a.subscription;
                    return e.trySubscribe(), i !== n.getState() && e.notifyNestedSubs(),
                        function() {
                            e.tryUnsubscribe(), e.onStateChange = null
                        }
                }), [a, i]);
                var u = r || tt;
                return e.createElement(u.Provider, {
                    value: a
                }, o)
            };
            n(110), n(900);

            function lt() {
                return (0, e.useContext)(tt)
            }

            function ct(t) {
                void 0 === t && (t = tt);
                var n = t === tt ? lt : function() {
                    return (0, e.useContext)(t)
                };
                return function() {
                    return n().store
                }
            }
            var st = ct();

            function ft(e) {
                void 0 === e && (e = tt);
                var t = e === tt ? st : ct(e);
                return function() {
                    return t().dispatch
                }
            }
            var dt = ft(),
                pt = function(e, t) {
                    return e === t
                };

            function ht(t) {
                void 0 === t && (t = tt);
                var n = t === tt ? lt : function() {
                    return (0, e.useContext)(t)
                };
                return function(t, r) {
                    void 0 === r && (r = pt);
                    var o = n(),
                        a = function(t, n, r, o) {
                            var a, i = (0, e.useReducer)((function(e) {
                                    return e + 1
                                }), 0),
                                u = i[1],
                                l = (0, e.useMemo)((function() {
                                    return at(r, o)
                                }), [r, o]),
                                c = (0, e.useRef)(),
                                s = (0, e.useRef)(),
                                f = (0, e.useRef)(),
                                d = (0, e.useRef)(),
                                p = r.getState();
                            try {
                                if (t !== s.current || p !== f.current || c.current) {
                                    var h = t(p);
                                    a = void 0 !== d.current && n(h, d.current) ? d.current : h
                                } else a = d.current
                            } catch (m) {
                                throw c.current && (m.message += "\nThe error may be correlated with this previous error:\n" + c.current.stack + "\n\n"), m
                            }
                            return it((function() {
                                s.current = t, f.current = p, d.current = a, c.current = void 0
                            })), it((function() {
                                function e() {
                                    try {
                                        var e = r.getState();
                                        if (e === f.current) return;
                                        var t = s.current(e);
                                        if (n(t, d.current)) return;
                                        d.current = t, f.current = e
                                    } catch (m) {
                                        c.current = m
                                    }
                                    u()
                                }
                                return l.onStateChange = e, l.trySubscribe(), e(),
                                    function() {
                                        return l.tryUnsubscribe()
                                    }
                            }), [r, l]), a
                        }(t, r, o.store, o.subscription);
                    return (0, e.useDebugValue)(a), a
                }
            }
            var mt, vt = ht();
            mt = t.unstable_batchedUpdates, nt = mt;
            var gt = Je("init", o(i().mark((function e() {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, p();
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))),
                yt = Je("bootFile", function() {
                    var e = o(i().mark((function e(t, n) {
                        var r, o, a, u, l, c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = t.name, -1 !== (o = r.lastIndexOf("."))) {
                                        e.next = 6;
                                        break
                                    }
                                    return console.log("File name must have an extension."), n.rejectWithValue(null), e.abrupt("return");
                                case 6:
                                    if (".elf" !== r.substring(o)) {
                                        e.next = 27;
                                        break
                                    }
                                    return a = URL.createObjectURL(t), e.next = 11, fetch(a).then((function(e) {
                                        return e.ok ? e.blob() : null
                                    }));
                                case 11:
                                    if (null !== (u = e.sent)) {
                                        e.next = 15;
                                        break
                                    }
                                    return n.rejectWithValue(null), e.abrupt("return");
                                case 15:
                                    return e.t0 = Uint8Array, e.next = 18, u.arrayBuffer();
                                case 18:
                                    e.t1 = e.sent, l = new e.t0(e.t1), c = f.FS.open(r, "w+"), f.FS.write(c, l, 0, l.length, 0), f.FS.close(c), URL.revokeObjectURL(a), f.bootElf(r), e.next = 29;
                                    break;
                                case 27:
                                    f.discImageDevice.setFile(t), f.bootDiscImage(r);
                                case 29:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                bt = function(e) {
                    var t, n = He(),
                        r = e || {},
                        o = r.reducer,
                        a = void 0 === o ? void 0 : o,
                        i = r.middleware,
                        u = void 0 === i ? n() : i,
                        l = r.devTools,
                        c = void 0 === l || l,
                        s = r.preloadedState,
                        f = void 0 === s ? void 0 : s,
                        d = r.enhancers,
                        p = void 0 === d ? void 0 : d;
                    if ("function" === typeof a) t = a;
                    else {
                        if (!Ve(a)) throw new Error('"reducer" is a required argument, and must be a function or an object of functions that can be passed to combineReducers');
                        t = xe(a)
                    }
                    var h = u;
                    "function" === typeof h && (h = h(n));
                    var m = Ce.apply(void 0, h),
                        v = Se;
                    c && (v = We(ze({
                        trace: !1
                    }, "object" === typeof c && c)));
                    var g = [m];
                    return Array.isArray(p) ? g = Ae([m], p) : "function" === typeof p && (g = p(g)), Ee(t, f, v.apply(void 0, g))
                }({
                    reducer: {
                        play: $e({
                            value: "unknown"
                        }, (function(e) {
                            return e.addCase(gt.fulfilled, (function(e, t) {
                                return console.log("init"), e.value = "initialized", e
                            })).addCase(yt.fulfilled, (function(e, t) {
                                return e.value = "loaded", e
                            })).addCase(yt.rejected, (function(e, t) {
                                return e.value = "loading failed: ".concat(t.error.message), e
                            }))
                        }))
                    }
                }),
                wt = vt,
                _t = n(184);
            var kt = function() {
                    var e = wt((function(e) {
                            return e.play
                        })),
                        t = dt();
                    return console.log(e.value), null === f ? (0, _t.jsx)("div", {
                        children: "Loading..."
                    }) : (0, _t.jsxs)("div", {
                        children: [(0, _t.jsx)("input", {
                            type: "file",
                            onChange: function(e) {
                                if (e.target && e.target.files && 0 !== e.target.files.length) {
                                    var n = e.target.files[0];
                                    t(yt(n))
                                }
                            }
                        }), (0, _t.jsx)("span", {
                            className: "version",
                            children: "Version: ".concat("0.49-145-g6974bc95")
                        })]
                    })
                },
                Et = function(e) {
                    e && e instanceof Function && n.e(787).then(n.bind(n, 787)).then((function(t) {
                        var n = t.getCLS,
                            r = t.getFID,
                            o = t.getFCP,
                            a = t.getLCP,
                            i = t.getTTFB;
                        n(e), r(e), o(e), a(e), i(e)
                    }))
                };
            bt.dispatch(gt()), t.render((0, _t.jsx)(e.StrictMode, {
                children: (0, _t.jsx)(ut, {
                    store: bt,
                    children: (0, _t.jsx)(kt, {})
                })
            }), document.getElementById("root")), Et()
        }()
}();
//# sourceMappingURL=main.c1c87805.js.map