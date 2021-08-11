Number.prototype.toPrice = function (fixed = 2) {
	return ((this as number) / 100).toFixed(fixed)
}
