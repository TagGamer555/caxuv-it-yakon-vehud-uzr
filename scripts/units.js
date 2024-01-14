{
	//// TANGERINE ////
	const wtt = extend(UnitType, "wtt", {});
	wtt.constructor = () => extend(MechUnit, {});
	
	//// ROLEPLAY ////
	// BLAST //
	const mechBc = extend(UnitType, "mech-bc", {});
	mechBc.constructor = () => extend(MechUnit, {});
	const bulkBc = extend(UnitType, "bulk-bc", {});
	mechBc.constructor = () => extend(MechUnit, {});
}