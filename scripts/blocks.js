{
	//// TANGERINE ////
	const drb = extend(PowerTurret, "drb", {});
	const frb = extend(PowerTurret, "frb", {});
	
	//// PRODUCTION ////
	// EXTRACTION //
	const scrapMiner = extend(GenericCrafter, "scrap-miner", {});
	const berylliumExtractor = extend(GenericCrafter, "beryllium-extractor", {});
	const titaniumExtractor = extend(GenericCrafter, "titanium-extractor", {});
	const thoriumConcentrator = extend(GenericCrafter, "thorium-concentrator", {});
	
	//// CRAFTING ////
	const arkyciteCrafter = extend(GenericCrafter, "arkycite-crafter", {});
	const ozoneSynthesizer = extend(GenericCrafter, "ozone-synthesizer", {});
	
	//// LIQUID ////
	const uc = extend(Conduit, "uc", {});
	
	//// DROID TURRETS ////
	const droidCopper = extend(ItemTurret, "droid-copper", {});
	const droidLead = extend(ItemTurret, "droid-lead", {});
	const droidMetaglass = extend(ItemTurret, "droid-metaglass", {});
	const droidSand = extend(ItemTurret, "droid-sand", {});
	const droidCoal = extend(ItemTurret, "droid-coal", {});
	const droidTitanium = extend(ItemTurret, "droid-titanium", {});
	const droidThorium = extend(ItemTurret, "droid-thorium", {});
	
	//// EFFECT ////
	const basicCrate = extend(StorageBlock, "basic-crate", {});
	const intermediateCrate = extend(StorageBlock, "intermediate-crate", {});
	const advancedCrate = extend(StorageBlock, "advanced-crate", {});
	const superiorCrate = extend(StorageBlock, "superior-crate", {});
	const basicReinforcedCrate = extend(StorageBlock, "basic-reinforced-crate", {});
	const intermediateReinforcedCrate = extend(StorageBlock, "intermediate-reinforced-crate", {});
	const advancedReinforcedCrate = extend(StorageBlock, "advanced-reinforced-crate", {});
	const superiorReinforcedCrate = extend(StorageBlock, "superior-reinforced-crate", {});
	
	//// LOGIC ////
	const advMessage = extend(MessageBlock, "adv-message", {});
	
	//// DEFENSE ////
	const sorterWall = extend(ItemSource, "sorter-wall", {});
	
	//// OTHER ////
	const surgeBlock = extend(Wall, "surge-block", {});
	const unframedGlass = extend(Wall, "unframed-glass", {});
	const framedGlass = extend(Wall, "framed-glass", {});
	const reinforcedFramedGlass = extend(Wall, "reinforced-framed-glass", {});
}