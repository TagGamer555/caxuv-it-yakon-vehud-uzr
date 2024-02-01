{
	//// TANGERINE ////
	const wtt = extend(UnitType, "wtt", {});
	wtt.constructor = () => extend(MechUnit, {});
	
	//// FACTIONS ////
	// TOX //
	const tox = extend(UnitType, "tox", {});
	tox.constructor = () => extend(CrawlUnit, {});
	
	//// ROLEPLAY ////
	// BLAST COMPOUND //
	const mechBc = extend(UnitType, "mech-bc", {});
	mechBc.constructor = () => extend(MechUnit, {});
	
	const bulkBc = extend(UnitType, "bulk-bc", {});
	bulkBc.constructor = () => extend(MechUnit, {});
	
	// PYRATITE //
	const mechPy = extend(UnitType, "mech-py", {});
	mechPy.constructor = () => extend(MechUnit, {});
	
	const bulkPy = extend(UnitType, "bulk-py", {});
	bulkPy.constructor = () => extend(MechUnit, {});
	
	// SURGE ALLOY //
	const mechSa = extend(UnitType, "mech-sa", {});
	mechSa.constructor = () => extend(MechUnit, {});
	
	const bulkSa = extend(UnitType, "bulk-sa", {});
	bulkSa.constructor = () => extend(MechUnit, {});
}