/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/newTundra.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useSnapshot } from "valtio"
import { useCustomization } from './src/context/Customization';
import { state } from './src/components/ColorPicker';

export function NewTundra(props) {
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)
  const { nodes, materials } = useGLTF('/models/newTundra.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Mesh143_M_2022_Toyota_Tundra_TRD_SR5_tread_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_tread} />
      <mesh geometry={nodes.Mesh54_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh56_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh52_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh53_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh57_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh58_M_2022_Toyota_Tundra_TRD_SR5_plastic_glossy_gray_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_glossy_gray} />
      <mesh geometry={nodes.Mesh59_M_2022_Toyota_Tundra_TRD_SR5_plastic_glossy_white_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_glossy_white} />
      <mesh geometry={nodes.Mesh45_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh49_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh50_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh51_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0001.geometry} material={materials.black} />
      <mesh geometry={nodes.Mesh46_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh47_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh48_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh29_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh31_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh37_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh32_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh33_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh34_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh35_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary} />
      <mesh geometry={nodes.Mesh36_M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective} />
      <mesh geometry={nodes.Mesh20_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh27_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh28_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh21_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh22_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh23_M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective} />
      <mesh geometry={nodes.Mesh24_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary} />
      <mesh geometry={nodes.Mesh25_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh42_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh43_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh44_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh39_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh40_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh95_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh101_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh102_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh103_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh104_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh105_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh96_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh99_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh97_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh98_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh112_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_white_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_white} />
      <mesh geometry={nodes.Mesh113_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_orange_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_orange} />
      <mesh geometry={nodes.Mesh114_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh115_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh116_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh106_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_white_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_white} />
      <mesh geometry={nodes.Mesh107_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_orange_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_orange} />
      <mesh geometry={nodes.Mesh108_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh109_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh110_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh111_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh16_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh14_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Hood.geometry} material={materials['BaseMtl.001']} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
      <mesh geometry={nodes.Hood001.geometry} material={materials.Slaughter} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
      <mesh geometry={nodes.Hood002.geometry} material={materials['BatLady.001']} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
      <mesh geometry={nodes.Hood003.geometry} material={materials['BrakeLine.001']} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
      <mesh geometry={nodes.Hood004.geometry} material={materials['Danger.001']} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
      <mesh geometry={nodes.Hood005.geometry} material={materials['Embers.002']} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
      <mesh geometry={nodes.Hood006.geometry} material={materials.SpiderID} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
      <mesh geometry={nodes.Hood007.geometry} material={materials.Fluid} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
      <mesh geometry={nodes.Hood008.geometry} material={materials['HotRods.001']} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
      <mesh geometry={nodes.Hood009.geometry} material={materials['Mayan.001']} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
      <mesh geometry={nodes.Hood010.geometry} material={materials.SeaBreeze} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
      <mesh geometry={nodes.Hood011.geometry} material={materials.ShapeShifter} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
      <mesh geometry={nodes.Hood012.geometry} material={materials['Silk.002']} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
      <mesh geometry={nodes.Hood013.geometry} material={materials.SnakeSkin} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
      <mesh geometry={nodes.Hood014.geometry} material={materials['Flare.001']} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
      <mesh geometry={nodes.Hood015.geometry} material={materials.Dominator} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
      <mesh geometry={nodes.Hood016.geometry} material={materials.TopGun} material-color={snap1.base.BaseMtl} visible={overlay === 17}/>
      <mesh geometry={nodes.Hood017.geometry} material={materials.Explosion} material-color={snap1.base.BaseMtl} visible={overlay === 18}/>
      <mesh geometry={nodes.Hood018.geometry} material={materials.WildWest} material-color={snap1.base.BaseMtl} visible={overlay === 19}/>
      <mesh geometry={nodes.Hood019.geometry} material={materials['Zombie.002']} material-color={snap1.base.BaseMtl} visible={overlay === 20}/>
      <mesh geometry={nodes.Mesh18_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh19_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh8_M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_mirror_reflective} />
      <mesh geometry={nodes.Mesh12_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_interior_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_interior} />
      <mesh geometry={nodes.Mesh9_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh10_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh11_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh72_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh73_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.BodyLeft.geometry} material={materials['BaseMtl.002']} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
      <mesh geometry={nodes.BodyLeft001.geometry} material={materials['Slaughter.001']} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
      <mesh geometry={nodes.BodyLeft002.geometry} material={materials['BatLady.002']} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
      <mesh geometry={nodes.BodyLeft003.geometry} material={materials['BrakeLine.002']} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
      <mesh geometry={nodes.BodyLeft004.geometry} material={materials['Danger.002']} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
      <mesh geometry={nodes.BodyLeft005.geometry} material={materials.Embers} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
      <mesh geometry={nodes.BodyLeft006.geometry} material={materials['SpiderID.001']} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
      <mesh geometry={nodes.BodyLeft007.geometry} material={materials['Fluid.001']} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
      <mesh geometry={nodes.BodyLeft008.geometry} material={materials.HotRods} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
      <mesh geometry={nodes.BodyLeft009.geometry} material={materials['Mayan.002']} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
      <mesh geometry={nodes.BodyLeft010.geometry} material={materials['SeaBreeze.004']} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
      <mesh geometry={nodes.BodyLeft011.geometry} material={materials['ShapeShifter.001']} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
      <mesh geometry={nodes.BodyLeft012.geometry} material={materials['Silk.001']} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
      <mesh geometry={nodes.BodyLeft013.geometry} material={materials['SnakeSkin.001']} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
      <mesh geometry={nodes.BodyLeft014.geometry} material={materials['Flare.002']} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
      <mesh geometry={nodes.BodyLeft015.geometry} material={materials['Dominator.002']} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
      <mesh geometry={nodes.BodyLeft016.geometry} material={materials['TopGun.001']} material-color={snap1.base.BaseMtl} visible={overlay === 17}/>
      <mesh geometry={nodes.BodyLeft017.geometry} material={materials['Explosion.002']} material-color={snap1.base.BaseMtl} visible={overlay === 18}/>
      <mesh geometry={nodes.BodyLeft018.geometry} material={materials['WildWest.001']} material-color={snap1.base.BaseMtl} visible={overlay === 19}/>
      <mesh geometry={nodes.BodyLeft019.geometry} material={materials['Zombie.001']} material-color={snap1.base.BaseMtl} visible={overlay === 20}/>
      <mesh geometry={nodes.BodyRight.geometry} material={materials.BaseMtl} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
      <mesh geometry={nodes.BodyRight001.geometry} material={materials['Slaughter.002']} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
      <mesh geometry={nodes.BodyRight002.geometry} material={materials.BatLady} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
      <mesh geometry={nodes.BodyRight003.geometry} material={materials.BrakeLine} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
      <mesh geometry={nodes.BodyRight004.geometry} material={materials.Danger} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
      <mesh geometry={nodes.BodyRight005.geometry} material={materials['Embers.001']} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
      <mesh geometry={nodes.BodyRight006.geometry} material={materials['SpiderID.002']} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
      <mesh geometry={nodes.BodyRight007.geometry} material={materials.Bluid} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
      <mesh geometry={nodes.BodyRight008.geometry} material={materials['HotRods.002']} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
      <mesh geometry={nodes.BodyRight009.geometry} material={materials.Mayan} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
      <mesh geometry={nodes.BodyRight010.geometry} material={materials['SeaBreeze.002']} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
      <mesh geometry={nodes.BodyRight011.geometry} material={materials['ShapeShifter.002']} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
      <mesh geometry={nodes.BodyRight012.geometry} material={materials.Silk} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
      <mesh geometry={nodes.BodyRight013.geometry} material={materials['SnakeSkin.002']} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
      <mesh geometry={nodes.BodyRight014.geometry} material={materials.Flare} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
      <mesh geometry={nodes.BodyRight015.geometry} material={materials['Dominator.001']} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
      <mesh geometry={nodes.BodyRight016.geometry} material={materials['TopGun.002']} material-color={snap1.base.BaseMtl} visible={overlay === 17}/>
      <mesh geometry={nodes.BodyRight017.geometry} material={materials['Explosion.001']} material-color={snap1.base.BaseMtl} visible={overlay === 18}/>
      <mesh geometry={nodes.BodyRight018.geometry} material={materials['WildWest.002']} material-color={snap1.base.BaseMtl} visible={overlay === 19}/>
      <mesh geometry={nodes.BodyRight019.geometry} material={materials.Zombie} material-color={snap1.base.BaseMtl} visible={overlay === 20}/>
      <mesh geometry={nodes.Mesh76_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0002.geometry} material={nodes.Mesh76_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0002.material} />
      <mesh geometry={nodes.Mesh77_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh74_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh75_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh64_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh65_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh66_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh67_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_red_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_red} />
      <mesh geometry={nodes.Mesh68_M_2022_Toyota_Tundra_TRD_SR5_glass_colored_red_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_colored_red} />
      <mesh geometry={nodes.Mesh69_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh70_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh71_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh85_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh86_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh78_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh79_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh80_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh81_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh82_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh83_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh84_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh91_M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary} />
      <mesh geometry={nodes.Mesh92_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh89_M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary} />
      <mesh geometry={nodes.Mesh90_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh93_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh94_M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary} />
      <mesh geometry={nodes.Mesh87_M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_black_primary} />
      <mesh geometry={nodes.Mesh88_M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_powdercoat_suspension} />
      <mesh geometry={nodes.Mesh60_M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_clear_headlights} />
      <mesh geometry={nodes.Mesh61_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_primary_0.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.Mesh62_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh63_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh121_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh122_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh123_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh124_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh125_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh126_M_2022_Toyota_Tundra_TRD_SR5_transparent_clipping_under.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_transparent_clipping_undercarriage} />
      <mesh geometry={nodes.Mesh130_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brak.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brakes} />
      <mesh geometry={nodes.Mesh127_M_2022_Toyota_Tundra_TRD_SR5_metal_brakes_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_brakes} />
      <mesh geometry={nodes.Mesh128_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh129_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh134_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brak.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brakes} />
      <mesh geometry={nodes.Mesh131_M_2022_Toyota_Tundra_TRD_SR5_metal_brakes_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_brakes} />
      <mesh geometry={nodes.Mesh132_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh133_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh139_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brak.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brakes} />
      <mesh geometry={nodes.Mesh140_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh141_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh142_M_2022_Toyota_Tundra_TRD_SR5_metal_brakes_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_brakes} />
      <mesh geometry={nodes.Mesh138_M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brak.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_paint_glossy_tertiary_brakes} />
      <mesh geometry={nodes.Mesh135_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh136_M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_brakes_rotors} />
      <mesh geometry={nodes.Mesh137_M_2022_Toyota_Tundra_TRD_SR5_metal_brakes_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_brakes} />
      <mesh geometry={nodes.Mesh119_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh120_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh117_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh118_M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_plastic_matte_primary} />
      <mesh geometry={nodes.Mesh1_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh2_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh3_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh4_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh5_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh6_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh7_M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_glass_tinted_windows} />
      <mesh geometry={nodes.Mesh148_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh150_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary} />
      <mesh geometry={nodes.Mesh149_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary} />
      <mesh geometry={nodes.Mesh147_M_2022_Toyota_Tundra_TRD_SR5_tread_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_tread} />
      <mesh geometry={nodes.Mesh144_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary} />
      <mesh geometry={nodes.Mesh145_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh146_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary} />
      <mesh geometry={nodes.Mesh151_M_2022_Toyota_Tundra_TRD_SR5_tread_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_tread} />
      <mesh geometry={nodes.Mesh152_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
      <mesh geometry={nodes.Mesh153_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary} />
      <mesh geometry={nodes.Mesh154_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary} />
      <mesh geometry={nodes.Mesh156_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_secondary} />
      <mesh geometry={nodes.Mesh158_M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_metal_rim_primary} />
      <mesh geometry={nodes.Mesh155_M_2022_Toyota_Tundra_TRD_SR5_tread_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_tread} />
      <mesh geometry={nodes.Mesh157_M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny_0.geometry} material={materials.M_2022_Toyota_Tundra_TRD_SR5_chrome_shiny} />
    </group>
  )
}

useGLTF.preload('/models/newTundra.glb')
