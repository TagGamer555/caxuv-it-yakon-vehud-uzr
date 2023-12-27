{
	//region - everything
	const wtt = extend(UnitType, "wtt", {});
	wtt.constructor = () => extend(MechUnit, {});
	
	const mechBc = extend(UnitType, "mech-bc", {});
	mechBc.constructor = () => extend(MechUnit, {});
}