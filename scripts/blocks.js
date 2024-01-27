{
	//// TANGERINE ////
	const drb = extend(PowerTurret, "drb", {});
	const frb = extend(PowerTurret, "frb", {});
	
	//// PRODUCTION ////
	//////// EXTRACTION ////
	const thoriumConcentrator = extend(GenericCrafter, "thorium-concentrator", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
	const berylliumExtractor = extend(GenericCrafter, "beryllium-extractor", {});
	const scrapMiner = extend(GenericCrafter, "scrap-miner", {});
	
	//// CRAFTING ////
	const arkyciteCrafter = extend(GenericCrafter, "arkycite-crafter", {});
	const ozoneSynthesizer = extend(GenericCrafter, "ozone-synthesizer", {});
	
	//// LIQUID ////
	const uc = extend(Conduit, "uc", {});
	
	//// DROID TURRETS ////
	const droidCopper = extend(ItemTurret, "droid-copper", {});
	const droidLead = extend(ItemTurret, "droid-lead", {});
	
	//// OTHER ////
	const surgeBlock = extend(Wall, "surge-block", {});
	const framedGlass = extend(Wall, "framed-glass", {});
	const reinforcedFramedGlass = extend(Wall, "reinforced-framed-glass", {});
}