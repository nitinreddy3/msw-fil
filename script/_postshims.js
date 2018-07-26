function h$_hs_bytestring_long_long_uint_dec(x_a, x_b, buf_d, buf_o) {
    let c, ptr = buf_o, next_free;
    let bu8 = buf_d.u8;
    let x = h$ghcjsbn_mkBigNat_ww(x_a, x_b), q = [], r;

    // encode positive number as little-endian decimal
    do {
        r = h$ghcjsbn_quotRem_bw(q, x, 10);
        x = q;
        q = [];
        bu8[ptr++] = h$_hs_bytestring_digits[r];
    } while(!h$ghcjsbn_isZero_b(x));

    // reverse written digits;
    next_free = ptr--;
    while(buf_o < ptr) {
        c            = bu8[ptr];
        bu8[ptr--]   = bu8[buf_o];
        bu8[buf_o++] = c;
    }
    h$ret1 = (next_free);
    return (buf_d);
}

// Reload the browser on hot module replacements
// https://github.com/parcel-bundler/parcel/issues/289#issuecomment-379529297
if (process.env.NODE_ENV !== "production" && module && module.hot) {
  module.hot.dispose(() => {
    window.location.reload();
  });
}
