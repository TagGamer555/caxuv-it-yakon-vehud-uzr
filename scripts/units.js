{
	//region - everything
	const wtt = extend(UnitType, "wtt", {});
	wtt.constructor = () => extend(Mech, {});
	
	const mechBc = extend(UnitType, "mech-bc", {});
	mechBc.constructor = () => extend(Mech, {});
}